<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
+function ($, app) {
  "use strict ";

  $.extend(app, <spring:eval expression="@FN_BPM.toJSON(urls)" />);

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

}(window.jQuery, window.app);
