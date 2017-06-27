+ function($, app) {
	app.registerTextHelper('setSt', app.setSt, 'code', 'name');
	app.registerTextHelper('corSt', app.corSt, 'code', 'name');
	app.registerTextHelper('curTyp', app.curTyp, 'code', 'name');

	$('.txNo').selectloader({'txNo': app.dict_cfg.dict_cfg_TrTyp});
	app.registerTextHelper('txNo', app.dict_cfg.dict_cfg_TrTyp, 'code', 'name');
}(window.jQuery, window.app);
$(function () {

  var $ = window.jQuery;
  var app = window.app;
	var exDtlId = GetQueryString('exDtlId');
	$('.pagination-form [name=exDtlId]').val(exDtlId);
   $('.main-page').pagination({
	   'first-store':app.firstStore
   });


	/*冲正操作*/
	
	$('#reversal-oprate').getModal({
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore: function () {
	      var corSt = $('[type=radio]:checked').data('corst');
	      var txSeqNo=$('[type=radio]:checked').data('id');
	      if(corSt!='0'){
	    	 app.alertError("非可冲正状态，不可进行交易冲正！");
	    	 return;
	      }
	      app.$post(app.LNTRXLOG_REVERSAL+'/'+txSeqNo).done(function (data) {
				if(app.isOK(data)){
					app.alertOK('提交成功！');
				}else{
					var errors = data.errors.join(',');
					app.alertError(errors || failureText || '提交失败！');
				}
			});
	    }

	  });
	
});
	
