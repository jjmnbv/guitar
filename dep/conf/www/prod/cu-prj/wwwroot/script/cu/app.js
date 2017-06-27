+function($, app) {
    $.extend(app, {
        loginurl: '/login.html',
        cubase: '',
        oauthClients : {
            cc_base: '/cc',
            cs_base: '/cs',
            ce_base: '/ce',
            ci_base: '/ci',
            cb_base: '/cb'
        }
    });
} (window.jQuery, window.app);
