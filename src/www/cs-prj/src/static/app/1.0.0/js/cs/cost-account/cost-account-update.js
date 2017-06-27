$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        app.$getJSON(app.GET_REPAY_DATA_BY_ID + app.request.id,function(data){
        if (app.isOK(data)) {
           var tpl = Handlebars.compile($('#main-cont-template').html());
           var html = tpl(data);
           $("#main-template").html(html);
           //费用计算方式开始
            /*新增一行*/
            var rowSum = 0+$("#costModeTableBody").find("tr").length+1;
                $("#costAccountAdd").tableCurd({
                target: $("#costModeTableBody"),
                template: $('#table-row1-template'),
                index: rowSum,
                fn: function (el, index) {
                    el.find("input").uniform();
                    el.find("select").selectloader({'feCalCdList': app.feCalCdList});
                 }
             });
             /*删除一行*/
             $('#costAccountDelete').getModal({
                text: '确定要删除该条记录吗？',
                size: 'modal-sm',
                footer:'<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
                selector: function () {
                          return !!$('[type=radio]:checked').length;
                }
                }, function () {
                $("input[type='radio']:checked").parents("tr").remove();
             });
             //费用计算方式结束
             $('.feTyCd').selectloader({'feTyCdList': app.feTyCdList});
             $('.amNaCd').selectloader({'amNaCdList': app.amNaCdList});
             $('.fePayTyCd').selectloader({'fePayTyCdList': app.fePayTyCdList});
             $('.payFrCd').selectloader({'payFrCdList': app.payFrCdList});
             $('.feCalCd').selectloader({'feCalCdList': app.feCalCdList});
               return;
            }
            app.alertError(data.errors.join('\n'));
        });
        
    }(window.jQuery, window.app);
});


//提交页面表单
$(function(){
	$('#saveForm').click(function () {
        if ($('#update-cost-form').valid()) {
        	console.log($('#add-cost-form').serializeObject());
            submit(app.COMMIT_COST_ACCOUNT_UPDATE_DATA, $('#add-cost-form').serializeObject());
        }
        return false;
});
});