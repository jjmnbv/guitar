/**
 * 基础路径信息
 */
+function($, app) {
    $.extend(app, {
        base: '',
        style: 'vertical',
        path: {
            app: '/static/app/1.0.0',
            deserialize: '/static/lib/jquery-deserialize/1.3.3',
            google: '/static/lib/google',
            handlebars: '/static/lib/handlebars/4.0.4',
            html5shiv: '/static/lib/html5shiv/3.7.3',
            metronic: '/static/lib/metronic/4.5.2'
        },
        requestUrl: window.location.href.replace(/(http|https):\/\/[^\/]+/, '')
    });
} (window.jQuery, window.app);

/**
 * 解析url参数到app
 */
+function ($, app) {
    var urlSearch = function(url){
        var param = {};
        var num = url.indexOf("?")
        url = url.substr(num + 1);
        var arr = url.split("&");
        $.each(arr, function(i, v){
            num = v.indexOf("=");
            if (num > 0) {
                var name = v.substring(0, num);
                var value = v.substr(num + 1);
                param[name] = value;
            }
        });
        return param;
    }
    var request = new urlSearch(window.location.href);
    $.extend(app, { request: request });
} (window.jQuery, window.app);

/**
 * app对象上挂载函数
 */
+ function($, app, instance) {

  var alert = function(message, style) {
    if(!toastr) {
      return;
    }
    toastr.clear();
    toastr.options = {
      positionClass: 'toast-top-center',
      timeOut: 1000
    };
    toastr[style](message);
  };

  /**
   * 再次加载查询列表数据，相当于模拟点击查询按钮
   */
  app.loadData = function() {
    $('.pagination-query').trigger('click');
    removeNothing();
  };

  /*lh 页面没有查询条件时 刷新列表*/
  app.reloadData = function() {
    $('.pagination-reload').trigger('click');
    removeNothing();
  };

  /* lh 相当于alert 的提示框 */
  app.alertTxt = function(string){
    var el=$('#pageModal');
    var body = el.find('[data-modal-body]');
    body.html(string);
    el.find('[data-modal-size]').addClass('modal-sm');
    el.find('[data-modal-footer]').html('<button data-dismiss="modal" type="button" class="btn blue">确定</button>');
    el.modal();
  };

  /**
   * 动态注册根据值获取显示文本的helper，用于列表模板中显示（字典）值字段对应的text
   */
  app.registerTextHelper = function(field, objs, vkey, tkey) {
    var cache = {},
      pfx = field + '-';
    for(var i in objs) {
      cache[pfx + objs[i][vkey]] = objs[i][tkey];
    }

    instance.registerHelper(field.replace('\.', '-') + '-text', function(options) {
      var ret = cache[pfx + app.getNestedProperty(field, this)];
      if(ret) {
        return ret;

      }else{
        return app.getNestedProperty(field, this)
      }
    });
  };

  var jqueryPreprocess = function(resp) {
    if (resp.errorCode && resp.errorCode == 'ERROR_NOAUTH') {
      window.location.href = app.loginurl + '?redirectURI=' + encodeURIComponent(window.location.href);
    }
  };

  /**
   * ajax提交表单
   */
  app.$submit = function(form, type) {
    if(form.valid()) {
      return $.post(form[0].action, form.serialize(), function(data, textStatus, jqXHR) {
        //超时跳转到登录
        jqueryPreprocess(data);
      }, type);
    }
  };

  /**
   * ajax提交数据
   */
  app.$post = function(url, data, type) {
    return $.post(url, data, function(data, textStatus, jqXHR) {
      //超时跳转到登录
      jqueryPreprocess(data);
    }, type || 'json');
  };

  /**
   * ajax提交数据hezc
   */
  app.$ajax = function(url, data, type, async, contentType, fn) {
    $.ajax({
      type: type,
      async: async,
      contentType: contentType != null ? contentType : 'application/json',
      dataType: 'json',
      cache: false,
      url: url,
      data: data,
      success: function(data, textStatus, jqXHR) {
        jqueryPreprocess(data);
        fn(data);
      },
      error: function() {
        fn('');
      }
    });
  };

  /**
   * ajax 获取数据
   */
  app.$get = function(url, data) {
    return $.get(url, data, function(data, textStatus, jqXHR) {
      //超时跳转到登录
      jqueryPreprocess(data);
    });
  };

  /**
   * ajax 获取JSON
   */
  app.$getJSON = function(url, data) {
    return $.getJSON(url, data, function(data, textStatus, jqXHR) {
      //超时跳转到登录
      jqueryPreprocess(data);
    });
  };

  /**
   * ajax是否返回成功
   */
  app.isOK = function(resp) {
    if(resp.resultCode == 'SUCCESS') {
      return true;
    } else if(resp.errorCode == 'ERROR_NOAUTH') {
      window.location.href = app.loginurl + '?redirectURI=' + encodeURIComponent(window.location.href);
      return false;
    }
  };

  /**
   * 提示成功消息
   */
  app.alertOK = function(message) {
    alert(message, 'success');
  };

  /**
   * 提示错误信息
   */
  app.alertError = function(message) {
    alert(message, 'error');
  };

  /**
   * 获取对象嵌套属性
   * app.getNestedProperty('a.b.c',{a:{b:{c:1}}})
   */
  app.getNestedProperty = function(path, obj) {
    if(!obj) {
      return null;
    }

    if(!path) {
      return obj;
    }

    //    var arr = path.split('.');
    //    while (arr.length && (obj = obj[arr.shift()]));
    obj = eval('obj.' + path);

    return obj;
  };

  //zj将数值四舍五入(保留小数)后格式化成金额形式
  app.formatCurrencyM = function(value, pos) {
    if(isNaN(value) || value == 0) {
      return '0.00'
    } else {
      pos = 2;
      var num = parseFloat(value).toFixed(pos);
      sign = (num == (num = Math.abs(num)));
      num = Math.floor(num * 100 + 0.50000000001);
      cents = num % 100;
      num = Math.floor(num / 100).toString();
      if(cents < 10) cents = "0" + cents;
      for(var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      return(((sign) ? '' : '-') + num + '.' + cents);
    }

  };

  //zj将格式化的金额转换为数值
  app.unformatMoney = function(value) {
    var num = parseFloat(value.replace(/,/g, ''));
    return(isNaN(num) ? 0 : num);
  };
  
  //lyf将格式化的金额转换为数值
  app.unformatMoneyBj = function(value) {
    var num = parseFloat(value.replace(/,/g, ''));
    return(isNaN(num) ? '' : num);
  };

  //zj将数值格式化成百分比形式
  app.formatPercent = function(value, pos) {
    var num;
    pos = 4;
    num = parseFloat(value).toFixed(pos);
    if(num) {
      return(isNaN(num) ? 0 : (num + '%'));
    } else if(num == 0) {
      return num + '%';
    }
  };

  //zj将百分比形式转换为数值格式
  app.unformatPercent = function(value, pos) {
      var num;
      pos = 6;
      //console.log(value);
      var valueNum = value.replace("%", "");
      //console.log(valueNum);
      num = (parseFloat(valueNum) / 100).toFixed(pos);
      return(isNaN(num) ? 0 : num);
  }

  //lyf将数值格式化成百分比形式
  app.formatPercentBj = function(value, pos) {
    var tf = /^(?:100(\.0{1,2})?(%)?|([1-9]?[0-9](?:\.[0-9]{1,2})?)(%)?)$/.test(value);
    if(tf) {
      var num = parseFloat(value);
      //      pos=4;
      //      num = (parseFloat(value)*100).toFixed(pos);
      if(num) {
        return(isNaN(num) ? 0 : (num + '%'));
      } else if(num == 0) {
        return num + '%';
      }
    } else {
      return value;
    }
  };

  //lyf将百分比形式转换为数值格式
  app.unformatPercentBj = function(value, pos) {
    var num = value;
    var valueNum = num.replace("%", "");
    return(isNaN(valueNum) ? 0 : valueNum);
  }

  //lyf将数值四舍五入(保留小数)后格式化成金额形式,金额是0就是空
  app.formatCurrencyMBj = function(value, pos) {
    if(value) {
      var num = parseFloat(value).toFixed(2);
      num = num.toString().replace(/\$|\,/g, '');
      if(isNaN(num)) num = "0";
      sign = (num == (num = Math.abs(num)));
      num = Math.floor(num * 100 + 0.50000000001);
      cents = num % 100;
      num = Math.floor(num / 100).toString();
      if(cents < 10) cents = "0" + cents;
      for(var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      return(((sign) ? '' : '-') + num + '.' + cents);
    }

  };

  //zj将金额转大写
  app.numToCny = function(money) {
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if(money == '') {
      return '';
    }
    money = parseFloat(money);
    if(money >= maxNum) {
      //超出最大处理数字
      return '';
    }
    if(money == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if(money.indexOf('.') == -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if(parseInt(integerNum, 10) > 0) {
      var zeroCount = 0;
      var IntLen = integerNum.length;
      for(var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if(n == '0') {
          zeroCount++;
        } else {
          if(zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if(m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分
    if(decimalNum != '') {
      var decLen = decimalNum.length;
      for(var i = 0; i < decLen; i++) {
        var n = decimalNum.substr(i, 1);
        if(n != '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if(chineseStr == '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if(decimalNum == '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  };
  
  //lyf将百分比形式转换为数值格式
  app.isNumberBool = function(value) {
    var isNumberBV =/^(([1-9]?[0-9](?:\.[0-9]{1,2})?)(%)?)$/.test(value);
    return isNumberBV;
  }

  /*ln 模拟获得jsp数据格式*/
  app.csSyPaC = {
    "loTyNo": null,
    "ve": null,
    "crDt": null,
    "crDtAt": null,
    "laUpDt": null,
    "laUpDtAt": null,
    "laUpUsId": null,
    "loTyNa": null,
    "maxPerQt": null,
    "maxLoAm": null,
    "perOpt": null,
    "maxRt": null,
    "ovRtAdjPe": null,
    "maxBackGooDa": null
  };

}(window.jQuery, window.app, Handlebars);


/**
 * Jquery的全局设置
 */
+ function($, app) {
  /**
   * 全局ajax错误提示
   */
  $.ajaxSetup({
    error: function(xhr, status, e) {
      //
      //关闭加载提示
      //
      if(App && App.stopPageLoading) {
        App.stopPageLoading();
      }

      if(xhr.status == 401) {
        //        app.alertError('没有权限，请联系管理员.');
      } else if(xhr.responseText.indexOf('<body class="login">') > 0) {
        app.alertError('没有登录，或登录超时退出');
        window.location.href = app.loginurl + '?redirectURI=' + encodeURIComponent(window.location.href);
      } else {
        app.alertError('服务暂时不可用，请稍后再试.');
      }
    },
    cache: false
  });

  $(document).ajaxError(function(event, request, settings) {
    if(request.status == 401) {
      app.alertError('没有权限[' + settings.url.substring(0, settings.url.indexOf('?')) + ']，请联系管理员.');
    }
  });

  /**
   * 序列化jQuery对象为JSON对象
   */
  $.fn.serializeObject = function() {
    var obj = {};

    $.each(this.serializeArray(), function(i, o) {
      var n = o.name,
        v = o.value;

      if(obj[n]) {
        if($.isArray(obj[n])) {
          obj[n].push(v);
        } else {
          obj[n] = [obj[n], v];
        }
      } else {
        obj[n] = v;
      }
    });

    return obj;
  };

  /**
   * 反序列化JSON对象到form
   */
  $.fn.deserializeObject = function(obj) {
    obj = $.extend({}, obj);

    //
    //对象扁平化
    //
    this.map(function() {
      var elements = $.prop(this, "elements");
      return elements ? $.makeArray(elements) : this;
    }).each(function() {
      var n = this.name;
      if(n && n.indexOf('.') != -1 && !obj.hasOwnProperty(n)) {
        obj[n] = app.getNestedProperty(n, obj);
      }
    });

    $(this).deserialize(obj, {
      //
      //反序列化每一form元素时的回调
      //
      change: function(value) {
        var elem = $(this);
        if(elem.is('.jstreeselect-hidden-input')) {
          elem.jstreeVal(value);
        } else if(elem.is('.jstreemultiselect-hidden-input')) {
          elem.jstreemultiVal(value);
        } else if(elem.is('.select2-hidden-accessible > option')) {
          elem.val(value).trigger("change");
        } else if(elem.is('[data-selectloader-store] > option')) {
          elem.val(value).trigger("change");
        } else if(elem.is('[data-radioloader-name] input[type="radio"]')) {
          elem.val(value).trigger("change");
        } else if(elem.is('[data-checkboxloader-name] input[type="checkbox"]')) {
          elem.val(value).trigger("change");
          /*ln 文本框显示 回显*/
        } else if(elem.is('textarea')) {
          elem.val(value);
        }
      }
    });
    //重新渲染
    $.uniform.update();
  };

}(window.jQuery, window.app);


/*
* dom触发事件
*/
$(function() {

  /* 格式化输入框的值 */
  $(document).on('blur', '.bindEvent', function(event) {
    var inputJqObj = $(event.target);
    inputJqObj.removeAttr('maxlength');
    var inputJqVal = inputJqObj.val();
    inputJqObj.siblings('input[type=hidden]').val(app.unformatMoney(inputJqVal));
    inputJqObj.val(app.formatCurrencyM(inputJqVal));
    $(this).parents("form").validate().element($(this));
  });

  /* 聚焦数值化 */
  $(document).on('focus', "input.bindEvent:not([readonly])", function(event) {
    //聚焦金额加上最小值校验
    $(event).addClass("minMoney");
    var inputJqObj = $(event.target);
    var inputJqVal = null;
    inputJqObj.attr('maxlength', 10);
    if(inputJqObj.val()) {
      inputJqVal = inputJqObj.val();
      inputJqObj.val(app.unformatMoney(inputJqVal));
    }
  });

  /* 比例格式化输入框的值 */
  $(document).on('blur', '.percentFormat', function(event) {
    var inputJqObj = $(event.target);
    var inputJqVal = inputJqObj.val();
    inputJqObj.val(app.formatPercentBj(inputJqVal));
    if(inputJqVal == '') {
      inputJqObj.siblings('input[type=hidden]').val(inputJqVal);
    } else if(app.formatPercentBj(inputJqVal) && $(this).parents("form").validate().element($(this))) {
      inputJqObj.siblings('input[type=hidden]').val(app.unformatPercentBj(inputJqVal));
    }
    $(inputJqObj).addClass('HundredZero');
    $(this).parents("form").validate().element($(this));
  });

  /* 比例聚焦数值化 */
  $(document).on('focus', "input.percentFormat:not([readonly])", function(event) {
    var inputJqObj = $(event.target);
    var inputJqVal = null;
    if(inputJqObj.val()) {
      inputJqVal = inputJqObj.val();
      inputJqObj.val(app.unformatPercentBj(inputJqVal));
      $(inputJqObj).addClass('HundredZero');
    }
  });
  set_two_menu('mouseover', "#7EACFF", "#fff");
  set_two_menu('mouseout', "#629AFF", "#fff");
  
  /* lyf利率格式化输入框的值 */
  $(document).on('blur', '.rateFormat', function(event) {
    var inputJqObj = $(event.target);
    var inputJqVal = inputJqObj.val();
    inputJqObj.val(app.formatPercentBj(inputJqVal));
    if(inputJqVal == '') {
      inputJqObj.siblings('input[type=hidden]').val(inputJqVal);
    } else if(app.formatPercentBj(inputJqVal)&&$(this).parents("form").validate().element($(this))) {
      inputJqObj.siblings('input[type=hidden]').val(app.unformatPercentBj(inputJqVal));
    }
    $(this).parents("form").validate().element($(this));
  });

  /* 利率聚焦数值化 */
  $(document).on('focus', "input.rateFormat:not([readonly])", function(event) {
    var inputJqObj = $(event.target);
    var inputJqVal = null;
    if(inputJqObj.val()) {
      inputJqVal = inputJqObj.val();
      inputJqObj.val(app.unformatPercentBj(inputJqVal));
    }
  });

  /* lxq 改bug后 start */
  $('body').on('change', 'select.selectExe', function() {
    var parentTr = $(this).parents('tr');
    var sublingTr = parentTr.siblings('tr').find('select.selectExe');
    /*添加校验*/
    var thisVal = $(this).val();
    for(var i = 0; i < sublingTr.length; i++) {
      var other = sublingTr.eq(i).val();
      if(thisVal == other) {
        var selname = $(this).find("option:selected").data("text-vv");
        if(selname == undefined) {
          return;
        } else {
          $(this).rules("add", {
            afterSpace: true,
            messages: {
              afterSpace: "请勿重复选择"
            }
          });
          return;
        }
      } else {
        $(this).rules("remove", "afterSpace");
        $(this).parents("form").validate().element($(this));
      }
      $(this).css("border-color", " #c2cad8");
    }
    /*去掉校验信息*/
    var flag;
    sublingTr.each(function(){
      if( $(this).next().html()=="请勿重复选择"){
        var signSelect =  $(this).find("option:selected").val();
        var parentTr = $(this).parents('tr');
        var sublingTr = parentTr.siblings('tr').find('select.selectExe');
        for(var i=0; i<sublingTr.length;i++){
          var commonSelectVal = sublingTr.eq(i).val();
          if(signSelect==commonSelectVal){
            flag++;
          }
        }
        if(flag>0){
          $(this).rules("add", {
            afterSpace: true,
            messages: {
              afterSpace: "请勿重复选择"
            }
          });
        }else {
          $(this).rules("remove", "afterSpace");
          $(this).parents("form").validate().element($(this));
        }
      }
      flag = 0;
    });
  });
  /*lxq 改bug后 end*/

  /* 输入框，兼容性问题wkd */
  $(document).on('focus', 'input.isChinese', function() {
    var maxlength = $(this).attr("maxlength");
    console.log(maxlength);
    $(this).removeAttr("maxlength");
    $(this).blur(function() {
      $(this).attr("maxlength", maxlength);
      $(this).val($(this).val().substring(0, maxlength))
    });
  });

  $(document).on('change', 'select', function() {
    if($(this).find("option:selected").val() != '') {
      //判断是有action
      /* if($(this).parents("form").attr("action")){*/
      $(this).parents("form").validate().element($(this));
      //zj cc系统select不需要用到bootstrap-select时
      if(!$('select').hasClass('batch-operate1') || !$('select').hasClass('batch-operate2')) {
        //wkd刷新bootstrap-select 插件
        $('select').selectpicker('refresh');
        $('select').selectpicker({
          size: 7,
          container: '#bootstrap-select-box'
        });
      }
      /*}*/
    }

  });

  /* bootstrap-select model 下展示控制wkd*/
  $('.modal.fade').on('shown.bs.modal', function() {
    $("#bootstrap-select-box").css("z-index", "10060");
  });
  $('.modal.fade').on('hide.bs.modal', function() {
    $("#bootstrap-select-box").css("z-index", "auto");
  });

  /* lh 页面左侧展开收起 */
  $('.menu-toggler.sidebar-toggler').click(function () {
    $(this).find("span").toggle();
  });
});


/*lh 登录信息模块 图片切换*/
$(function() {
  /* var num=Math.floor(Math.random()*10+1);*/
  var img_status = $("#set_img img").prop("src", "/static/app/1.0.0/img/loginImg/touxiang" + 1 + ".png");
});

/*lh 导航 二三级菜单高亮关联*/
function set_two_menu(mouseActive, background, color) {
  $(document).on(mouseActive, ".nav-item> div>.sub-menu>.nav-item>a", function() {
    var istwo = $(this).parents("ul.sub-menu").parents("ul.sub-menu");
    if(istwo) {
      var $this = $(this).parents("li.nav-item").find("a.nav-toggle");
      $this.css({
        "background": background,
        "color": color
      });
    }
  });
}

/*lh  自定义滚动条*/
$(function() {
  $(".three-menu").slimScroll({
    width: 'auto', //可滚动区域宽度
    height: 'auto', //可滚动区域高度
    size: '10px', //组件宽度
    color: '#333', //滚动条颜色*!/
    position: 'left', //组件位置：left/right
    alwaysVisible: true, //是否 始终显示组件
    touchScrollStep: 200, //滚动量当用户使用手势
    start: 'top' //默认滚动位置：top/bottom
  });
  $(".three-menu").css("height", "auto");
  $(".three-menu").parent().css("height", "auto");
  /*主菜单控制 wkd*/
  $(".main-menu > li > .sub-menu > li > div.slimScrollDiv > div.slimScrollBar").bind("mousedown", function() {
    $(this).parent("div.slimScrollDiv").parent("li").addClass("sub-active");
    $(this).parent("div.slimScrollDiv").parent("li").parent(".sub-menu").parent("li").addClass("main-active");
  });
  $(document).on("mouseover", ".main-menu > li > a", function() {
    $(this).parent("li").siblings("li").removeClass("main-active");
  });
  $(document).on("mouseover", ".main-menu > li > .sub-menu > li > a", function() {
    $(".main-menu > li").siblings("li").removeClass("main-active");
    $(this).parent("li").siblings("li").removeClass("sub-active");
  });
  $(document).on("mouseup", ".main-menu > li > .sub-menu > li > a", function() {
    $(".main-menu > li").siblings("li").removeClass("main-active");
    $(this).parent("li").siblings("li").removeClass("sub-active");
  });
  /*主菜单 解决mousedown 和click的冲突 wkd*/
  var firstTime = 0;
  $("body").mousedown(function() {
    firstTime = new Date().getTime();
  });
  $("body").click(function() {
    if(firstTime) {
      $(".main-menu > li").siblings("li").removeClass("main-active");
      $(".main-menu > li > .sub-menu > li").removeClass("sub-active");
      firstTime = 0;
    }
  });

});

/*ln */
$(function() {
  $('.modal #searchCase').click(function() {
    $(this).parents('.modal').find('.modal-body form.query-form').toggle();
  /*  $(this).parents('.modal').find('.modal-body .reset').click();*/
  });
  $('.modal .modal-body .pagination-query').click(function() {
    $(this).parents('.modal').find('.modal-body form.query-form').hide();
  });
  $('.modal.fade').on('hide.bs.modal', function() {
    /*弹框关闭后,有查询条件的弹框隐藏*/
    $('.modal').find('.modal-body .query-form').hide();
  });

  /*lh 点击新加一行 图片消失*/
  $(document).on('click', '#mainPage #add-sign', function() {
    removeNothing();
  });
});

/* lyf自定义提交表单方法 */
function submit(url, param, obj) {
  $(obj).attr("disabled", true);
  app.$post(url, param).done(function(data) {
    if(app.isOK(data)) {
      app.alertOK('提交成功！');
      var urlPage = $(obj).parents('form').data('link');
      if(urlPage) {
        setTimeout(function() {
          window.location.href = urlPage
        }, 3000);
      } else {
        return;
      }
    } else {
      var errors = data.errors.join(',')
      app.alertError(errors || failureText || '提交失败！');
      /*ln 提交失败后，按钮可点击*/
      $(obj).attr("disabled", false);
    }
  });
};

/* 定位validate 错误信息位置 */
function gotoError(){
  $(".help-block-error").each(function(){
    if( $(this).html() != ""){
      var topHeiht=$(this).offset().top;
      topHeiht=topHeiht-150;
      $(window).scrollTop(topHeiht);
      return false;
    }
  })
}

/* zj 获取URL传值 */
  function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  }

/* lh 去除列表页面无数据时显示的图片 */
function removeNothing() {
  var imgContent = $("#mainPage").find(".pagination-container ");
  if($('.tab-content').size()){
    var imgContent1 = $('.tab-content .tab-pane.active').find(".pagination-container ");
    if(imgContent1.find('table tbody>tr').length > 0){
      imgContent1.removeClass("noDataTbody");
    }else{
      imgContent1.addClass("noDataTbody");
    }
  }else{
    if(imgContent.find("table>tbody>tr").length > 0) {
      imgContent.removeClass("noDataTbody");
    }else{
      imgContent.addClass("noDataTbody");
    }
  }

}
