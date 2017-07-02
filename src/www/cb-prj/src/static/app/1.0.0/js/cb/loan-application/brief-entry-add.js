/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    $('#shop').pagination({
        "first-store": app.firstStore
    });
    $('#loanUseCode').selectloader({'loanUseList': app.loanUseCodeList});
    $('.peopleList').selectloader({'papersTypeList': app.papersTypeList});
    $('.applicantRelationship').selectloader({'apReList': app.relationshipList});
    $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
    $('.provCity').selectloader({'provinceList': app.provinceList});
    $('#cuMaNa,#loanTypeId').attr('disabled',true);
    $('select').selectpicker('refresh');
    app.bindFormValidation($('#brief-add-form'));
    validate_form_time();
    /*校验*/
    $('#brief-add-form').validate();
    fromIDsetBir();
    var initData = function () {
        $.getJSON(app.BRIEFT_ENTRY_ADD, function (res) {
            if (app.isOK(res)) {
                $('#getCurrentDate,#applyTime').val(res.syDt);
                $("[name='loanUseExplain']").parents('.form-group').hide();
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    };
    initData();
    /**
     * 增加共同申请人
     */
    var indexId=0;
    $('body').on('click', '.add-people-list', function () {
        $(this).modelCurd({
            target: $("#add-person-body"),
            template: $('#add-peopleList-template'),
            self:$(this),
            index:indexId,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.peopleList').selectloader({'papersTypeList': app.papersTypeList});
                el.find('.applicantRelationship').selectloader({'apReList': app.relationshipList});
                el.find('.provCity').selectloader({'provinceList': app.provinceList});
                el.find('select').selectpicker('refresh');
                el.find('.date-picker-page').datepicker({
                    rtl: App.isRTL(),
                    orientation: "left",
                    todayHighlight: true,
                    autoclose: !0,
                    format: "yyyy-mm-dd",
                    'start-date': "+0d",
                    language: 'zh-CN'
                }).on('hide', function (e) {
                    $(this).parents("form").validate().element($(this).parent().find("input"));
                });
            }

        });
        indexId++;
    });

    /*删除共同申请人*/
    $(document).on("click", ".delete-people", function () {
        $(this).parents(".person-list").remove();
    });

        /*商店搜索数据回显*/
        $("#confirm").click(function () {
            var checked = $("#managerTable").find("[type='radio']:checked");
           var  cuMa = checked.parents("tr").find('.cuMaNa').text();
            var  brNo =checked.parents("tr").find('.brNo').text();
            var  cooNo =checked.parents("tr").find('.cooNo').text();
            var  moNo =checked.parents("tr").find('.moNo').val();
            var  telNo =checked.parents("tr").find('.telNo').val();
            var  cuMaLoginNa =checked.parents("tr").find('.cuMaLoginNa').val();
            var  cuMaLoginId =checked.parents("tr").find('.cuMaUsId').val();
            if(telNo == ""){
            	 app.alertError("此门店没有电话信息！");
            }

            var val = checked.val();
            $("#agence").val(val);
            $("#agenceHidden").val(val);
            $('#organizationNo').val(brNo);
            $('#storeNo').val(cooNo);
            $('#cuMaMoNo').val(moNo);
            $('#storeTelNo').val(telNo);
            $('#cuMaLoginNa').val(cuMaLoginNa);
            setCustomerAppoint(cuMa);
            var shopVal=$('#agence').val();
            $("form").validate().element($('#cuMaNa'));
            $("form").validate().element($('#agence'));

            //门店变更后需要重新查询查询产品
            $('#loanKindCode').trigger("change");
        });

        $('#brief-add-form').validate();
        /*贷款用途为其他时用途说明必填*/
        loanUseCode_QT('#loanUseCode');
		var save = function () {
			$('#saveData').click(function () {
				var formIdArr = [];
                if (!$("#brief-add-form").valid()) {
                    app.alertError("有必填项未填,请检查!");
                    return false;
                }else if (!saveHandle(formIdArr,'save',app.BRIEF_ADD)) {
                   app.alertError('保存失败！');
				} else {
                    $(this).attr('disabled','true');
					app.alertOK('保存成功！');

				}
		  });
		};
        var saveHandle = function (formIdArr,operType,url) {
			var flag = true;
            var isDisabledFlag = true;
			var item = $("#brief-add-form");
            if(!judgeIshadOrgan()){
                return false;
            }
            /*判断客户经理是否可修改*/
            if($('#cuMaNa').prop("disabled")){
                isDisabledFlag = false;
            }
			$('#brief-add-form').find(":disabled").removeAttr("disabled");
            $(item).prop('action', url);
			$.Bpm.ajaxPost($(item).prop('action'), 'post', $(item).serialize(), false, function (data, textStatus, jqXHR) {
				if (app.isOK(data)) {
					if ($(item).prop('id') == 'brief-add-form') {
						formIdArr.push({ formId: $(item).data('viewIdname'), id: data.applyWater });
                        var saveApplyWater = $('[name="applyWater"]').val();
                        if(saveApplyWater==""){
                            $('[name="applyWater"]').val(data.applyWater)
                        }
					}
				} else {
					flag = false;
				}
			}, 'application/x-www-form-urlencoded; charset=UTF-8');
            $('#customerName').attr('disabled',true);
            setBirthSex();
            if(!isDisabledFlag){
                $('#cuMaNa').attr('disabled',true);
                $('#cuMaNa').selectpicker('refresh');
            }
			return flag;
		};
		var submit = function () {
			$('#submitData').click(function() {
				var flag = true;
				var formIdArr = [];
                var submitUrl;
                /*先点击保存返回applyWater*/
                var saveApplyWater = $('[name="applyWater"]').val();
                if(saveApplyWater==""){
                     submitUrl = app.BRIEF_ADD;
                }else {
                     submitUrl = app.BRIEF_UPDATE;
                }
                if (!$("#brief-add-form").valid()) {
                    app.alertError("有必填项未填,请检查!");
                    return false;
                }else if (!saveHandle(formIdArr,'submit',submitUrl)) {
					app.alertError("提交失败!");
					return;
				}
                //获取jquery-data保存的流程数据
                 var flowKey= $("#loanTypeId").data("flowKey");
                if(!flowKey){
                    app.alertError("该流程没有配置flowKey!!");
                   return;
                }
                var taskId = $.Bpm.startProcessExt(flowKey, formIdArr);
                $(this).attr('disabled','true');
                $('#saveData').attr('disabled','true');
                app.alertOK('提交成功！');
                setTimeout(function(){window.location.href='/cb/loan-application/brief-entry.html'},3000);

			});
		};
		var init = function () {
			save();
			submit();
		};
		init();

});

