$(function(){
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;
    $(".date-picker-page").datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        autoclose: !0,
        format: "yyyy-mm-dd",
        'start-date': "+0d",
        language: 'zh-CN'
    });
    app.context.formHtml = $('#form-template').html();

    app.context.formInit = function (form) {
        app.bindFormValidation(form);
        if(operatingMode =='add'){
            validatorNotExists(form);
        }else{

        }

    };


    /**
     * 添加还款方式配置明细表
     */

    /**
     *URL传值
     */
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var baFaNo=GetQueryString("baFaNo");

    /**
     *异步请求取值
     */
    app.$getJSON(app.CEPAUSFA_VIEW+baFaNo ).done(function(data){
        if(app.isOK(data)){
            $('#cepausfaEditFrom').deserializeObject(data)
        }
    })

    $('#baFaNo1').val(baFaNo);
    $(".portlet.box").eq(0).hide();

    /**
     *模态框赋值
     **/
    /*$("#add").on('shown.bs.modal',function(){
     $("#parP").val(payCde);
     });
     */

    var validatorNotExists = function (form) {

    };
});
var doBatchPaus = function() {
    var payBaNo = $("#cepaussu_Id").val();

    if (payBaNo == "" || !payBaNo) {
        app.alertError("批次号不存在，无法进行放款");
    } else {
        var url = app.base + "/ce/cepaussu/domlap/" + payBaNo;
        var data = {};
        var type = "";

        var reValue = $.post(url, data, function (reData, textStatus, jqXHR) {
            console.log('app.postData');
            //超时跳转到登录
            //alert(textStatus)
            app.alertOK('提交成功.');
        }, type);
    }
}