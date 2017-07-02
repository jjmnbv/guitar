+ function($, app) {
	 app.registerTextHelper('payAmtTyp', app.payAmtTyp, 'code', 'name');
}(window.jQuery, window.app);

$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var operatingMode;

	var payOrdCd=GetQueryString("payOrdCd");
	console.log(payOrdCd);
	app.$getJSON(app.PARPAYORD_VIEW+"/"+payOrdCd ).done(function(data){
		if(app.isOK(data)){
			$('#parpayordForm').deserializeObject(data)
		}
	});
    $("#payOrdCd").val(payOrdCd);
    $('.search .portlet.box').eq(0).hide();
    
    $('.main-page').pagination({
    	"first-store": app.firstStore
     });
    $('.payOrdSts1').selectloader({'payOrdStsList':app.payOrdSts });
	
	 app.context.formHtml = $('#form-template').html();
	 
	 app.context.formInit = function (form) {
		  form.find('.payAmtTyp').selectloader({'payAmtTypList': app.payAmtTyp});
		  app.bindFormValidation(form);
		  if(operatingMode =='add'){
	    	   validatorNotExists(form);
	       }
		  
		  controlAmountType('PRP_CR','PRP_AL','PRP_OV');
		  controlAmountType('PRP_AL','PRP_CR','PRP_OV');
		  controlAmountType('PRP_OV','PRP_AL','PRP_CR');
		 
		  controlAmountType('INT_CR','INT_AL','INT_OV');
		  controlAmountType('INT_AL','INT_CR','INT_OV');
		  controlAmountType('INT_OV','INT_AL','INT_CR');
		  
		  controlAmountType('OVR_CR','OVR_AL','OVR_OV');
		  controlAmountType('OVR_AL','OVR_CR','OVR_OV');
		  controlAmountType('OVR_OV','OVR_AL','OVR_CR');
		  
		  controlAmountType('COM_CR','COM_AL','COM_OV');
		  controlAmountType('COM_AL','COM_CR','COM_OV');
		  controlAmountType('COM_OV','COM_AL','COM_CR');
		  
		  controlAmountType('FEE_CR','FEE_AL','FEE_OV');
		  controlAmountType('FEE_AL','FEE_CR','FEE_OV');
		  controlAmountType('FEE_OV','FEE_AL','FEE_CR');
	 };
	  
	 function controlAmountType(selectedValue, valueDis,valueDiss){
	   $('.payAmtTyp').on('change',function(){
		 var $this=$(this);
		 $('.payAmtTyp option:selected').val()==selectedValue ?  ($this.find(".payAmtTyp option[value="+valueDis+"]").attr('disabled',true),
					 $this.find(".payAmtTyp option[value="+valueDiss+"]").attr('disabled',true)):false;
		 
		 $('#select-payAmtTyp').on('hidden.bs.select', function (e) {
			 $(this).find('option').attr('disabled',false);
		 });
	   }); 
	 }
	
	 $(function(){
		 $('#confirm').click(function(){
		      var url = $('#parpayordForm').attr('action')
		      var data = $('#parpayordForm').serializeObject()
		      if($('#parpayordForm').valid()){
		        app.$post(url, data).done(function (data) {
		          if (app.isOK(data)) {
		            app.alertOK('提交成功.');
		            return;
		          }
		        });
		      }
		  });
	 });
	  
	 
     /**
      * 增加操作的弹框
      */
	     $('#add-child').getModal({
	       title: '新增还款顺序明细信息',
	       body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
	       showBefore: function (modal) {
	    	   $("#parO").val(payOrdCd);
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
	         url: app.PARPAYORDDTL_CREATE
	       }, app);
	     });
	    
	     
    /**
     * 校验还款金额类型的唯一性
     */
  
	   var validatorNotExists = function(form){
		   $("select[name ='payAmtTyp']",form).rules("add",{
			   synchronousRemote:{
				  url:app.PARPAYORDDTL_NOTEXISTS,
				  type:"POST",
				  dateType:"text",
				  data:{
					  payAmtTyp:function(){ return form.find('[name="payAmtTyp"]').val(); },
		              payOrdCd:function(){ return form.find('[name="payOrdCd"]').val(); },
				  }
			  } ,
			  messages:{
				  synchronousRemote:"该金额类型已存在！"
			  },
			  onkeyup: false,
	          onfocusout: false
		   });
		   
		   $("[name='payPro']", form).rules("add", {
	            remote: {
	                url: app.PARPAYORDDTL_PAYPROISUNIQ,
	                type: "POST",
	                dateType: "text",
	                data:{
	                	payPro:function(){ return form.find('[name="payPro"]').val(); },
	                	payOrdCd:function(){ return form.find('[name="payOrdCd"]').val(); },
	                }},
	            messages: {
	                remote: "还款优先级重复！"
	            }
	        });
		   
	   }
	  
	     
  /**
   * 修改还款方式配置字表
   */
	$('#edit-child').getModal({
		title: '编辑还款顺序明细信息',
		body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		showBefore: function (modal) {
			operatingMode='edit';
			var id = $('[type=radio]:checked').data('id');
			if (!id) return;
			app.context.showBefore({
				url: app.PARPAYORDDTL_VIEW,
				modal: modal,
				param:id
			}, app, app.context.formInit);
		},
		 showAfter: function (modal) {
            $('.payAmtTyp').attr('disabled', true);
        },
		hideAfter: function (modal) {
			modal.setBody(app.context.formHtml);
			 $('.payAmtTyp').attr('disabled', false);
		}
	}, function (modal) {
		$('.payAmtTyp').attr('disabled', false);
		app.context.submit({
			modal: modal,
			url: app.PARPAYORDDTL_UPDATE
		}, app);
	});
  /**
   * 删除还款方式配置字表
   */
 
	$('#delete-child').getModal({
		text: '确定要删除该条还款顺序明细信息吗？',
		size: 'modal-sm',
		selector: function () {
			return !!$('[type=radio]:checked').length;
		}
	}, function (modal) {
		var id=$('[type=radio]:checked').data('id');	
		app.context.submit({
			modal: modal,
			url: app.PARPAYORDDTL_REMOVE+id,
			text: '删除成功',
			
			isEasyModal: true
		}, app);
	});
});
