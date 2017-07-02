+ function ($, app) {
  "use strict ";

  $.extend(app, {

    SYACCFG_PAGE: app.base + '/cc/system/syaccfg/page',
    SYACCFG_VIEW: app.base + '/cc/system/syaccfg/view/',
    SYACCFG_LIST: app.base + '/cc/system/syaccfg/list.json',
    SYACCFG_CREATE: app.base + '/cc/system/syaccfg/create.json',
    SYACCFG_UPDATE: app.base + '/cc/system/syaccfg/update.json',
    SYACCFG_REMOVE: app.base + '/cc/system/syaccfg/remove',
    SYACCFG_NOTEXISTS: app.base + '/cc/system/syaccfg/notexists.json',



    SYBAINF_PAGE: app.base + '/cc/system/sybainf/page',
    SYBAINF_VIEW: app.base + '/cc/system/sybainf/view/',
    SYBAINF_LIST: app.base + '/cc/system/sybainf/list.json',
    SYBAINF_CREATE: app.base + '/cc/system/sybainf/create.json',
    SYBAINF_UPDATE: app.base + '/cc/system/sybainf/update.json',
    //SYBAINF_NOTEXISTS: app.base + '/cc/system/sybainf/notexists.json',

    UPLOAD_FILE: app.base + '/cb/index/uploadFile',


    //FLOW_VAR: app.base+'/cb/index/flowVar',
    ONE_FLOW_VAR: app.base + '/cb/index/oneFlowVar',
    ADD_FLOW_VAR: app.base + '/cb/index/addVar.json',
    UPDATE_FLOW_VAR: app.base + '/cb/index/updateVar.json/',
    //FLOW_HISTORY: app.base+'/cb/index/flowHistory',
    FLOW_SVN: app.base + '/flowprocess/flows/version',

    ////////////////////////////////////////////////////////////

    //流程查询
    ONE_FLOW: app.base + '/cb/index/oneFlow',
    //删除流程
    DEL_FLOW: app.base + '/cb/index/delFlow.json',
    //保存流程f
    FLOW_SAVE: app.base + '/activiti/save',
    //根据状态获取流程列表
    FLOW_LIST: app.base + '/workflow/flows/list',
    //导入流程json
    FLOW_IMPORT_JSON: app.base + '/activiti/import-json/',
    //导出流程xml
    FLOW_EXPORT_XML: app.base + '/activiti/export-xml/',
    //导出流程json
    FLOW_EXPORT_JSON: app.base + '/activiti/export-json/',
    //查看流程
    FLOW_VIEW: app.base + '/activiti/flow-view/',
    //停用流程
    FLOW_DISABLED: app.base + '/activiti/flowdisable/',
    //发布
    FLOW_DEPLOY: app.base + '/bpm/flow-deploy/',
    // 流程变量
    FLOW_VAR: app.base + '/bpm/flowvar/list',
    // 流程变量-json
    FLOW_VAR_JSON: app.base + '/bpm/flowvar/json',
    //新增流程变量
    FLOWVARS_CREATE: app.base + '/activiti/flowvars/create',
    //修改流程变量
    FLOWVARS_UPDATE: app.base + '/activiti/flowvars/update/',
    //删除流程变量
    FLOWVARS_DELETE: app.base + '/activiti/flowvars/delete/',
    //根据id获取流程变量
    FLOWVARS_GETBYID: app.base + '/activiti/flowvars/view/',

    //流程历史
    FLOW_HISTORY: app.base + '/activiti/flow/history/',


    //  选项
    OPTIONS: app.base + '/cb/index/options'

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

}(window.jQuery, window.app);