var loanTypeTemp;
/*贷款类型修改，改变金融产品*/
$('#loanKindCode').change(function(){
    var loanKindCode=$(this).val();
    var storeNo=$('#storeNo').val();
    //贷款类型和门店编号
    var param={'loanKindNo':loanKindCode,'storeNo':storeNo};
    if(loanKindCode !="") {
        $.getJSON(app.LOAN_TYPE_CODE, param, function (res) {
            if (app.isOK(res)) {
                $('#loanTypeId').removeAttr('disabled');
                $('#loanTypeId').html('<option value="">请选择...</option>');
                $('#loanTypeId').selectloader({'loanTypeList': $.parseJSON(JSON.stringify(res.content))});
                loanTypeTemp = res.content;
                if ($('#storeNo').val() == "") {
                    $("#cuMaNa").val("");
                    $('#cuMaLoginNa').val("");
                }
                if(loanKindCode == "NY"){
                    $('#agence').addClass('required');
                    $('#agence').parents('.form-group').find('label').addClass('fill');
                }else{
                    $('#agence').removeClass('required');
                    $('#agence').parents('.form-group').find('label').removeClass('fill');
                }
                return;
            }
            app.alertError(res.errors.join('\n'));
        })
    }else {
        $('#loanTypeId').attr('disabled','true');
        $('#loanTypeId').html('<option value="">请选择...</option>');
    }
});

//给定客户经理的指定值
function setCustomerAppoint(customerName){
    $('#cuMaNa').removeAttr('disabled');
    $('#cuMaNa').html('');
    var temp1 = '[{"usNa":"'+customerName+'"}]';
    $('#cuMaNa').val(customerName);
    $('#cuMaNa').selectloader({'customerList': $.parseJSON(temp1)});
    $('#cuMaNa').attr('disabled',true);
    $("form").validate().element($('#cuMaNa'));
}
var customerList;
function setCustomerList(){
    $.getJSON(app.CUSTOMER_LIST, function (res) {
        if (app.isOK(res)) {
            customerList = res.content;
            $('#cuMaNa').removeAttr('disabled');
            $('#cuMaNa').html('<option value="">请选择...</option>');
            $('#cuMaNa').selectloader({'customerList': $.parseJSON(JSON.stringify(res.content))});
            //如果当前登录的用户不是客户经理
            return;
        }
        app.alertError(res.errors.join('\n'));
    });
}
/*改变客户经理应该触发的*/
$('#cuMaNa').change(function(){
    var cuMaNa=$(this).val();
    if(cuMaNa !=""){
            $.each(customerList,function (index,domEle){
                if(domEle.usNa == cuMaNa) {
                    $('#cuMaLoginNa').val(domEle.loginNa);
                }
            });

    }
});

