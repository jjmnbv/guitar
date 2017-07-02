(function($) {
    var innerLayout = $('#innerLayout').layout({
        closable:true,
        resizable: false,
        slidable: true,
        // applyDemoStyles: true,
        east__size: .5,
        east__resizable: false,
        onresize: function (pName, pEle, pState, pOptions, layoutName) {
            if(pName=='center') {
                // adjustTableHeight();
                // var ch = $('#innerLayout .center-box').height();
                // var contentH = $('#innerLayout .content-box').height();
                // $('.adjust-box').height(pState.innerHeight-contentH-30);
            }
            return false;
        }
    });
}(jQuery));