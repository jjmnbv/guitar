/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    App.startPageLoading({animate: true});
	var isContract = false;
    +function($, app) {
        var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId,busId){
				if(formId == 'contract-form'){
					$.getJSON(app.CONTRACT_VIEW+busId, function(data){
						if (app.isOK(data)) {					
							$('#contract-form').deserializeObject(data);
							//获取合同是否已签订，如果已签订则不可退回
							if(data.loanApplyContract.loCoMakeYn == "Y"){
								isContract = true;
								/**$("input[name=opinionId]").each(function(){
								  if($(this).val()=='TH'){
									$(this).attr("disabled",true);
								  }
								});**/					
							}
							return;
						}
						app.alertError(res.errors.join('\n'));
					});
				}
			});
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
	$("input[name=opinionId]").click(function(){
	  var opinionId=$('input[name="opinionId"]:checked').val();
	  $("#opinionNote").val('');
	  if(opinionId=='TH'){
		var size = $("#rollBackNode option").length;
		if(size<=1){
			var rollBackList = $.Bpm.getRollbackList();
			for(var i=0;i<rollBackList.length;i++){
				var obj = rollBackList[i];
				if(obj.stepKey!=app.detailEnter&&obj.stepKey!=app.firstAudit&&obj.stepKey!=app.finalAudit){
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
    /*提交*/
    $('#submitB').click(function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"){
			app.alertError("该进件已提交，切勿重复操作!");
			return false;
		}else if(taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			app.alertError("当前状态不能执行提交操作!");
			return false;
		}else{
			var item = $("#nucleus-approval-form");
			if(!item.valid()){
				app.alertError("提交失败,请检查输入项!");
				return false;
			}
			var opinionId=$('input[name="opinionId"]:checked').val();
			var opinionInfo = JSON.stringify($(item).serializeObject());
			if(opinionId=='TH'){
				if(isContract){
					app.alertError("合同已签订，不可退回!");
				}else{
					$(this).attr('disabled','true');
					$.Bpm.rollbackNoModal(opinionInfo,function(data){
						if (app.isOK(data)) {
							app.alertOK('退回成功！');
							setTimeout(function(){window.location.href="/cb/contract/contract-list.html";},2000);
						}else{
							$(this).attr('disabled','false');
							app.alertError("退回失败,请检查输入项!");
							return false;
						}
					});
				}
			}else if(opinionId=='TG'){
				if(isContract){
					$(this).attr('disabled','true');
					var formIdArr = [];
					$.Bpm.submitHandleExt(formIdArr, '',opinionInfo,null,function(flag){
						if(flag){
							app.alertOK('提交成功！');
							setTimeout(function(){window.location.href="/cb/contract/contract-list.html";},2000);
						}else{
							$(this).attr('disabled','false');
							app.alertError("提交失败!");
							return false;
						}
					});
				}else{
					app.alertError("未签订合同，不可提交!");
				}
			}else if(opinionId=='JJ'){
				if(isContract){
					$(this).attr('disabled','true');
					$.Bpm.refuseHandle([],'',opinionInfo,function(flag){
						if(flag){
							app.alertOK('作废成功！');
							setTimeout(function(){window.location.href="/cb/contract/contract-list.html";},2000);
						}else{
							$(this).attr('disabled','false');
							app.alertError("作废失败。");
							return false;
						}
					});
				}else{
					app.alertError("未签订合同，不可作废!");
				}
			}
		}
    });

    /*上一步*/
    $('#previousPage').click(function () {
        window.location.href="/cb/contract/contract-image-data.html?taskId="+app.request.taskId;
    });

});