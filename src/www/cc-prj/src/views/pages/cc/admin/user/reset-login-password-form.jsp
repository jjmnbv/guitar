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
    <title>管理平台 | 重置密码</title>
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
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.css" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/components.min.css" id="style_components" />
    <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/plugins.min.css" />
    <link rel="stylesheet" href="${self.path.app}/css/login.css" />
    <link rel="shortcut icon" href="${self.path.app}/img/favicon.ico" />
</head>

<body class="login" data-basepath="${base}" data-apppath="${self.path.app}" data-basepath="${base}">
    <div class="logo">
        <a href="www.zkbc.net"> <img src="${self.path.app}/img/logo-big.png" alt="" /> </a>
    </div>
    <div class="content">

    <c:choose>
      <c:when test="${payload}">
        <form class="login-form reset-login-pwd-form" action="${base}/reset-login-password" method="post">
            <h3 class="form-title">重置登录密码</h3>
            <div class="alert alert-danger display-hide">
                <button class="close" data-close="alert"></button>
                <span> 请输入新的登录密码. </span>
            </div>
            <div class="form-group display-hide">
              <input type="hidden" name="loginName" value="${loginName}"/>
              <input type="hidden" name="vfcode" value="${vfcode}"/>
            </div>
            <div class="form-group">
                <label class="control-label visible-ie8 visible-ie9">新登录密码</label>
                <div class="input-icon">
                    <i class="fa fa-lock"></i>
                    <input class="form-control placeholder-no-fix passwordCheck" type="password" autocomplete="off" placeholder="新登录密码" name="plainPassword" id="password" data-msg-required="密码不能为空" data-rule-required="1" />
                </div>
            </div>
            <div class="form-group">
                <label class="control-label visible-ie8 visible-ie9">新密码确认</label>
                <div class="input-icon">
                    <i class="fa fa-lock"></i>
                    <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="新密码确认" name="plainPassword_" data-rule-equalto="#password" data-msg-equalto="两次密码不一致" data-msg-required="重复密码不能为空" data-rule-required="1"/>
                </div>
            </div>
            <div class="form-actions">
                <button type="button" class="btn green pull-right submit"> 提交 </button>
            </div>
        </form>
      </c:when>
      <c:otherwise>
        <h4 class="font-red">用户不存在或用户状态不是正常状态</h4>
      </c:otherwise>
    </c:choose>

    </div>
    <div class="copyright"> 2016 &copy; 中科柏诚科技(北京)股份有限公司. </div>
    <!--[if lt IE 9]>
    <script src="${self.path.metronic}/assets/global/plugins/respond.min.js"></script>
    <script src="${self.path.metronic}/assets/global/plugins/excanvas.min.js"></script> 
    <![endif]-->
    <script src="${self.path.handlebars}/handlebars.js"></script>
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
    <script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/backstretch/jquery.backstretch.min.js"></script>
    <script src="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.js"></script>
    <script type="text/javascript" src="${self.path.metronic}/assets/global/scripts/app.min.js"></script>
    <script src="${self.path.app}/js/app.js"></script>
    <script src="${self.path.app}/js/validation.js"></script>
    <script src="${self.path.app}/js/app-plugins.js"></script>
    <script src="${self.path.app}/js/admin/user-reset-login-pwd.js"></script>

</body>

</html>
