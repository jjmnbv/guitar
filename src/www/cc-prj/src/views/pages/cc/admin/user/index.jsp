<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<c:set target="${self}" property="title">系统用户管理</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/select2/css/select2.min.css">
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/select2/js/select2.full.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="loader">
  <!-- <script src=""></script> -->
  <script>
    $(function () {
      $(".selectloader-roles").selectloader({
        roles: <spring:eval expression="@FN_ADMIN.rolesToJSON()" />
      });
      $('.radio-list').radioloader(app.wordbooks);

      $(".jstreeselect-input").jstreeselect({
        'orgtree': <spring:eval expression="@FN_ADMIN.organJsTreeJSON()" />
      });
    });
  </script>
</c:set>
<c:set target="${self.js}" property="main">
  <script src="${self.path.app}/js/admin/user.js"></script>
  <script>
    $(function () {
      app.registerTextHelper('sex', app.wordbooks['sex'], 'code', 'name');  //在调用handlebars模版前调用

      var userStatus = [
        {'name':'NORMAL','text':'正常'},
        {'name':'INVALID','text':'无效'},
        {'name':'LOCKED','text':'锁定'},
        {'name':'UNLOCK','text':'解锁'}
      ];
      $('.userStatus').selectloader({userStatus:userStatus});
      app.registerTextHelper('status', userStatus, 'name', 'text');  //在调用handlebars模版前调用
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
    <h1><small>系统管理 &gt; 系统用户管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">姓名:</label>
            <div class="col-md-9">
              <input name="realName" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">登录帐号:</label>
            <div class="col-md-9">
              <input type="text" name="loginName" class="form-control">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-3 control-label">用户角色:</label>
            <div class="col-md-9">
              <select name="roleNames" class="form-control selectloader-roles" data-selectloader-store="roles" data-selectloader-vkey="name" data-selectloader-tkey="description" data-placeholder="用户角色...">
                <option value="">请选择...</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-3 control-label">所在组/部门:</label>
            <div class="col-md-9">
              <input type="text" name="organ.id" class="form-control jstreeselect-input" data-jstreeselect-store="orgtree" placeholder="所在组/部门...">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-3 control-label">状态:</label>
            <div class="col-md-9">
              <select name="status" class="form-control userStatus" data-selectloader-val="NORMAL" data-placeholder="状态..." data-selectloader-store="userStatus" data-selectloader-vkey="name" data-selectloader-tkey="text">
                <option value="">请选择...</option>
              </select>
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
      <span><i class="fa fa-list"></i> 用户列表 </span>
    </div>
    <div class="actions">
      <div class="btn-group btn-group-devided" data-toggle="buttons">
        <a href="javascript:;" onclick="window.location.href='${base}/export/users/xlsx'" title="导出" class="btn btn-circle btn-default btn-sm font-white"><i class="fa fa-download font-white"></i> 导出 </a>
        <a href="#" title="新增用户" data-target="#user-add-modal" data-toggle="modal" class="btn btn-circle btn-default btn-sm font-white"><i class="fa fa-plus font-white"></i> 新增用户 </a>
        <a href="javascript:;" class="pagination-reload btn btn-circle btn-default btn-sm font-white"><i class="icon-refresh font-white"></i> 刷新 </a>
      </div>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/user/page" data-page-template-id="user-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="user-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> # </th>
            <th> 姓名 </th>
            <th> 登录账号 </th>
            <th> 性别 </th>
            <th> 所在组/部门 </th>
            <th> 联系电话 </th>
            <th> 状态 </th>
            <th> 所属角色 </th>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td> {{page-rowindex}} </td>
            <td>
              {{#if (eq status 'INVALID')}}
                <a href="#" data-target="#user-edit-modal" data-toggle="modal" data-user-id="{{id}}" style="color:red;">{{realName}}</a>
              {{else}}
                <a href="#" data-target="#user-edit-modal" data-toggle="modal" data-user-id="{{id}}">{{realName}}</a>
              {{/if}}
            </td>
            <td> {{loginName}} </td>
            <td> {{sex-text}} </td>
            <td> {{organName}} </td>
            <td> {{phoneNumber}} </td>
            <td> {{status-text}} </td>
            <td> {{roleDescriptions}} </td>
            <td>
              {{#if (eq status 'INVALID')}}
                <a href="javascript:;" data-user-reset-id="{{id}}">重新启用</a>
              {{else}}
                <a href="javascript:;" data-user-reset-pwd-id="{{id}}">密码重置</a>
                <a href="javascript:;" data-user-invalid-id="{{id}}">置为无效</a>
              {{/if}}
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>

  <div id="user-add-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">新增用户</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/user/create" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">姓名:</label>
                    <div class="col-md-9">
                      <input name="realName" type="text" class="form-control input-sm isChinese" maxlength="6" placeholder="请输入用户名..." required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">登录帐号:</label>
                    <div class="col-md-9">
                      <input name="loginName" type="text" class="form-control input-sm" placeholder="请输入登录帐号..." required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">登录密码:</label>
                    <div class="col-md-9">
                      <input name="plainPassword" type="password" class="form-control input-sm passwordCheck" placeholder="请输入登录密码..." required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">密码确认:</label>
                    <div class="col-md-9">
                      <input name="plainPassword_" type="password" class="form-control input-sm" placeholder="请输入登录密码..." equalTo="input[name='plainPassword']" data-msg-equalTo="两次密码不一致" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">用户角色:</label>
                    <div class="col-md-9" id="a-p-roleNames">
                      <select multiple="multiple" data-error-container="#a-p-roleNames" name="roleNames" class="form-control select2 selectloader-roles" style="position:absolute;width:100%;"
                        data-selectloader-store="roles" data-selectloader-vkey="name" data-selectloader-tkey="description"  required>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">所在组/部门:</label>
                    <div class="col-md-9" id="a-p-organId">
                      <input type="text" name="organId" data-error-container="#a-p-organId" class="form-control jstreeselect-input" data-jstreeselect-store="orgtree" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">性别:</label>
                    <div class="col-md-9">
                      <div class="radio-list sex" data-radioloader-name="sex" data-radioloader-val="1" data-radioloader-store="gender" data-radioloader-vkey="code" data-radioloader-tkey="name"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">生日:</label>
                    <div class="col-md-9">
                      <div class="input-group date date-picker" data-date-format="yyyy-mm-dd">
                        <input type="text" class="form-control input-sm" readonly name="birthday" placeholder="请选择生日...">
                        <span class="input-group-btn"><button class="btn btn-sm default" type="button"><i class="fa fa-calendar"></i></button></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">职务:</label>
                    <div class="col-md-9">
                      <select name="job" class="form-control wordbooks" data-selectloader-store="job">
                        <option value="">请选择...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">排序:</label>
                    <div class="col-md-9">
                      <input name="dispOrder" type="text" class="form-control digits" placeholder="请输入排序...">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">联系电话:</label>
                    <div class="col-md-9">
                      <input name="phoneNumber" type="text" class="form-control input-sm isMobilePhone" placeholder="请输入电话...">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">邮箱:</label>
                    <div class="col-md-9">
                      <input name="email" type="text" class="form-control input-sm email" placeholder="请输入邮箱...">
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

  <div id="user-edit-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">修改用户</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/user/update" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <input type="hidden" name="id" readonly="readonly" required>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">姓名:</label>
                    <div class="col-md-9">
                      <input name="realName" type="text" class="form-control input-sm isChinese" maxlength="6" placeholder="请输入用户名..." required>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">登录帐号:</label>
                    <div class="col-md-9">
                      <input name="loginName" type="text" class="form-control input-sm" placeholder="请输入登录帐号..." required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">用户角色:</label>
                    <div class="col-md-9" id="e-p-roleNames">
                      <select multiple="multiple" data-error-container="#e-p-roleNames" name="roleNames" class="form-control select2 selectloader-roles" style="position:absolute;width:100%;"
                        data-selectloader-store="roles" data-selectloader-vkey="name" data-selectloader-tkey="description" required>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">所在组/部门:</label>
                    <div class="col-md-9" id="e-p-organId">
                      <input type="text" name="organId" data-error-container="#e-p-organId" class="form-control jstreeselect-input" data-jstreeselect-store="orgtree" placeholder="所在组/部门..." required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">性别:</label>
                    <div class="col-md-9">
                      <div class="radio-list sex" data-radioloader-name="sex" data-radioloader-val="1" data-radioloader-store="gender" data-radioloader-vkey="code" data-radioloader-tkey="name"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">生日:</label>
                    <div class="col-md-9">
                      <div class="input-group date date-picker" data-date-format="yyyy-mm-dd">
                        <input type="text" class="form-control input-sm" readonly name="birthday" placeholder="请选择生日...">
                        <span class="input-group-btn"><button class="btn btn-sm default" type="button"><i class="fa fa-calendar"></i></button></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">职务:</label>
                    <div class="col-md-9">
                      <select name="job" class="form-control wordbooks" data-selectloader-store="job">
                        <option value="">请选择...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">排序:</label>
                    <div class="col-md-9">
                      <input name="dispOrder" type="text" class="form-control digits" placeholder="请输入排序...">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">联系电话:</label>
                    <div class="col-md-9">
                      <input name="phoneNumber" type="text" class="form-control input-sm isMobilePhone" placeholder="请输入电话...">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">邮箱:</label>
                    <div class="col-md-9">
                      <input name="email" type="text" class="form-control input-sm email" placeholder="请输入邮箱...">
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

  <div id="import-users-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">选择导入文件</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <form action="${base}/admin/user/import/excel" method="POST" role="form" class="form-horizontal">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="col-md-12">
                        <input type="file" name="file" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary ok" >确定</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>

  <div id="import-former-users-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">选择导入文件-离职人员导入</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <form action="${base}/admin/user/import/former" method="POST" role="form" class="form-horizontal">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="col-md-12">
                        <input type="file" name="file" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary ok">确定</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>

</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
