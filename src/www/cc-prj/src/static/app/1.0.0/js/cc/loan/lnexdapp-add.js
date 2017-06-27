$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var addForm = $('#add-lnexdapp-form');
	 var validator = app.bindFormValidation(addForm);
	 $('.form-exdapp-hidden').hide();
	 $('.form-lopaycde-hidden').hide();
     $('.form-exdamt-hidden').hide();
	
	 
	 $('.athInd').selectloader({'athInd': app.dicts.dict_3016});
	 $('.valTyp').selectloader({'valTyp': app.dicts.dict_3033});
	 $('.loPayTyp').selectloader({'loPayTyp': app.dicts.dict_3010});
	 $('.loPayCde').selectloader({'loPayCde': app.dicts.dict_3011});
	 $('.exdPlTyp').selectloader({'exdPlTyp': app.dicts.dict_3006});
	 $('.loPayPlTyp').selectloader({'loPayPlTyp': app.dicts.dict_3006});

	 app.context.formHtml = $('#form-template').html();
	 /*
	  * 对借据号设置Pop框 ，获取借据号列表,
	  */
	$('#lonoModal').on('shown.bs.modal',function () {
		app.loadData();
	});
	  $("#confirmY").click(function () {
		  if($('[type=radio]:checked').length>0){
			  var checked = $("#lonoTable").find("[type='radio']:checked");
		        var text = checked.parents("tr").find('.name').text();
		        $("#loNo").val(text);
		        app.$getJSON(app.LNLOINF_VIEW+"/"+text).done(function(data){
		        	if(app.isOK(data)){
		        		$("[name=exdAmt]").val(data.loPrSa);  
		        		$("[name=brNo]").val(data.brNo);
		        		$("[name=laUsId]").val(data.laUsId);
		        		$('[name=exdAmtl]').val(app.formatCurrencyM(data.loPrSa,2));
		        		$("[name=oldLaDueDt]").val(data.laDueDt);
		        		//基准利率
		        		  if(data.baRt==null || data.baRt==""){
			        	    	data.baRt=parseFloat("0");
			        	    }
		        	    $("[name=baRt]").val(data.baRt);
		        	    $('[name=baRtl]').val(app.formatPercent(data.baRt*100));
		        	    
		        	    //利率浮点
		        	    if(data.rtAd==null || data.rtAd==""){
		        	    	data.rtAd=parseFloat("0");
		        	    }
		        		$("[name=rtAd]").val(data.rtAd);
		        		$('[name=rtAdl]').val(app.formatPercent(data.rtAd*100));
		        		
		        		//利率浮比
		        		 if(data.rtPe==null || data.rtPe==""){
			        	    	data.rtPe=parseFloat("0");
			        	    }
		        		$("[name=rtPe]").val(data.rtPe);
		        		$('[name=rtPel]').val(app.formatPercent(data.rtPe*100));
		        		
		        		//罚息利率浮比
		        		 if(data.ovPe==null || data.ovPe==""){
			        	    	data.ovPe=parseFloat("0");
			        	    }
		        		$("[name=ovPe]").val(data.ovPe);
		        		$('[name=ovPel]').val(app.formatPercent(data.ovPe*100));
		        		
		        		//执行利率计算
		        		var exrtVal=((data.baRt)*(1+data.rtPe)+data.rtAd)
		        		$("[name=exRt]").val(exrtVal);
		        		$("[name=exRtl]").val(app.formatPercent(exrtVal*100));
		        		
		        		//罚息执行利率计算
		        		var ovrtVal=exrtVal*(1+data.ovPe);
		        		$("[name=ovRt]").val(ovrtVal);
		        		$("[name=ovRtl]").val(app.formatPercent(ovrtVal*100));  
		        		
		        		$('.form-exdapp-hidden').show();
		        	}
		        }); 
		  }else{
			  app.alertError('您还没有选中记录！'); 
			  return false; 
		  }
	    });
	  
		 
	   $("#select-lopaytyp").on('change',function(){  
			 var selectValue=$('#select-lopaytyp option:selected') .val();
			 if(selectValue =='DBDX'){
				 $('.loPayCde').val(selectValue);
			 }else if(selectValue =='ZYHK'){
				 $('.loPayCde').val(selectValue);
			 }else if(selectValue == 'AQHX'){
				 $('.loPayCde').val(selectValue);
			 }else if(selectValue == 'LSBQ'){
				 $('.loPayCde').val(selectValue);
			 }else if(selectValue == 'DEBJ'){
				 $('.loPayCde').val(selectValue);
			 }else{
				 $('.loPayCde').val(selectValue);
			 }
		 });
		 
	 $('#saveForm').click(function () {
		 var $this = $(this);
		 $('.loPayCde').attr('disabled',false);
	     $('select').selectpicker('refresh');
         if (addForm.valid()) {
			 $this.prop('disabled',true);
             App.startPageLoading({animate: true});
             var jqxhr = app.$submit(addForm, 'json');
             if (!jqxhr) return false;
             jqxhr.done(function (data) {
                 App.stopPageLoading();
                 if (app.isOK(data)) {
                     app.alertOK('提交成功!');
					 $this.prop('disabled',false);
                     window.location.href="lnexdapp-edit.html?operatH=edit&athNo="+data.athNo;
                 }else{
					 app.alertError(data.errors.join(','));
					 $this.prop('disabled',false);
				 }
             });
             return false;
         }
     });
});

function  returnlist(){
	 window.location.href="lnexdapp-index.html"
}
