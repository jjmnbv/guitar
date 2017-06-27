+function ($, app) {
    /**
     * 初始化数据
     */
    $('#shop').pagination({
        "first-store": app.firstStore
    });
    app.bindFormValidation($('#brief-add-form'));
    fromIDsetBir();
    /*校验*/
    $('#brief-update-form').validate();
	var loanTypeId;
    App.startPageLoading({animate: true});
	var status = "";
	var taskIdVal = "";
    var initData = function () {
        $.ajaxSettings.async = false;
        $.getJSON(app.BRIEFT_ENTRY_VIEW + app.request.applyWater, function (res) {
            if (app.isOK(res)) {
                App.stopPageLoading();
				if(res.taskId){
					taskIdVal = res.taskId;
				}
				status = res.status;
                var tpl = Handlebars.compile($('#show-peopleList-template').html());
                var html = tpl(res);
                $("#show-person-body").html(html);
                $('#brief-update-form').find('.date-picker-page').datepicker({
                    rtl: App.isRTL(),
                    orientation: "left",
                    todayHighlight: true,
                    autoclose: !0,
                    format: "yyyy-mm-dd",
                    'start-date': "+0d",
                    language: 'zh-CN'
                });
                $('#brief-update-form').find("input").uniform();
                $('.relationshipList').selectloader({'relationshipList': app.relationshipList});
                $('.papersTypeCode').selectloader({'papersTypeList': app.papersTypeList});
                $('.provCity').selectloader({'provinceList': app.provinceList});
                $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
                $('#loanUseCode').selectloader({'loanUseList': app.loanUseCodeList});
                $('#loanApplyPeople').selectloader({'papersTypeList': app.papersTypeList});
                /*贷款用途为其他时，用途说明必填*/
                var loanUseCode=res.loanUseCode;
                if(loanUseCode=="QT"){
                    $("[name='loanUseExplain']").parents('.form-group').show();
                }else{
                    $("[name='loanUseExplain']").parents('.form-group').hide();
                }
                loanTypeId=res.loanTypeId;
                changeLoanType();
                //查询具体产品

                $('#brief-update-form').deserializeObject(res);
                setCustomerAppoint(res.cuMaNa);
              /*商店回显数据*/
                if($("#agenceHidden").val() != ""){
                    $("#agence").val($("#agenceHidden").val())
                }
                //获取已经保存的流程的key和状态
                getFlowKeyAndFlowStatus();
                /*回显数据判断证件类型是身份证，生日、性别不可修改*/
                setBirthSex();
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
        $.ajaxSettings.async = true;
    };
    /*贷款用途为其他时用途说明必填*/
    loanUseCode_QT('#loanUseCode');
    /*共同申请人新增*/
    $('body').on('click', '.add-people-list', function () {
        var listLength=$('#show-person-body').find('.add-people-list:last').data('person-list');
        if(listLength=="first"){
            listLength = 0;
        }else {
            listLength ++;
        }
        $(this).modelCurd({
            target: $("#add-people"),
            template: $('#add-peopleList-template'),
            self:$(this),
            index:listLength,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.papersTypeCode').selectloader({'papersTypeList': app.papersTypeList});
                el.find('.relationshipList').selectloader({'relationshipList': app.relationshipList});
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
                });
            }

        });
    });

	var save = function () {
        $('body').on('click', '#updateData', function () {
			var formIdArr = [];
            if (!$("#brief-update-form").valid()) {
                app.alertError("有必填项未填,请检查!");
                return false;
            }else if (!saveHandle(formIdArr,'save')) {
				app.alertError('保存失败');
			} else {
                $(this).attr('disabled','true');
                app.alertOK('保存成功！');
			}
	  });
	};

	var saveHandle = function (formIdArr,operType) {
		var flag = true;
		var item =  $("#brief-update-form");
        if(!judgeIshadOrgan()){
            return false;
        }
        $(':disabled').removeAttr('disabled');

        $(item).prop('action', app.BRIEF_UPDATE);

		$.Bpm.ajaxPost($(item).prop('action'), 'post', $(item).serialize(), false, function (data, textStatus, jqXHR) {
			if (app.isOK(data)) {
				if ($(item).prop('id') == 'brief-update-form') {
					formIdArr.push({ formId: $(item).data('viewIdname'), id: data.applyWater });
				}
			} else {
                app.alertError(data.payload);
				flag = false;
			}
		}, 'application/x-www-form-urlencoded; charset=UTF-8');
        setBirthSex()
		return flag;
	};
  
	var submit = function () {
        $('body').on('click', '#submitData', function () {
			var flag = true;
			var formIdArr = [];
            if (!$("#brief-update-form").valid()) {
                app.alertError("有必填项未填,请检查!");
                return false;
            }else if (!saveHandle(formIdArr,'submit')) {
				app.alertError("提交失败!");
				return;
			}
            $(this).attr('disabled','true');
            $('#updateData').attr('disabled','true');
			if(status=="NH"||status=="TH"){
				$.Bpm.init({taskId: taskIdVal});
				$.Bpm.initBusFormExt(function(){
                    $.Bpm.submitHandleExt(formIdArr, "","",null,function(data){
                        if (app.isOK(data)) {
                            app.alertOK('提交成功.');
                            setTimeout(function(){window.location.href='/cb/loan-application/brief-entry.html'},3000);
                        }else{
                            app.alertError("提交失败!");
                            return;
                        }
                    });
                });

			}else{
                //获取jquery-data保存的流程数据
                var flowKey= $("#loanTypeId").data("flowKey");
                if(flowKey==""){
                    app.alertError("该流程没有配置flowKey!!");
                    return;
                }
				var taskId = $.Bpm.startProcessExt(flowKey, formIdArr,function(data){
					if (app.isOK(data)) {
						app.alertOK('提交成功.');
						setTimeout(function(){window.location.href='/cb/loan-application/brief-entry.html'},3000);
					}else{
						app.alertError("提交失败!");
						return;
					}
				});
			}
            
		});
	};
	var init = function () {
		initData();
		save();
		submit();
	};
	init();
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
        var val = checked.val();
        $("#agence").val(val);
        $("#agenceHidden").val(val);
       // $("#cuMaNa").val(cuMa);
        $('#organizationNo').val(brNo);
        $('#storeNo').val(cooNo);
        $('#cuMaMoNo').val(moNo);
        $('#storeTelNo ').val(telNo);
        $('#cuMaLoginNa').val(cuMaLoginNa);
        setCustomerAppoint(cuMa);
        $("form").validate().element($('#agence'));
        $("form").validate().element($('#cuMaNa'));

        //门店变更后需要重新查询查询产品
        $('#loanKindCode').trigger("change");
    });



    //给定客户经理的指定值
    function setCustomerAppoint(customerName){
        $('#cuMaNa').removeAttr('disabled');
        $('#cuMaNa').html('');
        var temp1 = '[{"usNa":"'+customerName+'"}]';
        $('#cuMaNa').val(customerName);
        $('#cuMaNa').selectloader({'customerList': $.parseJSON(temp1)});
        $('#cuMaNa').attr('disabled',true);
        $('#cuMaNa').selectpicker('refresh');
    }

    var customerList;
    function setCustomerList(){
        $.getJSON(app.CUSTOMER_LIST, function (res) {
            if (app.isOK(res)) {
                customerList = res.content;
                $('#cuMaNa').removeAttr('disabled');
                $('#cuMaNa').html('<option value="">请选择...</option>');
                $('#cuMaNa').selectloader({'customerList': $.parseJSON(JSON.stringify(res.content))});
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    }


    /*改变客户经理应该触发的*/
    $(document).on("change","#cuMaNa",function(){
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
        var userId = $('#cuMaLoginNa').val() ;
        if(userId == "")return false;
        $('#organizationNo').val("");
        var resultValue ;
        $.ajax({
            async: false,
            cache: false,
            url: app.AJAX_GET_ORGAN+"?userId="+userId,
            success: function (res) {
                if (app.isOK(res)) {
                    if( !(res.maBrNo === null || res.maBrNo === undefined) && res.maBrNo!= ""){
                        $('#organizationNo').val(res.maBrNo);
                        resultValue = true;
                        return;
                    }else{
                        app.alertError("客户经理所属的机构没有配置对应的管理机构!");
                        resultValue = false;
                        return ;
                    }
                }else{
                    app.alertError(res.errors.join('\n'));
                    resultValue = false;
                    return ;
                }
            },
            error: function (data) {
                app.alertError(data);
                resultValue = false;
                return ;
            }
        });

        return resultValue;
    }


    /*根据主申请人的证件类型、证件号码、申请人姓名的改变生成客户编号*/
    var papersType,papersNo,customerName;
   $(document).on ("change","#peopleList",function(){
        createCuNo();
    });
    $(document).on("blur","#papersNo,#customerName",function(){
        createCuNo();
    });
    function  createCuNo(){
        papersType=$('#peopleList').val();
        papersNo=$('#papersNo').val();
        customerName=$('#customerName').val();
        if(papersType!="" && papersNo!=""){
            if(customerName == ""){customerName="临时用户";}
            var psData={'cardType':papersType,'idCard':papersNo,'cusName':customerName,};
            $.post(app.LOAN_CUSTOMER_NO,psData).done(function(res){
                if (app.isOK(res)) {
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
                        $('#customerNo').val(res.customerNo);
                    }

                    $("form").validate().element($('#customerNo'));
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });
        }
    }

    var loanTypeIdIndextemp = 0;
    /*改变金融产品应该触发的*/
    $(document).on("change","#loanTypeId",function(){
        var  $this=this;
        var loanTypeId=$($this).val();
        if(loanTypeId !="" && loanTypeIdIndextemp != 0){
            //如果没选门店，并且产品配置了经理，则取此处的经理
            if( $('#storeNo').val() == ""){
                $.each(loanTypeTemp,function (index,domEle){
                    if(domEle.id == loanTypeId) {
                        if(domEle.auFlStatus=='ENABLE'){
                            //设置流程相关的key和status
                            $($this).data("flowKey",domEle.auFlId);
                            $($this).data("flowStatus",domEle.auFlStatus);
                            if( !(domEle.cuMaNa === null || domEle.cuMaNa === undefined) && domEle.cuMaNa!= ""){
                                $("#cuMaNa").val(domEle.cuMaNa);
                                $('#cuMaLoginNa').val(domEle.cuMaLoginNa);
                                setCustomerAppoint(domEle.cuMaNa);
                            }else{
                                judgeIsCustomer();
                            }
                        }else{
                            app.alertError(domEle.loTyNa+"关联的流程不可用！");
                        }
                    }
                });
            }
        }
        loanTypeIdIndextemp++;
    });

}(window.jQuery, window.app);

var indexTemp = 0;
var loanTypeTemp;
/*贷款类型修改，改变金融产品*/
function changeLoanType() {
    $('#loanKindCode').change(function () {
        var loanKindCode = $(this).val();
        if(loanKindCode !="") {
            $.ajax({
                async: false,
                cache: false,
                url: app.LOAN_TYPE_CODE+ "?loanKindNo=" + loanKindCode,
                success: function (res) {
                    if (app.isOK(res)) {
                        $('#loanTypeId').removeAttr('disabled');
                        $('#loanTypeId').html('<option value="">请选择...</option>');
                        $('#loanTypeId').selectloader({'loanTypeList': res.content});
                        $('#loanTypeId').val("");

                        loanTypeTemp = res.content;
                        if($('#storeNo').val() == "" && indexTemp != 0){
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
                        indexTemp ++;
                        return;

                    }else{
                        app.alertError(res.errors.join('\n'));
                        return false;
                    }
                },
                error: function (data) {
                    app.alertError(data);
                }
            });

        }else {
            $('#loanTypeId').attr('disabled','true');
            $('#loanTypeId').html('<option value="">请选择...</option>');
        }
    })
};
/**
 * 获取流程的key和状态
 */
function  getFlowKeyAndFlowStatus(){
    var loanTypeId=$("#loanTypeId").val();
    $.each(loanTypeTemp,function (index,domEle){
        if(domEle.id == loanTypeId) {
            if(!domEle.auFlStatus=='DISABLE'){
                app.alertError(domEle.loTyNa+"关联的流程不可用！");
            }else{
                //设置流程相关的key和status
                $("#loanTypeId").data("flowKey",domEle.auFlId);
                $("#loanTypeId").data("flowStatus",domEle.auFlStatus);
            }
        }
    });
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
/*手机号重复*/
$(document).on('change','.phone-equal',function(){
    var currentTarget = $(this);
    var allTarget =$('.phone-equal');
    repeatCheck(currentTarget,allTarget,"手机号不能重复");
})