/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
	var $ = window.jQuery;
	var app = window.app;
	App.startPageLoading({animate: true});
	+function($, app) {
		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'superior-history-into-pieces') {
					App.stopPageLoading();
					$("#into-title").html("申请编号："+busId);
					/*导航*/
					var data = {};
					data.taskId = request.taskId;
					var tp5 = Handlebars.compile($('#url-boxbg').html());
					var html = tp5(data);
					$("#ul_div").html(html);
				}
			});
		};
		init();
	} (window.jQuery, window.app);
	/*上一步*/
	$('#previousPage').click(function () {
		window.location.href="/cb/superior-telephone-return/superior-risk-warning.html?taskId="+app.request.taskId;
	});
	
	/*下一步*/
	$('#nextPage').click(function () {
		window.location.href="/cb/superior-telephone-return/superior-return-visit.html?taskId="+app.request.taskId;
	});
	$('body').on('click', '.img-box', function () {
		$(this).parents(".process-content").find(".content").toggle();
	});
	//获取里程碑
	var getMileStones = function(){
		var html = '';
		html = html + '<li class="start-process">';
		html = html + '		<p class="first-img"><img src="../../../static/app/1.0.0/img/history-into-pieces/start.png"><span></span>';
		html = html + '		</p>';
		html = html + '		<p>贷款申请</p>';
		html = html + '</li>';
		$.Bpm.getMileStones(function(data){
			for(var i=0;i<data.length;i++){
				var obj = data[i];
				//如果已办理完成的
				if(obj.endTime){
					html = html + '<li class="middle-process">';
					html = html + '		<p class="first-img"><img src="../../../static/app/1.0.0/img/history-into-pieces/chushenqing.png"><span></span>';
					html = html + '		</p>';
					html = html + '		<p>'+obj.taskName+'</p>';
					html = html + '</li>';
				}else if(obj.startTime&&!obj.endTime){
					html = html + '<li class="current-process">';
					html = html + '		<p class="first-img"><img src="../../../static/app/1.0.0/img/history-into-pieces/guocheng.png"><span></span>';
					html = html + '		</p>';
					html = html + '		<p>'+obj.taskName+'</p>';
					html = html + '</li>';
				}else if(!obj.startTime&&!obj.endTime){
					html = html + '<li class="unfinsh-process">';
					html = html + '		<p class="first-img"><img src="../../../static/app/1.0.0/img/history-into-pieces/guocheng_nor.png"><span></span>';
					html = html + '		</p>';
					html = html + '		<p>'+obj.taskName+'</p>';
					html = html + '</li>';
				}
			}
			html = html + '<li class="end-process">';
			html = html + '		<p class="first-img"><img src="../../../static/app/1.0.0/img/history-into-pieces/start_nor.png"><span></span>';
			html = html + '		</p>';
			html = html + '		<p>放款完成</p>';
			html = html + '</li>';
			$(".pieces-num").html(html);
		});
	}
	getMileStones();
	//获取办理历史
	var getHistoryTasks = function(){
		$.Bpm.getHistoryTasks(function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var obj = data[i];
				if(obj.endTime){
					var opinionContent = '';
					if(obj.handleOpinion){
						var opinionInfo = JSON.parse(obj.handleOpinion);
						opinionContent = opinionInfo.opinionNote;
					}
					html = html + '<li>';
					html = html + '		<p class="unit-cile"></p>';
					html = html + '		<div class="tag process-content">';
					html = html + '			<p class="img-box">';
					html = html + '				<img  src="../../../static/app/1.0.0/img/history-into-pieces/zhankai_nor.png">';
					html = html + '				'+obj.endTime+' <a> '+obj.taskName+'已完成</a>';
					html = html + '			</p>';
					html = html + '			<p class="content">审核人 : '+obj.handler+'<br/>意见 : '+opinionContent+' </p>';
					html = html + '		</div>';
					html = html + '		<div class="send-tag process-content">';
					html = html + '			<p class="img-box">';
					html = html + '				'+obj.endTime+' <a>'+obj.taskName+'已完成</a>';
					html = html + '				<img  src="../../../static/app/1.0.0/img/history-into-pieces/zhankai_nor.png">';
					html = html + '			</p>';
					html = html + '			<p class="content">审核人 : '+obj.handler+'<br/>意见 : '+opinionContent+' </p>';
					html = html + '		</div>';
					html = html + '</li>';
				}
			}
			$(".track-body").html(html);
		});
	}
	getHistoryTasks();
});