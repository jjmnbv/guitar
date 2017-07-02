+function ($,app) {

     $('.fePayTyCd').selectloader({'fePayTyCdList': app.fePayTyCdList});
     $('.payFrCd').selectloader({'payFrCdList': app.payFrCdList});
     $('.feeCalCd').selectloader({'feeCalCdList': app.feeCalCdList});
     app.registerTextHelper('fePayTyCd', app.fePayTyCdList, 'code', 'name');
     app.registerTextHelper('payFrCd', app.payFrCdList, 'code', 'name');
     app.registerTextHelper('feeCalCd', app.feeCalCdList, 'code', 'name');
     app.registerTextHelper('payDireCd', app.payDireCdList, 'code', 'name');
    
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
        	window.location.href='cost-subInfor-update.html?feCd='+$('[type=radio]:checked').data('id')+'&suId='+$('[type=radio]:checked').data('value');
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
            url: app.COST_SUB_DELETE_DATA + '?feCd=' +$('[type=radio]:checked').data('id') +'&suId='+$('[type=radio]:checked').data('value'),
            text: '删除成功',
            isEasyModal: true
        }, app);
    });
}(window.jQuery, window.app);