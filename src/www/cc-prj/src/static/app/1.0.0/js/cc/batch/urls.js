+ function ($, app) {
  "use strict ";

  $.extend(app, {

    //批处理执行计划
    BATCHTASKEXEPLAN_PAGE: app.base + '/cc/batch/batchtaskexeplan/page',
    BATCHTASKEXEPLAN_VIEW: app.base + '/cc/batch/batchtaskexeplan/view/',
    BATCHTASKEXEPLAN_LIST: app.base + '/cc/batch/batchtaskexeplan/list',
    BATCHTASKEXEPLAN_CREATE: app.base + '/cc/batch/batchtaskexeplan/create',
    BATCHTASKEXEPLAN_UPDATE: app.base + '/cc/batch/batchtaskexeplan/update',
    BATCHTASKEXEPLAN_REMOVE: app.base + '/cc/batch/batchtaskexeplan/remove/',
    BATCHTASKEXEPLAN_PLSCHISADAPT: app.base + '/cc/batch/batchtaskexeplan/plshisadapt',
    BATCHTASKEXEPLAN_NOTEXISTS: app.base + '/cc/batch/batchtaskexeplan/notexists',
    BATCHTASKEXEPLAN_UPDATEPLANTASK: app.base + '/cc/batch/batchtaskexeplan/updateplantask',
    BATCHTASKEXEPLAN_EXECUTEHANDLE: app.base + '/cc/batch/batchtaskexeplan/runBatchTask/',
    BATCHTASKEXEPLAN_QUERY: app.base + '/cc/batch/batchtaskexeplan/queryList/',
    //执行明细重新执行操作
    BATCHTASKEXEPLAN_REDO: app.base + '/cc/batch/batchtaskexeplan/redoBatchTask/',

    BATCHTASKPLANDETAIL_PAGE: app.base + '/cc/batch/batchtaskplandetail/page',
    BATCHTASKPLANDETAIL_VIEW: app.base + '/cc/batch/batchtaskplandetail/view/',
    BATCHTASKPLANDETAIL_LIST: app.base + '/cc/batch/batchtaskplandetail/list',
    BATCHTASKPLANDETAIL_CREATE: app.base + '/cc/batch/batchtaskplandetail/create',
    BATCHTASKPLANDETAIL_UPDATE: app.base + '/cc/batch/batchtaskplandetail/update',
    BATCHTASKPLANDETAIL_REMOVE: app.base + '/cc/batch/batchtaskplandetail/remove/',
    //BATCHTASKPLANDETAIL_NOTEXISTS: app.base + '/cc/batch/batchtaskplandetail/notexists.json',

    //批处理任务管理
    BATCHTASKINFO_PAGE: app.base + '/cc/batch/batchtaskinfo/page',
    BATCHTASKINFO_VIEW: app.base + '/cc/batch/batchtaskinfo/view/',
    BATCHTASKINFO_LIST: app.base + '/cc/batch/batchtaskinfo/list',
    BATCHTASKINFO_CREATE: app.base + '/cc/batch/batchtaskinfo/create',
    BATCHTASKINFO_UPDATE: app.base + '/cc/batch/batchtaskinfo/update',
    BATCHTASKINFO_REMOVE: app.base + '/cc/batch/batchtaskinfo/remove/',
    BATCHTASKINFO_NOTEXISTS: app.base + '/cc/batch/batchtaskinfo/notexists',
    
     //批处理执行历史管理 BATCHTASKINFO_LIST
    BATCHEXECUTEHIS_PAGE: app.base + '/cc/batch/batchexeplanhis/page',
    BATCHEXECUTEHIS_VIEW: app.base + '/cc/batch/batchexeplanhis/view/',
    BATCHEXECUTEHIS_LIST: app.base + '/cc/batch/batchexeplanhis/list',

    //批处理业务执行记录管理
    BATBIZLOG_PAGE: app.base + '/cc/batch/batchbizlog/page/',
    
    //批处理错误记录
    BATCHERRLOG_PAGE: app.base + '/cc/batch/batcherrlog/page',
    BATCHERRLOG_VIEW: app.base + '/cc/batch/batcherrlog/view/',
    BATCHERRLOG_LIST: app.base + '/cc/batch/batcherrlog/list',
    BATCHERRLOG_CREATE: app.base + '/cc/batch/batcherrlog/create',
    BATCHERRLOG_UPDATE: app.base + '/cc/batch/batcherrlog/update',
    BATCHERRLOG_REMOVE: app.base + '/cc/batch/batcherrlog/remove/',
    //BATCHERRLOG_NOTEXISTS: app.base + '/batch/batcherrlog/notexists.json'

  
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

} (window.jQuery, window.app);