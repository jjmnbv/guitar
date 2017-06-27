$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var addForm = $('#add-lnacchg-form');  
	 $(".from-ishide").hide();
	 
	 
	  $('.acTyp').selectloader({'acTyp': app.dicts.dict_3024});
	  $('.acTypCde').selectloader({'acTypCde': app.dicts.dict_132});
	  $('.acCertTyp').selectloader({'acCertTyp': app.dicts.dict_17});
	  $('.acCurTyp').selectloader({'acCurTyp': app.dict_cfg.dict_cfg_CurTyp});
	  $('.athInd').selectloader({'athInd': app.dicts.dict_3016})
	  
	  app.registerTextHelper('acTyp', app.dicts.dict_3024, 'code', 'name');
	  app.registerTextHelper('acTypCde', app.dicts.dict_132, 'code', 'name');
	  app.registerTextHelper('acCertTyp', app.dicts.dict_17, 'code', 'name');
	  app.registerTextHelper('acCurTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
	  app.registerTextHelper('athInd', app.dicts.dict_3016, 'code', 'name');
	  
	
	 app.context.formHtml = $('#form-template').html();
	 /*
	  * 对借据号设置Pop框 ，获取借账号信息列表,
	  */
	 $("#select-acTyp").attr('disabled', true);
	 $('select').selectpicker('refresh');
	 $('#lonoModal').on('show.bs.modal',function () {
	        $('#lonoModal').pagination({
	            'first-store': app.firstStore	
	        });
	    });
	  $("#confirmY").click(function () {
		  if($('[type=radio]:checked').length>0){
			  var checked = $("#lonoTable").find("[type='radio']:checked");
		        var loNo = checked.parents("tr").find(".lononame").text().trim();  
		        var subNo  =checked.parents("tr").find(".subnoname").text().trim();
		        $("#loNol").val(loNo);
		        var datas = {
		        	    'loNo':loNo,
		        	    'subNo':subNo
		        	  }
		        app.$getJSON(app.LNACINF_VIEW,datas).done(function(data){
		        	if(app.isOK(data)){
		        		  $("[name=subNo]").val(data.subNo);
		        		  $("[name=acTyp]").val(data.acTyp);
		        		  $("[name=oldAcNo]").val(data.acNo);
		        		  $("[name=oldAcNa]").val(data.acNa);
		        		  $('select').selectpicker('refresh');
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
	        	 $("#select-acTyp").attr('disabled', false);
	             App.startPageLoading({animate: true});
	             var jqxhr = app.$submit(addForm, 'json');
	             if (!jqxhr) return false;
	             jqxhr.done(function (data) {
	                 App.stopPageLoading();
	                 if (app.isOK(data)) {
	                     app.alertOK('提交成功');
						 $this.prop('disabled',false);
	                     window.location.href="lnacchg-edit.html?operatH=edit&athNo="+data.athNo+"&subNo="+data.subNo;
	                 }else {
						 app.alertError(data.errors.join(','));
						 $this.prop('disabled',false);
					 }
	             });
	             return false;
	         }
	     });
	  
	  //新账号不能和旧账号一致
	  $('.acno').on('change',function(){
		  var values=" ";
		  $('.acno').each(function(i,item){
			  var value=$(this).val();
			  values+=value;
		  });
		  var val=$('[name=acNo]').val(); 
          var newValue=values.replace(val,""); //去除当前输入框的值  
          if(newValue==""){  
              return false;  
          }else{  
              if(newValue.indexOf(val)>-1){  //当前值和newValue作比较  
                  $('[name=acNo]').siblings('.help-block-error').html('账号不能和原账号一致!');
              } else{ 
            	  $('[name=acNo]').siblings('.help-block-error').hide();
              } 
          }  
	  });
	
});

function  returnlist(){
	 window.location.href="lnacchg-index.html"
}
