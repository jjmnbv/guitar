$(function () {

  var $ = window.jQuery;
  var app = window.app;
    $('.filter-query-form').show();
    $('.toggleSearch').hide();

  $('.pagination-query').click(function () {
    if($('#lnloinf-lgd-form').valid()){
        $('#mainPage').pagination({
            "first-store": app.firstStore
        });
    }else{
    }
  });


  app.context.formHtml = $('#form-template').html();
  $('.curTyp').selectloader({'curTyp': app.dict_cfg.dict_cfg_CurTyp});
  app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');

});
