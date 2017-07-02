+function($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */

  app.crumbs = {
    icon: 'icon-index',
    dt: {
      text: '主页',
      url: '/index.html'
    },
    dd: [
      {
        text: '贷款发放',
        url:'../lnloinft/lnloinft-index.html'
      },
      {
        text:'贷款发放明细',
        url:'#'
      }
    ]
  };
    
  $(function () {
    //证件类型
    $('#cuCertTyp').selectloader({'certTypList': app.dicts.dict_17});
//	    app.registerTextHelper('cuCertTyp', app.dicts.dict_17, 'code', 'name');
    //计息方式
    $('#inCalPerCd').selectloader({'inCalPerCdList': app.dicts.dict_39});
	app.registerTextHelper('inCalPerCd', app.dicts.dict_39, 'code', 'name'); 
    //还款周期类型
    $('#loPlTyp').selectloader({'loPlTypList': app.dicts.dict_3006});
    app.registerTextHelper('loPlTyp', app.dicts.dict_3006, 'code', 'name');
    //还款方式	
    $('#loPayTyp').selectloader({'loPayTypList': app.dicts.dict_3011});
    app.registerTextHelper('loPayTyp', app.dicts.dict_3011, 'code', 'name');
    //支付类型
    $('#payTyp').selectloader({'payTypList': app.dicts.dict_3020});
    //币种
    $('#curTyp').selectloader({'curTypList': app.dict_cfg.dict_cfg_CurTyp});
    app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');
    //收付方式
    app.registerTextHelper('rpTyp', app.dicts.dict_63, 'code', 'name');
    //账户类型
    $('#acTyp').selectloader({'acTypList': app.dicts.dict_3024});
    app.registerTextHelper('acTyp', app.dicts.dict_3024, 'code', 'name');
    //还款方式
    app.registerTextHelper('payTyp', app.dicts.dict_3010, 'code', 'name');
    //还款方式本息类型
    app.registerTextHelper('payOpt', app.dicts.dict_3009, 'code', 'name');
    //计算基础
    app.registerTextHelper('payCalBs', app.dicts.dict_3015, 'code', 'name');
    //还款间隔单位
    app.registerTextHelper('payPlTyp', app.dicts.dict_3006, 'code', 'name');
    //费用类型
    app.registerTextHelper('feePayTyp', app.dicts.dict_2, 'code', 'name');
    //是否包含到本金
    app.registerTextHelper('inclToPrYn', app.dicts.dict_3002, 'code', 'name');
    //期供标识
    $('#perProInd').selectloader({'ynList': app.dicts.dict_3002});
    app.registerTextHelper('perProInd', app.dicts.dict_3002, 'code', 'name');
    //贷款类型
    try{  $('#loTyp').selectloader({'loTypList': app.dicts.dict_3029}); }catch(e){}
    //利率类型 
    try{  $('#ratTyp').selectloader({'ratTypList':app.dict_cfg.dict_cfg_RatTyp}); }catch(e){}
    //宽限期类型
    try{  $('#loGrcTyp').selectloader({'loGrcTypList': app.dicts.dict_3019}); }catch(e){}
    //贷款核算规则
    try{  $('#loAcCd').selectloader({'loAcCdList':app.dict_cfg.dict_cfg_RuNo}); }catch(e){}
    
	    
    $('#belongOrgan').click();
    $('#belongRole').click();
	var athNo = GetQueryString("athNo");
	$('#athNo-payctl').val(athNo);
	$('#athNo-feeInf').val(athNo);
	$('#athNo-acInf').val(athNo);
    $('#athNo-setlacinft').val(athNo);
  
    /**
	  * 去后台获取值
	  */
    app.$getJSON(app.LNLOINFT_VIEW+"/"+athNo).done(function(data) {
      if(app.isOK(data)){
        $('#details-form').deserializeObject(data);
        $("input[name='exRt1']").val(app.formatPercent($("input[name='exRt']").val()*100));
        $("input[name='baRt1']").val(app.formatPercent($("input[name='baRt']").val()*100));
        $("input[name='rtAd1']").val(app.formatPercent($("input[name='rtAd']").val()*100));
        $("input[name='rtPe1']").val(app.formatPercent($("input[name='rtPe']").val()*100));
        $("input[name='ovPe1']").val(app.formatPercent($("input[name='ovPe']").val()*100));
        $("input[name='loPrAmt1']").val(app.formatCurrencyM($("input[name='loPrAmt']").val()));
      }
      

      //字典只读
      try{    	$('#cuCertTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#loPlTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#loTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#ratTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#loGrcTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#loPayTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#perProInd').get(0).disabled = true;    }catch(e){}
      try{    	$('#payTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#curTyp').get(0).disabled = true;    }catch(e){}
      try{    	$('#loSts').get(0).disabled = true;    }catch(e){}
      try{    	$('#dbSts').get(0).disabled = true;    }catch(e){}
      try{    	$('#loAcCd').get(0).disabled = true;    }catch(e){}
      try{    	$('#inCalPerCd').get(0).disabled = true;    }catch(e){}
      $('select').selectpicker('refresh');
    });

    $('.lnacinft-page, .lnfeeinft-page, .lnsetlacinft-page, .lnpayctlt-page').pagination({
      "first-store": app.firstStore
    });
  });
} (window.jQuery, window.app);

