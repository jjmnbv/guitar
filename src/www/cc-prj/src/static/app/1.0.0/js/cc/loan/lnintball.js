$(function () {
  var $ = window.jQuery;
  var app = window.app;

  var loNo = GetQueryString('loNo');
  var perQt = GetQueryString('perQt');

  $('.loNo').val(loNo);
  $('.perQt').val(perQt);
  $('.main-page').pagination({
    'first-store':app.firstStore
  });

});