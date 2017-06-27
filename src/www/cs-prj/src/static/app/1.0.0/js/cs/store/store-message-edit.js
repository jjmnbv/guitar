 + function($,app){
    /* lh 选择校验类型，校验 JR SF*/
    $('#acPaTyCd').change(function(){
        if($(this).val()=="JR"){
            $("#acPaNo").removeClass("isIDCard");
            $("#acPaNo").addClass("isIdNUM");
        }else if($(this).val()=="SF"){
            $("#acPaNo").removeClass("isIdNUM");
            $("#acPaNo").addClass("isIDCard");
        }
    });

    $.getJSON(app.STORE_DETAILS + app.request.cooNo, function (data) {
        if (app.isOK(data)) {
            var tpl = Handlebars.compile($('#edit-mainCont-template').html());
            var html = tpl(data);
            $("#edit-mianCont").html(html);

            $('#provCd').selectloader({'provinceList': app.provinceList});
            $('#cooNatCd').selectloader({'industry': app.industry});
            $('#cooKiCd').selectloader({'classify': app.classify});
            $('#acPaTyCd').selectloader({'accountIdType': app.accountIdType});
            $('.user-flag').radioloader({'userFlag': app.userFlag});
            $('#acUsCd').selectloader({'accountUse': app.accountUse});
            $('#acTyCd').selectloader({'accountTpye': app.accountTpye});
            $('#acCd').selectloader({'acCdList': app.acCdList});

            $('input[name="brNa"]').attr("readonly",true);
            $('input[name="cuMaNa"]').attr("readonly",true);
            $('#details-form input[name="cooNo"]').attr("readonly",true);




            $('.date-picker-page').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: !0,
                format: "yyyy-mm-dd",
                'start-date': "+0d",
                language: 'zh-CN'
            }).on('hide', function (e) {
                $(this).parents("form").validate().element($(this).parent().find("input"));
            });

            $(document).on('change', '#acPaTyCd', function () {
                if(($('#acPaTyCd option:selected').val())=="JR"){
                    $('#acPaNo').removeClass('isIDCard').addClass('isIdNUM');
                }else if(($('#acPaTyCd option:selected').val())=="SF"){
                    $('#acPaNo').removeClass('isIdNUM').addClass('isIDCard');
                }
            });

            /*卡BIN级联*/
            $(document).on('blur', '#acNo', function () {
                if($(this).parents("form").validate().element($(this))){
                    var card= $(this).val();
                    var cardbin = card.substring(0,6);
                    $.getJSON(app.CARDBIN +"?cardBinNo=" + cardbin, function (data) {
                        if (app.isOK(data)) {
                            $('#acBankNo').val(data.openBankNo);
                            $('#acBankNa').val(data.openBankNa);
                        }
                    });
                }
            });
            
            app.bindFormValidation($('#details-form'));
            $("#details-form").validate({
                rules:{
                    hzsTelNo:{
                        telNumber:true
                    },
                    hzsMoNo:{
                        isMobilePhone:true
                    },
                    acPaNo:{
                        isIDCard:true
                    },
                    acNo:{
                        isBankCard:true
                    }
                }
            });


            return;
        }
        app.alertError(data.errors.join('\n'));
    });

    $(document).on('click', '#commit', function (event) {
        if($('#details-form').valid()){
            submit(app.UPDATA_STORE,$('#details-form').serializeObject(),event.target);
        }
        return false;
    });

}(window.jQuery, window.app);
