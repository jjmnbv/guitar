+function ($, app) {
    "use strict ";

    $.extend(app, {
            WAITING: app.base + '/cu/index/waiting',
            WARNING: app.base + '/cu/index/warning',
            NOTICE: app.base + '/cu/index/notice'
        },
    {
        //公共
        CURRENT_DATE: '/cu/cuusholl/date',
        //个人设置 personal-settings
        PERSONAL_INFO_VIEW:app.base + '/cu/cuuss/useMessage', ///cu/cuuss/view/{id}

        UAER_INFO_VIEW:app.base + '/cu/cuuss/view',

        //提交修改的个人信息维护修改地址
        COMMIT_PERSONAL_INFO_DATA: app.base + '/cu/cuuss/updateCuUs',
        //请假登记
        POST_LEAVE: app.base + '/cu/cuusholl/create',
        LEAVE_VIEW: app.base + '/cu/cuusholl/view', //请假日志回显
        UPDATE_POST_LEAVE: app.base + '/cu/cuusholl/update',//销假登记
        LEAVE_REGISTRATION_LIST: app.base + '/cu/cuusholl/page',

        // 机构管理列表
        // GET_ORGANIZATION_DATA_BY_ID: app.base+'/cu/organization-management/show', //查看机构
        GET_ORGANIZATION_DATA_BY_ID: app.base+'/cu/cubrs/view', //查看机构
        // ORGANIZATION_LIST: app.base+'/cu/organization-management/page',
        ORGANIZATION_LIST: app.base+'/cu/cubrs/page',
        // COMMIT_ORGANIZATION_INFO_DATA: app.base+'/cu/organization-management/create', //新增机构信息
        COMMIT_ORGANIZATION_INFO_DATA: app.base+'/cu/cubrs/create', //新增机构信息
        BRNO_EXIST: app.base +'/cu/cubrs/brNoExist',//机构编号是否存在
        BRNA_EXIST: app.base +'/cu/cubrs/brNaExist',//机构名称是否存在

        // UPDATE_ORGANIZATION_INFO_DATA: app.base+'/cu/organization-management/update',//更新机构
        UPDATE_ORGANIZATION_INFO_DATA: app.base+'/cu/cubrs/update',//更新机构
        // DELETE_ORGANIZATION_DATA: app.base+'/cu/organization-management/del/',//删除机构
        DELETE_ORGANIZATION_DATA: app.base+'/cu/cubrs/remove/',//删除机构
        // ACTIVE_ORGANIZATION_DATA: app.base+'/cu/organization-management/active/',//激活机构
        ACTIVE_ORGANIZATION_DATA: app.base+'/cu/cubrs/updatejh/',//激活机构
        // DE_ACTIVE_ORGANIZATION_DATA: app.base+'/cu/organization-management/deActive/',//失效机构
        DE_ACTIVE_ORGANIZATION_DATA: app.base+'/cu/cubrs/updatesx/',//失效机构

        // 岗位管理列表
        // GET_POST_DATA_BY_ID: app.base+'/cu/POST-management/show', //查看岗位
        GET_POST_DATA_BY_ID: app.base+'/cu/cuposts/view', //查看岗位
        // POST_LIST: app.base+'/cu/POST-management/page',
        POST_LIST: app.base+'/cu/cuposts/page',
        POST_CU_LIST:app.base+'/cu/cuposts/toListPage',
        // COMMIT_POST_INFO_DATA: app.base+'/cu/POST-management/create', //新增岗位信息
        COMMIT_POST_INFO_DATA: app.base+'/cu/cuposts/create', //新增岗位信息
        POST_NO_EXIST: app.base +'/cu/cuposts/postNoExist',//岗位编号是否存在
        POST_NA_EXIST: app.base +'/cu/cuposts/postNaExist',//岗位名称是否存在
        // UPDATE_POST_INFO_DATA: app.base+'/cu/POST-management/update',//更新岗位
        UPDATE_POST_INFO_DATA: app.base+'/cu/cuposts/update',//更新岗位
        // DELETE_POST_DATA: app.base+'/cu/POST-management/del/',//删除岗位
        DELETE_POST_DATA: app.base+'/cu/cuposts/remove/',//删除岗位
        // ACTIVE_POST_DATA: app.base+'/cu/POST-management/active/',//激活岗位
        ACTIVE_POST_DATA: app.base+'/cu/cuposts/updateJH/',//激活岗位
        // DE_ACTIVE_POST_DATA: app.base+'/cu/POST-management/deActive/',//失效岗位
        DE_ACTIVE_POST_DATA: app.base+'/cu/cuposts/updateSX/',//失效岗位


        // 角色管理列表
        // GET_ROLE_DATA_BY_ID: app.base+'/cu/role-management/show',//查看角色
        GET_ROLE_DATA_BY_ID: app.base+'/cu/curos/view', //查看角色
        // ROLE_LIST: app.base+'/cu/role-management/page', //角色列表
        ROLE_LIST: app.base+'/cu/curos/page', //角色列表
        // COMMIT_ROLE_INFO_DATA: app.base+'/cu/role-management/create',//角色添加
        ROLE_NO_EXIST: app.base +'/cu/curos/ronoexists',//角色编号是否存在
        ROLE_NA_EXIST: app.base +'/cu/curos/ronaexists',//角色名称是否存在
        COMMIT_ROLE_INFO_DATA: app.base+'/cu/curos/create',//角色添加
        // UPDATE_ROLE_INFO_DATA: app.base+'/cu/role-management/update',//角色修改
        UPDATE_ROLE_INFO_DATA: app.base+'/cu/curos/update',//角色修改
        // DELETE_ROLE_DATA: app.base+'/cu/role-management/del/',//删除角色
        DELETE_ROLE_DATA: app.base+'/cu/curos/remove/',//删除角色
        // ACTIVE_ROLE_DATA: app.base+'/cu/role-management/active/',//激活角色
        ACTIVE_ROLE_DATA: app.base+'/cu/curos/updateJH/',//激活角色
        // DE_ACTIVE_ROLE_DATA: app.base+'/cu/role-management/deActive/',//失效角色
        DE_ACTIVE_ROLE_DATA: app.base+'/cu/curos/updateSX/',//失效角色
        // 用户管理列表
        GET_USER_DATA_BY_ID: app.base+'/cu/user-management/show',
        // USER_LIST: app.base+'/cu/user-management/page',//用户列表
        COMMIT_USER_DATA: app.base+'/cu/cuuss/create',//新增用户

        CODE_EXIT:app.base+'/cu/cuuss/idExist',
        NAME_EXIT:app.base+'/cu/cubrs/loginNaExist',

        USER_LIST: app.base+'/cu/cuuss/page',//用户列表
        COMPETENT_USER_LIST: app.base+'/cu/cufaexe/list',//弹窗选择用户列表
        COMMIT_USER_INFO_DATA: app.base+'/cu/user-management/create',
        UPDATE_USER_INFO_DATA: app.base+'/cu/cuuss/update',
        // DELETE_USER_DATA: app.base+'/cu/user-management/del/',//删除用户
        DELETE_USER_DATA: app.base+'/cu/cuuss/remove/',//删除用户
        // ACTIVE_USER_DATA: app.base+'/cu/user-management/active/',//激活用户
        ACTIVE_USER_DATA: app.base+'/cu/cuuss/updateJH/',//激活用户
        // DE_ACTIVE_USER_DATA: app.base+'/cu/user-management/deActive/',//失效用户
        DE_ACTIVE_USER_DATA: app.base+'/cu/cuuss/updateSX/',//失效用户
        RESET_PWD: app.base+'/cu/cuuss/resetPwd/',//重置密码


        MEMBERS_LIST: app.base+'/cu/members/page/',
        MEMBERS_VIEW: app.base+'/cu/members/view',

        //menu-management
        MENU_LIST: app.base+'/cu/curess/menu',//菜单导航
        // COMMIT_MENU_DATA: app.base+'/cu/menu-management/create',//菜单新增
        COMMIT_MENU_DATA: app.base+'/cu/curess/create',//菜单新增
        // UPDATE_MENU_DATA: app.base+'/cu/menu-management/update',//资源修改
        UPDATE_MENU_DATA: app.base+'/cu/curess/update',//资源修改
        // MOVE_MENU_DATA: app.base+'/cu/menu-management/move',//菜单升降级和上下移动
        MOVE_MENU_DATA: app.base+'/cu/curess/menuHaul',//菜单升降级和上下移动
        // DELETE_MENU_DATA: app.base+'/cu/menu-management/delete',//删除角色
        DELETE_MENU_DATA: app.base+'/cu/curess/remove/',//删除角色
        MENU_VIEW:app.base+'/cu/curess/view/',
        MENU_NAME_CHECK:app.base+'/cu/curess/resnaexists',
        MENU_CODE_CHECK:app.base+'/cu/curess/resnoexists',

        //auth-management
        // SHOW_AUTH_DATA: app.base+'/cu/auth-management/show/',//权限管理查看
        SHOW_AUTH_DATA: app.base+'/cu/curoris/viewList/',//权限管理查看
        SHOW_AUTH_LIST:app.base+'/cu/curos/list',//查看角色列表
       // UPDATE_AUTH_DATA: app.base+'/cu/auth-management/update',//权限管理的 添加和更新
        UPDATE_AUTH_DATA: app.base+'/cu/curoris/update',//权限管理的 添加和更新
        AUTH_MANAGEMENT_UPDATE:app.base+'/cu/curos/updatePermissions',

        SHOW_AUTH_MENU:app.base+'/cu/curess/rorismenu/',

        TEST_DATA: app.base+'/cu/test/show',

        UPDATE_PASSWORD:app.base+'/cu/update/loginpwd',

        /* 菜单图标 */
        MUNE_PIC_LIST:app.base+'/cu/cuicons/page',
        MUNE_PIC_CREATE:app.base+'/cu/cuicons/create',
        MUNE_PIC_UPDATE:app.base+'/cu/cuicons/update/',
        MUNE_PIC_REMOVE:app.base+'/cu/cuicons/remove/',

        NAV_GET:app.base+'/cu/cuuslogins/getMenu',

        /*获取自动生成编码*/
        CUBRS_CODE:app.base+'/cu/cubrs/nextId',  //机构id
        CUPOSTS_CODE:app.base+'/cu/cuposts/nextId',  //岗位id
        CUROS_CODE:app.base+'/cu/curos/nextId', //角色id
        CUUSS_CODE:app.base+'/cu/cuuss/nextId',  //用户id
        CURESS_CODE:app.base+'/cu/curess/nextId', //菜单


        /*功能权限配置*/
        FUNCTION_CONFIGURATION_LIST:app.base+'/cu/curesacts/page/',
        ADD_FUNCTION_CONFIGURATION:app.base+'/cu/curesacts/create',
        FUNCTION_MENU_LIST:app.base+'/cu/curess/page/',
        FUNCTION_CONFIGURATION_VIEW:app.base+'/cu/curesacts/view/',
        FUNCTION_CONFIGURATION_UPDATE:app.base+'/cu/curesacts/update',
        FUNCTION_CONFIGURATION_REMOVE:app.base+'/cu/curesacts/remove/',

        /*菜单功能权限*/
        MENU_FUNCTION:app.base+'/cu/curesacts/list/',
        MENU_FUNCTION_CREATE:app.base+'/cu/curesacts/create',
        VALIDE_EXISTSTS:app.base+'/cu/curesacts/resActCdExit',

        /*用户管理*/
        /*机构列表*/
        CUUSCUBRS:app.base+'/cu/cuuscubrs/page/',
        /*岗位列表*/
        CUPOSTS:app.base+'/cu/cuposts/toListPage/',
        /*角色列表*/
        CUUSCUROS:app.base+'/cu/cuuscuros/page/',

        CUBRS:app.base+'/cu/cubrs/showview/',

        /*角色预览*/
        CURESS:app.base+'/cu/curess/viewallroris/',

        /*权限管理 角色列表*/
        ROLESLIST:app.base+'/cu/curos/rorislist',
        
        /*系统日志列表*/
        LOG_SYSTEM_LIST:app.base+'/cu/cusyopl/page/',
        
        /*操作日志列表*/
        LOG_OPRATE_LIST:app.base+'/cu/cuusloginl/page/',
        
        OPRATE_DETAIL_LIST:app.base+'/cu/cuusopl/page/',
        

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

}(window.jQuery, window.app);