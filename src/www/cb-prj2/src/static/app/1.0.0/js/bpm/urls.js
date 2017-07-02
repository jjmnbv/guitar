+ function ($, app) {
  "use strict ";

  $.extend(app, {
    FLOWENGINE_STARTPROCESS_EXT: app.base + '/bpm/start/{flowKey}.json',
    FLOWENGINE_HANDLE_EXT: app.base + '/bpm/handleext/{taskId}.json',
    FLOWENGINE_HANDLE_EXTER: app.base + '/bpm/handleexter/{taskId}.json',
    FLOWENGINE_HANDLE_DATA: app.base + '/bpm/handledata/{taskId}.json',
    WORKFLOW_FLOWS: app.base + '/bpm/flows/page',
    WORKFLOW_FLOW_STEPS: app.base + '/bpm/steps',


    //保存流程f
    FLOW_SAVE: app.base + '/bpm/save',
    //根据状态获取流程列表
    FLOW_LIST: app.base + '/bpm/flowlist',
    //导入流程json
    FLOW_IMPORT_JSON: app.base + '/bpm/importjson/',
    //导出流程xml
    FLOW_EXPORT_XML: app.base + '/bpm/flowexportxml/',
    //导出流程json
    FLOW_EXPORT_JSON: app.base + '/bpm/flowexportjson/',
    //查看流程
    FLOW_VIEW: app.base + '/bpm/flowview/',
    //停用流程
    FLOW_DISABLED: app.base + '/bpm/flowdisable/',
    //发布
    FLOW_DEPLOY: app.base + '/bpm/flowdeploy/',
    //复制流程
    FLOW_COPY: app.base + '/bpm/flowcopy/',
    // 流程变量
    FLOW_VAR: app.base + '/bpm/flowvar/list',
    // 流程变量-json
    FLOW_VAR_JSON: app.base + '/bpm/flowvar/json',
    //新增流程变量
    FLOWVARS_CREATE: app.base + '/bpm/flowvarcreate',
    //修改流程变量
    FLOWVARS_UPDATE: app.base + '/bpm/flowvarupdate/',
    //删除流程变量
    FLOWVARS_DELETE: app.base + '/bpm/flowvardelete/',
    //根据id获取流程变量
    FLOWVARS_GETBYID: app.base + '/bpm/flowvarview/',

    //流程历史
    FLOW_HISTORY: app.base + '/bpm/flowhistory/'
  });

  $('form').each(function () {
    if (!this.action) {
      return true;
    }

    var i = this.action.lastIndexOf('/');
    if (i == -1) {
      return true;
    }

    var path = this.action.substring(i + 1);
    if (!app[path]) {
      return true;
    }

    this.action = this.action.substring(0, i) + app[path];
  });

  $('[data-page-url]').each(function () {
    var pageUrl = $(this).data('pageUrl');
    if (!pageUrl) {
      return true;
    }

    var i = pageUrl.lastIndexOf('/');
    if (i == -1) {
      return true;
    }

    var path = pageUrl.substring(i + 1);
    if (!app[path]) {
      return true;
    }

    $(this).data('pageUrl', pageUrl.substring(0, i) + app[path]);
  });

  String.prototype.format = function () {
    var args = arguments;
    if (/\{(\d+)\}/g.test(this)) {
      return this.replace(/\{(\d+)\}/g, function (match, name) {
        return args[name];
      });
    }

    if (typeof (args[0]) == 'object') {
      var param = args[0];
      return this.replace(/\{([\w]+)\}/g, function (match, name) {
        return param[name];
      });
    }

    var i = 0;
    return this.replace(/\{(\w+)\}/g, function () {
      return args[i++];
    });
  };

} (window.jQuery, window.app);