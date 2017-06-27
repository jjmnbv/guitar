/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;

    /**
     * 下拉框初始化
     */
    $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
    /*商店搜索数据回显*/
    +function ($, app) {
        $("#confirm").click(function () {
            var checked = $("#managerTable").find("[type='radio']:checked");
            var val = checked.val();
            var text = checked.parents("td").next().next().next().text();
            $("#agence").val(text);
            $("#agenceHidden").val(val);
        });
    }(window.jQuery, window.app);


   /*激活*/
    $('#jiHuo').getModal({
		size: 'modal-sm',
		statusArray:["QX"],
        textArray:"确定要激活该条记录吗？",
        noHandleArray:["TH","JH","TD"],
        noHandle:'该条记录不可激活！',
        selector: function () {
             if($('[type=radio]:checked').length>0){
				 var sta = $('[type=radio]:checked').data('status');
				 return sta;
             }
        },
		showAfter:function(modal){
			var taskIdVal = $('[type=radio]:checked').data('id');
			$.Bpm.init({taskId: taskIdVal});
			$.Bpm.initBusFormExt();
		}
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.ACTIVITI_ACTIVE+$.Bpm.options.stepKey,
			contentType:'application/json',
			param:JSON.stringify({flowKey: $.Bpm.options.flowKey, stepKey: $.Bpm.options.stepKey, taskId: $.Bpm.options.taskId, opinion: JSON.stringify($("#cancelForm").serializeObject())}),
            text: '激活成功'
        }, app);
    });

    /*挂起*/
    $('#guaQi').getModal({
       size: 'modal-sm',
		statusArray:["JH",'TH','TD'],
        textArray:"确定要挂起该条记录吗？",
        noHandleArray:["QX"],
        noHandle:'该条记录不可挂起！',
        selector: function () {
             if($('[type=radio]:checked').length>0){
				 var sta = $('[type=radio]:checked').data('status');
				 return sta;
             }
        },
		showAfter:function(modal){
			var taskIdVal = $('[type=radio]:checked').data('id');
			$.Bpm.init({taskId: taskIdVal});
			$.Bpm.initBusFormExt();
		}
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.ACTIVITI_CANCEL + $.Bpm.options.stepKey,
			contentType:'application/json',
			param:JSON.stringify({flowKey: $.Bpm.options.flowKey, stepKey: $.Bpm.options.stepKey, taskId: $.Bpm.options.taskId, opinion: JSON.stringify($("#cancelForm").serializeObject())}),
            text: '挂起成功'
        }, app);
    });
	/*查看详情*/
    $(document).on("click", ".showPage", function () {
        var taskIdVal = $(this).data('id');
		$.Bpm.init({taskId: taskIdVal});
		$.Bpm.initBusFormExt(function(){
			var taskStatus = $.Bpm.findTaskStatus(); 
			if(taskStatus=="SUSPEND"){
				$.Bpm.viewTask();
			}else{
				$.Bpm.handle();
			}
		});
    });
});
