$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
	$('.main-page').pagination({
	  "first-store": app.firstStore
	});

  
    $('.feeTyp').selectloader({feeTypList:app.dicts.dict_1});
    $('.feePayTyp').selectloader({feePayTypList:app.dicts.dict_3030});
    $('.feePaySrc').selectloader({feePaySrcList:app.dicts.dict_3});
    $('.feeCalcTyp').selectloader({feeCalcTypList:app.dicts.dict_4});
    $('.feeCalcBs').selectloader({feeCalcBsList:app.dicts.dict_3031});
    $('.odInd').selectloader({odIndList:app.dicts.dict_3026});
    $('.clnInd').selectloader({clnIndList:app.dicts.dict_3002});
    $('.feeAcTyp').selectloader({feeAcTypList:app.dicts.dict_3024});
    $('.rpTyp').selectloader({rpTypList:app.dicts.dict_3025});
    $('.feeAmtTyp').selectloader({feeAmtTypList:app.dicts.dict_3013});
    $('.aprTyp').selectloader({aprTypList:app.dicts.dict_3002});
    $('.payPlTyp').selectloader({payPlTypList:app.dicts.dict_3006});
    $('.curTyp').selectloader({'curTyp': app.dict_cfg.dict_cfg_CurTyp});
    
    app.registerTextHelper('feeTyp', app.dicts.dict_1, 'code', 'name');
    app.registerTextHelper('feePayTyp', app.dicts.dict_3030, 'code', 'name');
    app.registerTextHelper('feePaySrc', app.dicts.dict_3, 'code', 'name');
    app.registerTextHelper('feeCalcTyp', app.dicts.dict_4, 'code', 'name');
    app.registerTextHelper('feeCalcBs', app.dicts.dict_3031, 'code', 'name');
    app.registerTextHelper('odInd', app.dicts.dict_3026, 'code', 'name');
    app.registerTextHelper('clnInd', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('feeAcTyp', app.dicts.dict_3024, 'code', 'name');
    app.registerTextHelper('rpTyp', app.dicts.dict_3025, 'code', 'name');
    app.registerTextHelper('feeAmtTyp', app.dicts.dict_3013, 'code', 'name');
    app.registerTextHelper('aprTyp', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('payPlTyp', app.dicts.dict_3006, 'code', 'name');
    app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
    
    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {
    
    form.find('.feeTyp').selectloader({feeTypList:app.dicts.dict_1});
    form.find('.feePayTyp').selectloader({feePayTypList:app.dicts.dict_3030});
    form.find('.feePaySrc').selectloader({feePaySrcList:app.dicts.dict_3});
    form.find('.feeCalcTyp').selectloader({feeCalcTypList:app.dicts.dict_4});
    form.find('.feeCalcBs').selectloader({feeCalcBsList:app.dicts.dict_3031});
    form.find('.odInd').selectloader({odIndList:app.dicts.dict_3026});
    form.find('.clnInd').selectloader({clnIndList:app.dicts.dict_3002});
    form.find('.feeAcTyp').selectloader({feeAcTypList:app.dicts.dict_3024});
    form.find('.rpTyp').selectloader({rpTypList:app.dicts.dict_3025});
    form.find('.feeAmtTyp').selectloader({feeAmtTypList:app.dicts.dict_3013});
    form.find('.aprTyp').selectloader({aprTypList:app.dicts.dict_3002});
    form.find('.payPlTyp').selectloader({payPlTypList:app.dicts.dict_3006});
    form.find('.curTyp').selectloader({'curTyp':app.dict_cfg.dict_cfg_CurTyp});
    
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
  	   form.find('[name="feeNo"]').prop('readonly', true);
     }
    
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    size:'modal-lg',
    title: '新增贷款信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
    	
    	operatingMode='add';
    	app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    showAfter: function (modal) { 
	$("input[name='feeAmtl']").on('change', function () {
		   var $this = $(this);
		    $this.val(app.formatPercent($this.val()*100));
		    $("input[name='feeAmt']").val(app.unformatPercent($this.val()));
		  });
	 $("input[name='feeSal']").on('change', function () {
		   var $this = $(this);
		    $this.val(app.formatPercent($this.val()*100));
		    $("input[name='feeSa']").val(app.unformatPercent($this.val()));
		  });
	 $("input[name='bsAmtl']").on('change', function () {
		   var $this = $(this);
		    $this.val(app.formatPercent($this.val()*100));
		    $("input[name='bsAmt']").val(app.unformatPercent($this.val()));
		  });
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNFEEINF_CREATE
    }, app);
  });

  /**
   * 校验费用编号是否存在
   */
  var validatorNotExists = function (form) {
	     $("input[name='feeNo']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.LNFEEINF_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 feeNo:function(){
	        		  return form.find('[name="feeNo"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该费用编号已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };
	  
  /**
   * 修改贷款信息
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑贷款信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      operatingMode='edit';
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNFEEINF_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },

    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=feeNo]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNFEEINF_UPDATE
    }, app);
  });

  
  $('#delete').getModal({
    text: '确定要删除该条贷款信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var feeNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNFEEINF_REMOVE+feeNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});