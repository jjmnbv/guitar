$(function () {
    var $ = window.jQuery;
    var app = window.app;

    /**
     * 设置弹框表单模板
     */
    app.context.formHtml = $('#form-template').html();
    /**
     * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
     */
    app.context.formInit = function (form) {
        /*   初始化弹窗里的下拉框   */
        form.find('[name="loKiCd"]').selectloader({'materialSorts': app.materialSorts});
        /*   初始化时间控件   */
        form.find(".date-picker-page").datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        });
    };

    /**
     * 初始化数据
     */
    $('#mainPage').pagination({
        "first-store": app.firstStore
    });

    /**
     * 初始化时间控件
     */
    $(".date-picker-page").datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        autoclose: !0,
        format: "yyyy-mm-dd",
        'start-date': "+0d",
        language: 'zh-CN'
    });

    /**
     * 名单管理下来框初始化
     */
    $('#listLevel').selectloader({'listLevel': app.listLevel});

    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
        title: '新增合作方灰名单',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        showBefore: function (modal) {
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
            url: app.PERSON_BLACK_ADD
        }, app);
    });

    /**
     * 修改操作的弹框
     */
    $('#update').getModal({
        title: '修改合作方灰名单',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            app.context.showBefore({
                url: app.PERSON_BLACK_GET_DATA_BY_ID,
                modal: modal,
                param: {id: $('[type=radio]:checked').data('id')}
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.PERSON_BLACK_UPDATE
        }, app);
    });

    /**
     * 查看详情弹框
     */
    $('#detail').getModal({
        title: '查看合作方灰名单',
        body: app.context.formHtml,
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            app.context.showBefore({
                url: app.PERSON_BLACK_GET_DATA_BY_ID,
                modal: modal,
                param: {id: $('[type=radio]:checked').data('id')},
                readOnly: true
            }, app);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        },
        footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'
    });

    /**
     * 转入操作的弹框
     */
    $('#join').getModal({
        text: '确定要将该客户转入合作方灰名单吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.PERSON_BLACK_JOIN,
            param: {id: $('[type=radio]:checked').data('id')},
            text: '转入成功',
            isEasyModal: true
        }, app);
    });

    /**
     * 移出操作的弹框
     */
    $('#remove').getModal({
        text: '确定要将该客户移出合作方灰名单吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.PERSON_BLACK_REMOVE,
            param: {id: $('[type=radio]:checked').data('id')},
            text: '移出成功',
            isEasyModal: true
        }, app);
    });
});