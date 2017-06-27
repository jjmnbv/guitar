 + function($, app) {
   app.registerTextHelper('id', app.messTypeList, 'code', 'name');
   /*获取弹框模板*/
   app.context.formHtml = $('#form-template').html();
   app.context.formHtmlDetail = $('#form-template-detail').html();
   /*初始化弹框*/
   app.context.formInit = function(form) {
     app.bindFormValidation(form);
//   form.find('.dictionarys').selectloader(app);
   };

   /*新增*/
   $('#add').getModal({
     title: "新增公告",
     body: app.context.formHtml,
     showBefore: function(modal) {
       app.context.showBefore({
         modal: modal,
       }, app, app.context.formInit)
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml)
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.SYSTEM_NOTICE_ADD
     }, app)
   });
   
   /**
   * 查看详情
   */
  $(document).on('click', '.detail', function() {
    $(this).each(function() {
      var code = $(this).data('code');
      $(this).getModal({
        title: '查看系统公告',
        body: app.context.formHtmlDetail,
        /* 获取form的html模板，并填充到模态框中 */
        selector: true,
        showBefore: function(modal) {
          app.context.showBefore({
            url: app.SYSTEM_NOTICE_VIEW,
            modal: modal,
            readOnly: true,
            dataJson: true
          }, app, app.context.formInit,null,app.context.formHtmlDetail);
        },
        hideAfter: function(modal) {
          modal.setBody(app.context.formHtmlDetail);
        },
        footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'

      });
    });
  });
 }(window.jQuery, window.app);