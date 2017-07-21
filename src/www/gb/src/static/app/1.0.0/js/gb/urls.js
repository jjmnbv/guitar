+ function ($, app) {
  "use strict ";

  $.extend(app, {

    CONTRACT_PAGE: app.base + '/gb/contract/page',
    CONTRACT_VIEW: app.base + '/gb/contract/view/',
    CONTRACT_LIST: app.base + '/gb/contract/list.json',
    CONTRACT_CREATE: app.base + '/gb/contract/create.json',
    CONTRACT_UPDATE: app.base + '/gb/contract/update.json',
    CONTRACT_REMOVE: app.base + '/gb/contract/remove/',
    //CONTRACT_NOTEXISTS: app.base + '/gb/contract/notexists.json',

    EDUCATION_PAGE: app.base + '/gb/education/page',
    EDUCATION_VIEW: app.base + '/gb/education/view/',
    EDUCATION_LIST: app.base + '/gb/education/list.json',
    EDUCATION_CREATE: app.base + '/gb/education/create.json',
    EDUCATION_UPDATE: app.base + '/gb/education/update.json',
    EDUCATION_REMOVE: app.base + '/gb/education/remove/',
    //EDUCATION_NOTEXISTS: app.base + '/gb/education/notexists.json',

    JOB_PAGE: app.base + '/gb/job/page',
    JOB_VIEW: app.base + '/gb/job/view/',
    JOB_LIST: app.base + '/gb/job/list.json',
    JOB_CREATE: app.base + '/gb/job/create.json',
    JOB_UPDATE: app.base + '/gb/job/update.json',
    JOB_REMOVE: app.base + '/gb/job/remove/',
    //JOB_NOTEXISTS: app.base + '/gb/job/notexists.json',

    STORE_PAGE: app.base + '/gb/store/page',
    STORE_VIEW: app.base + '/gb/store/view/',
    STORE_LIST: app.base + '/gb/store/list.json',
    STORE_CREATE: app.base + '/gb/store/create.json',
    STORE_UPDATE: app.base + '/gb/store/update.json',
    STORE_REMOVE: app.base + '/gb/store/remove/',
    //STORE_NOTEXISTS: app.base + '/gb/store/notexists.json',

    WORKS_PAGE: app.base + '/gb/works/page',
    WORKS_VIEW: app.base + '/gb/works/view/',
    WORKS_LIST: app.base + '/gb/works/list.json',
    WORKS_CREATE: app.base + '/gb/works/create.json',
    WORKS_UPDATE: app.base + '/gb/works/update.json',
    WORKS_REMOVE: app.base + '/gb/works/remove/',
    //WORKS_NOTEXISTS: app.base + '/gb/works/notexists.json'
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