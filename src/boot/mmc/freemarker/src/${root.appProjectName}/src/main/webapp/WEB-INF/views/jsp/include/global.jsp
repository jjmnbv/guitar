<%@ page contentType="text/html;charset=UTF-8" %>
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

  <c:set target="${self.path}" property="handlebars">${base}/static/lib/handlebars/4.0.4</c:set>
  <c:set target="${self.path}" property="bootstrap">${base}/static/lib/bootstrap/3.3.5</c:set>
  <c:set target="${self.path}" property="jquery">${base}/static/lib/jquery/2.1.4</c:set>
  <c:set target="${self.path}" property="FontAwesome">${base}/static/lib/font-awesome/4.4.0</c:set>
  <c:set target="${self.path}" property="ionicons">${base}/static/lib/ionicons/2.0.1</c:set>
  <c:set target="${self.path}" property="html5shiv">${base}/static/lib/html5shiv/3.7.3</c:set>
  <c:set target="${self.path}" property="respond">${base}/static/lib/respond/1.4.2</c:set>
  <c:set target="${self.path}" property="app">${base}/static/app/1.0.0</c:set>
</c:if>