+ function ($, app) {
  "use strict ";

  $.extend(app, {

	/* 账号信息*/
    LNACINF_PAGE: app.base + '/cc/loan/lnacinf/page',
    LNACINF_VIEW: app.base + '/cc/loan/lnacinf/view/',
    LNACINF_LIST: app.base + '/cc/loan/lnacinf/list',
    LNACINF_CREATE: app.base + '/cc/loan/lnacinf/create',
    LNACINF_UPDATE: app.base + '/cc/loan/lnacinf/update',
    LNACINF_REMOVE: app.base + '/cc/loan/lnacinf/remove',
    LNACINF_FINDACINFLIST: app.base + '/cc/loan/lnacinf/findLnActinfList',
    //LNACINF_NOTEXISTS: app.base + '/cc/loan/lnacinf/notexists.json',

   
    LNACINFT_PAGE: app.base + '/cc/loan/lnacinft/page',
    LNACINFT_VIEW: app.base + '/cc/loan/lnacinft/view.json',
    LNACINFT_LIST: app.base + '/cc/loan/lnacinft/list',
    LNACINFT_CREATE: app.base + '/cc/loan/lnacinft/create',
    LNACINFT_UPDATE: app.base + '/cc/loan/lnacinft/update',
    LNACINFT_REMOVE: app.base + '/cc/loan/lnacinft/remove',
    //LNACINFT_NOTEXISTS: app.base + '/cc/loan/lnacinft/notexists.json',

    /* 授权信息*/
    LNATHINFT_PAGE: app.base + '/cc/loan/lnathinft/page',
    LNATHINFT_VIEW: app.base + '/cc/loan/lnathinft/view/',
    LNATHINFT_LIST: app.base + '/cc/loan/lnathinft/list',
    LNATHINFT_CREATE: app.base + '/cc/loan/lnathinft/create',
    LNATHINFT_UPDATE: app.base + '/cc/loan/lnathinft/update',
    LNATHINFT_REMOVE: app.base + '/cc/loan/lnathinft/remove/',
    //LNATHINFT_NOTEXISTS: app.base + '/cc/loan/lnathinft/notexists.json',

    /* 放款成功*/
    LNLOINF_PAGE: app.base + '/cc/loan/lnloinf/page',
    LNLOINF_VIEW: app.base + '/cc/loan/lnloinf/view',
    LNLOINF_LIST: app.base + '/cc/loan/lnloinf/list',
    LNLOINF_CREATE: app.base + '/cc/loan/lnloinf/create',
    LNLOINF_UPDATE: app.base + '/cc/loan/lnloinf/update',
    LNLOINF_REMOVE: app.base + '/cc/loan/lnloinf/remove/',
        /*还款计划信息*/
    LNLOINF_PLAN: app.base + '/cc/loan/lnpaysch/page',
       /*分户账信息表*/
    LNLOINF_LGD: app.base + '/cc/account/lnactldgl/page',
      /*交易分录信息表*/
    LNLOINF_ENTBRF: app.base + '/cc/account/lnactentl/listBrf',
   
    LNLOINF_ENTLIST: app.base + '/cc/account/lnactentl/list',
    LNLOINF_CHANNEL: app.base + '/cc/loan/lnloinf/channel/detail.json',
    LNLOINF_MESS: app.base + '/cc/loan/lnloinf/channel/mess.json',
    LNACTENT_L: app.base + '/cc/loan/lnloinf/deal.json',
    LNLOINFMESS_PAGE: app.base + '/cc/loan/lnloinf/loanmess',

    //LNLOINF_NOTEXISTS: app.base + '/cc/loan/lnloinf/notexists.json',

    /*贷款借据授权表管理*/
    LNLOINFT_PAGE: app.base + '/cc/loan/lnloinft/page',
    LNLOINFT_VIEW: app.base + '/cc/loan/lnloinft/view',
    LNLOINFT_LIST: app.base + '/cc/loan/lnloinft/list.json',
    LNLOINFT_CREATE: app.base + '/cc/loan/lnloinft/create.json',
    LNLOINFT_UPDATE: app.base + '/cc/loan/lnloinft/update.json',
    LNLOINFT_REMOVE: app.base + '/cc/loan/lnloinft/remove/',
    LNLOINFT_LOANCALC: app.base + '/cc/loan/lnloinft/loancalc/',
    LNLOINFT_LOANPAYDOWN: app.base + '/cc/loan/lnloinft/loanpaydown/',
    LNLOINFT_ACCOUNT: app.base + '/cc/loan/lnloinft/account',
    ADMSYSORGAN_PAGE: app.base + '/cc/loan/lnloinft/organization',
    ADMSYSUSER_PAGE: app.base + '/cc/loan/lnloinft/user',
    //LNLOINFT_NOTEXISTS: app.base + '/cc/loan/lnloinft/notexists.json',

    LNPAYCTL_PAGE: app.base + '/cc/loan/lnpayctl/page',
    LNPAYCTL_VIEW: app.base + '/cc/loan/lnpayctl/view',
    LNPAYCTL_LIST: app.base + '/cc/loan/lnpayctl/list',
    LNPAYCTL_CREATE: app.base + '/cc/loan/lnpayctl/create',
    LNPAYCTL_UPDATE: app.base + '/cc/loan/lnpayctl/update',
    LNPAYCTL_REMOVE: app.base + '/cc/loan/lnpayctl/remove',
    //LNPAYCTL_NOTEXISTS: app.base + '/cc/loan/lnpayctl/notexists.json',

    LNPAYCTLT_PAGE: app.base + '/cc/loan/lnpayctlt/page',
    LNPAYCTLT_VIEW: app.base + '/cc/loan/lnpayctlt/view.json',
    LNPAYCTLT_LIST: app.base + '/cc/loan/lnpayctlt/list',
    LNPAYCTLT_CREATE: app.base + '/cc/loan/lnpayctlt/create',
    LNPAYCTLT_UPDATE: app.base + '/cc/loan/lnpayctlt/update',
    LNPAYCTLT_REMOVE: app.base + '/cc/loan/lnpayctlt/remove',
    //LNPAYCTLT_NOTEXISTS: app.base + '/cc/loan/lnpayctlt/notexists.json',

    LNPAYSCH_PAGE: app.base + '/cc/loan/lnpaysch/page',
    LNPAYSCH_VIEW: app.base + '/cc/loan/lnpaysch/view.json',
    LNPAYSCH_LIST: app.base + '/cc/loan/lnpaysch/list.json',
    LNPAYSCH_CREATE: app.base + '/cc/loan/lnpaysch/create',
    LNPAYSCH_UPDATE: app.base + '/cc/loan/lnpaysch/update',
    LNPAYSCH_REMOVE: app.base + '/cc/loan/lnpaysch/remove',
    LNPAYSCH_NOTEXISTS: app.base + '/cc/loan/lnpaysch/notexists',

    //费用列表
    LNFEEINF_PAGE: app.base + '/cc/loan/lnfeeinf/page',
    LNFEEINF_VIEW: app.base + '/cc/loan/lnfeeinf/view/',
    LNFEEINF_LIST: app.base + '/cc/loan/lnfeeinf/list.json',
    LNFEEINF_CREATE: app.base + '/cc/loan/lnfeeinf/create',
    LNFEEINF_UPDATE: app.base + '/cc/loan/lnfeeinf/update',
    LNFEEINF_REMOVE: app.base + '/cc/loan/lnfeeinf/remove/',
    LNFEEINF_NOTEXISTS: app.base + '/cc/loan/lnfeeinf/notexists',

    //费用信息授权表
    LNFEEINFT_PAGE: app.base + '/cc/loan/lnfeeinft/page',
    LNFEEINFT_VIEW: app.base + '/cc/loan/lnfeeinft/view/',
    LNFEEINFT_LIST: app.base + '/cc/loan/lnfeeinft/list.json',
    LNFEEINFT_CREATE: app.base + '/cc/loan/lnfeeinft/create.json',
    LNFEEINFT_UPDATE: app.base + '/cc/loan/lnfeeinft/update.json',
    LNFEEINFT_REMOVE: app.base + '/cc/loan/lnfeeinft/remove.json',
    LNFEEINFT_NOTEXISTS: app.base + '/cc/loan/lnfeeinft/notexists.json',
    
    //费用分摊计划表
    LNFEESCH_PAGE: app.base + '/cc/loan/lnfeesch/page',
    LNFEESCH_VIEW: app.base + '/cc/loan/lnfeesch/view/',
    LNFEESCH_LIST: app.base + '/cc/loan/lnfeesch/list.json',
    LNFEESCH_CREATE: app.base + '/cc/loan/lnfeesch/create.json',
    LNFEESCH_UPDATE: app.base + '/cc/loan/lnfeesch/update.json',
    LNFEESCH_REMOVE: app.base + '/cc/loan/lnfeesch/remove.json',
    LNFEESCH_NOTEXISTS: app.base + '/cc/loan/lnfeesch/notexists.json',

    //利率变更
    LNRATCHG_PAGE: app.base + '/cc/loan/lnratchg/page',
    LNRATCHG_VIEW: app.base + '/cc/loan/lnratchg/view/',
    LNRATCHG_LIST: app.base + '/cc/loan/lnratchg/list',
    LNRATCHG_CREATE: app.base + '/cc/loan/lnratchg/create',
    LNRATCHG_MANUAL:app.base+'/cc/loan/lnratchg/manual',
    LNRATCHG_UPDATE: app.base + '/cc/loan/lnratchg/update',
    LNRATCHG_REMOVE: app.base + '/cc/loan/lnratchg/remove/',
    LNRATCHG_NOTEXISTS: app.base + '/cc/loan/lnratchg/notexists',

    //贷款利率分段
    LNRATCHGSEC_PAGE: app.base + '/cc/loan/lnratchgsec/page',
    LNRATCHGSEC_VIEW: app.base + '/cc/loan/lnratchgsec/view/',
    LNRATCHGSEC_LIST: app.base + '/cc/loan/lnratchgsec/list.json',
    LNRATCHGSEC_CREATE: app.base + '/cc/loan/lnratchgsec/create.json',
    LNRATCHGSEC_UPDATE: app.base + '/cc/loan/lnratchgsec/update.json',
    LNRATCHGSEC_REMOVE: app.base + '/cc/loan/lnratchgsec/remove/',
    LNRATCHGSEC_NOTEXISTS: app.base + '/cc/loan/lnratchgsec/notexists.json',

    //交易冲正
    LNREDREML_PAGE: app.base + '/cc/loan/lnredreml/page',
    LNREDREML_VIEW: app.base + '/cc/loan/lnredreml/view/',
    LNREDREML_LIST: app.base + '/cc/loan/lnredreml/list.json',
    LNREDREML_CREATE: app.base + '/cc/loan/lnredreml/create.json',
    LNREDREML_UPDATE: app.base + '/cc/loan/lnredreml/update.json',
    LNREDREML_REMOVE: app.base + '/cc/loan/lnredreml/remove/',
    LNREDREML_NOTEXISTS: app.base + '/cc/loan/lnredreml/notexists.json',

    //还款账号变更
    LNACCHG_PAGE: app.base + '/cc/loan/lnacchg/page',
    LNACCHG_VIEW: app.base + '/cc/loan/lnacchg/view',
    LNACCHG_LIST: app.base + '/cc/loan/lnacchg/list',
    LNACCHG_CREATE: app.base + '/cc/loan/lnacchg/create',
    LNACCHG_UPDATE: app.base + '/cc/loan/lnacchg/update',
    LNACCHG_REMOVE: app.base + '/cc/loan/lnacchg/remove',
    LNACCHG_CHANGEACCOUNTINFO:app.base + '/cc/loan/lnacchg/changeaccountinfo',
    LNACCHG_NOTEXISTS: app.base + '/cc/loan/lnacchg/notexists',

    //贷款还款方式变更
    LNPAYCHGT_PAGE: app.base + '/cc/loan/lnpaychgt/page',
    LNPAYCHGT_VIEW: app.base + '/cc/loan/lnpaychgt/view/',
    LNPAYCHGT_LIST: app.base + '/cc/loan/lnpaychgt/list.json',
    LNPAYCHGT_CREATE: app.base + '/cc/loan/lnpaychgt/create.json',
    LNPAYCHGT_UPDATE: app.base + '/cc/loan/lnpaychgt/update.json',
    LNPAYCHGT_REMOVE: app.base + '/cc/loan/lnpaychgt/remove.json',
    LNPAYCHGT_NOTEXISTS: app.base + '/cc/loan/lnpaychgt/notexists.json',

    //贷款展期申请
    LNEXDAPP_PAGE: app.base + '/cc/loan/lnexdapp/page',
    LNEXDAPP_VIEW: app.base + '/cc/loan/lnexdapp/view/',
    LNEXDAPP_LIST: app.base + '/cc/loan/lnexdapp/list',
    LNEXDAPP_CREATE: app.base + '/cc/loan/lnexdapp/create',
    LNEXDAPP_UPDATE: app.base + '/cc/loan/lnexdapp/update',
    LNEXDAPP_REMOVE: app.base + '/cc/loan/lnexdapp/remove/',
    LNEXDAPP_NOTEXISTS: app.base + '/cc/loan/lnexdapp/notexists',
    
    //内部账户存款信息表
    LNDEPINF_PAGE:app.base + '/cc/loan/lndepinf/page',
    LNDEPINF_VIEW:app.base + '/cc/loan/lndepinf/view/',
    LNDEPINF_LIST:app.base + '/cc/loan/lndepinf/list.json',
    LNDEPINF_CREATE:app.base + '/cc/loan/lndepinf/create.json',
    LNDEPINF_UPDATE:app.base + '/cc/loan/lndepinf/update.json',
    LNDEPINF_REMOVE:app.base + '/cc/loan/lndepinf/remove/',
 
    //内部账户扣款信息
    LNDEPPAYINF_PAGE:app.base + '/cc/loan/lndeppayinf/page',
    LNDEPPAYINF_VIEW:app.base + '/cc/loan/lndeppayinf/view/',
    LNDEPPAYINF_LIST:app.base + '/cc/loan/lndeppayinf/list.json',
    LNDEPPAYINF_CREATE:app.base + '/cc/loan/lndeppayinf/create.json',
    LNDEPPAYINF_UPDATE:app.base + '/cc/loan/lndeppayinf/update.json',
    LNDEPPAYINF_REMOVE:app.base + '/cc/loan/lndeppayinf/remove/',
    LNDEPPAYINF_NOTEXISTS: app.base + '/cc/loan/lndeppayinf/notexists.json',

    //内部账户交易信息表
    LNDEPTRDINF_PAGE:app.base + '/cc/loan/lndeptrdinf/page',
    LNDEPTRDINF_VIEW:app.base + '/cc/loan/lndeptrdinf/view/',
    LNDEPTRDINF_LIST:app.base + '/cc/loan/lndeptrdinf/list',
    LNDEPTRDINF_CREATE:app.base + '/cc/loan/lndeptrdinf/create',
    LNDEPTRDINF_REMOVE:app.base + '/cc/loan/lndeptrdinf/remove/',
    LNDEPTRDINF_UPDATE:app.base + '/cc/loan/lndeptrdinf/update',
    LNDEPTRDINF_ACCESSMONEY:app.base + '/cc/loan/lndeptrdinf/accessMoney/',
    LNDEPTRDINF_NOTEXISTS: app.base + '/cc/loan/lndeptrdinf/notexists',
    /*根据主申请人的证件类型、证件号码、申请人姓名的改变生成客户编号*/
    LNDEPTRDINF_CUSTOMER_NO:app.base + '/cc/ajax/getCustomerNo', 
    
    
    //贷款结息表
    LNINTBALL_PAGE: app.base + '/cc/loan/lnintball/page',
    LNINTBALL_VIEW: app.base + '/cc/loan/lnintball/view.json',
    LNINTBALL_LIST: app.base + '/cc/loan/lnintball/list.json',
    LNINTBALL_CREATE: app.base + '/cc/loan/lnintball/create.json',
    LNINTBALL_UPDATE: app.base + '/cc/loan/lnintball/update.json',
    LNINTBALL_REMOVE: app.base + '/cc/loan/lnintball/remove.json',
    //LNINTBALL_NOTEXISTS: app.base + '/cc/loan/lnintball/notexists.json',
    
    //贷款减免表
    LNRRINF_PAGE: app.base + '/cc/loan/lnrrinf/page',
    LNRRINF_VIEW: app.base + '/cc/loan/lnrrinf/view/',
    LNRRINF_LIST: app.base + '/cc/loan/lnrrinf/list',
    LNRRINF_CREATE: app.base + '/cc/loan/lnrrinf/create',
    LNRRINF_UPDATE: app.base + '/cc/loan/lnrrinf/update',
    LNRRINF_REMOVE: app.base + '/cc/loan/lnrrinf/remove/',
    LNRRINF_ARREARSDEAL:app.base + '/cc/loan/lnrrinf/arrearsdeal/',
    LNRRINF_NOTEXISTS: app.base + '/cc/loan/lnrrinf/notexists',
    
    
    
    //贷款减免明细表
    LNRRDTL_PAGE: app.base + '/cc/loan/lnrrdtl/page',
    LNRRDTL_VIEW: app.base + '/cc/loan/lnrrdtl/view',
    LNRRDTL_LIST: app.base + '/cc/loan/lnrrdtl/list',
    LNRRDTL_CREATE: app.base + '/cc/loan/lnrrdtl/create',
    LNRRDTL_UPDATE: app.base + '/cc/loan/lnrrdtl/update',
    LNRRDTL_REMOVE: app.base + '/cc/loan/lnrrdtl/remove',
    LNRRDTL_NOTEXISTS: app.base + '/cc/loan/lnrrdtl/notexists',

	//贷款结算授权表
    LNSETLACINF_PAGE: app.base + '/cc/loan/lnsetlacinf/page',
    LNSETLACINF_VIEW: app.base + '/cc/loan/lnsetlacinf/view',
    LNSETLACINF_LIST: app.base + '/cc/loan/lnsetlacinf/list.json',
    LNSETLACINF_CREATE: app.base + '/cc/loan/lnsetlacinf/create.json',
    LNSETLACINF_UPDATE: app.base + '/cc/loan/lnsetlacinf/update.json',
    LNSETLACINF_REMOVE: app.base + '/cc/loan/lnsetlacinf/remove.json',
    LNSETLACINF_FUNDOUT: app.base + '/cc/loan/lnsetlacinf/fundOut',
    //LNSETLACINF_NOTEXISTS: app.base + '/cc/loan/lnsetlacinf/notexists.json',
		
	//贷款结算表
    LNSETLACINFT_PAGE: app.base + '/cc/loan/lnsetlacinft/page',
    LNSETLACINFT_VIEW: app.base + '/cc/loan/lnsetlacinft/view.json',
    LNSETLACINFT_LIST: app.base + '/cc/loan/lnsetlacinft/list.json',
    LNSETLACINFT_CREATE: app.base + '/cc/loan/lnsetlacinft/create.json',
    LNSETLACINFT_UPDATE: app.base + '/cc/loan/lnsetlacinft/update.json',
    LNSETLACINFT_REMOVE: app.base + '/cc/loan/lnsetlacinft/remove.json',
    //LNSETLACINFT_NOTEXISTS: app.base + '/cc/loan/lnsetlacinft/notexists.json'
    
    //收付记录表
    LNREPAINF_PAGE: app.base + '/cc/loan/lnrepainf/page',
    LNREPAINF_VIEW: app.base + '/cc/loan/lnrepainf/view.json',
    LNREPAINF_LIST: app.base + '/cc/loan/lnrepainf/list.json',
    LNREPAINF_CREATE: app.base + '/cc/loan/lnrepainf/create.json',
    LNREPAINF_UPDATE: app.base + '/cc/loan/lnrepainf/update.json',
    LNREPAINF_REMOVE: app.base + '/cc/loan/lnrepainf/remove.json',
    //LNREPAINF_NOTEXISTS: app.base + '/cc/loan/lnrepainf/notexists.json',

    LNBATRPAPP_PAGE: app.base + '/cc/loan/lnbatrpapp/page',
    LNBATRPAPP_VIEW: app.base + '/cc/loan/lnbatrpapp/view/',
    LNBATRPAPP_LIST: app.base + '/cc/loan/lnbatrpapp/list.json',
    LNBATRPAPP_CREATE: app.base + '/cc/loan/lnbatrpapp/create.json',
    LNBATRPAPP_UPDATE: app.base + '/cc/loan/lnbatrpapp/update.json',
    LNBATRPAPP_REMOVE: app.base + '/cc/loan/lnbatrpapp/remove/',
    //LNBATRPAPP_NOTEXISTS: app.base + '/cc/loan/lnbatrpapp/notexists.json',

    LNBATRPRST_PAGE: app.base + '/cc/loan/lnbatrprst/page',
    LNBATRPRST_VIEW: app.base + '/cc/loan/lnbatrprst/view/',
    LNBATRPRST_LIST: app.base + '/cc/loan/lnbatrprst/list.json',
    LNBATRPRST_CREATE: app.base + '/cc/loan/lnbatrprst/create.json',
    LNBATRPRST_UPDATE: app.base + '/cc/loan/lnbatrprst/update.json',
    LNBATRPRST_REMOVE: app.base + '/cc/loan/lnbatrprst/remove/',
    //LNBATRPRST_NOTEXISTS: app.base + '/cc/loan/lnbatrprst/notexists.json',

    LNRPLOG_PAGE: app.base + '/cc/loan/lnrplog/page',
    LNRPLOG_VIEW: app.base + '/cc/loan/lnrplog/view/',
    LNRPLOG_LIST: app.base + '/cc/loan/lnrplog/list',
    LNRPLOG_CREATE: app.base + '/cc/loan/lnrplog/create',
    LNRPLOG_UPDATE: app.base + '/cc/loan/lnrplog/update',
    LNRPLOG_REMOVE: app.base + '/cc/loan/lnrplog/remove/',
    //LNRPLOG_NOTEXISTS: app.base + '/cc/loan/lnrplog/notexists.json',

    LNRPSCHDTL_PAGE: app.base + '/cc/loan/lnrpschdtl/page',
    LNRPSCHDTL_VIEW: app.base + '/cc/loan/lnrpschdtl/view/',
    LNRPSCHDTL_LIST: app.base + '/cc/loan/lnrpschdtl/list.json',
    LNRPSCHDTL_CREATE: app.base + '/cc/loan/lnrpschdtl/create.json',
    LNRPSCHDTL_UPDATE: app.base + '/cc/loan/lnrpschdtl/update.json',
    LNRPSCHDTL_REMOVE: app.base + '/cc/loan/lnrpschdtl/remove.json',
    LNRPSCHDTL_SCHCALC: app.base + '/cc/loan/lnrpschdtl/schcalc',
    //LNRPSCHDTL_NOTEXISTS: app.base + '/cc/loan/lnrpschdtl/notexists.json',

    //主动还款
    LNRPT_PAGE: app.base + '/cc/loan/lnrpt/page',
    LNRPT_VIEW: app.base + '/cc/loan/lnrpt/view/',
    LNRPT_LIST: app.base + '/cc/loan/lnrpt/list',
    LNRPT_CREATE: app.base + '/cc/loan/lnrpt/create',
    LNRPT_UPDATE: app.base + '/cc/loan/lnrpt/update',
    LNRPT_REMOVE: app.base + '/cc/loan/lnrpt/remove/',
    LNRPT_LOANPAYCALC: app.base + '/cc/loan/lnrpt/loanPayCalc',
    LNRPT_LOANPAYEXEC: app.base + '/cc/loan/lnrpt/loanPayExec',
    //LNRPT_NOTEXISTS: app.base + '/cc/loan/lnrpt/notexists.json',

    LNBATFILE_PAGE: app.base + '/cc/loan/lnbatfile/page',
    LNBATFILE_VIEW: app.base + '/cc/loan/lnbatfile/view/',
    LNBATFILE_LIST: app.base + '/cc/loan/lnbatfile/list.json',
    LNBATFILE_CREATE: app.base + '/cc/loan/lnbatfile/create.json',
    LNBATFILE_UPDATE: app.base + '/cc/loan/lnbatfile/update.json',
    LNBATFILE_REMOVE: app.base + '/cc/loan/lnbatfile/remove/',
    //LNBATFILE_NOTEXISTS: app.base + '/cc/loan/lnbatfile/notexists.json'
    
	//交易流水信息管理
    LNTRXLOG_PAGE: app.base + '/cc/loan/lntrxlog/page',
    LNTRXLOG_VIEW: app.base + '/cc/loan/lntrxlog/view/',
    LNTRXLOG_LIST: app.base + '/cc/loan/lntrxlog/list.json',
    LNTRXLOG_CREATE: app.base + '/cc/loan/lntrxlog/create.json',
    LNTRXLOG_UPDATE: app.base + '/cc/loan/lntrxlog/update.json',
    LNTRXLOG_REMOVE: app.base + '/cc/loan/lntrxlog/remove/',
    LNTRXLOG_REVERSAL: app.base + '/cc/loan/lntrxlog/reversal/',
    //LNTRXLOG_NOTEXISTS: app.base + '/cc/loan/lntrxlog/notexists.json'
    
    
  });

  $('form').each(function () {
    if (!this.action) {
      return true;
    }

    var i = this.action.lastIndexOf('/');
    if (i == -1) {
      return true;
    }

    var path = this.action.substring(i + 1);
    if (!app[path]) {
      return true;
    }

    this.action = this.action.substring(0, i) + app[path];
  });

  $('[data-page-url]').each(function () {
    var pageUrl = $(this).data('pageUrl');
    if (!pageUrl) {
      return true;
    }

    var i = pageUrl.lastIndexOf('/');
    if (i == -1) {
      return true;
    }

    var path = pageUrl.substring(i + 1);
    if (!app[path]) {
      return true;
    }

    $(this).data('pageUrl', pageUrl.substring(0, i) + app[path]);
  });

  String.prototype.format = function() {
    var args = arguments;
    if (/\{(\d+)\}/g.test(this)) {
      return this.replace(/\{(\d+)\}/g, function(match, name) {
        return args[name];
      });
    }

    if (typeof(args[0]) == 'object') {
      var param = args[0];
      return this.replace(/\{([\w]+)\}/g, function(match, name){
        return param[name];
      });
    }

    var i = 0;
    return this.replace(/\{(\w+)\}/g, function(){
      return args[i++];
    });
  };

} (window.jQuery, window.app);