/*判断当前用户是不是客户经理，如果是客户经理则取当前用户*/
function judgeIsCustomer(){
    $.getJSON(app.JUDGE_IS_CUSTOMER, function (res) {
        if (app.isOK(res)) {
            //统一用户系统接口返回1，后续可能改为Y，可能不改
            if(res.cuMaYn == "1" || res.cuMaYn =="Y"){
                //表示当前用户是客户经理
                setCustomerAppoint(res.name);
                $('#cuMaLoginNa').val(res.loginName);
                $('#cuMaMoNo').val(res.telphone);
            }else{
                setCustomerList();
            }
            return;
        }
        app.alertError(res.errors.join('\n'));
    });
}
/*根据客户经理判断是否有放款机构*/
function judgeIshadOrgan(){
    $.ajaxSettings.async = false;
    var userId = $('#cuMaLoginNa').val() ;
    if(userId == ""){
        $.ajaxSettings.async = true;
        return false;
    }
    $('#organizationNo').val("");
    var returnValue;
    $.ajax({
        async: false,
        cache: false,
        url: app.AJAX_GET_ORGAN+"?userId="+userId,
        success: function (res) {
            if (app.isOK(res)) {

                if( !(res.maBrNo === null || res.maBrNo === undefined) && res.maBrNo!= ""){
                    $('#organizationNo').val(res.maBrNo);
                    returnValue = true;
                }else{
                    app.alertError("客户经理所属的机构没有配置对应的管理机构!");
                    returnValue = false;
                }
            }else{
                app.alertError(res.errors.join('\n'));
                returnValue = false;
            }
        },
        error: function (data) {
            $.ajaxSettings.async = true;
            app.alertError(data);
        }
    });
    $.ajaxSettings.async = true;
    return returnValue;
}

/*改变金融产品应该触发的*/
$('#loanTypeId').change(function(){
    var  $this=this;
    var loanTypeId=$($this).val();
    if(loanTypeId !=""){
        //如果没选门店，并且产品配置了经理，则取此处的经理
        if( $('#storeNo').val() == ""){
            $.each(loanTypeTemp,function (index,domEle){
                if(domEle.id == loanTypeId) {
                        if( !(domEle.cuMaNa === null || domEle.cuMaNa === undefined) && domEle.cuMaNa!= ""){
                            $("#cuMaNa").val(domEle.cuMaNa);
                            $('#cuMaLoginNa').val(domEle.cuMaLoginNa);
                            setCustomerAppoint(domEle.cuMaNa);
                        }else{
                            judgeIsCustomer();
                        }
                }
            });
        }
        $.each(loanTypeTemp,function (index,domEle){
            if(domEle.id == loanTypeId) {
                if(domEle.auFlStatus=='ENABLE'){
                    //设置流程相关的key和status
                    $($this).data("flowKey",domEle.auFlId);
                    $($this).data("flowStatus",domEle.auFlStatus);
                }else{
                    app.alertError(domEle.loTyNa+"关联的流程不可用！");
                    $($this).val("");
                }
            }
        });
    }
});

/*根据主申请人的证件类型、证件号码、申请人姓名的改变生成客户编号*/
var papersType,papersNo,customerName;
     $(document).on("blur","#papersNo",function (){
         createCuNo();
     })

/*客户编号赋值*/
function  createCuNo(){
    papersType=$('#peopleList').val();
    papersNo=$('#papersNo').val();
    customerName=$('#customerName').val();
    if(papersType!="" && papersNo!=""){
        if(customerName == ""){customerName="临时用户";}
        var psData={'cardType':papersType,'idCard':papersNo,'cusName':customerName};
        $.post(app.LOAN_CUSTOMER_NO,psData).done(function(res){
            if (app.isOK(res)) {
                //用户状态不对 不允许录入信息
                if(res.status == "SW"){
                    app.alertError("此用户已死亡");
                }else if(res.status == "SA"){
                    app.alertError("此用户已涉案");
                }else if(res.status == "QZ"){
                    app.alertError("此用户涉嫌欺诈");
                }else if(res.status == "SL"){
                    app.alertError("此用户失联");
                }else if(res.status == "JH"){
                    $('#customerName').val(res.customerName);
                    $('#customerName').attr('disabled',true);
                    $('#customerNo').val(res.customerNo);
                    $('#mobileNo').val(res.mobileNo);
                    $("form").validate().element($('#customerName'));
                    $("form").validate().element($('#mobileNo'));
                }else{
                    $('#customerName').removeAttr('disabled');
                    $('#customerName').val("");
                    $('#mobileNo').val("");
                    $('#customerNo').val(res.customerNo);
                }

                $("form").validate().element($('#customerNo'));
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    }
}




/*lh 设置 商店为空*/
$(document).on("mouseover", ".find > .line", function () {
    if($("#agenceHidden").val()!=""){
        $("#shopNull").css("display","block");
    }
});

$(document).on("mouseout", ".find > .line", function () {
    $("#shopNull").css("display","none");
});

$(document).on("click", "#shopNull", function () {
    $("#agenceHidden").val("");
    $("#agence").val("");
    $("#storeNo").val("");

    $(this).css("display","none");

    //门店变更后需要重新查询查询产品
    $('#loanKindCode').trigger("change");
});
/*检验手机号重复*/
$(document).on('change','.phone-equal',function(){
    var currentTarget = $(this);
    var allTarget =$('.phone-equal');
    repeatCheck(currentTarget,allTarget,"手机号不能重复");
})





