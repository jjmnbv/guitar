+function ($, app) {
    "use strict ";

    $.extend(app, {
        /*配置管理*/
            /*渠道 列表*/
            CHANNELMANAGEMENT: app.base + '/ci/findChannel/page',
            /*渠道 新增*/
            CHANNELMANAGEMENTADD : app.base + '/ci/addChannel',
            /*渠道 查看*/
            CHANNELMANAGEMENT_VIEWS : app.base + '/ci/channel/view',
            /*渠道 修改*/
            CHANNELMANAGEMENT_UPDATE : app.base + '/ci/channel/update',
            /*渠道名称 远程校验*/
            CHANNEL_NAME_VALIDATE: app.base + '/ci/exitchanna/',

            /*接口 列表*/
            INTERFACEMANAGEMENT: app.base + '/ci/interface/page',
            /*接口 新增*/
            INTERFACEMANAGEMENTADD : app.base + '/ci/interface/create',
            /*接口 查看*/
            INTERFACEMANAGEMENT_VIEWS : app.base + '/ci/interface/view/',
            /*接口 修改*/
            INTERFACEMANAGEMENT_UPDATE : app.base + '/ci/interface/update',

            /*接入方 列表页面*/
            ACCESS_MANAGEMENT_LISY: app.base + '/ci/openapiclient/page',
            /*接入方 新增*/
            ACCESS_MANAGEMENT_ADD : app.base + '/ci/openapiclient/create',
            /*接入方 修改*/
            ACCESS_MANAGEMENT_UPDATE : app.base + '/ci/openapiclient/update',
            /*接入方 查看*/
            ACCESS_MANAGEMENT_VIEWS : app.base + '/ci/openapiclient/view',
            /*接入方 获得秘钥*/
            ACCESS_MANAGEMENT_GET_KEY : app.base + '/ci/openapiclient/generateSecretKey',


        /*认证服务*/
            /*身份证认证 列表*/
            IDENTITY_LIST : app.base + '/ci/page/SF',
            /*身份证认证 模态框*/
            IDENTITY_MODAL : app.base + ' /ci/authen/result/',

            /*银行卡认证 列表*/
            BANKCARD_LIST : app.base + '/ci/page/YH',
            /*银行卡认证 模态框*/
            BANKCARD_MODAL : app.base + ' /ci/authen/result/',

            /*手机号认证 列表*/
            PHONE_LIST : app.base + '/ci/page/SJ',
            /*手机号认证 模态框*/
            PHONE_MODAL : app.base + ' /ci/authen/result/',
            /*身份认证类认证查询服务*/
            IDENTITYAUTH: app.base + '/ci/authencationQueryApply',

        /*查询服务*/
            /*黑名单查询 列表*/
            BLACK_NAME_LIST : app.base + '/ci/page/HM',
            /* 黑名单查询类服务*/
            BLACKQUERYAPPLY: app.base + '/ci/blackQueryApply',

            /*灰名单查询 列表*/
            GRAY_NAME_LIST : app.base + '/ci/page/UM',
            GRAYQUERYAPPLY : app.base + '/ci/blackQueryApply',

            /*学历查询 列表*/
            EDUCATION_LIST : app.base + '/ci/page/XL',
            /*学历查询参数*/
            EDUCATIONAPPLY: app.base+ '/ci/educationApply',
			/*查询记录服务*/
            CIPAGE: app.base + '/ci/page',

        /*查询记录*/
            /*渠道操作列表*/
            CHANNEL_LOG_LIST:app.base + '/ci/channelLog/page',

        /*通用模板*/
           /*COMMON_SHOW: app.base+ '/ci/global-template/global-template.json',*/
           COMMON_SHOW: app.base+ '/ci/blackRoster/view',

        /*图表页面*/
           TABLE_LIST: app.base+ '/ci/charts-query/0',
        /*wkd*/
            /*refresh 请求*/
            INFOMATIONQUERY: app.base+  '/ci/infomationQuery',
            /*二次请求*/
            LISTBYPARAM: app.base + '/ci/listByParam',
        /*联调结束*/
            REPORTDETAILS: app.base + '/ci/authentication-service/report-details'
        }, {
            DICTIONARY_PAGE: app.base + '/ci/dictionary/page',
            DICTIONARY_VIEW: app.base + '/ci/dictionary/view.json',
            DICTIONARY_NOTEXISTS: app.base + '/ci/dictionary/notexists.json',
            DICTIONARY_CREATE: app.base + '/ci/dictionary/create.json',
            DICTIONARY_UPDATE: app.base + '/ci/dictionary/update.json',
            DICTIONARY_REMOVE: app.base + '/ci/dictionary/remove.json',
            DICTIONARYCATEGORY_LIST: app.base + '/ci/dictionaryCategory/list.json',
            DICTIONARYCATEGORY_PAGE: app.base + '/ci/dictionaryCategory/page',
            DICTIONARYCATEGORY_VIEW: app.base + '/ci/dictionaryCategory/view/',
            DICTIONARYCATEGORY_NOTEXISTS: app.base + '/ci/dictionaryCategory/notexists.json',
            DICTIONARYCATEGORY_NOTEXISTSID: app.base + '/ci/dictionaryCategory/notexistsId.json',
            DICTIONARYCATEGORY_CREATE: app.base + '/ci/dictionaryCategory/create.json',
            DICTIONARYCATEGORY_UPDATE: app.base + '/ci/dictionaryCategory/update.json',
            DICTIONARYCATEGORY_REMOVE: app.base + '/ci/dictionaryCategory/remove/',
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