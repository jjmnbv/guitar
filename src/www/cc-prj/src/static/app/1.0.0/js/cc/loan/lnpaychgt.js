$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;   
     
  //动态字典转换
  $('.payOpt').selectloader({'payOpt': app.dicts.dict_3009});
  $('.payTyp').selectloader({'payTyp': app.dicts.dict_3010});
  $('.athInd').selectloader({'athInd': app.dicts.dict_3016});
  $('.valTyp').selectloader({'valTyp': app.dicts.dict_3033});
  
  app.registerTextHelper('payOpt', app.dicts.dict_3009, 'code', 'name');
  app.registerTextHelper('payTyp', app.dicts.dict_3010, 'code', 'name');
  app.registerTextHelper('athInd', app.dicts.dict_3016, 'code', 'name');
  app.registerTextHelper('valTyp', app.dicts.dict_3033, 'code', 'name');
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
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
 	   
    }
  };



  /**
   * 校验授权编号、授权状态的唯一性
   */
  
  var validatorNotExists = function (form) {
      $("input[name='athNo']", form).rules("add", {
    	  synchronousRemote: {
              url: app.LNPAYCHGT_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  athNo:function(){ return form.find('[name="athNo"]').val(); },
            	  athInd:function(){ return form.find('[name="athInd"]').val(); },
              }},
          messages: {
        	  synchronousRemote: "该授权编号已存在！"
          },
          onkeyup: false,
          onfocusout: false
      });

      $("select[name='athInd']", form).rules("add", {
    	  synchronousRemote: {
              url: app.LNPAYCHGT_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  athNo:function(){ return form.find('[name="athNo"]').val(); },
            	  athInd:function(){ return form.find('[name="athInd"]').val();},
              }},
          messages: {
        	  synchronousRemote: "该授权状态已存在！"
          },
          onkeyup: false,
          onfocusout: false
      });
  }

  /**
   * 修改贷款还款方式变更信息
   */
  $('#edit').getModal({
	   selector: function () {
	     return !!$('[type=radio]:checked').length;
	   },
	   compileBefore:function () {
	       var id = $('[type=radio]:checked').data('id');
	       window.location.href="lnpaychgt-edit.html"+id;
	       
	   }
});
  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条贷款还款方式变更信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var rrNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNPAYCHGT_REMOVE+rrNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
