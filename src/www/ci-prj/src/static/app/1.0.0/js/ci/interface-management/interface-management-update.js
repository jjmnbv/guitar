$(function () {
    var $ = window.jQuery;
    var app = window.app;

    /**
     * 初始化数据
     */
    //textarea长度校验
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
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
            submit(app.INTERFACEMANAGEMENT_UPDATE,formObj, event.target);
        }
    });

    //页面回显
     var initData = function () {
        $.getJSON(app.INTERFACEMANAGEMENT_VIEWS+ app.request.interfaceNo, function (res) {
            if (app.isOK(res)) {
                App.stopPageLoading();
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
                $('#add-repay-form').deserializeObject(res);

                if(res.params){
                    var params="";
                    for(var i =0;i<res.params.length;i++){
                        for(var j =0;j< $(".params").find("option").length;j++){
                            if(res.params[i].param==$(".params").find("option").eq(j).prop("value")){
                                $(".params").find("option").eq(j).attr("selected",true);
                                if(res.params.length==1){
                                    params=params+$(".params").find("option").eq(j).data("text-vv");
                                }else{
                                    if(i==0){
                                        params=$(".params").find("option").eq(j).data("text-vv");
                                    }else{
                                        params=params +','+$(".params").find("option").eq(j).data("text-vv");
                                    }

                                }

                            }
                        }
                    }
                    $(".params").siblings("button").find("span.pull-left").html(params);
                }
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    };
    var init = function () {
        initData();
    };
    init();
});