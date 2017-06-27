$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;
    $('.main-page').pagination({
        "first-store": app.firstStore
    });

    app.registerTextHelper('busTyp', app.dicts.dict_3029, 'code', 'name');
    app.registerTextHelper('amtTyp', app.dicts.dict_3013, 'code', 'name');
    app.registerTextHelper('cdTyp', app.dicts.dict_3004, 'code', 'name');
    app.registerTextHelper('ldInd', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('acInd', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('ioTyp', app.dicts.dict_3003, 'code', 'name');
    app.registerTextHelper('acNeInd', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('neInd', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('acStChk', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('sendInd', app.dicts.dict_3002, 'code', 'name');
    app.registerTextHelper('cdTyp', app.dicts.dict_3004, 'code', 'name');

    $('.ldInd').selectloader({'ldIndList': app.dicts.dict_3002});
    $('.acInd').selectloader({'acIndList': app.dicts.dict_3002});
    $('.ioTyp').selectloader({'ioTypList': app.dicts.dict_3003});
    $('.acNeInd').selectloader({'acNeIndList': app.dicts.dict_3002});
    $('.neInd').selectloader({'neIndList': app.dicts.dict_3002});
    $('.acStChk').selectloader({'acStChkList': app.dicts.dict_3002});
    $('.sendInd').selectloader({'sendIndList': app.dicts.dict_3002});
    $('.cdTyp').selectloader({'cdTypList': app.dicts.dict_3004});

    app.context.formHtml = $('#form-template').html();
    app.context.formInit = function (form) {

        form.find('.busTyp').selectloader({'busTypList': app.dicts.dict_3029});
        form.find('.amtTyp').selectloader({'amtTypList': app.dicts.dict_3013});
        form.find('.ldInd').selectloader({'ldIndList': app.dicts.dict_3002});
        form.find('.acInd').selectloader({'acIndList': app.dicts.dict_3002});
        form.find('.ioTyp').selectloader({'ioTypList': app.dicts.dict_3003});
        form.find('.acNeInd').selectloader({'acNeIndList': app.dicts.dict_3002});
        form.find('.neInd').selectloader({'neIndList': app.dicts.dict_3002});
        form.find('.acStChk').selectloader({'acStChkList': app.dicts.dict_3002});
        form.find('.sendInd').selectloader({'sendIndList': app.dicts.dict_3002});
        form.find('.cdTyp').selectloader({'cdTypList': app.dicts.dict_3004});

        /* form.validate({
         errorPlacement: function(error, element) {
         var name = $(element).attr('name')
         var groupName = ['subCd', 'busTyp', 'amtTyp'];
         var isExists = $.inArray(name,groupName );
         //    			error.appendTo(element.parent());
         console.log('name is:'+name)
         console.log('isExists is:'+isExists)
         if(isExists!=-1){
         $.each(groupName, function(i, n){
         var $curRow = $('[name="'+n+'"]').parent()
         if(!$curRow.find('.help-block').size()){
         error.appendTo($curRow);
         }
         //        				$('.info').html(error.html());
         //            			error.appendTo(element.parent());
         })
         }else{
         //      			$('.info').html("")
         error.appendTo(element.parent());
         }
         }
         });*/

        app.bindFormValidation(form);
        if(operatingMode =='add'){
            validatorNotExists(form);
        }else{
            form.find('[name="subCd"]').prop('readonly', true);
        }
    };

    /**
     * 添加科目信息配置表
     */

    $('#add').getModal({
        title: '新增科目信息配置',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        showBefore: function (modal) {
            operatingMode='add',
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
            url: app.SYACCFG_CREATE
        }, app);
    });

    /**
     * 科目编号、业务类型、金融类型唯一性校验
     */
    var validatorNotExists = function (form) {
        $("[name='subCd']", form).rules("add", {
            remote: {
                url: app.SYACCFG_NOTEXISTS,
                type: "POST",
                dateType: "text",
                data:{
                    subCd:function(){ return form.find('[name="subCd"]').val(); },
                    busTyp:function(){ return form.find('[name="busTyp"]').val(); },
                    amtTyp:function(){ return form.find('[name="amtTyp"]').val(); },
                }},
            messages: {
                remote: "科目编号、业务类型或金额类型已存在！"
            }
        });

        $("[name='busTyp']", form).rules("add", {
            remote: {
                url: app.SYACCFG_NOTEXISTS,
                type: "POST",
                dateType: "text",
                data:{
                    busTyp:function(){ return form.find('[name="busTyp"]').val(); },
                    subCd:function(){ return form.find('[name="subCd"]').val(); },
                    amtTyp:function(){ return form.find('[name="amtTyp"]').val(); },
                }},
            messages: {
                remote: "科目编号、业务类型或金额类型已存在！"
            }
        });
        $("[name='amtTyp']", form).rules("add", {
            remote: {
                url: app.SYACCFG_NOTEXISTS,
                type: "POST",
                dateType: "text",
                data:{
                    amtTyp:function(){ return form.find('[name="amtTyp"]').val(); },
                    busTyp:function(){ return form.find('[name="busTyp"]').val(); },
                    subCd:function(){ return form.find('[name="subCd"]').val(); },
                }},
            messages: {
                remote: "科目编号、业务类型或金额类型已存在！"
            }
        });
    }


    /**
     * 修改科目信息配置表
     */

    $('#edit').getModal({
        title: '编辑科目信息配置',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            operatingMode='edit';
            var id = $('[type=radio]:checked').data('id');
            if (!id) return;
            app.context.showBefore({
                url: app.SYACCFG_VIEW,
                modal: modal,
                param:id
            }, app, app.context.formInit);
        },
       showAfter: function (modal) {
            $('.amtTyp,.busTyp').attr('disabled', true);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml);
            $('.amtTyp,.busTyp').attr('disabled', false);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.SYACCFG_UPDATE,
        }, app);
    });

    /**
     * 删除科目信息配置表
     */

    $('#delete').getModal({
        text: '确定要删除该条科目信息配置吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        var id=$('[type=radio]:checked').data('id');
        app.context.submit({
            modal: modal,
            url: app.SYACCFG_REMOVE+id,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });

});
