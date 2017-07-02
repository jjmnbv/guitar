/**
 * 启动流程
 * @param path		项目路径
 * @param flowId	流程id
 * @param flowKey	流程key
 * @returns	OutputMessage对象（json）
 */
function startProcess(path,flowId,flowKey){
	$.ajax({
		type : 'get',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		url:  path + '/flowengine/start/'+flowKey+'/'+flowId,
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error:function(jqXHR, textStatus, errorThrown){
		  return null;
		}
	});
}

/**
 * 完成任务
 * @param path		项目路径
 * @param flowKey	流程key
 * @param stepKey	当前任务节点key
 * @param taskId	当前任务节点id
 * @param formIds	当前任务节点表单id
 * @param message	当前任务节点审批意见
 * @param comment	当前任务节点审批备注
 * @param nextAssignee	下一审批人
* @returns	OutputMessage对象（json）
 */
function completeTask(path,flowKey,stepKey,taskId,formIds,message,comment,nextAssignee){
	$.ajax({
		type : 'post',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/flowengine/complete',
		data: JSON.stringify({flowKey: flowKey, stepKey: stepKey, taskId: stepKey, formIds: formIdArr,message:message,comment:comment,nextAssignee:nextAssignee}),
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
 * 获取待办任务列表分页
 * @param path			项目路径
 * @param pageNumber	当前页数
 * @param pageSize		每页数据条数
 * @param filter		数据查询对象(详见API net.zkbc.bpm.mgt.protocol.TaskInfo类)
 * @returns	PageContext<TaskInfo>对象（json）(详见API net.zkbc.shared.protocol.PageContext类、net.zkbc.bpm.mgt.protocol.TaskInfo类)
 */
function getMyToDoTaskPage(path, pageNumber,pageSize,filter){
	
	$.ajax({
		type : 'GET',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/flowprocess/todotask/page/'+pageNumber,
		data: {pageSize:pageSize,filter:filter},
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
* 获取已办任务列表分页
* @param path			项目路径
* @param pageNumber	当前页数
* @param pageSize		每页数据条数
* @param filter		数据查询对象(详见API net.zkbc.bpm.mgt.protocol.TaskInfo类)
* @returns	PageContext<TaskInfo>对象（json）(详见API net.zkbc.shared.protocol.PageContext类、net.zkbc.bpm.mgt.protocol.TaskInfo类)
*/
function getMyDoneTaskPage(path, pageNumber,pageSize,filter){
	
	$.ajax({
		type : 'GET',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/flowprocess/task/page/'+pageNumber,
		data: {pageSize:pageSize,filter:filter},
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
* 获取已结任务列表分页
* @param path			项目路径
* @param pageNumber	当前页数
* @param pageSize		每页数据条数
* @param filter		数据查询对象(详见API net.zkbc.bpm.mgt.protocol.TaskInfo类)
* @returns	PageContext<TaskInfo>对象（json）(详见API net.zkbc.shared.protocol.PageContext类、net.zkbc.bpm.mgt.protocol.TaskInfo类)
*/
function getMyFinishedTaskPage(path, pageNumber,pageSize,filter){
	
	$.ajax({
		type : 'GET',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/flowprocess/finishedtask/page/'+pageNumber,
		data: {pageSize:pageSize,filter:filter},
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
* 获取已取消任务列表分页
* @param path			项目路径
* @param pageNumber	当前页数
* @param pageSize		每页数据条数
* @param filter		数据查询对象(详见API net.zkbc.bpm.mgt.protocol.TaskInfo类)
* @returns	PageContext<TaskInfo>对象（json）(详见API net.zkbc.shared.protocol.PageContext类、net.zkbc.bpm.mgt.protocol.TaskInfo类)
*/
function getMyCanceledTaskPage(path, pageNumber,pageSize,filter){
	
	$.ajax({
		type : 'GET',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/flowprocess/canceledtask/page/'+pageNumber,
		data: {pageSize:pageSize,filter:filter},
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
 * 取消流程
 * @param path		项目路径
 * @param taskId	任务id
 * @returns	OutputMessage对象(json)
 */
function cancelTask(path, taskId){
	
	$.ajax({
		type : 'post',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/activiti/cancel/'+taskId,
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
 * 激活流程
 * @param path		项目路径
 * @param taskId	任务id
 * @returns	OutputMessage对象(json)
 */
function activeTask(path, taskId){
	
	$.ajax({
		type : 'post',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/activiti/active/'+taskId,
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
}

/**
 * 回退流程
 * @param path		项目路径
 * @param taskId	任务id
 * @param comment	回退意见
 * @returns
 */
function rollbackTask(path,taskId,comment){
	$.ajax({
		type : 'post',
		async : true,
		contentType: 'application/json',
		dataType : 'json',
		cache: false,
		url: path+'/activiti/rollback/'+taskId,
		data: {comment:comment},
		success: function(data, textStatus, jqXHR) {
			return data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			return null
		}
	});
	
}

