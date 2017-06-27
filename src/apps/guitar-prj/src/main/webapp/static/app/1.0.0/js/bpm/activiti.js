+ function($, app){
  
  /**
   * 修改流程信息
   */
  var eidtFlowInfo = function () {
    var editModal = $('#flow-info-editmodal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      $("input[name=id]", editForm).val('-1');
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var flowId = $(event.relatedTarget).data('viewFlowId');
      var flowName = $(event.relatedTarget).data('viewFlowName');
      if (!flowId) return;
      
      $("strong", editModal).html(flowName);

      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/activiti/view/' + flowId, 'json');
      if (!jqxhr) {
        return;
      }

      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (data == null) {
          return;
        }
        editForm.deserializeObject(data);
      });
    });

    $('.ok', editModal).click(function () {
      if (editForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功修改流程信息.');
            editModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  };
  
  var getSelectedId = function() {
    var id = '';
    $('tbody > tr > td:nth-child(1) input[type="radio"]:checked', $('#flowstable')).each(function() {
      id = $(this).val();
    });
    return id;
  };
  
  /**
   * 复制
   */
  var copyFlowInfo = function() {
    var table = $('#flowstable');
    $(".main-page").delegate('.fa-copy', 'click', function(){
      var id = getSelectedId();
      if(!id){
        app.alertOK('未选择流程信息.');
        return;
      }
      //TODO copy flow
      App.startPageLoading({ animate: true });
      var jqxhr = app.$post(app.base+'' + id, {}, 'json');
      if (!jqxhr) return false;
      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (app.isOK(data)) {
          $('.main-page .pagination-reload').click();
          app.alertOK("复制成功.");
          return;
        }
        app.alertError(data.errors.join('\n'));
      });
    });
  };
  
  /**
   * 启用
   */
  var enableFlowHandle = function() {
    var table = $('#flowstable');
    $(".main-page").delegate('.activiti-enable', 'click', function(){
      var id = $(this).data('activitiId');
      
      App.startPageLoading({ animate: true });
      var jqxhr = app.$post(app.base+'/activiti/flowenable/' + id, {}, 'json');
      if (!jqxhr) return false;
      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (app.isOK(data)) {
          $('.main-page .pagination-reload').click();
          app.alertOK("启用成功.");
          return;
        }
        app.alertError(data.errors.join('\n'));
      });
    });
  };
  /**
   * 挂起
   */
  var disableFlowHandle = function() {
    $(".main-page").delegate('.activiti-disable', 'click', function(){
      var id = $(this).data('activitiId');
      
      App.startPageLoading({ animate: true });
      var jqxhr = app.$post(app.base+'/activiti/flowdisable/' + id, {}, 'json');
      if (!jqxhr) return false;
      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (app.isOK(data)) {
          $('.main-page .pagination-reload').click();
          app.alertOK("禁用成功.");
          return;
        }
        app.alertError(data.errors.join('\n'));
      });
    });
  };
  
  var removeFlowInfo = function() {
    var table = $('#flowstable');
    
    $(".main-page").delegate('.remove', 'click', function(){
      
      var id = getSelectedId();
      if(!id){
        app.alertOK('未选择流程信息.');
        return;
      }
      var tmsg = "确定删除选中的流程信息?";
      bootbox.confirm({title: '提示', message: tmsg, callback: function (e) {
        if (e) {
          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.base+'/activiti/remove/' + id, {}, 'json');
          if (!jqxhr) return false;
          jqxhr.done(function (data) {
            App.stopPageLoading();
            if (app.isOK(data)) {
              $('.main-page .pagination-reload').click();
              app.alertOK("删除成功.");
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        }
      }});
    });
  };
  
  
    /*新建流程*/
    $('.activiti-create').on('click',function(){
      var path = $(this).attr('data-path');
      window.open(path+'/activiti/create','_blank');
    });
  
  /*流程查看*/
    $(document).on('click','.activiti-view',function(){
    var id = $(this).attr('data-activiti-id');
    var path = $(this).attr('data-path');
    window.open(path+'/activiti/flows-view/'+id,'_blank');
  });
  
  /*流程编辑*/
  $(document).on('click','.activiti-edit',function(){
    var id = $(this).attr('data-activiti-id');
    var path = $(this).attr('data-path');
    window.open(path+'/activiti/flows-edit/'+id,'_blank');
  });
  
  /*流程部署*/
  $(document).on('click','.activiti-deploy',function(){
    var id = $(this).attr('data-id');
    $.ajax({
        url:base +"flows-deploy/"+id,
        type:"POST",
        timeout:10000,
        async: true,
        dataType:"json",
        success:function(data,status,request){
        if(top.app.isOK(data)){
          $('.icon-refresh', window.parent.document.body).click();
          top.app.alertOK('部署成功');
        }else{
          top.app.alertError('部署失败:'+data.errorCode);
        }
        
        },
        error:function(jqXHR, textStatus, errorThrown){
          top.app.alertError('部署失败');
        },
        complete: function(XMLHttpRequest,status){
         if(status=='timeout'){
           top.app.alertError('部署失败');
          }
       }
    });
  });
  
  /*流程复制*/
  $(document).on('click','.activiti-copy',function(){
    var id = $('input[name="sel_radio"]:checked');
    if(id){
      $.ajax({
          url:base +"flows-copy/"+id.val(),
          type:"POST",
          timeout:10000,
          async: true,
          dataType:"json",
          success:function(data,status,request){
          if(top.app.isOK(data)){
            $('.icon-refresh', window.parent.document.body).click();
            top.app.alertOK('复制成功');
          }else{
            top.app.alertError('复制失败:'+data.errorCode);
          }
          
          },
          error:function(jqXHR, textStatus, errorThrown){
            top.app.alertError('复制失败');
          },
          complete: function(XMLHttpRequest,status){
           if(status=='timeout'){
             top.app.alertError('复制失败');
            }
         }
      });
    }
  });
  
  /**
   * 环节配置
   */
  var stepConfig = function() {
    var stepListModal = $('#step-list-modal');
    var stepListTemplate = $(stepListModal.data('pageTemplateId'));
    stepListModal.on('hidden.bs.modal', function () {
      
    });
    var flowKey, flowName, flowInfoId;
    stepListModal.on('show.bs.modal', function (event) {
      flowKey = $(event.relatedTarget).data('flowKey');
      flowName = $(event.relatedTarget).data('flowName');
      flowInfoId = $(event.relatedTarget).data('flowId');
      
      $("strong", stepListModal).html(flowName+"-环节列表");

      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/flowengine/steps/'+ flowKey +'/' + flowInfoId, 'json');
      if (!jqxhr) {
        return;
      }

      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (data == null) {
          return;
        }
        var templateData = {
          "content":data
        };
        stepListModal.find('.modal-body').html(Handlebars.compile(stepListTemplate.html())(templateData));
      });
    });
    
    var stepConfigModal = $('#step-config-modal');
    var stepConfigForm = $("form", stepConfigModal);
    var validator = app.bindFormValidation(stepConfigForm);
    var stepKey, stepName, stepDesc ;
    stepConfigModal.on('hidden.bs.modal', function () {
      stepConfigForm[0].reset();
      $("input[name=id]", stepConfigForm).val('-1');
      $("input[name=flowKey]", stepConfigForm).val('');
      $("input[name=relView]", stepConfigForm).val('');
      $("input[name=handleRoleName]", stepConfigForm).val('');
      $("input[name=handleUrname]", stepConfigForm).val('');
      $("input[name=commitWayValue]", stepConfigForm).val('');
      $("input[name=plugjson]", stepConfigForm).val('');
      validator.resetForm();
      $(".select2", stepConfigForm).change();
      $(".jstreeselect .jstree-anchor", stepConfigForm).removeClass("jstree-clicked");
      $.uniform.update();
    });
    stepConfigModal.on('show.bs.modal', function (event) {
      stepKey = $(event.relatedTarget).data('stepKey');
      stepName = $(event.relatedTarget).data('stepName');
      stepDesc = $(event.relatedTarget).data('stepDesc');
      if (!stepKey) return;
      
      $("strong", stepConfigModal).html(stepName+"-配置");
      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/stepconfig/view?stepKey='+stepKey+'&flowInfoId='+flowInfoId, 'json');
      if (!jqxhr) {
        return;
      }

      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (data == null || data == '') {
        	data = new Object();
        }
        data.stepKey = stepKey;
        data.stepName = stepName;
        data.stepDesc = stepDesc;
        data.flowKey = flowKey;
        data.flowName = flowName;
        data.flowInfoId = flowInfoId;
        data.runSystem = '';
        data.stepType = '用户任务';
        stepConfigForm.deserializeObject(data);
        
        if(data.signIn == 'on'){
        	$('.signInStrategy', stepConfigModal).removeClass('hide');
			$('select[name=signInStrategy]', stepConfigModal).val(data.signInStrategy);
        }
      });
    });
    
    $('.ok', stepConfigModal).click(function () {
      if (stepConfigForm.valid()) {
        App.startPageLoading({ animate: true });
        stepConfigForm.prop('action', app.base+'/stepconfig/update');
        if ($('input[name=id]', stepConfigForm).val() == null || $('input[name=id]', stepConfigForm).val() == '') {
        	stepConfigForm.prop('action', app.base+'/stepconfig/create');
				}
        var jqxhr = app.$submit(stepConfigForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功修改环节配置.');
            stepConfigModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
    /**
     * 关联视图
     */
    var relviewHandle = function() {
      var relviewModal = $('#relview-sel-modal');
      var relviewTemplate = $(relviewModal.data('pageTemplateId'));
      var initRelviewtypeSelLoader = function(object) {
        
        $(".relviewtype", object).each(function(){
          $(this).empty().append('<option value="">请选择视图类型...</option>').selectloader({
            relviewtype: relviewtype
          });
          $(this).change(function () {
            if ($(this).val() == "1") {
              initRelviewSelLoader($(this).parent().parent(), nonfixrelview);
            } else {
              initRelviewSelLoader($(this).parent().parent(), fixrelview);
            }
          });
          $(this).trigger('change');
        });
        $('select[data-text-input]').change(function() {
          var texts = [];
          $(this).find("option:selected").each(function(){
            texts.push($(this).data('textVal'));
          });
          $($(this).data('textInput'), $(this).parent().parent()).val(texts);
        });
      };
      
      var initRelviewSelLoader = function(object, store){
        $(".relviewsel", object).each(function(){
          $(this).empty().append('<option value="">请选择视图...</option>').selectloader({
            relview: store
          });
        });
      }
      
      var initRelviewEvent = function(object) {
        $('.fa-minus', object).unbind('click').click(function() {
          removeTr($(object), $(this).parents("tr").index());
        });
      };
      
      relviewModal.on('hidden.bs.modal', function () {
        
      });
      relviewModal.on('show.bs.modal', function (event) {
        relviewModal.css('margin-top', $(window).height()/2-200);
        var templateData = {
          'content': eval($('input[name=relView]', stepConfigModal).val())
        };
        relviewModal.find('.modal-body').html(Handlebars.compile(relviewTemplate.html())(templateData));
        
        $('.fa-plus', relviewModal).unbind('click').click(function() {
          addTr($('table', relviewModal), $($(relviewModal.data('pageTrTemplateId'))), function(newTr, table) {
            initRelviewtypeSelLoader(newTr);
            initRelviewEvent(table);
          });
        });
        
        initRelviewtypeSelLoader(relviewModal);
        initRelviewEvent($('table', relviewModal));
        
        var findRelViewExtPropertyVal = function(relviewCode, propertyName) {
          var propertyVal = '';
          $.each(fixrelview, function (index, obj) {
            console.log(index + "..." + obj[relviewCode]+"..."+obj[propertyName]);
            if(obj['code'] == relviewCode) {
              propertyVal = obj[propertyName];
              return;
            }
          });
          return propertyVal;
        };
        
        var relviewForm = $("form", relviewModal);
        $('.ok', relviewModal).click(function () {
          for(var i=0; i<$('#relview-sel-table tr').length; i++) {
            if($('select[name=relviewTcode]', $("#relview-sel-table").find("tr").eq(i)).val() == ''
              || $('select[name=relviewCode]', $("#relview-sel-table").find("tr").eq(i)).val() == ''
                || $('input[name=dispOrder]', $("#relview-sel-table").find("tr").eq(i)).val() == '') {
              app.alertError("存在待完善内容!");
              return;
            }
          }
          
          var relviewArr = [];
          var relview;
          var relviewName = '';
          if($('tr:eq(0)', $('table', relviewModal)).attr('class').indexOf('no-data') != -1) {
            $('tr:eq(0)', $('table', relviewModal)).remove();
          }
          for(var i=0; i<$('#relview-sel-table tr').length; i++) {
            relview = new Object();
            relview.relviewTname = $('input[name=relviewTname]', $("#relview-sel-table").find("tr").eq(i)).val();
            relview.relviewTcode = $('select[name=relviewTcode]', $("#relview-sel-table").find("tr").eq(i)).val();
            relview.relviewName = $('input[name=relviewName]', $("#relview-sel-table").find("tr").eq(i)).val();
            relview.relviewCode = $('select[name=relviewCode]', $("#relview-sel-table").find("tr").eq(i)).val();
            relview.dispOrder = $('input[name=dispOrder]', $("#relview-sel-table").find("tr").eq(i)).val();
            if(relview.relviewTcode == '0') {
              relview.viewCreateUrl = findRelViewExtPropertyVal(relview.relviewCode, 'createUrl');
              relview.viewViewUrl = findRelViewExtPropertyVal(relview.relviewCode, 'viewUrl');
              relview.viewUpdateUrl = findRelViewExtPropertyVal(relview.relviewCode, 'updateUrl');
              relview.viewFormId = findRelViewExtPropertyVal(relview.relviewCode, 'formId');
            }
            relviewArr.push(relview);
            relviewName += relview.relviewName + ';';
          }
          $('input[name=relView]', stepConfigModal).val(JSON.stringify(relviewArr));
          $('input[name=relViewDis]', stepConfigModal).val(relviewName);
          relviewModal.modal('hide');
        });
      });
    };
    /**
     * 事件处理
     */
    var plugHandle = function() {
      var plugModal = $('#plug-sel-modal');
      var plugTemplate = $(plugModal.data('pageTemplateId'));
      var initPlugSelLoader = function(object) {
        $(".triggerStage", object).each(function(){
          $(this).empty().append('<option value="">请选择触发阶段...</option>').selectloader({
    				triggerStage: triggerStage
          });
        });
        $(".selectloader-bpmlisteners", object).each(function(){
          $(this).empty().append('<option value="">请选择事件...</option>').selectloader({
            bpmlisteners: bpmlisteners
          });
        });
      };
      
      var initPlugEvent = function(object) {
        $('.fa-minus', object).unbind('click').click(function() {
          removeTr($(object), $(this).parents("tr").index());
        });
      };
      
      plugModal.on('hidden.bs.modal', function () {
        
      });
      plugModal.on('show.bs.modal', function (event) {
        plugModal.css('margin-top', $(window).height()/2-200);
        var templateData = {
          'content': eval($('input[name=plugjson]', stepConfigModal).val())
        };
        plugModal.find('.modal-body').html(Handlebars.compile(plugTemplate.html())(templateData));
        
        $('a.plus', plugModal).unbind('click').click(function() {
          addTr($('table', plugModal), $($(plugModal.data('pageTrTemplateId'))), function(newTr, table) {
            initPlugSelLoader(newTr);
            initPlugEvent(table);
          });
        });
        
        initPlugSelLoader(plugModal);
        initPlugEvent($('table', plugModal));
        
        $('.ok', plugModal).click(function () {
          for(var i=0; i<$('#plug-sel-table tr').length; i++) {
            if($('select[name=triggerStage]', $("#plug-sel-table").find("tr").eq(i)).val() == ''
              || $('select[name=plugName]', $("#plug-sel-table").find("tr").eq(i)).val() == '') {
              app.alertError("存在待完善内容!");
              return;
            }
          }
          
          var plugArr = [];
          var plug;
          var plugDesc = '';
          if($('tr:eq(0)', $('table', plugModal)).attr('class').indexOf('no-data') != -1) {
            $('tr:eq(0)', $('table', plugModal)).remove();
          }
          for(var i=0; i<$('#plug-sel-table tr').length; i++) {
            plug = new Object();
            plug.triggerStage = $('select[name=triggerStage]', $("#plug-sel-table").find("tr").eq(i)).val();
            plug.plugName = $('select[name=plugName]', $("#plug-sel-table").find("tr").eq(i)).val();
            plug.plugDesc = $('select[name=plugName]', $("#plug-sel-table").find("tr").eq(i)).find("option:selected").data('textVal');
            plugArr.push(plug);
            plugDesc += plug.plugDesc + ';';
          }
          
          $('input[name=plugjson]', stepConfigModal).val(JSON.stringify(plugArr));
          $('textarea[name=plugjsonDis]', stepConfigModal).val(plugDesc);
          plugModal.modal('hide');
        });
      });
    };
    
    var autoAssignHandle = function() {
      stepConfigModal.delegate('input[name=assignWayKey]', 'change', function () {
        var selVal = $('input[name=assignWayKey]:checked').val();
        if(selVal == '0'){
          $('.autoAssignStrategy', stepConfigModal).removeClass('hide');
        } else {
          $('.autoAssignStrategy', stepConfigModal).addClass('hide');
          $('select[name=autoAssignStrategy]', stepConfigModal).val('');
        }
      });
    };
    
    var signInHandle = function() {
      stepConfigModal.delegate('input[name=signIn]', 'change', function () {
        var selVal = $('input[name=signIn]');
        if(selVal.prop('checked')){
          $('.signInStrategy', stepConfigModal).removeClass('hide');
        } else {
          $('.signInStrategy', stepConfigModal).addClass('hide');
          $('select[name=signInStrategy]', stepConfigModal).val('');
        }
      });
    };
    
    var commitWayHandle = function() {
      stepConfigModal.delegate('input[name=commitWayKey]', 'change', function () {
        var selVal = $('input[name=commitWayKey]:checked').val();
        if(selVal == '0'){
          $('input[name=assignWayKey]:eq(1)').prop("checked",'checked');
          $('input[name=assignWayKey]', stepConfigModal).trigger('change');
          $.uniform.update();
          $('input[name=assignWayKey]', stepConfigModal).prop('disabled', true);
        } else {
          $('input[name=assignWayKey]', stepConfigModal).prop('disabled', false);
        }
      });
    };
    
    var addTr = function(table, template, callback) {
      if($('tr:eq(0)', table).attr('class').indexOf('no-data') != -1) {
        $('tr:eq(0)', table).remove();
      }
      var newTr = Handlebars.compile(template.html());
      table.find('tbody').append(newTr);
      if(callback){
        callback($('tr:eq('+ ($('tbody tr', table).length-1) +')', table), table);
      }
    };
    var removeTr = function(table, trIndex) {
      $('tr:eq('+ trIndex +')', table).remove();
      if($('tr', table).length == 0) {
        $('tbody', table).html('<tr class="no-data"><td colspan="10" align="center">暂无关联</td></tr>');
      }
    };
    relviewHandle();
    plugHandle();
    autoAssignHandle();
    signInHandle();
    commitWayHandle();
    console.log($('input[name=assignWayKey]:checked').val());
  };
  
  var init = function () {
    //初始化日期控件
    $('.date-picker').datepicker({
      rtl: App.isRTL(),
      orientation: 'left',
      autoclose: true,
      language: "zh-CN"
    });
    bootbox.setLocale("zh_CN");
    $(".select2").select2();

    eidtFlowInfo();
    removeFlowInfo();
    stepConfig();
    enableFlowHandle();
    disableFlowHandle();
  };
  init();
} (window.jQuery, window.app);