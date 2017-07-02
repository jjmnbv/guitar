+ function($, app) {
    app.registerTextHelper('judge', app.judge, 'code', 'name');
    app.registerTextHelper('traNo', app.traNo, 'code', 'name');
    app.registerTextHelper('traCha', app.traCha, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;
    $('#tab3 .pagination-form').hide();
    $('#tab3').pagination({
        "first-store": app.firstStore
    });
    $('.muAcLoYn').selectloader({'muAcLoYnList': app.judge});
    $('.inMuAcYn').selectloader({'inMuAcYnList':app.judge});
    $('.enMlYn').selectloader({'enMlYnList':app.judge});
    $('.saMlYn').selectloader({'saMlYnList':app.judge});
    
    $('.traNo').selectloader({'traNoList':app.traNo});
    $('.traCha').selectloader({'traChaList':app.traCha});
    
    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {
    	
    	form.find('.traNo').selectloader({traNoList:app.traNo});
    	form.find('.traCha').selectloader({traChaList:app.traCha});
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
        title: '新增系统返回码',
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
            url: app.CERENO_CREATE
        }, app);
    });

    /**
     * 校验费用编号是否存在
     */
    var validatorNotExists = function (form) {

    };

    /**
     * 修改系统返回码
     */
    $('#edit').getModal({
        title: '编辑系统返回码信息',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            operatingMode='edit';
            var id = $('[type=radio]:checked').data('id');
            if (!id) return;
            app.context.showBefore({
                url: app.CERENO_VIEW,
                modal: modal,
                param: id
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.CERENO_UPDATE
        }, app);
    });


    $('#delete').getModal({
        text: '确定要删除该条系统返回码信息吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        var reId=$('[type=radio]:checked').data('id');
        app.context.submit({
            modal: modal,
            url: app.CERENO_REMOVE+reId,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });


    var sysdepForm = $('#cesysdep-form');
    var stradepForm = $('#cestradep-form');
    sysdepForm.find('.ok').click(function () {
        if(sysdepForm.valid()){
            var jqxhr = app.$submit(sysdepForm, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
                if (app.isOK(data)) {
                    app.alertOK('提交成功');
                    return;
                }
            });
            return false;
        }
    });
    stradepForm.find('.ok').click(function () {
        if(stradepForm.valid()){
            var jqxhr = app.$submit(stradepForm, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
                if (app.isOK(data)) {
                    app.alertOK('提交成功');
                    return;
                }
            });
            return false;
        }
    });
    sysdepForm.find('.cancel').click(function () {
        sysdepForm[0].reset();
    });
    stradepForm.find('.cancel').click(function () {
        stradepForm[0].reset();
    });
    
    
    app.$getJSON(app.CESYSDEP_VIEW+'/0').done(function (data) {
       if(app.isOK(data)){
           $('#cesysdep-form').deserializeObject(data);
       }
    });
    app.$getJSON(app.CESTRADEP_VIEW+'/0').done(function (data) {
        if(app.isOK(data)){
            $('#cestradep-form').deserializeObject(data);
        }
    });

});