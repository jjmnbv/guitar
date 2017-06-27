<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<c:set target="${self}" property="title">系统流程管理</c:set>

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
      $('.commitway').radioloader({commitway: [{code:'0', name:'手动提交'}, {code:'1', name:'自动提交'}]});
      $('.assignway').radioloader({assignway: [{code:'0', name:'自动分单'}, {code:'1', name:'默认'}]});
    });
  </script>
</c:set>

<c:set target="${self.js}" property="main">
  <script src="${self.path.app}/js/bpm/activiti_ext.js"></script>
  <script>
  	var base = '${base}';  
		var relviewtype = [{code:'0',name:'固定表单'}, {code:'1',name:'自定义表单'}];
		var nonfixrelview,fixrelview,bpmlisteners;
		
		var triggerStage = [{code:'create',name:'开始'}, {code:'assignment',name:'签收'}, {code:'complete',name:'结束'}, {code:'delete',name:'删除'}];
  	$(function () {
      var deployStatus = [
        {'name':'0','text':'已保存'},
        {'name':'1','text':'已部署'},
        {'name':'2','text':'已删除'}
      ];
      var runStatus = [
        {'name':'0','text':'启用'},
        {'name':'1','text':'未启用'},
        {'name':'2','text':'禁用'}
      ];
      app.registerTextHelper('deployStatus', deployStatus, 'name', 'text');  //在调用handlebars模版前调用
      app.registerTextHelper('runStatus', runStatus, 'name', 'text');  //在调用handlebars模版前调用
      
      $('.main-page').pagination({
        "first-store": {
          "page": <spring:eval expression="@FN_CB.toJSON(page)" />,
          "pages": <spring:eval expression="@FN_CB.toJSON(pages)" />
        }
      });
      
      $(".selectloader-positions").selectloader({
      	positions: <spring:eval expression="@FN_CB.positionsToJSON()" />
      });
      $(".candidateUsers").jstreemultiselect({
        candidateUsers: <spring:eval expression="@FN_CB.organuserNameJsTreeJSON()" />
      });
      
      fixrelview = <spring:eval expression="@FN_BPM.fixFormToJSONExt()" />;
     	nonfixrelview = <spring:eval expression="@FN_BPM.nonFixFormToJSON()" />;
      bpmlisteners = <spring:eval expression="@FN_BPM.bpmListenerToJSON()" />;
     	$(".selectloader-autoassignstrategy").selectloader({
     		autoassignstrategy: <spring:eval expression="@FN_BPM.autoAssignStrategyToJSON()" />
      });
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>系统管理 &gt; 流程管理</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="paginationForm">
  <form role="form" class="form-horizontal pagination-form">
    <div class="form-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">流程名称:</label>
            <div class="col-md-9">
              <input name="name" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label col-md-3">流程描述:</label>
            <div class="col-md-9">
              <input type="text" name="description" class="form-control">
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
      <span><i class="fa fa-list"></i> 流程列表 </span>
    </div>
    <div class="actions">
      <div class="btn-group btn-group-devided" data-toggle="buttons">
        <a href="javascript:;" data-path="${base}" class="btn btn-circle btn-default btn-sm font-white activiti-create"><i class="fa fa-plus font-white"></i> 新建 </a>
      	<a href="javascript:;" class="btn btn-circle btn-default btn-sm font-white remove"><i class="fa fa-minus font-white"></i> 删除 </a>
      	<a href="javascript:;" class="btn btn-circle btn-default btn-sm font-white activiti-copy"><i class="fa fa-copy font-white"></i> 复制 </a>
        <a href="javascript:;" class="pagination-reload btn btn-circle btn-default btn-sm font-white"><i class="icon-refresh font-white"></i> 刷新 </a>
      </div>
    </div>
  </div>
  <div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-url="${base}/activiti/page" data-page-template-id="activiti-page-template"></div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="activiti-page-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover" id="flowstable">
        <thead>
          <tr>
            <th> # </th>
            <th> 流程名称 </th>
            <th> 流程标识 </th>
            <th> 流程描述 </th>
            <th> 发布状态 </th>
            <th> 运行状态 </th>
            <th> 版本号 </th>
            <th> 创建时间 </th>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td>
            	<input type="radio" name="sel_radio" class="icheck" value="{{id}}"/>
						</td>
            <td> <a href="#" data-target="#flow-info-editmodal" data-toggle="modal" data-view-flow-name="{{name}}" data-view-flow-id="{{id}}">{{name}}</a> </td>
            <td> {{key}} </td>
            <td> {{description}} </td>
            <td> {{deployStatus-text}} </td>
            <td> {{runStatus-text}} </td>
            <td> {{version}} </td>
            <td> {{createTime}} </td>
						<td>
							<a href="javascript:;" class="activiti-edit" data-path="${base}" data-activiti-id="{{id}}">编辑</a>
							{{#if (eq deployStatus '1')}}
							<a href="#" data-target="#step-list-modal" data-toggle="modal" data-flow-id="{{id}}" data-flow-key="{{key}}" data-flow-name="{{name}}">环节设置</a>
							{{/if}}
							<a href="#" class="activiti-view" data-path="${base}" data-activiti-id="{{id}}">流程图</a>
							<a href="javascript:;" onclick="window.location.href='${base}/activiti/export-xml/{{id}}'" data-activiti-export-xml-id="{{id}}">导出xml</a>
			  			<a href="javascript:;" onclick="window.location.href='${base}/activiti/export-json/{{id}}'" data-activiti-export-xml-id="{{id}}">导出json</a>
			  			{{#if (eq deployStatus '0')}}
								<a href="javascript:;" class="activiti-deploy" data-id="{{id}}" data-activiti-id="{{id}}">部署</a>
              {{/if}}
							{{#if (eq runStatus '0')}}
								<a href="javascript:;" class="activiti-disable" data-id="{{id}}" data-activiti-id="{{id}}">挂起</a>
              {{/if}}
							{{#if (eq deployStatus '1') }}
							{{#if (eq runStatus '1') }}
								<a href="javascript:;" class="activiti-enable" data-id="{{id}}" data-activiti-id="{{id}}">启用</a>
              				{{/if}}
				{{/if}}
						</td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <%@ include file="/WEB-INF/views/jsp/include/pagination.ajax.jsp" %>
  </script>

  <div id="flow-info-editmodal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title"><i class="fa fa-list"></i> <strong></strong></h4>
        </div>
        <div class="modal-body">
          <form action="${base}/activiti/updatex" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
            	<input type="hidden" name="id" readonly="readonly" required>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">流程名称:</label>
                    <div class="col-md-10">
                      <input name="name" type="text" class="form-control input-sm" maxlength="30" placeholder="请输入流程名称..." required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
              	<div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">流程标识:</label>
                    <div class="col-md-10">
                      <input name="key" type="text" class="form-control input-sm" readonly>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
              	<div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">流程说明:</label>
                    <div class="col-md-10">
                    	<textarea name="description" class="form-control input-sm" maxlength="100" placeholder="请输入流程说明..." rows="5" cols="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
              	<div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">plugin-js:</label>
                    <div class="col-md-10">
                      <input name="pluginJs" type="text" class="form-control input-sm" placeholder="请输入关联js...">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
              	<div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">plugin-css:</label>
                    <div class="col-md-10">
                      <input name="pluginCss" type="text" class="form-control input-sm" placeholder="请输入关联css...">
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
  
  <div id="step-list-modal" class="modal container fade modal-scroll" tabindex="-1" aria-hidden="true" data-page-template-id="#step-list-template" data-url="${base}/flowinfo/step/list">
  	<div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title"><i class="fa fa-list"></i> <strong></strong></h4>
        </div>
        <div class="modal-body"></div>
      </div>
    </div>
  </div>
  <script type="text/x-handlebars-template" id="step-list-template">
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> # </th>
            <th> 环节名称 </th>
            <th> 环节标识 </th>
            <th> 环节类型 </th>
            <th> 设置 </th>
          </tr>
        </thead>
        <tbody>
          {{#each content}}
          <tr>
            <th> {{list-rowindex}} </th>
            <td> <a href="#" data-target="#step-config-modal" data-toggle="modal" data-flow-key="{{flowKey}}" data-flow-name="{{flowName}}" data-step-type="{{stepType}}" data-step-name="{{stepName}}" data-step-desc="{{stepDesc}}" data-step-key="{{stepKey}}">{{stepName}}</a> </td>
            <td> {{stepKey}} </td>
            <td> {{stepType}} </td>
            <td> <a href="#" data-step-key="{{stepKey}}">表单项处理</a> </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
  </script>
  
  <div id="step-config-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title"><i class="fa fa-list"></i><strong></strong></h4>
        </div>
        <div class="modal-body">
          <form action="${base}/stepconfig/update" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
            	<input type="hidden" name="id" readonly="readonly">
            	<input type="hidden" name="flowKey" readonly="readonly">
            	<input type="hidden" name="flowInfoId" readonly="readonly">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">流程名称:</label>
                    <div class="col-md-10">
                      <input name="flowName" type="text" class="form-control input-sm" readonly>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">运行系统:</label>
                    <div class="col-md-10"><input name="runSystem" type="text" class="form-control input-sm" readonly></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">环节名称:</label>
                    <div class="col-md-10">
                      <input name="stepName" type="text" class="form-control input-sm" readonly>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">环节标识:</label>
                    <div class="col-md-10"><input name="stepKey" type="text" class="form-control input-sm" readonly></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">环节说明:</label>
                    <div class="col-md-10"><textarea name="stepDesc" class="form-control input-sm" rows="3" cols="5"></textarea></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">环节类型:</label>
                    <div class="col-md-10"><input name="stepType" type="text" class="form-control input-sm" readonly></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">操作视图:</label>
                    <div class="col-md-10">
                    	<input type="hidden" name="relView" readonly/>
                    	<input data-target="#relview-sel-modal" data-toggle="modal" name="relViewDis" type="text" class="form-control input-sm" readonly></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                   	<input name="handlePositionName" type="hidden" id="handlePositionName" readonly/>
                    <label class="col-md-2 control-label">参与岗位:</label>
                    <div class="col-md-10" id="b-p-positionNames">
                    	<select multiple="multiple" data-error-container="#b-p-positionNames" name="handlePositionKey" class="form-control select2 selectloader-positions"
                    	 style="position:absolute;width:100%;" data-selectloader-store="positions" data-selectloader-vkey="name" data-selectloader-tkey="description">
                      	<option value="">请选择...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
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
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">会签:</label>
                    <div class="col-md-10">
                    	<input type="checkbox" name="signIn" class="form-control input-sm"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row signInStrategy hide">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">会签策略:</label>
                    <div class="col-md-10">
                    	<select name="signInStrategy" readonly class="form-control selectloader-signinstrategy" data-selectloader-store="signinstrategy"
                          data-selectloader-vkey="name" data-selectloader-tkey="desc" tabindex="1">
                        <option value="">请选择...</option>
                        <option value="1">所有人同意则为通过，若有一个人不同意则为拒绝</option>
                        <option value="2">超过二分之一同意为通过，不足或者等于二分之一为拒绝</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">提交方式:</label>
                    <div class="col-md-10">
                    	<input type="hidden" name="commitWayValue" id="commitWayValue" readonly/>
                    	<div class="radio-list commitway" data-radioloader-name="commitWayKey" data-text-input="#commitWayValue" data-radioloader-val="1" data-radioloader-store="commitway" data-radioloader-vkey="code" data-radioloader-tkey="name"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">分单方式:</label>
                    <div class="col-md-10">
                    	<input type="hidden" name="assignWayValue" id="assignWayValue" readonly/>
                    	<div class="radio-list assignway" data-radioloader-name="assignWayKey" data-text-input="#assignWayValue" data-radioloader-val="1" data-radioloader-store="assignway" data-radioloader-vkey="code" data-radioloader-tkey="name"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row autoAssignStrategy hide">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">分单策略:</label>
                    <div class="col-md-10">
                    	<select name="autoAssignStrategy" readonly class="form-control selectloader-autoassignstrategy" data-selectloader-store="autoassignstrategy"
                          data-selectloader-vkey="name" data-selectloader-tkey="desc" tabindex="1">
                        <option value="">请选择...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">事件处理器:</label>
                    <div class="col-md-10">
                    	<input type="hidden" name="plugjson" readonly/>
                    	<textarea readonly data-target="#plug-sel-modal" data-toggle="modal" name="plugjsonDis" class="form-control input-sm" rows="3" cols="5"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">里程碑:</label>
                    <div class="col-md-10">
                    	<input type="checkbox" name="mileStone" class="form-control input-sm"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-md-2 control-label">取消时长(秒):</label>
                    <div class="col-md-10">
                    	<input type="input" name="cancelTime" class="form-control input-sm number" maxlength="30" placeholder="请输入取消时长..."/>
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
  
  <div id="relview-sel-modal" class="modal fade draggable-modal" role="basic" data-page-template-id="#relview-sel-template" data-page-tr-template-id="#relview-sel-tr-template" tabindex="-1" aria-hidden="true">
  	<div class="modal-dialog" style="width:40%;" >
      <div class="modal-content"> 
        <div class="modal-header"> 
          <a href="#" style="float:right;" class="btn btn-circle btn-default btn-sm"><i class="fa fa-plus font-blue"></i> </a>
          <h4 class="modal-title"><i class="fa fa-list"></i> <strong>关联视图</strong></h4>
        </div>
        <div class="modal-body">
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline dark ok">确认</button>
          <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
        </div>
      </div>
    </div>
  </div>
  <script type="text/x-handlebars-template" id="relview-sel-template">
	<form name="relviewform" action="#">
    <div class="table-scrollable">
      <table id="relview-sel-table" class="table table-striped table-bordered table-hover">
        <tbody>
					{{#if content}}
          {{#each content}}
          <tr class="normal">
            <td width="30%">
              <input type="hidden" name="relviewTname" value="{{relviewTname}}"/>
							<select name="relviewTcode" class="form-control relviewtype" data-selectloader-vkey="code" data-selectloader-tkey="name" data-selectloader-store="relviewtype" data-text-input="input[name=relviewTname]" data-selectloader-val="{{relviewTcode}}" tabindex="1">
                <option value="">请选择视图类型...</option>
              </select>
            <td width="50%">
							<input type="hidden" name="relviewName" value="{{relviewName}}"/>
							<select name="relviewCode" class="form-control relviewsel" data-selectloader-vkey="code" data-selectloader-tkey="name" data-selectloader-store="relview" data-text-input="input[name=relviewName]" data-selectloader-val="{{relviewCode}}" data-placeholder="视图..." tabindex="1">
                <option value="">请选择视图...</option>
              </select>
						</td>
            <td width="10%"> <input name="dispOrder" type="text" class="form-control input-sm" value="{{dispOrder}}" required> </td>
            <td width="10%"> <a href="#" style="float:right;" class="btn btn-circle btn-default btn-sm"><i class="fa fa-minus font-blue"></i> </a> </td>
          </tr>
          {{/each}}
					{{else}}
					<tr class="no-data">
          	<td colspan="10" align="center">暂无关联</td>
        	</tr>
					{{/if}}
        </tbody>
      </table>
    </div>
	</form>
  </script>
  <script type="text/x-handlebars-template" id="relview-sel-tr-template">
    <tr class="normal">
      <td width="30%">
        <input type="hidden" name="relviewTname"/>
				<select name="relviewTcode" class="form-control relviewtype" data-selectloader-vkey="code" data-selectloader-tkey="name" data-selectloader-store="relviewtype" data-text-input="input[name=relviewTname]" data-selectloader-val="" tabindex="1">
          <option value="">请选择...</option>
        </select>
      <td width="50%">
				<input type="hidden" name="relviewName"/>
				<select name="relviewCode" class="form-control relviewsel" data-selectloader-vkey="code" data-selectloader-tkey="name" data-selectloader-store="relview" data-text-input="input[name=relviewName]" data-selectloader-val="" tabindex="1">
          <option value="">请选择...</option>
        </select>
			</td>
      <td width="10%"> <input name="dispOrder" type="text" class="form-control input-sm" value=""> </td>
      <td width="10%"> <a href="#" style="float:right;" class="btn btn-circle btn-default btn-sm"><i class="fa fa-minus font-blue"></i> </a> </td>
    </tr>
  </script>
  
  <div id="plug-sel-modal" class="modal fade" role="basic" data-page-template-id="#plug-sel-template" data-page-tr-template-id="#plug-sel-tr-template" tabindex="-1" aria-hidden="true">
  	<div class="modal-dialog" style="width:40%;">
      <div class="modal-content"> 
        <div class="modal-header" style="height:50px;"> 
          <a href="#" style="float:right;" class="btn btn-circle btn-default btn-sm plus"><i class="fa fa-plus font-blue"></i> </a>
          <h4 class="modal-title" style="font-size:15px;"><i class="fa fa-list"></i> <strong>事件处理</strong></h4>
        </div>
        <div class="modal-body">
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline dark ok">确认</button>
          <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
        </div>
      </div>
    </div>
  </div>
  <script type="text/x-handlebars-template" id="plug-sel-template">
    <div class="table-scrollable">
      <table id="plug-sel-table" class="table table-striped table-bordered table-hover">
        <tbody>
					{{#if content}}
          {{#each content}}
          <tr class="normal">
            <td width="30%">
							<select name="triggerStage" class="form-control triggerStage" data-selectloader-vkey="code" data-selectloader-tkey="name" data-selectloader-store="triggerStage" data-selectloader-val="{{triggerStage}}" tabindex="1">
                <option value="">请选择触发阶段...</option>
              </select>
            <td width="60%">
							<select name="plugName" class="form-control selectloader-bpmlisteners" data-selectloader-vkey="name" data-selectloader-tkey="desc" data-selectloader-store="bpmlisteners" data-selectloader-val="{{plugName}}" tabindex="1">
          			<option value="">请选择...</option>
        			</select>
						</td>
            <td width="10%"> <a href="#" style="float:right;" class="btn btn-circle btn-default btn-sm"><i class="fa fa-minus font-blue"></i> </a> </td>
          </tr>
          {{/each}}
					{{else}}
					<tr class="no-data">
          	<td colspan="10" align="center">暂无关联</td>
        	</tr>
					{{/if}}
        </tbody>
      </table>
    </div>
  </script>
  <script type="text/x-handlebars-template" id="plug-sel-tr-template">
    <tr class="normal">
      <td width="30%">
        <select name="triggerStage" class="form-control triggerStage" data-selectloader-vkey="code" data-selectloader-tkey="name" data-selectloader-store="triggerStage" data-selectloader-val="" tabindex="1">
          <option value="">请选择触发阶段...</option>
        </select>
      <td width="60%">
				<select name="plugName" class="form-control selectloader-bpmlisteners" data-selectloader-vkey="name" data-selectloader-tkey="desc" data-selectloader-store="bpmlisteners" data-selectloader-val="" tabindex="1">
          <option value="">请选择...</option>
        </select>
			</td>
      <td width="10%"> <a href="#" style="float:right;" class="btn btn-circle btn-default btn-sm"><i class="fa fa-minus font-blue"></i> </a> </td>
    </tr>
  </script>

</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
