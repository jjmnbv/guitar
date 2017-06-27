/**
 * jquery.validate 扩展
 */
+function ($, app, validator) {
  var
          /**
           * 使用luhn算法（https://en.wikipedia.org/wiki/Luhn_algorithm）校验银行卡号
           * see https://gist.github.com/ondrek/6979558
           */
          luhnCheck = function (str) {
            var arr = [
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ], len = str.length, mul = 0, sum = 0;

            while (len--) {
              sum += arr[mul][parseInt(str.charAt(len), 10)];
              mul ^= 1;
            }

            return sum % 10 === 0 && sum > 0;
          },

          /**
           * 校验身份证号
           * see http://www.xiaoxiaozi.com
           */
          idcardnoCheck = function (card) {

            var
                    vcity = {
                      11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
                      21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
                      33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
                      41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
                      46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南",
                      54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏",
                      65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
                    },

            //检查号码是否符合规范，包括长度，类型
                    isCardNo = function (card) {
                      //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
                      var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
                      if (reg.test(card) === false) {
                        return false;
                      }
                      return true;
                    },

            //取身份证前两位,校验省份
                    checkProvince = function (card) {
                      var province = card.substr(0, 2);
                      if (vcity[province] == undefined) {
                        return false;
                      }
                      return true;
                    },

            //检查生日是否正确
                    checkBirthday = function (card) {
                      var len = card.length;
                      //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
                      if (len == '15') {
                        var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
                        var arr_data = card.match(re_fifteen);
                        var year = arr_data[2];
                        var month = arr_data[3];
                        var day = arr_data[4];
                        var birthday = new Date('19' + year + '/' + month + '/' + day);
                        return verifyBirthday('19' + year, month, day, birthday);
                      }
                      //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
                      if (len == '18') {
                        var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
                        var arr_data = card.match(re_eighteen);
                        var year = arr_data[2];
                        var month = arr_data[3];
                        var day = arr_data[4];
                        var birthday = new Date(year + '/' + month + '/' + day);
                        return verifyBirthday(year, month, day, birthday);
                      }
                      return false;
                    },

            //校验日期
                    verifyBirthday = function (year, month, day, birthday) {
                      var now = new Date();
                      var now_year = now.getFullYear();
                      //年月日是否合理
                      if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
                        //判断年份的范围（3岁到100岁之间)
                        var time = now_year - year;
                        if (time >= 3 && time <= 100) {
                          return true;
                        }
                        return false;
                      }
                      return false;
                    },

            //15位转18位身份证号
                    changeFivteenToEighteen = function (card) {
                      if (card.length == '15') {
                        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                        var cardTemp = 0, i;
                        card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
                        for (i = 0; i < 17; i++) {
                          cardTemp += card.substr(i, 1) * arrInt[i];
                        }
                        card += arrCh[cardTemp % 11];
                        return card;
                      }
                      return card;
                    },

            //校验位的检测
                    checkParity = function (card) {
                      //15位转18位
                      card = changeFivteenToEighteen(card);
                      var len = card.length;
                      if (len == '18') {
                        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                        var cardTemp = 0, i, valnum;
                        for (i = 0; i < 17; i++) {
                          cardTemp += card.substr(i, 1) * arrInt[i];
                        }
                        valnum = arrCh[cardTemp % 11];
                        if (valnum == card.substr(17, 1)) {
                          return true;
                        }
                        return false;
                      }
                      return false;
                    };

            //是否为空
            if (!card) {
              return false;
            }
            //校验长度，类型
            if (!isCardNo(card)) {
              return false;
            }
            //检查省份
            if (!checkProvince(card)) {
              return false;
            }
            //校验生日
            if (!checkBirthday(card)) {
              return false;
            }
            //检验位的检测
            if (!checkParity(card)) {
              return false;
            }
            return true;
          };

  //非空验证
  validator.addMethod('notEmpty', function (value, element) {
    return this.optional(element) || $.trim(value);
  }, '不能为空');

  //非空格验证
  validator.addMethod('notSpace', function (value, element) {
    if (value.indexOf(" ") == -1) {
      return true;
    } else {
      return this.optional(element) || false;
    }
  }, '不能输入空格');

  //匹配一个空白行wkd。
  validator.addMethod('afterSpace', function (value, element) {
    var val = app.unformatPercent(value);
    var rangele = /^\[ \t]*$/;
    console.log(rangele.test(val))
    return this.optional(element) || (rangele.test(val));
  });

  //邮政编码验证
  validator.addMethod('isZipCode', function (value, element) {
    return this.optional(element) || (/^[0-9]{6}$/.test(value));
  }, '请正确填写您的邮政编码');

  //身份证验证
  validator.addMethod('isIDCard', function (value, element) {
    return this.optional(element) || idcardnoCheck(value);
  }, '请输入正确的身份证号');
  //证件号码
  validator.addMethod('isIdNUM', function (value, element) {
    return this.optional(element) || (/^[a-zA-Z0-9]{7,21}$/.test(value));
  }, '请输入正确的军人证件号！');
  //组织机构代码
  validator.addMethod('agencyCode', function (value, element) {
    return this.optional(element) || (/^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$/.test(value));
  }, '请输入正确的组织机构代码！');
  //营业执照
  validator.addMethod('businessLicense', function (value, element) {
    return this.optional(element) || (/^\d{15}$/.test(value));
  }, '请输入正确的营业执照！');
  //是否包含特殊字符
  validator.addMethod('isNotSpecialCharacter', function (value, element) {
    var containSpecial = RegExp(/[(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
//    return this.optional(element) || /[^~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ]/.test(value);
    return this.optional(element) || !containSpecial.test(value);
  }, '不能包含特殊字符');
  //新密码必须包含数字及大小写字母
  validator.addMethod('passwordCheck', function (value, element) {
    return this.optional(element) || /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]+$/.test(value);
  }, '新密码必须包含数字及大小写字母');

  //数字及大小写字母
  validator.addMethod('letterAndDigit', function (value, element) {
    return this.optional(element) || /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]+$/.test(value);
  }, '只限数字及大小写字母');

  //zj 数字或者大小写字母
  validator.addMethod('letterOrDigit', function (value, element) {
    return this.optional(element) || /^[0-9a-zA-Z]*$/.test(value);
  }, '只限数字或者大小写字母');
  //邮箱校验
  validator.addMethod("isEmail", function (value, element) {
    return this.optional(element) || (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value));
  }, "请输入正确的邮箱");

  //手机号验证
  validator.addMethod('isMobilePhone', function (value, element) {
    return this.optional(element) || /^1[3|4|5|7|8|][0-9]{9}$/.test(value);
  }, '请正确填写您的手机号');

  //银行卡验证
  validator.addMethod('isBankCard', function (value, element) {
    return this.optional(element) || luhnCheck(value);
  }, '请正确填写您的银行卡号');

  //QQ号验证
  validator.addMethod('isQQ', function (value, element) {
    var qq = /^[1-9][0-9]{4,10}$/;
    return this.optional(element) || /^[1-9][0-9]{4,10}$/.test(value);
  }, '请正确填写您的QQ号');

  //电话号验证（固话可通过）
  validator.addMethod('isPhone', function (value, element) {
    return this.optional(element) || /^((\+86)?|\(\+86\)|\+86\s)0?([1-9]\d-?\d{6,8}|[3-9][13579]\d-?\d{6,7}|[3-9][24680]\d{2}-?\d{6})(-\d{3})?$/.test(value);
  }, '请正确填写您的电话号');
  //请输入数字ln
  $.validator.addMethod('Rnumber', function (value, element) {
    return this.optional(element) || (/^\+?[0-9]*$/.test(value));
  }, '请输入数字');

  //验证手机号和电话号码ln
  $.validator.addMethod('telNumber', function (value, element) {
    return this.optional(element) || (/^1[3|4|5|7|8|][0-9]{9}$/.test(value) || /^((\+86)?|\(\+86\)|\+86\s)0?([1-9]\d-?\d{6,8}|[3-9][13579]\d-?\d{6,7}|[3-9][24680]\d{2}-?\d{6})(-\d{3})?$/.test(value));
  }, '请输入正确的电话号码！');


  validator.addMethod('nonnegativeInteger', function (value, element) {
    return this.optional(element) || (/^\+?[1-9][0-9]*$/.test(value));
  }, '请输入正整数');

  validator.addMethod('eqZeroMore', function (value, element) {
    return this.optional(element) || (/^(?:0|[1-9][0-9]*)$/.test(value));
  }, '请输入非负整数');

  //中文验证
  validator.addMethod("isChinese", function (value, element) {
    return this.optional(element) || (/^[\u4e00-\u9fa5]+$/.test(value));
  }, "请输入中文");

  //lh 非中文验证
  validator.addMethod("noChinese", function (value, element) {
    return this.optional(element) || (/^[^\u4e00-\u9fa5]+$/.test(value));
  }, "不能输入中文");

  /*lh url校验*/
  validator.addMethod("isURL", function (value, element) {
    /*return this.optional(element) || (/^http(s?):\/\/(?:[A-za-z0-9-]+\.)+[A-za-z]{2,4}(:\d+)?(?:[\/\?#][\/=\?%\-&~`@[\]\':+!\.#\w]*)?$/.test(value));*/
    return this.optional(element) || (/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/.test(value));
  }, "请输入正确的url");

  //lh 小数
  validator.addMethod("isDecimal", function (value, element) {
    return this.optional(element) || (/^([0-9]\d*(\.\d*[1-9])?)|(0\.\d*[1-9])$/.test(value));
  }, "不能输入中文");

  /*lxq 大于0数值*/
  validator.addMethod('moreZero', function (value, element) {
    var val = app.unformatMoney(value);
    var amount = /^(([1-9]\d*)|([0-9]\d*\.\d?[1-9]{1}))$/;
    return this.optional(element) || (amount.test(val));
  }, '请输入大于0的数值');

  //正数验证
  validator.addMethod("isDecimals", function (value, element) {
    console.log(value);
    return this.optional(element) || (/^\d{0,8}\.{0,1}(\d{1,4})?$/.test(value));
  }, "请输入数字,可保留不多于四位小数");

  //微信号检验
  validator.addMethod('isWeChat', function (value, element) {
    return this.optional(element) || /^[a-zA-Z\d_]{5,}$/.test(value);
  }, '请输入正确的微信号');

