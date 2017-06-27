+function ($, app) {

    /**
     * 初始化数据
     */
    $('.status').selectloader("statusList", app.status);
    app.registerTextHelper('status', app.status, 'code', 'name');

    /**
     * 修改
     */
    $('#update').getModal({
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore:function(){
            window.location.href='channel-management-update.html?no='+$('[type=radio]:checked').data('id');
        }
    });
}(window.jQuery, window.app);