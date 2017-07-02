$(function () {
    $(document).on('click', '#commit', function (event) {
        if ($('#details-form').valid()) {
            submit(app.UPDATE_PARTNER, $('#details-form').serializeObject(), event.target);
        }
        return false;
    });

    +function ($, app) {
        $.getJSON(app.FIND_BY_ID + app.request.cooNo, function (data) {
            if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#main-cont-template').html());
                var html = tpl(data);
                $("#main-cont").html(html);
                $('#provCd').selectloader({'provinceList': app.provinceList});
                $('#cooNatCd').selectloader({'industry': app.industry});
                $('#cooKiCd').selectloader({'classify': app.classify});
                $('#comiPuCd').selectloader({'finalType': app.finalType});
                $('#comiId').selectloader({'program': app.program});
                $('#acPaTyCd').selectloader({'accountIdType': app.accountIdType});
                $('#acUsCd').selectloader({'accountUse': app.accountUse});
                $('#acTyCd').selectloader({'accountTpye': app.accountTpye});
                $('#comiSetlDa').selectloader({'closeAccount': app.closeAccount});
                $('#brNo').selectloader({'cuBrsList': app.cuBrsList});
                $('.acCd').selectloader({'acCdList': app.acCdList});

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

                $(".bindEvent").each(function () {
                    $(this).next('input[type=hidden]').val($(this).val());
                    $(this).val(app.formatCurrencyM($(this).val()));
                });

                $('#cooNo').attr("readonly", true);


                /*机构级联经理*/
                if ($('#brNo').val()) {
                    $.getJSON(app.ORGANIZATION + $('#brNo').val(), function (data) {
                        if (app.isOK(data)) {
                            manager = data.content;
                            $('#cuMaUsId').selectloader({'manager': manager});
                            $('.bsdForm').find('[data-listener-select-target]').each(function () {
                                listenerSelectShow($(this));
                            });
                        }
                    });
                }
                $(document).on('change', '#brNo', function () {
                    $.getJSON(app.ORGANIZATION + $('#brNo option:selected').val(), function (data) {
                        if (app.isOK(data)) {
                            manager = data.content;
                            $('#cuMaUsId').selectloader({'manager': manager});
                            $('.bsdForm').find('[data-listener-select-target]').each(function () {
                                listenerSelectShow($(this));
                            });
                        }
                    });
                });
                /*end*/


                $(document).on('change', '#acPaTyCd', function () {
                    if (($('#acPaTyCd option:selected').val()) == "JR") {
                        $('#acPaNo').removeClass('isIDCard').addClass('isIdNUM');
                    } else if (($('#acPaTyCd option:selected').val()) == "SF") {
                        $('#acPaNo').removeClass('isIdNUM').addClass('isIDCard');
                    }
                });

                /*卡BIN级联*/
                $(document).on('blur', '#acNo', function () {
                    if ($(this).parents("form").validate().element($(this))) {
                        var card = $(this).val();
                        var cardbin = card.substring(0, 6);
                        $.getJSON(app.CARDBIN + "?cardBinNo=" + cardbin, function (data) {
                            if (app.isOK(data)) {
                                $('#acBankNo').val(data.openBankNo);
                                $('#acBankNa').val(data.openBankNa);
                            }
                        });
                    }
                });

                $("#details-form").validate({
                    rules: {
                        postNo: {
                            isZipCode: true
                        },
                        hzsMoNo: {
                            isMobilePhone: true
                        },
                        ywzgMoNo: {
                            isMobilePhone: true
                        },
                        ywdbrNo: {
                            isMobilePhone: true
                        },
                        fdMoNo: {
                            isMobilePhone: true
                        },
                        acNo: {
                            isBankCard: true
                        }
                    }
                });


                return;
            }
        });
    }(window.jQuery, window.app);


});