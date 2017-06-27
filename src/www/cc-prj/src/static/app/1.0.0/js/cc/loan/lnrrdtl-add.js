$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var addForm = $('#add-lnrrdtl-form');
	 var validator = app.bindFormValidation(addForm);
	/*
	 * 获取借据号列表
	 */
	 app.context.formHtml = $('#form-template').html();
	  
	 /*
	   * 对借据号设置Pop框
	   */
	  $('#perqtModal').on('show.bs.modal',function () {
	        $('#perqtTable').pagination({
	            'first-store': app.firstStore
	        });
	    });
	  
	  $("#confirmY").click(function () {
	        var checked = $("#perqtTable").find("[type='radio']:checked");
	        var val = checked.val();
	        var text = checked.parents("tr").find('.name').text();
	        $("#perQt").val(text);
	        $("#perqtHidden").val(val);
	        
	        var text2 = checked.parents("tr").find('.payPrAmt').text();
	        $("#payPrAmt").val(text2);
	        $("#paypramtHidden").val(val);
	        
	        var text3 = checked.parents("tr").find('.payInAmt').text();
	        $("#payInAmt").val(text3);
	        $("#payinamtHidden").val(val);
	        
	        var text4 = checked.parents("tr").find('.payOvInAmt').text();
	        $("#payOvInAmt").val(text4);
	        $("#payovinamtHidden").val(val);
	        
	        var text5 = checked.parents("tr").find('.payCmInAmt').text();
	        $("#payCmInAmt").val(text5);
	        $("#paycminamtHidden").val(val);
	        
	        var text6 = checked.parents("tr").find('.payFeeAmt').text();
	        $("#payFeeAmt").val(text6);
	        $("#payfeeeamtHidden").val(val);
	    });
	  
	  
		
	      /**
	     * 校验编号、期数的唯一性
	     */
	    
	    var addExists = function () {
	        $("input[name='athNo']", addForm).rules("add", {
	        	synchronousRemote: {
	                url: app.LNRRDTL_NOTEXISTS,
	                type: "POST",
	                dateType: "text",
	                data:{
	                  athNo:function(){  return $("input[name='athNo']", addForm).val()},
	              	  loNo:function(){ return $("input[name='loNo']", addForm).val() },
	                }},
	            messages: {
	            	synchronousRemote: "该信息已存在！"
	            },
	            onkeyup: false,
	            onfocusout: false
	        });
	        $("input[name='loNo']", addForm).rules("add", {
	        	synchronousRemote: {
	                url: app.LNRRDTL_NOTEXISTS,
	                type: "POST",
	                dateType: "text",
	                data:{
	                	 athNo:function(){  return $("input[name='athNo']", addForm).val()},
		              	 loNo:function(){ return $("input[name='loNo']", addForm).val() },
	                }},
	            messages: {
	            	synchronousRemote: "该信息已存在！"
	            },
	            onkeyup: false,
	            onfocusout: false
	        });
	    }
	    
	  addExists();
	 $('#saveForm').click(function () {
		 var $this = $(this);
		 $this.prop('disabled',true);
         if (addForm.valid()) {
             App.startPageLoading({animate: true});
             var jqxhr = app.$submit(addForm, 'json');
             if (!jqxhr) return false;
             jqxhr.done(function (data) {
                 App.stopPageLoading();
                 if (app.isOK(data)) {
                     app.alertOK('提交成功！');
					 $this.prop('disabled',false);
                 }else{
					 alertError(data.errors.join(','));
					 $this.prop('disabled',false);
				 }
             });
             return false;
         }
     });
	 
});


