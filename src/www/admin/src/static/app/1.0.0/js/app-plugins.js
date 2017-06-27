+ function (instance) {
  /**
   * 判断当前菜单是否选中
   */
  instance.registerHelper('menu-active', function (options) {
    var isActive = function (url) {
      if (!url) {
        return false;
      }

      if (options.data.root.requestUrl.indexOf(url) != -1) {
        if (url.indexOf('/index') == 0 && options.data.root.requestUrl != url) {
          return false;
        }
        return true;
      }
      return false;
    };

    if (isActive(this.url)) {
      return true;
    }

    if (!this.children) {
      return false;
    }
    //子菜单选中则父菜单也选中
    for (var i in this.children) {
      if (isActive(this.children[i].url)) {
        return true;
      }
    }
    return false;
  });

  /**
   * 菜单图标
   */
  instance.registerHelper('menu-icon', function (options) {
    if (!this.styleObject || !this.styleObject.iconClassName) {
      return "";
    }
    return '<i class="' + this.styleObject.iconClassName + '"></i>';
  });

  /**
   * 是否有子菜单
   */
  instance.registerHelper('has-children', function (options) {
    if (this.children && this.children.length > 0) {
      return true;
    }
    return false;
  });

} (Handlebars);

/**
 * 水平布局菜单加载器
 */
+ function ($, app) {
  if (app.style != 'hor') {
    return;
  }
  var template =
    '<ul class="nav navbar-nav">' +
    '  {{#each menus}}' +
    '  <li class="menu-dropdown classic-menu-dropdown{{#if (menu-active)}} active{{/if}}">' +
    '    <a {{#if (has-children)}}href="javascript:;"{{else}}href="{{../base}}{{url}}" class="nav-link"{{/if}}> {{text}} <span class="arrow"></span></a>' +
    '    <ul class="dropdown-menu pull-left">' +
    '      {{#each children}}' +
    '      <li class="{{#if (menu-active)}}active{{/if}}"><a href="{{../../base}}{{url}}" class="nav-link{{#if (menu-active)}} active{{/if}}">{{{menu-icon}}} {{text}} </a></li>' +
    '      {{/each}}' +
    '    </ul>' +
    '  </li>' +
    '  {{/each}}' +
    '</ul>';


  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('menuStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      elem.html(Handlebars.compile(template)({ menus: store, base: app.base, requestUrl: app.requestUrl || window.location.href }));
    }
  };

  $.fn.menuloader = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };
} (window.jQuery, window.app);

/**
 * 垂直布局菜单加载器
 */
+ function ($, app) {
  if (app.style != 'vertical') {
    return;
  }
  var template =
    '<ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">' +
    '  <li class="heading"><h3 class="uppercase"></h3></li>' +
    '  {{#each menus}}' +
    '  <li class="nav-item{{#if (menu-active)}} active open{{/if}}">' +
    '    <a {{#if (has-children)}}href="javascript:;" class="nav-link nav-toggle"{{else}}href="{{../base}}{{url}}" class="nav-link"{{/if}}> {{{menu-icon}}}<span class="title">{{text}}</span>{{#if (menu-active)}}<span class="selected"></span> {{/if}} <span class="arrow"></span></a>' +
    '    <ul class="sub-menu">' +
    '      {{#each children}}' +
    '      <li class="nav-item{{#if (menu-active)}} active open{{/if}}"><a href="{{../../base}}{{url}}" class="nav-link{{#if (has-children)}} nav-toggle{{/if}}">{{{menu-icon}}} <span class="title">{{text}}</span> </a></li>' +
    '      {{/each}}' +
    '    </ul>' +
    '  </li>' +
    '  {{/each}}' +
    '</ul>';

  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('menuStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      elem.html(Handlebars.compile(template)({ menus: store, base: app.base, requestUrl: app.requestUrl || window.location.href }));
    }
  };

  $.fn.menusidebarloader = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };
} (window.jQuery, window.app);

