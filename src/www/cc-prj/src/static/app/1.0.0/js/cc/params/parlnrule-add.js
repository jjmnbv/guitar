$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var addForm = $('#parlnrule-form');
  var validator = app.bindFormValidation(addForm);
  app.context.formHtml = $('#form-template').html();
  
  addForm.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });

  var ruNo = GetQueryString("ruNo");
 
  /**
  *
  *核算编码的唯一性,最小罚息金额转换
  * */
  $('[name=minOvIntl]').on('change',function () {
      var $this = $(this);
      if($this.val().indexOf(',') != -1){
          var Mo = app.unformatMoney($this.val());
          $this.val(app.formatCurrencyM(Mo,2));
          $('[name=minOvInt]').val(app.unformatMoney($this.val()));
      }else{
          $this.val(app.formatCurrencyM($this.val(),2));
          $('[name=minOvInt]').val(app.unformatMoney($this.val()));
      }
  });
  
 var validatorNotExists = function (addForm) {
	     $("input[name='ruNo']", addForm).rules("add", {
	    	 synchronousRemote: {
	         url: app.PARLNRULE_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 ruNo:function(){  return $("input[name='ruNo']", addForm).val(); }   
	         }
	       },	
	       messages: {
	    	   synchronousRemote: "该核算编码已存在！"
	       },
	       onkeyup: false,
           onfocusout: false
	     });
	  };
	  
	  
   $('[name=calCmIntInd]').on('change',function(){
	   var calValue=$(this).val();
	   if(calValue =='N'){
		   $('.from-cmincaltype').hide();
		   $(".cmIntCalTyp").removeClass("required");
	   }else{
		   $('.from-cmincaltype').show();
	   }
   });
   
   $('[name=grcTyp]').on('change',function(){
	   var grcTypValue=$(this).val();
	   if(grcTypValue =='DAY'){
		   $('.form-grcDay').show();
	   }else{
		   $('.form-grcDay').hide();
		   $(".grcDay").removeClass("required");
	   }
   });
   
   
  if(operatH=='add'){
	validatorNotExists();
	$('.intPerNum ,.ovIntPerNum , .feePerNum').val('2').attr('disabled',true);
	$('.form-hide').hide();
	$('select').selectpicker('refresh');	  
    $('#confirmR').click(function () {
      if (addForm.valid()) {
    	$('.intPerNum ,.ovIntPerNum , .feePerNum').attr('disabled',false);
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('提交成功');
            setTimeout(function (){
                window.location.href='parLnRuleIndex.html';
            },2000);
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }else if(operatH == 'edit'){
	$('[name=ruNo]').attr('readonly',true);
    app.$getJSON(app.PARLNRULE_VIEW + ruNo).done(function (data) {
      if(app.isOK(data)){
        addForm.deserializeObject(data);
        $('[name=minOvIntl]').val(data.minOvInt);
        $('.intPerNum ,.ovIntPerNum , .feePerNum').val('2').attr('disabled',true);
        $('.form-hide').hide();
    	$('select').selectpicker('refresh');
      }
    });
    $('#confirmR').click(function () {
        $('select').selectpicker('refresh');
      if (addForm.valid()) {
    	$('.intPerNum ,.ovIntPerNum , .feePerNum').attr('disabled',false);
        addForm.attr('action',app.PARLNRULE_UPDATE);
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            app.alertOK('提交成功');
            setTimeout(function (){
                window.location.href='parLnRuleIndex.html';
            },2000);
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }
});
