<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->

<head>
    <meta charset="utf-8" />
    <title>管理平台 | 发送找回密码邮件成功</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" href="${self.path.google}/fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/uniform/css/uniform.default.css" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/components.min.css" id="style_components" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/plugins.min.css" />
    <link rel="stylesheet" href="${self.path.app}/css/login.css" />
    <link rel="shortcut icon" href="${self.path.app}/img/favicon.ico" />
</head>

<body class="login" data-basepath="${base}" data-apppath="${self.path.app}">
    <div class="logo">
        <a href="www.zkbc.net"> <img src="${self.path.app}/img/logo-big.png" alt="" /> </a>
    </div>
    <div class="content">
<c:choose>
  <c:when test="${not empty error}">
      <p>${error}</p>
  </c:when>
  <c:otherwise>
      <p>发送找回密码邮件成功，请查收！</p>
  </c:otherwise>
</c:choose>
    </div>
    <div class="copyright"> 2016 &copy; 中科柏诚科技(北京)股份有限公司. </div>
    <!--[if lt IE 9]>
    <script src="${self.path.metronic}/assets/global/plugins/respond.min.js"></script>
    <script src="${self.path.metronic}/assets/global/plugins/excanvas.min.js"></script> 
    <![endif]-->
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/jquery.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/js.cookie.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/jquery.blockui.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/uniform/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/jquery-validation/js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/jquery-validation/js/additional-methods.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/jquery-validation/js/localization/messages_zh.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/backstretch/jquery.backstretch.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/scripts/app.min.js"></script>

    <script>
      jQuery(document).ready(function () {
          var apppath = $('body').data('apppath');
          $.backstretch([
              apppath + "/media/bg/1.jpg",
              apppath + "/media/bg/2.jpg",
              apppath + "/media/bg/3.jpg",
              apppath + "/media/bg/4.jpg"
          ], {
                  fade: 1000,
                  duration: 8000
              }
          );
      });
    </script>

</body>

</html>