+ function (instance) {
  /**
   * 分页列表行号
   */
  instance.registerHelper('page-rowindex', function (options) {
    var index = options.data.index,
      page = options.data.root.page;
    return 1 + index + page.number * page.size;
  });

  /**
   * 是否首页
   */
  instance.registerHelper('page-first', function (options) {
    var page = options.data.root.page;
    return page.number <= 0;
  });

  /**
   * 是否尾页
   */
  instance.registerHelper('page-last', function (options) {
    var page = options.data.root.page;
    return page.number + 1 >= page.totalPages;
  });

  /**
   * 是否当前页
   */
  instance.registerHelper('page-current', function (options) {
    var page = options.data.root.page;
    return page.number + 1 == this;
  });

  /**
   * 上一页
   */
  instance.registerHelper('page-prev', function (options) {
    var page = options.data.root.page;
    return page.number;
  });

  /**
   * 下一页
   */
  instance.registerHelper('page-next', function (options) {
    var page = options.data.root.page;
    return page.number + 2;
  });

} (Handlebars);

/**
 * 分页插件
 */
+ function ($, app) {
  var
    /**
     * 渲染指定页内容
     */
    render = function (elem, pageNumber) {
      var
        //数据筛选条件
        pageQueryString = elem.data('pageQueryString'),
        //分页请求地址
        url = elem.data('pageUrl') + '/' + ((pageNumber || 1) * 1 - 1) + (pageQueryString ? '?' + pageQueryString + '&thiznow=' + (new Date()) : '');

      //显示加载状态
      App.startPageLoading({ animate: true });

      app.$getJSON(url).done(function (json) {
        //渲染分页内容
        elem.html(Handlebars.compile(elem.data('pageTemplateText'))(json));
        elem.data('pageNumber', pageNumber);
        //关闭加载提示
        App.stopPageLoading();
      });
    },

    /**
     * 首次渲染第一页内容
     */
    renderFirst = function (elem, options) {
      //
      //获取第一页数据
      //
      var store = elem.data('pageFirstStore');
      if (store) {
        store = options[store];
      }

      //
      //渲染第一页
      //
      if (store) {
        elem.html(Handlebars.compile(elem.data('pageTemplateText'))(store));
      } else {
        render(elem, 1);
      }
    },

    /**
     * 使用指定模板初始化分页内容容器
     */
    initializeByTemplate = function (elem, options, template) {
      elem.data('pageTemplateText', template);
      renderFirst(elem, options);
    },

    /**
     * 初始化分页内容容器
     */
    initialize = function (elem, options) {
      var
        //本地模板标识
        pageTemplateId = elem.data('pageTemplateId'),
        //远程模板地址
        pageTemplateUrl = elem.data('pageTemplateUrl');

      //
      //用本地模板渲染第一页
      //
      if (pageTemplateId) {
        initializeByTemplate(elem, options, $('#' + pageTemplateId).html());
        return;
      }

      //
      //用远程模板渲染第一页
      //
      app.$get(pageTemplateUrl).done(function (text) {
        initializeByTemplate(elem, options, text);
      });
    },

    /**
     * 绑定分页事件
     */
    pagination = function (elem, options) {
      var
        //分页内容容器
        $container = elem.find('.pagination-container'),
        //筛选条件表单
        $form = elem.find('.pagination-form'),
        //查询（页码变成1）
        $query = elem.find('.pagination-query'),
        //重置表单
        $reset = elem.find('.pagination-reset'),
        //重新加载（页码不变）
        $reload = elem.find('.pagination-reload');

      //
      //初始化分页内容容器
      //
      initialize($container, options);

      //      
      //绑定翻页事件
      //
      $container.delegate('[data-page-number]', 'click', function () {
        render($container, $(this).data('pageNumber'));
        return false;
      });

      //
      //绑定查询事件
      //
      $query.click(function () {
        $container.data('pageQueryString', $form.serialize());
        render($container, 1);
        return false;
      });

      //
      //绑定重置事件
      //
      $reset.click(function () {
        $form[0].reset();
        $(".select2").change();
        return false;
      });

      //
      //绑定重新加载事件
      //
      $reload.click(function () {
        $container.data('pageQueryString', $form.serialize());
        render($container, $container.data('pageNumber'));
        return false;
      });
    };

  //
  //定义分页插件
  //
  $.fn.pagination = function (options) {
    return this.each(function () {
      pagination($(this), options);
    });
  };

} (window.jQuery, window.app);

/**
 * 单选按钮加载器
 */
