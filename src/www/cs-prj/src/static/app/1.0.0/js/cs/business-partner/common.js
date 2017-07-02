$(function () {
    var manager;

    listenerSelectShow = function (elem) {
        elem.parents("div").delegate(elem.data('listenerSelectTarget'), 'change', function () {
            $(this).find("option:selected").each(function () {
                elem.val($(this).data('options')[elem.data('listenerKey')]);
            });
        });
    };

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
    $('#comiPuCd').selectloader({'finalType': app.finalType});
    $('#comiId').selectloader({'program': app.program});
    $('#acPaTyCd').selectloader({'accountIdType': app.accountIdType});
    $('#acUsCd').selectloader({'accountUse': app.accountUse});
    $('#acTyCd').selectloader({'accountTpye': app.accountTpye});
    $('#comiSetlDa').selectloader({'closeAccount': app.closeAccount});
    $('#brNo').selectloader({'cuBrsList': app.cuBrsList});

    validate_form_time();

    /*机构级联经理*/
    $('#brNo').change(function () {
        if ($('#brNo option:selected').val() != "") {
            $.getJSON(app.ORGANIZATION + $('#brNo option:selected').val(), function (data) {
                if (app.isOK(data)) {
                    manager = data.content;
                    $('#cuMaUsId').selectloader({'manager': manager});

                    $('.bsdForm').find('[data-listener-select-target]').each(function () {
                        listenerSelectShow($(this));
                    });


                }
            });
        }
    });
    /*end*/


    $('#acPaTyCd').change(function () {
        if (($('#acPaTyCd option:selected').val()) == "JR") {
            $('#acPaNo').removeClass('isIDCard').addClass('isIdNUM');
        } else if (($('#acPaTyCd option:selected').val()) == "SF") {
            $('#acPaNo').removeClass('isIdNUM').addClass('isIDCard');
        } else {
            $('#acPaNo').removeClass('isIdNUM,isIDCard');
        }
    });

    $("#details-form").validate({
        rules: {
            postNo: {
                isZipCode: true
            },
            hzsMoNo: {
                telNumber: true
            },
            ywzgMoNo: {
                telNumber: true
            },
            ywdbrNo: {
                telNumber: true
            },
            fdMoNo: {
                telNumber: true
            },
            acNo: {
                isBankCard: true
            }
        }
    });

    +function ($, app) {
        /**
         * 初始化列表数据
         */
        $('#infoListModal').pagination({
            "first-store": app.firstStore
        });
    }(window.jQuery, window.app);
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        $('#managerListModal').pagination({
            "first-store": app.firstStore
        });
    }(window.jQuery, window.app);

    +function ($, app) {
        $("#confirm").click(function () {
            var checked = $("#infoTable").find("[type='radio']:checked");
            var val = checked.val();
            var text = checked.parents("td").next().text();
            $("#agence").val(text);
            $("#agenceHidden").val(val);
        });
        $("#confirmOk").click(function () {
            var checked = $("#managerTable").find("[type='radio']:checked");
            var val = checked.val();
            var text = checked.parents("td").next().text();
            $("#custManager").val(text);
            $("#custManagerHidden").val(val);
        });
    }(window.jQuery, window.app);

});

