$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var editForm=$('#edit-lnacchg-form');
	 var validator = app.bindFormValidation(editForm);

	  $('.acTyp').selectloader({'acTyp': app.dicts.dict_3024});
	  $('.acTypCde').selectloader({'acTypCde': app.dicts.dict_132});
	  $('.acCertTyp').selectloader({'acCertTyp': app.dicts.dict_17});
	  $('.acCurTyp').selectloader({'acCurTyp': app.dict_cfg.dict_cfg_CurTyp});
	  $('.athInd').selectloader({'athInd': app.dicts.dict_3016});
	  
	  app.registerTextHelper('acTyp', app.dicts.dict_3024, 'code', 'name');
	  app.registerTextHelper('acTypCde', app.dicts.dict_132, 'code', 'name');
	  app.registerTextHelper('acCertTyp', app.dicts.dict_17, 'code', 'name');
	  app.registerTextHelper('athInd', app.dicts.dict_3016, 'code', 'name');
	  app.registerTextHelper('acCurTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
	  
	  $("#loNo").attr("readonly",true);
	
	  /**
	   * 编辑页面反序列化赋值
	   */

	  var athNo = GetQueryString("athNo");
	  var subNo =GetQueryString("subNo");
	  console.log(operatH+'-----');
	  var datas = {
      	    'athNo':athNo,
      	    'subNo':subNo
      	  }
	  
  if(operatH =='edit'){
	  app.$getJSON(app.LNACCHG_VIEW,datas).done(function(data){
		  if(app.isOK(data)){
			  $('#edit-lnacchg-form').deserializeObject(data);
			  $("#select-acTyp").attr('disabled', true);
			  $("#select-athInd").attr('disabled', true);
			  $('select').selectpicker('refresh');
		  }
	  });
	}else if(operatH='view'){
		 app.$getJSON(app.LNACCHG_VIEW,datas).done(function(data){
			  if(app.isOK(data)){
				  $('#edit-lnacchg-form').deserializeObject(data);
				  $(".selBox").find("button").attr("disabled", true);
				  $("input[name='appDt']").attr("disabled", "disabled");
		 	      $('#saveForm').hide();
		 	      $("select").attr('disabled', true);
				  $('input').attr('readonly',true);
		 	     $('select').selectpicker('refresh');
			  }
		  });
	}
	  /**
	   * 修改
	   */

	  $('#saveForm').on('click',function(){
		  var $this = $(this);
		  $("#select-acTyp,#select-athInd").attr('disabled', false);
		  if(editForm.valid()){
			  $this.prop('disabled',true);
			  var jqxhr = app.$submit(editForm,'json');
			  if (!jqxhr) return false;
			  jqxhr.done(function (data) {
				  App.stopPageLoading();
				  if (app.isOK(data)) {
					  app.alertOK('提交成功！');
					  datas={
						  athNo:$('[name=athNo]').val(),
						  subNo:$('[name=subNo]').val()
					  }
					  app.$post(app.LNACCHG_CHANGEACCOUNTINFO,datas).done(function(data) {
						  if (app.isOK(data)) {
							  app.alertOK('提交成功！');
							  $this.prop('disabled',false);
							  setTimeout(function (){
								  window.location.href="lnacchg-index.html";
							  },3000);
						  }else{
							  var errors = data.errors.join(',');
							  $this.prop('disabled',false);
							  app.alertError(errors || failureText || '账号更新失败！');
						  }
					  });
				  }else{
					  app.alertError(data.errors.join(','));
					  $this.prop('disabled',false);
				  }
			  });
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
            	  $('[name=acNo]').siblings('.help-block-error').html('新账号不能和原账号一致!');
              } else{
            	  $('[name=acNo]').siblings('.help-block-error').hide();
              } 
          }  
	  });
  })


function returnlist(){
	window.location.href="lnacchg-index.html";
}