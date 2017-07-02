$(function () {

    var $ = window.jQuery;
    var app = window.app;
    app.registerTextHelper('st', app.stList, 'code', 'name');

    function validate_form_time() {
        $(".validate-time").each(function () {
            var $this = $(this);
            var $thisform = $(this).parents("form");
            $('.date-picker-page').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: !0,
                format: "yyyy-mm-dd",
                'start-date': "+0d",
                language: 'zh-CN'
            }).on('hide', function (e) {
                $thisform.validate().element($this);
            });

        });
    }


    $('#provCd').selectloader({'provinceList': app.provinceList});
    $('#cooNatCd').selectloader({'industry': app.industry});
    $('#cooKiCd').selectloader({'classify': app.classify});
    $('#acPaTyCd').selectloader({'accountIdType': app.accountIdType});
    $('.user-flag').radioloader({'userFlag': app.userFlag});

    $('input[name="brNa"]').attr("readonly", true);
    $('input[name="cuMaNa"]').attr("readonly", true);

    validate_form_time();

    $('#acPaTyCd').change(function () {
        if (($('#acPaTyCd option:selected').val()) == "JR") {
            $('#acPaNo').removeClass('isIDCard').addClass('isIdNUM');
        } else if (($('#acPaTyCd option:selected').val()) == "SF") {
            $('#acPaNo').removeClass('isIdNUM').addClass('isIDCard');
        }
    });

    $("#details-form").validate({
        rules: {
            hzsTelNo: {
                telNumber: true
            },
            hzsMoNo: {
                isMobilePhone: true
            },
            acNo: {
                isBankCard: true
            }
        }
    });

    /*    +function ($, app) {
     /!**
     * 初始化列表数据
     *!/
     $('#infoListModal').pagination({
     "first-store":app.firstStore
     });
     }(window.jQuery, window.app);*/

    +function ($, app) {
        /**
         * 初始化列表数据
         */
        $('#managerListModal').pagination({
            "first-store": app.firstStore
        });
    }(window.jQuery, window.app);
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        $('#partnerListModal').pagination({
            "first-store": app.firstStore
        });
    }(window.jQuery, window.app);

    +function ($, app) {
        $("#confirmY").click(function () {
            var checked = $("#partnerTable").find("[type='radio']:checked");
            var val = checked.val();
            var text = checked.parents("td").next().text();
            $("#partner").val(text);
            $("#partnerHidden").val(val);

            var brno = checked.parents("td").find(".brNo").val();
            $('input[name="brNo"]').val(brno);
            var brna = checked.parents("td").find(".brNa").val();
            $('input[name="brNa"]').val(brna);
            var cumaNa = checked.parents("td").find(".cuMaNa").val();
            $('input[name="cuMaNa"]').val(cumaNa);
            var cuMaUsId = checked.parents("td").find(".cuMaUsId").val();
            $('input[name="cuMaUsId"]').val(cuMaUsId);
            var loginNa = checked.parents("td").find(".cuMaLoginNa").val();
            $('input[name="cuMaLoginNa"]').val(loginNa);


            $('#details-form').validate().element('#partner');
            $('#details-form').validate().element('[name="brNa"]');
            $('#details-form').validate().element('[name="cuMaNa"]');

//          账户信息渲染
            var cooNoVal = checked.parents("td").find(".cooNo").val();

            app.$getJSON(app.GET_STORE_ACCOUNT_BY_COONO + cooNoVal, function (data) {
                console.log(data);
                if (app.isOK(data)) {
                    var tpl = Handlebars.compile($('#csCorpAcNoBList-template').html());
                    var html = tpl(data);
                    $("#csCorpAcNoBList-content").html(html);
                    $("#acPaTyCd").selectloader({'accountIdType': app.accountIdType});
                    $('#acUsCd').selectloader({'accountUse': app.accountUse});
                    $('#acTyCd').selectloader({'accountTpye': app.accountTpye});
                    $('#acCd').selectloader({'acCdList': app.acCdList});
                }
            });

        });
    }(window.jQuery, window.app);


});


