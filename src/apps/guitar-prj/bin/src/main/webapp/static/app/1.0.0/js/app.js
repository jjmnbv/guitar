window.app = window.app || {};

+ function(instance, app) {
  /**
   * 动态注册根据值获取显示文本的helper，用于列表模板中显示（字典）值字段对应的text
   */
  app.registerTextHelper = function(field, objs, vkey, tkey) {
    var cache = {}, pfx = field + '-';
    for (var i in objs) {
      cache[pfx + objs[i][vkey]] = objs[i][tkey];
    }

    instance.registerHelper(field.replace('\.', '-') + '-text', function(options) {
      return cache[pfx + app.getNestedProperty(field, this)];
    });
  };

  /**
   * 返回应用上下文路径
   */
  instance.registerHelper('base', function() {
    return app.base;
  });

  /**
   * 列表行号
   */
  instance.registerHelper('list-rowindex', function(options) {
    var index = options.data.index;
    return 1 + index;
  });

  /**
   * a == b
   */
  instance.registerHelper('eq', function(a, b) {
    return a == b;
  });

  /**
   * a != b
   */
  instance.registerHelper('ne', function(a, b) {
    return a != b;
  });

  /**
   * a > b
   */
  instance.registerHelper('gt', function(a, b) {
    return a > b;
  });

  /**
   * a >= b
   */
  instance.registerHelper('ge', function(a, b) {
    return a >= b;
  });

  /**
   * 数值求和
   */
  instance.registerHelper('sum', function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      var val = parseFloat(arguments[i]);
      if (!isNaN(val)) {
        sum += val;
      }
    }
    return sum;
  });

} (Handlebars, window.app);

+ function($, app) {

  var alert = function(message, style) {
    if (!toastr) {
      return;
    }
    toastr.clear();
    toastr.options = { positionClass: 'toast-top-center', timeOut: 2000 };
    toastr[style](message);
  };

  /**
   * 全局ajax错误提示
   */
  $.ajaxSetup({
    error: function(xhr, status, e) {
      //
      //关闭加载提示
      //
      if (App && App.stopPageLoading) {
        App.stopPageLoading();
      }

      if(xhr.status == 401) {
//        app.alertError('没有权限，请联系管理员.');
      }else if(xhr.responseText.indexOf('<body class="login">') > 0){
        app.alertError('没有登录，或登录超时退出');
        window.location.href = app.base+'/index';
      }else{
        app.alertError('服务暂时不可用，请稍后再试.');
      }
    }
  });

  $(document).ajaxError(function(event, request, settings ){
    if(request.status == 401) {
      app.alertError('没有权限['+settings.url.substring(0, settings.url.indexOf('?'))+']，请联系管理员.');
    }
  });

  /**
   * ajax提交表单
   */
  app.$submit = function(form, type) {
    if (form.valid()) {
      return $.post(form[0].action, form.serialize(), function(data, textStatus, jqXHR) {
        //超时跳转到登录
      }, type);
    }
  };

  /**
   * ajax提交数据
   */
  app.$post = function(url, data, type) {
    return $.post(url, data, function(data, textStatus, jqXHR) {
      console.log('app.postData');
      //超时跳转到登录
    }, type);
  };

  /**
   * ajax 获取数据
   */
  app.$get = function(url) {
    return $.get(url, function(data, textStatus, jqXHR) {
      console.log('app.getData');
      //超时跳转到登录
    });
  };

  /**
   * ajax 获取JSON
   */
  app.$getJSON = function(url) {
    return $.getJSON(url, function(data, textStatus, jqXHR) {
      console.log('app.getJSONData');
      //超时跳转到登录
    });
  };

  /**
   * ajax是否返回成功
   */
  app.isOK = function(resp) {
    return resp.resultCode == 'SUCCESS';
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

} (window.jQuery, window.app);

+ function($, app) {
  /**
   * 获取对象嵌套属性
   * app.getNestedProperty('a.b.c',{a:{b:{c:1}}})
   */
  app.getNestedProperty = function(path, obj) {
    if (!obj) {
      return null;
    }

    if (!path) {
      return obj;
    }

    //    var arr = path.split('.');
    //
    //    while (arr.length && (obj = obj[arr.shift()]));
    obj = eval('obj.' + path);

    return obj;
  };

  /**
   * 序列化jQuery对象为JSON对象
   */
  $.fn.serializeObject = function() {
    var obj = {};

    $.each(this.serializeArray(), function(i, o) {
      var n = o.name, v = o.value;

      if (obj[n]) {
        if ($.isArray(obj[n])) {
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
      if (n && n.indexOf('.') != -1 && !obj.hasOwnProperty(n)) {
        obj[n] = app.getNestedProperty(n, obj);
      }
    });

    $(this).deserialize(obj, {
      //
      //反序列化每一form元素时的回调
      //
      change: function(value) {
        var elem = $(this);
        if (elem.is('.jstreeselect-hidden-input')) {
          elem.jstreeVal(value);
        } else if (elem.is('.jstreemultiselect-hidden-input')) {
          elem.jstreemultiVal(value);
        } else if (elem.is('.select2-hidden-accessible > option')) {
          elem.val(value).trigger("change");
        }
      }
    });
    //重新渲染
    $.uniform.update();
  };

} (window.jQuery, window.app);
