
$(function () {
  var $ = window.jQuery;
  var app = window.app;
  $('.main-page').pagination({
	    "first-store": app.firstStore
  });
  app.linSepFlgList = [
	    {"code":"\\r", "name":"ios(\\r)"},
	    {"code":"\\n", "name":"linux(\\n)"},
	    {"code":"\\r\\n", "name":"windows(\\r\\n)"}
	  ];

  app.fiChList = [
	    {"code":"UTF-8", "name":"UTF-8"},
	    {"code":"GBK", "name":"GBK"}
	  ];
  app.splFlgList=[
	  {"code":"|", "name":"竖线(|)"},
	  {"code":"/", "name":"斜线(/)"},
	  {"code":"\\", "name":"反斜线(\\)"},
	  {"code":"@|@ ", "name":"自定义(@|@)"}
  ]
  app.addChList=[
	  {"code":" ", "name":"空格"}
  ]
  $('.numTyp').selectloader({numTypList:app.dicts.dict_3048});
  $('.addCh').selectloader({addChList:app.addChList});
  $('.splFlg').selectloader({splFlgList:app.splFlgList});
  $('.fiCh').selectloader({fiChList:app.fiChList});
  $('.linSepFlg').selectloader({linSepFlgList:app.linSepFlgList});
  $('.fixLenInd').selectloader({fixLenIndList: app.dicts.dict_3002});
  $('.algFlg').selectloader({algFlgList: app.dicts.dict_3042});
  app.registerTextHelper('fixLenInd', app.dicts.dict_3002, 'code', 'name');
  app.registerTextHelper('algFlg', app.dicts.dict_3042, 'code', 'name');
  app.registerTextHelper('fiCh', app.fiChList, 'code', 'name');
  app.registerTextHelper('addCh', app.addChList, 'code', 'name');
  app.registerTextHelper('splFlg', app.splFlgList, 'code', 'name');
  app.registerTextHelper('linSepFlg', app.linSepFlgList, 'code', 'name');
  app.registerTextHelper('numTyp', app.dicts.dict_3048, 'code', 'name');
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  form.find('.fixLenInd').selectloader({fixLenIndList:app.dicts.dict_3002});
	  form.find('.algFlg').selectloader({algFlgList:app.dicts.dict_3042});
	  form.find('.linSepFlg').selectloader({linSepFlgList:app.linSepFlgList});
	  form.find('.fiCh').selectloader({fiChList:app.fiChList});
	  form.find('.splFlg').selectloader({splFlgList:app.splFlgList});
	  form.find('.addCh').selectloader({addChList:app.addChList});
	  form.find('.numTyp').selectloader({numTypList:app.dicts.dict_3048});
      form.find('[name=fixLenInd]').on('change',function(){
		  var ss = $(this).val(); 
   		  if(ss=="Y"){
            form.find("[name=addCh], [name=algFlg]").addClass('required')
   						.attr("disabled",false)
   			 			.parent().siblings('label').addClass('fill');
   			form.find("[name=splFlg]").attr("disabled",true)
								.removeClass('required')
								.parent().siblings('label').removeClass('fill');
            form.find('#splFlg-error').hide();
							  
   		  }else if(ss='N'){
            form.find("[name=addCh], [name=algFlg]").attr("disabled",true)
      					.removeClass('required')
   						.parent().siblings('label').removeClass('fill');
            form.find('#addCh-error, #algFlg-error').hide();
            form.find("[name=splFlg]").attr("disabled",false)
							.addClass('required')
							.parent().siblings('label').addClass('fill');
   		  }
	  });
      form.find("[name=endFlg]").on('blur',function(){
		  var endflg=  $(this).val();
			$(this).val($.trim(endflg));
	  });
	  //测试换行符号
      form.find('[name=linSepFlg]').on('change',function(){
		  var options=$("#linSepFlg option:selected");  //获取选中的项
		  console.log(options);
	  })
	  
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

  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增文本读写规则表',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
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
      url: app.CEFICFG_CREATE
    }, app);
  });


  /**
   * 修改文本读写规则表
   */
  $('#edit').getModal({
    title:'编辑文本读写规则表',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore:function () {
//    var athInd = $('[type=radio]:checked').data('athind');
      var fiId = $('[type=radio]:checked').data('id');
      window.location.href="ceficol-index.html?fiId="+fiId;
    }
  });


  $('#delete').getModal({
    text: '确定要删除该条文本读写规则吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var fiId=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.CEFICFG_REMOVE+fiId,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});
