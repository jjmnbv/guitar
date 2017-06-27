$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;
  
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */

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
 	   form.find('[name="diId"]').prop('readonly', true)
    }
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增字典表信息',
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
      url: app.CSDICFG_CREATE
    }, app);
  });

  /**
  *
  *字典编码的唯一性 
  * */
 
 var validatorNotExists = function (form) {
	     $("input[name='diId']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.CSDICFG_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 curCd:function(){
	        		  return form.find('[name="diId"]').val();
	        	 }
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该字典编码已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };

	  /** 
	   * 自定义校验字典编号   
	   */
	  
	  $.validator.addMethod("checkdiId",function(value,element){
		    return this.optional(element)||( /^[a-zA-Z]+$/.test(value));
		  },"只限输入字母"); 

  /**
   * 修改字典表
   */
  $('#edit').getModal({
    title: '编辑字典表信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
    	operatingMode='edit'
    	$('input[name=diId]').prop('readonly',true);
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.CSDICFG_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },


    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=diId]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.CSDICFG_UPDATE
    }, app);
  });


  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条字典表信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var diId=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.CSDICFG_REMOVE+diId,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });


  /**
   * 查询结果列表操作的弹框
   */
  $('#queryRstList').getModal({
    title: '字典选项结果信息',
    body: $('#queryRstList').html(), /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
    	operatingMode='edit'
    	$('input[name=diId]').prop('readonly',true);
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      var jqxhr = app.$post(app.CSDICFG_QUERYRSTLIST + "?diId=" + id, {}, 'json');
      if (!jqxhr) {
          App.stopPageLoading();
          return;
      }
      jqxhr.done(function (data) {
          App.stopPageLoading();
          if(app.isOK(data)){
              var tpl = Handlebars.compile($('#queryRstList').html());
              var html = tpl(data);
              modal.find('.modal-body').html(html);
          }
      });
      $('input[name=diId]').prop('readonly',false);
    },
    footer:'<button class="btn blue" data-dismiss="modal">确定</button>'
  }, 
  function (modal) {
      modal.modal('hide');
  });
  
});
