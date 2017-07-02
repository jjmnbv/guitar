$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        
        $('.pmCd').selectloader({'pmCd': app.pmCd});
        $('.inCalPerCd').selectloader({'inCalPerCd': app.inCalPerCd});
        $('.inCalBaCd').selectloader({'inCalBaCd': app.inCalBaCd});
        $('.mlPrPeCd').selectloader({'mlPrPeCd': app.mlPrPeCd});
        $('.pmTyCd').selectloader({'pmTyCd': app.pmTyCd});
        $('.payComCd').selectloader({'payComCd': app.payComCd});
        $('.perProYn').radioloader({'perProYnList': app.perProYnList});
        $("input").uniform();
        /*判断放款本金比例类型*/
        $('body').on('change', '#principlePer', function(){
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

        /*判断还款方式种类 pmCd*/
   /*     $('body').on('change','#pmCd',function(){
            if($(this).find("option:selected").text()!="弹性还款") {
                setHiddenAddB();
                $("#repayTableBody").find("tr").remove();
            }else{
                setAddB();
            }
        });*/

        /* 未选择弹性还款 提示不能增加列表*/
    /*  $("#hiddenAdd").click(function(){
            var errorMsg;
            var row= $("#repayTableBody").find("tr");
            var rowLastVal=row.eq(row.length-1).find(".perQt").val();
            if($('.pmCd').find("option:selected").text()!="弹性还款") {
                errorMsg = " 选择“弹性还款”可添加内容！"
            }else if(rowLastVal==""){
                errorMsg =" 请在新增行填入正确的期数！"
            }else{
                errorMsg =" 不能增加新的输入组！"
            }
            $(this).getModal({
                size: 'modal-sm',
                errorMsg:errorMsg,
                selector: function () {
                    return false;
                }
            });
        });*/
        $("#hiddenAdd").click(function(){
            var
                errorMsg = " 暂不能增加新的内容！"
            $(this).getModal({
                size: 'modal-sm',
                errorMsg:errorMsg,
                selector: function () {
                    return false;
                }
            });
        });


        //还款方式开始
        /*新增一行*/
        $("#repayModeAdd").click(function(){
            var thisIndex = $('#repayTableBody').find("tr").length;
            /*判断新增加行校验通过，可添加新一行*/
            if(thisIndex>0){
                for(var i=0;i<thisIndex;i++){
                    var isperQt=$('#add-repay-form').validate().element(  $('#repayTableBody').find("tr").eq(i).find(".perQt"));
                    var isprnPe=$('#add-repay-form').validate().element(  $('#repayTableBody').find("tr").eq(i).find(".prnPe"));
                    var ispmTyCd=$('#add-repay-form').validate().element(  $('#repayTableBody').find("tr").eq(i).find(".pmTyCd "));
                    var ispayComCd=$('#add-repay-form').validate().element(  $('#repayTableBody').find("tr").eq(i).find(".payComCd "));
                    if(isperQt&&isprnPe&&ispmTyCd&&ispayComCd){
                        setAddB();
                    }
                    else{
                        setHiddenAddB();
                        return;
                    }
                }
            }
                var repayTable =$("#repayModeAdd").modelCurd({
                    target: $("#repayTableBody"),
                    template: $('#table-row1-template'),
                    index:thisIndex+1,
                    fn: function (el, index) {
                        el.find("input").uniform();
                        el.find("select").selectloader({'pmTyCd': app.pmTyCd});
                        el.find("select").selectloader({'payComCd': app.payComCd});
                        return;
                    }
                });
        });

        /* 判断支持期数 */
     /*   $('body').on('change','.perQt',function(){
            var totalPerQt =$("#perQt").val();
            var listPerQt=0;
            var row= $("#repayTableBody").find("tr");
            for(var i=0;i<row.length;i++){
                var  rowPerQt=row.eq(i).find(".perQt").val();
                listPerQt=parseInt(listPerQt)+parseInt(rowPerQt);
            }
            if(totalPerQt!=""){
                if(listPerQt>totalPerQt){
                    app.alertError("输入的期数超过总期数！");
                    $(this).val("");
                }  if(listPerQt==totalPerQt){
                    setHiddenAddB();
                    app.alertOK("输入的期数已达上限！");
                } else{
                    setAddB();
                }
            }else{
                app.alertError("请先输入支持期数");
                $(this).val("");
                setHiddenAddB();
            }
        });
*/
        /*删除一行*/
       $('#repayModeDelete').getModal({
        text: '确定要删除该条记录吗？',
        size: 'modal-sm',
        footer:'<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
        selector: function () {
            return !!$('#repayModeDelete').parents('.portlet').find('[type=radio]:checked').length;
        }
    }, function () {
           $('#repayModeDelete').parents('.portlet').find('[type=radio]:checked').parents("tr").remove();
           if($('#repayModeDelete').parents('.portlet').find("tr").length>1){
               for(var i=0;i<$('#repayModeDelete').parents('.portlet').find("tr").length;i++){
                   var row= $('#repayModeDelete').parents('.portlet').find("tr").eq(i+1);
                   row.find('[data-id]').attr('data-id', i);
                   row.find('.perQt')//期数
                           .attr('name', 'paymentMethodList[' + i + '].perQt');
                   row.find('.perQt')//期数
                           .attr('id', 'paymentMethodList[' + i + '].perQt');
                   row.find('.prnPeH')//本金比例
                           .attr('name', 'paymentMethodList[' + i + '].prnPe');
                   row.find('.prnPe')//本金比例
                           .attr('id', 'paymentMethodList[' + i + '].prnPe');
                   row.find('.pmTyCd')//还款种类
                           .attr('name', 'paymentMethodList[' + i + '].pmTyCd');
                   row.find('.pmTyCd')
                           .attr('id', 'paymentMethodList[' + i + '].pmTyCd');
                   row.find('.payComCd')//还款组成
                           .attr('name', 'paymentMethodList[' + i + '].payComCd');
                   row.find('.payComCd')//还款组成
                           .attr('id', 'paymentMethodList[' + i + '].payComCd');
               }
           }else{
               return;
           }
    });
    //还款方式结束
        
    }(window.jQuery, window.app);
});


