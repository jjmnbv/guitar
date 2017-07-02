$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 初始化数据
     */
    $('#mainPage,#tab1').pagination({
        "first-store": app.firstStore
    });
    $('#interfaceNo').selectloader({'phoneInterfaceNoList': app.mobileList});
    $('#authenType').selectloader({'authenTypeList':  app.identiType});
	$('#channelNo').selectloader({'channelList':  app.channelList});

    app.registerTextHelper('queryStatus', app.queryStatus, 'code', 'name');
    app.registerTextHelper('identiType', app.identiType, 'code', 'name');

  
   
});