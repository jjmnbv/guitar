<%@ page contentType="text/html;charset=UTF-8" %>

<c:choose>
  <c:when test="${menuLocation == 'top'}">
    <%@ include file="main-menu-top.jsp"%>
  </c:when>
  <c:otherwise>
    <%@ include file="main-menu-left-new.jsp"%>
  </c:otherwise>
</c:choose>