// wkd  0-100优化 lyf比例0-99.99
  validator.addMethod("HundredZero", function (value, element) {
    return this.optional(element) || (/^(([1-9]?[0-9](?:\.[0-9]{1,2})?)(%)?)$/.test(value));
  }, "整数部分0-99,小数最多两位");
  
  // 收取份数lyf:0-999
  validator.addMethod("widthThree", function (value, element) {
    return this.optional(element) || (/^(?:0|[1-9][0-9]*)$/.test(value));
  }, "请输入0-999之间正整数");

  /*利率动态获取最大值*/

  validator.addMethod("rate", function(value, element) {
    var rateVal = app.unformatPercentBj(value);
    var tf = /^(([1-9]?[0-9](?:\.[0-9]{1,2})?)(%)?)$/.test(value);
    var compare = false;
    var resultBool= (tf&&(app.csSyPaC.maxRt != null)&&(rateVal <= app.csSyPaC.maxRt));
    if(resultBool) {
        compare = true;
    }
    return this.optional(element) || compare;
  }, "请输入0-" + app.csSyPaC.maxRt + "的百分数,小数最多两位");


  /*金额动态获取最大值*/

  validator.addMethod("moneyMax", function (value, element) {
    var compare = true;
    var valueNum = app.unformatMoney(value);
    if (app.csSyPaC.maxLoAm != null) {
      if (valueNum > app.csSyPaC.maxLoAm) {
        compare = false;
      }
    }
    return this.optional(element) || compare;
  }, "金额不能超过" + app.csSyPaC.maxLoAm);



  //百分号验证
  validator.addMethod("isPercent", function (value, element) {
    return this.optional(element) || (/^\d*(\.\d+)?%$/.test(value));
  }, "请输入正确格式的百分数");

  //护照
  validator.addMethod('isPort', function (value, element) {
    return this.optional(element) || (/^1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/.test(value));
  }, '请输入正确的护照号码！');

  /**
   * zj自定义校验金额值不小于0的数值
   */

  validator.addMethod('minMoney', function (value, element) {
    var val = app.unformatMoney(value);
    var amount = /^\d*(\.\d+)?$/;
    return this.optional(element) || (amount.test(val));
  }, '请输入不小于 0 的数值');

  //需要大于与其关联的值:金额
  validator.addMethod("gtRelateMon", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    //获取比较的数据
    var gtRelateVal = app.unformatMoneyBj($('input[data-gtRelateMon=' + valueId + ']').val())
    //获取当前的数据转化成数字，是0也通过
    var valueNum = app.unformatMoneyBj(value);
    //判断是否都是正常的数字
    var isNumBool = app.isNumberBool(gtRelateVal)&&app.isNumberBool(valueNum);
    //获取比较结果：false则返回提示信息
    var compareRe = true;
    if (isNumBool) {
      if (app.csSyPaC.maxLoAm != null) {
        if (valueNum <= app.csSyPaC.maxLoAm && gtRelateVal <= app.csSyPaC.maxLoAm) {
          compareRe = (valueNum >= gtRelateVal);
          if (compareRe == true) {
            var tiDi = $('input[data-gtRelateMon=' + valueId + ']').parent();
            tiDi.find('span').remove();
            tiDi.removeClass("has-error");
            tiDi.parent().removeClass("has-error");
          }
        }
      } else {
        compareRe = (valueNum >= gtRelateVal);
        if (compareRe == true) {
          var tiDi = $('input[data-gtRelateMon=' + valueId + ']').parent();
          tiDi.find('span').remove();
          tiDi.removeClass("has-error");
          tiDi.parent().removeClass("has-error");
        }
      }

    }

    return this.optional(element) || compareRe;
  }, function (value, element) {
    //动态配置提示信息对稳定html结构 .parent().prev('label')
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-gtRelateMon=' + valueId + ']').parent().prev('label').html();
    if (prevHtml) {
      var compareLabel = '需大于等于' + $('input[data-gtRelateMon=' + valueId + ']').parent().prev('label').html();
      return compareLabel;
    } else {
      return '需大于对应的最小值';
    }
  });
  //需要小于等于与其关联的值
  validator.addMethod("ltRelateMon", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    var ltRelateVal = app.unformatMoneyBj($('input[data-ltRelateMon=' + valueId + ']').val())
    var valueNum = app.unformatMoneyBj(value);
    var isNumBool = app.isNumberBool(ltRelateVal)&&app.isNumberBool(valueNum);
    var compareRe = true;
    if (isNumBool) {
      if ( app.csSyPaC.maxLoAm != null) {
        if (valueNum <= app.csSyPaC.maxLoAm && ltRelateVal <= app.csSyPaC.maxLoAm) {
          compareRe = (valueNum <= ltRelateVal);
          if (compareRe == true) {
            var tiDi = $('input[data-ltRelateMon=' + valueId + ']').parent();
            tiDi.find('span').remove();
            tiDi.removeClass("has-error");
            tiDi.parent().removeClass("has-error");
          }
        }
      } else {
        compareRe = (valueNum <= ltRelateVal);
        if (compareRe == true) {
          var tiDi = $('input[data-ltRelateMon=' + valueId + ']').parent();
          tiDi.find('span').remove();
          tiDi.removeClass("has-error");
          tiDi.parent().removeClass("has-error");
        }
      }

    }

    return this.optional(element) || compareRe;
  }, function (value, element) {
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-ltRelateMon=' + valueId + ']').parent().prev('label').html();
    if (prevHtml) {
      var compareLabel = '需小于等于' + $('input[data-ltRelateMon=' + valueId + ']').parent().prev('label').html();
      return compareLabel;
    } else {
      return '需小于等于对应的最大值';
    }

  });

  /*lyf利率校验*/
  //需要大于与其关联的值：利率
  validator.addMethod("gtRelatePer", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    //获取比较的数据
    var gtRelateVal = app.unformatPercentBj($('input[data-gtRelatePer=' + valueId + ']').val())
    //获取当前的数据
    var valueNum = app.unformatPercentBj(value);
    //判断是否都是正常的数字
    var isNumBool = app.isNumberBool(gtRelateVal)&&app.isNumberBool(valueNum);
    //获取比较结果：false则返回提示信息
    var compareRe = true;
    if (isNumBool) {
      if (app.csSyPaC.maxRt != null) {
        if (valueNum < app.csSyPaC.maxRt && gtRelateVal < app.csSyPaC.maxRt) {
          compareRe = (parseFloat(valueNum) > parseFloat(gtRelateVal));
          if (compareRe == true) {
            var tiDi = $('input[data-gtRelatePer=' + valueId + ']').parent();
            tiDi.find('span').remove();
            tiDi.removeClass("has-error");
            tiDi.parent().removeClass("has-error");
          }
        }
      } else {
        compareRe = (parseFloat(valueNum) > parseFloat(gtRelateVal));
        if (compareRe == true) {
          var tiDi = $('input[data-gtRelatePer=' + valueId + ']').parent();
          tiDi.find('span').remove();
          tiDi.removeClass("has-error");
          tiDi.parent().removeClass("has-error");
        }
      }


    }
    return this.optional(element) || compareRe;
  }, function (value, element) {
    //动态配置提示信息对稳定html结构 .parent().prev('label')
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-gtRelatePer=' + valueId + ']').parent().prev('label').html();
    if (prevHtml) {
      var compareLabel = '需大于' + $('input[data-gtRelatePer=' + valueId + ']').parent().prev('label').html();
      return compareLabel;
    } else {
      return '需大于对应的最小值';
    }


  });
  //需要小于与其关联的值
  validator.addMethod("ltRelatePer", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    var ltRelateVal = app.unformatPercentBj($('input[data-ltRelatePer=' + valueId + ']').val())
    var valueNum = app.unformatPercentBj(value);
    var isNumBool = app.isNumberBool(ltRelateVal)&&app.isNumberBool(valueNum);
    var compareRe = true;
    if (isNumBool) {
      if (app.csSyPaC.maxRt != null) {
        if (valueNum < app.csSyPaC.maxRt && ltRelateVal < app.csSyPaC.maxRt) {
          compareRe = (parseFloat(valueNum) < parseFloat(ltRelateVal));
          if (compareRe == true) {
            var tiDi = $('input[data-ltRelatePer=' + valueId + ']').parent();
            tiDi.find('span').remove();
            tiDi.removeClass("has-error");
            tiDi.parent().removeClass("has-error");
          }
        }
      } else {
        compareRe = (parseFloat(valueNum) < parseFloat(ltRelateVal));
        if (compareRe == true) {
          var tiDi = $('input[data-ltRelatePer=' + valueId + ']').parent();
          tiDi.find('span').remove();
          tiDi.removeClass("has-error");
          tiDi.parent().removeClass("has-error");
        }
      }
    }
    return this.optional(element) || compareRe;
  }, function (value, element) {
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-ltRelatePer=' + valueId + ']').parent().prev('label').html();
    if (prevHtml) {
      var compareLabel = '需小于' + $('input[data-ltRelatePer=' + valueId + ']').parent().prev('label').html();
      return compareLabel;
    } else {
      return '需小于对应的最大值'
    }

  });
  
  
  /**
   *lyf交集校验
   */
  validator.addMethod('isInclude', function(value, element) {
    var allTr = $(element).parents('#rateDisTableBody').find('tr');
    var thisTr = $(element).parents('tr');
    var $thisVal = thisTr.find('select.promCondPmId ').val();
    var $index = $(element).parents("tr").index();
    var flag = true;
    if(allTr.length > 1) {
      for(var i = 0; i < allTr.length; i++) {
        if($index != i) {
          var $otherTr = allTr.eq(i);
          var $otherVal = $otherTr.find('select.promCondPmId').val();
          if(($otherVal != undefined) && ($thisVal != undefined) && ($otherVal == $thisVal)) {
            var $otherMinT = ($otherTr.find('.promCondMinPlQt').val()) * 1;
            var $otherMaxT = ($otherTr.find('.promCondMaxPlQt').val()) * 1;
            var $thisMinT = (thisTr.find('.promCondMinPlQt').val()) * 1;
            var $thisMaxT = (thisTr.find('.promCondMaxPlQt').val()) * 1;
            if(($otherMinT != "") && ($otherMaxT != "")) {
              if(((value < $otherMinT) || (value > $otherMaxT))) {
                if($thisMinT <= $thisMaxT) {
                  var comBool = (($thisMinT < $otherMinT) && ($thisMaxT < $otherMinT)) || (($thisMinT > $otherMaxT) && ($thisMaxT > $otherMaxT));
                  if(comBool) {
                    flag = true;
                  } else {
                    flag = false;
                  }
                }
              } else {
                flag = false;
              }
            }
          }
        }
      }
    }
    return this.optional(element) || flag;
  }, "与其他行内的期限有交集");
  
  
  //最大值大于最小值
  validator.addMethod("gtTo", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    //根据id获取比较的数据
    var gtRelateVal = $('input[data-gtTo=' + valueId + ']').val();
    //都有值才去获取比较结果：false则返回提示信息
    var isNumBool = app.isNumberBool(gtRelateVal)&&app.isNumberBool(value);
    var compareRe = true;
    if (isNumBool) {
      if (app.csSyPaC.maxPerQt != null) {
        if (value <= app.csSyPaC.maxPerQt && gtRelateVal <= app.csSyPaC.maxPerQt) {
          compareRe = (parseInt(value) >= gtRelateVal);
          if (compareRe == true) {
            var tiDi = $('input[data-gtTo=' + valueId + ']').parent();
            tiDi.find('span').remove();
            tiDi.removeClass("has-error");
            tiDi.parent().removeClass("has-error");
          }
        }
      } else {
        compareRe = (parseInt(value) >= gtRelateVal);
        if (compareRe == true) {
          var tiDi = $('input[data-gtTo=' + valueId + ']').parent();
          tiDi.find('span').remove();
          tiDi.removeClass("has-error");
          tiDi.parent().removeClass("has-error");
        }
      }

    }
    return this.optional(element) || compareRe;
  }, function (value, element) {
    //动态配置提示信息对稳定html结构 .parent().prev('label')
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-gtTo=' + valueId + ']').parent().prev('label').html();
    if (prevHtml) {
      var compareLabel = '需大于' + $('input[data-gtTo=' + valueId + ']').parent().prev('label').html();
      return compareLabel;
    }
    return '需大于等于对应的最小值';

  });

  //最小值小于最大值
  validator.addMethod("ltTo", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    //根据id获取比较的数据
    var ltRelateVal = $('input[data-ltTo=' + valueId + ']').val();
    //都有值才去获取比较结果：false则返回提示信息
    var isNumBool = app.isNumberBool(ltRelateVal)&&app.isNumberBool(value);
    var compareRe = true;
    if (isNumBool) {
      if (app.csSyPaC.maxPerQt != null) {
        if (value <= app.csSyPaC.maxPerQt && ltRelateVal <= app.csSyPaC.maxPerQt) {
          compareRe = (parseInt(value) <= ltRelateVal);
          if (compareRe == true) {
            var tiDi = $('input[data-ltTo=' + valueId + ']').parent();
            tiDi.find('span').remove();
            tiDi.removeClass("has-error");
            tiDi.parent().removeClass("has-error");
          }
        }
      } else {
        compareRe = (parseInt(value) <= ltRelateVal);
        if (compareRe == true) {
          var tiDi = $('input[data-ltTo=' + valueId + ']').parent();
          tiDi.find('span').remove();
          tiDi.removeClass("has-error");
          tiDi.parent().removeClass("has-error");
        }
      }

    }
    return this.optional(element) || compareRe;
  }, function (value, element) {
    //动态配置提示信息对稳定html结构 .parent().prev('label')
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-ltTo=' + valueId + ']').parent().prev('label').html();
    if (prevHtml) {
      var compareLabel = '需小于' + $('input[data-ltTo=' + valueId + ']').parent().prev('label').html();
      return compareLabel;
    }
    return '需小于等于对应的最大值';
  });

  //lh 需大于等于对应的最小日期
  validator.addMethod("gtTimeValidate", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    //根据id获取比较的数据
    var gtRelateVal = $('input[data-gtTimeValidate=' + valueId + ']').val();
    var reg = /-/g;
    gtRelateVal = gtRelateVal.replace(reg, '');
    gtRelateVal = parseInt(gtRelateVal);
    //都有值才去获取比较结果：false则返回提示信息
    var compareRe = true;
    if (!!value && !!gtRelateVal) {
      value = value.replace(reg, '');
      compareRe = (parseInt(value) >= gtRelateVal);
    }
    return this.optional(element) || compareRe;
  }, function (value, element) {
    //动态配置提示信息对稳定html结构 .parent().prev('label')
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-gtTimeValidate=' + valueId + ']').parents(".selBox").prev('label').html();
    var groupHtml= $('input[data-ltTimeValidate=' + valueId + ']').parent().prev().html();
    if (groupHtml == "至") {
      return '需大于等于对应初始日期';
    }else if (prevHtml) {
      var compareLabel = '需大于等于' + prevHtml;
      return compareLabel;
    }
    return '需大于等于初始日期';

  });

  //lh 需小于等于对应的最大日期
  validator.addMethod("ltTimeValidate", function (value, element) {
    //获取当前的数据id
    var valueId = $(element).attr('id');
    //根据id获取比较的数据
    var gtRelateVal = $('input[data-ltTimeValidate=' + valueId + ']').val();
    var reg = /-/g;
    gtRelateVal = gtRelateVal.replace(reg, '');
    gtRelateVal = parseInt(gtRelateVal);
    //都有值才去获取比较结果：false则返回提示信息
    var compareRe = true;
    if (!!value && !!gtRelateVal) {
      value = value.replace(reg, '');
      compareRe = (parseInt(value) <= gtRelateVal);
    }
    return this.optional(element) || compareRe;
  }, function (value, element) {
    //动态配置提示信息对稳定html结构 .parent().prev('label')
    var valueId = $(element).attr('id');
    var prevHtml = $('input[data-ltTimeValidate=' + valueId + ']').parents(".selBox").prev('label').html();
    var groupHtml= $('input[data-ltTimeValidate=' + valueId + ']').parent().prev().html();
    if (groupHtml == "至") {
      return '需小于等于对应结束日期';
    }else if (prevHtml) {
      var compareLabel = '需小于等于' + prevHtml;
      return compareLabel;
    }
    return '需小于等于结束日期';

  });

  /**
   * zj限制金额数值整数部分1-13位，小数点0-2位
   */
  validator.addMethod('lengthMoney', function (value, element) {
    var val = app.unformatMoney(value);
    var lengthM = /^\d{1,13}(\.\d{0,2})?$/;
    return this.optional(element) || (lengthM.test(val));
  }, '请输入整数部分为1-13位的，小数部分0-2位的数值');

  /**
   * zj百分比限制1-8校验
   */
  validator.addMethod('amtLength', function (value, element) {
    var val = app.unformatPercent(value);
    var rangele = /^\d{1}\.\d{0,6}$/;
    return this.optional(element) || (rangele.test(val));
  }, '最大长度为8位');

  /**
   *zj自定义校验输入的百分比0-100%之间
   */
  validator.addMethod('percentRange', function (value, element) {
    var val = app.unformatPercent(value);
    return this.optional(element) || val >= 0 && val <= 1;
  }, '请输入0-100%之间的值');

  /**
   *lxq 限制非金额数值整数部分1-13位，小数点0-2位
   */
  validator.addMethod('numLength', function (value, element) {
    var lengthM = /^\d{1,13}(\.\d{0,2})?$/;
    return this.optional(element) || (lengthM.test(value));
  }, '请输入整数为1-13位的,小数为0-2位且不小于0的数值');


  /**
   *lyf
   */
  validator.addMethod('fileType', function (value, element) {
    var FileExt = value.replace(/.+\./, "");
    var lengthM = "rpx";
    return this.optional(element) || (lengthM == FileExt);
  }, '请上传rpx格式的文件');
  
  

  //zj jquery.validate远程验证修改
  /**
   * 1.将valid变量的声明移动到ajax调用和success函数之外，以便进行关闭，并为其指定默认值“pending”。
   2.将valid变量的旧声明更改为赋值。
   3.返回valid变量而不是常量“pending”。
   */
  validator.addMethod("synchronousRemote", function (value, element, param) {
    if (this.optional(element)) {
      return "dependency-mismatch";
    }

    var previous = this.previousValue(element);
    if (!this.settings.messages[element.name]) {
      this.settings.messages[element.name] = {};
    }
    previous.originalMessage = this.settings.messages[element.name].remote;
    this.settings.messages[element.name].remote = previous.message;

    param = typeof param === "string" && { url: param } || param;

    if (previous.old === value) {
      return previous.valid;
    }

    previous.old = value;
    var validator = this;
    this.startRequest(element);
    var data = {};
    data[element.name] = value;
    var valid = "pending";
    $.ajax($.extend(true, {
      url: param,
      async: false,
      mode: "abort",
      port: "validate" + element.name,
      dataType: "json",
      data: data,
      success: function (response) {
        validator.settings.messages[element.name].remote = previous.originalMessage;
        valid = response === true || response === "true";
        if (valid) {
          var submitted = validator.formSubmitted;
          validator.prepareElement(element);
          validator.formSubmitted = submitted;
          validator.successList.push(element);
          delete validator.invalid[element.name];
          validator.showErrors();
        } else {
          var errors = {};
          var message = response || validator.defaultMessage(element, "remote");
          errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
          validator.invalid[element.name] = true;
          validator.showErrors(errors);
        }
        previous.valid = valid;
        validator.stopRequest(element, valid);
      }
    }, param));
    return valid;
  }, "Please fix this field.");


}(window.jQuery, window.app, window.jQuery.validator);

