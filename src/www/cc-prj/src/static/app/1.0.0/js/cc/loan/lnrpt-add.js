$(function () {
  var $ = window.jQuery;
  var app = window.app;
   $('#exec').hide();
   
   $('.payPatCd').selectloader({'payPatCd':app.dicts.dict_3044});
   $('.curTyp').selectloader({'curTyp':app.dict_cfg.dict_cfg_CurTyp});
   $('.advPayAmCd').selectloader({'advPayAmCd':app.dicts.dict_3046});
   $('.advInYn').selectloader({'advInYn':app.dicts.dict_3002});
   $('.advInAmCd').selectloader({'advInAmCd':app.dicts.dict_3047});
   $('.payAmtFrm').selectloader({'payAmtFrm':app.dicts.dict_3058});

  var athNo = GetQueryString("athNo");
  var addForm = $('#lnrptAdd-form');
  if(operatH=='add'){
    $('.form-group-lono').css('readonly',false)
                        .find('div').addClass('find')
                        .find('.line-use').show();
      $('[name=loNo]').parent('div').addClass('propInput');
      $('[name=loNo]').parent('div').css('width','160px');
      $('.inrpt-pre-group').hide();
      $('.depAcAmtDiv').hide();
      $('.payAcNoDiv').hide();
    $('#confirmR').click(function () {
       var $this = $(this);
      if (addForm.valid()) {
          $this.prop('disabled',true);
    	$('.curTyp').attr('disabled',false);
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            app.alertOK('提交成功！');
              $this.prop('disabled',false);
            var athNo = data.athNo;
            setTimeout(function(){
            	window.location.href="/cc/loan/lnrpt/lnrpt-add.html?operatH=edit&athNo=" + athNo;	
            },2000)
          }else{
            app.alertError(data.errors.join('\n'));
            $this.prop('disabled',false);
            return false;
          }
        });
      }
    });
  }else if(operatH == 'view'){
	  $('#exec').hide();
	    app.$getJSON(app.LNRPT_VIEW + athNo).done(function (data) {
	      if(app.isOK(data)){
	        addForm.deserializeObject(data);
	        $('[name=inStDt]').val(data.lnloinf.inStDt);
	        $('.form-group-lono').css('readonly',true)
	                             .find('div').removeClass('find')
	                             .find('.line-use').hide();
	        $('[name=loNo]').parent('div').removeClass('propInput');
	        $('[name=loNo]').parent('div').css('width','200px');
	        $('input').attr('readonly',true);
	        $("input[name='trDt']").attr("disabled", true);
	        $(".selBox").find("button").attr("disabled", true);
	        $('select').attr('disabled',true);
	        
			$("[name='payAm1']").val(app.formatCurrencyM(data.payAm));
			$("[name='payPrAmt1']").val(app.formatCurrencyM(data.payPrAmt));
			$("[name='payInAmt1']").val(app.formatCurrencyM(data.payInAmt));
			$("[name='payOdInAmt1']").val(app.formatCurrencyM(data.payOdInAmt));
			$("[name='payCmInAmt1']").val(app.formatCurrencyM(data.payCmInAmt));
			$("[name='payFeeAmt1']").val(app.formatCurrencyM(data.payFeeAmt));
			$("[name='payAcNo']").empty(); 
	        $('#confirmR').hide();
	        $('.cancle').text("返回");
	        $('select').selectpicker('refresh');
	      }else{
            app.alertError(data.errors.join('\n'));
            return false;
          }
	    });
  } else if(operatH == 'edit'){
    $('#exec').show();
    app.$getJSON(app.LNRPT_VIEW + athNo).done(function (data) {
      if(app.isOK(data)){
        addForm.deserializeObject(data);
        $('[name=inStDt]').val(data.lnloinf.inStDt);
        $('.form-group-lono').css('readonly',true)
                             .find('div').removeClass('find')
                             .find('.line-use').hide();
        $('[name=loNo]').parent('div').removeClass('propInput');
        $('[name=loNo]').parent('div').css('width','200px');
        
		$("[name='payAm1']").val(app.formatCurrencyM(data.payAm));
		$("[name='payPrAmt1']").val(app.formatCurrencyM(data.payPrAmt));
		$("[name='payInAmt1']").val(app.formatCurrencyM(data.payInAmt));
		$("[name='payOdInAmt1']").val(app.formatCurrencyM(data.payOdInAmt));
		$("[name='payCmInAmt1']").val(app.formatCurrencyM(data.payCmInAmt));
		$("[name='payFeeAmt1']").val(app.formatCurrencyM(data.payFeeAmt));
		$("select[name='payAcNo']").empty();
        $("[name='payAcNo']").val(data.payAcNo);
		$('select').selectpicker('refresh');
      }else{
        app.alertError(data.errors.join('\n'));
        return false;
      }
    });
    
    $('#confirmR').click(function () {
    	$('[name=buzDt]').removeClass('ltTimeValidate')
        var $this = $(this);
        $('.curTyp').attr('disabled',false);
        $('select').selectpicker('refresh');
      if (addForm.valid()) {
        $this.prop('disabled',true);
        addForm.attr('action',app.LNRPT_UPDATE );
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
            App.stopPageLoading();
          if (app.isOK(data)) {
            app.alertOK('提交成功！');
            $this.prop('disabled',false);
          }else{
            app.alertError(data.errors.join('\n'));
            $this.prop('disabled',false);
          }
        });
        return false;
      }
    });
    
    $('#exec').click(function () {
      $('[name=buzDt]').removeClass('ltTimeValidate')
      var $this = $(this);
      $('.curTyp').attr('disabled',false);
      $('select').selectpicker('refresh');
      if (addForm.valid()) {
        $this.attr('disabled',true);
        addForm.attr('action',app.LNRPT_UPDATE );
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
              $this.attr('disabled',false);
        	  exec();
          }else{
              app.alertError(data.errors.join('\n'));
              $this.attr('disabled',false);
          }
        });
        return false;
      }
    });
  }
  

    $('#lonoModal').on('shown.bs.modal',function () {
        app.loadData();
    });
    $("#confirmY").click(function () {
    	 if($('[type=radio]:checked').length>0){
	        var checked = $("#lonoTable").find("[type='radio']:checked");
	        var loNo = checked.parents("tr").find('.name').text();
	        var curTyp = checked.parents('tr').find('.td-curTyp').text();
            var brNo = checked.parents('tr').find('.td-brNo').text();
            var appUsId = checked.parents('tr').find('.td-appUs').text();
            var inStDt =  checked.parents('tr').find('.td-inStDt').text();
	        $("#loNo").val(loNo);
	        $('.curTyp').val(curTyp).attr('disabled',true);
	        $('[name=inStDt]').val(inStDt);
            $('[name=brNo]').val(brNo);
            $('[name=appUsId]').val(appUsId);
	        $('select').selectpicker('refresh');
            if($('#loNo')){
                 $('#loNo').trigger('change');
            }
        	calcLoanOvAmt();		//欠款试算
        	calcLoanPayAmt();		//还款入账试算
    	}else{
    		app.alertError('您还没有选中记录！');
			return false; 
    	}
    });

    //还款模式
    $('[name=payPatCd]').on('change',function () {
      var $this = $(this);
       $('.curTyp').attr('disabled',true);
       $('select').selectpicker('refresh');
       //归还欠款
      if($this.val() == 'GH'){
        $('.inrpt-pre-group').hide();
        $("[name='payAm1']").attr('readonly', false);
      //全部还款
      }else if($this.val() == 'QT'){
        $('.inrpt-pre-group').hide();
        $("[name='payAm1']").attr('readonly', true);
      //提前还款
      }else{
        $('.inrpt-pre-group').show();
      }
      
  	  calcLoanOvAmt();		//欠款试算
	  calcLoanPayAmt();		//还款入账试算
    });
    
    //还款资金来源
    $('[name=payAmtFrm]').on('change',function () {
      var $this = $(this);
      //内部账户扣款
      if($this.val() == 'NB'){
          $('.depAcAmtDiv').show();
          $('.payAcNoDiv').hide();
          var loNo= $("[name='loNo']").val();
          app.$getJSON(app.LNLOINF_VIEW+"/"+loNo ).done(function(data){
        	  if(app.isOK(data)){
        		  datas={
        				  'cuCertTyp': data.cuCertTyp,
        		          'cuCertId': data.cuCertId,
        		  }
        		 app.$getJSON(app.LNDEPINF_VIEW,datas).done(function(data){
        			 if(app.isOK(data)){
		        		 $('.depAcAmt1').val(app.formatCurrencyM(data.depSa));
		        		 $("[name='depAcAmt']").val(data.depSa);
		        	}
        			 $('select').selectpicker('refresh');
        		 });
        		  
        	  }else{
                app.alertError(data.errors.join('\n'));
                return false;
              }
          });
         
      //还款账户扣款
      }else if($this.val() == 'HK'  ){
          $('.depAcAmtDiv').hide();
          $('.payAcNoDiv').show();
          $('select').selectpicker('refresh');
          $("select[name='payAcNo']").html('');
          $("select[name='payAcNo']").append('<option value="">请选择</option>');
          var loNo= $("[name='loNo']").val();
   	      var acTyp=$this.val();
         var jqxhr=app.$post(app.LNACINF_FINDACINFLIST + '?loNo=' + loNo + '&acTyp=' + acTyp,  {}, 'json');
         if (!jqxhr) {
             return;
         }
         jqxhr.done(function (data) {
             if(app.isOK(data)){
             	$.each(data.payload,function(i,item){
             		$("select[name='payAcNo']").append("<option value="+ item.acNo+">"+ "" +item.acNo + "" + "</option>");
             	});
                 $('select').selectpicker('refresh');
             }else{
               app.alertError(data.errors.join('\n'));
               return false;
             }
         });
      //保证金账户扣款
      }else if($this.val() == 'BZ'){
    	   var loNo= $("[name='loNo']").val();
    	   var acTyp=$this.val();
          $('select').selectpicker('refresh');
          $("select[name='payAcNo']").html('');
          $("select[name='payAcNo']").append('<option value="">请选择</option>');
    	  $('.depAcAmtDiv').hide();
          $('.payAcNoDiv').show();
          var jqxhr=app.$post(app.LNACINF_FINDACINFLIST + '?loNo=' + loNo + '&acTyp=' + acTyp,  {}, 'json');
          if (!jqxhr) {
              return;
          }
          jqxhr.done(function (data) {
              if(app.isOK(data)){
               	$.each(data.payload,function(i,item){
               		$("select[name='payAcNo']").append("<option value="+ item.acNo+">"+item.acNa + "(" +item.acNo + ")" + "</option>");
               	});
                $('select').selectpicker('refresh');
              }
          });
      }
    });

    $('.payAm1').on('change',function () {
        var $this = $(this);
        if($this.val().indexOf(',') != -1){
            var Mo = app.unformatMoney($this.val());
            $this.val(app.formatCurrencyM(Mo));
            $('.payAm').val(app.unformatMoney($this.val()));
        }else{
            $this.val(app.formatCurrencyM($this.val()));
            $('.payAm').val(app.unformatMoney($this.val()));
        }
        calcLoanPayAmt();		//还款入账试算
    });

    $('[name=trDt]').parent('.date-picker-page').on('changeDate',function () {
    	if(!checkTrDt()){
    		return;
    	}
    	calcLoanOvAmt();		//欠款试算
    	calcLoanPayAmt();		//还款入账试算
    });

    $('[name=loNo]').on('change',function () {
    	if(checkTrDt()){
    		return;
    	}
    	calcLoanOvAmt();		//欠款试算
    	calcLoanPayAmt();		//还款入账试算
    });

    
    function exec(){
      var payAm = app.unformatMoney($('[name=payAm1]').val());
      var depAcAmt=app.unformatMoney($('[name=depAcAmt1]').val());
      var payAmtFrm=$('[name=payAmtFrm]').val();
      //对内部账户、保证金做的金额做控制
      if(payAmtFrm =='NB' || payAmtFrm=='BZ'){
    	  if(depAcAmt<payAm){
        	  app.alertError("还款金额大于时点内部账户余额，无法还款记账，请确认！");
        	  return;
          }
      }
      if(payAm<=0 || !payAm){
    	  app.alertTxt("还款记账金额必须大于0!");
      }else{
          var jqxhr = app.$post(app.LNRPT_LOANPAYEXEC + '?athNo=' + athNo,  {}, 'json');
          if (!jqxhr) {
              return;
          }
          jqxhr.done(function (data) {
              if(app.isOK(data)){
                  app.alertOK('还款记账成功');
                  window.location.href="/cc/loan/lnrpt/lnrpt-index.html";
              }else{
                app.alertError(data.errors.join('\n'));
                return false;
              }
          });
      }
    }
    
   function checkTrDt(){
    	var trDt = $('[name=trDt]').val();
    	var inStDt = $('[name=inStDt]').val();
    	if(trDt=='' || trDt==undefined || inStDt=='' || inStDt==undefined){
    		return true;
    	}else{
    		
    		return true;
    	}
    }
    
    //测算欠款
    function calcLoanOvAmt(){
    	var loNo = $('#loNo').val();
    	var trDt = $('[name=trDt]').val();
    	if(loNo==null || loNo=='' || loNo==undefined 
			|| trDt==null || trDt=='' || trDt==undefined){
    		return;
    	}
    	var jqxhr = app.$post(app.LNRPT_LOANPAYCALC + '?loNo=' + loNo + '&buzDt=' + trDt + '&payPatCd=GH&payAm=',  {}, 'json');
  	    if (!jqxhr) {
  		  return;
  	    }
  	    jqxhr.done(function (data) {
  		  if(app.isOK(data)){
              $("[name='needPayAm']").val(data.payAm);
  			  $("[name='needPayAm1']").val(app.formatCurrencyM(data.payAm));

              $("[name='needPayPrAmt']").val(data.payPrAmt);
  			  $("[name='needPayPrAmt1']").val(app.formatCurrencyM(data.payPrAmt));

              $("[name='needPayInAmt']").val(data.payInAmt);
  			  $("[name='needPayInAmt1']").val(app.formatCurrencyM(data.payInAmt));

              $("[name='needPayOdInAmt']").val(data.payOdInAmt);
  			  $("[name='needPayOdInAmt1']").val(app.formatCurrencyM(data.payOdInAmt));

              $("[name='needPayCmInAmt']").val(data.payCmInAmt);
  			  $("[name='needPayCmInAmt1']").val(app.formatCurrencyM(data.payCmInAmt));

              $("[name='needPayFeeAmt']").val(data.payFeeAmt);
  			  $("[name='needPayFeeAmt1']").val(app.formatCurrencyM(data.payFeeAmt));
  		   }else{
  	          app.alertError(data.errors.join('\n'));
  	          return false;
  	       }
  	    });
    }
    
    //还款入账试算
    function calcLoanPayAmt(){
    	var loNo = $('#loNo').val();
    	var trDt = $('[name=trDt]').val();
    	var payPatCd = $('[name=payPatCd]').val();
    	var payAm = app.unformatMoney($('[name=payAm1]').val());
    	if(loNo==null || loNo=='' || loNo==undefined 
			|| trDt==null || trDt=='' || trDt==undefined 
			|| payPatCd==null || payPatCd=='' || payPatCd==undefined){
    		return;
    	}
		if(payPatCd=='GH'){
			if(payAm==null || payAm=='' || payAm==undefined || payAm<0){
	            $("[name='payAm']").val(0);
				$("[name='payAm1']").val(app.formatCurrencyM(0));
	
	            $("[name='payPrAmt']").val(0);
				$("[name='payPrAmt1']").val(app.formatCurrencyM(0));
	
	            $("[name='payInAmt']").val(0);
				$("[name='payInAmt1']").val(app.formatCurrencyM(0));
	
	            $("[name='payOdInAmt']").val(0);
				$("[name='payOdInAmt1']").val(app.formatCurrencyM(0));
	
	            $("[name='payCmInAmt']").val(0);
				$("[name='payCmInAmt1']").val(app.formatCurrencyM(0));
	
	            $("[name='payFeeAmt']").val(0);
				$("[name='payFeeAmt1']").val(app.formatCurrencyM(0));
				return;
			}
		}else if(payPatCd=='QT'){
			payAm='';
		}
    	var jqxhr = app.$post(app.LNRPT_LOANPAYCALC + '?loNo=' + loNo + '&buzDt=' + trDt + '&payPatCd=' + payPatCd + "&payAm=" + payAm,  {}, 'json');
  	    if (!jqxhr) {
  		  return;
  	    }
  	    jqxhr.done(function (data) {
  		  if(app.isOK(data)){
              $("[name='payAm']").val(data.payAm);
  			  $("[name='payAm1']").val(app.formatCurrencyM(data.payAm));

              $("[name='payPrAmt']").val(data.payPrAmt);
  			  $("[name='payPrAmt1']").val(app.formatCurrencyM(data.payPrAmt));

              $("[name='payInAmt']").val(data.payInAmt);
  			  $("[name='payInAmt1']").val(app.formatCurrencyM(data.payInAmt));

              $("[name='payOdInAmt']").val(data.payOdInAmt);
  			  $("[name='payOdInAmt1']").val(app.formatCurrencyM(data.payOdInAmt));

              $("[name='payCmInAmt']").val(data.payCmInAmt);
  			  $("[name='payCmInAmt1']").val(app.formatCurrencyM(data.payCmInAmt));

              $("[name='payFeeAmt']").val(data.payFeeAmt);
  			  $("[name='payFeeAmt1']").val(app.formatCurrencyM(data.payFeeAmt));
  		  }else{
            app.alertError(data.errors.join('\n'));
            return false;
  		  }
  	    });
    }
});
