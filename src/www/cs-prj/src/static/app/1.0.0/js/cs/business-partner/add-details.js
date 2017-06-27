$(function () {

    $('.acCd').selectloader({'acCdList': app.acCdList});

    app.bindFormValidation($('#details-form'));
    $('#commit').click(function (event) {
        if ($('#details-form').valid()) {
            submit(app.ADD_PARTNER, $('#details-form').serializeObject(), event.target);
        }
        return false;
    });

    /*卡BIN级联*/
    $('#acNo').blur(function () {
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


});
