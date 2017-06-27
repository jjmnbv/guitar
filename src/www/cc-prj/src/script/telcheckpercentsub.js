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


+function($, app) {
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
        text: '贷款电核比例配置',
        url: app.base + '/cs/telcheckpercent/index.html'
      },
      {
        text: '贷款电核比例配置明细管理',
        url: '#'
      }
    ]
  };

  $(function () {
    var telcheckpercent_enum = {
      "common-status": [{
        "code": "CS",
        "name": "初始"
      }, {
        "code": "JH",
        "name": "激活"
      }, {
        "code": "ZT",
        "name": "暂停"
      }, {
        "code": "SX",
        "name": "失效"
      }, {
        "code": "ZZ",
        "name": "终止"
      }, {
        "code": "FJ",
        "name": "否决"
      }]
    };
    app.registerTextHelper('status', telcheckpercent_enum['common-status'], 'code', 'name');

    $('.main-page').pagination({
      "first-store": {
        "page": {
          "number": 0,
          "size": 20,
          "totalPages": 0,
          "totalElements": 0,
          "content": [],
        },
        "pages": []
      }
    });
    $('.main-page .pagination-reload').click();
  });
} (window.jQuery, window.app);

