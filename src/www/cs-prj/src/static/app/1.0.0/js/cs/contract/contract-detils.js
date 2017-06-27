$(function () {
    +function ($, app) {
        var $ = window.jQuery;
        var app = window.app;
        
//      合同账户select翻译文字展示列表
        app.registerTextHelper('acTyCd', app.acTyCdList, 'code', 'name');
        app.registerTextHelper('acCd', app.acCdList, 'code', 'name');
        app.registerTextHelper('acUsCd', app.acUsCdList, 'code', 'name');
//      还款方式select翻译文字展示列表
        app.registerTextHelper('pmCd', app.pmCdList, 'code', 'name');
        app.registerTextHelper('inCalPerCd', app.inCalPerCdList, 'code', 'name');
        
        /**
         * 初始化列表数据
         */
        app.context.formHtml1 = $('#form-template1').html();
        app.context.formInit1 = function (form) {
            /*   初始化弹窗里的下拉框   */
            form.find('[name="feTyCd"]').selectloader({'feTyCdList': app.feTyCdList});
            form.find('[name="fePayTyCd"]').selectloader({'fePayTyCdList': app.fePayTyCdList});
            form.find('.totFeYn').radioloader({'totFeYnList': app.totFeYnList});
            form.find('[name="feeCalCd"]').selectloader({'feeCalCdList': app.feeCalCdList});
            form.find('[name="payFrCd"]').selectloader({'payFrCdList': app.payFrCdList});

            /*   初始化radio控件   */
            form.find('input').uniform();
        };
        //2.还款方式详情hanlebars
        app.context.formHtml2 = $('#form-template2').html();
        app.context.formInit2 = function (form) {
            /*   初始化弹窗里的下拉框   */
            form.find('.pmTyCd').selectloader({'pmTyCdList': app.pmTyCdList});
            form.find('[name="pmCd"]').selectloader({'pmCdList': app.pmCdList});
            form.find('[name="inCalPerCd"]').selectloader({'inCalPerCdList': app.inCalPerCdList});
            form.find('.perProYn').radioloader({'perProYnList': app.perProYnList});
            form.find('.payComCd').selectloader({'payComCdList': app.payComCdList});
            form.find('.inCalBaCd').selectloader({'inCalBaCdList': app.inCalBaCdList});
            /*   初始化radio控件   */
            form.find('input').uniform();
        };

        var test = function (currVeParam) { app.$getJSON(app.CONTRACT_DETILES+app.request.loCoNo,function(data){
            if (app.isOK(data)) {
                /*导航*/
                var tp5 = Handlebars.compile($('#url-boxbg').html());
                var html = tp5(data);
                $("#ul_div").html(html);

                /*页面主体*/
                var tpl = Handlebars.compile($('#main-cont-template').html());
                var html = tpl(data);
                $("#main-template").html(html);
                /*下拉框list*/
                $('.inCalPerCd').selectloader({'inCalPerCdList':  app.inCalPerCdList});
                app.registerTextHelper('inCalPerCd', app.inCalPerCdList, 'code', 'name');
                $('.acCd').selectloader({'acCdList': app.acCdList});
                $('.loKiCd').selectloader({'loKiCdList':  app.loKiCdList});
                $('.loMlCd').selectloader({'loMlCdList':  app.loMlCdList});
                $('.st').selectloader({'stList':  app.stList});
                $('.acTyCd').selectloader({'acTyCdList':  app.acTyCdList});
                $('.acUsCd').selectloader({'acUsCdList':  app.acUsCdList});
                $('.pmCd').selectloader({'pmCdList':  app.pmCdList});
                $("#detail-proSet-form").deserializeObject(data);
                //失去焦点校验
                app.bindFormValidation($('#detail-proSet-form'));

                $(".bindEvent").each(function(){
                    $(this).next("input[type=hidden]").val($(this).val());
                    $(this).val(app.formatCurrencyM($(this).val()));
                });

                $(".percentFormat").each(function(){
                    if($(this).val()){
                        $(this).next("input[type=hidden]").val($(this).val());
                        $(this).val(app.formatPercentBj($(this).val()));
                    }
                });
                td_select_more($("#csLoAcNoBList_select tr"));
                td_select_more($("#csLoPmB_select tr"));

                $("input,select").attr("disabled",true);
            }else{
                app.alertError(data.errors.join('\n'));
            }
        })
        };

        test(app.request.currVe);

    }(window.jQuery, window.app);
});


/**
 * 查看详情
 */
$(document).on('click', '.detail', function () {
    $(this).each(function(){
        var loCoNo = $(this).data('locono');
        var suId = $(this).data('suid');
        $(this).getModal({
            title: '费用信息',
            body: app.context.formHtml1, /* 获取form的html模板，并填充到模态框中 */
            selector: true,
            showBefore: function (modal) {
                app.context.showBefore({
                    url: app.CONTRACT_DETILES_MODEL_ONE,
                    modal: modal,
                    param: '?loCoNo='+loCoNo+'&suId='+suId,
                    readOnly: true
                }, app,app.context.formInit1);
            },
            showAfter: function(modal){
                modal.find('[name="feTyCd"]').selectloader({'feTyCdList': app.feTyCdList});
                modal.find('[name="amNaCd"]').selectloader({'amNaCdList': app.amNaCdList});
                modal.find('[name="amYn"]').selectloader({'amYnList': app.amYnList});
                if(modal.find('[name="feDa"]').val()==""){
                    modal.find('[name="feDa"]').val("--");
                }
                if(modal.find('[name="fePuCd"]').val()==""){
                    modal.find('[name="fePuCd"]').val("--");
                }
                if(modal.find('[name="feFreQt"]').val()==""){
                    modal.find('[name="feFreQt"]').val("--");
                }
            },
            hideAfter: function (modal) {
                modal.setBody(app.context.formHtml1);
            },
            footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'

        });
    });
});

$(document).on('click', '.repayment-method', function () {
    $(this).each(function(){
        var code = $(this).data('code');
        $(this).getModal({
            title: '还款方式',
            body: app.context.formHtml2, /* 获取form的html模板，并填充到模态框中 */
            selector: true,
            showBefore: function (modal) {
                app.context.showBefore({
                    url: app.CONTRACT_DETILES_MODEL_TWO,
                    modal: modal,
                    param: code,
                    readOnly: true
                }, app,app.context.formInit2);
            },
            showAfter: function(modal){
          /*   modal.find('[name="amYn"]').selectloader({'amYnList': app.amYnList});*/
                if(modal.find('.prSpQt').val()==""){
                    modal.find('.prSpQt').val("--");
                }
            },
            hideAfter: function (modal) {
                modal.setBody(app.context.formHtml2);
            },
            footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'

        });
    });
});

function td_select_more(id) {/*id表示需处理的tabel 的所有tr*/
    $(this).find("select").css("display", "none");
    id.each(function () {
        $(this).find("td").each(function () {
            $(this).find("select").css("display", "none");
            var select_ed = $(this).find("select option:selected").attr("data-text-val");
            $(this).find("select").parent().html(select_ed);
        });
    });
};