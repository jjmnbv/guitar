(function($){
var myflow = $.myflow;

$.extend(true,myflow.config.rect,{
	attr : {
	r : 8,
	fill : '#F6F7FF',
	stroke : '#03689A',
	"stroke-width" : 2
}
});

$.extend(true,myflow.config.props.props,{
	name : {name:'name', label:'名称(必填，非数字)', value:flowName, editor:function(){return new myflow.editors.inputEditor2();}},
	key : {name:'key', label:'标识(必填)', value:flowKey, editor:function(){return (flowKey ?  new myflow.editors.inputEditor3() : new myflow.editors.inputEditor2());}},
	desc : {name:'desc', label:'描述', value:flowDesc, editor:function(){return new myflow.editors.inputEditor();}}
});


$.extend(true,myflow.config.tools.states,{
			'timer-start' : {
				showType: 'image',
				type : 'timer-start',
				name : {text:'<<timer-start>>'},
				text : {text:'定时开始'},
				img : {src : rootPath+'48/timer_start.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '触发时间（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}},
					/*temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}*/
				}},
			'message-start' : {
				showType: 'image',
				type : 'message-start',
				name : {text:'<<message-start>>'},
				text : {text:'消息开始'},
				img : {src : rootPath+'48/message_start.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '消息引用（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}}
					/*temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}*/
				}},
			start : {
				showType: 'image',
				type : 'start',
				name : {text:'<<start>>'},
				text : {text:'开始'},
				img : {src : rootPath+'48/start_event_empty.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					/*temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}*/
				}},
			end : {showType: 'image',type : 'end',
				name : {text:'<<end>>'},
				text : {text:'结束'},
				img : {src : rootPath+'48/end_event_terminate.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'结束'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					/*temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}*/
				}},
			'end-cancel' : {showType: 'image',type : 'end-cancel',
				name : {text:'<<end-cancel>>'},
				text : {text:'取消'},
				img : {src : rootPath+'48/end_event_cancel.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'取消'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			'end-error' : {showType: 'image',type : 'end-error',
				name : {text:'<<end-error>>'},
				text : {text:'错误'},
				img : {src : rootPath+'48/end_event_error.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'错误'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			state : {showType: 'text',type : 'state',
				name : {text:'<<state>>'},
				text : {text:'状态'},
				img : {src : rootPath+'48/task_empty.png',width : 48, height:48},
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'状态'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			fork : {showType: 'image',type : 'fork',
				name : {text:'<<fork>>'},
				text : {text:'分支'},
				img : {src : rootPath+'48/gateway_parallel.png',width :48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'分支'},
					temp1: {name:'temp1', label: '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
				}},
			join : {showType: 'image',type : 'join',
				name : {text:'<<join>>'},
				text : {text:'合并'},
				img : {src : rootPath+'48/gateway_parallel.png',width :48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'合并'},
					temp1: {name:'temp1', label: '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
				}},
			exclusive_gateway : {showType: 'image',type : 'exclusive_gateway',
				name : {text:'<<exclusive_gateway>>'},
				text : {text:'排他网关'},
				img : {src : rootPath+'48/exclusive_gateway.png',width :48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'排他网关'},
					desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			task : {showType: 'text',type : 'task',
				name : {text:'<<task>>'},
				text : {text:'任务'},
				img : {src : rootPath+'48/task_empty.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'任务'},
					desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			'task_parallel' : {showType: 'image',type : 'task_parallel',
				name : {text:'<<task_parallel>>'},
				text : {text:'并行任务'},
				img : {src : rootPath+'48/task_parallel.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'并行任务'},
					desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			'task_serial' : {showType: 'image',type : 'task_serial',
				name : {text:'<<task_serial>>'},
				text : {text:'串行任务'},
				img : {src : rootPath+'48/task_serial.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'串行任务'},
					desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			'service_task' : {showType: 'image',type : 'service_task',
				name : {text:'<<service_task>>'},
				text : {text:'服务任务'},
				img : {src : rootPath+'48/service_task.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'服务任务'},
					temp1: {name:'temp1', label: '代理类名称（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}}
				}},
			'mail_task' : {showType: 'image',type : 'mail_task',
				name : {text:'<<mail_task>>'},
				text : {text:'邮件任务'},
				img : {src : rootPath+'48/mail_task.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'服务任务'},
					temp1: {name:'temp1', label: '收件人（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}},
					temp2: {name:'temp2', label: '发件人（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}},
					temp3: {name:'temp3', label: '主题（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}},
					temp4: {name:'temp4', label: '抄送', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp5: {name:'temp5', label: '密送', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp6: {name:'temp6', label: '字符集（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}},
					temp7: {name:'temp7', label: '邮件内容（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}}
				}},
			'timerboundaryevent' : {
				showType: 'image',
				type : 'timerboundaryevent',
				name : {text:'<<timerboundaryevent>>'},
				text : {text:'定时任务'},
				img : {src : rootPath+'48/timerboundaryevent.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
					temp1: {name:'temp1', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '触发时间（必填）', value:'', editor: function(){return new myflow.editors.inputEditor2();}},
				}}
			});
})(jQuery);