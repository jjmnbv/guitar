/**
 * Created by Administrator on 2017/6/1 0001.
 */
+function($,app){
    app.registerTextHelper('loanTypeCode', app.loanTypeContent.dicts, 'code', 'name');
    /*级联贷款子类型*/
    $('.dictionarys').selectloader({'loanTypeList': app.loanTypeContent.dicts });
    /*获取弹框模板*/
    app.context.formHtml=$('#form-template').html();
    /*初始化弹框*/
    app.context.formInit=function(form){
        form.find('[name="loanTypeCode"]').selectloader({'loanTypeList': app.loanTypeContent.dicts });
        app.bindFormValidation(form);
    }
    /*新增*/
    $('#add').getModal({
       title:"授信品种配置",
        body:app.context.formHtml,
        showBefore:function(modal){
            modal.find('[name="loanTypeSubCode"]').attr('id','loanTypeSubList');
            app.context.showBefore({
                modal:modal,
            },app,app.context.formInit)
        },
        hideAfter:function(modal){
            modal.setBody(app.context.formHtml);

        }
    },function(modal){
        app.context.submit({
            modal:modal,
            url:app.SERVICE_CONFIG_CRATE
        },app)
    })
    /*修改*/
    $('#update').getModal({
        title:"授信品种配置",
        body:app.context.formHtml,
        selector:function(){
            return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
        },
        showBefore:function(modal){
            modal.find('[name="loanTypeSubCode"]').attr('id','loanTypeSubList');
            app.context.showBefore({
                url: app.SERVICE_CONFIG_VIEW,
                modal: modal,
                param: $('#update').parents('.portlet').find('[type=radio]:checked').data('id')
            }, app, app.context.formInit);
            modal.find('[name="businessKindNumber"]').attr("readonly","readonly");
        },
        hideAfter:function(modal){
            modal.setBody(app.context.formHtml);
        }
    },function(modal){
        app.context.submit({
            modal:modal,
            url:app.SERVICE_CONFIG_UPDATE
        },app)
    })
    /*删除*/
    $('#delete').getModal({
        text:"确定要删除该条记录吗?",
        size:"modal-sm",
        selector:function(){
            return !!$('#delete').parents('.portlet').find('[type=radio]:checked').length;
        }
    },function(modal){
        app.context.submit({
            modal:modal,
            url:app.SERVICE_CONFIG_REMOVE+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id'),
            text:"删除成功",
            isEasyModal:true
        },app)
    })
}(window.jQuery,window.app);