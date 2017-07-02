+ function($, app) {
    app.registerTextHelper('traTyp', app.traTyp, 'code', 'name');
    app.registerTextHelper('reaTyp', app.reaTyp, 'code', 'name');
    app.registerTextHelper('chaSt', app.chaSt, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  $('.main-page').pagination({
    "first-store": app.firstStore
  });
  //交易类型
  $('#traTyp').selectloader({'traTypList': app.traTyp});
  //是否实时
  $('#reaTyp').selectloader({'reaTypList': app.reaTyp});
  //渠道状态
  $('#chaSt').selectloader({'chaStList': app.chaSt});
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  form.find('.traTyp').selectloader({traTypList:app.traTyp});
	  form.find('.reaTyp').selectloader({reaTypList:app.reaTyp});
	  form.find('.chaSt').selectloader({chaStList:app.chaSt});
	  
      app.bindFormValidation(form);
      
      if(operatingMode =='add'){
    	  traNoExists(form);
      }else{
   	   form.find('[name="traNo"]').prop('readonly', true)
      }
  };
  
  /**
  *交易码验证唯一
  * */
 var traNoExists = function (form) {
	     $("input[name='traNo']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.CETRACHAC_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 traNo:function(){
	        		  return form.find('[name="traNo"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该交易码已存在，不能重复添加！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };
  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增交易渠道配置',
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
      url: app.CETRACHAC_CREATE
    }, app);
  });


  /**
   * 修改交易渠道配置
   */
  $('#edit').getModal({
    title: '编辑交易渠道配置',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      var id = $('[type=radio]:checked').data('id');
      operatingMode='edit'

      if (!id) return;
      app.context.showBefore({
        url: app.CETRACHAC_VIEW,
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
      url: app.CETRACHAC_UPDATE
    }, app);
  });


  $('#delete').getModal({
    text: '确定要删除该条交易渠道配置吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var traNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.CETRACHAC_REMOVE+traNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});