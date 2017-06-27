 + function($, app) {

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
       url: app.STORE_DEL,
       param: {
         id: $('[type=radio]:checked').data('id')
       },
       text: '删除成功',
       isEasyModal: true
     }, app);
   });

   $('#edit').getModal({
     size: 'modal-sm',
     selector: function() {
       return !!$('[type=radio]:checked').length;
     },
     compileBefore: function() {
       window.location.href = "store-message-edit.html?cooNo=" + $('[type=radio]:checked').data('id');
     }
   });
   
   /**
    * 失效操作的弹框
    */
   $('#unActive').getModal({
     size: 'modal-sm',
     statusArray: ['JH'],
     textArray: '确定将状态变更为失效状态？',
     noHandleArray: ['SX'],
     noHandle: '此状态不能变更为失效状态',
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('status'))
       }
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.PARTNER_UNACTIVE,
       param: {
         cooNo: $('[type=radio]:checked').data('id')
       },
       text: '失效成功',
       isEasyModal: true
     }, app);
   });
   
   $("#st").selectloader({
     'stList': app.stList
   });
   app.registerTextHelper('st', app.stList, 'code', 'name');
   app.registerTextHelper('loDeaYn', app.userFlag, 'code', 'name');

 }(window.jQuery, window.app);