$(function () {
  /**
   * 挂起
   */
  $(document).on('click', '.flow-suspend', function () {
    var taskId = $(this).attr('data-id');
    var flowKey = $(this).attr('data-flowKey');
    var stepKey = $(this).attr('data-stepKey');
    var deployId = $(this).attr('data-deployid');

    $.Bpm.init({ taskId: taskId, flowKey: flowKey, stepKey: stepKey });
    $.Bpm.cancelTask();
  });

  /**
   * 激活
   */
  $(document).on('click', '.flow-active', function () {
    var taskId = $(this).attr('data-id');
    var flowKey = $(this).attr('data-flowKey');
    var stepKey = $(this).attr('data-stepKey');
    var deployId = $(this).attr('data-deployid');

    $.Bpm.init({ taskId: taskId, flowKey: flowKey, stepKey: stepKey });
    $.Bpm.activeTask();
  });

});