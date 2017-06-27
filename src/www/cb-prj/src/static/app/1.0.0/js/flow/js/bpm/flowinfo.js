+ function ($, app) {
  "use strict ";
  /**
   * 修改流程信息
   */
  var eidtFlowInfo = function () {
    var editModal = $('#flow-info-editmodal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var flowId = $(event.relatedTarget).data('viewFlowId');
      var flowName = $(event.relatedTarget).data('viewFlowName');
      if (!flowId) return;
      
      $("strong", editModal).html(flowName);

      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/workflow/flows/info/' + flowId, 'json');
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
  
  var removeFlowInfo = function() {
  	
  	var table = $('#flowstable');
  	var listCheck = function() {
  		var mainPage = $('.main-page');
  		mainPage.delegate('.pagination-container input.group-checkable', 'change', function(){
  			var set = $('#flowstable').find('tbody > tr > td:nth-child(1) input[type="checkbox"]');
  			var checked = $(this).prop("checked");
  			$(set).each(function() {
  				$(this).prop("checked", checked);
  			});
  			$.uniform.update(set);
  		});
  	};
  	
  	var getSelectedRows = function() {
  		var rows = [];
  		$('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', $('#flowstable')).each(function() {
  			rows.push($(this).val());
  		});
  		return rows;
  	};
  	
  	$(".main-page").delegate('.remove', 'click', function(){
  		
  		var selectedRows = getSelectedRows();
  		if(selectedRows.length <= 0){
  			app.alertOK('未选择流程信息.');
  			return;
  		}
  		var tmsg = "确定删除选中的流程信息?";
  		bootbox.confirm({title: '提示', message: tmsg, callback: function (e) {
  			if (e) {
  				App.startPageLoading({ animate: true });
  				var jqxhr = app.$post(app.base+'/bpm/flowremove/batch', {ids: selectedRows.join(',')}, 'json');
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
  	listCheck();
  };
  
  var stepConfig = function() {
  	var stepListModal = $('#step-list-modal');
  	var stepListTemplate = $(stepListModal.data('pageTemplateId'));
  	stepListModal.on('hidden.bs.modal', function () {
      
    });
  	var flowKey, flowName;
  	stepListModal.on('show.bs.modal', function (event) {
      flowKey = $(event.relatedTarget).data('flowKey');
      flowName = $(event.relatedTarget).data('flowName');
      
      $("strong", stepListModal).html(flowName+"-环节列表");

      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/flowengine/'+ flowKey +'/steps', 'json');
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
      
//      var templateData = {
//    		'content':[{stepKey: 'stepEg', stepName:'测试环节', stepType:'用户任务'}]
//      };
      stepListModal.find('.modal-body').html(Handlebars.compile(stepListTemplate.html())(templateData));
    });
  	
  	var stepConfigModal = $('#step-config-modal');
  	var stepConfigForm = $("form", stepConfigModal);
    var validator = app.bindFormValidation(stepConfigForm);
    var stepKey, stepName, stepDesc;
    stepConfigModal.on('hidden.bs.modal', function () {
    	stepConfigForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    stepConfigModal.on('show.bs.modal', function (event) {
      stepKey = $(event.relatedTarget).data('stepKey');
      stepName = $(event.relatedTarget).data('stepName');
      stepDesc = $(event.relatedTarget).data('stepDesc');
      if (!stepKey) return;
      
      $("strong", stepConfigModal).html(stepName+"-配置");
      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/workflow/stepconfig/view?stepKey='+stepKey+'&flowKey='+flowKey, 'json');
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
        console.log(stepKey, stepName, data);
        stepConfigForm.deserializeObject(data);
      });
    });
    
    $('.ok', stepConfigModal).click(function () {
      if (stepConfigForm.valid()) {
        App.startPageLoading({ animate: true });
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
    
    var relviewHandle = function() {
    	var relviewModal = $('#relview-sel-modal');
    	var relviewTemplate = $(relviewModal.data('pageTemplateId'));
    	var initRelviewSelLoader = function(object) {
    		$(".relviewsel", object).each(function(){
    			$(this).empty().append('<option value="">请选择视图...</option>').selectloader({
    				relview: relview
    			});
    		});
    		$(".relviewtype", object).each(function(){
    			$(this).empty().append('<option value="">请选择视图类型...</option>').selectloader({
    				relviewtype: relviewtype
    			});
    		});
    		$('select[data-text-input]').change(function() {
    			var texts = [];
    			$(this).find("option:selected").each(function(){
    				texts.push($(this).data('textVal'));
    			});
    			$($(this).data('textInput'), $(this).parent().parent()).val(texts);
    		});
    	};
    	
    	var initRelviewEvent = function(object) {
    		$('.fa-minus', object).unbind('click').click(function() {
    			removeTr($(object), $(this).parents("tr").index());
    		});
    	};
    	
    	relviewModal.on('hidden.bs.modal', function () {
    		
    	});
    	relviewModal.on('show.bs.modal', function (event) {
    		var templateData = {
    				'content': eval($('input[name=relView]', stepConfigModal).val())
    		};
    		relviewModal.find('.modal-body').html(Handlebars.compile(relviewTemplate.html())(templateData));
    		
    		$('.fa-plus', relviewModal).unbind('click').click(function() {
    			addTr($('table', relviewModal), $($(relviewModal.data('pageTrTemplateId'))), function(newTr, table) {
    				initRelviewSelLoader(newTr);
    				initRelviewEvent(table);
    			});
    		});
    		
    		initRelviewSelLoader(relviewModal);
    		initRelviewEvent($('table', relviewModal));
    		
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
    			for(var i=0; i<$('#relview-sel-table tr').length; i++) {
    				relview = new Object();
    				relview.relviewTname = $('input[name=relviewTname]', $("#relview-sel-table").find("tr").eq(i)).val();
    				relview.relviewTcode = $('select[name=relviewTcode]', $("#relview-sel-table").find("tr").eq(i)).val();
    				relview.relviewName = $('input[name=relviewName]', $("#relview-sel-table").find("tr").eq(i)).val();
    				relview.relviewCode = $('select[name=relviewCode]', $("#relview-sel-table").find("tr").eq(i)).val();
    				relview.dispOrder = $('input[name=dispOrder]', $("#relview-sel-table").find("tr").eq(i)).val();
    				relviewArr.push(relview);
    				relviewName += relview.relviewName + ';';
    			}
    			$('input[name=relView]', stepConfigModal).val(JSON.stringify(relviewArr));
    			$('input[name=relViewDis]', stepConfigModal).val(relviewName);
    			relviewModal.modal('hide');
    		});
    	});
    };
    
    var plugHandle = function() {
    	var plugModal = $('#plug-sel-modal');
    	var plugTemplate = $(plugModal.data('pageTemplateId'));
    	var initPlugSelLoader = function(object) {
    		$(".triggerStage", object).each(function(){
    			$(this).empty().append('<option value="">请选择触发阶段...</option>').selectloader({
    				triggerStage: triggerStage
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
    		console.log(plugModal.width);
//    		plugModal.addCss('top');
    		var templateData = {
    				'content': eval($('input[name=plugJson]', stepConfigModal).val())
    		};
    		plugModal.find('.modal-body').html(Handlebars.compile(plugTemplate.html())(templateData));
    		
    		$('.fa-plus', plugModal).unbind('click').click(function() {
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
    					|| $('input[name=plugName]', $("#plug-sel-table").find("tr").eq(i)).val() == '') {
    					app.alertError("存在待完善内容!");
    					return;
    				}
    			}
    			
    			var plugArr = [];
    			var plug;
    			var plugName = '';
    			for(var i=0; i<$('#plug-sel-table tr').length; i++) {
    				plug = new Object();
    				plug.triggerStage = $('select[name=triggerStage]', $("#plug-sel-table").find("tr").eq(i)).val();
    				plug.plugName = $('input[name=plugName]', $("#plug-sel-table").find("tr").eq(i)).val();
    				plugArr.push(plug);
    				plugName += plug.plugName + ';';
    			}
    			$('input[name=plugjson]', stepConfigModal).val(JSON.stringify(plugArr));
    			$('textarea[name=plugjsonDis]', stepConfigModal).val(plugName);
    			plugModal.modal('hide');
    		});
    	});
    };
    
  	var addTr = function(table, template, callback) {
  		if($('tr:eq(0)', table).attr('class').indexOf('no-data') != -1) {
  			$('tr:eq(0)', table).remove();
  		}
  		var newTr = Handlebars.compile(template.html());
  		table.find('tbody').append(newTr);
  		if(callback){
  			callback(newTr, table);
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

    eidtFlowInfo();
    removeFlowInfo();
    stepConfig();
  };
  init();
} (window.jQuery, window.app);
