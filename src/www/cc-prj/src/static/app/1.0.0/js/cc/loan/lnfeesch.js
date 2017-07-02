$(function () {
	var $ = window.jQuery;
  	var app = window.app;
    var operatingMode;
  	$('.main-page').pagination({
	  "first-store": app.firstStore
	});
	  
    $('.clnInd').selectloader({clnIndList: app.dicts.dict_3002});
	$('.odInd').selectloader({odIndList: app.dicts.dict_3026});
	
	app.registerTextHelper('clnInd', app.dicts.dict_3002, 'code', 'name');
	app.registerTextHelper('odInd', app.dicts.dict_3026, 'code', 'name');
	    
	app.context.formHtml = $('#form-template').html();
	app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */
	  form.find('.clnInd').selectloader({clnIndList:app.dicts.dict_3002});
	  form.find('.odInd').selectloader({odIndList:app.dicts.dict_3026});
	  
    // 初始化日历插件
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
 	   form.find('[name="feeNo"]').prop('readonly', true)
 	   form.find('[name="perQt"]').prop('readonly', true)
    }
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    size:'modal-lg',
    title: '新增费用分摊计划信息',
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
      url: app.LNFEESCH_CREATE
    }, app);
  });

  
  /**
   * 校验费用编号、期数的唯一性
   */
  
  var validatorNotExists = function (form) {
      $("input[name='feeNo']", form).rules("add", {
    	  synchronousRemote: {
              url: app.LNFEESCH_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  feeNo:function(){ return form.find('[name="feeNo"]').val(); },
            	  perQt:function(){ return form.find('[name="perQt"]').val(); },
              }},
          messages: {
        	  synchronousRemote: "该信息已存在！"
          }
      });

      $("input[name='perQt']", form).rules("add", {
    	  synchronousRemote: {
              url: app.LNFEESCH_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  perQt:function(){ return form.find('[name="perQt"]').val(); },
            	  feeNo:function(){ return form.find('[name="feeNo"]').val();},
              }},
          messages: {
        	  synchronousRemote: "该信息已存在！"
          },
          onkeyup: false,
          onfocusout: false
      });
  }
  
  
  
  /**
   * 修改费用分摊计划信息
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑费用分摊计划信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      operatingMode='edit';
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNFEESCH_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=feeNo]').prop('readonly',false);
      $('input[name=perQt]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNFEESCH_UPDATE
    }, app);
  });

  
  $('#delete').getModal({
    text: '确定要删除该条费用分摊计划信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var id=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNFEESCH_REMOVE+id,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});