/**
 * Created by Administrator on 2017/5/23 0023.
 */
+function ($, app) {
    /*分单节点*/
    app.registerTextHelper('workOrderNodeCode', app.processNodes, 'code', 'name');
    /**
     * 设置弹框表单模板
     */
    app.context.formHtml = $('#select-people-template').html();

    /**
     * 选择人员的弹框
     */
    var applyWaterParam;
    $('#gongdanfenpei').getModal({
        title: '选择人员',
       /* statusArray:['CS'],
        noHandleArray:['ZF','JH'],
        noHandle:'此状态不能修改',*/
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('#gongdanfenpei').parents('.portlet').find('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            applyWaterParam = $('#gongdanfenpei').parents('.portlet').find('[type=radio]:checked').data('id');
            app.context.showBefore({
                url: app.QUERT_PERSON,
                modal: modal,
                param: '?applyWater='+applyWaterParam,
                dataJson: true
            }, app,null,null,app.context.formHtml);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            isEasyModal: true,
            url: app.MANUAL_WORK_ORDER,
            param:{
                applyWater:applyWaterParam,
                workOrderUserLoginName:$('#show-person').find('[type=radio]:checked').data('id')
            },
            text: '分单成功'
        }, app);
    });
}(window.jQuery, window.app);