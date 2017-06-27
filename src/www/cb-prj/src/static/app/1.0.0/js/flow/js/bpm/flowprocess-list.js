$(function(){
  "use strict ";
	/**
   * 发起流程
   */
  var startFlow = function () {
  	
  	$("body").delegate('[data-flowinfo-id]', 'click', function () {
      var flowId = $(this).data('flowinfoId');
      var flowKey = $(this).data('flowKey');
      $.ajax({
			type : 'get',
			async : true,
			contentType: 'application/json',
			dataType : 'json',
			url: app.base + '/bpm/start/' + flowId,
			success: function(data, textStatus, jqXHR) {
				if(app.isOK(data)) {
					app.alertOK('发起成功');
				}else{
					app.alertError('发起失败');
				}
			}
		});
  	});
  };
  
  var init = function () {
    //初始化日期控件
    $('.date-picker').datepicker({
      rtl: App.isRTL(),
      orientation: 'left',
      autoclose: true,
      language: "zh-CN"
    });
    bootbox.setLocale("zh_CN");
    startFlow();
  };
  init();
});