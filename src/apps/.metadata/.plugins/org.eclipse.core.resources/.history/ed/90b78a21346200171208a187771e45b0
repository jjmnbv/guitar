<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<html>
	<head>
		<c:set target="${self}" property="title">系统流程设计器</c:set>
		<link type="text/css" rel="stylesheet" href="${self.path.flow}/lib/jquery-ui-1.8.4.custom/css/smoothness/jquery-ui-1.8.4.custom.css" />
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
		var dataView = new Object(${flow});
	</script>
	<script type="text/javascript" src="${self.path.app}/js/bpm/activiti-view.js"></script>
</html>