+function($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '系统设置',
            url: '#'
        },
        dd: [
            {
                text: '产品相关',
                url: '#'
            },
            {
                text: '电核比例',
                url: '/cs/tel-check-percent/check-percent-list.html'
            }
        ]
    };

    $(function () {
      app.checkDescribe = [{ "code": "现金贷产品", "name": "现金贷产品" }];

      $('.check-percent-page').pagination({
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
      $('.check-percent-page .pagination-reload').click();
    });
} (window.jQuery, window.app);