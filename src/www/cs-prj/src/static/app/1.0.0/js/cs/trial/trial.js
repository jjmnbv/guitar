/**
 * Created by lina on 2017/3/7.
 */
$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */

        $('#cooNo').selectloader({'csCooCuBList': app.csCooCuBList});
        $('#loTyId').selectloader({'product': app.product});

        $('#cooNo').change(function () {
            $.getJSON(app.LOAD_PRODUCT + '?cooNo=' + $('#cooNo option:selected').val(), function (data) {
                product = data;
                $('#loTyId').selectloader({'product': product});

            });
        });
        $('#loTyId').change(function () {
            console.log($('#loTyId option:selected'));
            $.getJSON(app.LOAD_MATURITY + '?loTyId=' + $('#loTyId option:selected').val(), function (data) {
                maturity = data;
                $('#plOp').selectloader({'maturity': maturity});
            });
        });
        $('#plOp').change(function () {
            console.log($('#loTyId option:selected').val());
            console.log($('#plOp option:selected').val());
            $.getJSON(app.REPAYMENT_WAY + '?plOp=' + $('#plOp option:selected').val() + '&loTyId=' + $('#loTyId option:selected').val() , function (data) {
                repaymentWay = data;
                $('#pmId').selectloader({'repaymentWay': repaymentWay});

            });
        });

        $('#trialBtn').click(function(){
            if($('#trial-form').valid()){
                app.loadData();
            }
        });
        //本金金额还显示
        $("#prAm").val("");

        $('#trial-form').validate();



    }(window.jQuery, window.app);


});