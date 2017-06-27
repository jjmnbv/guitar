+function ($,app) {

    app.registerTextHelper('loanKindCode',app.loanKindCodeList,'code','name');
    /**
     * 初始化数据
     */
    $.getJSON(app.LOAN_TYPE_CODE, function (res) {
        if (app.isOK(res)) {
            $('.loanTypeIdClass').selectloader({'loanTypeIdList':res.content});
            $('#applyStatus').selectloader({'applyStatusList':app.applyStatusList});
            return;
        }
        app.alertError(res.errors.join('\n'));
    });
    /*商店搜索回显商店编号*/
    listCooNo();

    /**
     * 修改操作的弹框
     */
    $('#update').getModal({
        title: '修改贷款申请详情录入',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore: function (modal) {
			var taskIdVal = $('[type=radio]:checked').data('id');
			$.Bpm.init({taskId: taskIdVal});
			var taskStatus = $.Bpm.findTaskStatus(); 
			if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
				var applyWater = $('[type=radio]:checked').data('applynum');
				location.href = 'details-view.html?applyWater=' + applyWater;
			}else{
				$.Bpm.handle();
			}
        }
    });
	
    /*查看*/
    $('#view').getModal({
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore: function (modal) {
            location.href = 'details-view.html?applyWater=' + $('[type=radio]:checked').data('applynum');
        }
    });
	$('#refuse').getModal({
        size: 'modal-sm',
        statusArray: ["TH",'NH','JH','TD'],
        textArray: "确定要作废该条记录吗？",
        noHandleArray: ["QX"],
        noHandle: '该条记录不可作废！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        },
		showAfter:function(modal){
			var taskIdVal = $('[type=radio]:checked').data('id');
			$.Bpm.init({taskId: taskIdVal});
		}
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.ACTIVITI_REFUSE+$.Bpm.options.stepKey,
			contentType:'application/json',
			param:JSON.stringify({ flowKey: $.Bpm.options.flowKey, stepKey: $.Bpm.options.stepKey, taskId: $.Bpm.options.taskId, formIds: [], message: $('select[name="opinionId"]').val(), nextAssignee: '', opinionFormId: '', opinion: JSON.stringify($("#refuseForm").serializeObject())}),
            text: '作废成功'
        }, app);
		app.loadData();
    });

    //进件状态
    app.applyStatusList = [
        {"code":"TH","name":"已退回"},
        {"code":"NH","name":"已拿回"},
        {"code":"TD","name":"待提交"}
    ]

}(window.jQuery,window.app);
function excuteFlow(taskIdVal,status,applyWater){
	$.Bpm.init({taskId: taskIdVal});
	var taskStatus = $.Bpm.findTaskStatus(); 
	if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
		location.href = 'details-view.html?applyWater=' + applyWater;
	}else{
		$.Bpm.handle();
	}
}
