<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">系统菜单管理</c:set>

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
  <script src="${self.path.app}/js/admin/menu.js"></script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; 系统菜单管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
  <div class="col-md-3 menu-tree" data-jstreepanel-store="menuTrees">
    <div>
      <i class="fa fa-cogs"></i>
      <span>菜单树</span>
    </div>
    <div class="jstree-panel"></div>
  </div>
  <div class="col-md-9">
    <form id="edit-menu-form" action="${base}/menu/update" method="POST">
      <div class="portlet light white">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-cogs"></i>系统菜单编辑</div>
          <div class="tools">
            <button type="button" class="btn btn-sm btn-circle green btn-outline ok" disabled>保存</button>
            <button type="button" class="btn btn-sm btn-circle green btn-outline cancel">重置</button>
          </div>
        </div>
        <div class="portlet-body flip-scroll">
          <div class="form-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">名称</span>
                    <input type="hidden" name="id">
                    <input type="text" name="text" class="form-control" maxlength="80" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">链接</span>
                    <input type="text" name="url" class="form-control input-sm" maxlength="120">
                  </div>
                </div>
                <div class="form-group" style="display: none;">
                  <div class="input-group">
                    <span class="input-group-addon">样式</span>
                    <textarea name="style" class="form-control input-sm"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">排序</span>
                    <input type="text" name="dispOrder" class="form-control digits" maxlength="3">
                  </div>
                </div>
              </div>
              <!-- /.span -->
            </div>
            <div class="row ">
              <div class="col-md-12">
                <div class="portlet light portlet-fit">
                  <div class="portlet-title">
                    <div class="caption">
                      <i class="icon-settings"></i>
                      <span class="caption-subject sbold uppercase">菜单页面资源</span>
                    </div>
                    <div class="tools">
                      <span class="caption-subject sbold uppercase" style="display:none;" id="add_action_btn"><a>新增</a></span>
                    </div>
                  </div>
                  <div class="portlet-body">
                    <table class="table table-striped table-hover table-bordered" id="action_list" data-action-list-template-id="action_list_template">
                      <thead>
                        <tr>
                          <th> 名称 </th>
                          <th> 链接 </th>
                          <th> 预授权 </th>
                          <th> 排序 </th>
                          <th style="width:15%;text-align:center;"> 操作 </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="portlet-footer"></div>
      </div>
    </form>
  </div>
  <div class="clearfix"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <!-- 菜单页面资源列表模版 -->
  <script type="text/x-handlebars-template" id="action_list_template">
    {{#if actions}}
      {{#each actions}}
        <tr data-action-id="{{id}}" data-menu-id="{{../id}}">
          <td data-name="text">{{text}}</td>
          <td data-name="url">{{url}}</td>
          <td data-name="status" data-value="{{status}}">{{#if (eq status 'AUTHORIZED')}}是{{else}}否{{/if}}</td>
          <td data-name="dispOrder">{{dispOrder}}</td>
          <td class="text-center" data-name="operations">
            <a href="javascript:;" class="edit-action">编辑</a>
            <a href="javascript:;" class="del-action">删除</a>
          </td>
        </tr>
      {{/each}}
    {{else}}
      <tr class="empty">
        <td colspan="5" align="center">暂无记录</td>
      </tr>
    {{/if}}
  </script>

  <!-- 新增菜单modal -->
  <div class="modal fade" id="add_menu" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">新增菜单</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/menu/create" method="POST">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">名称</span>
                    <input type="hidden" name="parent.id">
                    <input type="hidden" name="level" value="1">
                    <input type="text" name="text" class="form-control  input-sm" maxlength="80" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">链接</span>
                    <input type="text" name="url" class="form-control input-sm" maxlength="120">
                  </div>
                </div>
                <div class="form-group" style="display: none;">
                  <div class="input-group">
                    <span class="input-group-addon">样式</span>
                    <textarea name="style" class="form-control input-sm">{}</textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">排序</span>
                    <input type="text" name="dispOrder" class="form-control digits" maxlength="3">
                  </div>
                </div>
              </div>
              <!-- /.span -->
            </div>
            <!-- /.row -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success ok">提交</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
