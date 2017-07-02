+ function($, app) {
	  app.registerTextHelper('cuCertTyp', app.cuCertTyp, 'code', 'name');
	  app.registerTextHelper('curTyp', app.curTyp, 'code', 'name');

	  //证件类型
	  $('#cuCertTyp').selectloader({'certTypList': app.cuCertTyp});
	  
	  $('#view').getModal({
		    size: 'modal-sm',
		    selector: function () {
		      return !!$('[type=radio]:checked').length;
		    },
		    compileBefore: function () {
		      var id = $('[type=radio]:checked').data('id');
		      var curTyp=$('[type=radio]:checked').data('curtyp');
		      var valAcNo=$('[type=radio]:checked').data('valacno');
		      window.location.href="lndepdtl-index.html"+id+"&curTyp="+curTyp+"&valAcNo="+valAcNo;
		    }
		  });
	  
	  
}(window.jQuery, window.app);

