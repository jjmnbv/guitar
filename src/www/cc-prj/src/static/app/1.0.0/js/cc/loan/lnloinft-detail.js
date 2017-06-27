$(function () {
    var $ = window.jQuery;
    var app = window.app;
    app.context.formHtml = $('#lnloinft-calculate-template').html();

    $('#commit').getModal({
        text: '确认放款信息？',
        size: 'modal-sm',
    }, function (modal) {
        var athNo = $("#athNo").val();
        var loNo = $("#loNo").val();
        var jqxhr = app.$post(app.LNLOINFT_LOANPAYDOWN + athNo, {}, 'json');
        if (!jqxhr) {
            App.stopPageLoading();
            return;
        }
        jqxhr.done(function (data) {
            App.stopPageLoading();
            if (app.isOK(data)) {
                app.alertOK('提交成功');
//                setTimeout(function (){
                    window.location.href="/cc/loan/lnloinf/lnloinf-index.html?loNo="+loNo;
//                },2000);
                modal.find('[data-modal-ok]').attr('disabled',false);
                return;
            }
            modal.find('[data-modal-ok]').attr('disabled',false);
            app.alertError(data.errors.join('\n'));
        });
    });

    $('#a-calculate').getModal({
        size: 'modal-lg',
        title: '贷款计算器',
        body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
        showBefore: function (modal) {
            var athNo = $("#athNo").val();
            var jqxhr = app.$post(app.LNLOINFT_LOANCALC + athNo, {}, 'json');
            if (!jqxhr) {
                App.stopPageLoading();
                return;
            }
            jqxhr.done(function (data) {
                App.stopPageLoading();
                if(app.isOK(data)){
                    var tpl = Handlebars.compile(app.context.formHtml);
                    var html = tpl(data);
                    modal.find('.modal-body').html(html);
                }
            });
        },
        footer:'<button class="btn blue" data-dismiss="modal">确定</button>'
    }, function (modal) {
        modal.modal('hide');
    });

    $("#confirmY").click(function () {
        var checked = $("#organTable").find("[type='radio']:checked");
        var val = checked.val();
        var text = checked.parents("tr").find('.name').text();
        $("#organ").val(text);
        $("#organHidden").val(val);
    });
    $("#confirmUser").click(function () {
        var checked = $("#roleTable").find("[type='radio']:checked");
        var val = checked.val();
        var text = checked.parents("tr").find('.name').text();
        $("#role").val(text);
        $("#roleHidden").val(val);
    });
    $("#confirmMess").click(function () {
        var checked = $("#loanmTable").find("[type='radio']:checked");
        var val = checked.val();
        var text = checked.parents("tr").find('.name').text();
        $("#loanm").val(text);
        $("#loanmHidden").val(val);
    });

    $('#organModal').on('show.bs.modal',function () {
        $('#organTable').pagination({
            'first-store': app.firstStore
        });
    });
    $('#roleModal').on('show.bs.modal',function () {
        $('#roleTable').pagination({
            'first-store': app.firstStore
        });
    });
    $('#loanmModal').on('show.bs.modal',function () {
        $('#loanmTable').pagination({
            'first-store': app.firstStore
        });
    });


});

function returnList(){
	 window.location.href="lnloinft-index.html";
}