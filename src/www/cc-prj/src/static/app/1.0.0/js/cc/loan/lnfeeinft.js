$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  
  
  
  $('.feePayTyp').selectloader({feePayTypList:app.dicts.dict_3030});
  $('.feeTyp').selectloader({feeTypList:app.dicts.dict_1});  
  $('.feePaySrc').selectloader({feePaySrcList:app.dicts.dict_3}); 
  $('.feeCalcBs').selectloader({feeCalcBsList:app.dicts.dict_3031});
  $('.feeAcTyp').selectloader({feeAcTypList:app.dicts.dict_3024});
  $('.rpTyp').selectloader({rpTypList:app.dicts.dict_3025});
  $('.feeAmtTyp').selectloader({feeAmtTypList:app.dicts.dict_3013});
  $('.curTyp').selectloader({'curTyp': app.dict_cfg.dict_cfg_CurTyp});
  $('.payPlTyp').selectloader({payPlTypList:app.dicts.dict_3006});
  $('.aprTyp').selectloader({aprTypList:app.dicts.dict_3002});   
  $('.feeCalcTyp').selectloader({feeCalcTypList:app.dicts.dict_4});
  
  
  app.registerTextHelper('feePayTyp', app.dicts.dict_3030, 'code', 'name');
  app.registerTextHelper('feeTyp', app.dicts.dict_1, 'code', 'name');
  app.registerTextHelper('feePaySrc', app.dicts.dict_3, 'code', 'name');
  app.registerTextHelper('feeCalcBs', app.dicts.dict_3031, 'code', 'name');
  app.registerTextHelper('feeAcTyp', app.dicts.dict_3024, 'code', 'name');
  app.registerTextHelper('rpTyp', app.dicts.dict_3025, 'code', 'name'); 
  app.registerTextHelper('feeAmtTyp', app.dicts.dict_3013, 'code', 'name');
  app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
  app.registerTextHelper('payPlTyp', app.dicts.dict_3006, 'code', 'name');
  app.registerTextHelper('aprTyp', app.dicts.dict_3002, 'code', 'name');
  app.registerTextHelper('feeCalcTyp', app.dicts.dict_4, 'code', 'name');
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  
	 form.find('.feePayTyp').selectloader({feePayTypList:app.dicts.dict_3030}); 
	 form.find('.feeTyp').selectloader({feeTypList:app.dicts.dict_1});
	 form.find('.feePaySrc').selectloader({feePaySrcList:app.dicts.dict_3});
	 form.find('.feeCalcBs').selectloader({feeCalcBsList:app.dicts.dict_3031});
	 form.find('.feeAcTyp').selectloader({feeAcTypList:app.dicts.dict_3024});
	 form.find('.rpTyp').selectloader({rpTypList:app.dicts.dict_3025});
	 form.find('.feeAmtTyp').selectloader({feeAmtTypList:app.dicts.dict_3013});
	 form.find('.curTyp').selectloader({'curTyp':app.dict_cfg.dict_cfg_CurTyp});
	 form.find('.payPlTyp').selectloader({payPlTypList:app.dicts.dict_3006});
	 form.find('.aprTyp').selectloader({aprTypList:app.dicts.dict_3002});
	 form.find('.feeCalcTyp').selectloader({feeCalcTypList:app.dicts.dict_4});
	 
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
 	   form.find('[name="athNo"]').prop('readonly', true)
 	   form.find('[name="subNo"]').prop('readonly', true)
    }
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    size:'modal-lg',
    title: '新增贷款授权信息',
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
      url: app.LNFEEINFT_CREATE
    }, app);
  });
  
  /**
   * 主键（授权编号、序号）是否存在
   */
  
    var validatorNotExists = function (form) {
      $("input[name='athNo']", form).rules("add", {
    	  synchronousRemote: {
              url: app.LNFEEINFT_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  athNo:function(){ return form.find('[name="athNo"]').val(); },
            	  subNo:function(){ return form.find('[name="subNo"]').val(); },
              }
          },
          messages: {
        	  synchronousRemote: "该授权编号已存在！"
          },
          onkeyup: false,
          onfocusout: false
      });

      $("input[name='subNo']", form).rules("add", {
    	  synchronousRemote: {
              url: app.LNFEEINFT_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  subNo:function(){ return form.find('[name="subNo"]').val(); },
            	  athNo:function(){ return form.find('[name="athNo"]').val();},
              }
          },
          messages: {
        	  synchronousRemote: "该子序号已存在！"
          },
          onkeyup: false,
          onfocusout: false
      });

  }
  
  
  /**
   * 修改贷款授权信息
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑贷款授权信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      operatingMode='edit'
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNFEEINFT_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    /*  $('input[name=athNo]').prop('readonly',false);
      $('input[name=subNo]').prop('readonly',true);*/
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNFEEINFT_UPDATE
    }, app);
  });

  /**
   * 删除贷款授权信息
   */
  
  $('#delete').getModal({
    text: '确定要删除贷款授权信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var id=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNFEEINFT_REMOVE+id,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});