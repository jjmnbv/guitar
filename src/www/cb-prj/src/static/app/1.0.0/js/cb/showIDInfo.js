
    // 加权因子
    var wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    // 身份证验证位值.10代表X
    var valideCodeArr = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    // 男女ID
    var sexMap = {0:"女",1:"男"};

function checkIdCard(idCard){
    //去掉首尾空格
    idCard = trim(idCard.replace(/ /g, ""));

    if (idCard.length == 15||idCard.length == 18) {
        return true;
    } else {
        //不是15或者18，位数不对
        return false;
    }
}
function showIDInfo(idCard,birthId,sexId,proviceId,cityId,addressId,addressInput,addressSelect){
    // 对身份证号码做处理。包括字符间有空格。
    idCard = trim(idCard.replace(/ /g, ""));
    //生日
    birthId.val(getBirthday(idCard));
    // 性别
    if(getSex(idCard)=="女"){
        sexId.find("label").find("span").removeClass("checked");
        sexId.find(":radio[value='V']").prop("checked", "checked");
        sexId.find(":radio[value='V']").parent("span").addClass("checked");
    }else if(getSex(idCard)=="男"){
        sexId.find("label").find("span").removeClass("checked");
        sexId.find(":radio[value='N']").prop("checked", "checked");
        sexId.find(":radio[value='N']").parent("span").addClass("checked");
    }else{
        return false;
    }
    // 地区
    getArea(idCard,proviceId,cityId,addressId,addressInput,addressSelect);
}
/**
 * 通过身份证得到性别
 * @param idCard 正确的15/18位身份证号码
 * @return 女、男
 */
function getSex(idCard){
    if (idCard.length == 15) {
        return sexMap[idCard.substring(14, 15) % 2];
    } else if (idCard.length == 18) {
        return sexMap[idCard.substring(14, 17) % 2];
    } else {
        //不是15或者18,null
        return null;
    }
}
/**
 * 得到生日"yyyy-mm-dd"
 * @param {Object} idCard 正确的15/18位身份证号码
 */
function getBirthday(idCard){
    var birthdayStr;

    if (15 == idCard.length) {
        birthdayStr = idCard.charAt(6) + idCard.charAt(7);

        if (parseInt(birthdayStr) < 10) {
            birthdayStr = '20' + birthdayStr;
        } else {
            birthdayStr = '19' + birthdayStr;
        }
        birthdayStr = birthdayStr + '-' + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11);
    }else if (18 == idCard.length) {
        birthdayStr = idCard.charAt(6) + idCard.charAt(7) + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11) + '-' + idCard.charAt(12) + idCard.charAt(13);
    }

    return birthdayStr;
}

/**
 * 验证身份证号码中的生日是否是有效生日
 * @param idCard 身份证字符串
 * @return
 */
function checkBrith(idCard){
    var result = true;

    if (15 == idCard.length) {
        var year = idCard.substring(6, 8);
        var month = idCard.substring(8, 10);
        var day = idCard.substring(10, 12);
        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));

        // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
        if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
            result =  false;
        }
    } else if (18 == idCard.length) {
        var year = idCard.substring(6, 10);
        var month = idCard.substring(10, 12);
        var day = idCard.substring(12, 14);
        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));

        // 这里用getFullYear()获取年份，避免千年虫问题
        if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
            result = false;
        }
    } else {
        result = false;
    }
    return result;
}

    /**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param idCardArr 身份证号码数组
 * @return
 */
function check18Code(idCard){
    var idCardArr= new Array();
    for(var i=0;i<idCard.length;i++){
        idCardArr[i]=idCard.substr(i,1);
    }
    var sum = 0; // 声明加权求和变量
    if (idCardArr[17].toLowerCase() == 'x') {
        idCardArr[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
    }

    for (var i = 0; i < 17; i++) {
        sum += wi[i] * idCardArr[i];// 加权求和
    }

    var valCodePosition = sum % 11;// 得到验证码所位置
    if (idCardArr[17] == valideCodeArr[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}

//去掉字符串头尾空格
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
    function getArea(idCard,proviceId,cityId,addressId,addressInput,addressSelect){
        var proviceName,cityName,areaName;
        var proviceCode=idCard.substr(0, 2)+"0000";
        var cityCode=idCard.substr(0, 4)+"00";
        var areaCode=idCard.substr(0, 6);
        for(var i=0;i<app.provinceList.length;i++){
             if(proviceCode==app.provinceList[i].districtCode){
                     proviceId.find("option:selected").attr("selected",false);
                     proviceId.selectloader({'provinceList': app.provinceList});
                     proviceId.find("option[value='"+proviceCode+"']").attr("selected",true);
                     cityId.selectloader({'children': app.provinceList[i].children});
                     for(var j=0;j<app.provinceList[i].children.length;j++){
                         if(cityCode==app.provinceList[i].children[j].districtCode){
                             cityId.find("option[value='"+cityCode+"']").attr("selected",true);
                             addressId.selectloader({'children': app.provinceList[i].children[j].children});
                             for(var m=0;m<app.provinceList[i].children[j].children.length;m++) {
                                 if (areaCode ==app.provinceList[i].children[j].children[m].districtCode) {
                                     addressId.find("option[value='"+areaCode+"']").attr("selected",true);
                                 }
                             }
                         }
                     }
             }
         }
    }