{{#extend "main"}}

  <!-- 页面meta  作者，关键字，描述 -->
  {{#content "meta"}}
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <meta content="" name="keyword"/>
  {{/content}}

  <!-- 页面 title -->
  {{#content "title"}}
    <title>主页</title>
  {{/content}}

  <!-- css插件 -->
  {{#content "css-plugins"}}
    <!-- @Override -->
  {{/content}}

  <!-- 自定义css -->
  {{#content "css-main"}}
    <!-- @Override -->
    <style> .form-group.has-error label { color: #dd4b39; } </style>
  {{/content}}

  <!-- 首屏渲染数据js-loader -->
  {{#content "js-loader"}}
    <!-- @Override -->
  {{/content}}

  <!-- js插件 -->
  {{#content "js-plugins"}}
    <!-- @Override -->
  {{/content}}

  <!-- 自定义js -->
  {{#content "js-main"}}
    <!-- @Override -->
    <script src="{{path.base}}/script/metadata.js"></script>
    <script src="{{path.app}}/js/${root.moduleName}/urls.js"></script>
    <script>
      $(function () {
        $("#msgid").data('selectloaderStore', 'messages').data('selectloaderVkey', 'id').data('selectloaderTkey', 'desc').selectloader(app.metadata);
        $("#msgid").change(function () {
          $('#response').val('');
          var id = $(this).val();
          var url = '{{path.base}}/${root.moduleName}/' + id + 'Request.json';
          $.get(url, function (data) {
            if (data) {
              $("#request").val(data);
            } else {
              $("#request").val('{}');
            }
          }, 'text');
        });
        $('#test').click(function () {
          var msgid = $('#msgid').val();
          if(!msgid) return;
          var url = app[msgid.toUpperCase()].format(JSON.parse($('#request').val()));
          $.ajax({
            type: 'post',
            dataType: 'text',
            url: url,
            data: JSON.parse($('#request').val()),
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
  {{/content}}

  <!-- 页面主体 -->
  {{#content "content-main"}}
    <!-- @Override -->
    <div style="margin: 0% auto;width: 90%;background: #fff;padding: 15px;color: #444;border-top: 0;color: #666;">
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
          <textarea class="form-control" id="request" rows="8">{}</textarea>
        </div>
        <div class="form-group">
          <label for="response">响应报文</label>
          <textarea class="form-control" id="response" rows="10" disabled></textarea>
        </div>
        <button type="button" class="btn btn-primary" id="test">发送报文</button>
      </form>
    </div>
  {{/content}}

  <!-- 搜索按钮组，筛选条件，表格，分页的总容器(只有需要单独做查询样式的才需要引入) -->
  {{#content "content-pagination"}}
    <!-- @Override -->
  {{/content}}

  <!-- 页面模态框 -->
  {{#content "content-free"}}
    <!-- @Override -->
  {{/content}}

  <!-- 页面组件模板 -->
  {{#content "content-component"}}
    <!-- @Override -->
  {{/content}}

{{/extend}}
