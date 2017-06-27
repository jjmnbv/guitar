$(function () {
    var app = window.app;

    /*图标权限判断*/
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
    }


     app.registerTextHelper('holCd', app.holCd, 'code', 'name');
    /**
     * 设置弹框表单模板
     */
    app.context.formHtml = $('#form-template').html();
    app.context.formHtml2 = $('#form-template2').html();//销假
    /**
     * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
     */
    app.context.formInit = function (form) {// form.find(".date-picker-page").datepicker({
        
        //     rtl: App.isRTL(),
        //     orientation: "left",
        //     autoclose: !0,
        //     format: "yyyy-mm-dd",
        //     'start-date': "+0d",
        //     language: 'zh-CN'
        // });
        form.find('[name="holCd"]').selectloader({'holCd': app.holCd});
        // initDatePicker($('.date-picker-page'), false, {"singleDatePicker": true})
        initDatePicker(form.find('.date-picker-page'), false)
    };
    app.context.formInit2 = function (form) {

        initDatePicker(form.find('.date-picker-page'), false)
      /* form.find('[name="woDt"]').click(function () {
            var $ele = $(this)
            app.$getJSON(app.CURRENT_DATE).done(function (data) {
                if (app.isOK(data)) {
                    // $(this).val(moment().format("YYYY-MM-DD HH:MM:SS"))
                    $ele.val(data.woDt)
                }
            });
        });*/
        app.$getJSON(app.CURRENT_DATE).done(function (data) {
            if (app.isOK(data)) {
                form.find('[name="woDt"]').val(data.woDt);
            }
        });
        form.find('[name="holCd"]').selectloader({'holCd': app.holCd});
    };


   
    /**
     * 材料集分类下来框初始化
     */
    $('#matPhCdDic').selectloader({'matPhCdDic': app.matPhCdDic});
    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
        title: '请假登记',
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
            url: app.POST_LEAVE
        }, app);
    });

    $('#update').getModal({
        title: '销假',
        body: app.context.formHtml2, /* 获取form的html模板，并填充到模态框中 */
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        showBefore: function (modal) {
            app.context.showBefore({
                url: app.LEAVE_VIEW,
                modal: modal,
                param: $('[type=radio]:checked').data('id')
                
            }, app, app.context.formInit2);
            $('#hif').val($('[type=radio]:checked').data('id'));
        },
        hideAfter: function (modal) {
            modal.setBody(app.context.formHtml2);
        }
    }, function (modal) {
        app.context.submit({
            modal: modal,
            url: app.UPDATE_POST_LEAVE
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
            url: app.ACTIVE_ORGANIZATION_DATA + $('[type=radio]:checked').data('id'),
            text: '失效成功',
            isEasyModal: true
        }, app);
    });
    /**
     * 材料集分类下来框初始化
     */
    $('#matTyCd').selectloader({'matTyCd': app.matTyCd});
    $('#prev_br').selectloader({'prev_br': app.prev_br});
})