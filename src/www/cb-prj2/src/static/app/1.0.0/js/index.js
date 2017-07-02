/**
 * 去除metronic中间容器多余20px高度
 */
+ function ($) {
  var content = $('.page-content')
  setTimeout(function () {
    content.css('min-height', (parseInt(content.css('min-height'))-20)+'px')
  },1000);

  app.$getJSON('/check-login').done(function (data) {
    console.log('checkLogin', data);
    if (app.isOK(data)) {
    console.log('已经登录.');
    } else {
    window.location.href = app.base + '/login';
    }
  });
} (window.jQuery);
/**
 * 菜单点击
 */
+ function ($, app) {

  $('#mainMenu').delegate('.nav-item', 'click', function () {
  
    if(typeof($(this).attr("disabled"))!="undefined"){
      return false;
    }
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    var action = $(this).data('action');
    if(action=='edit') {
      $('li .nav-item[data-action="edit"]').parent().siblings()
        .find('.nav-item').removeAttr('disabled');
      $.myflow.edit(true);
    }else if(action == 'save'){
      $('#myflow_save').click();
    }else if(action == 'add'){

      $('#myflow').remove();
      $('#myflowBox').append('<div id="myflow"></div>')
      $('#myflow')
          .myflow({
            editable: true,
            basePath: "",
            restore: {},
            tools : {
               save : {
                 onclick: function (data) {
                   var objData= eval('('+data+')');
                   var strData = JSON.stringify(objData);
                   saveFlow(strData, data);
                 }
               }
             }
          });
      $.myflow.edit(true);
    }else if(action == 'redo'){
      //复制流程
      window.location.reload();
    }

  });
  var uploader = WebUploader.create({
    auto: true,
    swf: path.app+'/lib/webuploader-0.1.5/js/Uploader.swf',
    server: app.FLOW_IMPORT_JSON,
    pick: '#importJSON',
    resize: false
  });
  uploader.on( 'uploadSuccess', function( file, data ) {
    if(top.app.isOK(data)){
      app.alertOK('已上传');
    }else{
      app.alertError('上传出错');
    }
  });
  uploader.on( 'uploadError', function( file ) {
    app.alertError('上传出错');
  });
} (window.jQuery, window.app);

/**
 * 左侧区流程列表点击
 */
+ function ($, app) {
  $(document).on('ifChecked','.icheck-list label', function () {
    $('li .nav-item[data-action="edit"]').parent().siblings().find('.nav-item').attr('disabled','disabled');
    var viewId = $(this).find(':radio').val();
    $.ajax({
      url:app.FLOW_VIEW + viewId,
      timeout:10000,
      async: true,
      success:function(data) {
        var dataObj = eval('('+data+')');
        $.myflow.config.canvas.clear();
        $.myflow.reload(this, {editable: true, restore: dataObj});
        $('#flowVar').data('flowKey', dataObj.props.props.key.value);
        $('#flowVar').data('flowName', dataObj.props.props.name.value);

        $.getJSON(app.FLOW_VAR_JSON, {"flowKey": dataObj.props.props.key.value}, function(data, textStatus, jqXHR) {}).done(function(data) {
          if (app.isOK(data)) {
            app.flowVars = $.parseJSON(data.payload);
          }
        });
      }
    });
  });
} (window.jQuery, window.app);

/**
 * 底部工具栏点击操作
 */
