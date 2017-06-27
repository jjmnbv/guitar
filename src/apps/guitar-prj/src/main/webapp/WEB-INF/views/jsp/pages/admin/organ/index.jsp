<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">系统组织机构管理</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/select2/css/select2.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jstree/dist/themes/default/style.min.css" />
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
  <script src="${self.path.metronic}/assets/global/plugins/select2/js/select2.full.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/jstree/dist/jstree.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/admin/organ.js"></script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; 系统组织机构管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
  <div class="col-md-3 organ-tree" data-jstreepanel-store="organTrees">
    <div>
      <i class="fa fa-cogs"></i>
      <span>系统组织机构树</span>
    </div>
    <div class="jstree-panel"></div>
  </div>
  <div class="col-md-9">
    <form id="edit-organ-form" action="${base}/organ/update" method="POST">
      <div class="portlet light white">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-cogs"></i>系统组织机构编辑</div>
          <div class="tools">
            <a href="${base}/export/organs/xlsx" title="导出"><i class="fa fa-download"></i> </a>
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
                    <input type="text" name="name" class="form-control input-sm isNotSpecialCharacter" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">描述</span>
                    <textarea name="description" class="form-control input-sm"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">区域</span>
                    <select name="area" class="form-control wordbooks" data-selectloader-store="area" required>
                      <option value="">请选择...</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">地址</span>
                    <input type="text" name="address" class="form-control input-sm">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">邮箱</span>
                    <input type="text" name="email" class="form-control input-sm email">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">联系电话</span>
                    <input type="text" name="tel" class="form-control input-sm isMobilePhone">
                  </div>
                </div>
              </div>
              <!-- /.span -->
            </div>
            <!-- /.row -->
            <div class="row text-center ">
              <div class="kd_padding20tb">
                <button type="button" class="btn  btn-circle green btn-outline ok" disabled>保存</button>
                <button type="button" class="btn  btn-circle green btn-outline cancel">重置</button>
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
  <div class="modal fade" id="add_organ" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">新增组织机构</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/organ/create" method="POST">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">名称</span>
                    <input type="hidden" name="id">
                    <input type="hidden" name="parent.id">
                    <input type="text" name="name" class="form-control input-sm isNotSpecialCharacter" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">描述</span>
                    <textarea name="description" class="form-control input-sm"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">区域</span>
                    <select name="area" class="form-control wordbooks" data-selectloader-store="area" required>
                      <option value="">请选择...</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">地址</span>
                    <input type="text" name="address" class="form-control input-sm">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">邮箱</span>
                    <input type="text" name="email" class="form-control input-sm  email">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">联系电话</span>
                    <input type="text" name="tel" class="form-control input-sm isMobilePhone">
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
