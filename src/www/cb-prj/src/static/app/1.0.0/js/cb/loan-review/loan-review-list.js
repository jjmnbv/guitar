/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 下拉框初始化
     */
    $('#loanTypeId').selectloader({'loanTypeIdList': $.parseJSON(app.loanTypeList)});
	/*查看详情*/
    $(document).on("click", ".showPage", function () {
        var taskIdVal = $(this).data('id');
		$.Bpm.init({taskId: taskIdVal});
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="SUSPEND"){
			$.Bpm.viewTask();
		}else{
			$.Bpm.handle();
		}
    });
});
