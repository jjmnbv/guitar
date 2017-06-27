+ function($, app) {
	  app.registerTextHelper('trSts', app.trSts, 'code', 'name');
	  app.registerTextHelper('acInd', app.acInd, 'code', 'name');
	  app.registerTextHelper('hisInd', app.hisInd, 'code', 'name');
	  app.registerTextHelper('logInd', app.logInd, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  $('.main-page').pagination({
      "first-store": app.firstStore
    });
  
  
  $('.trSts').selectloader({'trStsList': app.trSts});
  $('.acInd').selectloader({'acIndList': app.acInd});
  $('.hisInd').selectloader({'hisIndList': app.hisInd});
  $('.logInd').selectloader({'logIndList': app.logInd});
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  
    form.find('.trSts').selectloader({'trStsList': app.trSts});
    form.find('.acInd').selectloader({'acIndList': app.acInd});
    form.find('.hisInd').selectloader({'hisIndList': app.hisInd});
    form.find('.logInd').selectloader({'logIndList': app.logInd});
  
    app.bindFormValidation(form);
    if(operatingMode =='add'){
 	   validatorNotExists(form);
    }else{
 	   form.find('[name="trCd"]').prop('readonly', true)
    }
  };


  /**
   * 添加交易码配置
   */

  $('#add').getModal({
    title: '新增交易码配置',
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
      url: app.PARTRCFG_CREATE,
    }, app);
  });
  
  /**
   * 校验交易码的唯一性
   */
   
  var validatorNotExists = function (form) {
	     $("input[name='trCd']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.PARTRCFG_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 trCd:function(){
	        		  return form.find('[name="trCd"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该种交易码已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };
  
	 //自定义校验交易码编码
	  $.validator.addMethod("capital",function(value,element){
	    var chrnum=/^[A-Z]+$/;
	    return this.optional(element)||(chrnum.test(value));
	  },"只能输入A-Z之间的大写字母");
	  
  /**
   * 修改交易码配置
   */
  $('#edit').getModal({
    title: '编辑交易码配置',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
    	operatingMode='edit';
    	var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.PARTRCFG_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARTRCFG_UPDATE
    }, app);
  });

  /**
   * 删除交易码配置
   */
 
  $('#delete').getModal({
    text: '确定要删除该条交易码配置吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var trCd = $('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.PARTRCFG_REMOVE+trCd,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
 
});
