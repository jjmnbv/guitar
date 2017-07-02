$(function () {

  var $ = window.jQuery;
  var app = window.app;

  //dataJson(app.LNLOINF_ENTBRF, $('#lnactentl-list-template').html(), $('#dealRecord') );
  $('#confirm').click(function () {
    if($('#form-entbrf').valid()) {
      var url = $('#form-entbrf').attr('action');
      var data = $('#form-entbrf').serialize();
      dataJson(url+'?'+data, $('#lnactentl-list-template').html(), $('#dealRecord') );
      $('.protlet-ri').hide();
    }else{
      return;
    }
  });
  $('.protlet-ri').hide();

  $('#reset').click(function () {
    $("[name='loNo']").val('');
    $("[name='acDt']").val('');
    $("[name='trCd']").val('');
  });

  function dataJson(url, template, container) {
    app.$getJSON(url).done(function (res) {
      var tpl = Handlebars.compile(template);
      var html = tpl(res);
      container.html(html);
    });
  }

});
function clickEnt(buzSeqNo){
  $('.protlet-ri').show();
  app.$getJSON(app.LNLOINF_ENTLIST + "?buzSeqNo=" + buzSeqNo).done(function (res) {
    var tpl = Handlebars.compile($('#lnactentl-page-template').html());
    var html = tpl(res);
    $('#dealChannel').html(html);

    var tpl2 = Handlebars.compile($('#lnactentl-mess-template').html());
    var html2 = tpl2(res.content[0]);
    $('#dealMess').html(html2);
  });
}