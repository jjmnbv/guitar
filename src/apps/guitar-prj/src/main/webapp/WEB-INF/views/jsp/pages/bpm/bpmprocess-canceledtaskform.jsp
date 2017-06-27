<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">任务详情</c:set>

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
    var formIds = '${busiFormIds}';
    var message = '${message}';
    var comment = '${comment}';
  </script>
  <script src="${self.path.app}/js/jsform/view.js"></script>
  <script src="${self.path.app}/js/bpm/doneform.js"></script>
  
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small> 任务详情 </small></h1>
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
        <button type="button" class="btn btn-info active" id="activeTask">激活</button>
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