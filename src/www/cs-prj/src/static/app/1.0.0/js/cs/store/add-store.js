 + function ($,app) {
   app.bindFormValidation($('#details-form'));
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

    $('#commit').click(function(event){
        if($('#details-form').valid()){
            submit(app.ADD_STORE,$('#details-form').serializeObject(),event.target);
        }
        return false;
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

}(window.jQuery, window.app);

