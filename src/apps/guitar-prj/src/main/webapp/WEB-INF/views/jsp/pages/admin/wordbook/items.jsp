<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">系统字典项管理</c:set>

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
  <script src="${self.path.app}/js/admin/wordbook-items.js"></script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; <a href="${base}/wordbook/index">字典管理</a> &gt; 字典项管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
  <form>
    <div class="portlet box blue">
      <div class="portlet-title">
        <div class="caption"><i class="fa fa-cogs"></i>字典信息</div>
      </div>
      <div class="portlet-body flip-scroll">
        <div class="form-body">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">ID</span>
                  <input type="text" id="wordBookId" name="id" class="form-control" disabled="disabled" value="${wordbook.id}">
                </div>
              </div>
            </div>
            <!-- /.span -->
            <div class="col-md-3">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">编号</span>
                  <input type="text" name="code" class="form-control" disabled="disabled" value="${wordbook.code}">
                </div>
              </div>
            </div>
            <!-- /.span -->
            <div class="col-md-3">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">名称</span>
                  <input type="text" name="name" class="form-control" disabled="disabled" value="${wordbook.name}">
                </div>
              </div>
            </div>
            <!-- /.span -->
            <div class="col-md-3">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">描述</span>
                  <input type="text" name="description" class="form-control" disabled="disabled" value="${wordbook.description}">
                </div>
              </div>
            </div>
            <!-- /.span -->
          </div>
          <!-- /.row -->
        </div>
      </div>
    </div>
  </form>

  <div class="portlet box green" data-wordbook-items-id="#wordbook-items">
    <div class="portlet-title">
      <div class="caption"><i class="fa fa-cogs"></i>字典项信息</div>
      <div class="tools">
        <button type="button" class="btn btn-sm btn-circle red btn-outline" id="add_wordbook_item">
          <i class="fa fa-plus"></i><span>新增字典项</span>
        </button>
        <a href="javascript:;" class="reload"> </a>
      </div>
    </div>
    <div class="portlet-body flip-scroll">
      <table class="table table-bordered table-striped table-condensed flip-content">
        <thead class="flip-content">
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>描述</th>
            <th>排序</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr class="empty"><td colspan="5" align="center">暂无记录</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="wordbook-items">
    {{#if childrens}}
      {{#each childrens}}
        <tr data-item-id="{{id}}" data-item-code={{code}}>
          <td data-name="code">{{code}}</td>
          <td data-name="name">{{name}}</td>
          <td data-name="description">{{description}}</td>
          <td data-name="dispOrder">{{dispOrder}}</td>
          <td data-name="operations">
            <a href="javascript:;" class="edit-item">编辑</a>
            <a href="javascript:;" class="del-item">删除</a>
          </td>
        </tr>
      {{/each}}
    {{else}}
      <tr class="empty">
        <td colspan="5" align="center">暂无记录</td>
      </tr>
    {{/if}}
  </script>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
