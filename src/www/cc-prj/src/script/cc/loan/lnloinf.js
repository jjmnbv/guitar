+function($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        dt: {
            text: '主页',
            url: '#'
        },
        dd: [
            {
                text: '放款成功',
                url: '#'
            }
        ]
    };

} (window.jQuery, window.app);
$(function () {
    var loNo = GetQueryString("loNo");
    $("#loNo-sch").val(loNo);
    $("#loNo-acc").val(loNo);
    $("#loNo-ldg").val(loNo);
    $("#loNo-setlac").val(loNo);
    $("#loNo-lnfeeinf").val(loNo);
    $("#loNo-lnfeesch").val(loNo);
    $("#loNo-rplog").val(loNo);
    $("#loNo-acinf").val(loNo);

    var initedTab = [];
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var targetPane = $(e.target).attr('href');
        if($.inArray(targetPane, initedTab)==-1){
            initedTab.push(targetPane);
            if($(targetPane).find('.pagination-container').size()) {
                $(targetPane).pagination({
                    "first-store": app.firstStore
                });
            }
            dataJson(app.LNLOINF_ENTBRF + "?loNo=" + loNo, $('#lnactentl-list-template').html(), $('#dealRecord') );
        }
    })
    /**
     * 去后台获取值
     */
    app.$getJSON(app.LNLOINF_VIEW+"/"+loNo).done(function(data) {
        if(app.isOK(data)){
            $('#lnloinf-form').deserializeObject(data);
            $("[name='exRt1']").val(app.formatPercent($("[name='exRt']").val()*100));
            $("[name='baRt1']").val(app.formatPercent($("[name='baRt']").val()*100));
            $("[name='rtAd1']").val(app.formatPercent($("[name='rtAd']").val()*100));
            $("[name='rtPe1']").val(app.formatPercent($("[name='rtPe']").val()*100));
            $("[name='ovPe1']").val(app.formatPercent($("[name='ovPe']").val()*100));
            $("[name='ovRt1']").val(app.formatPercent($("[name='ovRt']").val()*100));
            $("[name='loPrAmt1']").val(app.formatCurrencyM($("[name='loPrAmt']").val()));
            $("[name='loPrSa1']").val(app.formatCurrencyM($("[name='loPrSa']").val()));
            $("[name='loPrAmtUp']").val(app.numToCny($("[name='loPrAmt']").val()));

            var ratmodvalue=data.ratMod;	//浮动类型
            var rtChgTyp = data.rtChgTyp;	//调整方式
            if(ratmodvalue=='FD'){
                $('.rate-hide').show();
                if(rtChgTyp=='LJ'){
                    $('.nextchgdt-hide').hide();
                }else if(rtChgTyp=='GD'){
                    $('.nextchgdt-hide').show();
                    $('.fxchg-hide').show();
                }else{
                    $('.nextchgdt-hide').show();
                    $('.fxchg-hide').hide();
                }
            }else{
                $('.rate-hide').hide();
            }
            //字典只读
            $('#cuCertTyp,#loPayTyp,#loPlTyp,#payTyp,#curTyp,#loSts,#dbSts,#perProInd,#inCalPerCd,#odInd,#clnInd,#ratMod,#rtChgTyp,#selOutInd,#wrtInd,#offInd,#loGrcTyp,#ratTyp,#loTyp,#devInd,#loAcCd').attr('disabled',true);
            $('select').selectpicker('refresh');
        }
    });

    $('#confirmQuery').click(function () {
        var url = $('#form-entbrf').attr('action');
        var data = $('#form-entbrf').serialize();
        dataJson(url+'?'+data, $('#lnactentl-list-template').html(), $('#dealRecord') );
        $('.protlet-ri').hide();
    });

    $('.protlet-ri').hide();

    $('#reset').click(function () {
        $("[name='acDt']").val('');
        $("[name='trCd']").val('');
        $('select').selectpicker('refresh');
    });

});
function dataJson(url, template, container) {
    app.$getJSON(url).done(function (res) {
        if(app.isOK(res)){
            var tpl = Handlebars.compile(template);
            var html = tpl(res);
            container.html(html);
            $('.list-group').delegate('.td-record','click',function () {
                $('.list-group a').removeClass('td-record');
                var buzSeqNo = $(this).data('no');
                $('.protlet-ri').show();
                app.$getJSON(app.LNLOINF_ENTLIST + "?buzSeqNo=" + buzSeqNo).done(function (res) {
                    if(app.isOK(res)){
                        $('.list-group a').addClass('td-record');
                        var tpl = Handlebars.compile($('#lnactentl-page-template').html());
                        var html = tpl(res);
                        $('#dealChannel').html(html);

                        var tpl2 = Handlebars.compile($('#lnactentl-mess-template').html());
                        var html2 = tpl2(res.content[0]);
                        $('#dealMess').html(html2);
                    }else{
                        alertError(data.errors.join(','));
                        $('.list-group a').addClass('td-record');
                    }

                });
            })
        }
    });
}


