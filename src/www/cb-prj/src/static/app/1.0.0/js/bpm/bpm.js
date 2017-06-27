+(function($){
  $.Bpm = {
    defaults: {},
    options: {
      formIds: null,//办理表单主键
      taskId: null,//当前任务id
      flowKey: null,//流程标识
      stepKey: null,//环节标识
      message: null,//意见
      messageFieldName: null,//意见字段name
      stepVars: null
    },
    init: function(opt) {
      $this = this;
      $this.options = $.extend({}, $this.options, opt);
      if ($this.options.taskId) {
        $this.ajaxPost('/bpm/flowprocess/flowinfoinit/' + $this.options.taskId, 'get', {}, false, function (data) {
          if (app.isOK(data)) {
            $this.options.flowKey = data.payload.flowKey;
            $this.options.stepKey = data.payload.stepKey;
            return;
          }
          app.alertError('系统异常' + data.errors.join('\n'));
        });
      }
    },
    startProcess: function(flowKey, fn) {
      $this = this;
      var taskId = '';
      $this.ajaxPost('/bpm/startext/' + flowKey, 'get', {}, false, function(data) {
        taskId = data.taskId;
        $this.options.taskId = data.taskId;
        if (fn) {
          fn(data);
        }
      });
      return taskId;
    },
    startProcessExt: function(flowKey, formIdArr, fn) {
      $this = this;
      var taskId = '';
      $this.ajaxPost('/bpm/startext/' + flowKey, 'post', JSON.stringify({formIds: formIdArr, flowKey: flowKey}), false, function(data) {
        taskId = data.taskId;
        $this.options.taskId = data.taskId;
        if (fn) {
          fn(data);
        }
      });
      return taskId;
    },
    /**签收 */
    claim: function(taskId, userId) {
      var flag = false;
      $.ajax({
        type: 'post',
        async: false,
        contentType: 'application/json',
        dataType: 'json',
        cache: false,
        url: app.base + '/bpm/claim/' + $this.options.stepKey,
        data: JSON.stringify({ taskId: this.options.taskId, userId: userId}),
        success: function (data, textStatus, jqXHR) {
          if (app.isOK(data)) {
            postFlag = true;
            return;
          }
        }
      });
      return flag;
    },
    findTaskStatus: function(fn) {
      var taskId = this.options.taskId;
      var taskStatus = '';
      this.ajaxPost('/bpm/taskstatus/' + taskId, 'get', {}, false, function(data) {
        if (app.isOK(data)) {
          taskStatus = data.taskStatus;
        } else {
          app.alertError("发起流程失败!");
        }
      });
      return taskStatus;
    },
    /**
     * 流程办理
     * fn 回调方法
     */
    handle: function(fn) {
      $this = this;
      var taskId = $this.options.taskId;
      $this.ajaxPost('/bpm/handleexter/' + $this.options.stepKey + '/' + taskId, 'get', {}, false, function(data) {
        if (app.isOK(data) && data.relView != null) {
          if (fn) {
            fn(data);
            return;
          }
          var locationPath = data.relView.addPath;
          if (data.taskStatus == 'SAVED') {
            locationPath = data.relView.updatePath;
          } else if (data.taskStatus == 'COMPLETED') {
            locationPath = data.relView.viewPath;
          }
          window.location.href = locationPath + '?taskId=' + taskId;
        } else {
          app.alertError("发起流程失败!");
        }
      });
    },
    viewTask: function(fn) {
      var taskId = this.options.taskId;
      this.ajaxPost('/bpm/viewtask/' + taskId, 'get', {}, false, function(data) {
        if (app.isOK(data) && data.relView != null) {
          if (fn) {
            fn(data);
            return;
          }
          var locationPath = data.relView.addPath;
          if (data.taskStatus == 'SAVED') {
            locationPath = data.relView.updatePath;
          } else if (data.taskStatus == 'COMPLETED'||data.taskStatus == 'REFUSED') {
            locationPath = data.relView.viewPath;
          }
          window.location.href = locationPath + '?taskId=' + taskId;
        } else {
          app.alertError("系统异常!");
        }
      });
    },
    /**
     * obj: form容器,
     * opt: {opinionId: null,
     *       opinionName: null,
     *       formHtml: null,
     *       viewIdName: null,
     *       opinionFieldName: null,
     *       opinionNoteFieldName: null,
     *       createUrl,
     *       updateUrl,
     *       viewUrl,
     *      }
     */
    initOpinionForm: function(obj, opt) {
      $this = this;
      var formHtml = '<form action="" method="POST"><div class="portlet-body flip-scroll"><div class="form-body"><div class="row"><div class="col-md-6 col-md-offset-3"><div class="form-group"><div class="input-group"><span class="input-group-addon">审批意见</span><select id="opinionId" name="opinionId" data-text-input="#opinionVal" class="form-control wordbooks" data-selectloader-store="approve-opinion" data-selectloader-val="" required><option value="">请选择...</option><option value="1">同意</option></select></div></div></div><div class="col-md-6 col-md-offset-3"><div class="form-group"><div class="input-group"><span class="input-group-addon">意见备注</span><textarea id="opinionNote" name="opinionNote" class="form-control" rows="5"></textarea></div></div></div></div></div></div></div></div><input type="hidden" id="opinionVal" name="opinionVal" value="" /><input type="hidden" name="id" /></form>';

      obj.html(opt.formHtml != null ? opt.formHtml:formHtml);
      $('form', obj).prop('id', opt.opinionId);
      $('form', obj).prop('name', opt.opinionName);
      $('form', obj).data('viewIdname', opt.viewIdName);
      $('form', obj).data('createUrl', opt.createUrl);
      $('form', obj).data('updateUrl', opt.updateUrl);
      $('form', obj).data('viewUrl', opt.viewUrl);
      $('#opinionId', obj).prop('name', opt.opinionFieldName);
      $('#opinionNote', obj).prop('name', opt.opinionNoteFieldName);
    },
    initFormExt: function(callback) {
      $this = this;
      var jqxhr = app.$get(app.base + '/bpm/handledata/' + $this.options.taskId, 'json');
      if (!jqxhr) {
        return false;
      }
      jqxhr.done(function (data) {
        if (!app.isOK(data)) {
          app.alertError(data.errors.join('\n'));
          return;
        }
        $this.init({
          formIds: data.busiFormIds,
          flowKey: data.flowKey,
          stepKey: data.stepKey,
          message: data.message,
          stepVars: data.stepVars
        });
        
        var relView = data.relView;
        var formIdObj = {};
        var formIds = data.busiFormIds;
        
        $this.fillMessage($this.options.messageFieldName);//初始化意见项
        
        if (formIds && formIds.length > 0) {
          var formIdArr = jQuery.parseJSON(formIds);
          $.each(formIdArr, function (index, item) {
            formIdObj[item.formId] = item.id;
          });
        }
        if (relView.forms == null) {
          return;
        }
        $.each(relView.forms, function (index, item) {
          var form = $('#'+item.formId);
          if (form.length <= 0) {
            return;
          }
          var viewIdName = item.viewUrl.substring(item.viewUrl.indexOf('{') + 1, item.viewUrl.indexOf('}'));
          var viewId = -1;
          if (formIdObj[viewIdName]) {
            viewId = formIdObj[viewIdName];
          }
          
          if (viewId == -1) {
            return;
          }

          var jqxhr = app.$get(app.base + item.viewUrl.replace('{'+viewIdName+'}', viewId), 'json');
          if (!jqxhr) {
            return;
          }
          jqxhr.done(function (data) {
            if (callback) {
              callback(item.formId, data);
            } else {
              form.deserializeObject(data);
            }
          });
        });
      });
    },/*返回业务主键id，不再这里获取业务数据  贺志超修改*/
    initBusFormExt: function(callback) {
      $this = this;
      var jqxhr = app.$get(app.base + '/bpm/handledata/' + $this.options.taskId, 'json');
      if (!jqxhr) {
        return false;
      }
      jqxhr.done(function (data) {      
        $this.init({
          formIds: data.busiFormIds,
          flowKey: data.flowKey,
          stepKey: data.stepKey,
          message: data.message,
          stepVars: data.stepVars
        });
        
        var relView = data.relView;
        var formIdObj = {};
        var formIds = data.busiFormIds;
        
        $this.fillMessage($this.options.messageFieldName);//初始化意见项
        
        if (formIds && formIds.length > 0) {
          var formIdArr = jQuery.parseJSON(formIds);
          $.each(formIdArr, function (index, item) {
            formIdObj[item.formId] = item.id;
          });
        }
        if (relView.forms == null) {
			return;
        }
		var isfindedform = 0;
        $.each(relView.forms, function (index, item) {
          var form = $('#'+item.formId);
          if (form.length <= 0) {
            return;
          }
		  isfindedform = 1;
          var viewIdName = item.viewUrl.substring(item.viewUrl.indexOf('{') + 1, item.viewUrl.indexOf('}'));
          var viewId = -1;
          if (formIdObj[viewIdName]) {
            viewId = formIdObj[viewIdName];
          }
          
          if (viewId == -1) {
            return;
          }

		  if (callback) {
			  callback(item.formId,viewId);
		  } 
        });
		if(isfindedform==0){
			if (callback) {
			  callback();
			}
		}
      });
    },
    /**获取里程碑 */
    getMileStones: function (fn) {
      $this = this;
      $this.ajaxPost(
        app.base + '/bpm/milestone/' + $this.options.taskId,
        'get',
        {},
        true,
        function (data, textStatus, jqXHR) {
          if (app.isOK(data) && fn) {
            fn(data.mileStones);
          }
        }
      );
    },
    /**获取历史记录 */
    getHistoryTasks: function (fn) {
      $this = this;
      $this.ajaxPost(
        app.base + '/bpm/histasks/' + $this.options.taskId,
        'get',
        {},
        true,
        function (data, textStatus, jqXHR) {
          if (app.isOK(data) && fn) {
            fn(data.hisTasks);
          }
        }
      );
    },
    postFormIds: function (formIdArr, opinionFormId) {
      var postFlag = false;
      $.ajax({
        type: 'post',
        async: false,
        contentType: 'application/json',
        dataType: 'json',
        cache: false,
        url: app.base + '/bpm/formids/update/'+$this.options.stepKey,
        data: JSON.stringify({ taskId: this.options.taskId, formIds: formIdArr, opinionFormId: opinionFormId}),
        success: function (data, textStatus, jqXHR) {
          if (app.isOK(data)) {
            postFlag = true;
            return;
          }
        }
      });
      return postFlag;
    },
    saveOpinion: function(opinionContent) {
      $this = this;
      var postFlag = false;
      $this.ajaxPost(
        app.base + '/bpm/opinion/save/' + $this.options.stepKey,
        'post',
        {taskId: this.options.taskId, opinion: opinionContent},
        false,
        function (data, textStatus, jqXHR) {
          if (app.isOK(data)) {
            postFlag = true;
          }
        }
      );
      return postFlag;
    },
    submitHandleExt: function(formIdArr, opinionFormId, opinionContent, stepVarsJson, fn) {
      $this = this;
      var nextAssignee, formIdArr = [];
      $this.options.message = $('select[name="opinionId"]').val();
      var flag = true;

      $this.ajaxPost(app.base + '/bpm/manualcommityn/'+$this.options.stepKey,
        'post',
        JSON.stringify({ stepKey: $this.options.stepKey, taskId: $this.options.taskId }),
        false,
        function (data, textStatus, jqXHR) {
          if (data) {
            $this.ajaxPost(app.base + '/bpm/nextstep/candidates',
              'post',
              JSON.stringify({ stepKey: $this.options.stepKey, taskId: $this.options.taskId, message: $this.options.message }),
              false,
              function (data, textStatus, jqXHR) {
                
                $this.initCandidatesSelModal();
                
                var candidatesSelectModal = $('#candidates-select-modal');
                candidatesSelectModal.find('.portlet-body').html(Handlebars.compile($('#candidates-page-template').html())({ 'content': data.payload.stepCandidates }));
                candidatesSelectModal.modal('show');
              }
            );
          } else {
            flag = $this.commitExt(formIdArr, opinionFormId, opinionContent, false, fn, stepVarsJson);
          }
      });
    },
    refuseHandle: function(formIdArr, opinionFormId, opinionContent, fn) {
      $this = this;
      var nextAssignee, formIdArr = [];
      $this.options.message = $('select[name="opinionId"]').val();
      var flag = true;

      $this.ajaxPost(app.base + '/bpm/refuse/' + $this.options.stepKey,
        'post',
        JSON.stringify({ flowKey: $this.options.flowKey, stepKey: $this.options.stepKey, taskId: $this.options.taskId, formIds: formIdArr, message: $this.options.message, nextAssignee: '', opinionFormId: opinionFormId, opinion: opinionContent}),
        false,
        function (data, textStatus, jqXHR) {
          if (fn) {
            fn(data);
			return;
          }
          if (app.isOK(data)) {
            app.alertOK('提交成功.');
            window.location.href = app.base + '/index.html';
          } else {
            app.alertError('提交失败.');
          }
      });
    },
    commitExt: function(formIdArr, opinionFormId, opinionContent, isAsync, fn, stepVarsJson) {
      $this = this;
      var flag = true;
      var comment = $('textarea[name="opinionNote"]').val();
      $.ajax({
        type: 'post',
        async: isAsync == null ? true:isAsync,
        contentType: 'application/json',
        dataType: 'json',
        cache: false,
        url: app.base + '/bpm/complete',
        data: JSON.stringify({ flowKey: $this.options.flowKey, stepKey: $this.options.stepKey, taskId: $this.options.taskId, formIds: formIdArr, message: $this.options.message, comment: comment, nextAssignee: '', opinionFormId: opinionFormId, opinion: opinionContent, stepVarsJson: stepVarsJson}),
        success: function (data, textStatus, jqXHR) {
          if (fn) {
            fn(data);
            return;
          }
          if (app.isOK(data)) {
            app.alertOK('提交成功.');
          } else {
            app.alertError('提交失败.');
            flag = false;
          }
        },
        error: function () {
          if (fn) {
            fn();
            return;
          }
          app.alertError('提交失败.');
          flag = false;
        }
      });
      
      return flag;
    },
    initCandidatesSelModal: function(fn) {
      $this = this;
      var candidatesSelectModalHtml = '<div id="candidates-select-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-full"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button><h4 class="modal-title">选择办理人</h4></div><div class="modal-body"><div class="portlet box blue"><div class="portlet-title"><div class="caption"><i class="fa fa-list"></i> 办理人员列表 </div></div><div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-template-id="candidates-page-template"></div></div></div><div class="modal-footer"><button type="button" class="btn btn-outline dark ok" disabled>确认</button><button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button></div></div></div></div>';
      
      var candidatesSelectModalPageTplHtml = '<script type="text/x-handlebars-template" id="candidates-page-template"><div class="table-scrollable"><table class="table table-striped table-bordered table-hover"><thead><tr><th> # </th><th> 姓名 </th><th> 当前任务数 </th><th> 状态 </th></tr></thead><tbody>{{#each content}}<tr><td data-id="selectId"> <input type="radio" name="loginName" value="{{loginName}}"> </td><td data-name="realName">{{realName}}</td><td data-name="haveTaskCount">{{haveTaskCount}}</td><td data-name="status">{{#if (eq status \'NORMAL\')}}正常{{/if}}{{#if (eq status \'INVALID\')}}无效{{/if}}{{#if (eq status \'LOCKED\')}}锁定{{/if}}{{#if (eq status \'UNLOCK\')}}解锁{{/if}}</td></tr>{{/each}}</tbody></table></div></script>';
      
      if ($('#candidates-select-modal').length <= 0) {
        $('body').append(candidatesSelectModalHtml);
      }
      
      if ($('#candidates-page-template').length <= 0) {
        $('body').append(candidatesSelectModalPageTplHtml);
      }
      
      var candidatesSelectModal = $('#candidates-select-modal');

      candidatesSelectModal.on('show.bs.modal', function (event) {
        $("button.ok", candidatesSelectModal).attr("disabled", true);
      });
      candidatesSelectModal.delegate('input[type="radio"][name="loginName"]', 'click', function () {
        nextAssignee = $(this).val();
        $("button.ok", candidatesSelectModal).removeAttr("disabled");
      });
      candidatesSelectModal.delegate('button.ok', 'click', function () {
        $this.commitExt(null, null, null, null, fn);
        candidatesSelectModal.modal('hide');
      });
    },
    initCandidatesSelModalExt: function(processUrl) {
      $this = this;
      var candidatesSelectModalHtml = '<div id="candidates-select-modal-ext" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-full"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button><h4 class="modal-title">选择办理人</h4></div><div class="modal-body"><div class="portlet box blue"><div class="portlet-title"><div class="caption"><i class="fa fa-list"></i> 办理人员列表 </div></div><div class="portlet-body pagination-container" data-page-first-store="first-store" data-page-template-id="candidates-page-template"></div></div></div><div class="modal-footer"><button type="button" class="btn btn-outline dark ok" disabled>确认</button><button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button></div></div></div></div>';
      
      var candidatesSelectModalPageTplHtml = '<script type="text/x-handlebars-template" id="candidates-page-template-ext"><div class="table-scrollable"><table class="table table-striped table-bordered table-hover"><thead><tr><th> # </th><th> 姓名 </th><th> 当前任务数 </th><th> 状态 </th></tr></thead><tbody>{{#each content}}<tr><td data-id="selectId"> <input type="radio" name="loginName" value="{{loginName}}"> </td><td data-name="realName">{{realName}}</td><td data-name="haveTaskCount">{{haveTaskCount}}</td><td data-name="status">{{#if (eq status \'NORMAL\')}}正常{{/if}}{{#if (eq status \'INVALID\')}}无效{{/if}}{{#if (eq status \'LOCKED\')}}锁定{{/if}}{{#if (eq status \'UNLOCK\')}}解锁{{/if}}</td></tr>{{/each}}</tbody></table></div></script>';
      
      if ($('#candidates-select-modal-ext').length <= 0) {
        $('body').append(candidatesSelectModalHtml);
      }
      
      if ($('#candidates-page-template-ext').length <= 0) {
        $('body').append(candidatesSelectModalPageTplHtml);
      }
      
      var candidatesSelectModal = $('#candidates-select-modal-ext');

      candidatesSelectModal.on('show.bs.modal', function (event) {
        $("button.ok", candidatesSelectModal).attr("disabled", true);
        $this.ajaxPost(
          app.base + '/bpm/handlers/'+ $this.options.flowKey + '/' + $this.options.taskId,
          'get',
          JSON.stringify({ }),
          true,
          function (data, textStatus, jqXHR) {
            candidatesSelectModal.find('.portlet-body').html(Handlebars.compile($('#candidates-page-template-ext').html())({ 'content': data.payload.stepCandidates }));
          }
        );
      });
      candidatesSelectModal.delegate('input[type="radio"][name="loginName"]', 'click', function () {
        nextAssignee = $(this).val();
        $("button.ok", candidatesSelectModal).removeAttr("disabled");
      });
      candidatesSelectModal.delegate('button.ok', 'click', function () {
        // $this.commitExt();
        $this.ajaxPost(
          app.base + processUrl,
          'post',
          {assignee: nextAssignee},
          true,
          function (data, textStatus, jqXHR) {
            if(app.isOK(data)) {
              App.stopPageLoading();
              app.alertOK('提交成功.');
              window.location.href = app.base + '/index';
              candidatesSelectModal.modal('hide');
            }else{
              App.stopPageLoading();
              app.alertError('提交失败.');
            }
          },
          'application/x-www-form-urlencoded'
        );
      });
    },
    showCandidatesSelModalExt: function () {
      $('#candidates-select-modal-ext').modal('show');
    },
    /**加签 */
    issue: function() {
      $this =this;
      $this.initCandidatesSelModalExt('/bpm/issue/' + $this.options.taskId);
      $this.showCandidatesSelModalExt();
    },
    /**前加签 */
    beforeissue: function() {
      $this =this;
      $this.initCandidatesSelModalExt('/bpm/beforeIssue/' + $this.options.stepKey + '/' + $this.options.taskId);
      $this.showCandidatesSelModalExt();
    },
    /**后加签 */
    afterissue: function() {
      $this =this;
      $this.initCandidatesSelModalExt('/bpm/afterIssue/' + $this.options.stepKey + '/' + $this.options.taskId);
      $this.showCandidatesSelModalExt();
    },
    /**转办 */
    transfertask: function() {
      $this =this;
      $this.initCandidatesSelModalExt('/bpm/transferTask/' + $this.options.stepKey + '/' + $this.options.taskId);
      $this.showCandidatesSelModalExt();
    },
    /**填充流程审批意见**/
    fillMessage: function(name) {
      if ($('select[name="' + name + '"]').length > 0) {
        $('select[name="' + name + '"]').html('');
        var html = '<option value="">请选择...</option>';
        if (this.options.message.length > 0) {
          $(JSON.stringify(this.options.message).substring(1, this.options.message.length - 1).split(',')).each(function (index, item) {
            html += '<option value="' + item + '">' + item + '</option>';
          });
        }
        $('select[name="' + name + '"]').html(html);
      }
    },
    /**
     * 回退
     */
    rollback: function() {
      $this = this;
      var rollbackFormHtml = '<div class="modal fade" id="rollback_form" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">退回意见</h4></div><div class="modal-body"><form action="${base}/bpm/rollback" method="POST"><div class="row"><div class="col-md-12"><div class="form-group"><div class="input-group"><span class="input-group-addon">意见</span><textarea name="comment" class="form-control" rows="5"></textarea></div></div></div></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success ok">提交</button><button type="button" class="btn btn-default" data-dismiss="modal">取消</button></div></div></div></div>';

      if ($('#rollback_form').length <= 0) {
        $('body').append(rollbackFormHtml);
      }

      var rollbackForm = $('#rollback_form');

      rollbackForm.modal('show');
      $('#rollback_form textarea').val('');

      $('#rollback_form .ok').on('click', function () {

        var comment = $.trim(rollbackForm.find('textarea').val());
        if (!comment) {
          app.alertError("请填写必填信息!");
          return;
        }
        $.ajax({
          type: 'post',
          async: true,
          dataType: 'json',
          cache: false,
          url: app.base + '/bpm/rollback/' + $this.options.taskId,
          data: { comment: comment },
          success: function (data, textStatus, jqXHR) {
            if (app.isOK(data)) {
              App.stopPageLoading();
              app.alertOK('提交成功.');
              window.location.href = app.base + '/index';
            } else {
              App.stopPageLoading();
              app.alertError('提交失败.');
            }
          },
          error: function () {
            app.alertError('提交失败.');
          }
        });
      });
    },
    /**
     * 回退(业务自定义回退展示)
     * comment 回退意见
     * fn 回调方法
     */
    rollbackNoModal: function (comment,fn) {
      $this = this;
      if (!comment) {
        app.alertError("请填写退回意见!");
        return;
      }
      $.ajax({
        type: 'post',
        async: true,
        dataType: 'json',
        cache: false,
        url: app.base + '/bpm/rollback/' + this.options.stepKey + '/' + $this.options.taskId,
        data: { comment: comment },
        success: function (data, textStatus, jqXHR) {
          if (fn) {
            fn(data);
          } else {
            if (app.isOK(data)) {
              App.stopPageLoading();
              app.alertOK('退回成功.');
              window.location.href = app.base + '/index';
            } else {
              App.stopPageLoading();
              app.alertError('退回失败.');
            }
          }
        },
        error: function () {
          if (fn) {
            fn('');
          } else {
            app.alertError('退回失败.');
          }
        }
      });
    },
    /**获取回退列表 格式：[{stepKey:"rect2",stepName:"简要录入",taskId:"100028"}...] */
    getRollbackList: function() {
      $this = this;
      var rollbackList = [];
      $this.ajaxPost(
        app.base + '/bpm/rollbacklist/' + $this.options.taskId,
        'get',
        {},
        false,
        function (data, textStatus, jqXHR) {
          rollbackList = data.stepInfos;
        }
      );
      return rollbackList;
    },
    /**
     * 回退指定节点
     * comment 回退意见
     * taskId 回退节点-历史任务id
     */
    rollbackToWithTarget: function(comment, taskId,fn) {
      $this = this;
      $.ajax({
        type: 'post',
        async: true,
        dataType: 'json',
        cache: false,
        url: app.base + '/bpm/rollbackwithcomment/' + this.options.stepKey + '/' + taskId,
        data: { comment: comment, currTaskId: $this.options.taskId},
        success: function (data, textStatus, jqXHR) {
		  if(fn){
			  fn(data);
		  }else{
			  if (app.isOK(data)) {
				App.stopPageLoading();
				app.alertOK('提交成功.');
				window.location.href = app.base + '/index';
			  } else {
				App.stopPageLoading();
				app.alertError('提交失败.');
			  }
		  }
        },
        error: function () {
			if(fn){
				fn('');
			}else{
				app.alertError('提交失败.');
			}
        }
      });
    },
    /**回退指定节点 */
    rollbackTo: function() {
      $this = this;
      $this.initRollbackToModal();
      var rollbackToModal = $('#rollbackto_form');
      rollbackToModal.modal('show');
    },
    /**初始化回退至指定节点modal */
    initRollbackToModal: function() {
      $this = this;
      var rollbackFormHtml = '<div class="modal fade" id="rollbackto_form" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">退回意见</h4></div><div class="modal-body"><form action="/bpm/rollback" method="POST"><div class="row"><div class="col-md-12"><div class="form-group"><div class="input-group"><span class="input-group-addon">退回节点</span><select id="rollbackTaskId" name="rollbackTaskId" class="form-control wordbooks" data-selectloader-val="" required> <option value="">请选择...</option> </select> </div></div><div class="form-group"> <div class="input-group"><span class="input-group-addon">退回意见</span><input type="hidden" name="taskId" value="${taskId}"><textarea name="comment" class="form-control" rows="5"></textarea> </div></div></div></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success ok">提交</button><button type="button" class="btn btn-default" data-dismiss="modal">取消</button></div></div></div></div>';

      if ($('#rollbackto_form').length <= 0) {
        $('body').append(rollbackFormHtml);
      }

      var rollbackToModal = $('#rollbackto_form');
      
      rollbackToModal.on('hidden.bs.modal', function (event) {
        $('textarea', rollbackToModal).val('');
      });

      rollbackToModal.on('show.bs.modal', function (event) {
        $this.ajaxPost(
          app.base + '/bpm/rollbacklist/' + $this.options.taskId,
          'get',
          {},
          true,
          function (data, textStatus, jqXHR) {
            var html = '<option value="">请选择...</option>';
            if (data) {
              $.each(data.payload, function (index, item) {
                html += '<option value="' + item.split('_')[0] + '">' + item.split('_')[1] + '</option>';
              });
            }
            rollbackToModal.find('#rollbackTaskId').html(html);
          }
        );
      });
      rollbackToModal.delegate('button.ok', 'click', function () {
        var taskId = $.trim(rollbackToModal.find('#rollbackTaskId').val());
        if(!taskId) {
          app.alertError("请选择退回节点!");
          return;
        }
        var comment = $.trim(rollbackToModal.find('textarea').val());
        rollbackToWithTarget(comment, taskId);
      });
    },
    cancelTask: function (opinionContent, fn) {
      $this = this;
      $this.ajaxPost(
        app.base + '/bpm/cancel/' + $this.options.stepKey,
        'post',
        JSON.stringify({flowKey: $this.options.flowKey, stepKey: $this.options.stepKey, taskId: $this.options.taskId, opinion: opinionContent}),
        true,
        function (data, textStatus, jqXHR) {
          if (fn) {
            fn(data);
          } else {
            if (app.isOK(data)) {
              App.stopPageLoading();
              app.alertOK('取消成功.');
              window.location.href = app.base + '/index';
            } else {
              App.stopPageLoading();
              app.alertError('取消失败.');
            }
          }
        }
      );
    },
    activeTask: function (opinionContent, fn) {
      $this = this;
      $this.ajaxPost(
        app.base + '/bpm/active/' + $this.options.stepKey,
        'post',
        JSON.stringify({flowKey: $this.options.flowKey, stepKey: $this.options.stepKey, taskId: $this.options.taskId, opinion: opinionContent}),
        true,
        function (data, textStatus, jqXHR) {
          if (fn) {
            fn(data);
          } else {
            if (app.isOK(data)) {
              App.stopPageLoading();
              app.alertOK('激活成功.');
              window.location.href = app.base + '/index';
            } else {
              App.stopPageLoading();
              app.alertError('激活失败.');
            }
          }
        }
      );
    },
    /**撤销 */
    retract:function() {
      $this = this;
      $this.ajaxPost(
        app.base + '/bpm/retract/' + $this.options.stepKey + '/' + $this.options.taskId,
        'post',
        {},
        true,
        function (data, textStatus, jqXHR) {
          if (app.isOK(data)) {
            App.stopPageLoading();
            app.alertOK('撤销成功.');
            window.location.href = app.base + '/index';
          } else {
            App.stopPageLoading();
            app.alertError('撤销失败.');
          }
      });
    },
    ajaxPost: function(url, type, data, async, fn, contentType) {
      $.ajax({
        type: type,
        async: async,
        contentType: contentType != null ? contentType:'application/json',
        dataType: 'json',
        cache: false,
        url: url,
        data: data,
        success: function (data, textStatus, jqXHR) {
          if (fn) {
            fn(data, textStatus, jqXHR);
          }
        },
        error: function () {
          app.alertError('未知异常.');
        }
      });
    }
  }

}) ((window.jQuery));