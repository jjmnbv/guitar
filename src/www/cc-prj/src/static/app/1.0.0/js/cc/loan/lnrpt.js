+ function($, app) {
	 app.registerTextHelper('athInd', app.athInd, 'code', 'name');
	 app.registerTextHelper('payPatCd', app.payPatCd, 'code', 'name');
	 app.registerTextHelper('curTyp', app.curTyp, 'code', 'name');
	 app.registerTextHelper('advPayAmCd', app.advPayAmCd, 'code', 'name');
	 app.registerTextHelper('advInYn', app.advInYn, 'code', 'name');
	 app.registerTextHelper('advInAmCd', app.advInAmCd, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  $('.curHidden').hide();
  
  $('.athInd').selectloader({'athInd': app.athInd});
  $('.payPatCd').selectloader({'payPatCd': app.payPatCd});


  /**
   * 修改贷款还款授权
   */
  $('#edit').getModal({
    selector: function () {
      if($('[type=radio]:checked').length>0){
        return ($('[type=radio]:checked').data('athind'))
      }
    },
    compileBefore:function () {
      var id = $('[type=radio]:checked').data('id');
      var athind = $('[type=radio]:checked').data('athind');
      if(athind!='0S'){
    	  app.alertError("授权状态不为'授权未出账'状态，不允许修改!")
    	  return;
      }
      window.location.href="lnrpt-add.html?operatH=edit&athNo="+id;
    }
  });
  $('#view').getModal({
	    selector: function () {
	      if($('[type=radio]:checked').length>0){
	        return ($('[type=radio]:checked').data('athind'))
	      }
	    },
	    compileBefore:function () {
	      var id = $('[type=radio]:checked').data('id');
	      var athind = $('[type=radio]:checked').data('athind');
	      window.location.href="lnrpt-add.html?operatH=view&athNo="+id;
	    }
	  });
  
  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    title:'删除流水表',
    textArray: '确定要删除该条贷款还款授权吗？',
    noHandleArray:['1S','2S'],
    noHandle:'授权状态不为授权未出账状态，不允许删除!',
    size: 'modal-sm',
    selector: function () {
      if($('[type=radio]:checked').length>0){
        return ($('[type=radio]:checked').data('athind'))
      }
    }
  }, function (modal) {
    var athNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNRPT_REMOVE+athNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
