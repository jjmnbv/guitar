+ function($, app) {
	app.registerTextHelper('payOpt', app.payOpt, 'code', 'name');
	app.registerTextHelper('payCalBs', app.payCalBs, 'code', 'name');
	app.registerTextHelper('payTyp', app.payTyp, 'code', 'name');
	app.registerTextHelper('payPlTyp', app.payPlTyp, 'code', 'name');
}(window.jQuery, window.app);

$(function(){
	var $ = window.jQuery;
	var app = window.app;
	var operatingMode;
	  $('.inCalTyp').selectloader({'inCalTyp': app.inCalTyp});
	  $('.perProInd').selectloader({'perProInd': app.perProInd});
	  $('.payPlTyp').selectloader({'payPlTyp': app.payPlTyp});
	  $('.payPlNm').selectloader({'payPlNm': app.payPlNm});
	  $('.payTyp').selectloader({'payTyp': app.payTyp});
	  $('.paySts').selectloader({'paySts': app.paySts});

	var payCde=GetQueryString("payCde");
	console.log(payCde);
	$('#payCde1').val(payCde);
	$(".portlet.box	").eq(0).hide();

	$('.main-page').pagination({
		'first-store':app.firstStore
	});
  
	/**
	 *校验最大期限是否小于最小期限
	 */
  $('body').on('change','#mintMonth',function(){
        if($(this).valid()){
           $(this).addClass("ltTo ");
        }
    });
    $('body').on('change','#maxplMoth',function(){
        if($(this).valid()){
            $(this).addClass("gtTo ");
        }
    });
	app.context.formHtml = $('#form-template').html();
	app.context.formInit = function (form) {
	    form.find('.payTyp').selectloader({'payTyp': app.payTyp});
	    form.find('.payOpt').selectloader({'payOptList': app.payOpt});
	    form.find('.payCalBs').selectloader({'payCalBsList': app.payCalBs});
	    form.find('#payPlTyp').selectloader({'payPlTypList': app.payPlTyp});
	    
	    $('[name=prPct1]').on('change',function () {
	         var $this = $(this);
	         if($this.val().indexOf('%') != -1){
	           var valNew = app.unformatPercent($this.val());
	           $this.val(app.formatPercent(valNew*100));
	           $('[name=prPct]').val(app.unformatPercent($this.val()));
	         }else{
	           $this.val(app.formatPercent($this.val()));
	           $('[name=prPct]').val(app.unformatPercent($this.val()));
	         }
	      });
	    
		app.bindFormValidation(form);
	    if(operatingMode =='add'){
	    	validatorNotExists(form);
	    }
	};

	$('#btn1').click(function(){
		var url = $('#parPayCfgEditFrom').attr('action');
		var data = $('#parPayCfgEditFrom').serializeObject();
		if($('#parPayCfgEditFrom').valid()){
		  app.$post(url, data).done(function (data) {
			if (app.isOK(data)) {
			  app.alertOK('提交成功!');
			}else{
				app.alertError(data.errors.join(','));
			}
		  });
		}
	  });
	function check(){
		if($("#payt").val()=='DEBJ'){
			$(".payOpt").val('LB');
			$(".payCalBs").val('SY');
		}else if($("#payt").val()=='DBDX'){
			$(".payOpt").val('LB');
			$(".payCalBs").val('FK');
		}else if($("#payt").val()=='DEBX'){
			$(".payOpt").val('LB');
			$(".payCalBs").val('SY');
		}else if($("#payt").val()=='AQFX'){
			$(".payOpt").val('LX');
			$(".payCalBs").val('SY');
		}else if($("#payt").val()=='LSBQ'){
			$(".payOpt").val('LX');
			$(".payCalBs").val('SY');
			$("[name=calPerNum]").val('1').attr('readonly',true);
		}
	    try{  $('#payt').get(0).disabled = true; }catch(e){};
	    try{  $('.payOpt').get(0).disabled = true; }catch(e){};
	    try{  $('.payCalBs').get(0).disabled = true; }catch(e){}
	}

	
	/**
	 *异步请求取值
	 */
	app.$getJSON(app.PARPAYCFG_VIEW+"/"+payCde ).done(function(data){
		if(app.isOK(data)){
			$('#parPayCfgEditFrom').deserializeObject(data);
			console.log(data);
			if(data.payTyp=='LSBQ'){
				$('#payPlNm').hide();
				$('#payPlTyp').hide();
			}else{
				$('#payPlNm').show();
				$('#payPlTyp').show();
			}
			/*新增页面、列表页面不提供配置时，编辑页面将不提供首期天数计算类型*/
			if(data.payPlNm==null || data.payPlTyp==null || data.fstPerCalTyp==null || data.fstPerCalTyp=='' ){
		    	 $("#fstPerCalTyp").hide();
		     }else{
		    	 $("#payPlNm").show();
				 $("#payPlTyp").show();
		     }
			
			$('#add-child').getModal({
				title: '新增还款方式配置明细表',
				body: app.context.formHtml, 
				showBefore: function (modal) {
					operatingMode = 'add'
					$("#parP").val(payCde);
					app.context.showBefore({
						modal: modal
					}, app, app.context.formInit);
					$("#payt").val(data.payTyp);
					check();
					if($("#payt").val()=='TXHK'){
						$('#payt,#payopt,.payCalBs').attr('disabled', false);
						$("#payt").val("");
						$("#payt option[value='BTJG']").remove();
						$("#payt option[value='QQDK']").remove();
						$("#payt option[value='ZYHK']").remove();
						$("#payt option[value='TXHK']").remove();
					}
					$("#payt").on('change',function(){
						var t=$("#payt").val();
						check();
					})
				},
				hideAfter: function (modal) {
					$('#payt,#payopt,.payCalBs').attr('disabled', false);
					modal.setBody(app.context.formHtml);
				}
			}, function (modal) {
				if($('#parpaycfgdtlForm').valid()){
				$('#payt,#payopt,.payCalBs').attr('disabled', false);
				var parpay=$("#parpaycfgdtlForm").serializeObject();
				var jqxhr = app.$post(app.PARPAYCFGDTL_CREATE ,parpay);
				if(!jqxhr)return false;
		        jqxhr.done(function (data) {
		        	app.$get(app.PARPAYCFGDTL_PRPCTNUM+"/"+payCde).done(function(data1){
		            if(data1>1){
		            	app.alertError("总还款本金比例不能大于100%");
		            	var subNo=$("input[name=subNo]").val();
		            	app.$post(app.PARPAYCFGDTL_REMOVE+ '?payCde'+'='+payCde+'&'+'subNo'+'='+subNo);
						modal.find('[data-modal-ok]').attr('disabled',false);
		            	return false;
	                }
	                app.alertOK("提交成功！");
					modal.find('[data-modal-ok]').attr('disabled',false);
	                modal.modal('hide');
	                app.loadData();
		        	});	
	             });
				}
				
			});
			
			/**
			 * 修改还款方式配置明细表
			 */
			$('#edit-child').getModal({
				title: '编辑还款方式配置明细表信息',
				body: app.context.formHtml,
				selector: function () {
					return !!$('[type=radio]:checked').length;
				},
				showBefore: function (modal) {
					operatingMode = 'edit';
					var id = $('[type=radio]:checked').data('id');
					var prPct = $('[type=radio]:checked').data('prpct');
					$('[name=prPct1]').val(app.formatPercent(parseFloat(prPct)*100));
					if (!id) return;
					check();
					$("[name=subNo]").attr('readonly',true);
					app.context.showBefore({
						url: app.PARPAYCFGDTL_VIEW,
						modal: modal,
						param: id
					}, app, app.context.formInit);
					if($("#payt").val()=='TXHK'){
						$("#payt").val("请选择...");
						$("#payt option[value='']").remove();
						$("#payt option[value='BTJG']").remove();
						$("#payt option[value='QQDK']").remove();
						$("#payt option[value='ZYHK']").remove();
						$("#payt option[value='TXHK']").remove();
					}
				},
			    showAfter: function (modal) {
		             $('.payTyp').attr('disabled', true);
		             $('.payOpt').attr('disabled', true);
		             $('.payCalBs').attr('disabled', true);
			        },
				hideAfter: function (modal) {
					 $('.payTyp').attr('disabled', false);
			         $('.payOpt').attr('disabled', false);
			         $('.payCalBs').attr('disabled', false);
			         $("[name=subNo]").removeAttr('readonly');
					 modal.setBody(app.context.formHtml);
				     $('#prPct').val('');
				}
			}, function (modal) {
		       var param = modal.find('form').serialize();
				if(modal.find('form').valid()){
					app.$post(app.PARPAYCFGDTL_UPDATE, param).done(function (data) {
						if (app.isOK(data)) {
							app.alertOK('提交成功');
							modal.find('[data-modal-ok]').attr('disabled',false);
							modal.modal('hide');
							app.loadData();

						}else{
							app.alertError('总本金比例不能大于100%！');
							modal.find('[data-modal-ok]').attr('disabled',false);
						}
					});
				}
			});
		}
      try{  $('#paytypl').get(0).disabled = true; }catch(e){}
		$('select').selectpicker('refresh');
	});

	        
	/**
	  *
	  *序号的唯一性 
	  * */
	 
	 var validatorNotExists = function (form) {
		     $("input[name='subNo']", form).rules("add", {
		    	 synchronousRemote: {
		         url: app.PARPAYCFGDTL_NOTEXISTS,
		         type: "POST",
		         dateType: "text",
		         data:{
		        	 subNo:function(){  return form.find('[name="subNo"]').val() },
		        	 payCde:function(){  return form.find('[name="payCde"]').val() }
		         }
		       },	
		       messages: {
		    	   synchronousRemote: "该还款方式序号已存在！"
		       },
		       onkeyup: false,
	           onfocusout: false
		     });
		  };

	/**
	 * 删除还款方式配置明细表
	 */

	$('#delete-child').getModal({
		text: '确定要删除该条还款方式配置明细表信息吗？',
		size: 'modal-sm',
		selector: function () {
			return !!$('[type=radio]:checked').length;
		}
	}, function (modal) {
		var id=$('[type=radio]:checked').data('id');
		app.context.submit({
			modal: modal,
			url: app.PARPAYCFGDTL_REMOVE+id,
			text: '删除成功',
			isEasyModal: true
		}, app);
	});
});
