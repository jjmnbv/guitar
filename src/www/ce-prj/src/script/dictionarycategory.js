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