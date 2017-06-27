function reloadWindow(){
  window.location.reload();
}

function reloadFlowList(status, id){
  $.ajax({
      url:app.FLOW_LIST,
      data:{status:status},
      timeout:10000,
      type:"POST",
      async: true,
      dataType:"json",
      success:function(data){
      var html = '';
      var name = '';
      if(status == 0){
        name = 'notRelease';
      }else if(status == 1){
        name = 'haveReleased';
      }else if(status == 2){
        name = 'stopped';
      }
      console.info(data);
      $.each(data,function(index,item){
        html += '<div class="icheck-list">';
        html += '<label class="'+name+'"><input type="radio" class="icheck" value="'+item.id+'" data-radio="iradio_minimal-blue" name="'+name+'"> '+item.name+'</label>';
        html += '</div>';
      });
      $('#'+id+'').html(html);
      app.handleiCheck();
      },
      error:function(xOptions, textStatus){
        top.app.alertError('获取流程失败');
      },
      complete: function(XMLHttpRequest,status){
       if(status=='timeout'){
         top.app.alertError('获取流程失败');
        }
     }
  });
}

/**
 * 创建流程
 * @param data
 * 			流程json数据
 * @returns
 */
function saveFlow(data,rawStr, flowInfoId) {
  $.ajax({
      url:app.FLOW_SAVE,
      data:{data:data, rawStr:rawStr, flowInfoId:flowInfoId},
      timeout:10000,
      type:"POST",
      async: true,
      dataType:"json",
      success:function(data,status,request){
      if(top.app.isOK(data)){
        top.app.alertOK('新增流程成功');
        setTimeout('reloadWindow()',1000);
      }else{
        top.app.alertError('新增流程失败');
      }
      
      },
      error:function(xOptions, textStatus){
        top.app.alertError('新增流程失败');
      },
      complete: function(XMLHttpRequest,status){
       if(status=='timeout'){
         top.app.alertError('新增流程失败');
        }
     }
  });
}

//停用流程
function disableFlow(flowId){
  $.ajax({
      url:app.FLOW_DISABLED + flowId,
      timeout:10000,
      type:"POST",
      async: true,
      dataType:"json",
      success:function(data,status,request){
      if(top.app.isOK(data)){
        top.app.alertOK('停用流程成功');
        setTimeout('reloadWindow()',2000);
      }else{
        top.app.alertError('停用流程失败');
      }
      
      },
      error:function(xOptions, textStatus){
        top.app.alertError('停用流程失败');
      },
      complete: function(XMLHttpRequest,status){
       if(status=='timeout'){
         top.app.alertError('停用流程失败');
        }
     }
  });
}

//发布流程
function deployFlow(flowId){
  $.ajax({
      url:app.FLOW_DEPLOY + flowId,
      timeout:10000,
      type:"GET",
      async: true,
      dataType:"json",
      success:function(data,status,request){
      if(top.app.isOK(data)){
        top.app.alertOK('发布流程成功');
        
        setTimeout('reloadWindow()',2000);
      }else{
        top.app.alertError('发布流程失败');
      }
      },
      error:function(xOptions, textStatus){
        top.app.alertError('发布流程失败');
      },
      complete: function(XMLHttpRequest,status){
       if(status=='timeout'){
         top.app.alertError('发布流程失败');
        }
     }
  });
}

function getSelectId(){
  var select = $('.nav.nav-single').find('li[class="active"]');
    var id = select.attr('id');
    var sid = '';
    if(id == 'showReleased'){
      sid = 'haveReleased';
    }else if(id == 'showNotReleased'){
      sid = 'notRelease';
    }else if(id == 'showDisabledList'){
      sid = 'stopped';
    }

    return $('#'+sid).find('.'+sid).find('input:radio:checked').val();
}

$(function () {
  $('#myflow').myflow({
    editable: false,
    basePath: "",
    restore: {},
    tools: {
      save: {
        onclick: function (data, flowInfoId) {
          var objData = eval('(' + data + ')');
          var strData = JSON.stringify(objData);
          saveFlow(strData, data, flowInfoId);
        }
      }
    }
  });

  reloadFlowList(1, 'haveReleased');

  $('#showReleased').click(function(){reloadFlowList(1, 'haveReleased')});
  $('#showNotReleased').click(function(){reloadFlowList(0, 'notRelease')});
  $('#showDisabledList').click(function(){reloadFlowList(2, 'stopped')});

  //导出XML
  $('.nav-item[data-action="exportXml"]').click(function(){
    if(typeof($(this).attr("disabled"))!="undefined"){
      return false;
    }
    var selectId = getSelectId();
    if(selectId){
      window.location.href = app.FLOW_EXPORT_XML + selectId;
    }
  });

  //导出Json
  $('.nav-item[data-action="exportJson"]').click(function(){
    if(typeof($(this).attr("disabled"))!="undefined"){
      return false;
    }
    var selectId = getSelectId();
    if(selectId){
      window.location.href = app.FLOW_EXPORT_JSON + selectId;
    }
  });

  //发布
  $('.nav-item[data-action="release"]').click(function(){
    if(typeof($(this).attr("disabled"))!="undefined"){
      return false;
    }
    var selectId = getSelectId();
    if(selectId){
      deployFlow(selectId);
    }
  });

  //停用
  $('.nav-item[data-action="stop"]').click(function(){
    
  });

});