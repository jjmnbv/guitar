+function ($, app) {
    "use strict ";

    $.extend(app, {
            WAITING: app.base + '/cs/index/waiting',
            WARNING: app.base + '/cs/index/warning',
            NOTICE: app.base + '/cs/index/notice'
        },
        {
            /*  材料设置的列表  */
            MATERIAL_SETTING_LIST: app.base + '/cs/loanmaterialset/page',
            /*  通过id查找材料设置数据   */
            GET_DATA_BY_ID: app.base + '/cs/loanmaterialset/view/',
            /*   提交新增的材料设置记录   */
            COMMIT_MATERIAL_ADD_DATA: app.base + '/cs/loanmaterialset/create',
            /*   提交修改的材料设置记录   */
            COMMIT_MATERIAL_UPDATE_DATA: app.base + '/cs/loanmaterialset/update',
            /*   提交复制的材料设置记录   */
            COMMIT_MATERIAL_COPY_DATA: app.base + '/cs/loanmaterialset/copy',
            /*   提交删除的材料设置记录   */
            MATERIAL_DELETE_DATA: app.base + '/cs/loanmaterialset/remove/',
            /*   提交激活的材料设置记录   */
            MATERIAL_ACTIVE_DATA: app.base + '/cs/loanmaterialset/status/1',
            /*   提交失效的材料设置记录   */
            MATERIAL_UN_ACTIVE_DATA: app.base + '/cs/loanmaterialset/status/0',
            /*   材料自动获取编码       */
            MAT_SET_CODE:app.base + '/cs/loanmaterialset/code',
            /*  材料设计的列表  */
            MATERIAL_DESIGN_LIST: app.base + '/cs/loanmaterialsetsub/page',
            /*  通过id查找材料设计数据   */
            GET_DESIGN_DATA_BY_ID: app.base + '/cs/loanmaterialsetsub/view',
            /*   提交材料设计新增的材料记录   */
            COMMIT_MATERIAL_DESIGN_ADD_DATA: app.base + '/cs/loanmaterialsetsub/create',
            /*   提交材料设计修改的材料记录   */
            COMMIT_MATERIAL_DESIGN_UPDATE_DATA: app.base + '/cs/loanmaterialsetsub/update',
            /*   提交材料设计复制的材料记录   */
            COMMIT_MATERIAL_DESIGN_COPY_DATA: app.base + '/cs/loanmaterialsetsub/copy',
            /*   提交材料设计删除的材料记录   */
            MATERIAL_DESIGN_DELETE_DATA: app.base + '/cs/loanmaterialsetsub/remove',
            /*   提交材料设计激活的材料记录   */
            MATERIAL_DESIGN_ACTIVE_DATA: app.base + '/cs/loanmaterialsetsub/status/1',
            /*   提交材料设计失效的材料记录   */
            MATERIAL_DESIGN_UN_ACTIVE_DATA: app.base + '/cs/loanmaterialsetsub/status/0',

            /*   基础材料设置       */
            BASE_MATERIAL_LIST:app.base + '/cs/loanmaterial/page',
            BASE_MATERIAL_CREATE:app.base + '/cs/loanmaterial/create',
            BASE_MATERIAL_UPDATE:app.base + '/cs/loanmaterial/update',
            BASE_MATERIAL_VIEW:app.base + '/cs/loanmaterial/view/',
            BASE_MATERIAL_REMOVE:app.base + '/cs/loanmaterial/remove/',
            BASE_MARERIAL_ACTIVE:app.base+ '/cs/loanmaterial/status/1',
			BASE_MARERIAL_UN_ACTIVE:app.base+ '/cs/loanmaterial/status/0',


            /*   个人白名单管理列表   */
            PERSON_WHITE_LIST: app.base + '/cs/csperwhb/page',
            /*   通过id获取个人白名单数据   */
            PERSON_WHITE_GET_DATA_BY_ID: app.base + '/cs/csperwhb/view',
            /*   个人白名单增加操作   */
            PERSON_WHITE_ADD: app.base + '/cs/csperwhb/create',
            /*   个人白名单修改操作   */
            PERSON_WHITE_UPDATE: app.base + '/cs/csperwhb/update',
            /*   个人白名单移出操作   */
            PERSON_WHITE_REMOVE: app.base + '/cs/csperwhb/remove',

            /*   个人灰名单管理列表   */
            PERSON_GRAY_LIST: app.base + '/cs/cspergreyb/page',
            /*   通过id获取个人灰名单数据   */
            PERSON_GRAY_GET_DATA_BY_ID: app.base + '/cs/cspergreyb/view',
            /*   个人灰名单增加操作   */
            PERSON_GRAY_ADD: app.base + '/cs/cspergreyb/create',
            /*   个人灰名单修改操作   */
            PERSON_GRAY_UPDATE: app.base + '/cs/cspergreyb/update',
            /*   个人灰名单转入操作   */
            PERSON_GRAY_JOIN: app.base + '/cs/cspergreyb/moveToCsPerBlB',
            /*   个人灰名单移出操作   */
            PERSON_GRAY_REMOVE: app.base + '/cs/cspergreyb/remove',

            /*   个人黑名单管理列表   */
            PERSON_BLACK_LIST: app.base + '/cs/csperblb/page',
            /*   通过id获取个人黑名单数据   */
            PERSON_BLACK_GET_DATA_BY_ID: app.base + '/cs/csperblb/view',
            /*   个人黑名单增加操作   */
            PERSON_BLACK_ADD: app.base + '/cs/csperblb/create',
            /*   个人黑名单修改操作   */
            PERSON_BLACK_UPDATE: app.base + '/cs/csperblb/update',
            /*   个人黑名单转入操作   */
            PERSON_BLACK_JOIN: app.base + '/cs/csperblb/moveToCsPerGeryB',
            /*   个人黑名单移出操作   */
            PERSON_BLACK_REMOVE: app.base + '/cs/csperblb/remove',


            /*   合作方黑名单列表   */
            PARTNER_BLACK_LIST: app.base + '/cs/corpblack/page',
            PARTNER_BLACK_GET_DATA_BY_ID: app.base + '/cs/corpblack/view',
            PARTNER_BLACK_ADD: app.base + '/cs/corpblack/create',
            PARTNER_BLACK_UPDATE: app.base + '/cs/corpblack/update',
            PARTNER_BLACK_REMOVE: app.base + '/cs/corpblack/remove',
            PARTNER_BLACK_JOIN: app.base + '/cs/corpblack/transIn',
            /*   合作方白名单列表   */
            PARTNER_WHITE_LIST: app.base + '/cs/corpwhite/page',
            PARTNER_WHITE_GET_DATA_BY_ID: app.base + '/cs/corpwhite/view',
            PARTNER_WHITE_ADD: app.base + '/cs/corpwhite/create',
            PARTNER_WHITE_UPDATE: app.base + '/cs/corpwhite/update',
            PARTNER_WHITE_REMOVE: app.base + '/cs/corpwhite/remove',
            /*   合作方灰名单列表   */
            PARTNER_GRAY_LIST: app.base + '/cs/corpgrey/page',
            PARTNER_GRAY_GET_DATA_BY_ID: app.base + '/cs/corpgrey/view',
            PARTNER_GRAY_ADD: app.base + '/cs/corpgrey/create',
            PARTNER_GRAY_UPDATE: app.base + '/cs/corpgrey/update',
            PARTNER_GRAY_REMOVE: app.base + '/cs/corpgrey/remove',
            PARTNER_GRAY_JOIN: app.base + '/cs/corpgrey/transIn',

            /*黑白灰名单远程校验*/
            PAERTNER_BLACK_EXISTS:app.base+'/cs/corpblack/exist',
            PAERTNER_WHITE_EXISTS:app.base+'/cs/corpwhite/exist',
            PAERTNER_GRAY_EXISTS:app.base+'/cs/corpgrey/exist',
            PERSON_BLACK_EXISTS:app.base+'/cs/csperblb/Exist',
            PERSON_WHITE_EXISTS:app.base+'/cs/csperwhb/exist',
            PERSON_GRAY_EXISTS:app.base+'/cs/cspergreyb/exist',
        },
        {
            /*-----合作商-------------*/
            ORGANIZATION: app.base + '/cs/cscoocub/getCustomers/',
            MANAGER: app.base + '/cs/business-partner/manager',

            PARTNERLIST: app.base + '/cs/cscoocub/page',
            ADD_PARTNER:app.base + '/cs/cscoocub/create',
            UPDATE_PARTNER:app.base + '/cs/cscoocub/updateCsCooCuB',
            FIND_BY_ID:app.base + '/cs/cscoocub/view/',


            PARTNER_DEL: app.base + '/cs/business-partner/partner-list/del.json',
            PARTNER_ACTIVE: app.base + '/cs/business-partner/partner-list/active.json',
            PARTNER_UNACTIVE: app.base + '/cs/cscoocob/updateCsCooCuBSXStatus',

            /*-----门店--------*/
            ADD_STORE:app.base + '/cs/cscoocub/createMDCsCooCuB',
            UPDATA_STORE:app.base + '/cs/cscoocub/updateMDCsCooCuB',
            STORELIST: app.base + '/cs/cscoocub/mdpage',
            STORE_DETAILS:app.base + '/cs/cscoocub/mdview/',
            GET_STORE_ACCOUNT_BY_COONO:app.base + '/cs/cscoocub/view/',

            PARTNER: app.base + '/cs/store/partner',

            COPY_STORE:app.base + '/cs/store/add-store/commitCopyData.json',
            STORE_DEL: app.base + '/cs/business-partner/partner-list/del.json',
            STORE_ACTIVE: app.base + '/cs/business-partner/partner-list/active.json',
            STORE_UNACTIVE: app.base + '/cs/business-partner/partner-list/unActive.json',
            /*----佣金配置----*/
            BROKERAGE_DELETE:app.base + '/cs/commission/remove',
            BROKERAGE_LIST:app.base + '/cs/commission/page',
            ADD_BROKERAGE:app.base + '/cs/commission/create',
            UPDATA_BROKERAGE:app.base +'/cs/commission/update',
            BROKERAGE_VIEW:app.base+'/cs/commission/view/',

            /*------额度审批配置--------*/
            LIMIT_LIST:app.base + '/cs/lotusamount/page',
            ADD_LIMIT:app.base + '/cs/lotusamount/create',
            DELETE_LIMIT:app.base + '/cs/lotusamount/remove/',
            UPDATE_LIMIT:app.base + '/cs/lotusamount/update',
            LIMIT_VIEW:app.base + '/cs/lotusamount/view/',

            /*---------试算---------*/
            TRIAL_LIST:app.base+'/cs/csfetys/page',
            LOAD_PRODUCT:app.base+'/cs/csfetys/listCsLoTyAccSByCooNo',
            REPAYMENT_WAY:app.base+'/cs/csfetys/listPmIdByLoTyId',
            LOAD_MATURITY:app.base+'/cs/csfetys/listPlOpByLoTyId',

            /*打印模板集自动生成编号*/
            PRINTTEMPLATESET_CODE:app.base+'/cs/printtemplateset/code',
            /*产品设置自动生成编号*/
            LOANTYPE_CODE:app.base+'/cs/loantype/code',
            /*基础材料配置生成编号*/
            LOANMATERIAL_CODE:app.base+'/cs/loanmaterial/code',
            /*额度审批生成编号*/
            LOTUSAMOUNT_CODE:app.base+'/cs/lotusamount/code',
            /*还款方式生成编码*/
            PAYMENTMETHOD_CODE:app.base+'/cs/paymentmethod/code',
            /*打印模板自动生成编号*/
            PRINTTEMPLATE_CODE:app.base+'/cs/printtemplate/code',


            /*开户银行管理*/
            OPEN_ACCOUNT_BANK:app.base+'/cs/csacbankc/page',
            ACCOUNT_BANK_CREATE:app.base+'/cs/csacbankc/create',
            ACCOOUNT_BANK_UPDATE:app.base+'/cs/csacbankc/update',
            ACCOUNT_BANK_VIEW:app.base+'/cs/csacbankc/view/',
            ACCOUNT_BANK_REMOVE:app.base+'/cs/csacbankc/remove/',
            ACCOUNT_BANK_ACTIVE:app.base+'/cs/csacbankc/update/status/1',
            ACCOUNT_BANK_UNACTIVE:app.base+'/cs/csacbankc/update/status/0',
            ACCOUNT_BANKCODE_EXISTS:app.base+'/cs/csacbankc/exist',
			ACCOUNT_BANKCODE_CARDBINNOCHECK:app.base+'/cs/csacbankc/cardBinNoCheck',


            /*开户机构管理*/
            OPEN_ACCOUNT_ORGANIZATION:app.base+'/cs/csacbanksuc/page',
            ACCOUNT_ORGANIZATION_CREATE:app.base+'/cs/csacbanksuc/create',
            ACCOUNT_ORGANIZATION_UPDATE:app.base+'/cs/csacbanksuc/update',
            ACCOUNT_ORGANIZATION_VIEW:app.base+'/cs/csacbanksuc/view/',
            ACCOUNT_ORGANIZATION_REMOVE:app.base+'/cs/csacbanksuc/remove/',
            ACCOUNT_ORGANIZATIONCODE_EXISTS:app.base+'/cs/csacbanksuc/exist',
			ACCOUNT_ORGANIZATION_CARDBINNOCHECK:app.base+'/cs/csacbanksuc/cardBinNoCheck',

            /*门店和合作商卡BIN*/
            CARDBIN:app.base+'/cs/csacbankc/findCsacbankc'


        }, {
            DICTIONARY_PAGE: app.base + '/cs/dictionary/page',
            DICTIONARY_VIEW: app.base + '/cs/dictionary/view.json',
            DICTIONARY_NOTEXISTS: app.base + '/cs/dictionary/notexists.json',
            DICTIONARY_CREATE: app.base + '/cs/dictionary/create.json',
            DICTIONARY_UPDATE: app.base + '/cs/dictionary/update.json',
            DICTIONARY_REMOVE: app.base + '/cs/dictionary/remove.json',
            DICTIONARYCATEGORY_LIST: app.base + '/cs/dictionaryCategory/list.json',
            DICTIONARYCATEGORY_PAGE: app.base + '/cs/dictionaryCategory/page',
            DICTIONARYCATEGORY_VIEW: app.base + '/cs/dictionaryCategory/view/',
            DICTIONARYCATEGORY_NOTEXISTS: app.base + '/cs/dictionaryCategory/notexists.json',
            DICTIONARYCATEGORY_NOTEXISTSID: app.base + '/cs/dictionaryCategory/notexistsId.json',
            DICTIONARYCATEGORY_CREATE: app.base + '/cs/dictionaryCategory/create.json',
            DICTIONARYCATEGORY_UPDATE: app.base + '/cs/dictionaryCategory/update.json',
            DICTIONARYCATEGORY_REMOVE: app.base + '/cs/dictionaryCategory/remove/',
        }, {
            PRINTTEMPLATESET_PAGE: app.base + '/cs/printtemplateset/page',
            PRINTTEMPLATESET_VIEW: app.base + '/cs/printtemplateset/view/',
            PRINTTEMPLATESET_LIST: app.base + '/cs/printtemplateset/list',
            PRINTTEMPLATESET_CREATE: app.base + '/cs/printtemplateset/create',
            PRINTTEMPLATESET_COPY: app.base + '/cs/printtemplateset/copy',
            PRINTTEMPLATESET_UPDATE: app.base + '/cs/printtemplateset/update',
            PRINTTEMPLATESET_REMOVE: app.base + '/cs/printtemplateset/remove/',
            PRINTTEMPLATESET_upload:app.base + '/cs/printtemplate/uploadFile',
            PRINTTEMPLATESET_NOTEXISTS: app.base + '/cs/printtemplateset/notexists',
            PRINTTEMPLATE_PREVIEW: app.base + '/cs/preview/printtemplate',
            PRINTTEMPLATE_EXPORTPDF: app.base + '/cs/printtemplate/exportpdf',

            PRINTTEMPLATE_PAGE: app.base + '/cs/printtemplate/page',
            PRINTTEMPLATE_VIEW: app.base + '/cs/printtemplate/view',
            PRINTTEMPLATE_LIST: app.base + '/cs/printtemplate/list',
            PRINTTEMPLATE_CREATE: app.base + '/cs/printtemplate/create',
            PRINTTEMPLATE_UPDATE: app.base + '/cs/printtemplate/update',
            PRINTTEMPLATE_REMOVE: app.base + '/cs/printtemplate/remove',
            PRINTTEMPLATE_NOTEXISTS: app.base + '/cs/printtemplate/notexists'
        },{
            /*  通过id查找产品设置数据   */
            LOANTYPE: app.base + '/cs/loantype/page',
            GET_SET_DATA_BY_ID: app.base + '/cs/loantype/view',
            COMMIT_PRODUCT_SET_ADD_DATA: app.base + '/cs/loantype/create',
            COMMIT_PRODUCT_SET_UPDATE_DATA: app.base + '/cs/loantype/update',
            COMMIT_PRODUCT_SET_DETAIL_DATA: app.base + '/cs/loantype/createotherversion',
            COMMIT_PRODUCT_SET_REALEASE_DATA: app.base + '/cs/loantype/releasenewloantype',
            COMMIT_PRODUCT_SET_CASH_DATA: app.base + '/cs/loantype/cache',
            COMMIT_PRODUCT_SET_COPY_DATA: app.base + '/cs/loantype/copy',
            PRODUCT_SET_DELETE_DATA: app.base + '/cs/loantype/remove',
            PRODUCT_SET_ACTIVE_DATA: app.base + '/cs/loantype/updatestatus/1',
            PRODUCT_SET_UN_ACTIVE_DATA: app.base + '/cs/loantype/updatestatus/0',
            GET_PRO_DATA_BY_ID: app.base + '/cs/lotyproms/view',
            COMMIT_PROMOTION_CASE_ADD: app.base + '/cs/lotyproms/save',
            COMMIT_PRODUCT_ADD_ISFINANCSEXIST: app.base + '/cs/loantype/isexist',
            TEMPLATE_SAVE_PRODUCT: app.base + '/cs/loantype/loantypesetaddcashe',
            COMMIT_PRODUCT_UPDATE_ISFINANCSEXIST: app.base + '/cs/loantype/updateisexists'
        },{ 
            /*  通过id查找还款方式数据   */
            REPAY_LIST: app.base + '/cs/paymentmethod/page',
            GET_REPAY_DATA_BY_ID: app.base + '/cs/paymentmethod/view/',
            COMMIT_REPAY_MODE_ADD_DATA: app.base + '/cs/paymentmethod/create',
            COMMIT_REPAY_MODE_UPDATE_DATA: app.base + '/cs/paymentmethod/update',
            REPAY_MODE_DELETE_DATA: app.base + '/cs/paymentmethod/remove/'
        },{
            /*  通过id查找费用计算数据   */
            COST_LIST: app.base + '/cs/feetype/page',
            GET_COST_DATA_BY_ID: app.base + '/cs/feetype/view',
            COMMIT_COST_ACCOUNT_ADD_DATA: app.base + '/cs/feetype/create',
            COMMIT_COST_ACCOUNT_UPDATE_DATA: app.base + '/cs/feetype/update',
            COST_ACCOUNT_DELETE_DATA: app.base + '/cs/feetype/remove',
            COST_ACCOUNT_ACTIVE_DATA: app.base + '/cs/feetype/updateJH',
            COST_ACCOUNT_UNACTIVE_DATA: app.base + '/cs/feetype/updateZF',
            COST_ACCOUNT_EXIST_DATA: app.base + '/cs/feetype/Exist',
            COST_ACCOUNT_EXIST_UPDATA: app.base + ' /cs/feetype/updateExist'


        },{
            /*  通过id查找费用子信息数据   */
            COST_SUB_LIST: app.base + '/cs/feetypesub/page',
            GET_COST_SUB_DATA_BY_ID: app.base + '/cs/feetypesub/view',
            COMMIT_COST_SUB_ADD_DATA: app.base + '/cs/feetypesub/create',
            COMMIT_COST_SUB_UPDATE_DATA: app.base + '/cs/feetypesub/update',
            COST_SUB_DELETE_DATA: app.base + '/cs/feetypesub/remove'
        },
        {
            /*  通过id查找电核设置数据   */
            NUCLEAR_LIST: app.base + '/cs/tellcheck/page',
            GET_NUCLEAR_DATA_BY_ID: app.base + '/cs/tellcheck/view/',
            COMMIT_NUCLEAR_SET_ADD_DATA: app.base + '/cs/tellcheck/create',
            COMMIT_NUCLEAR_SET_UPDATE_DATA: app.base + '/cs/tellcheck/update',
            NUCLEAR_SET_DELETE_DATA: app.base + '/cs/tellcheck/remove/',
            /*  电核设置设计保存和修改 */
            COMMIT_NUCLEAR_SET_SUB_ADD_DATA: app.base + '/cs/tellchecksub/create',
            COMMIT_NUCLEAR_SET_SUB_UPDATE_DATA: app.base + '/cs/tellchecksub/update',
            NUCLEAR_SET_SUB_DELETE_DATA: app.base + '/cs/tellchecksub/remove',
            NUCLEAR_ISDAIMA: app.base + '/cs/telcheckpercentsub/Exist',
            /*新增电核设置自动生成编号*/
            NUCLER_CODE:app.base+'/cs/telcheck/code',
            /*電核*/
            NUCLER_MODEL_LIST:app.base+'/script/cs/tellcheckdictionary'

           
        },{
            /*  通过id查找促销配置数据   */
            PROMOTION_LIST: app.base + '/cs/csproms/page',
            GET_PROMO_DATA_BY_ID: app.base + '/cs/csproms/view/',
            COMMIT_PROMOTION_ADD_DATA: app.base + '/cs/csproms/create',
            COMMIT_PROMOTION_UPDATE_DATA: app.base + '/cs/csproms/update',
            PROMOTION_DELETE_DATA: app.base + '/cs/csproms/remove',
            PROMOTION_NOTEXISTS: app.base + '/cs/csproms/notexists'
        },{
            /*  个人客户管理数据   */
            PERSONAL_LIST: app.base + '/cs/cscub/page',
            BASE_INFO: app.base + '/cs/cscub/view',
//          HISTORY_INFO: app.base + '/cs/cscub/view/',
//          PIC_INFO: app.base + '/cs/cscub/view/'
            /*个人客户管理修改*/
            SHOWUPDATELIST:app.base+'/cs/cscub/view',
            UPDATECUSTOMER:app.base+'/cs/cscub/status'
        },{

            TELCHECKPERCENT_PAGE: app.base + '/cs/telcheckpercent/page',
            TELCHECKPERCENT_VIEW: app.base + '/cs/telcheckpercent/view/',
            TELCHECKPERCENT_CREATE: app.base + '/cs/telcheckpercent/create',
            TELCHECKPERCENT_UPDATE: app.base + '/cs/telcheckpercent/update',
            TELCHECKPERCENT_REMOVE: app.base + '/cs/telcheckpercent/remove/',

            TELCHECKPERCENTSUB_PAGE: app.base + '/cs/telcheckpercentsub/page',
            TELCHECKPERCENTSUB_VIEW: app.base + '/cs/telcheckpercentsub/view',
            TELCHECKPERCENTSUB_CREATE: app.base + '/cs/telcheckpercentsub/create',
            TELCHECKPERCENTSUB_UPDATE: app.base + '/cs/telcheckpercentsub/update',
            TELCHECKPERCENTSUB_REMOVE: app.base + '/cs/telcheckpercentsub/remove'
        },{
            /* 放款机构  */
            /*放款机构配置页面*/
            LENDING_INSTITUTION_CONFIGURE: app.base + '/cs/csmabrtomlbrc/page',
            /*放款机构名称下拉框*/
            MABRLIST: app.base + '/cs/csmabrtomlbrc/AllMaBr',
            /*管理机构名称下拉框*/
            MLBRLIST: app.base + '/cs/csmabrtomlbrc/AllMlBr',
            /*保存*/
            LENDING_INSTITUTION_SAVE:app.base + '/cs/csmabrtomlbrc/create',
            /*删除*/
            LENDING_INSTITUTION_DELETE:app.base + '/cs/csmabrtomlbrc/remove/',
            /* 远程校验 管理机构名称 */
            MABRNA_ISEXIST:app.base + '/cs/csmabrtomlbrc/isexist',

            /*放款机构维护页面*/
            LENDING_INSTITUTION_SERVICE: app.base + '/cs/csmlbrc/page',
            /*删除*/
            LENDING_SERVICE_DELETE: app.base + '/cs/csmlbrc/remove/',
            /*保存*/
            LENDING_SERVICE_SAVE: app.base + '/cs/csmlbrc/create',
            /*修改*/
            LENDING_SERVICE_UPDATE: app.base + '/cs/csmlbrc/update',
            /*放款机构名称下拉框*/
            SERVICE_BRNOLIST: app.base + '/cs/csmlbrc/AllJhCuBrs',
            /* 远程校验 放款机构名称 */
            BRNO_ISEXIST:app.base + '/cs/csmlbrc/isexist',

            },
            {
            /*合同列表页*/
            CONTRACT_LIST: app.base + '/cs/cslocob/page',
            /*合同详情页*/
            CONTRACT_DETILES: app.base + ' /cs/cslocob/view/',
            /*合同详情页模态框1*/
            CONTRACT_DETILES_MODEL_ONE: app.base + '/cs/cslofeb/view/',
            /*合同详情页模态框2*/
            CONTRACT_DETILES_MODEL_TWO: app.base + '/cs/cslopmb/view/',

            /*合同日志*/
            CONTRACT_LOG:app.base + ' /cs/cslocol/page',
            /*合同日志模态框*/
            CONTRACT_LOG_MODEL:app.base + '/cs/cslocol/view'

            },
            /*  工单配置模块   */
           {
            WORKORDER_LIST: app.base + '/cs/cswoos/page',
            GET_WORKORDER_BY_ID: app.base + '/cs/cswoos/view/',
            COMMIT_WORKORDER_ADD_DATA: app.base + '/cs/cswoos/create',
            COMMIT_WORKORDER_UPDATE_DATA: app.base + '/cs/cswoos/update',
            WORKORDER_DELETE_DATA: app.base + '/cs/cswoos/remove/',
            WORK_ORDER_EXIST_DATA:app.base + '/cs/cswoos/notexists.json'
            },
            /*  用户工单配置模块   */
           {
            USER_WORKORDER_LIST: app.base + '/cs/cswoouss/page',
            GET_USER_WORKORDER_BY_ID: app.base + '/cs/cswoouss/view',
            COMMIT_USER_WORKORDER_ADD_DATA: app.base + '/cs/cswoouss/create',
            COMMIT_USER_WORKORDER_SET_DATA: app.base + '/cs/cswoouss/update',
            USER_WORKORDER_DELETE_DATA: app.base + '/cs/cswoouss/remove'
            },
            /*  用户工单配置模块新增   */
           {
            ADD_USER_WORKORDER_LIST: app.base + '/cs/cswoouss/user/page'
            }
            
    );

    // $(function () {
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
    // });

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

}(window.jQuery, window.app);