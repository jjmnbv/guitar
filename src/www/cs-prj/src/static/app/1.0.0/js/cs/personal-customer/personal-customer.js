 + function($, app) {

   /**
    * 初始化数据
    */
   app.registerTextHelper('paTyCd', app.paTyCdList, 'code', 'name');
   app.registerTextHelper('pk.cuTyCd', app.cuTyCdList, 'code', 'name');
   app.registerTextHelper('st', app.stList, 'code', 'name');
   $('.cuTyCd').selectloader({
     'cuTyCdList': app.cuTyCdList
   });
   $('.paTyCd').selectloader({
     'paTyCdList': app.paTyCdList
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
     form.find('#st').selectloader({
       'stList': app.stList
     });
   };

   /**
    * 修改操作的弹框
    */
   $('#update').getModal({
     title: '修改客户状态',
     body: app.context.formHtml,
     /* 获取form的html模板，并填充到模态框中 */
     selector: function() {
       return !!$('[type=radio]:checked').length;
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.SHOWUPDATELIST,
         modal: modal,
         param: '?cuNo=' + $('[type=radio]:checked').data('id') + '&' + 'cuNa=' + $('[type=radio]:checked').data('name') + '&' + 'cuTyCd=' + $('[type=radio]:checked').data('type') + '&' + 'cuKiCd=' + $('[type=radio]:checked').data('classify')
       }, app, app.context.formInit);
     },
     showAfter: function() {},
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.UPDATECUSTOMER
     }, app);
   });

 }(window.jQuery, window.app);