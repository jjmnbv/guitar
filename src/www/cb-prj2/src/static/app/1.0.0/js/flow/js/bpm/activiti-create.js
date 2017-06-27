function closeWindow(){
	window.close();
	
}

/**
 * 创建流程
 * @param data
 * 			流程json数据
 * @returns
 */
function saveFlow(data){
	console.log(data);
	$.ajax({
		  url:base +"save",
		  type:"POST",
		  data:{data:data},
		  timeout:10000,
		  async: true,
		  dataType:"json",
		  success:function(data,status,request){
			if(top.app.isOK(data)){
				top.app.alertOK('新增流程成功');
				window.opener.location.reload();
				setTimeout('closeWindow()',2000);
			}else{
				top.app.alertError('新增流程失败');
			}
			
		  },
		  error:function(jqXHR, textStatus, errorThrown){
			  top.app.alertError('新增流程失败');
		  },
		  complete: function(XMLHttpRequest,status){
			 if(status=='timeout'){
				 top.app.alertError('新增流程失败');
		  	}
		 }
	});
}

/**
 * 更新流程
 * @param data
 * 			流程json数据
 * @param id
 * 			当前流程id
 * @returns
 */
function updateFlow(data,id){
	
	$.ajax({
		  url:base +"/activiti/update",
		  type:"POST",
		  data:{data:data,id:dataId},
		  timeout:10000,
		  async: true,
		  dataType:"json",
		  success:function(data,status,request){
			if(top.app.isOK(data)){
				top.app.alertOK('更新流程成功');
				window.opener.location.reload();
				setTimeout('closeWindow()',2000);
			}else{
				top.app.alertError('更新流程失败');
			}
		  },
		  error:function(jqXHR, textStatus, errorThrown){
			  top.app.alertError('更新流程失败');
		  },
		  complete: function(XMLHttpRequest,status){
			 if(status=='timeout'){
				 top.app.alertError('更新流程失败');
		  	}
		 }
	});
}

$(function() {
	$('#myflow').myflow({
		basePath : "",
		restore : dataView,
		tools : {
			save : {
			    onclick: function (data) {
					if(dataId > 0 ){
						updateFlow(data,dataId);
					}else{
						saveFlow(data);
					}
				}
			}
		}
	});
	
});