/**
 * JQuery validation 兼容  Bootstrap输入框图标样式
 */
+function ($, app) {
  $.validator.setDefaults({
    highlight: function (element) {
      $(element).closest('.form-group').addClass('has-error');
      $(element).closest('.details-address').addClass('has-error');
    },

    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-error');
      $(element).closest('.details-address').removeClass('has-error');
    },

    success: function (label) {
      label.closest('.form-group').removeClass('has-error');
    },

    ignore: '',

    errorElement: 'span',

    errorClass: 'help-block help-block-error',

    errorPlacement: function (error, element) {
      if (element.parent('.input-group').length) {
        error.insertAfter(element.parent('.input-group'));
      } else if (element.attr('data-error-container')) {
        error.appendTo(element.attr('data-error-container'));
      } else if (element.parents('.radio-list').length) {
        error.appendTo(element.parents('.radio-list').attr('data-error-container'));
      } else if (element.parents('.radio-inline').length) {
        error.appendTo(element.parents('.radio-inline').attr('data-error-container'));
      } else if (element.parents('.checkbox-list').length) {
        error.appendTo(element.parents('.checkbox-list').attr('data-error-container'));
      } else if (element.parents('.checkbox-inline').length) {
        error.appendTo(element.parents('.checkbox-inline').attr('data-error-container'));
      } else {
        error.insertAfter(element);
      }
    }
  });

  app.bindFormValidation = function (form, options) {
    var formValidator = $(form).validate(options);
    //
    //自动为required增加非空校验
    //
    $(form)
            .attr('autocomplete', 'off')
            .find('[type="text"],[type="password"],textarea')
            .filter('[data-rule-required]:not([data-corn]),[required]:not([data-corn]),.required:not([data-corn])')
            .each(function () {
              $(this).rules('add', {notEmpty: true, notSpace: true});
            });

    return formValidator;
  };

}(window.jQuery, window.app);
