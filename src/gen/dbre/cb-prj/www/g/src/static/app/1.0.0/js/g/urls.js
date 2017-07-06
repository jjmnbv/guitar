+ function ($, app) {
  "use strict ";

  $.extend(app, {

    CON_PAGE: app.base + '/g/con/page',
    CON_VIEW: app.base + '/g/con/view/',
    CON_LIST: app.base + '/g/con/list.json',
    CON_CREATE: app.base + '/g/con/create.json',
    CON_UPDATE: app.base + '/g/con/update.json',
    CON_REMOVE: app.base + '/g/con/remove/',
    //CON_NOTEXISTS: app.base + '/g/con/notexists.json',

    EDU_PAGE: app.base + '/g/edu/page',
    EDU_VIEW: app.base + '/g/edu/view/',
    EDU_LIST: app.base + '/g/edu/list.json',
    EDU_CREATE: app.base + '/g/edu/create.json',
    EDU_UPDATE: app.base + '/g/edu/update.json',
    EDU_REMOVE: app.base + '/g/edu/remove/',
    //EDU_NOTEXISTS: app.base + '/g/edu/notexists.json',

    JOB_PAGE: app.base + '/g/job/page',
    JOB_VIEW: app.base + '/g/job/view/',
    JOB_LIST: app.base + '/g/job/list.json',
    JOB_CREATE: app.base + '/g/job/create.json',
    JOB_UPDATE: app.base + '/g/job/update.json',
    JOB_REMOVE: app.base + '/g/job/remove/',
    //JOB_NOTEXISTS: app.base + '/g/job/notexists.json',

    ROLE_PAGE: app.base + '/g/role/page',
    ROLE_VIEW: app.base + '/g/role/view/',
    ROLE_LIST: app.base + '/g/role/list.json',
    ROLE_CREATE: app.base + '/g/role/create.json',
    ROLE_UPDATE: app.base + '/g/role/update.json',
    ROLE_REMOVE: app.base + '/g/role/remove/',
    //ROLE_NOTEXISTS: app.base + '/g/role/notexists.json',

    STORE_PAGE: app.base + '/g/store/page',
    STORE_VIEW: app.base + '/g/store/view/',
    STORE_LIST: app.base + '/g/store/list.json',
    STORE_CREATE: app.base + '/g/store/create.json',
    STORE_UPDATE: app.base + '/g/store/update.json',
    STORE_REMOVE: app.base + '/g/store/remove/',
    //STORE_NOTEXISTS: app.base + '/g/store/notexists.json',

    USER_PAGE: app.base + '/g/user/page',
    USER_VIEW: app.base + '/g/user/view/',
    USER_LIST: app.base + '/g/user/list.json',
    USER_CREATE: app.base + '/g/user/create.json',
    USER_UPDATE: app.base + '/g/user/update.json',
    USER_REMOVE: app.base + '/g/user/remove/',
    //USER_NOTEXISTS: app.base + '/g/user/notexists.json',

    WORKS_PAGE: app.base + '/g/works/page',
    WORKS_VIEW: app.base + '/g/works/view/',
    WORKS_LIST: app.base + '/g/works/list.json',
    WORKS_CREATE: app.base + '/g/works/create.json',
    WORKS_UPDATE: app.base + '/g/works/update.json',
    WORKS_REMOVE: app.base + '/g/works/remove/',
    //WORKS_NOTEXISTS: app.base + '/g/works/notexists.json'
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