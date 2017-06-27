<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
	app.loanKindCodeList =app.dicts.dict_44;
	app.paymentUnitList=app.dicts.dict_3006;/*贷款期限单位*/
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
   icon: 'business-processing',
    dt: {
      text: '业务办理',
      url: '#'
    },
    dd: [
      {
        text: '贷款申请处理',
        url: '#'
      },
      {
        text: '查看历史贷款',
        url: '#'
      },
      {
        text: '贷款申请历史',
        url: '#'
      }
    ]
  };

} (window.jQuery, window.app);

