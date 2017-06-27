+function ($, app) {

   /* /!*图标权限判断*!/
    var add=$('#add');
    var item1={};
    item1.id=add.attr('id');
    item1.class=add.attr('class');
    var update=$('#update');
    var item2={};
    item2.id=update.attr('id');
    item2.class=update.attr('class');
    var del =$('#delete');
    var item3={};
    item3.id=del.attr('id');
    item3.class=del.attr('class');
    var active =$('#active')
    var item4={};
    item4.id=active.attr('id');
    item4.class=active.attr('class');
    var deActive =$('#deActive')
    var item5={};
    item5.id=deActive.attr('id');
    item5.class=deActive.attr('class');

    var picList=[];
    picList.push(item1,item2,item3,item4,item5);
    var markArray=app.pathArray;

    for(var i=0;i<picList.length;i++){
        var iconId=picList[i].id;
        var iconClass=picList[i].class;
        for(var j=0;j<markArray.length;j++){
            var markFlag=markArray[j].code;
            if(iconId==markFlag){
                if(!markArray[j].flag){
                    $('#'+iconId).removeClass(iconClass).addClass(iconClass+'-disabled');
                    $('#'+iconId).attr('id','');
                }
            }
        }
    }*/

    app.registerTextHelper('st', app.st, 'code', 'name');
    app.registerTextHelper('parentBrNo', app.parentBrNo, 'brNo', 'brNa');
    app.registerTextHelper('brLevQt', app.brLevQt, 'code', 'name');

    $('#queryBrLevQt').selectloader({'brLevQt': app.brLevQt});
    $('#querySt').selectloader({'st': app.st});

    /**
     * 设置弹框表单模板
     */

    app.context.formHtml1 = $('#form1-template').html();
    app.context.formHtml2 = $('#form2-template').html();

    /**
     * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
     */
    app.context.formInit = function (form) {
        /*form.find('[name="parentBrNo"]').selectloader({'parentBrNo': app.parentBrNo});*/
        form.find('[name="brLevQt"]').selectloader({'brLevQt': app.brLevQt});
        app.bindFormValidation(form);
        if (operatingMode == 'add') {
            validateIsBrNameExists(form)
        } else {
            form.find('[name="brNo"]').prop('readonly', true)
            validateIsBrNameExists(form)
        }
    };
    var validateIsBrNameExists = function (form) {
        $("input[name='brNa']", form).rules("add", {
            remote: {
                url: app.BRNA_EXIST,
                type: "POST",
                dateType: "text",
                data: {
                    brNo: function () {
                        return form.find('[name="brNo"]').val();
                    },
                    brNa: function () {
                        return form.find('[name="brNa"]').val();
                    }
                }
            },
            messages: {
                remote: "机构名称已经存在！"
            }
        });
    };


    /**
     * 材料集分类下来框初始化
     */
    $('#queryBrLevQt').selectloader({'matPhCd': app.matPhCd});
    $('#querySt').selectloader({'prev_br': app.prev_br});
    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
        title: '新增机构',
        body: app.context.formHtml1, /* 获取form的html模板，并填充到模态框中 */
        showBefore: function (modal) {
            operatingMode = 'add'
            app.context.showBefore({
                modal: modal
                /*url:app.CUBRS_CODE*/
            }, app, app.context.formInit);
        },
        showAfter: function (modal) {
            modal.find('#brLevQt').change(function () {
                if ($('#brLevQt option:selected').val()) {
                    $.getJSON(app.CUBRS + $('#brLevQt option:selected').val() + "/0", function (data) {
                        if (app.isOK(data)) {
                            app.parentBrNo = data.content;
                            modal.find('[name="parentBrNo"]').selectloader({'parentBrNo': app.parentBrNo});
                        }
                    });
                }
            });
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml1);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.COMMIT_ORGANIZATION_INFO_DATA
        }, app);
    });

    $('#update').getModal({
        title: '修改机构',
        body: app.context.formHtml2, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            operatingMode = 'update';
             var lev =$('[type=radio]:checked').parents('tr').find('.brLev input').val();
             var code =$('[type=radio]:checked').parents('tr').find('.icode').text();
            if(lev){
                $.getJSON(app.CUBRS + lev+"/"+code, function (data) {
                    if (app.isOK(data)) {
                        app.parentBrNo = data.content;
                        modal.find('[name="parentBrNo"]').selectloader({'parentBrNo': app.parentBrNo});
                    }
                });
            }

            app.context.showBefore({
                url: app.GET_ORGANIZATION_DATA_BY_ID,
                modal: modal,
                param: $('[type=radio]:checked').data('id')
            }, app, app.context.formInit);

        },
        showAfter: function (modal) {
           /* if (modal.find('#brLevQt').val()) {
                $.getJSON(app.CUBRS + modal.find('#brLevQt').val(), function (data) {
                    if (app.isOK(data)) {
                        app.parentBrNo = data.content;
                        modal.find('[name="parentBrNo"]').selectloader({'parentBrNo': app.parentBrNo});
                    }
                });
            }
            $.getJSON(app.GET_ORGANIZATION_DATA_BY_ID + "/" + $('[type=radio]:checked').data('id'), function (data) {
                if (app.isOK(data)) {
                    modal.find('[name="parentBrNo"]').val(data.parentBrNo);
                }
            });*/

            modal.find('#brLevQt').change(function () {
                if ($(this).val()) {
                    $.getJSON(app.CUBRS + $(this).val()+"/"+modal.find('[name="brNo"]').val(), function (data) {
                        if (app.isOK(data)) {
                            app.parentBrNo = data.content;
                            modal.find('[name="parentBrNo"]').selectloader({'parentBrNo': app.parentBrNo});
                        }
                    });
                }
            });
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml2);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.UPDATE_ORGANIZATION_INFO_DATA
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
            url: app.DELETE_ORGANIZATION_DATA + $('[type=radio]:checked').data('id'),
            text: '删除成功',
            failureText: '删除失败',
            isEasyModal: true
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
            url: app.ACTIVE_ORGANIZATION_DATA + $('[type=radio]:checked').data('id'),
            text: '激活成功',
            isEasyModal: true
        }, app);
    });
    /**
     * 失效操作的弹框
     */
    $('#deActive').getModal({
        text: '确定将状态变更为失效状态？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.DE_ACTIVE_ORGANIZATION_DATA + $('[type=radio]:checked').data('id'),
            text: '失效成功',
            isEasyModal: true
        }, app);
    });
    /**
     * 材料集分类下来框初始化
     */
    $('#matTyCd').selectloader({'matTyCd': app.matTyCd});
    $('#prev_br').selectloader({'prev_br': app.prev_br});


    $('#loanTypeForm').validate();

    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!"),
    });
}(window.jQuery, window.app);