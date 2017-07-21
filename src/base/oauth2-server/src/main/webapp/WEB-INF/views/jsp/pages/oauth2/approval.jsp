<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="com.google.common.collect.ImmutableMap"%>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<%
pageContext.setAttribute("scopeLabels", ImmutableMap.of(
  "userinfo", "同意使用基本资料登录此应用"
));
%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>应用授权</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap/css/bootstrap.min.css"/>
  </head>
  <body class="approval-page">
    <div>
      <img src="${clientInfo.iconUri}"/>
      <p>${clientInfo.name}(${clientInfo.clientUri})</p>
      <p>${clientInfo.description}</p>
    </div>
    <div>
      <form action="${base}/oauth2/authorize" method="get">
        <input type="hidden" name="scope" id="scope" value="">
        <c:forEach var="param" items="${codeRequestParams}">
        <input type="hidden" name="${param.key}" value="${param.value}">
        </c:forEach>
        <c:forEach var="scope" items="${scopes}">
        <div class="checkbox"><label><input type="checkbox" value="${scope}"> ${scopeLabels[scope]}</label></div>
        </c:forEach>
        <button type="submit" class="btn btn-default">确认授权</button>
      </form>
    </div>
    <!--[if lt IE 9]>
    <script src="${self.path.metronic}/assets/global/plugins/respond.min.js"></script>
    <![endif]-->
    <script src="${self.path.metronic}/assets/global/plugins/jquery.min.js"></script>
    <script src="${self.path.metronic}/assets/global/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script>
      $(function () {
        $('button[type="submit"]').click(function () {
          var scope = $('input[type="checkbox"]:checked').val().join(' ');
          if (!scope) {
            return false;
          }
          $('#scope').val(scope);
          return true;
        });
      })
    </script>
  </body>
</html>
