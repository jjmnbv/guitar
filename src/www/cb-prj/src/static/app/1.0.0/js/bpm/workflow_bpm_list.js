/**
 * Created by Administrator on 2017/4/18.
 */
/**
 * Created by Administrator on 2017/4/18.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;

    var deployStatus = [
        { 'name': '0', 'text': '已保存' },
        { 'name': '1', 'text': '已部署' },
        { 'name': '2', 'text': '已删除' }
    ];
    var runStatus = [
        { 'name': '0', 'text': '启用' },
        { 'name': '1', 'text': '未启用' },
        { 'name': '2', 'text': '禁用' }
    ];
    app.registerTextHelper('deployStatus', deployStatus, 'name', 'text');  //在调用handlebars模版前调用
    app.registerTextHelper('runStatus', runStatus, 'name', 'text');  //在调用handlebars模版前调用

    /**
     * 初始化数据
     */
    $('#tab1').pagination({
        "first-store": app.firstStore
    });

    /*  var model_list = Handlebars.compile($('#step-list-template').html());
      /!*var html = model_list(data);*!/
      $("#model_list").html(model_list);*/
});
