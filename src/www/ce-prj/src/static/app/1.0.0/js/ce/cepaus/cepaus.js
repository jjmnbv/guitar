+ function($, app) {
    app.registerTextHelper('doSt', app.doSt, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;
    $('.main-page').pagination({
        "first-store": app.firstStore
    });
    $('.doSt').selectloader({'doStList': app.doSt});
    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {
        // 初始化时间插件
        form.find(".date-picker-page").datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        });
        app.bindFormValidation(form);
        if(operatingMode =='add'){
            validatorNotExists(form);
        }else{

        }

    };

    /**
     * 校验费用编号是否存在
     */
    var validatorNotExists = function (form) {

    };

    /**
     * 修改放款管理信息
     */
    $('#edit').getModal({
        title: '编辑放款管理信息',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            operatingMode='edit';
            var id = $('[type=radio]:checked').data('id');
            if (!id) return;
            app.context.showBefore({
                url: app.CEPAUS_VIEW,
                modal: modal,
                param:id
            }, app, app.context.formInit);
        },
        showAfter:function () {
            $('[name=shAm1]').val(app.formatCurrencyM($('[name=shAm]').val()));
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.CEPAUS_UPDATE,
        }, app);
    });


    $('#loan').getModal({
        text: '提交成功',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        var ceId=$('[type=radio]:checked').data('id');
        app.context.submit({
            modal: modal,
            url: app.CEPAUS_REMOVE+ceId,
            isEasyModal: true
        }, app);
    });
});