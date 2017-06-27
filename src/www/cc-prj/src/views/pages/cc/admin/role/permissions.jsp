<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">系统角色-权限设置</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jstree/dist/themes/default/style.min.css" />
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
  <script src="${self.path.metronic}/assets/global/plugins/jstree/dist/jstree.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/admin/role-permissions.js"></script>
  <script>
    $(function () {
      var resourceJsTree = <spring:eval expression="@FN_ADMIN.toJSON(resourceJsTree)" />;
      app.resourceJsTreeInit($(".resource-tree"), {
        "resourceTree": resourceJsTree
      });
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; <a href="${base}/role/index">系统角色管理</a> &gt; 权限设置</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
  <form id="role-permissions" action="${base}/role/permissions-update" method="POST">
    <div class="portlet box blue">
      <div class="portlet-title">
        <div class="caption"><i class="fa fa-cogs"></i>系统角色-权限设置</div>
        <div class="tools">
          <button type="button" class="btn btn-sm btn-circle green btn-outline ok">保存</button>
          <button type="button" class="btn btn-sm btn-circle green btn-outline cancel">取消</button>
        </div>
      </div>
      <div class="portlet-body flip-scroll">
        <div class="form-body">
          <div class="row">
            <div class="col-md-offset-4 col-md-4">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">名称</span>
                  <input type="hidden" name="id" value="${role.id}">
                  <input type="text" name="name" value="${role.name}" class="form-control input-sm" readonly="readonly" required>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">描述</span>
                  <input type="text" name="description" value="${role.description}" class="form-control input-sm" readonly="readonly" required>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <input type="hidden" name="selectedIds">
                  <div class="resource-tree" data-jstreepanel-store="resourceTree">
                    <div class="jstree-panel"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portlet-footer"></div>
    </div>
  </form>
</c:set>

<c:set target="${self.content}" property="free">
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
