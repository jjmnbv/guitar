/**
 * 自定义Handlebars的helper
 */
+function (handlebars) {
    handlebars.registerHelper('ciSearchState', function (state) {
        /*CS初始 CZ查询中 WC完成 SB失败  RZ 认证  CX查询*/
        if(state == "CS"){
            return "初始";
        }else if(state == "CZ"){
            return "查询中";
        }else if(state == "WC"){
            return "完成";
        }else if(state == "SB"){
            return "失败";
        }else {
            return state;
        }
    });
    handlebars.registerHelper('ciDataTypeState', function (state) {
        /* RZ 认证  CXCX*/
        if(state == "RZ"){
            return "认证服务";
        }else if(state == "CX"){
            return "查询服务";
        }else {
            return state;
        }
    });
}(Handlebars);

+function ($, app) {
    /*获取当前时间*/
    app.applyWater = function () {
        return new Date().getTime();
    };
    /**/
    app.custNo = function () {
        return new Date().getTime();
    }
    /*客户端查询用户姓名*/
    app.queryUserName = function (e) {
        return e;
    };
    /*客户端查询用户ID*/
    app.queryUserId = function (e) {
        return e;
    };
    /*申请流水客户端id、name*/
    app.queryUserNameIdApplyWater = function (name, id) {
        /*申请流水客户端id、name  客户编号 */
        var  name= "zhangsan", id= "瑶瑶";
        var thisTime = app.applyWater();
        $("#applyWater").val(thisTime);
        return "&queryUserId="+app.queryUserId(id)+
                "&queryUserName="+app.queryUserName(name)+
                "&custNo="+app.custNo()+
                "&applyWater="+thisTime+
                "&channelNo="+$("[name='interfaceNo']").val().substring(0,3);
    }
}(window.jQuery, window.app);


$(function () {
    //左侧菜单展开闭合
    $("body").on("click",".ci-menus-ul > li  a", function () {
        $(this).siblings(".children-box").slideToggle(300);
        $(this).find(".icon").toggleClass("expand");
    });
    $("body").on("click",".ci-menus-ul > li >.children-box  a", function () {
        $(this).next(".children-third-box").slideToggle(300);
        $(this).find(".icon").toggleClass("collapse");
    });

    /*当前url 高亮*/
  /*  $(document).ready(function() {
        var thisUrl = location.href;
        alert(thisUrl);
        $(".children-box").find("a").each(function () {
            var thisHref = $(this).attr("href");
            var urlIndexOf = thisUrl.indexOf(thisHref);
            if( urlIndexOf > 1 && (thisUrl.length-1) != urlIndexOf ){
                $(this).addClass("active");
                if($(this).parents().hasClass("children-third-box")){
                    $(this).parents(".children-third-box").css("display","block");
                    $(this).parents(".children-third-box").prev().find(".icon").removeClass("expand").addClass("collapse");
                }
            }
        });
    });*/

    /*lh 重写 左侧高亮控制js*/
    $(document).ready(function() {
        var thisUrl ="";

        $(".page-crumbs").find("dd").each(function () {
            if($(this).find("a").attr("href")!="#"){
                thisUrl =$(this).find("a").attr("href");
             /*   alert(thisUrl);*/
            }
        });

        $(".children-box").find("a").each(function () {
            var thisHref = $(this).attr("href");
            var urlIndexOf = thisUrl.indexOf(thisHref);
            if( urlIndexOf == 0 ){
                $(this).addClass("active");
                if($(this).parents().hasClass("children-third-box")){
                    $(this).parents(".children-third-box").css("display","block");
                    $(this).parents(".children-third-box").prev().find(".icon").removeClass("expand").addClass("collapse");
                }
            }
        });
    });

    /*不关联分页重置下拉框*/
    $('[type="reset"]').click(function () {
        $('select:not(:disabled)').selectpicker('val', '');
    });
});

(function($){
    //	url  form 提交内容转换为对象形式
    $.getQueryObject = function(url){
        url = url == null ? window.location.href : url;
        var search = url.substring(url.lastIndexOf("?") + 1);
        var obj = {};
        var reg = /([^?&=]+)=([^?&=]*)/g;
        var i =0;
        var thisArray = new Array();
        var objOne ='';
        search.replace(reg, function (rs, $1, $2) {
            var name = decodeURIComponent($1);
            var val = decodeURIComponent($2);
            val = String(val);
            /*同一对象 转成数组形式*/
            if(obj.hasOwnProperty(name)){
                thisArray[0] = objOne;
                thisArray[i] = val;
                obj[name] = thisArray;
                i++;
            }else {
                obj[name] = val;
                objOne =  obj[name];
            }
            return rs;
        });
        return obj;
    }
})(jQuery);

$(function(){
    /*隐藏 列表页 全部查询模块*/
    $(".searchPortlet > .portlet-title").css("display","none");
    $(".searchPortlet > .portlet-body").css("display","block");
});

    /* 设置 查看页面的下拉框和radio 只读*/
function setReadonly(){
    $("select").attr("disabled", true);
    $(".bootstrap-select button,textarea").css("background-color", "#efefef");
    $("input[type='radio']").attr("disabled", "disabled");
}


/*认证服务模块 接口描述 选择控制 必选项*/
function setRequired( columArr ) {
    $('#interfaceNo').change(function () {
        /* 去除 必填项*/
        $("input").parent().prev().removeClass("fill");
        $("input").removeClass("required");
        /*设置 必填*/
        var thisVal = $(this).val();
        for (var i = 0; i < app.mobileList.length; i++) {
            if (app.mobileList[i].interfaceNo == thisVal) {
                for (var m = 0; m < columArr.length; m++) {
                    var jsonObj = app.mobileList[i].params;
                    var jsonString = JSON.stringify(jsonObj);
                    var existEle = jsonString.indexOf(columArr[m]);
                    if (existEle > 0) {
                        var thisEle = $("input[name = " + columArr[m] + "]").parents(".form-group");
                        thisEle.find("label").addClass("fill");
                        thisEle.find("input").addClass("required");
                    }
                }
            }
        }
    });
}