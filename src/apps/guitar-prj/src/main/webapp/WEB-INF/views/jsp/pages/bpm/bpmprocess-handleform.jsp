<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">任务办理</c:set>

<c:set target="${self.css}" property="plugins">
<link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/jquery-ui/jquery-ui.min.css"/>
<link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>

</c:set>
<c:set target="${self.js}" property="plugins">
<script src="${self.path.metronic}/assets/global/plugins/jquery-ui/jquery-ui.min.js"></script>

<script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">

</c:set>
<c:set target="${self.js}" property="loader">
  <!-- <script src=""></script> -->
  <script>
    $(function () {
      $('.radio-list').radioloader(app.wordbookMap);
    });
  </script>
</c:set>
<c:set target="${self.js}" property="main">
  
  <script>
    var taskId = '${taskId}';
    var flowKey = '${flowKey}';
    var stepKey = '${stepKey}';
    var formIds = '${formIds}';
    var message = '${message}';
  </script>
  <script src="${self.path.app}/js/jsform/view.js"></script>
  <script src="${self.path.app}/js/bpm/bpm.js"></script>
  <script>
    $(function () {
      $(".candidateUsers").jstreemultiselect({
        candidateUsers: <spring:eval expression="@FN_CB.organuserNameJsTreeJSON()" />
      });
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small> 任务办理 </small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">

  <div class="tabbable-custom nav-justified">

  <ul id="viewnameContainer" class="nav nav-tabs nav-justified" data-viewname-template="#viewname-list-template">
    <c:forEach var="view" items="${viewList}" varStatus="status">
      <li class="<c:if test="${ status.index eq 0}">active</c:if>">
        <a href="#tab_${status.index+1}" data-toggle="tab" aria-expanded="false"> ${view.relviewName} </a>
      </li>
    </c:forEach>
  </ul>
  <div id="viewcodeContainer" class="tab-content clearfix" data-viewcode-template="#viewcode-list-template">
    <c:forEach var="view" items="${viewList}" varStatus="status">
      <c:choose>
        <c:when test="${view.relviewTcode eq 1}">
          <div class="tab-pane <c:if test="${ status.index eq 0}">active</c:if>" data-view-type="nonfix" data-view-name="${view.relviewName}" id="tab_${status.index+1}">
            <form id="nonfixform-${view.relviewCode}" class="jsform" data-jsform-store="jsform" data-jsform-id="${view.relviewCode}" data-object-id=""></form>
          </div>
        </c:when>
        <c:when test="${view.relviewTcode eq 0}">
          <div class="tab-pane <c:if test="${ status.index eq 0}">active</c:if>" data-view-type="fix" id="tab_${status.index+1}" data-view-name="${view.relviewName}" data-view-formid="${view.viewFormId}" data-create-url="${view.viewCreateUrl}" data-view-url="${view.viewViewUrl}" data-update-url="${view.viewUpdateUrl}">
            <jsp:include page="/WEB-INF/views/jsp/${view.relviewCode}"/>
          </div>
        </c:when>
      </c:choose>
    </c:forEach>
  </div>
     <div class="modal-footer">
        <c:if test="${rollbackcomment != ''}">
         <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">退回意见</span>
                    <textarea class="form-control" rows="5" readonly="readonly">${rollbackcomment}</textarea>
                  </div>
                </div>
              </div>
          </div>
        </c:if>
       <button type="button" class="btn btn-info save">保存</button>
       <button type="button" class="btn btn-success submit">提交</button>
       <button type="button" class="btn btn-primary rollback">退回</button>
       <button type="button" class="btn btn-primary beforeissue" data-target="#selhandler-modal" data-toggle="modal">前加签</button>
       <button type="button" class="btn btn-primary afterissue" data-target="#selhandler-modal" data-toggle="modal">后加签</button>
       <button type="button" class="btn btn-primary transfertask" data-target="#selhandler-modal" data-toggle="modal">转办</button>
       <c:if test="${cancelTime != ''}">
       		<button type="button" class="btn btn-warning cancel" id="cancelTask">取消</button>
       </c:if>
     </div>
  </div>

  <!-- 退回意见 -->
  <div class="modal fade" id="rollback_form" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">退回意见</h4>
        </div>
        <div class="modal-body">
          <form action="${base}/activiti/rollback" method="POST">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">退回节点</span>
                    <select id="rollbackTaskId" name="rollbackTaskId" class="form-control wordbooks" 
                      data-selectloader-val="" required>
                        <option value="">请选择...</option>
                    </select>
                  </div>
                 </div>
                 <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">退回意见</span>
                    <input type="hidden" name="taskId" value="${taskId}">
                    <textarea name="comment" class="form-control" rows="5"></textarea>
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
  
  <!-- 加签-转办人员选择 -->
  <div class="modal fade" id="selhandler-modal" tabindex="-2" role="dialog" aria-hidden="true">
	<div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
            <input type="hidden" name="taskId" value="${taskId}">
            <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                     <input name="handleUrname" id="handleUrname" type="hidden" readonly>
                    <label class="col-md-2 control-label">参与人:</label>
                    <div class="col-md-10">
                      <input name="handleUlname" type="text" class="form-control input-sm candidateUsers" data-text-input="#handleUrname" data-key-type="USER" data-jstreemultiselect-store="candidateUsers" data-jstreeloader-target="#jstree-panel" placeholder="参与人,多个人以,分隔...">
                    </div>
                  </div>
                </div>
              </div>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success ok">提交</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</c:set>

<c:set target="${self.content}" property="free">

  <div id="candidates-select-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog modal-full">
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
           <h4 class="modal-title">选择办理人</h4>
           </div>
         <div class="modal-body">
          <div class="portlet box blue">
             <div class="portlet-title">
               <div class="caption"><i class="fa fa-list"></i> 办理人员列表 </div>
             </div>
             <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-template-id="candidates-page-template"></div>
           </div>
        </div>
        <div class="modal-footer">
           <button type="button" class="btn btn-outline dark ok" disabled>确认</button>
           <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
         </div>
      </div>
     </div>
   </div>

  <script type="text/x-handlebars-template" id="candidates-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> # </th>
            <th> 姓名 </th>
            <th> 当前任务数 </th>
            <th> 状态 </th>
          </tr>
        </thead>
        <tbody>
          {{#each content}}
          <tr>
            <td data-id="selectId"> <input type="radio" name="loginName" value="{{loginName}}"> </td>
            <td data-name="realName">{{realName}}</td>
            <td data-name="haveTaskCount">{{haveTaskCount}}</td>
            <td data-name="status">
              {{#if (eq status 'NORMAL')}}
                  正常
              {{/if}}
              {{#if (eq status 'INVALID')}}
                  无效
              {{/if}}
              {{#if (eq status 'LOCKED')}}
                  锁定
              {{/if}}
              {{#if (eq status 'UNLOCK')}}
                  解锁
              {{/if}}
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
  </script>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>