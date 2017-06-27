$(function () {
  var $ = window.jQuery;
  var app = window.app;
  
  //币种
  try{  $('#acCurTyp').selectloader({'curTypList': app.dict_cfg.dict_cfg_CurTyp}); }catch(e){}
  try{  app.registerTextHelper('acCurTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name'); }catch(e){}
	//证件类型
  $('#acCertTyp').selectloader({'acCertTypList': app.dicts.dict_17});
  app.registerTextHelper('acCertTyp', app.dicts.dict_17, 'code', 'name');
  
  var loNo=GetQueryString("loNo");
  var subNo=GetQueryString("subNo");

  app.$getJSON(app.LNSETLACINF_VIEW+'?loNo='+loNo + "&subNo=" + subNo).done(function (data) {
    if(app.isOK(data)){
      $('#setlacinf-form').deserializeObject(data);
      $("input[name='setlAmt1']").val(app.formatCurrencyM($("input[name='setlAmt']").val(),2));

      try{    	$('#acCurTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#acCertTyp').get(0).disabled = true;    }catch(e){}
        $('select').selectpicker('refresh');
    }
  });
  
  
  
  
  
  $('#commit').getModal({
      text: '确认资金出账信息？',
      size: 'modal-sm',
  }, function (modal) {
      var loNo = $("#loNo").val();
      var subNo = $("#subNo").val();
      var jqxhr = app.$post(app.LNSETLACINF_FUNDOUT + "/?loNo=" +loNo + "&subNo=" + subNo, {}, 'json');
      if (!jqxhr) {
          App.stopPageLoading();
          return;
      }
      jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
              app.alertOK('提交成功');
              window.location.href="/cc/loan/lnsetlacinf/lnsetlacinf-index.html";
              return;
          }
          app.alertError(data.errors.join('\n'));
      });
  });

});

function returnList(){
	 window.location.href="lnsetlacinf-index.html";
}
