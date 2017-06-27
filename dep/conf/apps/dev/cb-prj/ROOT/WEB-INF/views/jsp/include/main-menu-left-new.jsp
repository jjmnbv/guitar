<%@ page contentType="text/html;charset=UTF-8" %>
<spring:eval scope="request" var="loginUser" expression="@FN_CB.getLoginUser()" />
<c:if test="${not empty loginUser }">

</c:if>
<c:set var="forceChangeLoginPassword">false</c:set>
<c:set target="${self}" property="metronicLayout">layout</c:set>

<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
  <meta charset="utf-8" />
  <title>${self.title}</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="" name="description" />
  <meta content="" name="author" />
  <link rel="stylesheet" href="${self.path.google}/fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/font-awesome/css/font-awesome.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/simple-line-icons/simple-line-icons.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/uniform/css/uniform.default.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css"/>
  ${self.css.plugins}
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.css" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/components.min.css" id="style_components"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/plugins.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/layouts/${self.metronicLayout}/css/layout.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/layouts/${self.metronicLayout}/css/themes/darkblue.min.css" id="style_color" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/layouts/${self.metronicLayout}/css/custom.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jstree/dist/themes/default/style.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-file-upload/css/jquery.fileupload.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-file-upload/css/jquery.fileupload-ui.css"/>
  ${self.css.main}
  <link rel="stylesheet" href="${self.path.app}/css/app.css"/>
  <link rel="stylesheet" href="${self.path.app}/css/app-plugins.css"/>
  <link rel="shortcut icon" href="${self.path.app}/img/favicon.ico"/>
</head>

<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white">
    <div class="page-header navbar navbar-fixed-top">
        <div class="page-header-inner">
            <div class="page-logo">
                <a href="{{base}}/index.html">
                    <img src="../../../static/app/1.0.0/img/logo-big.png"
                         width="116"/>
                    <h1 class="logo-text">柏诚消费金融业务系统</h1>
                </a>
            </div>
            <div class="pull-right" id="pull-right">
                
            </div>
        </div>
        <div class="user-status">
         
        </div>
        <div>
            <div class="menu-toggler sidebar-toggler">
                <span>我的快捷键</span>
            </div>
        </div> 
    </div>

  <!-- 修改系统用户密码弹框 -->
  <div id="chgloginpwd-modal" class="modal fade modal-scroll" tabindex="-1" data-replace="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title"><i class="fa fa-edit"></i> <strong><span id="chgloginpwd-msg">修改登录密码</span>（${loginUser.loginName}）</strong></h4>
        </div>
        <div class="modal-body form">
          <form id="edit-user-passwd" action="${base}/profile/change-login-password" role="form" class="form-horizontal">
            <div class="form-body">
              <div class="form-group">
                <label class="control-label col-md-3">原登录密码 <span class="required"> * </span></label>
                <div class="col-md-9">
                  <input type="password" name="plainOldPassword" class="form-control" data-rule-required="1">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">新登录密码 <span class="required"> * </span></label>
                <div class="col-md-9">
                  <input type="password" name="plainNewPassword" id="password" class="form-control passwordCheck" data-rule-required="1">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">新密码确认 <span class="required"> * </span></label>
                <div class="col-md-9">
                  <input type="password" name="plainNewPassword_" class="form-control" data-rule-equalto="#password" data-msg-equalto="两次密码不一致" data-rule-required="1">
                </div>
              </div>
            </div>
            <div class="form-actions right">
              <button type="submit" class="btn btn-success">提交</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="clearfix"> </div>

  <div class="page-container">
    <div class="hide page-sidebar-wrapper">
      <div class="page-sidebar navbar-collapse collapse" data-menu-store="menus"></div>
    </div>
    <div class="page-content-wrapper">
      <div class="page-content" style="margin-left:0px;">
        <c:if test="${not forceChangeLoginPassword}">
          <c:if test="${not empty self.content.main}">
            ${self.content.main}
            <div class="clearfix"></div>
          </c:if>
          <%@ include file="/WEB-INF/views/jsp/include/pagination.jsp"%>
        </c:if>
      </div>
    </div>
    <a href="javascript:;" class="page-quick-sidebar-toggler">
      <i class="icon-login"></i>
    </a>
  </div>

  <div class="page-footer">
    <div class="page-footer-inner">  2016 &copy; 中科柏诚科技(北京)股份有限公司. </div>
    <div class="scroll-to-top">
      <i class="icon-arrow-up"></i>
    </div>
  </div>

  <c:if test="${not empty self.content.free}">
  ${self.content.free}
  </c:if>

  <script>
    window.app = { style: 'vertical', base: '${base}', requestUrl: '${self.url}' };
  </script>

  <!--[if lt IE 9]>
  <script src="${self.path.metronic}/assets/global/plugins/respond.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/excanvas.min.js"></script> 
  <![endif]-->
  <script src="${self.path.handlebars}/handlebars.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/jquery.min.js"></script>

  <c:if test="${not empty self.js.loader}">
  ${self.js.loader}
  </c:if>

