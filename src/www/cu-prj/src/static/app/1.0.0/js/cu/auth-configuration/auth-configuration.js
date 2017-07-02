/**
 * Created by lina on 2017/3/14.
 */
$(function(){
    var app = window.app;
    app.registerTextHelper('resActCd', app.ResActCd, 'code', 'name');

    /*编辑*/
    $('#update').getModal({
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore: function () {
            window.location.href="update-auth-configuration.html?resNo="+$('[type=radio]:checked').data('id')+'&url='+$('[type=radio]:checked').data('url');
        }
    });

    /**
     * 删除操作的弹框
     */
    $('#delete').getModal({
        text: '确定要删除该条记录吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.FUNCTION_CONFIGURATION_REMOVE + $('[type=radio]:checked').data('id')+'/'+$('[type=radio]:checked').data('url'),
            text: '删除成功',
            failureText: '删除失败',
            isEasyModal: true
        }, app);
    });

});