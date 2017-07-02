+ function($, app) {
	  app.registerTextHelper('rpTyp', app.rpTyp, 'code', 'name');
	  app.registerTextHelper('athInd', app.athInd, 'code', 'name');
	  app.registerTextHelper('cuCertTyp', app.cuCertTyp, 'code', 'name');
	  app.registerTextHelper('curTyp', app.curTyp, 'code', 'name');
	  app.registerTextHelper('trChl', app.trChl, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  $('.athInd').selectloader({athIndList: app.athInd});
  $('.cuCertTyp').selectloader({certTypList: app.cuCertTyp});
  $('.rpTyp').selectloader({rpTypList:app.rpTyp});
  $('.curTyp').selectloader({'curTyp': app.curTyp});
  $('.trChl').selectloader({trChl: app.trChl});
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */
	  form.find('.rpTyp').selectloader({rpTypList:app.rpTyp});
	  form.find('.athInd').selectloader({athIndList:app.athInd});
	  form.find('.cuCertTyp').selectloader({certTypList: app.cuCertTyp});
	  form.find('.curTyp').selectloader({'curTyp':app.curTyp});	  
	  app.bindFormValidation(form);

    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });
  };
  
  /**
   * 修改存款账户交易
   */ 
  $('#edit').getModal({
	  selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore:function(){
	    	var athInd = $('[type=radio]:checked').data('athind');
	    	var athNo = $('[type=radio]:checked').data('id');	
	    	if(athInd == '授权已出账'){
	    		  app.alertError('已出账不能进行编辑！');
	    	  }else{
	  			window.location.href="lndeptrdinf-trade.html?operatH=edit&athNo="+athNo;
	  	    }
	    	  }
  });
  $('#view').getModal({
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore:function () {
	    	var athNo = $('[type=radio]:checked').data('id');
	      window.location.href="lndeptrdinf-trade.html?operatH=view&athNo="+athNo;
	    }
});

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    title:'删除存款账户交易信息',
    textArray: '确定要删除该条存款账户交易信息吗？',
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
        url: app.LNDEPTRDINF_REMOVE+athNo,
        text: '删除成功',
        isEasyModal: true
      }, app);
  });
});
