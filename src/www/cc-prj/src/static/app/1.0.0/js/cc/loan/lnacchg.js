+ function($, app) {
	  app.registerTextHelper('acTyp', app.acTyp, 'code', 'name');
	  app.registerTextHelper('acCurTyp', app.acCurTyp, 'code', 'name');
	  app.registerTextHelper('acCertTyp', app.acCertTyp, 'code', 'name');
	  app.registerTextHelper('acTypCde', app.acTypCde, 'code', 'name');  
	  app.registerTextHelper('athInd', app.athInd, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	 form.find('.acTyp').selectloader({'acTyp':app.dicts.dict_3024});
    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });
    
    app.bindFormValidation(form);
    if(operatingMode =='add'){
  	   validatorNotExists(form);
     }else{
  	   form.find('[name="athNo"]').prop('readonly', true)
  	   form.find('[name="subNo"]').prop('readonly', true)
     }
  };



  /**
   * 校验授权编号、子序号的唯一性
   */
  
  var validatorNotExists = function (form) {
      $("input[name='athNo']", form).rules("add", {
          remote: {
              url: app.LNACCHG_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  athNo:function(){ return form.find('[name="athNo"]').val(); },
            	  subNo:function(){ return form.find('[name="subNo"]').val(); },
              }},
          messages: {
              remote: "该授权编号已存在！"
          }
      });

      $("input[name='subNo']", form).rules("add", {
          remote: {
              url: app.LNACCHG_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  athNo:function(){ return form.find('[name="athNo"]').val(); },
            	  subNo:function(){ return form.find('[name="subNo"]').val();},
              }},
          messages: {
              remote: "该子序号已存在！"
          }
      });
  }

  /**
   * 修改还款账号变更
   */
  $('#edit').getModal({
	   selector: function () {
	     return !!$('[type=radio]:checked').length;
	   },
	   compileBefore:function () {
	       var id = $('[type=radio]:checked').data('id');
	       var athInd = $('[type=radio]:checked').data('athind');
	       if(athInd=='授权已出账'){
	    	   app.alertError('已出账不能修改！');
	       }else{
	    	   window.location.href="lnacchg-edit.html?operatH=edit&"+id;
	       }
	   }
});
  
  $('#view').getModal({
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore:function () {
	      var id = $('[type=radio]:checked').data('id');
	      window.location.href="lnacchg-edit.html?operatH=view&"+id;
	    }
});

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
		title:'删除还款账号变更信息',
		textArray: '确定要删除该条还款账号变更信息吗？',
	    size: 'modal-sm',
	    noHandleArray:['授权已出账'],
	    noHandle:'已出账不能进行删除！',
	    selector: function () {
	    	 if($('[type=radio]:checked').length>0){
	             return ($('[type=radio]:checked').data('athind')) //返回状态码
	         }
	    }
	  }, function (modal) {
	    var id=$('[type=radio]:checked').data('id');
	    app.context.submit({
	      modal: modal,
	      url: app.LNACCHG_REMOVE+"?"+id,
	      text: '删除成功',
	      isEasyModal: true
	    }, app);
	  });
});
