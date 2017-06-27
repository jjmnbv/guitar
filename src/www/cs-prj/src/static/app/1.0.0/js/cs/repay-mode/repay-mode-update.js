$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        app.$getJSON(app.GET_REPAY_DATA_BY_ID + app.request.loPmId,function(data){
        if (app.isOK(data)) {
           var tpl = Handlebars.compile($('#main-cont-template').html());
           var html = tpl(data);
           $("#main-template").html(html);
           app.bindFormValidation($('#update-repay-form'));
           $(".percentFormat").each(function(){
        	     $(this).next("input[type=hidden]").val($(this).val());
             $(this).val(app.formatPercentBj($(this).val()));
           });

            /* 列表内容置灰 */
            $("#repayModeTable").find("select,input").attr("disabled",true);
        /*   //还款方式开始
           /!*新增一行*!/
           var repayTable = $("#repayModeAdd").tableWrapCurd({
           target: $("#repayTableBody"),
           template: $('#table-row1-template'),
           items: $('#repayTableBody').find('tr'),
           fn: function (el, index) {
            el.find("input").uniform();
            el.find("select").selectloader({'pmTyCd': app.pmTyCd});
            el.find("select").selectloader({'payComCd': app.payComCd});
           }
           });
           /!*删除一行*!/
           $('#repayModeDelete').getModal({
           text: '确定要删除该条记录吗？',
           size: 'modal-sm',
           footer:'<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
           selector: function () {
            return !!$('#repayModeDelete').parents('.portlet').find('[type=radio]:checked').length;
           }
           }, function () {
           	  var index = $('#repayModeDelete').parents('.portlet').find('[type=radio]:checked').data('id');
                repayTable.delete(index, function (item, i) {
                var index = i + 1;
                item.find('[data-id]').attr('data-id', i);
//              item.find('[data-index]').html(index);
                item.find('[name="paymentMethodList[' + index + '].perQt"]')
                    .attr('name', 'paymentMethodList[' + i + '].perQt')
                    .attr('id', 'paymentMethodList[' + i + '].perQt');
                item.find('[name="paymentMethodList[' + index + '].prnPe"]')
                    .attr('name', 'paymentMethodList[' + i + '].prnPe');
                item.find('[name="paymentMethodList[' + index + '].pmTyCd"]')
                    .attr('name', 'paymentMethodList[' + i + '].pmTyCd');
                item.find('[name="paymentMethodList[' + index + '].payComCd"]')
                    .attr('name', 'paymentMethodList[' + i + '].payComCd');
                
            });
           });*/

           //还款方式结束
           $('.pmCd').selectloader({'pmCd': app.pmCd});
	         $('.inCalPerCd').selectloader({'inCalPerCd': app.inCalPerCd});
	         $('.inCalBaCd').selectloader({'inCalBaCd': app.inCalBaCd});
	         $('.mlPrPeCd').selectloader({'mlPrPeCd': app.mlPrPeCd});
	         $('.pmTyCd').selectloader({'pmTyCd': app.pmTyCd});
	         $('.payComCd').selectloader({'payComCd': app.payComCd});
	         $('.perProYn').radioloader({'perProYnList': app.perProYnList});
            $('.perProYn').find('input').attr("disabled",true);

            /*利息计算基础置灰*/
            $('#inCalBaCd').attr("disabled",true);

            /*贷款时 首付比例置灰*/
            if($('#mlPrPeCd').find("option:selected").attr("value")=="DK"){
                $('#firstPayPer').attr("disabled",true);
            }
            /*自由还款时 支持期数置灰*/
            if($('#pmCd').find("option:selected").attr("value")=="ZYHK"){
                $('#perQt').attr("readonly",true);
            }
            /*判断放款本金比例类型*/
            $('body').on('change', '#mlPrPeCd', function(){
                if($(this).find("option:selected").text()=="贷款"){
                    $('#firstPayPer').val("0%");
                    $('input[name="firstPayPer"]').val("0");
                    $('#firstPayPer').parents("form").validate().element( $('#firstPayPer'));
                    $('#firstPayPer').attr("disabled",true);
                }else{
                    $('#firstPayPer').val("");
                    $('input[name="firstPayPer"]').val("");
                    $('#firstPayPer').attr("disabled",false);
                }
            });
            /* 不能增加*/
            $("#hiddenAdd").click(function(){
                var  errorMsg = " 暂不能增加新的内容！"
                $(this).getModal({
                    size: 'modal-sm',
                    errorMsg:errorMsg,
                    selector: function () {
                        return false;
                    }
                });
            });
            /*不能删除*/
            $("#hiddenDelete").click(function(){
                var
                        errorMsg = " 暂不能删除内容！"
                $(this).getModal({
                    size: 'modal-sm',
                    errorMsg:errorMsg,
                    selector: function () {
                        return false;
                    }
                });
            });
           return;
            }
            app.alertError(data.errors.join('\n'));
        });
        
        

    }(window.jQuery, window.app);
});


