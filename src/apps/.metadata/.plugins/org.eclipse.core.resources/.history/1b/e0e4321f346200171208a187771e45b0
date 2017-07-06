<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">系统字典管理</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/admin/wordbook.js"></script>
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
    <h1><small>系统管理 &gt; 字典管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">编号:</label>
            <div class="col-md-9">
              <input name="code" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">名称</label>
            <div class="col-md-9">
              <input name="name" type="text" class="form-control">
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</c:set>

<c:set target="${self.content}" property="paginationContainer">
  <div class="portlet-title">
    <div class="caption"><i class="fa fa-list"></i> 数据字典列表 </div>
    <div class="actions">
      <div class="btn-group btn-group-devided" data-toggle="buttons">
        <a href="#" title="新增" data-target="#wordbook-add-modal" data-toggle="modal" class="btn btn-circle btn-default btn-sm font-white"><i class="fa fa-plus font-white"></i> 新增 </a>
        <a href="javascript:;" class="pagination-reload btn btn-circle btn-default btn-sm font-white"><i class="icon-refresh font-white"></i> 刷新 </a>
      </div>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/wordbook/page" data-page-template-id="wordbook-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="wordbook-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> # </th>
            <th> 编号 </th>
            <th> 名称 </th>
            <th> 描述 </th>
            <th> 排序 </th>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td> {{page-rowindex}} </td>
            <td> <a href="#" data-target="#wordbook-edit-modal" data-toggle="modal" data-wordbook-id="{{id}}">{{code}}</a> </td>
            <td> {{name}} </td>
            <td> {{description}} </td>
            <td> {{dispOrder}} </td>
            <td>
              <a href="{{base}}/wordbook/items-view/{{id}}">字典项编辑</a>
              <a href="javascript:;" data-delete-wb-id="{{id}}">删除</a>
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>

  <div id="wordbook-add-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">新增字典</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/wordbook/save" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">名称:</label>
                    <div class="col-md-9">
                      <input name="id" type="hidden">
                      <input name="name" type="text" class="form-control" maxlength="30" required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">编号:</label>
                    <div class="col-md-9">
                      <input name="code" type="text" class="form-control input-sm" maxlength="30" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">描述:</label>
                    <div class="col-md-9">
                      <input name="description" type="text" class="form-control  maxlength="80" input-sm">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">排序:</label>
                    <div class="col-md-9">
                      <input name="dispOrder" type="text" class="form-control input-sm digits" maxlength="3" required>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline dark ok">确认</button>
          <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
        </div>
      </div>
    </div>
  </div>

  <div id="wordbook-edit-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">编辑字典<span class="edit_wb_id"></span></h4>
        </div>
        <div class="modal-body">
          <form action="${base}/wordbook/save" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <input type="hidden" name="id">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">名称:</label>
                    <div class="col-md-9">
                      <input name="name" type="text" class="form-control" maxlength="30" required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">编号:</label>
                    <div class="col-md-9">
                      <input name="code" type="text" class="form-control" maxlength="20" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">描述:</label>
                    <div class="col-md-9">
                      <input name="description" type="text" class="form-control"  maxlength="50">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">排序:</label>
                    <div class="col-md-9">
                      <input name="dispOrder" type="text" class="form-control input-sm digits" maxlength="3" required>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline dark ok">确认</button>
          <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
        </div>
      </div>
    </div>
  </div>

</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
