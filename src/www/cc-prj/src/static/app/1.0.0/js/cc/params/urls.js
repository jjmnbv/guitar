+ function ($, app) {
  "use strict ";

  $.extend(app, {

	/*
	 * 币种信息
	 */
	  
    PARCURTYP_PAGE: app.base + '/cc/params/parcurtyp/page',
    PARCURTYP_VIEW: app.base + '/cc/params/parcurtyp/view/',
    PARCURTYP_LIST: app.base + '/cc/params/parcurtyp/list',
    PARCURTYP_CREATE: app.base + '/cc/params/parcurtyp/create',
    PARCURTYP_UPDATE: app.base + '/cc/params/parcurtyp/update',
    PARCURTYP_REMOVE: app.base + '/cc/params/parcurtyp/remove/',
    PARCURTYP_NOTEXISTS: app.base + '/cc/params/parcurtyp/notexists',

    /**
     * 还款方式配置字表
     */
    PARPAYCFG_PAGE: app.base + '/cc/params/parpaycfg/page',
    PARPAYCFG_VIEW: app.base + '/cc/params/parpaycfg/view/',
    PARPAYCFG_LIST: app.base + '/cc/params/parpaycfg/list',
    PARPAYCFG_CREATE: app.base + '/cc/params/parpaycfg/create',
    PARPAYCFG_UPDATE: app.base + '/cc/params/parpaycfg/update',
    PARPAYCFG_REMOVE: app.base + '/cc/params/parpaycfg/remove/',
    PARPAYCFG_NOTEXISTS: app.base + '/cc/params/parpaycfg/notexists',

    PARPAYCFGDTL_PAGE: app.base + '/cc/params/parpaycfgdtl/page',
    PARPAYCFGDTL_VIEW: app.base + '/cc/params/parpaycfgdtl/view',
    PARPAYCFGDTL_LIST: app.base + '/cc/params/parpaycfgdtl/list',
    PARPAYCFGDTL_CREATE: app.base + '/cc/params/parpaycfgdtl/create',
    PARPAYCFGDTL_UPDATE: app.base + '/cc/params/parpaycfgdtl/update',
    PARPAYCFGDTL_REMOVE: app.base + '/cc/params/parpaycfgdtl/remove',
    PARPAYCFGDTL_NOTEXISTS: app.base + '/cc/params/parpaycfgdtl/notexists',
    PARPAYCFGDTL_PRPCTNUM:app.base + '/cc/params/parpaycfgdtl/prpctnum',
    /*PARPAYCFGDTL_REMOVEPRPCTNUM:app.base+'/params/parpaycfgdtl/removeprpctnum/',*/

    /*
     * 还款顺序
     */
    PARPAYORD_PAGE: app.base + '/cc/params/parpayord/page',
    PARPAYORD_VIEW: app.base + '/cc/params/parpayord/view/',
    PARPAYORD_LIST: app.base + '/cc/params/parpayord/list',
    PARPAYORD_CREATE: app.base + '/cc/params/parpayord/create',
    PARPAYORD_UPDATE: app.base + '/cc/params/parpayord/update',
    PARPAYORD_REMOVE: app.base + '/cc/params/parpayord/remove/',
    PARPAYORD_NOTEXISTS: app.base + '/cc/params/parpayord/notexists',

    PARPAYORDDTL_PAGE: app.base + '/cc/params/parpayorddtl/page',
    PARPAYORDDTL_VIEW: app.base + '/cc/params/parpayorddtl/view',
    PARPAYORDDTL_LIST: app.base + '/cc/params/parpayorddtl/list',
    PARPAYORDDTL_CREATE: app.base + '/cc/params/parpayorddtl/create',
    PARPAYORDDTL_UPDATE: app.base + '/cc/params/parpayorddtl/update',
    PARPAYORDDTL_REMOVE: app.base + '/cc/params/parpayorddtl/remove',
    PARPAYORDDTL_NOTEXISTS: app.base + '/cc/params/parpayorddtl/notexists',
    PARPAYORDDTL_PAYPROISUNIQ:app.base + '/cc/params/parpayorddtl/payproisuniq',

    /**
     * 基准利率分类管理
     */
    PARRATTYP_PAGE: app.base + '/cc/params/parrattyp/page',
    PARRATTYP_VIEW: app.base + '/cc/params/parrattyp/view/',
    PARRATTYP_LIST: app.base + '/cc/params/parrattyp/list',
    PARRATTYP_CREATE: app.base + '/cc/params/parrattyp/create',
    PARRATTYP_UPDATE: app.base + '/cc/params/parrattyp/update',
    PARRATTYP_REMOVE: app.base + '/cc/params/parrattyp/remove/',
    PARRATTYP_NOTEXISTS: app.base + '/cc/params/parrattyp/notexists',
    PARRATTYP_TIMEZONEISCONTIONE: app.base + '/cc/params/parrattyp/timezoneiscontinue',
    
    PARRATINF_PAGE: app.base + '/cc/params/parratinf/page',
    PARRATINF_VIEW: app.base + '/cc/params/parratinf/view',
    PARRATINF_LIST: app.base + '/cc/params/parratinf/list',
    PARRATINF_CREATE: app.base + '/cc/params/parratinf/create',
    PARRATINF_UPDATE: app.base + '/cc/params/parratinf/update',
    PARRATINF_REMOVE: app.base + '/cc/params/parratinf/remove',
    PARRATINF_NOTEXISTS: app.base + '/cc/params/parratinf/notexists',
  

    /**
     *流水信息表管理 
     */
    PARSEQINF_PAGE: app.base + '/cc/params/parseqinf/page',
    PARSEQINF_VIEW: app.base + '/cc/params/parseqinf/view/',
    PARSEQINF_LIST: app.base + '/cc/params/parseqinf/list',
    PARSEQINF_CREATE: app.base + '/cc/params/parseqinf/create',
    PARSEQINF_UPDATE: app.base + '/cc/params/parseqinf/update',
    PARSEQINF_REMOVE: app.base + '/cc/params/parseqinf/remove/',
    PARSEQINF_FINDCURSEQNUM : app.base + '/cc/params/parseqinf/findCurSeqNum/',
    PARSEQINF_FINDNEXTSEQNUM : app.base + '/cc/params/parseqinf/findNextSeqNum/',
    /*PARSEQINF_NOTEXISTS: app.base + '/cc/params/parseqinf/notexists',*/

    /**
     * 交易码配置管理
     */
    PARTRCFG_PAGE: app.base + '/cc/params/partrcfg/page',
    PARTRCFG_VIEW: app.base + '/cc/params/partrcfg/view/',
    PARTRCFG_LIST: app.base + '/cc/params/partrcfg/list',
    PARTRCFG_CREATE: app.base + '/cc/params/partrcfg/create',
    PARTRCFG_UPDATE: app.base + '/cc/params/partrcfg/update',
    PARTRCFG_REMOVE: app.base + '/cc/params/partrcfg/remove/',
    PARTRCFG_NOTEXISTS: app.base + '/cc/params/partrcfg/notexists',
    
    /**
     * 字典信息配置管理
     */
    CSDICFG_PAGE: app.base + '/cc/params/csdicfg/page',
    CSDICFG_VIEW: app.base + '/cc/params/csdicfg/view/',
    CSDICFG_LIST: app.base + '/cc/params/csdicfg/list',
    CSDICFG_CREATE: app.base + '/cc/params/csdicfg/create',
    CSDICFG_UPDATE: app.base + '/cc/params/csdicfg/update',
    CSDICFG_REMOVE: app.base + '/cc/params/csdicfg/remove/',
    CSDICFG_NOTEXISTS: app.base + '/cc/params/csdicfg/notexists',
    CSDICFG_QUERYRSTLIST: app.base + '/cc/params/csdicfg/queryRstList',
    /**
     * 节假日管理
     */
    PARHOLDAYCFG_PAGE: app.base + '/cc/params/parholdaycfg/page',
    PARHOLDAYCFG_VIEW: app.base + '/cc/params/parholdaycfg/view/',
    PARHOLDAYCFG_LIST: app.base + '/cc/params/parholdaycfg/list',
    PARHOLDAYCFG_CREATE: app.base + '/cc/params/parholdaycfg/create',
    PARHOLDAYCFG_UPDATE: app.base + '/cc/params/parholdaycfg/update/',
    PARHOLDAYCFG_REMOVE: app.base + '/cc/params/parholdaycfg/remove/',
    PARHOLDAYCFG_INITWEEKS: app.base + '/cc/params/parholdaycfg/initweeks/',
    PARHOLDAYCFG_SELECTTHISMONTHHOLDAY: app.base + '/cc/params/parholdaycfg/selectthismonthholday/',
    //PARHOLDAYCFG_NOTEXISTS: app.base + '/cc/params/parholdaycfg/notexishts'
    
    /**
     * 核算规则管理
     */
    PARLNRULE_PAGE: app.base + '/cc/params/parlnrule/page',
    PARLNRULE_VIEW: app.base + '/cc/params/parlnrule/view/',
    PARLNRULE_LIST: app.base + '/cc/params/parlnrule/list',
    PARLNRULE_CREATE: app.base + '/cc/params/parlnrule/create',
    PARLNRULE_UPDATE: app.base + '/cc/params/parlnrule/update',
    PARLNRULE_REMOVE: app.base + '/cc/params/parlnrule/remove/',
    PARLNRULE_NOTEXISTS: app.base + '/cc/params/parlnrule/notexists'
    
    
    
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

} (window.jQuery, window.app);