+ function($, app) {
	 app.registerTextHelper('payPatCd',app.payPatCd,'code','name');
	 app.registerTextHelper('curTyp',app.curTyp,'code','name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;

  $('#payPatCd').selectloader({'payPatCdList': app.payPatCd});  
  $('#curTyp').selectloader({'curTypList': app.curTyp});
  

	$('#view-dtl').getModal({  
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		compileBefore:function () {
			 var buzSeqNo = $('[type=radio]:checked').data('id');
		    window.location.href="../lnrplog/lnrplogdtl-index.html?buzSeqNo="+buzSeqNo+"&repayPreview=repayPreview";
		}
	});
});

