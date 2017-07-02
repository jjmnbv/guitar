$(function () {
    $('#allBlacklist').layout({
        initPanes: false,
        resizeWithWindow: false
        ,center__paneSelector: ".middle-center"
        ,west__paneSelector: ".middle-west"
        ,east__paneSelector: ".middle-east"
        ,north__paneSelector:  ".middle-north"
        ,south__paneSelector:  ".middle-south",
        closable:true,
        resizable: true,
        slidable: true,
        applyDemoStyles: true,
        east__size: .5,
        // east__resizable: false,
        onresize: function (pName, pEle, pState, pOptions, layoutName) {
            console.log('-----------')
            if(pName=='center') {
                console.log(pState)
                // var ch = $('#innerLayout .center-box').height();
                var contentH = $('#innerLayout .content-box').height();
                $('.adjust-box').height(pState.innerHeight-contentH-20);
            }
            // console.log(pName)
            // console.log(pEle)
            // console.log(pState)
            // console.log(pOptions)
            // console.log(layoutName)
            // STOP the pane from opening
            return false; // false = Cancel
        }
    });

})