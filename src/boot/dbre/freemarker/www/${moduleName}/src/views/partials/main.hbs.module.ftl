<!DOCTYPE html>
<!--[if IE 8]>
<html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]>
<html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <!--  页面信息  -->
    {{#block "meta"}}{{/block}}
    <!--  页面标题  -->
    {{#block "title"}}{{/block}}

    <link rel="stylesheet"
          href="{{path.google}}/fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/font-awesome/css/font-awesome.min.css"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/simple-line-icons/simple-line-icons.min.css"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/uniform/css/uniform.default.css"/>
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/bootstrap-toastr/toastr.min.css"/>
    <link rel="stylesheet" href="{{path.metronic}}/assets/global/css/components.min.css"
          id="style_components"
    />
    <link rel="stylesheet" href="{{path.metronic}}/assets/global/css/plugins.min.css"/>
    <link rel="stylesheet" href="{{path.metronic}}/assets/layouts/layout/css/layout.min.css"/>
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/layouts/layout/css/themes/darkblue.min.css"
          id="style_color"
    />
    <link rel="stylesheet" href="{{path.metronic}}/assets/layouts/layout/css/custom.min.css"/>
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/jstree/dist/themes/default/style.min.css"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/jquery-file-upload/css/jquery.fileupload.css"
    />
    <link rel="stylesheet"
          href="{{path.metronic}}/assets/global/plugins/jquery-file-upload/css/jquery.fileupload-ui.css"
    />
    <link href="{{path.metronic}}/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="{{path.metronic}}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />
    <link href="{{path.metronic}}/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="{{path.metronic}}/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css" />

    <!--[if lt IE 9]>
    <script src="{{path.metronic}}/assets/global/plugins/respond.min.js"></script>
    <script src="{{path.metronic}}/assets/global/plugins/excanvas.min.js"></script>
    <![endif]-->

    <!--  第三方css  -->
    {{#block "css-plugins"}}{{/block}}
    <link rel="shortcut icon" href="{{path.app}}/img/favicon.ico"/>
    <link rel="stylesheet" href="{{path.app}}/css/reset.css"/>
    <link rel="stylesheet" href="{{path.app}}/css/app.css"/>
    <link rel="stylesheet" href="{{path.app}}/css/app-plugins.css"/>
    <!--  自定义css  -->
    {{#block "css-main"}}{{/block}}
</head>

<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white">
<!-- 生成html填充处  -->
<div id="app"></div>
<!-- 首屏数据模板  -->
<script id="mainTemplate" type="text/x-handlebars-template">
    {{!-- 页面头部  --}}
    {{> header}}
    <div class="page-container">
        {{!--  左菜单  --}}
        {{> left-menu}}
        <div class="page-content-wrapper">
            <div class="page-content">
                {{!--  如果用户是首次登录
                    {{#block "content-main"}}{{/block}}内容不会渲染，而是弹出下面的
                    {{> change-login-pwd}}修改密码弹框
                --}}
                {{{{raw}}}}
                    {{#unless forceChangeLoginPassword}}
                {{{{/raw}}}}
                        {{> crumbs}}
                        {{#block "content-main"}}{{/block}}
                        {{#block "content-pagination"}}
                            {{> pagination}}
                        {{/block}}
                {{{{raw}}}}
                    {{/unless}}
                {{{{/raw}}}}
            </div>
        </div>
        <a href="javascript:;" class="page-quick-sidebar-toggler">
            <i class="icon-login"></i>
        </a>
    </div>
    {{!--  页面底部  --}}
    {{> footer}}
    {{!--  修改密码弹框  --}}
    {{> change-login-pwd}}
</script>
<!-- 弹框类占位符  -->
{{#block "content-free"}}{{/block}}
<!-- 提示类弹框  -->
{{> modal}}
<script src="{{path.metronic}}/assets/global/plugins/jquery.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/js.cookie.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery.blockui.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/uniform/jquery.uniform.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootbox/bootbox.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-toastr/toastr.min.js"></script>
<script src="{{path.metronic}}/assets/global/scripts/app.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-validation/js/jquery.validate.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-validation/js/additional-methods.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-validation/js/localization/messages_zh.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jstree/dist/jstree.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/vendor/tmpl.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/vendor/load-image.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/vendor/canvas-to-blob.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/blueimp-gallery/jquery.blueimp-gallery.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/jquery.iframe-transport.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-process.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-image.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-audio.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/jquery-file-upload/js/jquery.fileupload-video.js"></script>
<script src="{{path.metronic}}/assets/layouts/layout/scripts/layout.min.js"></script>
<script src="{{path.metronic}}/assets/layouts/global/scripts/quick-sidebar.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/moment.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
<script src="{{path.metronic}}/assets/global/plugins/clockface/js/clockface.js" type="text/javascript"></script>
<script src="{{path.handlebars}}/handlebars.js"></script>
<script src="{{path.deserialize}}/jquery.deserialize.min.js"></script>
<!-- js第三方库  -->
{{#block "js-plugins"}}{{/block}}
<script>
    /**
     * 初始化全局app命名空间
     * @type Object
     */
    window.app = window.app || {};
</script>
<!-- 公共模拟数据 -->
<script src="{{path.base}}/script/${moduleName}/app.js"></script>
<script src="{{path.base}}/script/${moduleName}/menus.js"></script>
<script src="{{path.base}}/script/${moduleName}/user-info.js"></script>
<!-- 公共js文件  -->
<script src="{{path.app}}/js/helpers.js"></script>
<script src="{{path.app}}/js/app.js"></script>
<!-- 首屏数据  -->
{{#block "js-loader"}}{{/block}}
<script>
    $('#app').append(Handlebars.compile($('#mainTemplate').html())(app));
</script>
<script src="{{path.app}}/js/init.js"></script>
<script src="{{path.app}}/js/${moduleName}/urls.js"></script>
<script src="{{path.app}}/js/app-plugins.js"></script>
<script src="{{path.app}}/js/validation.js"></script>
<script src="{{path.app}}/js/chgloginpwd.js"></script>

<!-- 组件模板类占位符  内容有可能是js文件，也有可能是handlebar模板，所以放在这个位置  -->
{{#block "content-component"}}{{/block}}
<!-- 自定义js文件  -->
{{#block "js-main"}}{{/block}}
</body>
</html>