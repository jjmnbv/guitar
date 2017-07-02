+function ($, app) {
    app.registerTextHelper('st', app.st, 'code', 'name');
    app.registerTextHelper('newBrNo', app.newBrNo, 'brNo', 'brNa');
    app.registerTextHelper('cuMaYn', app.cuMaYn, 'code', 'name');
    app.registerTextHelper('paTyCd', app.paTyCd, 'code', 'name');

    /*图标权限判断*/
    /* var add=$('#add');
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
     var resetPwd =$('#resetPwd')
     var item6={};
     item6.id=resetPwd.attr('id');
     item6.class=resetPwd.attr('class');

     var picList=[];
     picList.push(item1,item2,item3,item4,item5,item6);
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
     $('#'+iconId).attr('href', "javaScript:;");
     }
     }
     }
     }
     */

    $('#loanTypeForm').validate({});
    /**
     * 初始化数据
     */


    $('#st').selectloader({'st': app.st});
    $('#newBrNo').selectloader({'newBrNo': app.newBrNo});

    app.registerTextHelper('st', app.st, 'code', 'name');
    /**
     * 材料集分类下来框初始化
     */
    $('#matPhCdDic').selectloader({'matPhCdDic': app.matPhCdDic});

    $('#update').getModal({
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore: function () {
            window.location.href = 'update-user.html?id=' + $('[type=radio]:checked').data('id');
        }
    });

    /**
     * 删除操作的弹框k
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
            url: app.DELETE_USER_DATA + $('[type=radio]:checked').data('id'),
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
            url: app.ACTIVE_USER_DATA + $('[type=radio]:checked').data('id'),
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
            url: app.DE_ACTIVE_USER_DATA + $('[type=radio]:checked').data('id'),
            text: '失效成功',
            isEasyModal: true
        }, app);
    });
    /**
     * 重置密码的弹框
     */
    $('#resetPwd').getModal({
        text: '确定重置密码？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.RESET_PWD + $('[type=radio]:checked').data('id'),
            text: '重置成功',
            isEasyModal: true
        }, app);
    });


    $.validator.addMethod('userCheck', function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9]{1,15}$/.test(value);
    }, '请输入数字或英文1-15位!');
    $('#loanTypeForm').validate({});
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!"),
    });
}(window.jQuery, window.app);