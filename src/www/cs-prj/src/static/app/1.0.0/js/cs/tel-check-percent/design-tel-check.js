 + function($, app) {

     $('.main-page').pagination({});

   app.registerTextHelper('fAname', app.checkDescribe, 'loTyNo', 'loTyNa');
   app.registerTextHelper('basisCode', app.accordingTo, 'code', 'name');
   
   $('#accord').selectloader({
     'accordingTo': app.accordingTo
   });

   /**
    * 设置弹框表单模板
    */
   app.context.formHtml = $('#form-template').html();
   /**
    * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
    */
   app.context.formInit = function(form) {
     /*   初始化弹窗里的下拉框   */
     form.find('[name="basisCode"]').selectloader({
       'accordingTo': app.accordingTo
     });
     form.find('input[name="code"]').val(app.request.code);

   };

   /**
    * 增加操作的弹框
    */
   $('#add').getModal({
     title: '新增电核比例设置',
     ok: '保存',
     cancel: "关闭",
     body: app.context.formHtml,
     /* 获取form的html模板，并填充到模态框中 */
     showBefore: function(modal) {
       app.context.showBefore({
         modal: modal
       }, app, app.context.formInit);
     },
     showAfter: function(modal) {
       app.bindFormValidation(modal);
       validateSZExists(modal);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
       $('.main-page .pagination-reload').click();
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.TELCHECKPERCENTSUB_CREATE
     }, app);
   });

   /**
    * 修改操作的弹框
    */
   $('#update').getModal({
     title: '修改电核比例设置',
     ok: '保存',
     cancel: "关闭",
     body: app.context.formHtml,
     /* 获取form的html模板，并填充到模态框中 */
     selector: function() {
       return !!$('[type=radio]:checked').length;
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.TELCHECKPERCENTSUB_VIEW,
         modal: modal,
         param: $('[type=radio]:checked').data('id')
       }, app, app.context.formInit);
     },
     showAfter: function(modal) {
       var hiddenVal = modal.find('input[name="percent"]').val();
       modal.find(".percentFormat").val(app.formatPercentBj(hiddenVal));
       $('input[name="baseCode"]').attr("readonly", true);
       $('select[name="basisCode"]').attr("disabled", true);

     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
       $('.main-page .pagination-reload').click();
       $('input[name="baseCode"]').attr("readonly", false);
       $('select[name="basisCode"]').attr("disabled", false);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.TELCHECKPERCENTSUB_UPDATE
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
       url: app.TELCHECKPERCENTSUB_REMOVE + $('[type=radio]:checked').data('id'),
       text: '删除成功',
       isEasyModal: true
     }, app);
   });
 }(window.jQuery, window.app);

 /*lh 远程校验*/
 var validateSZExists = function(form, $code, $basisCode, $baseCode) {
   $("input[name='baseCode']", form).rules("add", {
     remote: {
       url: app.NUCLEAR_ISDAIMA,
       type: "GET",
       data: {
         code: function() {
           return form.find('[name="code"]').val();
         },
         basisCode: function() {
           return form.find('[name="basisCode"]').val();
         },
         baseCode: function() {
           return form.find('[name="baseCode"]').val();
         }
       }
     },
     messages: {
       remote: "该电核基础编码已经存在"
     }
   });
 };