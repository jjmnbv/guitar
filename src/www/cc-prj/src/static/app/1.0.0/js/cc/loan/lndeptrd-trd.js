$(function () {
  var $ = window.jQuery;
  var app = window.app;
  $('#trChl').selectloader({trChl: app.dicts.dict_3028});
  app.registerTextHelper('trChl', app.dicts.dict_3028, 'code', 'name');
  
  $('#cuCertTyp').selectloader({'certTypList': app.dicts.dict_17});
  app.registerTextHelper('cuCertTyp', app.dicts.dict_17, 'code', 'name');
  //收付方式
  $('#rpTyp').selectloader({'rpTypList': app.dicts.dict_3025});
  app.registerTextHelper('rpTyp', app.dicts.dict_3025, 'code', 'name');
  //币种
  $('#curTyp').selectloader({'curTypList': app.dict_cfg.dict_cfg_CurTyp});
  app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */
	  form.find('.trChl').selectloader({trChl:app.dicts.dict_3028});
	  form.find('.rpTyp').selectloader({rpTypList:app.dicts.dict_3025});
	  form.find('.curTyp').selectloader({curTypList: app.curTypList});
	  form.find('.cuCertTyp').selectloader({certTypList: app.dicts.dict_17});
	  app.bindFormValidation(form);
	  
	  if(operatingMode=='add') {
		  validatorNotExists(form);
      }else{
    	  form.find('[name="athNo"]').prop('readonly', true)
      }
	  
    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });
  };
  


  var athNo = GetQueryString("athNo");
  $('input[name=athNo]').prop('readonly',true);
  /**
   * 获取交易记录并填充模态框
   */
  if(operatH =='edit'){
	  $('.form-group-sel .selBox').removeClass('setTimeGray');
	  app.$getJSON(app.LNDEPTRDINF_VIEW+"/"+athNo).done(function(data) {
	    if(app.isOK(data)){
	      $('#accessBorrowForm').deserializeObject(data)
	      $("input[name='trAmt1']").val(app.formatCurrencyM($("input[name='trAmt']").val(),2));
	      $("#cuCertTyp").attr("disabled", true);
		 $('select').selectpicker('refresh');
	    }
	  }); 
  }else if(operatH =='view'){
	  $('.form-group-sel .selBox').addClass('setTimeGray');
	  app.$getJSON(app.LNDEPTRDINF_VIEW+"/"+athNo).done(function(data) {
		    if(app.isOK(data)){
		      $('#accessBorrowForm').deserializeObject(data);
		      $('input').attr('readonly',true);
		      $("input[name='laUpDt']").attr("disabled", "disabled");
		      $(".selBox").find("button").attr("disabled", true);
		      $("input[name='trAmt1']").val(app.formatCurrencyM($("input[name='trAmt']").val(),2));
		      $('select').attr('disabled',true);
		      $('#trade ,#save').hide();
		      $("#cancel").text("返回");
			 $('select').selectpicker('refresh');
		    }
		  }); 
  }
	/**
	 *zj自定义校验输入的百分比0-100%之间
	 */
	$.validator.addMethod('jinE', function(value, element) {
		var val = app.unformatMoney(value);
		return this.optional(element) || val >0 ;
	}, '请输入大于0的值');

	/**
	 * 金额格式化
	 */
	$('#trAmt1').on('change',function () {
		var $this = $(this);
		if($this.val().indexOf(',') != -1){
			var Mo = app.unformatMoney($this.val());
			$this.val(app.formatCurrencyM(Mo,2));
			$('#trAmt').val(app.unformatMoney($this.val()));
		}else{
			$this.val(app.formatCurrencyM($this.val(),2));
			$('#trAmt').val(app.unformatMoney($this.val()));
		}

	});

	/**
	 * 交易
	 */
	$('#trade').click(function(){
		var $this = $(this);
		$("select[name=cuCertTyp]").attr("disabled",false);
		var param = $('#accessBorrowForm').serializeObject();
		var athNo=$('#athNo').val();
		if(athNo==null || athNo=='' || athNo=='undifined'){
			athNo = param.athNo;
		}
		if($('#accessBorrowForm').valid()) {
			$this.prop('disabled', true);
			app.$post(app.LNDEPTRDINF_UPDATE, param).done(function (data) {
				if (app.isOK(data)) {
					accessMoney(athNo);
				} else {
					var errors = data.errors.join(',');
					app.alertError(errors || '提交失败！');
					$this.prop('disabled', false);
				}
			});
		}
	});

	/**
	 * 编辑保存
	 */
	$('#save').click(function(){
		var $this = $(this);
		$("select[name=cuCertTyp]").attr("disabled",false);
		/*var trAmt=$('#trAmt').val();
		 var holTyp=$(".rpTyp option:selected").val();
		 if(trAmt==""||holTyp==""){
		 app.alertError("请选择收支类型和金额")
		 }else{
		 var param = $('#accessBorrowForm').serializeObject();
		 app.$post(app.LNDEPTRDINF_UPDATE,param).done(function(data) {
		 if(app.isOK(data)){
		 app.alertOK('保存成功！');
		 }
		 });
		 }*/
		$("#cuCertTyp").attr("disabled", false);
		var saveForm =$('#accessBorrowForm');
		if($('#accessBorrowForm').valid()){
			$this.prop('disabled',true);
			App.startPageLoading({ animate: true });
			var jqxhr = app.$submit(saveForm, 'json');
			if (!jqxhr) return false;
			jqxhr.done(function (data) {
				App.stopPageLoading();
				if (app.isOK(data)) {
					app.alertOK('提交成功!');
					$this.prop('disabled',false);
					$("select[name=cuCertTyp]").attr("disabled",true);
				}else{
					$("#cuCertTyp").attr("disabled", true);
					app.alertError(data.errors.join('\n'));
					$this.prop('disabled',false);
				}
			});
			return false;
		}
	});

	/**
	 * 取消按钮
	 */
	$('#cancel').click(function(){
		window.location.href="lndeptrdinf-index.html";
	})
});


function accessMoney(athNo){
	app.$post(app.LNDEPTRDINF_ACCESSMONEY+"/"+athNo).done(function(data) {
        if (app.isOK(data)) {
        	  app.alertOK('提交成功！');
			 $this.prop('disabled',false);
        	  setTimeout(function(){
        		   $("#cuCertTyp").attr("disabled",true);
        		  window.location.href="lndeptrdinf-index.html";
        	  },1000);
        	  
        }else{
            var errors = data.errors.join(',')
            app.alertError(errors || '余额不足！');
			$this.prop('disabled',false);

        }
		 });
/*	app.$post(app.LNDEPTRDINF_ACCESSMONEY + athNo, athNo).done(function (data) {
        if (app.isOK(data)) {
            app.alertOK('提交成功！');
            modal.modal('hide');
            app.loadData();
        }else{
            var errors = data.errors.join(',')
            app.alertError(errors || '提交失败！');
            modal.modal('hide');
        }
    });*/
}