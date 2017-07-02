$(function () {
  var $ = window.jQuery;
  var app = window.app;
	

    app.registerTextHelper('ynSc', app.dicts.dict_3002, 'code', 'name');
    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {
        form.find(".date-picker-page").datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        });
  };

 var plId=GetQueryString("plId");
 var exDt=GetQueryString("exDt"); 
 $("#pi").val(plId);
 $("#ti").val(exDt);
 $('.main-page .pagination-query').trigger("click")
 
 setInterval("self.location.reload()",30000);

});

function returnList(){
	  window.location.href="batexepl-index.html";
	}
  
