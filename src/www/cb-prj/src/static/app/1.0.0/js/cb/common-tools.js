/**
 * Created by Administrator on 2017/1/11.
 */
    /*table 里面的下拉框样式设置*/
    function td_select(id) {/*id表示需处理的tabel 的所有tr*/
        $("tr td select").css("display", "none");
        id.each(function () {
            $(this).find("select").css("display", "none");
            var select_ed = $(this).find("select option:selected").attr("data-text-val");
            $(this).find("select").parent().html(select_ed);
        });
    };

    function td_select_more(id) {/*id表示需处理的tabel 的所有tr*/
        $(this).find("select").css("display", "none");
        id.each(function () {
            $(this).find("td").each(function () {
                $(this).find("select").css("display", "none");
                var select_ed = $(this).find("select option:selected").attr("data-text-val");
                $(this).find("select").parent().html(select_ed);
            });
        });
    };


    /**3.贷款信息页面
     * 根据贷款用途判断，是其他就显示 其他输入框
     * 根据贷款类型判断，如果是耐用品消费分期，则显示购买商品信息列表
     * */
    function isQTNY(data) {
        var loanKindCode = data.loanKindCode;
        var loanUseCode = data.loanUseCode;
        if (loanUseCode != "QT") {
            $("#div_loanUseExplain").css("display", "none");
        }
        if (loanKindCode != "NY") {
            $("#good-list-isshow").css("display", "none");
            $('[name="applySub.goodsBuyAmount"]').parents('.form-group').hide();
        }else {
            $( "#firstPayAmount,#applayAmount,#goodsBuyAmount,.goodsToTalPrice").attr("disabled","disabled");
        }
    }


    /*页面 输入框等置灰*/
    function setReadonly() {
        $(" select,textarea").attr("disabled", true);
        $(".bootstrap-select button,textarea").css("background-color", "#efefef");
        $(".selBox").find("button").attr("disabled", true);
        $("input").attr("disabled", "disabled");
        $("input").css("background-color", "#efefef");
        $(".address").css("background-color", "#efefef");

    }

    /*贷款用途为其他时用途说明必填*/
    function loanUseCode_QT(target){
        $(document).on('change',target,function () {
            var selectVal = $(this).val();
            if (selectVal == "QT") {
                $("[name='loanUseExplain']").parents('.form-group').show();
                $("[name='loanUseExplain']").addClass('required');
                $("[name='loanUseExplain']").val("");
            } else {
                $("[name='loanUseExplain']").val("");
                $("[name='loanUseExplain']").parents('.form-group').hide();
                $("[name='loanUseExplain']").removeClass('required');
            }
        })
    }

    /**
     * 列表行号
     */
    +function (handlebars) {
        handlebars.registerHelper('list-rowindex', function (options) {
            var index = options.data.index,
                page = options.data.root.page;
            return 1 + index;
        });
    }(Handlebars);

    /*tab切换*/
    function tabChange() {
        $('[data-tab]').each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                var activeBox = $('#peopleVar').find('.active');
                var hightLing = $('#peopleVar').find('.hight-linght');
                activeBox.removeClass('active');
                hightLing.removeClass('hight-linght');
                $(activeBox.data('tab')).hide();
                $(this).addClass('active');
                $(this).parents('li').addClass('hight-linght');
                $($(this).data('tab')).siblings().hide();
                $($(this).data('tab')).show();
                var liLength = $(".tab-box li").length;
                var nextpeople = $('.hight-linght').index() + 1;
                if (nextpeople >= liLength) {
                    $('#next-applicant').css('display', "none");
                } else {
                    $('#next-applicant').css('display', "block");
                }
            });
        });
    }

    function dateTime() {
        $('.date-picker-page').datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        autoclose: !0,
        format: "yyyy-mm-dd",
        'start-date': "+0d",
        language: 'zh-CN'
    });
    }

    /*时间输入框校验*/
    function validate_form_time() {
            $('.date-picker-page').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: !0,
                format: "yyyy-mm-dd",
                'start-date': "+0d",
                language: 'zh-CN'
            }).on('hide', function (e) {
                $(this).parents("form").validate().element($(this).parents(".validate-time").find("input"));
            });
    }

    /*下一申请人*/
    function nextPeople() {
        $(document).on("click", "#next-applicant", function () {
            var liLength = $(".tab-box li").length;
            var activeBox = $('#peopleVar').find('.active');
            var hightLing = $('#peopleVar').find('.hight-linght');
            activeBox.removeClass('active');
            hightLing.removeClass('hight-linght');
            $(activeBox.data('tab')).hide();
            $(hightLing).next().addClass('hight-linght');
            $(hightLing).next().find("a").addClass('active');
            $($(hightLing).next().find("a").data('tab')).show();
            var nextpeople = $(hightLing).next().index() + 1;
            if (nextpeople >= liLength) {
                $('#next-applicant').css('display', "none");
            }
        })
    }

    /*只有一个申请人时，下一申请人按钮隐藏*/
    function isOneTab() {
        var li_length = $(".tab-box").find("ul li").length;
        if (li_length <= 1) {
            $("#next-applicant").css("display", "none");
        } else {
            return false;
        }
    }
    /*自定义保存表单方法*/
    function save(url, param, obj) {
        app.$post(url, param).done(function (data) {
            if (app.isOK(data)) {
                var urlPage = $(obj).parents('form').data('link');
                if(urlPage){
                    setTimeout(function(){window.location.href=urlPage},3000);
                }else{
                    return;
                }
            }
        });
    };