+ function ($) {
  var flowVarTable,flowChangeHistoryTable,flowSVNTable;
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    switch ($(e.target).attr('href')){
      case '#flowChart':
        break;
      case '#flowVar':
        if(!flowVarTable) {
          flowVarTable = $('#flowVarTable').DataTable({
            "responsive": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "processing": true,
            "serverSide": true,
            "ajax": {
              "url": app.FLOW_VAR,
              "type": "GET",
              "data": {
                "flowKey": $("#flowVar").data("flowKey")
              }
            },
            "drawCallback": function( settings ) {
              app.handleiCheck()
            },
            "columns": [
              {
                data: null,
                render: function (data) {
                  return '<input class="icheck" data-radio="iradio_minimal-blue" type="radio" name="id" value="'+data.id+'" data-id="'+data.id+'"/>'
                }
              },
              {data: "varId"},
              {data: "varName"},
              {data: "varType"},
              {data: "varValue"}
            ]
          });
          $('#flowVarTable tbody').on('click', 'tr', function () {
            $(this).find('[name="id"]').iCheck('check');
          })

          app.context.formHtml = $('#form1-template').html();
          app.context.formInit = function (form) {
            form.find('#auPostYn').radioloader({'auPostYn': app.boolean});
          };
          /**
           * 增加操作的弹框
           */
          $('#addVar').getModal({
            title: '新增流程变量配置',
            body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
            showBefore: function (modal) {
              app.context.showBefore({
                modal: modal
              }, app);
              $('input[name="flowKey"]', modal).val($("#flowVar").data("flowKey"));
              $('input[name="flowName"]', modal).val($("#flowVar").data("flowName"));
            },
            hideAfter: function (modal) {
              modal.setBody(app.context.formHtml);
            }
          }, function (modal) {
            app.loadTableData = function () {
              flowVarTable.draw();
            };
            app.context.submit({
              modal: modal,
              url: app.FLOWVARS_CREATE
            }, app);
          });

          /**
           * 修改操作的弹框
           */
          $('#editVar').getModal({
            title: '修改流程变量配置',
            body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
            selector: function () {
              return !!$('#flowVarTable [type=radio]:checked').length;
            },
            showBefore: function (modal) {
              app.context.showBefore({
                // url: app.FLOWVARS_GETBYID + $('#flowVarTable [type=radio]:checked').data('id'),
                url: app.FLOWVARS_GETBYID + $('#flowVarTable [type=radio]:checked').data('id'),
                modal: modal
              }, app, app.context.formInit);
              $('input[name="flowKey"]', modal).val($("#flowVar").data("flowKey"));
              $('input[name="flowName"]', modal).val($("#flowVar").data("flowName"));
            },
            hideAfter: function (modal) {
              modal.setBody(app.context.formHtml);
            }
          }, function (modal) {
            app.loadTableData = function () {
              flowVarTable.draw();
            };
            app.context.submit({
              modal: modal,
              url: app.FLOWVARS_UPDATE +$('#flowVarTable [type=radio]:checked').data('id')
            }, app);
          });

          /**
           * 删除操作的弹框
           */
          $('#delVar').getModal({
            text: '确定要删除该条记录吗？',
            size: 'modal-sm',
            selector: function () {
              return !!$('#flowVarTable [type=radio]:checked').length;
            }
          }, function (modal) {
            app.loadTableData = function () {
              flowVarTable.draw();
            };
            app.context.submit({
              modal: modal,
              url: app.FLOWVARS_DELETE + $('#flowVarTable [type=radio]:checked').data('id'),
              //url: app.DEL_FLOW,
              text: '删除成功',
              failureText: '删除失败',
              isEasyModal: true
            }, app);
          });

        }
        break;
      case '#flowChangeHistory':
        if(!flowChangeHistoryTable && $('.icheck:checked').val()) {
          flowChangeHistoryTable = $('#flowChangeHistoryTable').DataTable({
            responsive: true,
//                    info: false,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            //                    "paging": true,
            //                    "pageLength": 10,
            "processing": true,
            "serverSide": true,
            "ajax": {
              "url": app.FLOW_HISTORY+ $('.icheck:checked').val(),
              "type": "POST"/*,
               "data": function ( d ) {
               var p = {p: JSON.stringify(d)}
               return p
               }*/
            },
            "drawCallback": function( settings ) {
              app.handleiCheck()
            },
            "columns": [
              {data: "key"},
              {data: "version"},
              {data: "createDate"},
              {data: "creatorId"},
              {data: "description"},
              {
                data: null,
                render: function (data) {
                  return '<a href="#">回退</a>'
                }
              }
            ]
          });
          $('#flowChangeHistoryTable tbody').on('click', 'tr', function () {
            console.log($(this).find('[name="id"]').val())
            $(this).find('[name="id"]').iCheck('check');
          })
        }
        break;
      case '#flowEmulation':
        console.log('flowEmulation')
        break;
      case '#flowSVN':
        if(!flowSVNTable) {
          flowSVNTable = $('#flowSVNTable').DataTable({
            responsive: true,
//                    info: false,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            //                    "paging": true,
            //                    "pageLength": 10,
            "processing": true,
            "serverSide": true,
            "ajax": {
              "url": app.FLOW_SVN,
              "type": "POST",
              "data": {status:1}/*,
               "data": function ( d ) {
               var p = {p: JSON.stringify(d)}
               return p
               }*/
            },
            "drawCallback": function( settings ) {
              app.handleiCheck()
            },
            "columns": [
              {data: "name"},
              {data: "key"},
              {data: "version"},
              {data: "createTime"},
              {data: "description"}
            ]
          });
          $('#flowSVNTable tbody').on('click', 'tr', function () {
            console.log($(this).find('[name="id"]').val())
            $(this).find('[name="id"]').iCheck('check');
          })
        }
        break;
    }
  })
} (window.jQuery, window.app);

+ function ($, app) {
/*   初始化radio/checkbox控件   */
//Handles custom checkboxes & radios using jQuery iCheck plugin
app.handleiCheck = function() {
  if (!$().iCheck) {
    return;
  }

  $('.icheck').each(function() {
    var checkboxClass = $(this).attr('data-checkbox') ? $(this).attr('data-checkbox') : 'icheckbox_minimal-grey';
    var radioClass = $(this).attr('data-radio') ? $(this).attr('data-radio') : 'iradio_minimal-grey';

    if (checkboxClass.indexOf('_line') > -1 || radioClass.indexOf('_line') > -1) {
      $(this).iCheck({
        checkboxClass: checkboxClass,
        radioClass: radioClass,
        insert: '<div class="icheck_line-icon"></div>' + $(this).attr("data-label")
      });
    } else {
      $(this).iCheck({
        checkboxClass: checkboxClass,
        radioClass: radioClass
      });
    }
  });
};
// handleiCheck(); // handles custom icheck radio and checkboxes
} (window.jQuery, window.app);