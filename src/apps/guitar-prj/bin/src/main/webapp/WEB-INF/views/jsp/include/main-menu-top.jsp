<%@ page contentType="text/html;charset=UTF-8" %>
<spring:eval scope="request" var="loginUser" expression="@FN_CB.getLoginUser()" />
<c:if test="${not empty loginUser }">
</c:if>
<c:set target="${self}" property="metronicLayout">layout3</c:set>

<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
  <meta charset="utf-8" />
  <title>${self.title}</title>
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
  ${self.css.plugins}
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.css" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/components.min.css" id="style_components" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/css/plugins.min.css" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/layouts/${self.metronicLayout}/css/layout.min.css" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/layouts/${self.metronicLayout}/css/themes/default.min.css" id="style_color" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/layouts/${self.metronicLayout}/css/custom.min.css" />
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jstree/dist/themes/default/style.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-file-upload/css/jquery.fileupload.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-file-upload/css/jquery.fileupload-ui.css"/>
  ${self.css.main}
  <link rel="stylesheet" href="${self.path.app}/css/app.css"/>
  <link rel="stylesheet" href="${self.path.app}/css/app-plugins.css"/>
  <link rel="shortcut icon" href="${self.path.app}/img/favicon.ico"/>
</head>

<body class="page-container-bg-solid page-boxed">
  <div class="page-header">
    <div class="page-header-top">
      <div class="container-fluid">
        <div class="page-logo">
          <a href="${base}/index"><img src="${self.path.app}/img/logo-big.png" class="logo-default" width="160" height="30" style="margin-top: 12px;"></a>
          <div class="menu-toggler sidebar-toggler"> </div>
        </div>
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"></a>
        <div class="top-menu">
          <ul class="nav navbar-nav pull-right">
            <li class="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                <i class="icon-bell"></i>
                <span class="badge badge-default"> ${fn:length(inboxs)} </span>
              </a>
              <ul class="dropdown-menu">
                <li class="external">
                  <h3>系统消息提醒</h3> <a href="${base}/common/mail/inboxs">查看所有</a>
                </li>
                <li>
                  <ul class="dropdown-menu-list scroller" style="height: 250px;" data-handle-color="#637283">
                    <c:forEach var="inbox" items="${inboxs}">
                      <li>
                        <a href="${base}/common/mail/inbox/read/${inbox.id}">
                          <span class="time"><fmt:formatDate value="${inbox.envelope.createTime}" pattern="yyyy/MM/dd" /></span>
                          <span class="details">
                            <span class="label label-sm label-icon label-warning"> <i class="fa fa-bell-o"></i> </span>
                            <c:choose>
                              <c:when test="${fn:length(inbox.envelope.message) > 15}">
                                <c:out value="${fn:substring(inbox.envelope.message, 0, 15)}.." />
                              </c:when>
                              <c:otherwise>
                                <c:out value="${inbox.envelope.message}" />
                              </c:otherwise>
                            </c:choose>
                          </span>
                        </a>
                      </li>
                    </c:forEach>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown dropdown-user dropdown-dark">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                <img alt="" class="img-circle" src="${self.path.metronic}/assets/layouts/layout3/img/avatar9.jpg">
                <span class="username username-hide-mobile">${loginUser.realName}</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-default">
                <li><a href="${base}/profile/index"><i class="icon-user"></i> 个人信息 </a></li>
                <li class="divider"></li>
                <c:choose>
                  <c:when test="${menuLocation == 'left'}">
                    <li><a href="#" class="changeMenuLocation" data-change-menu-location-url="${base}/change-menu-location/top" ><i class="fa fa-gear"></i> 切换页面风格 </a></li>
                  </c:when>
                  <c:otherwise>
                    <li><a href="#" class="changeMenuLocation" data-change-menu-location-url="${base}/change-menu-location/left" ><i class="fa fa-gear"></i> 切换页面风格 </a></li>
                  </c:otherwise>
                </c:choose>
                <li><a href="#" data-target="#chgloginpwd-modal" data-toggle="modal"><i class="icon-user"></i> 修改密码 </a></li>
                <li><a href="${base}/logout"> <i class="icon-key"></i> 退出 </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-header-menu">
      <div class="container-fluid">
        <div class="hor-menu" data-menu-store="menus"></div>
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
    <div class="page-content-wrapper">
      <div class="page-content">
        <c:if test="${not forceChangeLoginPassword}">
          <c:if test="${not empty self.content.main}">
            ${self.content.main}
            <div class="clearfix"></div>
          </c:if>
          <%@ include file="/WEB-INF/views/jsp/include/pagination.jsp"%>
        </c:if>
      </div>
    </div>
  </div>
  <div class="page-footer">
    <div class="container-fluid">2016 &copy; 中科柏诚科技(北京)股份有限公司. </div>
  </div>
  <div class="scroll-to-top">
    <i class="icon-arrow-up"></i>
  </div>

  <c:if test="${not empty self.content.free}">
    ${self.content.free}
  </c:if>

  <script>
    window.app = { style: 'hor', base: '${base}', requestUrl: '${self.url}' };
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
  <script src="${self.path.app}/js/dropdownTableSelect.js"></script>
  <script src="${base}/script/wordbook"></script>
  <script src="${self.path.app}/js/chgloginpwd.js"></script>
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