$(function () {
  var $ = window.jQuery;
  var app = window.app;

  
  $('#cuCertTyp').selectloader({"cuCertTypList": app.dicts.dict_17});
  $('#curTyp').selectloader({'curTypList': app.dict_cfg.dict_cfg_CurTyp}); 
  $('#trCd').selectloader({'trCdList': app.dict_cfg.dict_cfg_TrTyp});
  app.registerTextHelper('athInd', app.dicts.dict_3016, 'code', 'name');  
  app.registerTextHelper('cuCertTyp', app.dicts.dict_17, 'code', 'name');  
  app.registerTextHelper('rpTyp', app.dicts.dict_3025, 'code', 'name');
  app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');  
  app.registerTextHelper('trChl', app.dicts.dict_3028, 'code', 'name');
  
  var cuCertTyp= GetQueryString("cuCertTyp");
  var cuCertId = GetQueryString("cuCertId");
  var curTyp   = GetQueryString("curTyp");
  var loNo  = GetQueryString("valAcNo");
  datas={
		  'cuCertTyp':cuCertTyp,
		  'cuCertId':cuCertId
  }
  
  //内部存款账户信息
  
  app.$getJSON(app.LNDEPINF_VIEW,datas).done(function(data) {
      if(app.isOK(data)){
          $('#lndepdtl-form').deserializeObject(data);
          $("[name='depSa1']").val(app.formatCurrencyM($("[name='depSa']").val()));
          $("select[name='curTyp']").attr('disabled',true);
          $("select[name='cuCertTyp']").attr('disabled',true);
          //字典只读
          $('select').selectpicker('refresh');
      }
  });
  
  $("#lnde-cctyp").val(cuCertTyp);
  $("#lnde-cctid").val(cuCertId);
  $("#lnde-athid").val('1');
  $("#lnde-curtyp").val(curTyp);
  $("#lndep-cctyp").val(cuCertTyp);
  $("#lndep-cctid").val(cuCertId);
  $("#lndep-curtyp").val(curTyp);
  $("#lndep-valacno").val(loNo);
  
  var initedTab = [];
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var targetPane = $(e.target).attr('href');
      if($.inArray(targetPane, initedTab)==-1){
          initedTab.push(targetPane);
          if($(targetPane).find('.pagination-container').size()) {
              $(targetPane).pagination({
                  "first-store": app.firstStore
              });
          }
          dataJson(app.LNLOINF_ENTBRF + "?loNo=" + loNo, $('#lnactentl-list-template').html(), $('#dealRecord') );
      }
  })
  
  $('#confirmQuery').click(function () {
      var url = $('#form-entbrf').attr('action');
      var data = $('#form-entbrf').serialize();
      dataJson(url+'?'+data, $('#lnactentl-list-template').html(), $('#dealRecord') );
      $('.protlet-ri').hide();
  });
  $('.protlet-ri').hide();
  $('#reset').click(function () {
      $("[name='acDt']").val('');
      $("[name='trCd']").val('');
      $('select').selectpicker('refresh');
  });
  
  function dataJson(url, template, container) {
	    app.$getJSON(url).done(function (res) {
	        if(app.isOK(res)){
	            var tpl = Handlebars.compile(template);
	            var html = tpl(res);
	            container.html(html);
	            $('.list-group').delegate('.td-record','click',function () {
	                $('.list-group a').removeClass('td-record');
	                var buzSeqNo = $(this).data('no');
	                $('.protlet-ri').show();
	                app.$getJSON(app.LNLOINF_ENTLIST + "?buzSeqNo=" + buzSeqNo).done(function (res) {
	                    if(app.isOK(res)){
	                        $('.list-group a').addClass('td-record');
	                        var tpl = Handlebars.compile($('#lnactentl-page-template').html());
	                        var html = tpl(res);
	                        $('#dealChannel').html(html);

	                        var tpl2 = Handlebars.compile($('#lnactentl-mess-template').html());
	                        var html2 = tpl2(res.content[0]);
	                        $('#dealMess').html(html2);
	                    }else{
	                        alertError(data.errors.join(','));
	                        $('.list-group a').addClass('td-record');
	                    }

	                });
	            })
	        }
	    });
	}
});
