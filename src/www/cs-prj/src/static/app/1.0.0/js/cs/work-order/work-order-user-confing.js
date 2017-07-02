 + function($, app) {
   /**
    * 初始化列表数据
    */

     $('#userListModal').pagination({
    /*     "first-store": app.firstStore*/
     });

   // $('#userListModal').pagination({});
   $('.loaderSel').selectloader(app);

   /* bootstrap-select model 下展示控制wkd复制*/
   $('.modal.fade').on('shown.bs.modal', function() {
     $("#bootstrap-select-box").css("z-index", "10060");
   });
   $('.modal.fade').on('hide.bs.modal', function() {
     $("#bootstrap-select-box").css("z-index", "auto");
   });

   //提交选中的列表
   $("#confirmY").click(function() {
     $(this).attr("disabled", true);
       var checkedLength=$('[type=checkbox]:checked').length;
       if(checkedLength>0){
           app.$post(app.COMMIT_USER_WORKORDER_ADD_DATA, $('#userList').serialize()).done(function(data) {
           if(app.isOK(data)) {
             app.alertOK('添加成功！');
             $("#confirmY").attr("disabled", false);
             $('#userModal').modal('hide');
             App.startPageLoading({
               animate: true
             });
             app.loadData();
           } else {
             var errors = data.errors.join(',')
             app.alertError(errors || failureText || '提交失败！');
             $("#confirmY").attr("disabled", false);
           }
           });
       }else{
           $('#userModal').modal('hide');
           $("#confirmY").attr("disabled", false);
       }
   });
   app.context.formHtml = $('#form-template').html();
   app.context.formInit = function(form) {
   };
   /**
    * 工单配置
    */
   $('#update').getModal({
     title: '工单配置',
     body: app.context.formHtml,
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('id'))
       }
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.GET_USER_WORKORDER_BY_ID,
         modal: modal,
         param: '?wooCfgNo=' + $('[type=radio]:checked').data('id') + '&usLoginNa=' + $('[type=radio]:checked').data('name')
       }, app, app.context.formInit);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.COMMIT_USER_WORKORDER_SET_DATA,
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
       url: app.USER_WORKORDER_DELETE_DATA + '?wooCfgNo=' + $('[type=radio]:checked').data('id') + '&usLoginNa=' + $('[type=radio]:checked').data('name'),
       text: '删除成功',
       isEasyModal: true
     }, app);
   });
 }(window.jQuery, window.app);