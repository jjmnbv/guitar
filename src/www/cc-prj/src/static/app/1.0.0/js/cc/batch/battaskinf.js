+ function($, app) {
    app.registerTextHelper('ynAv', app.ynAv, 'code', 'name');  
    app.registerTextHelper('ynRp', app.ynAv, 'code', 'name');
    app.registerTextHelper('enTp', app.enTp, 'code', 'name');
    app.registerTextHelper('exCd', app.exCd, 'code', 'name');
    app.registerTextHelper('txNo', app.txNo, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  
    $('.select-ynAv').selectloader({ynAvList:app.ynAv});
    $('.select-ynRp').selectloader({ynRpList:app.ynAv});
    $('.select-enTp').selectloader({enTpList:app.enTp});
    $('.select-exCd').selectloader({exCdList:app.exCd});
    $('.select-txNo').selectloader({txNoList:app.txNo});
    
    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {
	  form.find('.select-ynAv').selectloader({ynAvList:app.ynAv});
	  form.find('.select-ynRp').selectloader({ynRpList:app.ynAv});
	  form.find('.select-enTp').selectloader({enTpList:app.enTp});
	  form.find('.select-exCd').selectloader({exCdList:app.exCd});
	  form.find('.select-txNo').selectloader({txNoList:app.txNo});
	  
      app.bindFormValidation(form);
     if(operatingMode =='add'){
    	   validatorNotExists(form);
       }else{
    	   form.find('[name="taskId"]').prop('readonly', true)
       }
       
       $('[name=enTp]').on('change',function () {
           if($(this).val() == 'I' || $(this).val() == 'M'){
               $('[name=enQt]').val('0').attr('readonly',true);
           }else{
               $('[name=enQt]').val('').attr('readonly',false);
           }
       })
  };
  

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增批处理执行信息',
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
      url: app.BATCHTASKINFO_CREATE
    }, app);
  });

  /**
  *
  *校验任务编号是否重复
  * */
 
 var validatorNotExists = function (form) {
	     $("input[name='taskId']", form).rules("add", {
	      remote: {
	         url: app.BATCHTASKINFO_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 taskId:function(){
	        		  return form.find('[name="taskId"]').val();
	        	 }
	         }
	       },	
	       messages: {
	         remote: "该任务编号已存在！"
	       }
	     });
	  };
  
  /**
   * 修改批处理任务信息
   */
  $('#edit').getModal({
    title: '编辑批处理任务信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      $('input[name=taskId]').prop('readonly',true);
      var id = $('[type=radio]:checked').data('id');
      operatingMode='edit'
      if (!id) return;
      app.context.showBefore({
        url: app.BATCHTASKINFO_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    
    
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=taskId]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.BATCHTASKINFO_UPDATE
    }, app);
  });

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条任务信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
      var taskId=$('[type=radio]:checked').data('id');
	  app.context.submit({
	  modal: modal,
	  url: app.BATCHTASKINFO_REMOVE+taskId,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
