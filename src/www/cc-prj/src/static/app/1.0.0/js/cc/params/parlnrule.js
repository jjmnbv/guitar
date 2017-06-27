+ function($, app) {
	app.registerTextHelper('lstDueDayTyp', app.lstDueDayTyp, 'code', 'name');
    app.registerTextHelper('ovIntCalTyp', app.ovIntCalTyp, 'code', 'name'); 
    app.registerTextHelper('cmIntCalTyp', app.ovIntCalTyp, 'code', 'name'); 
    app.registerTextHelper('advInYn', app.advInYn, 'code', 'name'); 
    app.registerTextHelper('advPayInd', app.advInYn, 'code', 'name'); 
    app.registerTextHelper('calCmIntInd', app.advInYn, 'code', 'name'); 
    app.registerTextHelper('advPayAmCd', app.advPayAmCd, 'code', 'name'); 
    app.registerTextHelper('advInAmCd', app.advInAmCd,'code', 'name'); 
    app.registerTextHelper('payTyp', app.payTyp, 'code', 'name'); 
    app.registerTextHelper('grcTyp', app.grcTyp, 'code', 'name'); 
    app.registerTextHelper('norPayOrd', app.norPayOrd, 'code', 'name');
    app.registerTextHelper('outPayOrd', app.outPayOrd, 'code', 'name');
    app.registerTextHelper('devPayOrd', app.devPayOrd, 'code', 'name');
}(window.jQuery, window.app); 
$(function () {
	  var $ = window.jQuery;
	  var app = window.app;
      $('.intPerNum').selectloader({intPerNum:app.reserveddecimal});
	  $('.ovIntPerNum').selectloader({ovIntPerNum:app.reserveddecimal});
	  $('.feePerNum').selectloader({feePerNum:app.reserveddecimal});
	  $('.lstDueDayTyp').selectloader({lstDueDayTyp:app.lstDueDayTyp});
	  $('.ovIntCalTyp').selectloader({ovIntCalTyp:app.ovIntCalTyp});
	  $('.cmIntCalTyp').selectloader({cmIntCalTyp:app.ovIntCalTyp});
	  $('.advInYn').selectloader({advInYn:app.advInYn});
	  $('.advPayInd').selectloader({advPayInd:app.advInYn});
	  $('.calCmIntInd').selectloader({calCmIntInd:app.advInYn});
	  $('.advPayAmCd').selectloader({advPayAmCd:app.advPayAmCd});
	  $('.advInAmCd').selectloader({advInAmCd:app.advInAmCd});
	  $('.payTyp').selectloader({payTyp:app.payTyp});
	  $('.grcTyp').selectloader({grcTyp:app.grcTyp});
	  $('.norPayOrd').selectloader({'norPayOrd': app.norPayOrd});
	  $('.outPayOrd').selectloader({'outPayOrd': app.outPayOrd});
	  $('.devPayOrd').selectloader({'devPayOrd': app.devPayOrd});
    
    
	  app.context.formHtml = $('#form-template').html();
  

  
  /**
   * 修改核算规则信息
   */
	 $('#edit').getModal({
		    selector: function () {
		      return !!$('[type=radio]:checked').length;
		    },
		    compileBefore:function () {
		      var id = $('[type=radio]:checked').data('id');
		      window.location.href="parLnRule-add.html?operatH=edit&ruNo="+id;
		    }
	});

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条核算规则信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
      var ruNo=$('[type=radio]:checked').data('id');
	  app.context.submit({
	  modal: modal,
	  url: app.PARLNRULE_REMOVE+ruNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
