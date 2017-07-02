$(function () {
	var $ = window.jQuery;
	var app = window.app;
	var operatingMode;
	$('.main-page').pagination({
	  "first-store": app.firstStore
	});
	  
   $('.rrInd').selectloader({rrIndList: app.dicts.dict_3002});
   $('.curTyp').selectloader({'curTyp': app.dict_cfg.dict_cfg_CurTyp});
   $('.trCd').selectloader({'trCd': app.dict_cfg.dict_cfg_TrTyp});
       
   app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
   app.registerTextHelper('trCd', app.dict_cfg.dict_cfg_TrTyp, 'code', 'name');
   app.registerTextHelper('rrInd', app.dicts.dict_3002, 'code', 'name');
       
   app.context.formHtml = $('#form-template').html();
   app.context.formInit = function (form) {
	   
	  form.find('.rrInd').selectloader({rrIndList:app.dicts.dict_3002});
	  form.find('.curTyp').selectloader({'curTyp':app.dict_cfg.dict_cfg_CurTyp});
	  form.find('.trCd').selectloader({'trCd':app.dict_cfg.dict_cfg_TrTyp});
	  form.find(".date-picker-page").datepicker({
	      rtl: App.isRTL(),
	      orientation: "left",
	      autoclose: !0,
	      format: "yyyy-mm-dd",
	      'start-date': "+0d",
	      language: 'zh-CN'
	    });
    //冲正金额格式化
    $('[name=rrAmtl]').on('change',function () {
        var $this = $(this);
        if($this.val().indexOf(',') != -1){
            var Mo = app.unformatMoney($this.val());
            $this.val(app.formatCurrencyM(Mo,2));
            $('[name=rrAmt]').val(app.unformatMoney($this.val()));
        }else{
            $this.val(app.formatCurrencyM($this.val(),2));
            $('[name=rrAmt]').val(app.unformatMoney($this.val()));
        }
    });
    
    app.bindFormValidation(form);
    if(operatingMode =='add'){
 	   validatorNotExists(form);
    }else{
 	   form.find('[name="rrNo"]').prop('readonly', true)
    }
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    size:'modal-lg',
    title: '新增交易冲正信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
    	operatingMode='add'
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
      url: app.LNREDREML_CREATE
    }, app);
  });

  /**
  *校验冲正编码的唯一性
  *
  * */
 
  	var validatorNotExists = function (form) {
	     $("input[name='rrNo']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.LNREDREML_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{  rrNo:function(){ return form.find('[name="rrNo"]').val();}
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该冲正编码已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };


  /**
   * 修改交易冲正信息
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑交易冲正信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      operatingMode='edit';
      var id = $('[type=radio]:checked').data('id');
      var rrAmt = $('[type=radio]:checked').data('rramt');
      $('[name=rrAmtl]').val(app.formatCurrencyM(rrAmt,2));
      if (!id) return;
      app.context.showBefore({
        url: app.LNREDREML_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $("input[name=rrAmtl]").val("");
      $('input[name=rrNo]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNREDREML_UPDATE
    }, app);
  });


  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条交易冲正信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var rrNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNREDREML_REMOVE+rrNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
