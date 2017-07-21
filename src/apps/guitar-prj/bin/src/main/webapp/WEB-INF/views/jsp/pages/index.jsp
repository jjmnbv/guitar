<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp" %>

<c:set target="${self}" property="title">工作台</c:set>
<c:set target="${self.css}" property="plugins">
</c:set>
<c:set target="${self.css}" property="main">
</c:set>
<c:set target="${self.js}" property="plugins">
</c:set>

<c:set target="${self.js}" property="main">
  <script src="${self.path.app}/js/index.js"></script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>主页</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">

</c:set>

<c:set target="${self.content}" property="free">

</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp" %>