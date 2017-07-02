$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 var addForm = $('#add-lnratchg-form');
	 $('#adjustBtn').hide();

	  $('.athInd').selectloader({athIndList: app.dicts.dict_3016});
	  $('.chgChl').selectloader({chgChlList: app.dicts.dict_3032});
	  $('.rtChgTyp').selectloader({rtChgTypList: app.dicts.dict_3018});
	  $('.rtChgPlTyp').selectloader({rtChgPlTypList: app.dicts.dict_3006});
	  $('.valTyp').selectloader({valTypList: app.dicts.dict_3033});
	  $('.newRatTyp').selectloader({newRatTypList: app.dicts.dict_3005});
	  $('.oldRatTyp').selectloader({oldRatTypList: app.dicts.dict_3005});
	  $('.newBaRtTyp').selectloader({'newBaRtTyp': app.dict_cfg.dict_cfg_RatTyp});
	  $('.oldBaRtTyp').selectloader({'oldBaRtTyp': app.dict_cfg.dict_cfg_RatTyp});
	  $('.oldRatMod').selectloader({oldRatModList: app.dicts.dict_3017});
	  $('.newRatMod').selectloader({newRatModList: app.dicts.dict_3017});
	  /*
	   * 对借据号设置Pop框
	   */
	$('#lonoModal').on('shown.bs.modal',function () {
		app.loadData();
	});
	  $("#confirmY").click(function () {
		  if($('[type=radio]:checked').length>0){
		  var checked = $("#lonoTable").find("[type='radio']:checked");
		  var text = checked.parents("tr").find('.name').text();
		  $("#loNo").val(text);
		  	$('.athInd').val('0').attr('disabled',true);
		  	$('.chgChl').val('SG').attr('disabled',true);
		  	$('select').selectpicker('refresh');
	        app.$getJSON(app.LNLOINF_VIEW+"/"+text).done(function(data){
	        	if(app.isOK(data)){
	        		$(".oldRatTyp").val(data.baRtTyp).attr('disabled',true);
	        		$(".oldRatMod").val(data.ratMod).attr('disabled',true);
	        		//基准利率
	        		  if(data.baRt==null || data.baRt==""){
		        	    	data.baRt=parseFloat("0");
		        	    }
	        		$('.oldBaRt').val(data.baRt);
					$('.oldBaRt1').val(app.formatPercent(data.baRt*100));
	        		$(".oldBaRtTyp").val(data.ratTyp).attr('disabled',true);
	        		//原利率浮点
	        		  if(data.rtAd==null || data.rtAd==""){
		        	    	data.rtAd=parseFloat("0");
		        	    }
	        		$('.oldRtAd').val(data.rtAd);
					$('.oldRtAd1').val(app.formatPercent(data.rtAd*100));
					//原利率浮比
	        		  if(data.rtPe==null || data.rtPe==""){
		        	    	data.rtPe=parseFloat("0");
		        	    }
	        		$('.oldRtPe').val(data.rtPe);
					$('.oldRtPe1').val(app.formatPercent(data.rtPe*100));
					//原执行利率
	        		  if(data.exRt==null || data.exRt==""){
		        	    	data.exRt=parseFloat("0");
		        	    }
	        		$('.oldExRt').val(data.exRt);
					$('.oldExRt1').val(app.formatPercent(data.exRt*100));
					//原罚息利率
	        		  if(data.ovRt==null || data.ovRt==""){
		        	    	data.ovRt=parseFloat("0");
		        	    }
	        		$('.oldOvRt').val(data.ovRt);
					$('.oldOvRt1').val(app.formatPercent(data.ovRt*100));
					//原罚息利率浮比
	        		  if(data.ovPe==null || data.ovPe==""){
		        	    	data.ovPe=parseFloat("0");
		        	    }
	        		$('.newOvPe').val(data.ovPe);
					$('.newOvPe1').val(app.formatPercent(data.ovPe*100));
	        		$(".rtChgTyp").val(data.rtChgTyp).attr('disabled',true);
	        		$(".rtChgPlTyp").val(data.rtChgPlTyp).attr('disabled',true);
	        		$(".rtChgPlNum").val(data.rtChgPlNum);
	        		$(".nxtChgDt").val(data.nxtChgDt);
	        		$(".appBrNo").val(data.brNo);
	        		$(".appUsId").val(data.usId);
	        		
					$('.form-ratchg-hidden').show();
					$('select').selectpicker('refresh');
	        	}
	        	
	        })
		  }else{
		        app.alertError('您还没有选中记录！'); 
		        return false; 
		      }
	        
	    });
	 $('#saveForm').click(function () {
		 var $this = $(this);
       if (addForm.valid()) {
		   $this.prop('disabled',true);
    	   $('.athInd, .chgChl, .oldRatTyp, .oldRatMod, .rtChgTyp, .rtChgPlTyp, .oldBaRtTyp').attr('disabled',false);
		   $('select').selectpicker('refresh');
             App.startPageLoading({animate: true});
             var jqxhr = app.$submit(addForm, 'json');
             if (!jqxhr) return false;
             jqxhr.done(function (data) {
                 App.stopPageLoading();
                 if (app.isOK(data)) {
                	 console.log(data);
                     app.alertOK('提交成功');
					 $this.prop('disabled',false);
					 setTimeout(function () {
						 window.location.href="lnratchg-edit.html?operatH=edit&athNo="+data.athNo;
					 },2000);

                 }else{
					 $this.prop('disabled',true);
					 app.alertError(data.errors.join(','));
				 }
             });
             return false;
         }
		
     });
	
	$('[name=rtChgTyp]').on('change',function () {
		var $this = $(this);
		if($this.val() == 'LJ'){
			$('#adjustBtn').show();
		}else{
			$('#adjustBtn').hide();
		}
		$('select').selectpicker('refresh');

	});
	$('#adjustBtn').on('click',function () {
		app.$post().done(function (data) {
			if(app.isOK(data)){
				app.alertOK('提交成功！');
			}else{
				var errors = data.errors.join(',');
				app.alertError(errors);
			}
		});
	});
	 
});