+ function ($, app) {
  var template = '{{#each opts}}<label class="radio-inline"><input type="radio" name="{{name}}" data-text-val="{{text}}" value="{{val}}"{{#if checked}} checked="checked"{{/if}} /> {{text}} </label>{{/each}}';

  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('radioloaderStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      var
        //值属性
        vkey = elem.data('radioloaderVkey') || 'val',
        //文本属性
        tkey = elem.data('radioloaderTkey') || vkey,
        //当前选中值
        val = elem.data('radioloaderVal') || store[0][vkey],
        //构造列表项数组
        opts = $.map(store, function (i) {
          return { name: elem.data('radioloaderName'), val: i[vkey], text: i[tkey], checked: (i[vkey] == val) };
        });

      //填充单选按钮
      elem.append(Handlebars.compile(template)({ opts: opts }));
    }
  };

  $.fn.radioloader = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };

  //
  //单选按钮label文本隐藏域自动赋值
  //
  $('[data-text-input].radio-list').change(function () {
    $($(this).data('textInput')).val($(this).find("input:checked").data('textVal'));
  });

} (window.jQuery, window.app);

/**
 * 复选框加载器
 */
+ function ($, app) {
  var template = '{{#each opts}}<label class="checkbox-inline"><input type="checkbox" name="{{name}}" data-text-val="{{text}}" value="{{val}}"{{#if checked}} checked="checked"{{/if}} /> {{text}} </label>{{/each}}';

  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('checkboxloaderStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      var
        //值属性
        vkey = elem.data('checkboxloaderVkey') || 'val',
        //文本属性
        tkey = elem.data('checkboxloaderTkey') || vkey,
        //构造列表项数组
        opts = $.map(store, function (i) {
          return { name: elem.data('checkboxloaderName'), val: i[vkey], text: i[tkey], checked: (i[vkey] == elem.data('checkboxloaderVal')) };
        });

      //填充复选框
      elem.append(Handlebars.compile(template)({ opts: opts }));
    }
  };

  $.fn.checkboxloader = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };

  //
  //复选框label文本隐藏域自动赋值
  //
  $('[data-text-input].checkbox-list').change(function () {
    var texts = [];
    $(this).find("input:checked").each(function () {
      texts.push($(this).data('textVal'));
    });
    $($(this).data('textInput')).val(texts);
  });

} (window.jQuery, window.app);

/**
 * 下拉列表加载器
 */
+ function ($, app) {
  var template = '{{#each opts}}<option data-text-val="{{text}}" data-cascade-store="{{cascade}}" value="{{val}}"{{#if selected}} selected="selected"{{/if}}>{{display}}</option>{{/each}}';

  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('selectloaderStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      var
        //值属性
        vkey = elem.data('selectloaderVkey') || 'val',
        //文本属性
        tkey = elem.data('selectloaderTkey') || vkey,
        //文本显示属性
        dkey = elem.data('selectloaderDkey') || tkey,
        //级联属性
        ckey = elem.data('selectloaderCkey'),
        //构造列表项数组
        opts = $.map(store, function (i) {
          return { val: i[vkey], text: i[tkey], display: i[dkey], cascade: i[ckey], selected: (i[vkey] == elem.data('selectloaderVal')) };
        });

      //填充下拉框
      elem.append(Handlebars.compile(template)({ opts: opts }));
    }
  };

  $.fn.selectloader = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };

  //
  //下拉框关联文本隐藏域自动赋值
  //
  $('select[data-text-input]').change(function () {
    var texts = [];
    $(this).find("option:selected").each(function () {
      texts.push($(this).data('textVal'));
    });
    $($(this).data('textInput')).val(texts);
  });

  //
  //文本级联项加载数据
  //
  $('select[data-cascade-select]').change(function () {
    var cascade = $($(this).data('cascadeSelect'));
    cascade.empty().append('<option value="">请选择...</option>');
    var cascadeKstore = cascade.data('selectloaderStore');
    var cascadeStore = $(this).find("option:selected").data('cascadeStore');
    $($(this).data('cascadeSelect')).selectloader({
      cascadeKstore: cascadeStore
    });
  });

} (window.jQuery, window.app);

/**
 * 下拉树控件加载器
 */