var identShow=0;
    /* 根据身份证回显*/
    function fromIDsetBir(){
        identShow=1;
        var isidCard,idCard,birthId,sexId,proviceId,cityId, addressId,addressInput,addressSelect;
        $(document).on('keyup','.papersNo',function(){
            var fatherDiv=$(this).parents(".portlet-body");
            isidCard =fatherDiv.find('.peopleList option:selected').val();
            idCard=fatherDiv.find(".papersNo").val();
            birthId=fatherDiv.find(".birthdayDate");
            sexId=fatherDiv.find(".sexBox");
            addressSelect=fatherDiv.find(".addressSelect");
            proviceId=fatherDiv.find("select.provCity");
            cityId=fatherDiv.find("select.cityCd");
            addressId=fatherDiv.find("select.distCd");
            $(this).addClass("this-Class");
            if(isidCard=="SF"){
                fatherDiv.find(".setCity").find("input").attr("readonly","readonly");
                idCard=fatherDiv.find(".papersNo").val();
                /*证件号码页面添加身份证检验提示*/
                fatherDiv.find(".papersNo").removeClass('isIdNUM');
                fatherDiv.find(".papersNo").addClass('isIDCard');
                if(checkIdCard(idCard)==true){
                    /*判断身份证输入是否重复*/
                    var total_class=$(".papersNo").length;
                    var this_class=null;
                    for(var i=0;i<total_class;i++){
                        this_class=$(".papersNo").eq(i).val();
                        if($(".papersNo").eq(i).hasClass("this-Class")==false){
                            if(this_class==idCard){
                                $(this).rules("add", {
                                    afterSpace: true,
                                    messages: {
                                        afterSpace: "身份证号重复"
                                    }
                                });
                                return false;
                            }else {
                                $(this).rules("remove", "afterSpace");
                                $(this).parents("form").validate().element($(this));
                            }
                        }
                    }
                    addressSelect.find("option").remove();
                    addressSelect.find("select").prepend("<option value=''>请选择...</option>");
                    showIDInfo(idCard,birthId,sexId,proviceId,cityId,addressId,addressInput,addressSelect);
                    $(this).removeClass("this-Class");
                    set_readonly(sexId,birthId,proviceId,cityId,addressId);
                    $("form").validate().element(sexId.find("input"));
                    $("form").validate().element(birthId);
                    $("form").validate().element(proviceId);
                    $("form").validate().element(cityId);
                    $("form").validate().element(addressId);
                    $('select').selectpicker('refresh');
                }else{
                    birthId.val();
                    set_write(sexId,birthId);
                }
            }else{
                /*证件号码页面添加军官证检验提示*/
                fatherDiv.find(".papersNo").removeClass('isIDCard');
                fatherDiv.find(".papersNo").addClass('isIdNUM');
                set_write(sexId,birthId);
            }

        })
    }
    /*  置灰*/
    function set_readonly(sexId,birthId,proviceId,cityId,addressId){
        sexId.find("input").attr("disabled",true);
        birthId.parents(".form-group").addClass("setTimeGray");
        birthId.attr("disabled",true);
        birthId.next().find("button").attr("disabled",true);
    }
    /* 可输入*/
    function set_write(sexId,birthId){
        sexId.find("input").removeAttr("disabled");
        birthId.parents(".form-group").removeClass("setTimeGray");
        birthId.removeAttr("disabled");
        birthId.next().find("button").removeAttr("disabled");
        birthId.parents(".form-group").removeClass("setTimeGray");
    }


    /*根据申请人的证件类型、证件号码、申请人姓名的改变生成客户编号*/
    function  getCustomerNo(){
        var papersNo;
        $(document).on('blur','.papersNo',function(){
            var $this=$(this);
            createCuNo($this);
        });
    }
    function  createCuNo($this){
    var fatherDiv=$this.parents(".tab-pane");
    papersType=fatherDiv.find('select.papersTypeList').val();
    papersNo=fatherDiv.find('.papersNo').val();
        peopleapTr=$("[name='loanApplyPeopleOfZS.apTr']").val();
    if(papersType!="" && papersNo!="" ){
        var  customerName;
        if(customerName == ""){customerName="临时用户";}
        $.getJSON(app.LOAN_CUSTOMER_NO + "?cardType="+papersType+"&idCard="+papersNo+"&cusName="+customerName, function (res) {
            if (app.isOK(res)) {
                fatherDiv.find('.customerNo').val(res.customerNo);
                if(fatherDiv.find('.customerNo').val()!=""){
                    fatherDiv.find('.check-hostory-loan').attr('href','/cb/check-historical-loan/historical-loan-list.html?customerNo='+res.customerNo+'&apTr='+peopleapTr);
                    fatherDiv.find('.check-hostory-loan').removeAttr('disabled');
                }
                $("form").validate().element(fatherDiv.find('.customerNo'));
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    }
}

/*
 * 试算
 */
function getRepayMethod(obj,datas,applyMoney) {
    var  res=datas;
    obj.click(function () {
        /*
         *获取页面中的数据信息
         * */
        var payMethodId, applayAmount, applyWater, exeRate, plOption, payDay, promNo;
       payMethodId = $("#paymentMethodId").val();
         applayAmount = applyMoney;
         applyWater = $("#hiddenWater").val();
         exeRate = $("#executionRateFirstLoan").val();
         plOption = $("#applyPeriodLength").val();
         payDay = $("#loanPayDay").val();
         promNo = $("#promNo").val();
            if (typeof (promNo) == "undefined") {
                if (res.applySub.promNo != null) {
                    promNo = res.applySub.promNo;
                } else {
                    promNo = "";
                }
            }
            if (payMethodId == "" || typeof(payMethodId) == 'undefined') {
                payMethodId = res.paymentMethod.paymentMethodId;
                if (payMethodId == "") {
                    obj.attr('href', '');
                    app.alertError("还款方式为空！");
                    return;
                }
            }
            if (applayAmount == "") {
                obj.attr('href', '');
                app.alertError("申请金额不正确！");
                return;
            }
            if (applyWater == "" || typeof(applyWater) == "undefined") {
                applyWater = res.applyWater;
                if (applyWater == "") {
                    obj.attr('href', '');
                    app.alertError("申请编号为空！");
                    return;
                }
            }
            if (exeRate == "") {
                exeRate = res.exeRate;
                if (exeRate == "") {
                    obj.attr('href', '');
                    app.alertError("执行利率为空！");
                    return;
                }
            }
            if (plOption == "" || typeof(plOption) == "undefined") {
                if (res.applySub.applyPeriodLength != -1) {
                    plOption = res.applySub.applyPeriodLength;
                }
                if (plOption == "") {
                    obj.attr('href', '');
                    app.alertError("请选择申请期限后再测算！");
                    return;
                }
            }
            if (payDay == "") {
                payDay = res.payDay;
                if (payDay == "" || typeof(payDay) == "undefined") {
                    obj.attr('href', '');
                    app.alertError("每期还款日为空！");
                    return;
                }
            }
            /*用于详情录入贷款信息，以上信息都不为空，查看还款计划*/
            if (obj.attr('href') == "") {
                obj.attr('href', '#repayMethod');
            }
        var data = {
                apTr: applyWater,
                payMethodId: payMethodId,
                applayAmount: applayAmount,
                exeRate: exeRate,
                promNo: promNo,
                plOption: plOption,
                payDay: payDay
            };
            $.getJSON(app.AJAX_TENTATIVECALCULATION, data, function (res) {
                if (app.isOK(res)) {
                    /*还款方案列表*/
                    var tp3 = Handlebars.compile($('#repay-method').html());
                    html = tp3(res);
                    $("#mes-list").html(html);
                    $("#managerListModal").find('form').deserializeObject(res);
                    /*金额格式化显示*/
                    $("#managerListModal").find(".bindEvent").each(function () {
                        $(this).val(app.formatCurrencyM($(this).val()));
                    });
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });
    });
}
/*列表页商店回显商店编号*/
function  listCooNo(){
    $("#sureButton").click(function () {
        var checked = $("#managerTable").find("[type='radio']:checked");
        var  cooNo =checked.parents("tr").find('.cooNo').text();
        $('#agenceHidden').val(cooNo);
        var val = checked.val();
        $("#agence").val(val);
    })
}
/*获取业务日期*/
$.getJSON(app.BRIEFT_ENTRY_ADD, function (res) {
    if (app.isOK(res)) {
       $('.custom-date a').html(res.syDt);
        return;
    }
    app.alertError(res.errors.join('\n'));
});
/*省市回显*/
$(document).on('change','.provCity',function(){
    if(identShow!=1){
        $(this).parents(".form-group").find("select.cityCd").find("option:selected").prop("selected",false);
         $(this).parents(".form-group").find(".cityCd").find("button span:first").html("请选择..");
        $(this).parents(".form-group").find("select.distCd").find("option:selected").prop("selected",false);
         $(this).parents(".form-group").find(".distCd").find("button span:first").html("请选择..");

    }else{
        identShow=0;
    }

});
/*根据产品id查询最大最小金额*/
    function queryMinAndMaxAm(id){
        $.ajaxSettings.async = false;
        $.getJSON(app.AJAX_APPLYPERIOD + id , function (res) {
            if (app.isOK(res)) {
                //将最大最小申请金额放到界面中
                $("#approvalAmount").data("maxLoAm", res.maxLoAm);
                $("#approvalAmount").data("minLoAm", res.minLoAm);
                $.ajaxSettings.async = true;
            }
        });
    }


/*电核项信息*/
function tableHide(){
    $('.tableBody').each(function(){
        trLength = $(this).find('tr').length;
        if(trLength==0){
            $(this).parents('.left-add').hide();
        }
    })
    $('tr td:nth-child(1)').each(function(){
       var maYn = $.trim($(this).text());
        if(maYn=="否"){
            $(this).parents('tr').find('td:nth-child(3)').find('input[type="radio"]').removeClass('required');
        }
    })
}

/**
 * 回显详细录入申请人保存的数据的Id，例如教育信息，单位信息
 * 防止重复提交，造成重复数据
 * */
function  returnMsg(apTr,formId,url){
    $.getJSON(url + apTr , function (res) {
        if (app.isOK(res)) {
            $(formId).deserializeObject(res);
        }
    });
}
/*回显数据判断证件类型是身份证，生日、性别不可修改*/
function setBirthSex(){
    $('.peopleList').each(function(){
        var fatherDiv=$(this).parents(".portlet-body");
        var  isidCard =fatherDiv.find('.peopleList option:selected').val();
        var birthId=fatherDiv.find(".birthdayDate");
        var  sexId=fatherDiv.find(".sexBox");
        if(isidCard=='SF'){
            set_readonly(sexId,birthId);
        }
    });
}
/*检验重复*/
function repeatCheck(currentTarget,allTarget,text){
        var currentOrderNoVal=currentTarget.val();
         currentTarget.addClass("this-Class");
        for(var i=0;i<allTarget.length;i++) {
            var orderNoVal = allTarget.eq(i).val();
            if (allTarget.eq(i).hasClass("this-Class") == false) {
                if (orderNoVal == currentOrderNoVal) {
                    currentTarget.rules("add", {
                        afterSpace: true,
                        messages: {
                            afterSpace: text
                        }
                    });
                    return;
                }else {
                    currentTarget.rules("remove", "afterSpace");
                    currentTarget.parents("form").validate().element(currentTarget);
                }
            }
        }
    currentTarget.removeClass("this-Class");
}
