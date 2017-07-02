$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var editForm=$('#edit-lnexdapp-form');
	 var validator = app.bindFormValidation(editForm);
	 $('.form-hide').hide();
	 
	  $('.loPayTyp').selectloader({'loPayTyp': app.dicts.dict_3010});
	  $('.loPayCde').selectloader({'loPayCde': app.dicts.dict_3011});
	  $('.athInd').selectloader({'athInd': app.dicts.dict_3016});
	  $('.valTyp').selectloader({'valTyp': app.dicts.dict_3033});
	  $('.loPayPlTyp').selectloader({'loPayPlTyp': app.dicts.dict_3006});
	  $('.exdPlTyp').selectloader({'exdPlTyp': app.dicts.dict_3006});
	  
	
	  /**
	   * 编辑页面反序列化赋值
	   */
	  var athNo = GetQueryString("athNo");
	  if(operatH =='edit'){
		  $("[name='athNo']").val(athNo).attr("readonly",true);
		  $('.form-group-sel .selBox').removeClass('setTimeGray');
		  app.$getJSON(app.LNEXDAPP_VIEW+"/"+athNo).done(function(data){
			  if(app.isOK(data)){
				  console.log(data);
				  $('#edit-lnexdapp-form').deserializeObject(data);
				  $('[name=exdAmtl]').val(app.formatCurrencyM(data.exdAmt,2));
				  $("[name=baRtl]").val(app.formatPercent(data.baRt*100));
				  $("[name=exRtl]").val(app.formatPercent(data.exRt*100));
				  $("[name=ovRtl]").val(app.formatPercent(data.ovRt*100));
				  $("[name=ovPel]").val(app.formatPercent(data.ovPe*100));
				  $("[name=rtAdl]").val(app.formatPercent(data.rtAd*100));
				  $("[name=rtPel]").val(app.formatPercent(data.rtPe*100));
				  $("select[name=athInd]").attr("disabled",true);
				  $('select').selectpicker('refresh');
			  }
		  });
	  }else if(operatH =='view'){
		  $('.form-group-sel .selBox').addClass('setTimeGray');
		  $("[name='athNo']").val(athNo).attr("readonly",true);
		  app.$getJSON(app.LNEXDAPP_VIEW+"/"+athNo).done(function(data){
			  if(app.isOK(data)){
				  console.log(data);
				  $('#edit-lnexdapp-form').deserializeObject(data);
				  $('[name=exdAmtl]').val(app.formatCurrencyM(data.exdAmt,2));
				  $("[name=baRtl]").val(app.formatPercent(data.baRt*100));
				  $("[name=exRtl]").val(app.formatPercent(data.exRt*100));
				  $("[name=ovRtl]").val(app.formatPercent(data.ovRt*100));
				  $("[name=ovPel]").val(app.formatPercent(data.ovPe*100));
				  $("[name=rtAdl]").val(app.formatPercent(data.rtAd*100));
				  $("[name=rtPel]").val(app.formatPercent(data.rtPe*100));
				  $("input[name='oldLaDueDt'],input[name='laDueDt'],input[name='valDt'],input[name='appDt']").attr("disabled", "disabled");
			      $(".selBox").find("button").attr("disabled", true);
			      $('#saveForm').hide();
				  $('input').attr('readonly',true);
				  $("select").attr("disabled",true);
				  $('select').selectpicker('refresh');
			  }
		  });
	  }
	//展期金额格式化
	    $('[name=exdAmtl]').on('change',function () {
	        var $this = $(this);
	        if($this.val().indexOf(',') != -1){
	            var Mo = app.unformatMoney($this.val());
	            $this.val(app.formatCurrencyM(Mo,2));
	            $('[name=exdAmt]').val(app.unformatMoney($this.val()));
	        }else{
	            $this.val(app.formatCurrencyM($this.val(),2));
	            $('[name=exdAmt]').val(app.unformatMoney($this.val()));
	        }
	    });
	   //利率浮点、利率浮比、罚息利率浮比、基准利率、执行利率、罚息利率格式化
	    function fomatpercent(showname,hidename){
	    	    showname.on('change',function () {
	            var $this = $(this);
	            if($this.val().indexOf('%') != -1){
	              var valNew = app.unformatPercent($this.val());
	              $this.val(app.formatPercent(valNew*100));
	              hidename.val(app.unformatPercent($this.val()));
	            }else{
	              $this.val(app.formatPercent($this.val()));
	              hidename.val(app.unformatPercent($this.val()));
	            }
	         });
	    }
	    fomatpercent($('[name=rtAdl]'),$('[name=rtAd]'));
	    fomatpercent($('[name=rtPel]'),$('[name=rtPe]'));
	    fomatpercent($('[name=ovPel]'),$('[name=ovPe]'));
	  
	    
	    
		   $("#select-paytyp").on('change',function(){  
				 var selectValue=$('#select-paytyp option:selected') .val();
				 if(selectValue =='DBDX'){
					 $('#lopaycde').val(selectValue).attr('disabled',true);
				 }else if(selectValue =='ZYHK'){
					 $('#lopaycde').val(selectValue);
				 }else if(selectValue == 'AQHX'){
					 $('#lopaycde').val(selectValue).attr('disabled',true);
				 }else if(selectValue == 'LSBQ'){
					 $('#lopaycde').val(selectValue).attr('disabled',true);
				 }else if(selectValue == 'DEBJ'){
					 $('#lopaycde').val(selectValue).attr('disabled',true);
				 }else{
					 $('#lopaycde').val(selectValue).attr('disabled',true);
				 }
			 });
	    
	  /**
	   * 修改
	   */
	  $('#saveForm').on('click',function(){
		  var $this = $(this);
		  if(editForm.valid()){
			  $this.prop('disabled',true);
			  $("select[name=athInd],select[name=loPayCde],.loPayCde").attr("disabled",false);
			  $('select').selectpicker('refresh');
			  var jqxhr =   app.$submit(editForm,'json')
			  if (!jqxhr) return false;
			  jqxhr.done(function (data) {
				  App.stopPageLoading();
				  if (app.isOK(data)) {
					  app.alertOK('提交成功！');
					  $this.prop('disabled',false);
					  window.location.href="lnexdapp-index.html";
				  }else{
					  app.alertError(data.errors.join(','));
					  $this.prop('disabled',false);
				  }
			  });
		  }
	  });
  })

function returnlist(){
	window.location.href="lnexdapp-index.html";
}