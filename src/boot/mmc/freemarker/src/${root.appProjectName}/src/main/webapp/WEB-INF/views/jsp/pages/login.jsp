<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>登录</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="${self.path.bootstrap}/css/bootstrap.min.css">
    <link rel="stylesheet" href="${self.path.FontAwesome}/css/font-awesome.min.css">
    <link rel="stylesheet" href="${self.path.ionicons}/css/ionicons.min.css">
    <link rel="stylesheet" href="${self.path.app}/css/app.css" />

    <!--[if lt IE 9]>
    <script src="${self.path.html5shiv}/html5shiv.min.js"></script>
    <script src="${self.path.respond}/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="login-page">
    <div class="login-box">
      <div class="login-box-body">
        <p class="login-box-msg">移动报文前置</p>
        <form action="${base}/login" method="post">
          <div class="form-group has-feedback">
            <input type="text" name="username" id="username" class="form-control" placeholder="用户名" value="${username}">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" name="password" id="password" class="form-control" placeholder="密码">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <c:if test="${not empty error}">
          <div class="form-group has-error">
            <label class="control-label"><i class="fa fa-times-circle-o"></i> ${error}</label>
          </div>
          </c:if>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox" name="rememberMe"> Remember Me
                </label>
              </div>
            </div>
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <script src="${self.path.jquery}/jquery.min.js"></script>
    <script src="${self.path.bootstrap}/js/bootstrap.min.js"></script>
  </body>
</html>
