+ function($, app) {
	app.registerTextHelper('payTyp', app.payTyp, 'code', 'name');
    app.registerTextHelper('paySts', app.paySts, 'code', 'name');
	app.registerTextHelper('payPlNm', app.payPlNm, 'code', 'name');
	app.registerTextHelper('perProInd',  app.perProInd, 'code', 'name');
	app.registerTextHelper('inCalTyp', app.inCalTyp, 'code', 'name');
	app.registerTextHelper('payPlTyp', app.payPlTyp, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
 
  $('.inCalTyp').selectloader({'inCalTyp': app.inCalTyp});
  $('.perProInd').selectloader({'perProInd': app.perProInd});
  $('.payPlTyp').selectloader({'payPlTyp': app.payPlTyp});
  $('.payPlNm').selectloader({'payPlNm': app.payPlNm});
  $('.payTyp').selectloader({'payTyp': app.payTyp});
  $('.paySts').selectloader({'paySts': app.paySts});
 
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  
	  form.find('.payTyp').selectloader({'payTyp': app.payTyp});
      form.find('.payPlNm').selectloader({'payPlNm': app.payPlNm});
      form.find('.payPlTyp').selectloader({'payPlTyp': app.payPlTyp});
      form.find('.perProInd').selectloader({'perProInd': app.perProInd});
      form.find('.inCalTyp').selectloader({'inCalTyp': app.inCalTyp});
      form.find('.paySts').selectloader({'paySts': app.paySts});
	  app.bindFormValidation(form);
      validatorNotExists(form);
      $('select[name=payTyp]').on('change',function(){
			var ss=$(this).val();
			if(ss !='LSBQ'){
				$('.from-pay').show();
				$("#payplnm").rules("add","required") ;  
				$("#paypltyp").rules("add","required") ;
			}else{
				$('.from-pay').hide();
				
			}
		});
  };

  
  
  /**
   * 添加还款方式配置表
   */
  
    //自定义校验,整数
    $.validator.addMethod("integer",function(value,element){
      var chrnum=/^[0-9]+$/;
      return this.optional(element)||(chrnum.test(value));
    },"只能输入0-9之间的整数");
    
  $('#add').getModal({
    title: '新增还款方式配置表',
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
	if($('#parpaycfgForm').valid()){
		var par=$('#parpaycfgForm').serializeObject();
		var jqxhr = app.$post(app.PARPAYCFG_CREATE ,par);
		if(!jqxhr){
			 App.stopPageLoading();
	          return;
		}
		 jqxhr.done(function (data) {
	          App.stopPageLoading();
	          if (app.isOK(data)) {
	              app.alertOK('提交成功');
	              setTimeout(function (){
	                  var  payCde= data.payCde;           
	                  window.location.href="parPayCfg-edit.html?payCde="+payCde;
	              },2000);
	              return;
	          }
	          app.alertError(data.errors.join('\n'));
	      });
		}
  });

 
  
  /**
  *
  *还款方式编号的唯一性 
  * */

 var validatorNotExists = function (form) {
	     $("input[name='payCde']", form).rules("add", {
	    	 synchronousRemote: {
	         url: app.PARPAYCFG_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
                 payCde:function(){
	        		  return form.find('[name="payCde"]').val();
	        	 }
	         }
	       },
	       messages: {
	    	   synchronousRemote: "该编号已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };

  /**
   * 修改还款方式配置表
   */
  
  $('#edit').getModal({
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore: function () {
      var payCde = $('[type=radio]:checked').data('id');
      window.location.href="parPayCfg-edit.html?payCde="+payCde;
    }
  });
  
  
  /**
   * 删除还款方式配置表
   */
 
  $('#delete').getModal({
    text: '确定要删除该条还款方式配置吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var payCde = $('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.PARPAYCFG_REMOVE+payCde,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});