+ function ($, app) {
  var container =
    '<div class="btn-group jstreeselect form-control">' +
    '  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +
    '    <span class="filter-option pull-left">&nbsp;</span>' +
    '    <span class="caret"></span>' +
    '  </button>' +
    '  <div class="dropdown-menu hold-on-click"><div></div></div>' +
    '</div>';

  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('jstreeselectStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      var
        //dropdown容器
        $container = $(container).insertAfter(elem),
        //树元素容器
        $tree = $container.find('.dropdown-menu > div').attr('id', elem.data('jstreeloaderTarget'));

      $tree.jstree({
        core: {
          data: [store],
          themes: {
            responsive: false
          }
        },
        types: {
          default: {
            icon: 'fa fa-folder icon-state-warning icon-lg'
          },
          file: {
            icon: 'fa fa-file icon-state-warning icon-lg'
          }
        },
        plugins: ['types']
      });

      //
      //节点加载完成时设置默认选中值
      //
      $tree.on('ready.jstree', function (e, data) {
        var val = elem.val();
        if (val) {
          data.instance.select_node(val);
        }
        elem.data('jstree', data.instance);
      });

      //
      //节点选中时设置下拉框显示值
      //
      $tree.on('changed.jstree', function (e, data) {
        elem.click().val(data.node.id);
        $container.find('.filter-option').html(data.node.text);
      });

      elem.addClass('jstreeselect-hidden-input');
    }
  };

  $.fn.jstreeselect = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };

  $.fn.jstreeVal = function (val) {
    $(this).data('jstree').select_node(val);
    return $(this).val(val);
  };

} (window.jQuery, window.app);

/**
 * 下拉树控件(多选)加载器
 */
+ function ($, app) {
  var container =
    '<div class="btn-group jstreeselect form-control">' +
    '  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +
    '    <span class="filter-option pull-left">&nbsp;</span>' +
    '    <span class="caret"></span>' +
    '  </button>' +
    '  <div class="dropdown-menu hold-on-click">' +
    '    <div class="jstree"></div>' +
    '  </div>' +
    '</div>';

  var render = function (elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('jstreemultiselectStore');
    if (store) {
      store = options[store];
    }

    if (store) {

      var
        //dropdown容器
        $container = $(container).insertAfter(elem),
        //树元素容器
        $tree = $container.find('.dropdown-menu > div.jstree').attr('id', elem.data('jstreeloaderTarget'));

      $tree.jstree({
        core: {
          data: [store],
          themes: {
            responsive: false
          }
        },
        types: {
          default: {
            icon: 'fa fa-folder icon-state-warning icon-lg'
          },
          file: {
            icon: 'fa fa-file icon-state-warning icon-lg'
          }
        },
        plugins: ['checkbox', 'types']
      });

      //
      //节点加载完成时设置默认选中值
      //
      $tree.on('ready.jstree', function (e, data) {
        var val = elem.val();
        if (val) {
          var vals = val.split(',');
          $.each(vals, function (i, v) {
            data.instance.select_node(v);
          });
        }
        elem.data('jstree', data.instance);
      });

      //
      //节点选中时设置下拉框显示值
      //
      $tree.on('changed.jstree', function (e, data) {
        var ids = [];
        var names = [];
        var instance = elem.data('jstree');
        $.each(instance.get_selected(), function (e, id) {
          var node = instance.get_node(id);
          var type = node.li_attr['type'];
          if (elem.data('keyType')) {
            if (type == elem.data('keyType')) {
              ids.push(id);
              names.push(node.text);
            }
          } else {
            ids.push(id);
            names.push(node.text);
          }
        });
        elem.val(ids.toString());
        $(elem.data('textInput')).val(names.toString());
        $container.find('.filter-option').html(names.toString());
        if (names.length == 0) {
          $container.find('.filter-option').html('请选择...');
        }
      });

      elem.addClass('jstreemultiselect-hidden-input');
    }
  };

  $.fn.jstreemultiselect = function (options) {
    return this.each(function () {
      render($(this), options);
    });
  };

  $.fn.jstreemultiVal = function (val) {
    var thiz = $(this);
    thiz.data('jstree').deselect_all();
    if (val && val != '') {
      var vals = val.split(',');
      $.each(vals, function (i, v) {
        thiz.data('jstree').select_node(v);
      });
    }
    return thiz.val(val);
  };

} (window.jQuery, window.app);
