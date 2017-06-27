<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">系统岗位管理</c:set>

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
  <script src="${self.path.app}/js/admin/position.js"></script>
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
    <h1><small>系统管理 &gt; 系统岗位管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">名称:</label>
            <div class="col-md-9">
              <input name="name" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">描述:</label>
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
    <div class="caption"><i class="fa fa-list"></i> 岗位列表 </div>
    <div class="actions">
      <div class="btn-group btn-group-devided" data-toggle="buttons">
        <a href="#" title="新增" data-target="#position-add-modal" data-toggle="modal" class="btn btn-circle btn-default btn-sm font-white"><i class="fa fa-plus font-white"></i> 新增 </a>
        <a href="javascript:;" class="pagination-reload btn btn-circle btn-default btn-sm font-white"><i class="icon-refresh font-white"></i> 刷新 </a>
      </div>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/position/page" data-page-template-id="position-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="position-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> # </th>
            <th> 岗位名称 </th>
            <th> 岗位描述 </th>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td> {{page-rowindex}} </td>
            <td><a href="#" data-target="#position-edit-modal" data-toggle="modal" data-position-id="{{id}}">{{name}}</a></td>
            <td> {{description}} </td>
            <td>
              <a href="{{base}}/position/users-view/{{id}}">岗位对象</a>
              <a href="javascript:;" data-delete-position-id="{{id}}" data-delete-position-name="{{name}}">删除</a>
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>

  <div id="position-add-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">新增岗位</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/position/create" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">名称:</label>
                    <div class="col-md-9">
                      <input name="name" type="text" class="form-control input-sm isNotSpecialCharacter" maxlength="20" required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">描述:</label>
                    <div class="col-md-9">
                      <input name="description" type="text" class="form-control input-sm" required>
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

  <div id="position-edit-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">修改岗位<span class="edit_position_id"></span></h4>
        </div>
        <div class="modal-body">
          <form action="${base}/position/update" role="form" class="form-horizontal">
            <input type="hidden" name="id" readonly="readonly" required>
            <input type="hidden" name="name_">
            <input type="hidden" name="description_">
            <div class="form-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">名称:</label>
                    <div class="col-md-9">
                      <input name="name" type="text" class="form-control input-sm isNotSpecialCharacter" maxlength="20" required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">描述:</label>
                    <div class="col-md-9">
                      <input name="description" type="text" class="form-control input-sm" required>
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
