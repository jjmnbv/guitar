$(function () {
	//获取里程碑
	var getMileStones = function(){
		var html = '';
	/*	html = html + '<li class="start-process">';
        html = html + '		<p class="first-img"><img src="../../../static/app/1.0.0/img/history-into-pieces/start.png"><span></span>';
        html = html + '		</p>';
        html = html + '		<p>贷款申请</p>';
        html = html + '</li>';*/
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
	//获取里程碑
	getMileStones();
});