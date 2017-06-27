/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;

    +function($, app) {
        /**
         * 初始化数据
         */
        $('#business-apply,#ious').pagination({
            "first-store": app.firstStore
        });
    } (window.jQuery, window.app);
});