<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
	app.provinceList = $.parseJSON('<%=request.getAttribute("provinceCityCountryJson")%>');
} (window.jQuery, window.app);