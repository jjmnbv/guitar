$(function () {

  var $ = window.jQuery;
  var app = window.app;

  $('.pagination-query').click(function () {
    if($('#lnloinf-plan-form').valid()){
    }else{
    }
  });
  $('#mainPage').pagination({
    "first-store": app.firstStore
  });

});
