+ function($, app) {
	 app.registerTextHelper('rrPrInd', app.rrPrInd, 'code', 'name');  
	 app.registerTextHelper('athInd', app.athInd, 'code', 'name'); 
}(window.jQuery, window.app);
$(function () {
  var $=window.jQuery;
  var app = window.app;
  
  $('.rrPrInd').selectloader({rrPrIndList:app.rrPrInd});
  $('.athInd').selectloader({athIndList:app.athInd});

  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	// 初始化日历插件
	    form.find(".date-picker-page").datepicker({
	      rtl: App.isRTL(),
	      orientation: "left",
	      autoclose: !0,
	      format: "yyyy-mm-dd",
	      'start-date': "+0d",
	      language: 'zh-CN'
	    });  
   app.bindFormValidation(form);
   
  };
 

  
  /**
   * 修改贷款减免表
   */
	  $('#edit').getModal({
		    selector: function () {
		      return !!$('[type=radio]:checked').length;
		    },
		    compileBefore: function () {
		      var athNo = $('[type=radio]:checked').data('id');
		      var loNo  = $('[type=radio]:checked').data('lono');
		      var rrPrInd=$('[type=radio]:checked').data('rrprind');
		      var athInd = $('[type=radio]:checked').data('athind');
		      if(athInd == '授权已出账'){
	    		  app.alertError('已出账不能进行编辑！');
	    		  return;
	    	  }else{
		          window.location.href="lnrrinf-edit.html?operatH=edit&athNo="+athNo+"&loNo="+loNo+"&rrPrInd="+rrPrInd;
	    	  }
		    }
		  });
	  $('#view').getModal({
		    selector: function () {
		      return !!$('[type=radio]:checked').length;
		    },
		    compileBefore:function () {
	    	  var athNo = $('[type=radio]:checked').data('id');
		      var loNo  = $('[type=radio]:checked').data('lono');
		      var rrPrInd=$('[type=radio]:checked').data('rrprind');
		      var athInd = $('[type=radio]:checked').data('athind');
		      window.location.href="lnrrinf-edit.html?operatH=view&athNo="+athNo+"&loNo="+loNo+"&rrPrInd="+rrPrInd;
		    }
	});
   
  /**
   * 删除贷款减免表
   */
  $('#delete').getModal({
		title:'删除贷款减免信息',
		textArray: '确定要删除该条贷款减免信息吗？',
	    size: 'modal-sm',
	    noHandleArray:['授权已出账'],
	    noHandle:'已出账不能进行删除！',
	    selector: function () {
	    	 if($('[type=radio]:checked').length>0){
	             return ($('[type=radio]:checked').data('athind')) //返回状态码
	         }
	    }
	  }, function (modal) {
		  var athNo = $('[type=radio]:checked').data('id');
	    app.context.submit({
	      modal: modal,
	      url: app.LNRRINF_REMOVE+athNo,
	      text: '删除成功',
	      isEasyModal: true
	    }, app);
	  });
});




