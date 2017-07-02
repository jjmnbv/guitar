+function ($, app) {
    "use strict ";

    $.extend(app, {
       /*业务品种配置*/
            SERVICE_TYPE:app.base+"/cl/businesskinds/page/",
            SERVICE_CONFIG_VIEW:app.base+"/cl/businesskinds/view/",
            SERVICE_CONFIG_CRATE:app.base+"/cl/businesskinds/create",
            SERVICE_CONFIG_UPDATE:app.base+"/cl/businesskinds/update",
            SERVICE_CONFIG_REMOVE:app.base+"/cl/businesskinds/remove/",
       /*授信产品配置*/
            /*列表*/
            CREDIT_PRODUCT:app.base+"/cl/credittypesub/page/",
           /* CREDIT_PRODUCT:app.base+"/cl/credit-allocation/list",*/
            /*弹框 新增*/
            CREDIT_PORODUCT_CRATE:app.base+"/cl/credittypesub/create",
            /*弹框 回显*/
            CREDIT_PORODUCT_VIEW:app.base+"/cl/credittypesub/view/",
            /*弹框 修改*/
            CREDIT_PORODUCT_UPDATE:app.base+"/cl/credittypesub/update",
            /*删除*/
            CREDIT_PORODUCT_DELETE:app.base+"/cl/credittypesub/remove/",
            /*二级 弹框 树*/
         /*  CREDIT_PORODUCT_TREE:app.base+"/cl/credit-allocation/tree.json",*/
            CREDIT_PORODUCT_TREE:app.base+"/script/cl/addcredittype",  //可编辑树
            CREDIT_PORODUCT_TREE_UNDO:app.base+"/script/cl/addnoteditcredittype",  //不可编辑树

            /*二级 弹框 列表*/
            /* CREDIT_PORODUCT_MODAL_LIST:app.base+"/cl/credit-allocation/modal-list/0"*/
             CREDIT_PORODUCT_MODAL_LIST:app.base+"/script/cl/addbusinessindex"
        },{
        /*授信品种配置*/
            CREDIT_TYPE:app.base+"/cl/credittype/page/",
            CREDIT_TYPE_ADD:app.base+"/script/cl/addcredittype",
            CREDIT_TYPE_EDIT:app.base+"/script/cl/editcredittype",
            CREDIT_TYPE_VIEW:app.base+"/cl/credittype/view/",
            CREDIT_TYPE_CRATE:app.base+"/cl/credittype/create",
            CREDIT_TYPE_UPDATE:app.base+"/cl/credittype/update",
            CREDIT_TYPE_REMOVE:app.base+"/cl/credittype/remove/"
      },{
//      指标集配置
            INDEX_SET_LIST: app.base + "/cl/indexsetcode/page/",
            INDEX_SET_ADD: app.base + "/cl/indexsetcode/create",
            INDEX_SET_VIEW: app.base + "/cl/indexsetcode/view/",
            INDEX_SET_UPDATE: app.base + "/cl/indexsetcode/update",
            INDEX_SET_REMOVE: app.base + "/cl/indexsetcode/remove/",
			INDEX_SET_EXIST: app.base + "/cl/indexsetcode/exist"
      },{
//      指标集编号配置
            INDEX_SET_NO_LIST: app.base + "/cl/indexset/page/",
            INDEX_SET_NO_ADD: app.base + "/cl/indexset/create",
            INDEX_SET_NO_VIEW: app.base + "/cl/indexset/view/",
            INDEX_SET_NO_UPDATE: app.base + "/cl/indexset/update",
            INDEX_SET_NO_REMOVE: app.base + "/cl/indexset/remove/",
            INDEX_SET_NO_SEARCH_BEFORE: app.base + "/cl/findIndexCode/",
            INDEX_SET_NO_SEARCH_JG:app.base + "/cl/cubrs/page/",
            INDEX_SET_NO_SEARCH_JL:app.base + "/cl/CuMnCuUs/page/",
            INDEX_SET_NO_SEARCH_KH:app.base + "/cl/csCuBs/page/",
            INDEX_SET_NO_SEARCH_SD:app.base + "/cl/csCoocuBs/page/",
            INDEX_SET_NO_SEARCH_CP:app.base + "/cl/loanType/page/",
            INDEX_SET_NO_SEARCH_HY:app.base + "/cl/industry/page/",
            INDEX_SET_NO_SEARCH_FK:app.base + "/cl/cubrs/page/",
            INDEX_SET_NO_SEARCH_DQ:app.base + "/cl/CuMnCuUs/page/",
            INDEX_SET_NO_SEARCH_XM:app.base + "/cl/CuMnCuUs/page/",
            INDEX_SET_NO_INDEXSETNUMBER_EXIST:app.base + "/cl/indexsetnumber/exist",
            INDEX_SET_NO_INDEXLIMIT_EXIST:app.base + "/cl/indexLimit/exist"
      },{
//      额度执行配置
            QUOTA_EXECUT_LIST: app.base + "/cl/limitexecutioncode/page/",
            QUOTA_EXECUT_ADD: app.base + "/cl/limitexecutioncode/create",
            QUOTA_EXECUT_VIEW: app.base + "/cl/limitexecutioncode/view/",
            QUOTA_EXECUT_UPDATE: app.base + "/cl/limitexecutioncode/update",
            QUOTA_EXECUT_REMOVE: app.base + "/cl/limitexecutioncode/remove/",
			QUOTA_EXECUT_EXIST: app.base + "/cl/limitExecutionCode/exist"
        },{
//      额度指标配置
            QUOTA_INDEX_LIST: app.base + "/cl/limitindexoccupy/page/",
            QUOTA_INDEX_ADD: app.base + "/cl/limitindexoccupy/create",
            QUOTA_INDEX_VIEW: app.base + "/cl/limitindexoccupy/view",
            QUOTA_INDEX_UPDATE: app.base + "/cl/limitindexoccupy/update",
            QUOTA_INDEX_REMOVE: app.base + "/cl/limitindexoccupy/remove",
			QUOTA_INDEX_EXIST: app.base + "/cl/limitindexoccupy/indexsetcode/exist"
    },{
        /*授信操作流水*/
            CREDIT_OPERATION_FLOW: app.base + "/cl/creditagreementlog/page/",
    },{
        /*其他额度管理*/
        OTHER_QUOTA_MANAGEMENT: app.base + "/cl/indexlimit/page/",
        /*调额修改*/
        OTHER_QUOTA_UPDATE: app.base + "/cl/indexlimit/update",
        /*调额查看*/
        OTHER_QUOTA_VIEW: app.base + "/cl/indexlimit/view",
        /*冻结、解冻*/
        OTHER_QUOTA_STATUS: app.base + "/cl/indexlimit/updateindexlimit/",
    }
    );

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

    String.prototype.format = function () {
        var args = arguments;
        if (/\{(\d+)\}/g.test(this)) {
            return this.replace(/\{(\d+)\}/g, function (match, name) {
                return args[name];
            });
        }

        if (typeof (args[0]) == 'object') {
            var param = args[0];
            return this.replace(/\{([\w]+)\}/g, function (match, name) {
                return param[name];
            });
        }

        var i = 0;
        return this.replace(/\{(\w+)\}/g, function () {
            return args[i++];
        });
    };


}(window.jQuery, window.app);