//级联关系隐藏
/*function changeCas(curObj){
    var textCon = $(curObj).find("option:selected").text();
    if(textCon=="本息不同间隔"){
        $('.prSpQt').removeClass("hide").prop("disabled",false);
        $('.inCalPerQt').addClass("hide").prop("disabled",true);
        setN($('.perProYn'));
    }else if(textCon=="气球贷") {
        $('.inCalPerQt').removeClass("hide").prop("disabled", false);
        $('.prSpQt').addClass("hide").prop("disabled", true);
        setY($('.perProYn'));
    }else if(textCon=='等额本息'||textCon=='等额本金'){
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled",true);
        setY($('.perProYn'));
    }else{
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled",true);
        setN($('.perProYn'));
    }
}*/
function changeCas(curObj){
    var textCon = $(curObj).find("option:selected").val();
    $("#inCalBaCd").find("option:selected").attr("selected",false);
    $("#inCalBaCd").attr("disabled",true);
    if(textCon=='DEBJ'||textCon=='DEBX') {
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled", true);
        setY($('.perProYn'));
        $("#inCalBaCd").find("option[value='SY']").prop("selected", true);
        $("#perQt").val("");
        $("#perQt").attr("readonly",false);
    } else if(textCon=='ZYHK'||textCon=='LSBQ'){
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled",true);
        setN($('.perProYn'));
        $("#inCalBaCd").find("option[value='SY']").prop("selected",true);
        $("#perQt").val("1");
        $("#perQt").attr("readonly",true);
        $("#repayTableBody").remove();

    }else{
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled",true);
        setN($('.perProYn'));
        $("#inCalBaCd").find("option[value='SY']").prop("selected",true);
        $("#perQt").val("");
        $("#perQt").attr("readonly",false);
    }
}



/*是否期供 级联*/
function setY(eleID){
    eleID.find('input').attr("disabled",false);
    eleID.find('input[value="N"]').prop("checked",false);
    eleID.find('input[value="Y"]').prop("checked",true);
    eleID.find('input[value="Y"]').trigger("click");
    eleID.find('input').attr("disabled",true);
}

function setN(eleID){
    eleID.find('input').attr("disabled",false);
    eleID.find('input[value="Y"]').prop("checked",false);
    eleID.find('input[value="N"]').prop("checked",true);
    eleID.find('input[value="N"]').trigger("click");
    eleID.find('input').attr("disabled",true);
}

/* 设置 增加一行按钮是否可用 */
function setAddB(){
    $("#hiddenAdd").css("display","none");
    $("#repayModeAdd").css("display","block");
}
function setHiddenAddB(){
    $("#hiddenAdd").css("display","block");
    $("#repayModeAdd").css("display","none");
}

//提交页面表单
$(function(){
	$(document).on('click', '#saveForm', function (event) {
        if ($('#update-repay-form').valid()) {
            $('#add-repay-form').find("input:disabled").css("background-color","#efefef");
            $('#add-repay-form').find("select:disabled").css("background-color","#efefef");
            $('#add-repay-form').find("select,input").attr("disabled",false);
            $('.perProYn').find('input').attr("disabled",false);
            submit(app.COMMIT_REPAY_MODE_UPDATE_DATA, $('#update-repay-form').serializeObject(),event.target);
        }
        return false;
});
});