
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;

    $('.chNa').selectloader({chNaList:app.dicts.dict_3041});
    $('.doSt').selectloader({doStList:app.dicts.dict_3037});
    app.registerTextHelper('chNa', app.dicts.dict_3041, 'code', 'name');
    app.registerTextHelper('doSt', app.dicts.dict_3037, 'code', 'name');
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
        form.find('.chNa').selectloader({chNaList:app.dicts.dict_3041});
        form.find('.doSt').selectloader({doStList:app.dicts.dict_3037});
        app.bindFormValidation(form);
        if(operatingMode =='add'){
            validatorNotExists(form);
        }else{

        }

    };

    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
        title: '新增批量扣款任务',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        showBefore: function (modal) {
            operatingMode='add';
            app.context.showBefore({
                modal: modal
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.CEPAUSFA_CREATE
        }, app);
    });

    /**
     * 校验费用编号是否存在
     */
    var validatorNotExists = function (form) {

    };

    /**
     * 修改批量扣款任务信息
     */
    $('#edit').getModal({
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore:function () {
            var baFaNo = $('[type=radio]:checked').data('id');
            window.location.href="cepaussu-index.html?baFaNo="+baFaNo;
        }
    });


    $('#delete').getModal({
        text: '确定要删除该条扣款任务信息吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        var baNo=$('[type=radio]:checked').data('id');
        app.context.submit({
            modal: modal,
            url: app.CEPAUSFA_REMOVE+baNo,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });
});