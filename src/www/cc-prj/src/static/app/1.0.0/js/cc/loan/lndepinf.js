+ function($, app) {
	  app.registerTextHelper('cuCertTyp', app.cuCertTyp, 'code', 'name');
	  app.registerTextHelper('curTyp', app.curTyp, 'code', 'name');

	  //证件类型
	  $('#cuCertTyp').selectloader({'certTypList': app.cuCertTyp});
}(window.jQuery, window.app);

