 + function($, app) {
   //翻译字典项列表
   app.registerTextHelper('limitExecuteCode', app.limitExecuteCodeList, 'code', 'name');
   app.registerTextHelper('systemCode', app.systemCodeList, 'code', 'name');
   app.registerTextHelper('occupyTypeCode', app.occupyTypeCodeList, 'code', 'name');
   
   /*获取弹框模板*/
   app.context.formHtml = $('#form-template').html();
   /*初始化弹框*/
   app.context.formInit = function(form) {
       form.find('.selLoader').selectloader(app);
       app.bindFormValidation(form);
   };
   
     /*新增*/
   $('#add').getModal({
       title: "新增额度执行配置",
       body: app.context.formHtml,
       showBefore: function(modal) {
         app.context.showBefore({
           modal: modal,
         }, app, app.context.formInit)
       },
	   showAfter:function(modal){
		  app.bindFormValidation(modal.find("form"));
		  validateLimitExecutionCodeExists(modal.find("form"));
	   },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.QUOTA_EXECUT_ADD
       }, app)
     })
     /*修改*/
   $('#update').getModal({
       title: "修改新增额度执行配置",
       body: app.context.formHtml,
       selector: function() {
         return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
       },
       showBefore: function(modal) {
         app.context.showBefore({
           url: app.QUOTA_EXECUT_VIEW,
           modal: modal,
           param: $('#update').parents('.portlet').find('[type=radio]:checked').data('id')
         }, app, app.context.formInit);
       },
         
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.QUOTA_EXECUT_UPDATE
       }, app)
     })
     /*删除*/
   $('#delete').getModal({
     text: "确定要删除该条记录吗?",
     size: "modal-sm",
     selector: function() {
       return !!$('#delete').parents('.portlet').find('[type=radio]:checked').length;
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.QUOTA_EXECUT_REMOVE+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id'),
       text: "删除成功",
       isEasyModal: true
     }, app)
   })

		   
	/*额度执行代码远程校验*/
  var validateLimitExecutionCodeExists = function(form) {
    $("#limitExecuteCode", form).rules("add", {
      remote: {
        url: app.QUOTA_EXECUT_EXIST,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('#limitExecuteCode').val();
          }
        }
      },
      messages: {
        remote: "额度执行代码已经存在！"
      }
    });
  };
 }(window.jQuery, window.app);
 
