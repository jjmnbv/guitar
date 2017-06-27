+ function($, app) {
    //翻译字典项列表
    app.registerTextHelper('status',app.statusList,'code','name');
    /*获取弹框模板*/
    app.context.formHtml = $('#form-template').html();
    /*初始化弹框*/
    app.context.formInit = function(form) {
        app.bindFormValidation(form);
    };

    /*调额*/
    var limitNumber;
    var limitNumberSubId;
    $('#adjust-amount').getModal({
        size: "modal-sm",
        title: "调整指标额度",
        body: app.context.formHtml,
        selector: function() {
            return !!$('#adjust-amount').parents('.portlet').find('[type=radio]:checked').length;
        },
        showBefore: function(modal) {
            limitNumber = $('#adjust-amount').parents('.portlet').find('[type=radio]:checked').data('id');
            limitNumberSubId = $('#adjust-amount').parents('.portlet').find('[type=radio]:checked').data('indexsetcode');
            app.context.showBefore({
                url: app.OTHER_QUOTA_VIEW,
                param: "?limitNumber="+limitNumber+"&limitNumberSubId="+limitNumberSubId,
                dataJson: true,
                modal: modal,
            }, app, null,app.context.formInit,app.context.formHtml);
        },
        showAfter:function(modal){
           modal.find("[name='limitNumber']").val(limitNumber);
           modal.find("[name='limitNumberSubId']").val(limitNumberSubId);
            $(".bindEvent").each(function(){
                if($(this).val()!=""){
                    $(this).val(app.formatCurrencyM($(this).val()));
                }
            });
        },
        hideAfter: function(modal) {
            modal.setBody(app.context.formHtml)
        }
    }, function(modal) {
        app.context.submit({
            modal: modal,
            param: "?limitNumber="+limitNumber+"&limitNumberSubId="+limitNumberSubId,
            url: app.OTHER_QUOTA_UPDATE
        }, app)
    })
    /*冻结*/
    $('#freeze').getModal({
        size: "modal-sm",
        statusArray: ["JH"],
        textArray: "确定要冻结该条记录吗？",
        noHandleArray: ["CS", 'DJ','SX'],
        noHandle: '该条记录不可冻结！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        }
    }, function(modal) {
        limitNumber = $('#freeze').parents('.portlet').find('[type=radio]:checked').data('id');
        limitNumberSubId = $('#freeze').parents('.portlet').find('[type=radio]:checked').data('indexsetcode');
        app.context.submit({
            modal: modal,
            url: app.OTHER_QUOTA_STATUS+"0",
            param:{
                limitNumber:limitNumber,
                limitNumberSubId:limitNumberSubId,
            },
            text: "冻结成功",
            isEasyModal: true
        }, app)
    })
    /*解冻*/
    $('#unfreeze').getModal({
        size: "modal-sm",
        statusArray: ["DJ"],
        textArray: "确定解冻结该条记录吗？",
        noHandleArray: ["CS", 'JH','SX'],
        noHandle: '该条记录不可解冻！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        }
    }, function(modal) {
        limitNumber = $('#unfreeze').parents('.portlet').find('[type=radio]:checked').data('id');
        limitNumberSubId = $('#unfreeze').parents('.portlet').find('[type=radio]:checked').data('indexsetcode');
        app.context.submit({
            modal: modal,
            url: app.OTHER_QUOTA_STATUS+"1",
            param:{
                limitNumber:limitNumber,
                limitNumberSubId:limitNumberSubId,
            },
            text: "解冻成功",
            isEasyModal: true
        }, app)
    })
}(window.jQuery, window.app);

