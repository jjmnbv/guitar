+ function ($, app) {
  "use strict ";

  $.extend(app, {

    LNACTENTL_PAGE: app.base + '/cc/account/lnactentl/page',
    LNACTENTL_VIEW: app.base + '/cc/account/lnactentl/view.json',
    LNACTENTL_LIST: app.base + '/cc/account/lnactentl/list.json',
    LNACTENTL_CREATE: app.base + '/cc/account/lnactentl/create.json',
    LNACTENTL_UPDATE: app.base + '/cc/account/lnactentl/update.json',
    LNACTENTL_REMOVE: app.base + '/cc/account/lnactentl/remove.json',
    //LNACTENTL_NOTEXISTS: app.base + '/cc/account/lnactentl/notexists.json',

    LNACTLDGL_PAGE: app.base + '/cc/account/lnactldgl/page',
    LNACTLDGL_VIEW: app.base + '/cc/account/lnactldgl/view.json',
    LNACTLDGL_LIST: app.base + '/cc/account/lnactldgl/list.json',
    LNACTLDGL_CREATE: app.base + '/cc/account/lnactldgl/create.json',
    LNACTLDGL_UPDATE: app.base + '/cc/account/lnactldgl/update.json',
    LNACTLDGL_REMOVE: app.base + '/cc/account/lnactldgl/remove.json',
    //LNACTLDGL_NOTEXISTS: app.base + '/cc/account/lnactldgl/notexists.json'
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

  String.prototype.format = function() {
    var args = arguments;
    if (/\{(\d+)\}/g.test(this)) {
      return this.replace(/\{(\d+)\}/g, function(match, name) {
        return args[name];
      });
    }

    if (typeof(args[0]) == 'object') {
      var param = args[0];
      return this.replace(/\{([\w]+)\}/g, function(match, name){
        return param[name];
      });
    }

    var i = 0;
    return this.replace(/\{(\w+)\}/g, function(){
      return args[i++];
    });
  };

} (window.jQuery, window.app);