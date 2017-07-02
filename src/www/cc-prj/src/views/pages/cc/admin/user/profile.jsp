<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">用户个人信息</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/pages/css/profile.min.css"/>
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/admin/user-profile.js"></script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>用户个人信息</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
<div class="row">
  <div class="col-md-12">
    <div class="profile-sidebar">
      <div class="portlet light profile-sidebar-portlet ">
        <div class="profile-usertitle">
          <div class="profile-usertitle-name"> ${PROFILE_BINDING.realName} </div>
          <div class="profile-usertitle-job"> ${PROFILE_BINDING.job} </div>
        </div>
        <div class="profile-usermenu">
          <ul class="nav">
            <li class="active">
              <a href="#"><i class="icon-settings"></i> 账户信息 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="profile-content">
      <div class="row">
        <div class="col-md-12">
          <div class="portlet light ">
            <div class="portlet-title tabbable-line">
              <div class="caption caption-md">
                <i class="icon-globe theme-font hide"></i>
                <span class="caption-subject font-blue-madison bold uppercase">Profile Account</span>
              </div>
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#tab_personal_info" data-toggle="tab">个人信息</a>
                </li>
              </ul>
            </div>
            <div class="portlet-body">
              <div class="tab-content">
                <div class="tab-pane active" id="tab_personal_info">
                  <form action="${base}/profile/update" method="POST" role="form" class="form-horizontal">
                    <div class="form-body">
                      <input type="hidden" name="id" readonly="readonly" disabled>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">姓名:</label>
                            <div class="col-md-9">
                              <input name="realName" value="${PROFILE_BINDING.realName}" class="form-control" readonly>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">登录帐号:</label>
                            <div class="col-md-9">
                              <input name="loginName" value="${PROFILE_BINDING.loginName}" class="form-control" disabled>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">用户角色:</label>
                            <div class="col-md-9">
                              <input name="roleDescriptions" value="${PROFILE_BINDING.roleDescriptions}" class="form-control" disabled>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">所属机构:</label>
                            <div class="col-md-9">
                              <input name="organName" value="${PROFILE_BINDING.organName}" class="form-control" disabled>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">职务:</label>
                            <div class="col-md-9">
                              <input name="job" value="${PROFILE_BINDING.job}" class="form-control" disabled>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">生日:</label>
                            <div class="col-md-9">
                              <div class="input-group date date-picker" data-date-format="yyyy-mm-dd">
                                <input type="text" class="form-control input-sm" readonly name="birthday" value="${PROFILE_BINDING.birthday}" placeholder="请选择生日...">
                                <span class="input-group-btn"><button class="btn btn-sm default" type="button"><i class="fa fa-calendar"></i></button></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">电话:</label>
                            <div class="col-md-9">
                              <input name="phoneNumber" value="${PROFILE_BINDING.phoneNumber}" class="form-control isMobilePhone">
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 control-label">邮箱:</label>
                            <div class="col-md-9">
                              <input name="email" value="${PROFILE_BINDING.email}" class="form-control email">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="margiv-top-10 row">
                    <div class="col-md-offset-11">
                      <button class="btn green save"> 保存 </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</c:set>

<c:set target="${self.content}" property="free">
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
