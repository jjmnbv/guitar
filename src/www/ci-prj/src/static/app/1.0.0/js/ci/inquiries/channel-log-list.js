$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 初始化数据
     */
    $('#mainPage').pagination({
    });
    app.registerTextHelper('operationCode', app.operationCode, 'code', 'name');

})