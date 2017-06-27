<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
	app.loanKindCodeList =app.dicts.dict_44;
	app.loanUseCodeList =app.dicts.dict_137;
	app.paymentMethodIdList=app.dicts.dict_37;
	app.feeTypeCodeList=app.dicts.dict_1;
	app.materialTypeCodeList=app.dicts.dict_52;
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
        text: '申请管理',
        url: '#'
      }
    ]
  };

} (window.jQuery, window.app);

