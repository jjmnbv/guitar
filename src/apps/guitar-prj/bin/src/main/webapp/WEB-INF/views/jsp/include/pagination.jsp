<%@ page contentType="text/html;charset=UTF-8" %>
<div class="main-page">
  <c:if test="${not empty self.content.paginationContainer}">
    <c:if test="${not empty self.content.paginationForm}">
      <div class="portlet box blue-hoki" style="margin-bottom:5px;">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-filter"></i>筛选条件 </div>
          <div class="tools">
            <a href="javascript:;" class="expand"> </a>
          </div>
          <div class="actions">
            <a href="#" class="btn btn-circle btn-default btn-sm pagination-query">查询 </a>
            <a href="#" class="btn btn-circle btn-default btn-sm pagination-reset">重置 </a>
          </div>
        </div>
        <div class="portlet-body form display-hide">
          ${self.content.paginationForm}
        </div>
      </div>
    </c:if>
    <div class="portlet box blue">
      ${self.content.paginationContainer}
    </div>
  </c:if>
</div>