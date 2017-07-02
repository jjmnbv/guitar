/**
 * jquery.validate 扩展
 */
+ function($, app, validator) {
  var
    /**
     * 使用luhn算法（https://en.wikipedia.org/wiki/Luhn_algorithm）校验银行卡号
     * see https://gist.github.com/ondrek/6979558
     */
    luhnCheck = function(str) {
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
    idcardnoCheck = function(card) {

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
        isCardNo = function(card) {
          //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
          var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
          if (reg.test(card) === false) {
            return false;
          }
          return true;
        },

        //取身份证前两位,校验省份
        checkProvince = function(card) {
          var province = card.substr(0, 2);
          if (vcity[province] == undefined) {
            return false;
          }
          return true;
        },

        //检查生日是否正确
        checkBirthday = function(card) {
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
        verifyBirthday = function(year, month, day, birthday) {
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
        changeFivteenToEighteen = function(card) {
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
        checkParity = function(card) {
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
  validator.addMethod('notEmpty', function(value, element) {
    return $.trim(value);
  }, '不能为空');

  //邮政编码验证  
  validator.addMethod('isZipCode', function(value, element) {
    return this.optional(element) || (/^[0-9]{6}$/.test(value));
  }, '请正确填写您的邮政编码');

  //身份证验证
  validator.addMethod('isIDCard', function(value, element) {
    return idcardnoCheck(value);
  }, '请输入正确的身份证号');

  //是否包含特殊字符
  validator.addMethod('isNotSpecialCharacter', function (value, element) {
    var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
//    return this.optional(element) || /[^~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ]/.test(value);
    return this.optional(element) || !containSpecial.test(value);
  }, '不能包含特殊字符');
  //新密码必须包含数字及大小写字母
  validator.addMethod('passwordCheck', function (value, element) {
	  var containSpecial = RegExp(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]+$/);
	  return containSpecial.test(value);
  }, '新密码必须包含数字及大小写字母');

  //手机号验证
  validator.addMethod('isMobilePhone', function(value, element) {
    return this.optional(element) || /^1[3|5|7|8|][0-9]{9}$/.test(value);
  }, '请正确填写您的手机号');

  //银行卡验证
  validator.addMethod('isBankCard', function(value, element) {
    return this.optional(element) || luhnCheck(value);
  }, '请正确填写您的银行卡号');

  //QQ号验证
  validator.addMethod('isQQ', function(value, element) {
    var qq = /^[1-9][0-9]{4,10}$/;
    return this.optional(element) || /^[1-9][0-9]{4,10}$/.test(value);
  }, '请正确填写您的QQ号');

  //电话号验证（固话手机皆可通过）
  validator.addMethod('isPhone', function(value, element) {
    return this.optional(element) || /^((\+86)?|\(\+86\)|\+86\s)0?([1-9]\d-?\d{6,8}|[3-9][13579]\d-?\d{6,7}|[3-9][24680]\d{2}-?\d{6})(-\d{3})?$/.test(value);
  }, '请正确填写您的电话号');

  validator.addMethod('nonnegativeInteger', function(value, element) {
    return this.optional(element) || (/^\+?[1-9][0-9]*$/.test(value));
  }, '请输入正整数');

  //中文验证
  validator.addMethod("isChinese",function(value,element){
    return this.optional(element) || (/^[\u4e00-\u9fa5]+$/.test(value));
  },"请输入中文");
  
  //正数验证
  validator.addMethod("isDecimals",function(value,element){
    return this.optional(element) || (/^\d{0,8}\.{0,1}(\d{1,4})?$/.test(value));
  },"请输入数字,可保留不多于四位小数");

} (window.jQuery, window.app, window.jQuery.validator);

/**
 * JQuery validation 兼容  Bootstrap输入框图标样式
 */
+ function($, app) {
  $.validator.setDefaults({
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },

    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },

    success: function(label) {
      label.closest('.form-group').removeClass('has-error');
    },

    ignore: '',

    errorElement: 'span',

    errorClass: 'help-block help-block-error',

    errorPlacement: function(error, element) {
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

  app.bindFormValidation = function(form, options) {
    var formValidator = $(form).validate(options);
    //
    //自动为required增加非空校验
    //
    $(form)
      .find('[type="text"],[type="password"]')
      .filter('[data-rule-required],[required]')
      .each(function() {
        $(this).rules('add', { notEmpty: true });
      });

    return formValidator;
  };

} (window.jQuery, window.app);
