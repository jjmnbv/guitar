 + function($, app) {

   $('.loaderSel').selectloader(app);
   app.registerTextHelper('wooNodCd', app.wooNodCdList, 'code', 'name');
   app.registerTextHelper('wooTyCd', app.wooTyCdList, 'code', 'name');
   app.registerTextHelper('wooBaCd', app.wooBaCdList, 'code', 'name');

   /*增加远程校验方法*/
   var validateSZExists = function(form) {
     $("#wooCfgNo", form).rules("add", {
       remote: {
         url: app.WORK_ORDER_EXIST_DATA,
         type: "POST",
         dateType: "text",
         data: {
           id: function() {
             return form.find('[name="wooCfgNo"]').val();
           }
         }
       },
       messages: {
         remote: "分单配置编号已经存在！"
       }
     });
   };

   /**
    * 设置弹框表单模板
    */
   app.context.formHtml = $('#form-template').html();
   /**
    * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
    */
   app.context.formInit = function(form) {
     /*   初始化弹窗里的下拉框   */
     form.find('.loaderSel').selectloader(app);
     app.bindFormValidation(form);
     //      validateSZExists(form);
   };

   /**
    * 增加操作的弹框
    */
   $('#add').getModal({
     title: '新增工单配置',
     body: app.context.formHtml,
     showBefore: function(modal) {
       app.context.showBefore({
         modal: modal
       }, app, app.context.formInit);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.COMMIT_WORKORDER_ADD_DATA,
     }, app);
   });
   /**
    * 修改
    */
   $('#update').getModal({
     title: '修改工单配置',
     body: app.context.formHtml,
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('id'))
       }
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.GET_WORKORDER_BY_ID,
         modal: modal,
         param: $('[type=radio]:checked').data('id')
       }, app, app.context.formInit);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.COMMIT_WORKORDER_UPDATE_DATA,
     }, app);
   });

   /**
    * 删除操作的弹框
    */
   $('#delete').getModal({
     text: '确定要删除该条记录吗？',
     size: 'modal-sm',
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('id'))
       }
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.WORKORDER_DELETE_DATA + $('[type=radio]:checked').data('id'),
       text: '删除成功',
       isEasyModal: true
     }, app);
   });

 }(window.jQuery, window.app);

 //  人工分单时工单分配依据可编辑
 function changeType(event) {
   var valType = $(event).find("option:selected").val();
   if(valType == "PJ") {
     $(".wooBaCd").attr("disabled", false);
   } else {
     $(".wooBaCd").attr("disabled", true);
   }
   $('select').selectpicker('refresh');
 };

 //  分单配置选择不控制后，分单规则和默认分单件数无需填写
 function changeConfing(event) {
   var valType = $(event).find("option:selected").val();
   if(valType == "BK") {
     $(".wooAssiCd,.defWooQl").removeClass("required").parent("div").prev("label").removeClass("fill");
   } else {
     $(".wooAssiCd,.defWooQl").addClass("required").parent("div").prev("label").addClass("fill");
   }
   $('select').selectpicker('refresh');
 };
