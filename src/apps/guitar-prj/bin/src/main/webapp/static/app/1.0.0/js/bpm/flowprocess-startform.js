$(function(){
	"use strict ";
	
	var initViewList = function() {
		var viewList = [{relviewTname:"固定表单",relviewTcode:"0",relviewName:"固定表单一",relviewCode:"pages/test.jsp",dispOrder:"1"}];
		
		var viewNameContainer = $('#viewnameContainer');
		var viewNamesTemplate = $(viewNameContainer.data('viewnameTemplate'));
		viewNameContainer.html(Handlebars.compile(viewNamesTemplate.html())({'content': viewList}));
		var viewCodeContainer = $('#viewcodeContainer');
		var viewCodesTemplate = $(viewCodeContainer.data('viewcodeTemplate'));
		viewCodeContainer.html(Handlebars.compile(viewCodesTemplate.html())({'content': viewList}));
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
//    initViewList();
  };
  init();
});