<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="org.owasp.esapi.ESAPI" %>
<%@ include file="/WEB-INF/views/jsp/include/taglibs.jsp"%>
<c:if test="${empty INCLUDE_GLOBAL_JSP}">
  <c:set scope="request" var="INCLUDE_GLOBAL_JSP" value="INCLUDE_GLOBAL_JSP" />
  <c:set scope="request" var="base" value="<%= request.getContextPath()%>" />
  <c:set scope="request" var="self" value="<%= new java.util.HashMap()%>" />

  <c:set target="${self}" property="locale"><%= org.springframework.web.servlet.support.RequestContextUtils.getLocale(request)%></c:set>
  <c:set target="${self}" property="url"><%= request.getAttribute("javax.servlet.forward.request_uri")%></c:set>
  <c:set target="${self}" property="css" value="<%= new java.util.HashMap()%>" />
  <c:set target="${self}" property="js" value="<%= new java.util.HashMap()%>" />
  <c:set target="${self}" property="content" value="<%= new java.util.HashMap()%>" />
  <c:set target="${self}" property="path" value="<%= new java.util.HashMap()%>" />
  <c:set target="${self}" property="nav" value="<%= new java.util.HashMap()%>" />
  <c:set target="${self}" property="layouts" value="<%= new java.util.HashMap()%>" />
  
  <c:set target="${self.path}" property="google">${base}/static/lib/google</c:set>
  <c:set target="${self.path}" property="metronic">${base}/static/lib/metronic/4.5.2</c:set>
  <c:set target="${self.path}" property="handlebars">${base}/static/lib/handlebars/4.0.4</c:set>
  <c:set target="${self.path}" property="html5shiv">${base}/static/lib/html5shiv/3.7.3</c:set>
  <c:set target="${self.path}" property="deserialize">${base}/static/lib/jquery-deserialize/1.3.3</c:set>
  <c:set target="${self.path}" property="flow">${base}/static/app/1.0.0/js/flow/js/bpm</c:set>
  
  
  
  <c:set target="${self.path}" property="app">${base}/static/app/1.0.0/js/flow</c:set>

  <c:set target="${self.layouts}" property="container">container-fluid</c:set>
  <c:set target="${self.layouts}" property="fixed">page-header-fixed</c:set><!-- 固定菜单：page-header-menu-fixed，固定top：page-header-top-fixed -->
  <c:set target="${self.layouts}" property="menu"></c:set><!-- 菜单高亮：hor-menu-light-->
</c:if>