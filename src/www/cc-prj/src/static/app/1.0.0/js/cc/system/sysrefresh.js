$(function () {
  var $ = window.jQuery;
  var app = window.app;
  $(".portlet.box").eq(0).hide();
  
 $("#refresh").on('click',function(){
	 data={
			 'data':null
	 }
	 app.$post(app.SYSRFRESH_CACHE,data).done(function(data){
		if(app.isOK(data)){
			app.alertOK('刷新成功');
		}else{
			app.alertError('刷新失败！');	
		}
		
	 });
 });
});
	