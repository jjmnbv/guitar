+function ($, app) {

	$('.loanKindCodeList').selectloader({'loanKindCodeList': app.loanKindCodeList});
    var temp1 = [{"name":"待发起","code":"CS"},{"name":"已提交","code":"JH"},{"name":"已拿回","code":"NH"},{"name":"已退回","code":"TH"},{"name":"已作废","code":"JJ"}];
    $('.statusClass').selectloader({'statusList': temp1});
    /*申请状态*/
    app.registerTextHelper('status',temp1,'code','name');
    $.getJSON(app.LOAN_TYPE_CODE, function (res) {
        if (app.isOK(res)) {
            $('.loanTypeIdClass').selectloader({'loanTypeIdList':res.content});
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
        title: '修改贷款申请简要录入',
        size: 'modal-sm',
		statusArray: ["CS","NH","TH"],
        textArray: "确定要修改该条记录吗？",
		noHandleArray: ["JH",'JJ'],
        noHandle: '该条记录不可修改！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        },
        compileBefore: function (modal) {
            if ($('[type=radio]:checked').data('status') != 'JH') {
                location.href = 'brief-entry-update.html?applyWater=' + $('[type=radio]:checked').data('id');
            }
        }
    });

    $('#delete').getModal({
		title: '删除贷款申请简要录入',
        size: 'modal-sm',
        statusArray: ["CS"],
        textArray: "确定要删除该条记录吗？",
        noHandleArray: ["JH", 'NH','TH','JJ'],
        noHandle: '该条记录不可删除！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.LOAN_APPLICATION_DELETE_DATA + $('[type=radio]:checked').data('id'),
            text: '删除成功',
            isEasyModal: true
        }, app);
    });
	$('#refuse').getModal({
        size: 'modal-sm',
        statusArray: ["TH"],
        textArray: "确定要作废该条记录吗？",
        noHandleArray: ["JH", 'NH','CS','JJ'],
        noHandle: '该条记录不可作废！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        },
		showAfter:function(modal){
			var applyWater = $('[type=radio]:checked').data('id');
			$.ajax({
                url: app.FLOWLOANAPPLY_LIST+ "?applyWater=" + applyWater,
                success: function (res) {
                    if (app.isOK(res)) {
						if(res.content.length>0){
							$.Bpm.init({taskId: res.content[0].flowInstanceId});
							$.Bpm.initBusFormExt();
						}else{
							app.alertError("未找到对应的流程实例!");
						}
                        return;
                    }else{
                        app.alertError(res.errors.join('\n'));
                        return false;
                    }
                },
                error: function (data) {
                    app.alertError(data);
                }
            });
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
    /*查看*/
    $('#view').getModal({
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore: function (modal) {
            location.href = 'brieft-entry-view.html?applyWater=' + $('[type=radio]:checked').data('id');
        }
    });

}(window.jQuery, window.app);

function clicToEditOrView(status, applyWater) {
    if (status == 'JH' || status == 'JJ') {
        window.location.href = 'brieft-entry-view.html?applyWater=' + applyWater;
    } else {
        window.location.href = 'brief-entry-update.html?applyWater=' + applyWater;
        return false;
    }
}



