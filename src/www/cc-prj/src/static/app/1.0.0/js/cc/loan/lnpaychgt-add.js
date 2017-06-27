$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var addForm = $('#add-lnpaychgt-form');
	 var validator = app.bindFormValidation(addForm);
	 $(".form-ishide").hide();
	 
	  $('.payOpt').selectloader({'payOpt': app.dicts.dict_3009});
	  $('.payTyp').selectloader({'payTyp': app.dicts.dict_3010});
	  $('.athInd').selectloader({'athInd': app.dicts.dict_3016});
	  $('.valTyp').selectloader({'valTyp': app.dicts.dict_3033});
      
	 addForm.find(".date-picker-page").datepicker({
	      rtl: App.isRTL(),
	      orientation: "left",
	      autoclose: !0,
	      format: "yyyy-mm-dd",
	      'start-date': "+0d",
	      language: 'zh-CN'
	    });
	 
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
		        		
		        	}
		        }); 
		  }else{
			  app.alertError('您还没有选中记录！'); 
			  return false; 
		  }
	    });
	 
	 $('#saveForm').click(function () {
         if (addForm.valid()) {
             App.startPageLoading({animate: true});
             var jqxhr = app.$submit(addForm, 'json');
             if (!jqxhr) return false;
             jqxhr.done(function (data) {
                 App.stopPageLoading();
                 if (app.isOK(data)) {
                     app.alertOK('提交成功.');
                     window.location.href="lnpaychgt-edit.html?athNo="+data.athNo+"&athInd="+data.athInd;
                 }
             });
             return false;
         }
     });
});

function  returnlist(){
	 window.location.href="lnpaychgt-index.html"
}
