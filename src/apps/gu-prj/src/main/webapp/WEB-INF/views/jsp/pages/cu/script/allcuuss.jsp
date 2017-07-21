<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};
/**
 * 数据模拟
 */
+function ($, app) {
  app.userInfo = {
        loginName:<spring:eval expression="@FN_CU.toJSON(loginNa)" />,
        usNa:<spring:eval expression="@FN_CU.toJSON(usNa)" />,
        brNa:<spring:eval expression="@FN_CU.toJSON(brNa)" />,
        loginTime: <spring:eval expression="@FN_CU.toJSON(loginTime)" />,
    };
}(window.jQuery, window.app);