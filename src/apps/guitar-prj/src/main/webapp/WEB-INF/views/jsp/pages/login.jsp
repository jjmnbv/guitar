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
    <title>管理平台 | 用户登录</title>
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
        <form class="login-form" action="${base}/login" method="post">
            <h3 class="form-title">进入您的账户</h3>
            <c:if test="${not empty error}">
            <div class="alert alert-danger">
              <button class="close" data-close="alert"></button>
              <span> ${error} </span>
            </div>
            </c:if>
            <div class="alert alert-danger display-hide">
                <button class="close" data-close="alert"></button>
                <span> 请输入用户名称和登录密码. </span>
            </div>
            <div class="form-group">
                <label class="control-label visible-ie8 visible-ie9">用户名称</label>
                <div class="input-icon">
                    <i class="fa fa-user"></i>
                    <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名称" name="username" />
                </div>
            </div>
            <div class="form-group">
                <label class="control-label visible-ie8 visible-ie9">登录密码</label>
                <div class="input-icon">
                    <i class="fa fa-lock"></i>
                    <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="登录密码" name="password" />
                </div>
            </div>
            <c:if test="${not empty loginCaptchaRequired}">
            <div class="row">
                <div class="col-xs-5">
                <input type="text" name="jcaptcha" class="form-control" placeholder="验证码" value="" required>
                </div>
                <div class="col-xs-7">
                <img src="${base}/jcaptcha/login?timstamp=0" title="点击刷新" class="btn btn-block jcaptcha">
                </div>
            </div>
            </c:if>
            <div class="form-actions">
                <label class="checkbox"> <input type="checkbox" name="rememberMe" value="1" /> 记住7天 </label>
                <button type="submit" class="btn green pull-right"> 登录 </button>
            </div>
            <div class="forget-password">
                <p><a href="javascript:;" id="forget-password"> 忘记密码？</a></p>
            </div>
        </form>
        <form class="forget-form" action="${base}/forget-login-password" method="POST">
            <h3>忘记密码 ?</h3>
            <p> 请在下面输入您的邮件地址来重置您的密码. </p>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fa fa-envelope"></i>
                    <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="address" />
                </div>
            </div>
            <div class="form-actions">
                <button type="button" id="back-btn" class="btn red btn-outline">返回 </button>
                <button type="submit" class="btn green pull-right"> 提交 </button>
            </div>
        </form>
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
    <script type="text/javascript" src="${self.path.app}/js/login.js"></script>

    <script>
      $(function(){
        $('img.jcaptcha').click(function(){
          this.src = this.src.replace(/timestamp=\d+/, 'timestamp=' + (new Date()).getTime());
        });
      });
    </script>

</body>

</html>
