$(function(){
	/**
   * 办理任务
   */
  	$(document).on('click','.flow-todo', function () {
      var taskId = $(this).attr('data-id');
      $.Bpm.init({taskId: taskId});
      $.Bpm.handle();
  	});
  
});