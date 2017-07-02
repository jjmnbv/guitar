+ function($, app) {
	app.registerTextHelper('curSts', app.curSts, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  
  $('.curSts').selectloader({curStsList:app.curSts});
  $('.intDays').selectloader({intDaysList:app.intDaysList});
  $('.intPerNum').selectloader({intPerNumList:app.intPerNumList});
 
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  form.find('.curSts').selectloader({curStsList:app.curSts});
	  form.find('.intDays').selectloader({intDaysList:app.intDaysList});
	  form.find('.intPerNum').selectloader({intPerNumList:app.intPerNumList});
      app.bindFormValidation(form);
      
       if(operatingMode =='add'){
    	   validatorNotExists(form);
       }else{
    	   form.find('[name="curCd"]').prop('readonly', true)
       }
  };
  

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增币种信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
    	operatingMode='add'
    	app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, 
  function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARCURTYP_CREATE
    }, app);
  });

  /**
  *
  *币种编码的唯一性 
  * */
 
 var validatorNotExists = function (form) {
	     $("input[name='curCd']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.PARCURTYP_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 curCd:function(){
	        		  return form.find('[name="curCd"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该币种编码已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };
  
  //自定义校验币种编码
  $.validator.addMethod("curCd",function(value,element){
    var chrnum=/^[A-Z]+$/;
    return this.optional(element)||(chrnum.test(value));
  },"只能输入A-Z之间的大写字母"); 
  
  /**
   * 修改币种信息
   */
  $('#edit').getModal({
    title: '编辑币种信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      $('input[name=curCd]').prop('readonly',true);
      var id = $('[type=radio]:checked').data('id');
      operatingMode='edit'
    	  
      if (!id) return;
      app.context.showBefore({
        url: app.PARCURTYP_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=curCd]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARCURTYP_UPDATE
    }, app);
  });

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条币种信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
      var curCd=$('[type=radio]:checked').data('id');
	  app.context.submit({
	  modal: modal,
	  url: app.PARCURTYP_REMOVE+curCd,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
