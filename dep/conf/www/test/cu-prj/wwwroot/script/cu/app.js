+function($, app) {
    $.extend(app, {
        loginurl: '/login.html',
        oauthClients : {
            cc_base: '/cc',
            cs_base: '/cs',
            ce_base: '/ce',
            ci_base: '/ci',
            cl_base: '/cl',
            cr_base: '/cr',
            // cg_base: '/cg',
            cb_base: '/cb'
        }
    });
} (window.jQuery, window.app);