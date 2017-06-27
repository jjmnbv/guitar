$(function () {
    var $ = window.jQuery;
    var app = window.app;

    /**
     * 修改操作的弹框
     */
    $('#update').getModal({
        title: '修改用款申请',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore: function (modal) {
            var taskIdVal = $('[type=radio]:checked').data('id');
			$.Bpm.init({taskId: taskIdVal});
			var taskStatus = $.Bpm.findTaskStatus(); 
			if(taskStatus=="SUSPEND"){
				$.Bpm.viewTask();
			}else{
				$.Bpm.handle();
			}
        }
    });

});


