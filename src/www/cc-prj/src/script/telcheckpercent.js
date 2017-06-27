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
        text: '贷款电核比例配置管理',
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
    $('.dictionary-select').selectloader(telcheckpercent_enum);
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

