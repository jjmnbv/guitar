$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;

  $('.main-page').pagination({
    "first-store": app.firstStore
  });

  $('.clnInd').selectloader({clnIndList: app.dicts.dict_3002});
  app.registerTextHelper('clnInd', app.dicts.dict_3002, 'code', 'name');
  
  app.context.formHtml = $('#form-template').html();

  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */
	  form.find('.clnInd').selectloader({clnIndList:app.dicts.dict_3002});
	
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
 	   form.find('[name="buzSeqNo"]').prop('readonly', true)
    }
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    size:'modal-lg',
    title: '新增贷款利率分段信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
    	operatingMode='add';
    	app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNRATCHGSEC_CREATE
    }, app);
  });

  /**
   * 校验业务流水号是否存在
   */
  var validatorNotExists = function (form) {
	     $("input[name='buzSeqNo']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.LNRATCHGSEC_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 buzSeqNo:function(){
	        		  return form.find('[name="buzSeqNo"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该业务流水号已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };


  /**
   * 修改贷款利率分段
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑贷款利率分段信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      operatingMode='edit';
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNRATCHGSEC_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },


    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=buzSeqNo]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNRATCHGSEC_UPDATE
    }, app);
  });


  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条贷款利率分段信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var buzSeqNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNRATCHGSEC_REMOVE+buzSeqNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
