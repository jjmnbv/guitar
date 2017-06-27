+ function ($, app) {
  "use strict ";

  $.extend(app, {

    SYACCFG_PAGE: app.base + '/cc/system/syaccfg/page',
    SYACCFG_VIEW: app.base + '/cc/system/syaccfg/view',
    SYACCFG_LIST: app.base + '/cc/system/syaccfg/list',
    SYACCFG_CREATE: app.base + '/cc/system/syaccfg/create',
    SYACCFG_UPDATE: app.base + '/cc/system/syaccfg/update',
    SYACCFG_REMOVE: app.base + '/cc/system/syaccfg/remove',
    SYACCFG_NOTEXISTS: app.base + '/cc/system/syaccfg/notexists',
   
    

    SYBAINF_PAGE: app.base + '/cc/system/sybainf/page',
    SYBAINF_VIEW: app.base + '/cc/system/sybainf/view/',
    SYBAINF_LIST: app.base + '/cc/system/sybainf/list.json',
    SYBAINF_CREATE: app.base + '/cc/system/sybainf/create.json',
    SYBAINF_UPDATE: app.base + '/cc/system/sybainf/update.json',
    //SYBAINF_NOTEXISTS: app.base + '/cc/system/sybainf/notexists.json',
    
    /*刷新系统缓存*/
    SYSRFRESH_CACHE:app.base+'/cc/system/syrefresh/reload',
    
    

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