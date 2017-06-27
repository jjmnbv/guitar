<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<c:set target="${self}" property="title">流程处理</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="loader">
  <!-- <script src=""></script> -->
</c:set>

<c:set target="${self.js}" property="main">
  <script src="${self.path.app}/js/bpm/flowprocess-list.js"></script>
  <script>
  	$(function () {
      $('.main-page').pagination({
        "first-store": {
          "page": <spring:eval expression="@FN_CB.toJSON(page)" />,
          "pages": <spring:eval expression="@FN_CB.toJSON(pages)" />
        }
      });
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; 流程处理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">流程名称:</label>
            <div class="col-md-9">
              <input name="name" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">流程描述:</label>
            <div class="col-md-9">
              <input type="text" name="description" class="form-control">
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</c:set>

<c:set target="${self.content}" property="paginationContainer">
  <div class="portlet-title">
    <div class="caption">
      <span><i class="fa fa-list"></i> 流程列表 </span>
    </div>
    <div class="actions">
      <div class="btn-group btn-group-devided" data-toggle="buttons">
        <a href="javascript:;" class="pagination-reload btn btn-circle btn-default btn-sm font-white"><i class="icon-refresh font-white"></i> 刷新 </a>
      </div>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/workflow/todopage" data-page-template-id="flows-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="flows-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover" id="flowstable">
        <thead>
          <tr>
            <th> # </th>
            <th> 流程名称 </th>
            <th> 流程标识 </th>
            <th> 流程描述 </th>
            <th> 版本号 </th>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td> {{page-rowindex}} </td>
            <td> {{name}} </td>
            <td> {{key}} </td>
            <td> {{description}} </td>
            <td> {{version}} </td>
						<td> <a href="javascript:;" class="flow-start" data-flow-key="{{key}}" data-flowinfo-id="{{id}}">发起</a> </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>