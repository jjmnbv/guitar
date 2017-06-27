/**
 * 页面组件初始化
 */
+function ($, app) {
    if (app.forceChangeLoginPassword) {
        return;
    }

              $('.page-sidebar').menusidebarloader({ "menus": app.menus });
    $(function () {

        /**
         * 用户首次登录需要强制更新密码
         */
        +function () {
            if (!app.forceChangeLoginPassword) {
                return;
            }
            var modal = $('#chgloginpwd-modal');
            modal.find('[data-dismiss="modal"]').hide();
            modal.find('#chgloginpwd-msg').html("首次登录，请修改登录密码");
            modal.modal({backdrop: 'static', keyboard: false});
        }();

        /**
         * 设置弹框显示语言
         */
        bootbox.setLocale("zh_CN");

        /**
         * 初始化时间控件
         */
        // $(".date-picker-page").datepicker({
        //     rtl: App.isRTL(),
        //     todayHighlight: true,
        //     orientation: "left",
        //     autoclose: !0,
        //     format: "yyyy-mm-dd",
        //     'start-date': "+0d",
        //     language: 'zh-CN'
        // });

        /*   初始化radio/checkbox控件   */
        $('input').uniform();
    });
}(window.jQuery, window.app);