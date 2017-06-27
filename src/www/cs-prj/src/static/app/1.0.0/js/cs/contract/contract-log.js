/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
    $('#mainPage').pagination({
        "first-store": app.firstStore
    });

    +function ($, app) {
        var $ = window.jQuery;
        var app = window.app;
        app.registerTextHelper('opCd', app.opCdList, 'code', 'name');
        $('.acCd').selectloader({'opCdList': app.opCdList});

        /*导航*/
        var boxbg=$('#url-boxbg').html();
        var tp5 = Handlebars.compile(boxbg);
        $("#ul_div").html(tp5);
        var html=$("#ul_div").html();
        $("#ul_div").html(html.replace("aaa",app.request.loCoNo));

        //1.费用详情hanlebars
        app.context.formHtml = $('#form-template1').html();
        app.context.formInit = function (form) {
            /*   初始化弹窗里的下拉框   */
            form.find('[name="opCd"]').selectloader({'opCdList': app.opCdList});
            /*   初始化radio控件   */
            form.find('input').uniform();
        };

    }(window.jQuery, window.app);
});

/**
 * 查看详情
 */
$(document).on('click', '.detail', function () {
    $(this).each(function(){
        var opCd = $(this).data('opcd');
        var apTr = $(this).data('aptr');
        var loCoNo = $(this).data('locono');
        $(this).getModal({
            title: '查看费用信息',
            body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
            selector: true,
            showBefore: function (modal) {
                app.context.showBefore({
                    url: app.CONTRACT_LOG_MODEL,
                    modal: modal,
                    param: '?opCd='+opCd+'&apTr='+apTr+'&loCoNo='+loCoNo,
                    readOnly: true
                }, app,app.context.formInit);
            },
            showAfter: function(modal){
                modal.find('[name="feTyCd"]').selectloader({'feTyCdList': app.feTyCdList});
                modal.find('[name="amNaCd"]').selectloader({'amNaCdList': app.amNaCdList});
                modal.find('[name="amYn"]').selectloader({'amYnList': app.amYnList});
                modal.find('.crtDt').val( modal.find('[name="crtDt"]').val());

            },
            hideAfter: function (modal) {
                modal.setBody(app.context.formHtml);
            },
            footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'

        });
    });
});