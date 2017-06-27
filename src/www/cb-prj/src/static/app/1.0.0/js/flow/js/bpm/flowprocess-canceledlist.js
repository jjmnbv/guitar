$(function(){
	/**
   * 查看任务
   */
  	$(document).on('click','.flow-done', function () {
      var taskId = $(this).attr('data-id');
      var flowKey = $(this).attr('data-flowKey');
      var stepKey = $(this).attr('data-stepKey');
      var deployId = $(this).attr('data-deployid');
      
      window.location.href = app.base + '/bpm/canceledtaskformview?taskId='+taskId+'&flowKey='+flowKey+'&stepKey='+stepKey+'&deployId='+deployId;
  	});
  
});