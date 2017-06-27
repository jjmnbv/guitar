+ function ($, app) {
  "use strict ";

  $.extend(app, {
<#list models as model>

    ${model.entityName?upper_case}_PAGE: app.base + '/${moduleName}/${model.entityName?lower_case}/page',
    ${model.entityName?upper_case}_VIEW: app.base + '/${moduleName}/${model.entityName?lower_case}/view<#if (model.primaryKeys?size>1)>.json<#else>/</#if>',
    ${model.entityName?upper_case}_LIST: app.base + '/${moduleName}/${model.entityName?lower_case}/list.json',
    ${model.entityName?upper_case}_CREATE: app.base + '/${moduleName}/${model.entityName?lower_case}/create.json',
    ${model.entityName?upper_case}_UPDATE: app.base + '/${moduleName}/${model.entityName?lower_case}/update.json',
    ${model.entityName?upper_case}_REMOVE: app.base + '/${moduleName}/${model.entityName?lower_case}/remove<#if (model.primaryKeys?size>1)>.json<#else>/</#if>',
    //${model.entityName?upper_case}_NOTEXISTS: app.base + '/${moduleName}/${model.entityName?lower_case}/notexists.json'<#if model_has_next>,</#if>
</#list>
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