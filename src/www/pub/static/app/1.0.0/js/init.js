/**
 * 页面组件初始化
 */
+function ($, app) {
    if (app.forceChangeLoginPassword) {
        return;
    }
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
        $(".date-picker-page").datepicker({
            rtl: App.isRTL(),
            todayHighlight: true,
            orientation: "left",
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        }).on('hide', function (e) {
            $(this).parents("form").validate().element($(this).parent().find("input"));
        });

        /*   初始化radio/checkbox控件   */
        $('input').uniform({fileButtonHtml: "选择文件",fileDefaultHtml: "未选择任何文件",});
        
//      wkd限制select长度溢出
         $('select').selectpicker({size: 7,container: '#bootstrap-select-box'});
         $('select').selectpicker('refresh');
         
//       全局搜索增加隐藏域lyf
         $(".searchAllForm").prepend($(".hiddenCondition"));

    });
}(window.jQuery, window.app);