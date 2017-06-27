<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>移动报文前置--首页</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="${self.path.bootstrap}/css/bootstrap.min.css">
    <link rel="stylesheet" href="${self.path.FontAwesome}/css/font-awesome.min.css">
    <link rel="stylesheet" href="${self.path.ionicons}/css/ionicons.min.css">
    ${self.css.plugins}
    <link rel="stylesheet" href="${self.path.app}/css/app.css" />
    ${self.css.main}

    <!--[if lt IE 9]>
      <script src="${self.path.html5shiv}/html5shiv.min.js"></script>
      <script src="${self.path.respond}/respond.min.js"></script>
    <![endif]-->
  </head>
  <body style="background: #d2d6de;">
    <div style="margin: 7% auto;width: 70%;background: #fff;padding: 15px;color: #444;border-top: 0;color: #666;">
      <h3 class="text-center">报文接口在线调试</h3>
      <form>
        <div class="form-group">
          <label for="msgid">报文标识</label>
          <select id="msgid" class="form-control" data-text-input="#msgid_">
            <option value="">请选择...</option>
          </select>
        </div>
        <div class="form-group">
          <label for="request">请求报文</label>
          <textarea class="form-control" id="request" rows="5">{}</textarea>
        </div>
        <div class="form-group">
          <label for="response">响应报文</label>
          <textarea class="form-control" id="response" rows="8" disabled></textarea>
        </div>
        <button type="button" class="btn btn-primary" id="test">发送报文</button>
      </form>
    </div>
    <script src="${self.path.handlebars}/handlebars.js"></script>
    <script src="${self.path.jquery}/jquery.min.js"></script>
    <script src="${self.path.bootstrap}/js/bootstrap.min.js"></script>
    <script src="${self.path.app}/js/app.js"></script>
    <script src="${self.path.app}/js/app-plugins.js"></script>
    <script src="${base}/static/protocol/metadata.js"></script>
    <script>
      $(function () {
        $("#msgid").data('selectloaderStore', 'messages').data('selectloaderVkey', 'id').data('selectloaderTkey', 'desc').selectloader(app.metadata);
        $("#msgid").change(function () {
          var id = $(this).val();
          var url = '${base}/static/protocol/' + id.replace(/(\w)/, function (v) { return v.toUpperCase() }) + 'Request.json';
          $.get(url, function (data) {
            if (data) {
              $("#request").val(data);
            } else {
              $("#request").val('{}');
            }
          }, 'text');
        });
        $('#test').click(function () {
          $.ajax({
            type: 'post',
            async: true,
            contentType: 'application/json',
            dataType: 'text',
            cache: false,
            url: '${base}/' + app.metadata.path + '/' + $('#msgid').val(),
            data: $('#request').val(),
            success: function (data, textStatus, jqXHR) {
              $('#response').val(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus) {
                alert(textStatus);
              } else if (errorThrown) {
                alert(errorThrown);
              } else {
                alert('未知错误');
              }
            }
          });
        });
      });
    </script>
  </body>
</html>
