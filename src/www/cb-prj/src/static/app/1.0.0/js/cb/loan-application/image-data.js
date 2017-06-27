$(function () {
    var $ = window.jQuery;
    var app = window.app;
	var flag = false;
	+function ($, app) {
		var initData = function () {
			$('#detail-approval-form').hide();
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'image-data-form') {
					$.getJSON(app.LOAN_IMAGE_VIEW+"/" + busId, function(data){
						if (app.isOK(data)) {
							$("#image-data-form").deserializeObject(data);
							if(data.comment!='YSC'){
								window.open (app.yxbase+"?barno="+$("#apTr").val()+"&permission=add&mode=create", "newwindow2", "height=550, width=1150, top=80, left=100,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")

							}else{
								window.open (app.yxbase+"?barno="+$("#apTr").val()+"&permission=add&mode=update", "newwindow2", "height=550, width=1150, top=80, left=100,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
							}
						}
						$('#image-data-form').find("input").uniform();
					});
				}
			});
		};
		initData();
	}(window.jQuery, window.app);

    $(document).on("click", "#submitData", function () {
		var app1=$("#applyWater").val();
		//判断材料信息必收的都已经收取
		$.getJSON(app.AJAX_MATISCOLLECTED + app1, function (data) {
			if (app.isOK(data)) {
				if(!data.allCollectedFlag){
					app.alertError("材料信息必收的需要全部收取才可以提交！");
				}else{
					var taskStatus = $.Bpm.findTaskStatus();
					if (taskStatus == "COMPLETED") {
						app.alertError("该进件已经提交!");
					}else if(taskStatus == "SUSPEND"||taskStatus=="REFUSED"){
						app.alertError("当前状态不可执行提交操作!");
					}else {
						$('#submitData').attr('disabled','true');
						$('#previousPage').attr('disabled','true');
						$('#rollbackBtn').attr('disabled','true');
						var formIdArr = [];
						var item = $("#image-data-form");
						$("#comment").val("YSC");
						var action = app.LOAN_IMAGE_UPDATE;
						app.$post(action, item.serializeObject()).done(function (data) {
							if (app.isOK(data)) {
								$(this).attr('disabled', 'true');
								formIdArr.push({formId: $(item).data('viewIdname'), id: data.apTr});
								$.Bpm.submitHandleExt(formIdArr, "");
								location.href = "/cb/loan-application/detail-list.html";
							} else {
								$('#submitData').attr('disabled','false');
								$('#previousPage').attr('disabled','false');
								$('#rollbackBtn').attr('disabled','false');
								app.alertError("提交失败!");
							}
						});
					}
					return false;
				}
			}
		});
    });


	/*上一步*/
	$(document).on("click", "#previousPage", function () {
		window.location.href="/cb/loan-application/loan-information.html?taskId="+app.request.taskId;
	});

	$(document).on("click", "#rollbackBtn", function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			app.alertError("当前状态不可执行提交操作!");
		}else{
			$('#submitData').attr('disabled','true');
			$('#previousPage').attr('disabled','true');
			$('#rollbackBtn').attr('disabled','true');
			var opinionId=$('input[name="opinionId"]:checked').val();
			$("#opinionNote").val('');
			var rollBackList = $.Bpm.getRollbackList();
			for(var i=0;i<rollBackList.length;i++){
				var obj = rollBackList[i];
				if(obj.stepKey!=app.simpleEnter){
					rollBackList.splice(i,1);
					i--;
				}
			}
			$("#rollBackNode").val(rollBackList[0].taskId);
			var opinionInfo = JSON.stringify($("#detail-approval-form").serializeObject());
			$.Bpm.rollbackToWithTarget(opinionInfo,$("#rollBackNode").val(),function(data){
				if (app.isOK(data)) {
					app.alertOK('退回成功！');
					setTimeout(function(){window.location.href="/cb/loan-application/detail-list.html";},2000);	
				}else{
					$('#submitData').attr('disabled','false');
					$('#previousPage').attr('disabled','false');
					$('#rollbackBtn').attr('disabled','false');
					app.alertError("退回失败,请检查输入项!");
					return false;
				}
			});
		}
	});
});