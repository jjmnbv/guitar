$(function () {
    var $ = window.jQuery;
    var app = window.app;

    /**
     * 初始化数据
     */
    /*接口状态*/
    $('.interfaceState').selectloader({'interfaceStatus': app.interfaceState});
	/*渠道商*/
    $('.channelNo').selectloader({'channelName': app.channelName});
     /*接口标签*/
    $('.dataCode').selectloader({'dataCode': app.dataCode});
    /*收费方式*/
    $('.chargeTypes').selectloader({'chargeTypes': app.chargeTypes});
    /*接口类型*/
    $('.dataTypeCode').selectloader({'dataTypeCode': app.dataTypeCode});
    /*接口参数*/
    $('.params').selectloader({'paramsList': app.params});
    /*有效代码*/
    $('.effectCode').selectloader({'effectCodeList': app.effectCode});
    //textarea长度校验
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
    });

    /*
     * 当有效代码为SC：时长，数据有效期effectHour为必填项
     * */
    $(document).on("change","select.effectCode",function () {
        if($(this).val()=="SC"){
           $("input[name='effectHour']").addClass("required").parents(".form-group").find(".control-label").addClass("fill");
        }else{
            $("input[name='effectHour']").removeClass("required").parents(".form-group").find(".control-label").removeClass("fill");
        }
    });

    //校验
    app.bindFormValidation($('#add-repay-form'));

    //提交表单
    $("#saveForm").click(function(){
       var channelName= $(".channelNo").find("option:selected").data("text-vv");
        $(".channelName").val(channelName);
        if ($('#add-repay-form').valid()) {
            var formObj=new Object();
            var paramArray="";
            formObj= $('#add-repay-form').serializeObject();
            if( formObj.params2[0].length==1){
                paramArray=formObj.params2;
            }else{
                for(var i=0;i< formObj.params2.length;i++){
                    if(i!=formObj.params2.length-1){
                        paramArray=paramArray+ formObj.params2[i] +',';
                    }else{
                        paramArray=paramArray+formObj.params2[i];
                    }
                }
            }
            formObj.paramArray=paramArray;
            submit(app.INTERFACEMANAGEMENTADD,formObj, event.target);
        }
    });
});