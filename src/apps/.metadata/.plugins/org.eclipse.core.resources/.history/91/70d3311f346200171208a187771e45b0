<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function ($, app) {

  app.wordbooks = <spring:eval expression="@FN_CB.toJSON(wordbooks)" />;

  $('.wordbooks').data('selectloaderVkey', 'code').data('selectloaderTkey', 'name').selectloader(app.wordbooks);
  $('.radio-list.dictionary').data('radioloaderVkey', 'code').data('radioloaderTkey', 'name').radioloader(app.wordbooks);
  $('.checkbox-list.dictionary').data('radioloaderVkey', 'code').data('radioloaderTkey', 'name').radioloader(app.wordbooks);

} (window.jQuery, window.app);
