<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<html>
	<head>
		<c:set target="${self}" property="title">系统流程设计器</c:set>
		<link type="text/css" rel="stylesheet" href="${self.path.flow}/lib/jquery-ui-1.8.4.custom/css/smoothness/jquery-ui-1.8.4.custom.css" />
		<link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.css" />
		<style type="text/css">
		body {
			margin: 0;
			pading: 0;
			text-align: left;
			font-family: Arial, sans-serif, Helvetica, Tahoma;
			font-size: 12px;
			line-height: 1.5;
			color: black;
			background-image: url(${self.path.app}/img/bpm/bg.png);
		}
		
		.node {
			width: 70px;
			text-align: center;
			vertical-align: middle;
			border: 1px solid #fff;
		}
		
		.mover {
			border: 1px solid #ddd;
			background-color: #ddd;
		}
		
		.selected {
			background-color: #ddd;
		}
		
		.state {
			
		}
		
		#myflow_props table {
			
		}
		
		#myflow_props th {
			letter-spacing: 2px;
			text-align: left;
			padding: 6px;
			background: #ddd;
		}
		
		#myflow_props td {
			background: #fff;
			padding: 6px;
		}
		
		#pointer {
			background-repeat: no-repeat;
			background-position: center;
		}
		
		#path {
			background-repeat: no-repeat;
			background-position: center;
		}
		
		#task {
			background-repeat: no-repeat;
			background-position: center;
		}
		
		#state {
			background-repeat: no-repeat;
			background-position: center;
		}
		</style>
	</head>
	<body>
		<div id="myflow_tools"
			style="position: absolute; top: 10; left: 10; background-color: #fff; width: 70px; cursor: default; padding: 3px;"
			class="ui-widget-content">
			<div id="myflow_tools_handle" style="text-align: center;" class="ui-widget-header">工具集</div>
			<div class="node" id="myflow_save">
				<img src="${self.path.app}/img/bpm/save.gif" />&nbsp;&nbsp;保存
			</div>
			<div>
			<hr/>
			</div>
			<div class="node selectable" id="pointer">
				<img src="${self.path.app}/img/bpm/select16.gif" />&nbsp;&nbsp;选择
			</div>
			<div class="node selectable" id="path">
				<img src="${self.path.app}/img/bpm/16/flow_sequence.png" />&nbsp;&nbsp;连接
			</div>
			<div>
			<hr/>
			</div>
			<div class="node state" id="start" type="start">
				<img src="${self.path.app}/img/bpm/16/start_event_empty.png" />&nbsp;&nbsp;开始
			</div>
			<div class="node state" id="message-start" type="message-start">
				<img src="${self.path.app}/img/bpm/16/message_start.png" />&nbsp;&nbsp;消息开始
			</div>
			<%-- <div class="node state" id="task" type="task">
				<img src="${self.path.app}/img/bpm/16/task_empty.png" />&nbsp;&nbsp;任务
			</div> --%>
			<div class="node state" id="task_serial" type="task_serial">
				<img src="${self.path.app}/img/bpm/16/task_serial.png" />&nbsp;&nbsp;串行任务
			</div>
			<div class="node state" id="task_parallel" type="task_parallel">
				<img src="${self.path.app}/img/bpm/16/task_parallel.png" />&nbsp;&nbsp;并行任务
			</div>
			<div class="node state" id="service_task" type="service_task">
				<img src="${self.path.app}/img/bpm/16/service_task.png" />&nbsp;&nbsp;服务任务
			</div>
			<div class="node state" id="mail_task" type="mail_task">
				<img src="${self.path.app}/img/bpm/16/mail_task.png" />&nbsp;&nbsp;邮件任务
			</div>
			<div class="node state" id="timerboundaryevent" type="timerboundaryevent">
				<img src="${self.path.app}/img/bpm/16/timerboundaryevent.png" />&nbsp;&nbsp;定时任务
			</div>
			<div class="node state" id="fork" type="fork">
				<img src="${self.path.app}/img/bpm/16/gateway_parallel.png" />&nbsp;&nbsp;分支
			</div>
			<div class="node state" id="join" type="join">
				<img src="${self.path.app}/img/bpm/16/gateway_parallel.png" />&nbsp;&nbsp;合并
			</div>
			<div class="node state" id="exclusive_gateway" type="exclusive_gateway">
				<img src="${self.path.app}/img/bpm/16/exclusive_gateway.png" />&nbsp;&nbsp;排他网关
			</div>
			<div class="node state" id="end" type="end">
				<img src="${self.path.app}/img/bpm/16/end_event_terminate.png" />&nbsp;&nbsp;结束
			</div>
		</div>
		<div id="myflow_props"
			style="position: absolute; top: 30; right: 50; background-color: #fff; width: 220px; padding: 3px;"
			class="ui-widget-content">
			<div id="myflow_props_handle" class="ui-widget-header">属性</div>
			<table border="1" width="100%" cellpadding="0" cellspacing="0">
			</table>
			<div>&nbsp;</div>
		</div> 
		<div id="myflow"></div>
	</body>
	<script type="text/javascript">
		var rootPath = "${self.path.app}/img/bpm/";
		var flowName = '${flowName}';
		var flowKey = '${flowKey}';
		var flowDesc = '${flowDesc}';
	</script>
	<script type="text/javascript" src="${self.path.flow}/lib/raphael-min.js"></script>
	<script type="text/javascript" src="${self.path.flow}/lib/jquery-ui-1.8.4.custom/js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="${self.path.flow}/lib/jquery-ui-1.8.4.custom/js/jquery-ui-1.8.4.custom.min.js"></script>
	<script type="text/javascript" src="${self.path.flow}/myflow.js"></script>
	<script type="text/javascript" src="${self.path.flow}/myflow.jpdl4.js"></script>
	<script type="text/javascript" src="${self.path.flow}/myflow.editors.js"></script>
	<script type="text/javascript" src="${self.path.handlebars}/handlebars.js"></script>
	<script type="text/javascript" src="${self.path.metronic}/assets/global/plugins/bootstrap-toastr/toastr.min.js"></script>
	<script type="text/javascript" src="${self.path.app}/js/app.js"></script>
	<script type="text/javascript">
		var dataId = "${id}";
		var dataView = new Object(${flow});
		var base = "${base}";
	</script>
	<script type="text/javascript" src="${self.path.app}/js/bpm/activiti-create.js"></script>
</html>