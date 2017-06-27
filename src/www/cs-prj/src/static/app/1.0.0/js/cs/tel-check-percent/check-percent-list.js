 + function($, app) {

   /**
    * 设置弹框表单模板
    */
   app.context.formHtml = $('#form-template').html();
   /**
    * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
    */
   app.context.formInit = function(form) {
     app.bindFormValidation(form);
   };

   /**
    * 增加操作的弹框
    */
   $('#add').getModal({
     title: '新增电核比例',
     ok: '保存',
     cancel: "关闭",
     body: app.context.formHtml,
     /* 获取form的html模板，并填充到模态框中 */
     showBefore: function(modal) {
       app.context.showBefore({
         modal: modal
       }, app, app.context.formInit);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
       $('.check-percent-page .pagination-reload').click();
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.TELCHECKPERCENT_CREATE
     }, app);
   });

   /**
    * 修改操作的弹框
    */
   $('#update').getModal({
     title: '修改电核比例',
     ok: '保存',
     cancel: "关闭",
     body: app.context.formHtml,
     /* 获取form的html模板，并填充到模态框中 */
     selector: function() {
       return !!$('[type=radio]:checked').length;
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.TELCHECKPERCENT_VIEW,
         modal: modal,
         param: $('[type=radio]:checked').data('id')
       }, app, app.context.formInit);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
       $('.check-percent-page .pagination-reload').click();
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.TELCHECKPERCENT_UPDATE
     }, app);
   });

   /**
    * 删除操作的弹框
    */
   $('#delete').getModal({
     text: '确定要删除该条记录吗？',
     size: 'modal-sm',
     selector: function() {
       return !!$('[type=radio]:checked').length;
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.TELCHECKPERCENT_REMOVE + $('[type=radio]:checked').data('id'),
       text: '删除成功',
       isEasyModal: true
     }, app);
   });

 }(window.jQuery, window.app);