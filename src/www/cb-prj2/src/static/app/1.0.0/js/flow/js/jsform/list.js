+ function ($,app) {"use strict ";

  var removeJsForm = function() {
    $(".main-page").delegate('[data-remove-url]', 'click', function () {
      var url = $(this).data('removeUrl');
      bootbox.confirm({title:'提示', message:'确定删除此表单',callback:function(e){
        if(e){
          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(url, {}, 'json').done(function(data){
            App.stopPageLoading();
            if (data.resultCode == 'SUCCESS') {
              $('.main-page .pagination-reload').click();
              app.alertOK('删除成功');
            } else {
              if (data.errorCode) {
                app.alertError(data.errorCode.msg);
              } else {
                app.alertError('删除失败.');
              }
            }
          });
        }
      }});
    });
  };

  var init = function() {
    removeJsForm();
  };
  init();

} (window.jQuery,window.app);
