+ function($, app) {
	  app.registerTextHelper('athInd', app.athInd, 'code', 'name');
	  app.registerTextHelper('chgChl', app.chgChl, 'code', 'name');
	  app.registerTextHelper('rtChgPlTyp', app.rtChgPlTyp, 'code', 'name');
	  app.registerTextHelper('valTyp', app.valTyp, 'code', 'name');
	  app.registerTextHelper('newRatTyp', app.newRatTyp, 'code', 'name');
	  app.registerTextHelper('oldRatTyp', app.newRatTyp, 'code', 'name');
	  app.registerTextHelper('rtChgTyp', app.rtChgTyp, 'code', 'name');
	  app.registerTextHelper('newBaRtTyp', app.newBaRtTyp, 'code', 'name');
	  app.registerTextHelper('oldBaRtTyp', app.newBaRtTyp, 'code', 'name');
	  app.registerTextHelper('oldRatMod', app.oldRatMod, 'code', 'name');
	  app.registerTextHelper('newRatMod', app.oldRatMod, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  
  $('.rtChgTyp').selectloader({rtChgTypList: app.rtChgTyp});

  $("input[name='oldBaRt']").on('chang',function(){
	  var $this=$(this);
	  $this.val(app.formatPercent($this.val()*100));
	  $("input[name='oldBaRt']").val(app.unformatPercent($this.val()));
  });

  

    /**
   * 修改利率变更信息
   */

    $('#edit').getModal({
	   selector: function () {
	     return !!$('[type=radio]:checked').length;
	   },
	   compileBefore:function () {
		   var athInd = $('[type=radio]:checked').data('athind');
	       var id = $('[type=radio]:checked').data('id');
	       if(athInd == '授权已出账'){
	    		  app.alertError('已出账不能进行编辑！');
	    	  }else{
	    		  window.location.href="lnratchg-edit.html?operatH=edit&athNo="+id;
	    	  }
	   }
 });
    
   //查看功能
    $('#view').getModal({
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore:function () {
	      var id = $('[type=radio]:checked').data('id');
	      window.location.href="lnratchg-edit.html?operatH=view&athNo="+id;
	    }
});


  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
	title:'删除利率变更信息',
	textArray: '确定要删除该条利率变更信息吗？',
    size: 'modal-sm',
    noHandleArray:['授权已出账'],
    noHandle:'已出账不能进行删除！',
    selector: function () {
    	 if($('[type=radio]:checked').length>0){
             return ($('[type=radio]:checked').data('athind')) //返回状态码
         }
    }
  }, function (modal) {
    var athNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNRATCHG_REMOVE+athNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
