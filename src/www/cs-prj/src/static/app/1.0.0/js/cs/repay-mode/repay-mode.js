 + function ($,app) {
    
    
    $('.status').selectloader({'status': app.status});
    $('.pmCd').selectloader({'pmCd': app.pmCd});
    app.registerTextHelper('pmCd', app.pmCd, 'code', 'name');
    /**
     * 增加是跳转页面
     */
    /**
     * 修改也是跳转页面
     */
    $('#update').getModal({
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore:function(){
        	window.location.href='repay-mode-update.html?loPmId='+$('[type=radio]:checked').data('id');
        }
        
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
            url: app.REPAY_MODE_DELETE_DATA + $('[type=radio]:checked').data('id'),
            text: '删除成功',
            isEasyModal: true
        }, app);
    });
}(window.jQuery, window.app);
