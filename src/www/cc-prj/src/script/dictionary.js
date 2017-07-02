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

+function ($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
    dt: {
      text: '系统管理',
      url: '#'
    },
    dd: [
      {
        text: '字典分类管理',
        url: app.base + '/cs/dictionarycategory/index.html'
      },
      {
        text: '字典项管理',
        url: '#'
      }
    ]
  };

  $(function () {

    var dictionary_enum = {
      "dict-status": [{
        "code": "CS",
        "name": "初始"
      }, {
        "code": "JH",
        "name": "激活"
      }],
      "dict-modelCode": [{
        "code": "XT",
        "name": "系统"
      }, {
        "code": "QT",
        "name": "其他"
      }]
    };
    $('.radio-list').radioloader(dictionary_enum);
    app.registerTextHelper('status', dictionary_enum['dict-status'], 'code', 'name');
    app.registerTextHelper('modelCode', dictionary_enum['dict-modelCode'], 'code', 'name');
    app.registerTextHelper('request.status', dictionary_enum['dict-status'], 'code', 'name');
    app.registerTextHelper('request.modelCode', dictionary_enum['dict-modelCode'], 'code', 'name');

    $.ajax({
      type: 'get',
      dataType: 'json',
      url: app.DICTIONARYCATEGORY_LIST,
      success: function (data, textStatus, jqXHR) {
        $('.selectloader-dictionarys').selectloader({"dictionarys":data.content});
      },
    });

    $('.main-page').pagination({
      "first-store": {
        "page": {
          "number": 0,
          "size": 20,
          "totalPages": 0,
          "totalElements": 0,
          "content": [],
          "pages": []
        }
      }
    });
    $('.main-page .pagination-reload').click();
  });
} (window.jQuery, window.app);