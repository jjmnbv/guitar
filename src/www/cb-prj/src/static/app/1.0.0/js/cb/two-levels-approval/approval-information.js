/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
	var $ = window.jQuery;
	var app = window.app;
	App.startPageLoading({animate: true});
	+function($, app) {
		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt();
			App.stopPageLoading();
			/*导航*/
			var data={};
			data.taskId = request.taskId;
			var tp5 = Handlebars.compile($('#url-boxbg').html());
			var html = tp5(data);
			$("#ul_div").html(html);
			$("#rollBack").hide();
			app.bindFormValidation($("#nucleus-approval-form"));
			return;
		};
		init();
	} (window.jQuery, window.app);

	/*上一步*/
	$('#previousPage').click(function () {
		window.location.href="/cb/two-levels-approval/history-into-pieces.html?taskId="+app.request.taskId;
	});
	$("input[name=opinionId]").click(function(){
		var opinionId=$('input[name="opinionId"]:checked').val();
		/*选择了欺诈认定，参数进行改变*/
		if(opinionId=='QZ') {
			$("#hiddenVariable").val(1);
		}else{
			$("#hiddenVariable").val(0);
		}
		$("#opinionNote").val('');
		  if(opinionId=='TH'){
			var size = $("#rollBackNode option").length;
			if(size<=1){
				var rollBackList = $.Bpm.getRollbackList();
				for(var i=0;i<rollBackList.length;i++){
					var obj = rollBackList[i];
					if(obj.stepKey!=app.detailEnter&&obj.stepKey!=app.firstAudit){
						rollBackList.splice(i,1);
						i--;
					}
				}
				$("#rollBackNode").selectloader({'rollBackList': rollBackList});
			}
			$("#rollBackNode").addClass("required");
			$("#rollBack").show();
		  }else{
			$("#rollBackNode").removeClass("required");
			$("#rollBack").hide();
		  }  
	});
	$('#submitB').click(function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"){
			app.alertError("该进件已提交，切勿重复操作!");
		}else if(taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			app.alertError("当前状态不可执行提交操作!");
		}else{
			var item = $("#nucleus-approval-form");
			if(!item.valid()){
				app.alertError("提交失败,请检查输入项!");
				return false;
			}
			$(this).attr('disabled','true');
			var opinionId=$('input[name="opinionId"]:checked').val();
			var opinionInfo = JSON.stringify($(item).serializeObject());
			if(opinionId=='TH'){
				$.Bpm.rollbackToWithTarget(opinionInfo,$("#rollBackNode").val(),function(data){
					if (app.isOK(data)) {
						app.alertOK('退回成功！');
						setTimeout(function(){window.location.href="/cb/two-levels-approval/two-levels-approval-list.html";},2000);	
					}else{
						app.alertError("退回失败,请检查输入项!");
						return false;
					}
				});
			}else if(opinionId=='TG'){
				var formIdArr = [];
				var object = {};
				$.each($('form'), function(index, item){
					$.extend(object, $(item).serializeObject());
				});

				var stepVarsJson = {};
				$.each($.Bpm.options.stepVars.split(","), function (index, item) {
					stepVarsJson[item] = object[item];
				});
				$.Bpm.submitHandleExt(formIdArr, '',opinionInfo,JSON.stringify(stepVarsJson),function(flag){
					if(flag){
						app.alertOK('提交成功！');
						setTimeout(function(){window.location.href="/cb/two-levels-approval/two-levels-approval-list.html";},2000);	
					}else{
						app.alertError("提交失败。");
						return false;
					}
				});
			}else if(opinionId=='JJ'){
				$.Bpm.refuseHandle([],'',opinionInfo,function(flag){
					if(flag){
						app.alertOK('拒绝成功！');
						setTimeout(function(){window.location.href="/cb/two-levels-approval/two-levels-approval-list.html";},2000);	
					}else{
						app.alertError("拒绝失败。");
						return false;
					}
				});
			}else if(opinionId == 'QZ'){
				/*如果选择了欺诈的单选框*/
				var formIdArr = [];

				var object = {};
				$.each($('form'), function(index, item){
					$.extend(object, $(item).serializeObject());
				});

				var stepVarsJson = {};
				$.each($.Bpm.options.stepVars.split(","), function (index, item) {
					stepVarsJson[item] = object[item];
				});
				$.Bpm.submitHandleExt(formIdArr, '', opinionInfo, JSON.stringify(stepVarsJson), function (data) {
					if (app.isOK(data)) {
						app.alertOK('提交成功！');
						setTimeout(function(){window.location.href="/cb/two-levels-approval/two-levels-approval-list.html";},2000);	
					} else {
						app.alertError('提交失败.');
						return;
					}
				});
				//window.location.href = "/cb/fraud-cognizance/fraud-loan-information.html?taskId="+app.request.taskId;
			}
		}
	});

});