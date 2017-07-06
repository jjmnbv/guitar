<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<c:set target="${self}" property="title">消费金融</c:set>

<c:set target="${self.css}" property="plugins">
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>
</c:set>
<c:set target="${self.js}" property="plugins">
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.app}/css/form.css">
</c:set>
<c:set target="${self.js}" property="loader">
  <!-- <script src=""></script> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/jsform/wordbook.js"></script>
  <script src="${self.path.app}/js/jsform/provinceList.js"></script>
  <script src="${self.path.app}/js/jsform/view.js"></script>
  <script src="${self.path.app}/js/formdata/formdata.js"></script>
  <script>
    $(function () {
      window.page = window.page || {};
      $.extend(page, {
          applyform: <spring:eval expression="@FN_CB.toJSON(jsform)" />,
          formdata: <spring:eval expression="@FN_CB.toJSON(formdata)" />
      });
      $('.jsform').formdata(window.page);
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>formdata保存</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
  <div class="row">
    <div class="col-md-12" id="jsform-data-div">
      <form class="jsform" data-jsform-store="applyform" data-jsform-id="${jsform.id}" data-object-id="${objectId}" data-formdata-store="formdata" data-formdata-handle="#formdata-handle"></form>
      <div class="modal-footer" id="formdata-handle">
        <button type="button" class="btn btn-success save">保存</button>
      </div>
    </div>
  </div>
</c:set>

<c:set target="${self.content}" property="free">
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
