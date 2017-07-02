/**
 * Created by lina on 2017/1/23.
 */
$(function(){
    var app = window.app;

    $('#mainPage').pagination({
        "first-store": app.firstStore
    });
    initDatePicker(
        $('#loanTypeForm [name="rangeDate"]'),
        true,
        {
            minDate: '2012-1-1'
        }
    )
    // alert(moment().subtract(7, 'days').format("YYYY-MM-DD"))

    /**
     * 删除操作的弹框
     */
    $('#delete').getModal({
        text: '确定要清空日志吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.DELETE_ORGANIZATION_DATA + $('[type=radio]:checked').data('id'),
            text: '删除成功',
            isEasyModal: true
        }, app);
    });

    $('#export').getModal({
        text: '确定要导出日志吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.DELETE_ORGANIZATION_DATA + $('[type=radio]:checked').data('id'),
            text: '导出成功',
            isEasyModal: true
        }, app);
    });

});