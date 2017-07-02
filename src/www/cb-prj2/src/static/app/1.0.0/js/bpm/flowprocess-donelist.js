$(function () {
  /**
   * 查看任务
   */
  $(document).on('click', '.flow-done-view', function () {
    var taskId = $(this).attr('data-id');
    var flowKey = $(this).attr('data-flowKey');
    var stepKey = $(this).attr('data-stepKey');
    var deployId = $(this).attr('data-deployid');
    window.location.href = app.base + '/workflow/viewdonetaskform?taskId=' + taskId + '&flowKey=' + flowKey + '&stepKey=' + stepKey + '&deployId=' + deployId;
  });

  $(document).on('click', '.flow-done-retract', function () {
    var taskId = $(this).attr('data-id');

    App.startPageLoading({ animate: true });
    var jqxhr = app.$post(app.base + '/bpm/retract/' + taskId, {}, 'json');
    if (!jqxhr) return false;
    jqxhr.done(function (data) {
      App.stopPageLoading();
      if (app.isOK(data)) {
        $('.main-page .pagination-reload').click();
        if (data.payload) {
          app.alertOK("撤销成功.");
        } else {
          app.alertOK("撤销失败.");
        }
        return;
      }
      app.alertError(data.errors.join('\n'));
    });
  });
});