$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var addForm = $('#syaccfg-form');
    var validator = app.bindFormValidation(addForm);

      var subCd = GetQueryString("subCd");
      var busTyp = GetQueryString("busTyp");
      var amtTyp = GetQueryString("amtTyp");
      console.log(operatH);
    /**
     * 科目编号、业务类型、金融类型唯一性校验
     */
      var validatorNotExists = function (addForm) {
 	     $("[name='subCd']", addForm).rules("add", {
 	    	 synchronousRemote: {
 	         url: app.SYACCFG_NOTEXISTS,
 	         type: "POST",
 	         dateType: "text",
 	         data:{
 	        	subCd:function(){  return $("[name='subCd']").val(); }, 
 	        	busTyp:function(){  return $("[name='busTyp']").val(); },
 	        	amtTyp:function(){  return $("[name='amtTyp']").val(); }
 	         },
 	       },	
 	       messages: {
 	    	   synchronousRemote: "科目编号、业务类型或金额类型已存在！"
 	       },
 	       onkeyup: false,
           onfocusout: false
 	     });
 	     
 	    $("[name='busTyp']", addForm).rules("add", {
	    	 synchronousRemote: {
	         url: app.SYACCFG_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	subCd:function(){  return $("[name='subCd']").val(); }, 
	        	busTyp:function(){  return $("[name='busTyp']").val(); },
	        	amtTyp:function(){  return $("[name='amtTyp']").val(); }
	         },
	       },	
	       messages: {
	    	   synchronousRemote: "科目编号、业务类型或金额类型已存在！"
	       },
	       onkeyup: false,
          onfocusout: false
	     });
 	    
 	   $("[name='amtTyp']", addForm).rules("add", {
	    	 synchronousRemote: {
	         url: app.SYACCFG_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	subCd:function(){  return $("[name='subCd']").val(); }, 
	        	busTyp:function(){  return $("[name='busTyp']").val(); },
	        	amtTyp:function(){  return $("[name='amtTyp']").val(); }
	         },
	       },	
	       messages: {
	    	   synchronousRemote: "科目编号、业务类型或金额类型已存在！"
	       },
	       onkeyup: false,
         onfocusout: false
	     });
 	  };
 	    $("#subCd, #busTyp,#amtTyp").change(function(){
 	    	$("#amtTyp").removeClass("required");
 	        $("#amtTyp").removeData("previousValue").valid(); 
 	    });  
   
 	 
    if(operatH=='add'){
    	validatorNotExists();
        $('#confirmR').click(function () {
            $('select').selectpicker('refresh');
          if (addForm.valid()) {
            App.startPageLoading({ animate: true });
            var jqxhr = app.$submit(addForm, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
              App.stopPageLoading();
              if (app.isOK(data)) {
                $('.main-page .pagination-reload').click();
                app.alertOK('提交成功');
                setTimeout(function (){
                    window.location.href='syAcCfgIndex.html';
                },2000);
                return;
              }
              app.alertError(data.errors.join('\n'));
            });
            return false;
          }
        });
      }else if(operatH == 'edit'){
    	$('[name=subCd]').attr('readonly',true);
        app.$getJSON(app.SYACCFG_VIEW+'?subCd='+subCd+"&busTyp="+busTyp+"&amtTyp="+amtTyp ).done(function (data) {
          if(app.isOK(data)){
            addForm.deserializeObject(data);
            $("#busTyp").val(data.busTyp).attr('disabled',true);
            $("#amtTyp").val(data.amtTyp).attr('disabled',true);
            $('select').selectpicker('refresh');
          }
        });
        
        $('#confirmR').click(function () {
          $("#busTyp").attr('disabled',false);
          $("#amtTyp").attr('disabled',false);
  	      $('select').selectpicker('refresh');
          if (addForm.valid()) {
            addForm.attr('action',app.SYACCFG_UPDATE);
            App.startPageLoading({ animate: true });
            var jqxhr = app.$submit(addForm, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
              App.stopPageLoading();
              if (app.isOK(data)) {
                app.alertOK('提交成功!');
                setTimeout(function (){
                    window.location.href='syAcCfgIndex.html';
                },2000);
                return;
              }
              app.alertError(data.errors.join(','));
            });
            return false;
          }
        });
      }
});
