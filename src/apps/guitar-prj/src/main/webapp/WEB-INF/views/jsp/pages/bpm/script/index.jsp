<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<%
  String flowKey = "";
%>

window.app = window.app || {};

+function($, app) {
		$('.commitway').radioloader({commitway: [{code:'0', name:'手动提交'}, {code:'1', name:'自动提交'}]});
    $('.assignway').radioloader({assignway: [{code:'0', name:'自动分单'}, {code:'1', name:'默认'}]});

		app.relviewtype = [{code:'0',name:'固定表单'}, {code:'1',name:'自定义表单'}];
		
		app.taskTriggerStage = [{code:'create',name:'开始'}, {code:'assignment',name:'签收'}, {code:'complete',name:'结束'}, {code:'delete',name:'删除'}, {code:'suspend',name:'挂起'}, {code:'suspend_delete',name:'挂起结束流程'}, {code:'active',name:'激活'}, {code:'revoke',name:'撤销'}];
		app.exectutriggerStage = [{code:'start',name:'开始'}, {code:'end',name:'结束'}];

		app.deployStatus = [
        {'name':'0','text':'已保存'},
        {'name':'1','text':'已部署'},
        {'name':'2','text':'已删除'}
      ];
    app.runStatus = [
        {'name':'0','text':'启用'},
        {'name':'1','text':'未启用'},
        {'name':'2','text':'禁用'}
      ];
    app.registerTextHelper('deployStatus', app.deployStatus, 'name', 'text');  //在调用handlebars模版前调用
    app.registerTextHelper('runStatus', app.runStatus, 'name', 'text');  //在调用handlebars模版前调用

    
    app.candidateUsers = <spring:eval expression="@FN_BPM.organuserNameJsTreeJSON()" />;
    app.positions = <spring:eval expression="@FN_BPM.positionsToJSON()" />;

    app.fixrelview = <spring:eval expression="@FN_BPM.fixFormToJSON()" />;
   	app.nonfixrelview = <spring:eval expression="@FN_BPM.nonFixFormToJSON()" />;
    app.bpmlisteners = <spring:eval expression="@FN_BPM.bpmListenerToJSON()" />;
   	$(".selectloader-autoassignstrategy").selectloader({
   		autoassignstrategy: <spring:eval expression="@FN_BPM.autoAssignStrategyToJSON()" />
    });

		/**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'mytask-title-img',
        dt: {
            text: '流程引擎',
            url: '#'
        },
        dd: [
            {
                text: '流程管理',
                url: '#'
            } 
        ]
    };
} (window.jQuery, window.app);

