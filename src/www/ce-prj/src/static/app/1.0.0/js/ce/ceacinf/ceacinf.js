
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;
    $('.main-page').pagination({
        "first-store": app.firstStore
    });
    $('.acCur').selectloader({acCurList:app.dicts.dict_59});
	$('.acTy').selectloader({acTyList:app.dicts.dict_132});
	$('.acSt').selectloader({acStList:app.dicts.dict_3040});
    app.registerTextHelper('acCur', app.dicts.dict_59, 'code', 'name');
    app.registerTextHelper('acTy', app.dicts.dict_132, 'code', 'name');
    app.registerTextHelper('acSt', app.dicts.dict_3040, 'code', 'name');
    
    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {
    	form.find('.acCur').selectloader({acCurList:app.dicts.dict_59});
    	form.find('.acTy').selectloader({acTyList:app.dicts.dict_132});
    	form.find('.acSt').selectloader({acStList:app.dicts.dict_3040});
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
        title: '新增账户',
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
            url: app.CEACINF_CREATE
        }, app);
    });

    /**
     * 校验费用编号是否存在
     */
    var validatorNotExists = function (form) {

    };

    /**
     * 修改账户信息
     */
    $('#edit').getModal({
        title: '编辑账户信息',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            operatingMode='edit';
            var id = $('[type=radio]:checked').data('id');
            $("[name='acNa']").prop('readonly',true);
            $("[name='acNo']").prop('readonly',true);
            if (!id) return;
            app.context.showBefore({
                url: app.CEACINF_VIEW,
                modal: modal,
                param: id
            }, app, app.context.formInit);
        },

        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
            $("[name='acNa']").prop('readonly',false);
            $("[name='acNo']").prop('readonly',false);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.CEACINF_UPDATE
        }, app);
    });


    $('#delete').getModal({
        text: '确定要删除该条账号信息吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        var acId=$('[type=radio]:checked').data('id');
        app.context.submit({
            modal: modal,
            url: app.CEACINF_REMOVE+acId,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });
});