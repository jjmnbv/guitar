/**
 * 首屏数据模拟
 */
+function ($, app) {

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
      },
      {
        text: '设计-电核依据',
        url: '/cs/tel-check-percent/design-tel-check.html'
      }
    ]
  };

  $(function () {

    // app.accordingTo = [
    //   { "code": "SY", "name": "所有" },
    //   { "code": "MD", "name": "门店" },
    //   { "code": "QD", "name": "渠道" }
    // ];
    app.accordingTo = app.dicts.dict_87;

    $('.main-page').pagination({});
    $('.main-page .pagination-reload').click();
  });
} (window.jQuery, window.app);

