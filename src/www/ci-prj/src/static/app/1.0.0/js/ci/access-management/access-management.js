+function ($, app) {
    /**
     * 初始化数据
     */

    $('.accessStatus').selectloader({'accessStatus': app.status});
    app.registerTextHelper('status', app.status, 'code', 'name');

    $('#update').getModal({
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore:function(){
            window.location.href='access-management-update.html?id='+$('[type=radio]:checked').data('id');
        }
    });
} (window.jQuery, window.app);