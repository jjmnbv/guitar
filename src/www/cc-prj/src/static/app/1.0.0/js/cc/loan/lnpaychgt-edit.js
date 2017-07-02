$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var editForm=$('#edit-lnpaychgt-form');
	 var validator = app.bindFormValidation(editForm);

	 $('.payOpt').selectloader({'payOpt': app.dicts.dict_3009});
	 $('.payTyp').selectloader({'payTyp': app.dicts.dict_3010});
	 $('.athInd').selectloader({'athInd': app.dicts.dict_3016});
	 $('.valTyp').selectloader({'valTyp': app.dicts.dict_3033});
	 
	  /**
	   * 编辑页面反序列化赋值
	   */

	  var athNo = GetQueryString("athNo");
	  var athInd =GetQueryString("athInd");
	  var datas = {
      	    'athNo':athNo,
      	    'athInd':athInd
      	  }
	  app.$getJSON(app.LNPAYCHGT_VIEW,datas).done(function(data){
		  if(app.isOK(data)){
			  $('#edit-lnpaychgt-form').deserializeObject(data);
			  $("#select-athInd").attr('disabled', true);
			  $('select').selectpicker('refresh');
		  }
	  });
	  
	  /**
	   * 修改
	   */
	  $('#saveForm').on('click',function(){
		  $("#select-athInd").attr('disabled', false);
		  var jqxhr =   app.$submit(editForm,'json')
		  if (!jqxhr) return false;
          jqxhr.done(function (data) {      	 
              App.stopPageLoading();
              if (app.isOK(data)) {
                  app.alertOK('修改成功');
                  setTimeout(function (){
	                  window.location.href="lnpaychgt-index.html";
	              },3000);
	              return;
              }else{
            	  app.alertError("提交失败！");
              }
          });
	  }); 
  })

function returnlist(){
	window.location.href="lnpaychgt-index.html";
}