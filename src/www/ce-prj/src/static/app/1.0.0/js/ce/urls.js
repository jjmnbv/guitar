+ function ($, app) {
  "use strict ";

  $.extend(app, {

    CEACINF_PAGE: app.base + '/ce/ceacinf/page',
    CEACINF_VIEW: app.base + '/ce/ceacinf/view/',
    CEACINF_LIST: app.base + '/ce/ceacinf/list.json',
    CEACINF_CREATE: app.base + '/ce/ceacinf/create.json',
    CEACINF_REMOVE: app.base + '/ce/ceacinf/remove/',
    CEACINF_UPDATE: app.base + '/ce/ceacinf/update.json',

    CEBRINF_PAGE: app.base + '/ce/cebrinf/page',
    CEBRINF_VIEW: app.base + '/ce/cebrinf/view/',
    CEBRINF_LIST: app.base + '/ce/cebrinf/list.json',
    CEBRINF_CREATE: app.base + '/ce/cebrinf/create.json',
    CEBRINF_UPDATE: app.base + '/ce/cebrinf/update.json',
    CEBRINF_REMOVE: app.base + '/ce/cebrinf/remove/',

    CEFADICO_PAGE: app.base + '/ce/cefadico/page',
    CEFADICO_VIEW: app.base + '/ce/cefadico/view/',
    CEFADICO_LIST: app.base + '/ce/cefadico/list.json',
    CEFADICO_CREATE: app.base + '/ce/cefadico/create.json',
    CEFADICO_UPDATE: app.base + '/ce/cefadico/update.json',
    CEFADICO_REMOVE: app.base + '/ce/cefadico/remove/',

    CEMLAP_PAGE: app.base + '/ce/cemlap/page',
    CEMLAP_VIEW: app.base + '/ce/cemlap/view/',
    CEMLAP_LIST: app.base + '/ce/cemlap/list.json',
    CEMLAP_CREATE: app.base + '/ce/cemlap/create.json',
    CEMLAP_UPDATE: app.base + '/ce/cemlap/update.json',
    CEMLAP_REMOVE: app.base + '/ce/cemlap/remove/',
    CEMLAP_MLAP: app.base + '/ce/cemlap/mlap/',

    CEMLAP_L_PAGE: app.base + '/ce/cemlapl/page',
    CEMLAP_L_VIEW: app.base + '/ce/cemlapl/view/',
    CEMLAP_L_LIST: app.base + '/ce/cemlapl/list.json',
    CEMLAP_L_CREATE: app.base + '/ce/cemlapl/create.json',
    CEMLAP_L_UPDATE: app.base + '/ce/cemlapl/update.json',
    CEMLAP_L_REMOVE: app.base + '/ce/cemlapl/remove/',

    CEMLAP_T_PAGE: app.base + '/ce/cemlapt/page',
    CEMLAP_T_VIEW: app.base + '/ce/cemlapt/view/',
    CEMLAP_T_LIST: app.base + '/ce/cemlapt/list.json',
    CEMLAP_T_CREATE: app.base + '/ce/cemlapt/create.json',
    CEMLAP_T_UPDATE: app.base + '/ce/cemlapt/update.json',
    CEMLAP_T_REMOVE: app.base + '/ce/cemlapt/remove/',

    CEPAUS_PAGE: app.base + '/ce/cepaus/page',
    CEPAUS_VIEW: app.base + '/ce/cepaus/view/',
    CEPAUS_LIST: app.base + '/ce/cepaus/list.json',
    CEPAUS_CREATE: app.base + '/ce/cepaus/create.json',
    CEPAUS_UPDATE: app.base + '/ce/cepaus/update.json',
    CEPAUS_REMOVE: app.base + '/ce/cepaus/remove/',

    CEPAUSFA_PAGE: app.base + '/ce/cepausfa/page',
    CEPAUSFA_VIEW: app.base + '/ce/cepausfa/view/',
    CEPAUSFA_LIST: app.base + '/ce/cepausfa/list.json',
    CEPAUSFA_CREATE: app.base + '/ce/cepausfa/create.json',
    CEPAUSFA_UPDATE: app.base + '/ce/cepausfa/update.json',
    CEPAUSFA_REMOVE: app.base + '/ce/cepausfa/remove/',

    CEPAUSSU_PAGE: app.base + '/ce/cepaussu/page',
    CEPAUSSU_VIEW: app.base + '/ce/cepaussu/view/',
    CEPAUSSU_LIST: app.base + '/ce/cepaussu/list.json',
    CEPAUSSU_CREATE: app.base + '/ce/cepaussu/create.json',
    CEPAUSSU_UPDATE: app.base + '/ce/cepaussu/update.json',
    CEPAUSSU_REMOVE: app.base + '/ce/cepaussu/remove/',

    CEPAUS_T_PAGE: app.base + '/ce/cepaust/page',
    CEPAUS_T_VIEW: app.base + '/ce/cepaust/view/',
    CEPAUS_T_LIST: app.base + '/ce/cepaust/list.json',
    CEPAUS_T_CREATE: app.base + '/ce/cepaust/create.json',
    CEPAUS_T_UPDATE: app.base + '/ce/cepaust/update.json',
    CEPAUS_T_REMOVE: app.base + '/ce/cepaust/remove/',

    CEPAYINF_L_PAGE: app.base + '/ce/cepayinfl/page',
    CEPAYINF_L_VIEW: app.base + '/ce/cepayinfl/view/',
    CEPAYINF_L_LIST: app.base + '/ce/cepayinfl/list.json',
    CEPAYINF_L_CREATE: app.base + '/ce/cepayinfl/create.json',
    CEPAYINF_L_UPDATE: app.base + '/ce/cepayinfl/update.json',
    CEPAYINF_L_REMOVE: app.base + '/ce/cepayinfl/remove/',

    CERENO_PAGE: app.base + '/ce/cereno/page',
    CERENO_VIEW: app.base + '/ce/cereno/view/',
    CERENO_LIST: app.base + '/ce/cereno/list.json',
    CERENO_CREATE: app.base + '/ce/cereno/create.json',
    CERENO_UPDATE: app.base + '/ce/cereno/update.json',
    CERENO_REMOVE: app.base + '/ce/cereno/remove/',

    CESTRADEP_PAGE: app.base + '/ce/cestradep/page',
    CESTRADEP_VIEW: app.base + '/ce/cestradep/view/',
    CESTRADEP_LIST: app.base + '/ce/cestradep/list.json',
    CESTRADEP_CREATE: app.base + '/ce/cestradep/create.json',
    CESTRADEP_UPDATE: app.base + '/ce/cestradep/update.json',
    CESTRADEP_REMOVE: app.base + '/ce/cestradep/remove/',

    CESUDICO_PAGE: app.base + '/ce/cesudico/page',
    CESUDICO_VIEW: app.base + '/ce/cesudico/view/',
    CESUDICO_LIST: app.base + '/ce/cesudico/list.json',
    CESUDICO_CREATE: app.base + '/ce/cesudico/create.json',
    CESUDICO_UPDATE: app.base + '/ce/cesudico/update.json',
    CESUDICO_REMOVE: app.base + '/ce/cesudico/remove/',

    CESYSDEP_PAGE: app.base + '/ce/cesysdep/page',
    CESYSDEP_VIEW: app.base + '/ce/cesysdep/view/',
    CESYSDEP_LIST: app.base + '/ce/cesysdep/list.json',
    CESYSDEP_CREATE: app.base + '/ce/cesysdep/create.json',
    CESYSDEP_UPDATE: app.base + '/ce/cesysdep/update.json',
    CESYSDEP_REMOVE: app.base + '/ce/cesysdep/remove/',

    CEALLQUERY_PAGE: app.base + '/ce/ceallquery/page',
    CEALLQUERY_VIEW: app.base + '/ce/ceallquery/view/',
    CEALLQUERY_LIST: app.base + '/ce/ceallquery/list.json',
    CEALLQUERY_CREATE: app.base + '/ce/ceallquery/create.json',
    CEALLQUERY_UPDATE: app.base + '/ce/ceallquery/update.json',
    CEALLQUERY_REMOVE: app.base + '/ce/ceallquery/remove/',

    DETAILQUERY_PAGE: app.base + '/ce/detailquery/page',
    DETAILQUERY_VIEW: app.base + '/ce/detailquery/view/',
    DETAILQUERY_LIST: app.base + '/ce/detailquery/list.json',
    DETAILQUERY_CREATE: app.base + '/ce/detailquery/create.json',
    DETAILQUERY_UPDATE: app.base + '/ce/detailquery/update.json',
    DETAILQUERY_REMOVE: app.base + '/ce/detailquery/remove/',
    
    //文件读写规则
    CEFICFG_PAGE: app.base + '/ce/ceficfg/page',
    CEFICFG_VIEW: app.base + '/ce/ceficfg/view/',
    CEFICFG_LIST: app.base + '/ce/ceficfg/list.json',
    CEFICFG_CREATE: app.base + '/ce/ceficfg/create.json',
    CEFICFG_UPDATE: app.base + '/ce/ceficfg/update.json',
    CEFICFG_REMOVE: app.base + '/ce/ceficfg/remove/',

    CEFICOL_PAGE: app.base + '/ce/ceficol/page',
    CEFICOL_VIEW: app.base + '/ce/ceficol/view/',
    CEFICOL_LIST: app.base + '/ce/ceficol/list.json',
    CEFICOL_CREATE: app.base + '/ce/ceficol/create.json',
    CEFICOL_UPDATE: app.base + '/ce/ceficol/update.json',
    CEFICOL_REMOVE: app.base + '/ce/ceficol/remove/',
    CEFICOL_NOTEXISTS: app.base + '/ce/ceficol/notexists.json',

    CEFIHD_PAGE: app.base + '/ce/cefihd/page',
    CEFIHD_VIEW: app.base + '/ce/cefihd/view/',
    CEFIHD_LIST: app.base + '/ce/cefihd/list.json',
    CEFIHD_CREATE: app.base + '/ce/cefihd/create.json',
    CEFIHD_UPDATE: app.base + '/ce/cefihd/update.json',
    CEFIHD_REMOVE: app.base + '/ce/cefihd/remove/',

    CEFIRCD_PAGE: app.base + '/ce/cefircd/page',
    CEFIRCD_VIEW: app.base + '/ce/cefircd/view/',
    CEFIRCD_LIST: app.base + '/ce/cefircd/list.json',
    CEFIRCD_CREATE: app.base + '/ce/cefircd/create.json',
    CEFIRCD_UPDATE: app.base + '/ce/cefircd/update.json',
    CEFIRCD_REMOVE: app.base + '/ce/cefircd/remove/',
    
    CEROURULC_PAGE: app.base + '/ce/cerourulc/page',
    CEROURULC_VIEW: app.base + '/ce/cerourulc/view/',
    CEROURULC_LIST: app.base + '/ce/cerourulc/list.json',
    CEROURULC_CREATE: app.base + '/ce/cerourulc/create.json',
    CEROURULC_UPDATE: app.base + '/ce/cerourulc/update.json',
    CEROURULC_REMOVE: app.base + '/ce/cerourulc/remove/',
    CEROURULC_NOTEXISTS: app.base + '/ce/cerourulc/notexists.json',

	CETRACHAC_PAGE: app.base + '/ce/cetrachac/page',
    CETRACHAC_VIEW: app.base + '/ce/cetrachac/view/',
    CETRACHAC_LIST: app.base + '/ce/cetrachac/list.json',
    CETRACHAC_CREATE: app.base + '/ce/cetrachac/create.json',
    CETRACHAC_UPDATE: app.base + '/ce/cetrachac/update.json',
    CETRACHAC_REMOVE: app.base + '/ce/cetrachac/remove/',
    CETRACHAC_NOTEXISTS: app.base + '/ce/cetrachac/notexists.json',


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