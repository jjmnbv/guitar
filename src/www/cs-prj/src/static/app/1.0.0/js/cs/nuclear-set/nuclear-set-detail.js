+ function($, app) {
  /**
   * 初始化列表数据
   */
  app.registerTextHelper('telChePersCd', app.telChePersCdList, 'code', 'name');
  app.registerTextHelper('telCheTyCd', app.telCheTyCdList, 'code', 'name');
  app.$getJSON(app.GET_NUCLEAR_DATA_BY_ID + app.request.telCheDd, function(data) {
    if(app.isOK(data)) {
      var tpl = Handlebars.compile($('#main-cont-template').html());
      var html = tpl(data);
      $("#main-template").html(html);
      return;
    }
    app.alertError(data.errors.join('\n'));
  });

}(window.jQuery, window.app);