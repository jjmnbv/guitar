 + function($, app) {
   //翻译字典项列表
   app.registerTextHelper('limitExecutionCode', app.limitExecutionCodeList, 'code', 'name');
   app.registerTextHelper('limitOccupyCode', app.limitOccupyCodeList, 'code', 'name');
   app.registerTextHelper('isSingleControl', app.isSingleControlList, 'code', 'name');
   app.registerTextHelper('isOccupy', app.isOccupyList, 'code', 'name');
   
   /*获取弹框模板*/
   app.context.formHtml = $('#form-template').html();
   /*初始化弹框*/
   app.context.formInit = function(form) {
       app.bindFormValidation(form);
       form.find('.selLoader').selectloader(app);
       form.find('.radioLoader').radioloader(app);
       $("input").uniform();
   };
   

   
     /*新增*/
   $('#add').getModal({
       title: "新增额度指标配置",
       body: app.context.formHtml,
       showBefore: function(modal) {
         app.context.showBefore({
           modal: modal,
         }, app, app.context.formInit)
       },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       },
       showAfter:function(modal){
		 validateLimitIndexsetcodeExists(modal.find("form"));
         var limitExecutionCode = app.request.limitExecutionCode;
         modal.find(".limitExecutionCode").val(limitExecutionCode).attr("disabled",true);
         modal.find(".limitExecutionCodeVal").val(limitExecutionCode);
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.QUOTA_INDEX_ADD
       }, app)
     })
     /*修改*/
   $('#update').getModal({
       title: "修改额度指标配置",
       body: app.context.formHtml,
       selector: function() {
         return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
       },
       showBefore: function(modal) {
         app.context.showBefore({
           url: app.QUOTA_INDEX_VIEW,
           modal: modal,
           param: '?limitExecutionCode='+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id')+'&indexSetCode='+$('#delete').parents('.portlet').find('[type=radio]:checked').data('indexsetcode')
         }, app, app.context.formInit);
       },
       showAfter:function(modal){
         validateLimitIndexsetcodeExists(modal.find("form"));
         modal.find("input[name='oldIndexSetCode']").val(modal.find("#indexSetCode").val());
         var limitExecutionCode = app.request.limitExecutionCode;
         modal.find(".limitExecutionCode").val(limitExecutionCode).attr("disabled",true);
         modal.find(".limitExecutionCodeVal").val(limitExecutionCode);
       },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.QUOTA_INDEX_UPDATE
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
       url: app.QUOTA_INDEX_REMOVE+'?limitExecutionCode='+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id')+'&indexSetCode='+$('#delete').parents('.portlet').find('[type=radio]:checked').data('indexsetcode'),
       text: "删除成功",
       isEasyModal: true
     }, app)
   })

	/*额度配置 指标集代码远程校验*/
  var validateLimitIndexsetcodeExists = function(form) {
    $("#indexSetCode", form).rules("add", {
      remote: {
        url: app.QUOTA_INDEX_EXIST,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('#indexSetCode').val();
          },
		  limitExecutionCode: function() {
            return form.find('#limitExecutionCode').val();
          },
		  oldIndexSetCode: function() {
            return form.find("input[name='oldIndexSetCode']").val();
          }
        }
      },
      messages: {
        remote: "指标集名称已经存在！"
      }
    });
  };
 }(window.jQuery, window.app);
