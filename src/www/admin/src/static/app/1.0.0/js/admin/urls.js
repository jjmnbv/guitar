+ function ($, app) {
  "use strict ";

  $.extend(app, {
    MENU_VIEW: app.base + '/admin/menu/view/',
    MENU_CREATE: app.base + '/admin/menu/create.json',
    MENU_UPDATE: app.base + '/admin/menu/update.json',
    MENU_REMOVE: app.base + '/admin/menu/remove/',
    MENU_JSTREE: app.base + '/admin/menu/jstree.json',
    MENU_ACTION_CREATE: app.base + '/admin/menu/action-create.json',
    MENU_ACTION_UPDATE: app.base + '/admin/menu/action-update.json',
    MENU_ACTION_REMOVE: app.base + '/admin/menu/action-remove/',

    DICTIONARYCATEGORY_LIST: app.base + '/admin/dictionaryCategory/list.json',
    DICTIONARYCATEGORY_PAGE: app.base + '/admin/dictionaryCategory/page',
    DICTIONARYCATEGORY_VIEW: app.base + '/admin/dictionaryCategory/view/',
    DICTIONARYCATEGORY_CREATE: app.base + '/admin/dictionaryCategory/create.json',
    DICTIONARYCATEGORY_UPDATE: app.base + '/admin/dictionaryCategory/update.json',
    DICTIONARYCATEGORY_REMOVE: app.base + '/admin/dictionaryCategory/remove/',
    DICTIONARYCATEGORY_NOTEXISTS: app.base + '/admin/dictionaryCategory/notexists.json',

    DICTIONARY_PAGE: app.base + '/admin/dictionary/page',
    DICTIONARY_VIEW: app.base + '/admin/dictionary/view/',
    DICTIONARY_CREATE: app.base + '/admin/dictionary/create.json',
    DICTIONARY_UPDATE: app.base + '/admin/dictionary/update.json',
    DICTIONARY_REMOVE: app.base + '/admin/dictionary/remove/',
    DICTIONARY_NOTEXISTS: app.base + '/admin/dictionary/notexists.json',
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