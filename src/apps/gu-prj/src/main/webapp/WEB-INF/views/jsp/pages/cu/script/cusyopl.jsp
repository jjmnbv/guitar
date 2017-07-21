<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
    dt: {
      text: '主页',
      url: '#'
    },
    dd: [
      {
        text: '系统操作日志管理',
        url: '/cu/log-view/log-system.html'
      }
    ]
  };

   app.syOpCdList=[
            {"code": "QD", "name": "系统启动"},
            {"code": "GB", "name": "关闭"},
            {"code": "ZJ", "name": "用户增加"},
            {"code": "QX", "name": "权限变更"},
            {"code": "GN", "name": "功能异常"},
            {"code": "YJ", "name": "硬件异常"},
            {"code": "YL", "name": "网络异常"},
            {"code": "WX", "name": "危险"},
            {"code": "QT", "name": "其他"},
            {"code": "XN", "name": "性能异常"}
    ];
  $(function () {
     $(".loaderSel").selectloader(app);
    $('.main-page').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CU.toJSON(page)" />
      }
    });
  });
} (window.jQuery, window.app);

