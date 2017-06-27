$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var addForm = $('#add-lnrrinf-form');
	 var validator = app.bindFormValidation(addForm);
	 $('.form-hide').hide();
	 
	 $('.rrPrInd').selectloader({rrPrIndList:app.dicts.dict_3002});
	 app.registerTextHelper('rrPrInd', app.dicts.dict_3002, 'code', 'name'); 
	 app.context.formHtml = $('#form-template').html();
	 addForm.find(".date-picker-page").datepicker({
	      rtl: App.isRTL(),
	      orientation: "left",
	      autoclose: !0,
	      format: "yyyy-mm-dd",
	      'start-date': "+0d",
	      language: 'zh-CN'
	 });

    $('#rrPrAmt1').on('change',function () {
    	var $this = $(this);
    	if($this.val().indexOf(',') != -1){
    		var Mo = app.unformatMoney($this.val());
    		$this.val(app.formatCurrencyM(Mo,2));
    		$('#rrPrAmt').val(app.unformatMoney($this.val()));
    	}else{
    		$this.val(app.formatCurrencyM($this.val(),2));
    		$('#rrPrAmt').val(app.unformatMoney($this.val()));
    	}

    });
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
		        		$("[name=brNo]").val(data.brNo);
		        		$("[name=laUsId]").val(data.cuNo);
		        	}
		        }); 
		  }else{
			  app.alertError('您还没有选中记录！'); 
			  return false; 
		  }
	    });
	  
	 $('#saveForm').click(function () {
		 var $this = $(this);
         if (addForm.valid()) {
			 $this.prop('disabled',true);
             App.startPageLoading({animate: true});
             var jqxhr = app.$submit(addForm, 'json');
             if (!jqxhr) return false;
             jqxhr.done(function (data) {
                 App.stopPageLoading();
                 if (app.isOK(data)) {
                     app.alertOK('提交成功.');
					 $this.prop('disabled',false);
                     setTimeout(function (){
                    	 var athNo=data.athNo;
                    	 var loNo=$("#loNo").val();
                         var rrPrInd=$("[name='rrPrInd']").val();
                    	 window.location.href="lnrrinf-edit.html?operatH=edit&athNo="+athNo+"&loNo="+loNo+"&rrPrInd="+rrPrInd;
                     },1000);
                 }else{
                	 app.alertError('提交失败');
					 $this.prop('disabled',false);
                 }
             });
         }
     });
});

function  returnlist(){
	 window.location.href="lnrrinf-index.html"
}
