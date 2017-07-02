$(function () {
	app.refuseCode=app.dicts.dict_150;/*拒绝代码*/
	app.activitiCode=app.dicts.dict_151;/*激活代码*/
	app.approvalStatus=app.dicts.dict_154;/*审批状态*/
	app.activitiEndStatus=app.dicts.dict_85;/*流程结束状态*/
	$.merge(app.refuseCode,app.activitiCode);
	$.merge(app.refuseCode,app.approvalStatus);
    $.merge(app.refuseCode,app.activitiEndStatus);
	var cache = {};
	var registerText = function(field, objs, vkey, tkey) {
		pfx = field + '-';
		for(var i in objs) {
			cache[pfx + objs[i][vkey]] = objs[i][tkey];
		}
    }
    registerText('opinionId', app.refuseCode, 'code', 'name');
	var translateText = function(field,obj){
		var pfx = field + '-';
		var ret = cache[pfx + app.getNestedProperty(field, obj)];
		if(ret) {
			return ret;

		}else{
			return app.getNestedProperty(field, obj)
		}
	}

	var getHistoryTasks = function(){
		$.Bpm.getHistoryTasks(function(data){
			var html="";
			var a = cache;
			for(var i=0;i<data.length;i++){
				var obj = data[i];
				if(obj.endTime){
					var opinionContent = '';
					var handler = obj.handler==null?"":obj.handler;
					var operatorType = "";
					if(obj.handleOpinion){
						var opinionInfo = JSON.parse(obj.handleOpinion);
						opinionContent = opinionInfo.opinionNote;
						operatorType = translateText("opinionId",opinionInfo);
					}else{
						operatorType = "通过";
					}
					html = html + '<li>';
					html = html + '		<p class="unit-cile"></p>';
					html = html + '		<div class="tag process-content">';
					html = html + '			<p class="img-box">';
					html = html + '				<img  src="../../../static/app/1.0.0/img/history-into-pieces/zhankai_nor.png">';
					html = html + '				'+obj.endTime+' <a> '+obj.taskName+'已完成</a>';
					html = html + '			</p>';
					html = html + '			<p class="content">审核人 : '+handler+'<br/>操作 : '+operatorType+'<br/>意见 : '+opinionContent+' </p>';
					html = html + '		</div>';
					html = html + '		<div class="send-tag process-content">';
					html = html + '			<p class="img-box">';
					html = html + '				'+obj.endTime+' <a>'+obj.taskName+'已完成</a>';
					html = html + '				<img  src="../../../static/app/1.0.0/img/history-into-pieces/zhankai_nor.png">';
					html = html + '			</p>';
					html = html + '			<p class="content">审核人 : '+handler+'<br/>操作 : '+operatorType+'<br/>意见 : '+opinionContent+' </p>';
					html = html + '		</div>';
					html = html + '</li>';
				}
			}
			$(".track-body").html(html);
		});
	}
	//获取办理历史
	getHistoryTasks();
});