//提交页面表单
$(function(){
	app.bindFormValidation($('#add-repay-form'));
	$('#saveForm').click(function (event) {
        if ($('#add-repay-form').valid()) {
            $('#add-repay-form').find("input:disabled").css("background-color","#efefef");
            $('#add-repay-form').find("select:disabled").css("background-color","#efefef");
            $('#add-repay-form').find("select,input").attr("disabled",false);
            console.log($('#add-repay-form').serializeObject());
            submit(app.COMMIT_REPAY_MODE_ADD_DATA, $('#add-repay-form').serializeObject(), event.target);
        }
        return false;
});
});

//级联关系隐藏
/*function changeCas(curObj){
    var textCon = $(curObj).find("option:selected").text();
/!*    $("#inCalBaCd").find("option:selected").attr("selected",false);*!/
    /!*$("#inCalBaCd").attr("disabled",true);*!/
    if(textCon=="本息不同间隔"){
        $('.prSpQt').removeClass("hide").prop("disabled",false);
        $('.inCalPerQt').addClass("hide").prop("disabled",true);
        setN($('.perProYn'));
    }else if(textCon=="气球贷") {
        $("#inCalBaCd").find("option[value='SY']").attr("selected",true);
        $("#inCalBaCd").find("option[value='SY']").trigger("click");
        $('.inCalPerQt').removeClass("hide").prop("disabled", false);
        $('.prSpQt').addClass("hide").prop("disabled", true);
        setY($('.perProYn'));
    }else if(textCon=='等额本息'||textCon=='等额本金'){
        $("#inCalBaCd").find("option[value='FK']").attr("selected",true);
        $("#inCalBaCd").find("option[value='FK']").trigger("click");
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled",true);
        setY($('.perProYn'));
    }else{
        $("#inCalBaCd").find("option[value='SY']").attr("selected",true);
        $("#inCalBaCd").find("option[value='SY']").trigger("click");
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
         $("#perQt").parents("form").validate().element($("#perQt"));
          $("#perQt").attr("readonly",true);
    }else{
        $('.inCalPerQt,.prSpQt').addClass("hide").prop("disabled",true);
        setN($('.perProYn'));
         $("#inCalBaCd").find("option[value='SY']").prop("selected",true);
         $("#perQt").val("");
         $("#perQt").attr("readonly",false);
    }
    $("#inCalBaCd").parents("form").validate().element($("#inCalBaCd"));
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