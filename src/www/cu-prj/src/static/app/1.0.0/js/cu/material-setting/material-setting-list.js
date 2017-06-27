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
        form.find('[name="matPhCdDic"]').selectloader({'matPhCdDic': app.matPhCdDic});
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
     * 材料集分类下来框初始化
     */
    $('#matPhCdDic').selectloader({'matPhCdDic': app.matPhCdDic});

    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
        title: '新增材料集配置',
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
            url: app.COMMIT_MATERIAL_ADD_DATA
        }, app);
    });

    /**
     * 修改操作的弹框
     */
    $('#update').getModal({
        title: '修改材料集配置',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            app.context.showBefore({
                url: app.GET_DATA_BY_ID,
                modal: modal,
                param: $('[type=radio]:checked').data('id')
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.COMMIT_MATERIAL_UPDATE_DATA
        }, app);
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
            url: app.MATERIAL_DELETE_DATA + $('[type=radio]:checked').data('id'),
            text: '删除成功',
            failureText: '删除失败',
            isEasyModal: true
        }, app);
    });

    /**
     * 复制操作的弹框
     */
    $('#copy').getModal({
        title: '复制材料集配置',
        cancel: '取消复制',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            app.context.showBefore({
                url: app.GET_DATA_BY_ID,
                modal: modal,
                param: $('[type=radio]:checked').data('id')
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.COMMIT_MATERIAL_COPY_DATA
        }, app);
    });

    /**
     * 激活操作的弹框
     */
    $('#active').getModal({
        text: '确定将状态变更为激活状态？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.MATERIAL_ACTIVE_DATA,
            param: {matSetCd: $('[type=radio]:checked').data('id')},
            text: '激活成功',
            isEasyModal: true
        }, app);
    });

    /**
     * 失效操作的弹框
     */
    $('#unActive').getModal({
        text: '确定将状态变更为失效状态？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.MATERIAL_UN_ACTIVE_DATA,
            param: {matSetCd: $('[type=radio]:checked').data('id')},
            text: '失效成功',
            isEasyModal: true
        }, app);
    });
});