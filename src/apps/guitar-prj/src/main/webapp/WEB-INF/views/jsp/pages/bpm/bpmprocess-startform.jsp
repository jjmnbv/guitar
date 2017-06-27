<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>

<c:set target="${self}" property="title">流程启动</c:set>

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
  <script src="${self.path.app}/js/bpm/bpm.js"></script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small> 发起流程 </small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">

  <div class="page-container">
    <div class="page-content-wrapper">
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
						<div class="tab-pane <c:if test="${ status.index eq 0}">active</c:if>" id="tab_${status.index+1}" data-view-name="${view.relviewName}" data-create-url="${view.createUrl}" data-view-url="${view.viewUrl}" data-update-url="${view.updateUrl}">
							<jsp:include page="/WEB-INF/views/jsp/${view.relviewCode}"/>
			      </div>
					</c:forEach>
				</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success save">保存</button>
          <button type="button" class="btn btn-success submit">提交</button>
        </div>
      </div>
    </div>
  </div>

</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="viewname-list-template">
			{{#each content}}
      <li class="{{#if (eq (list-rowindex) '1')}}active{{/if}}">
        <a href="#tab_{{list-rowindex}}" data-toggle="tab" aria-expanded="false"> {{relviewName}} </a>
      </li>
			{{/each}}
  </script>
  
  <script type="text/x-handlebars-template" id="viewcode-list-template">
			{{#each content}}
			<div class="tab-pane {{#if (eq (list-rowindex) '1')}}active{{/if}}" id="tab_{{list-rowindex}}">
				<jsp:include page="/WEB-INF/views/jsp/{{relviewCode}}"/>
      </div>
			{{/each}}
  </script>	
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>