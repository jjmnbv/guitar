<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<c:set target="${self}" property="title">自定义表单-列表</c:set>

<c:set target="${self.css}" property="plugins">
</c:set>
<c:set target="${self.js}" property="plugins">
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="loader">
  <!-- <script src=""></script> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/jsform/list.js"></script>
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
    <h1><small>自定义表单-列表</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">表单id:</label>
            <div class="col-md-9">
              <input name="htmlId" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">表单名称</label>
            <div class="col-md-9">
              <input type="text" name="name" class="form-control">
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</c:set>

<c:set target="${self.content}" property="paginationContainer">
  <div class="portlet-title">
    <div class="caption"><i class="fa fa-list"></i> 自定义表单-列表 </div>
    <div class="tools">
      <a href="javascript:;" class="pagination-reload"><i class="icon-refresh font-white"></i> </a>
      <a href="${base}/jsform/form" target="_black" title="新增"><i class="fa fa-plus font-white"></i> </a>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/jsform/page" data-page-template-id="jsform-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="jsform-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> # </th>
            <th> 表单ID </th>
            <th> 表单名称 </th>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td> {{page-rowindex}} </td>
            <td> {{htmlId}} </td>
            <td> {{name}} </td>
            <td>
              <a href="${base}/jsform/view/{{id}}" target="_black">预览</a>
              <a href="${base}/jsform/form?id={{id}}" target="_black">修改</a>
              <a href="javascript:;" data-remove-url="${base}/jsform/remove/{{id}}">删除</a>
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
