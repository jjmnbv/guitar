+function ($, app) {
    app.registerTextHelper('st', app.st, 'code', 'name');

    /*图标权限判断*/
/*    var add=$('#add');
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


    /**
     * 设置弹框表单模板
     */
    app.context.formHtml1 = $('#form1-template').html();
    app.context.formHtml2 = $('#form2-template').html();

    app.isOk = {
        boolean: [
            {'code': '1', 'name': '是'},
            {'code': '0', 'name': '否'}
        ]
    }

    /**
     * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
     */
    app.context.formInit = function (form) {
        app.bindFormValidation(form);
        if(operatingMode=='add') {
            validateIsRoNaExists(form);
        }else{
            form.find('[name="roNo"]').prop('readonly', true);
            validateIsRoNaExists(form);
        }
    };

    var validateIsRoNaExists = function (form) {
        $("input[name='roNa']", form).rules("add", {
            remote: {
                url: app.ROLE_NA_EXIST,
                type: "POST",
                dateType: "text",
                data: {
                    roNo: function () {
                        return form.find('[name="roNo"]').val();
                    },
                    roNa: function () {
                        return form.find('[name="roNa"]').val();
                    }
                }
            },
            messages: {
                remote: "角色名称已经存在！"
            }
        });
    };

    $('#querySt').selectloader({'st': app.st});
    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
        title: '新增角色',
        body: app.context.formHtml1, /* 获取form的html模板，并填充到模态框中 */
        showBefore: function (modal) {
            operatingMode = 'add'
            app.context.showBefore({
                modal: modal
               /* url: app.CUROS_CODE*/
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml1);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.COMMIT_ROLE_INFO_DATA
        }, app);
    });

    $('#update').getModal({
        title: '修改角色',
        body: app.context.formHtml2, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            operatingMode = 'update'
            app.context.showBefore({
                url: app.GET_ROLE_DATA_BY_ID,
                modal: modal,
                param: $('[type=radio]:checked').data('id')
            }, app, app.context.formInit);
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml2);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.UPDATE_ROLE_INFO_DATA
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
            url: app.DELETE_ROLE_DATA + $('[type=radio]:checked').data('id'),
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
            url: app.ACTIVE_ROLE_DATA + $('[type=radio]:checked').data('id'),
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
            url: app.DE_ACTIVE_ROLE_DATA + $('[type=radio]:checked').data('id'),
            text: '失效成功',
            isEasyModal: true
        }, app);
    });
    /**
     * 材料集分类下来框初始化
     */
    $('#matTyCd').selectloader({'matTyCd': app.matTyCd});
    $('#status').selectloader({'boolean': app.isOk.boolean});


    $('#loanTypeForm').validate({});
    $.extend( $.validator.messages, {
        rangelength: $.validator.format( "请输入长度在 {0} 到 {1} 之间的字符!" ),
    } );
}(window.jQuery, window.app);