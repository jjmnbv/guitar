+ function($, app) {
	  app.registerTextHelper('rtChgTyp', app.rtChgTyp, 'code', 'name');
	  app.registerTextHelper('loPayTyp', app.loPayTyp, 'code', 'name');
	  app.registerTextHelper('ratTyp', app.ratTyp, 'code', 'name');
	  app.registerTextHelper('athInd', app.athInd, 'code', 'name');
	  app.registerTextHelper('loPayCde', app.loPayCde, 'code', 'name');
	  app.registerTextHelper('ratMod', app.ratMod, 'code', 'name');
	  app.registerTextHelper('rtChgPlTyp', app.rtChgPlTyp, 'code', 'name');
	  app.registerTextHelper('valTyp', app.valTyp, 'code', 'name');
	  app.registerTextHelper('loPayPlTyp', app.rtChgPlTyp, 'code', 'name');
	  app.registerTextHelper('exdPlTyp', app.exdPlTyp, 'code', 'name');
	  app.registerTextHelper('baRtTyp', app.baRtTyp, 'code', 'name');
}(window.jQuery, window.app);


$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  $(".form-exdapp-hidden").hide();
  
  
  //动态字典转换   
  $('.loPayTyp').selectloader({'loPayTyp': app.loPayTyp});
  $('.loPayCde').selectloader({'loPayCde': app.loPayCde});
  $('.athInd').selectloader({'athInd': app.athInd});
  $('.ratTyp').selectloader({'ratTyp': app.ratTyp});
  $('.rtChgTyp').selectloader({'rtChgTyp': app.rtChgTyp});
  $('.select-ratMod').selectloader({'ratModList': app.ratMod});
  $('.select-rtChgPlTyp').selectloader({'rtChgPlTypList': app.rtChgPlTyp});
  $('.select-valTyp').selectloader({'valTypList': app.valTyp});
  $('.select-loPayPlTyp').selectloader({'loPayPlTypList': app.exdPlTyp});
  $('.select-exdPlTyp').selectloader({'exdPlTypList': app.exdPlTyp});
  $('.select-baRtTyp').selectloader({'baRtTypList': app.baRtTyp});
  
 
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  
	 /* form.find('.loPayTyp').selectloader({'loPayTyp':app.dicts.dict_3010});
	  form.find('.loPayCde').selectloader({'loPayCde':app.dicts.dict_3011});
	  form.find('.athInd').selectloader({'athInd':app.dicts.dict_3016});
	  form.find('.ratTyp').selectloader({'ratTyp':app.dicts.dict_3005});
	  form.find('.rtChgTyp').selectloader({'rtChgTyp':app.dicts.dict_3018});
	  form.find('.ratMod').selectloader({'ratMod':app.dicts.dict_3017});
	  form.find('.rtChgPlTyp').selectloader({'rtChgPlTyp':app.dicts.dict_3006});
	  form.find('.valTyp').selectloader({'valTyp':app.dicts.dict_3033});
	  form.find('.loPayPlTyp').selectloader({'loPayPlTyp':app.dicts.dict_3006});
	  form.find('.exdPlTyp').selectloader({'exdPlTyp':app.dicts.dict_3006});
	  $('.baRtTyp').selectloader({'baRtTyp': app.dict_cfg.dict_cfg_RatTyp});*/
	  
    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });
    //展期金额格式化
    $('[name=exdAmtl]').on('change',function () {
        var $this = $(this);
        if($this.val().indexOf(',') != -1){
            var Mo = app.unformatMoney($this.val());
            $this.val(app.formatCurrencyM(Mo,2));
            $('[name=exdAmt]').val(app.unformatMoney($this.val()));
        }else{
            $this.val(app.formatCurrencyM($this.val(),2));
            $('[name=exdAmt]').val(app.unformatMoney($this.val()));
        }
    });
    //基准利率、执行利率、罚息利率格式化
    function fomatpercent(showname,hidename){
    	    showname.on('change',function () {
            var $this = $(this);
            if($this.val().indexOf('%') != -1){
              var valNew = app.unformatPercent($this.val());
              $this.val(app.formatPercent(valNew*100));
              hidename.val(app.unformatPercent($this.val()));
            }else{
              $this.val(app.formatPercent($this.val()));
              hidename.val(app.unformatPercent($this.val()));
            }
         });
    }
    fomatpercent($('[name=baRtl]'),$('[name=baRt]'));
    fomatpercent($('[name=exRtl]'),$('[name=exRt]'));
    fomatpercent($('[name=ovRtl]'),$('[name=ovRt]'));
    app.bindFormValidation(form);
   
  };
  
  /**
   * 修改贷款展期申请信息
   */
	 $('#edit').getModal({
		   selector: function () {
		     return !!$('[type=radio]:checked').length;
		   },
		   compileBefore:function () {
		       var id = $('[type=radio]:checked').data('id');
		       var athInd = $('[type=radio]:checked').data('athind');
		       if(athInd=='授权已出账'){
		    	   app.alertError('已出账不能修改！');
		       }else{
		    	   window.location.href="lnexdapp-edit.html?operatH=edit&athNo="+id;   
		    	}
		   }
	 });
	 $('#view').getModal({
		    selector: function () {
		      return !!$('[type=radio]:checked').length;
		    },
		    compileBefore:function () {
		      var id = $('[type=radio]:checked').data('id');
		      window.location.href="lnexdapp-edit.html?operatH=view&athNo="+id;
		    }
	});

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    title:'删除贷款展期申请信息',
	textArray: '确定要删除该条贷款展期申请信息吗？',
    size: 'modal-sm',
    noHandleArray:['授权已出账'],
    noHandle:'已出账不能进行删除！',
    selector: function () {
    	 if($('[type=radio]:checked').length>0){
             return ($('[type=radio]:checked').data('athind')) //返回状态码
         }
    }
  }, function (modal) {
    var athNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNEXDAPP_REMOVE+athNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
