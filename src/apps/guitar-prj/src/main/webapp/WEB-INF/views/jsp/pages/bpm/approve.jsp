<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<div class="">
  <div class="">
    <div class="">
      <div class="col-md-12">
      <div class="portlet-body">
      <form id="opinion-form" action="" method="POST" data-page-name="qualitycheck-page">
        <div class="row">
        <div class="portlet box blue">
          <div class="portlet-title">
            <div class="caption">
              <i class="fa fa-cogs"></i>意见
            </div>
          </div>
          <div class="portlet-body flip-scroll">
            <div class="form-body">
              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                  <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">审批意见</span>
                    <select id="opinionId" name="opinionId" data-text-input="#opinionVal" class="form-control wordbooks" data-selectloader-store="approve-opinion"
                      data-selectloader-val="" required>
                        <option value="">请选择...</option>
                    </select>
                  </div>
                  </div>
                </div>
               	<div class="col-md-6 col-md-offset-3">
                  <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">意见备注</span>
                    <textarea name="opinionNote" class="form-control" rows="5"></textarea>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        <input type="hidden" id="opinionVal" name="opinionVal" value="" />
        <input type="hidden" name="id"/>
        <input type="hidden" name="businessId" value="" />
        <input type="hidden" name="taskId" value="" />
        <input type="hidden" name="taskKey" value="" />
      </form>
      </div>
      </div>
    </div>
  </div>
</div>