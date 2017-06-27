+ function($, app) {
	app.registerTextHelper('payOrdSts', app.payOrdSts, 'code', 'name');
  
  $('.payOrdSts').selectloader({'payOrdStsList': app.payOrdSts});
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	form.find('.payOrdSts').selectloader({'payOrdStsList': app.payOrdSts});
    app.bindFormValidation(form);
    validatorNotExists(form);
  };

  /**
   * 添加还款顺序
   */
  $('#add').getModal({
    title: '新增还款顺序',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
	  if($("#parpayord-form-add").valid()){
		  var par=$("#parpayord-form-add").serializeObject();
		  var jqxhr=app.$post(app.PARPAYORD_CREATE,par);
		  if(!jqxhr){
			  App.stopPageLoading();
	          return;
		  }
		  jqxhr.done(function(data){
			  App.stopPageLoading();
	          if (app.isOK(data)) {
	              app.alertOK('已新增成功还款方式配置信息！');
	              setTimeout(function (){
	                  var  payOrdCd= data.payOrdCd;  
	                  window.location.href="parPayOrd-edit.html?payOrdCd="+payOrdCd;
	              },2000);
	              return;
	          }
	          app.alertError(data.errors.join('\n'));
		  });
	  }
  });

  /**
   * 校验还款顺序编码的唯一性
   */
  
  var validatorNotExists = function (form) {
	     $("input[name='payOrdCd']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.PARPAYORD_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 payOrdCd:function(){
	        		  return form.find('[name="payOrdCd"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该种还款顺序编码已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };
  
  /**
   * 修改还款顺序
   */
  $('#edit').getModal({
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore: function () {
      var payOrdCd = $('[type=radio]:checked').data('id');
      window.location.href="parPayOrd-edit.html?payOrdCd="+payOrdCd;
    }
  });


  /**
   * 删除还款顺序
   */
  $('#delete').getModal({
    text: '确定要删除该条还款顺序吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
	  var payOrdCd=$('[type=radio]:checked').data('id');
	  app.context.submit({
      modal: modal,
      url: app.PARPAYORD_REMOVE+payOrdCd,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

}(window.jQuery, window.app);
