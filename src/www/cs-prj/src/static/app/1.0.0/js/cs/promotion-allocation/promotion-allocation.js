 + function($, app) {

   /**
    * 初始化数据
    */

   /**
    * 增加是跳转页面
    */

   /**
    * 修改也是跳转页面
    */
   $('#update').getModal({
     selector: function() {
       return !!$('[type=radio]:checked').length;
     },
     compileBefore: function() {
       window.location.href = 'promotion-allocation-update.html?promNo=' + $('[type=radio]:checked').data('id');
     }

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
       url: app.PROMOTION_DELETE_DATA + '?promNo=' + $('[type=radio]:checked').data('id'),
       text: '删除成功',
       isEasyModal: true
     }, app);
   });
 }(window.jQuery, window.app);