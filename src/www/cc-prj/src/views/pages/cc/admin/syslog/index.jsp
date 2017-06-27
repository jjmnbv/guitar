<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">日志管理</c:set>

<c:set target="${self.css}" property="plugins">
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>
</c:set>

<c:set target="${self.js}" property="plugins">
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
</c:set>

<c:set target="${self.js}" property="main">
  <script src="${self.path.app}/js/admin/log.js"></script>
  <script>
    $(function () {
      var modules = [{'name':'LOGIN','text':'用户登录'},{'name':'SYSTEM','text':'系统设置'}];
      var syslogType = [
        {'name':'LOGIN_SUCCESS','text':'登录成功'},
        {'name':'LOGIN_FAIL','text':'登录失败'},
        {'name':'SAVE','text':'保存'},
        {'name':'DELETE','text':'删除'},
        {'name':'EXPORT','text':'导出'},
        {'name':'IMPORT','text':'导入'}
      ];

      $(".selectloader-module").selectloader({modules: modules});

      app.registerTextHelper('syslogModule', modules, 'name', 'text');  //在调用handlebars模版前调用
      app.registerTextHelper('syslogType', syslogType, 'name', 'text');  //在调用handlebars模版前调用

      $('.main-page').pagination({
        "first-store": {
          "page": <spring:eval expression="@FN_ADMIN.toJSON(page)" />,
          "pages": <spring:eval expression="@FN_ADMIN.toJSON(pages)" />
        }
      });
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; 日志管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label class="control-label col-md-4">操作模块</label>
            <div class="col-md-8">
              <select name="syslogModule" class="form-control selectloader-module"
                data-selectloader-store="modules" data-selectloader-vkey="name" data-selectloader-tkey="text">
                <option value="">请选择...</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="control-label col-md-4">操作员号</label>
            <div class="col-md-8">
              <input type="text" name="operUser.id" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="col-md-3 control-label">起止日期</label>
            <div class="col-md-9">
              <div class="input-group date-picker input-daterange" data-date-format="yyyy-mm-dd">
                <input type="text" name="beginTime" class="form-control">
                <span class="input-group-addon"> 至 </span>
                <input type="text" name="endTime" class="form-control">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</c:set>

<c:set target="${self.content}" property="paginationContainer">
  <div class="portlet-title">
    <div class="caption"><i class="fa fa-list"></i> 日志列表 </div>
    <div class="actions">
      <div class="btn-group btn-group-devided" data-toggle="buttons">
        <a href="javascript:;" class="pagination-reload btn btn-circle btn-default btn-sm font-white"><i class="icon-refresh font-white"></i> 刷新 </a>
      </div>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/syslog/page" data-page-template-id="syslog-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="syslog-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <col style="width:40px;" />
        <thead>
          <tr>
            <th> # </th>
            <th> 操作时间 </th>
            <th> 功能模块 </th>
            <th> 操作类型 </th>
            <th> 操作内容 </th>
            <th> 操作员号 </th>
            <th> 主机地址 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <th>{{page-rowindex}}</th>
            <td>{{createTime}}</td>
            <td>{{syslogModule-text}}</td>
            <td>{{syslogType-text}}</td>
            <td>{{remark}}</td>
            <td>{{userId}}</td>
            <td>{{host}}</td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>