<script src="${self.path.metronic}/assets/global/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/js.cookie.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery.blockui.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/uniform/jquery.uniform.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/bootbox/bootbox.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.js"></script>
<script src="${self.path.metronic}/assets/global/scripts/app.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-validation/js/jquery.validate.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-validation/js/additional-methods.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-validation/js/localization/messages_zh.js"></script>
<script src="${self.path.deserialize}/jquery.deserialize.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jstree/dist/jstree.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/vendor/tmpl.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/vendor/load-image.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/vendor/canvas-to-blob.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/blueimp-gallery/jquery.blueimp-gallery.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/jquery.iframe-transport.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-process.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-image.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-audio.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-video.js"></script>
${self.js.plugins}
<script>
  //bootbox 弹框中文化
  bootbox.setLocale("zh_CN");
</script>
<script src="${self.path.app}/js/validation.js"></script>
<script src="${self.path.app}/js/app.js"></script>
<script src="${self.path.app}/js/app-plugins.js"></script>
<script src="${self.path.app}/js/chgloginpwd.js"></script>
<script src="${base}/script/cb/availableMenus"></script>
<script src="${self.path.app}/js/menu.js"></script>
<script type="text/x-handlebars-template" id="menu-template"> 
<ul class="main-menu nav navbar-nav pull-right">
	{{#each mainMenus}}
    <li>
        <a class="nav-item {{#if (menu-active)}} active{{/if}}"
           {{#if (has-children)}}
           href="javascript:;"
           {{else}}
           href="{{../base}}{{url}}"
        {{/if}}
        style="background-image: url({{../base}}/cu/cuicons/loadImage?iconNo={{styleObject.iconClassName}}); background-size:25px;"
        >{{text}}
        </a>
        <ul class="sub-menu">
            {{#each children}}
            <li class="nav-item">
                <a href="{{../../base}}{{url}}"
                   class="nav-link{{#if (has-children)}} nav-toggle{{/if}}"
                >
                    <span class="title">{{text}}</span>
                </a>
                <ul class="{{#if (has-children)}} sub-menu{{/if}}">
                    {{#each children}}
                    <li class="nav-item">
                        <a href="{{../../../base}}{{url}}"
                           class="nav-link">
                            <span class="title">{{text}}</span>
                        </a>
                    </li>
                    {{/each}}
                </ul>
            </li>
            {{/each}}
        </ul>
    </li>
    {{/each}}
</ul>
</script>
<c:if test="${not forceChangeLoginPassword}">
<script>
  $(function(){
  });
</script>
${self.js.main}
</c:if>

<script>
/**
 * 切换页面风格
 */
+ function($, app) {
  $(function() {
    $(".changeMenuLocation").click(function(){
      app.$get($(this).data("changeMenuLocationUrl"), {}, 'text').done(function(resp){
        if(resp == 'SUCCESS') {
          window.location.href = app.requestUrl;
        }
      });
    });
  });
} (window.jQuery, window.app);
</script>
<c:if test="${forceChangeLoginPassword}">
<script>
  var modal = $('#chgloginpwd-modal');
  modal.find('[data-dismiss="modal"]').hide();
  modal.find('#chgloginpwd-msg').html("首次登录，请修改登录密码");
  modal.modal({backdrop: 'static', keyboard: false});
</script>
</c:if>
<script src="${self.path.metronic}/assets/layouts/${self.metronicLayout}/scripts/layout.min.js"></script>
<script src="${self.path.metronic}/assets/layouts/global/scripts/quick-sidebar.min.js"></script>
</body>
</html>
