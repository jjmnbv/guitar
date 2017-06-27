var innerLayout, adjustTableHeight;
$(function () {
    $(".Refresh-sign, .export-excel-sign, .add-sign, .copy-sign, .delete-sign, .update-sign, .save-sign").tooltip({
        trigger: 'hover', delay: { show: 500, hide: 100 }
    });
    // $("[data-toggle='tooltip']").tooltip({
    //     trigger: 'hover', delay: { show: 500, hide: 100 }
    // });
    innerLayout = $('#innerLayout').layout({
        closable:true,
        resizable: false,
        slidable: true,
        east__size: 560,
        east__resizable: false,
        east__initClosed:true,
        east__spacing_open: 0,
        east__spacing_closed: 0,
        // east__showOverflowOnHover:	true,
        onresize: function (pName) {
            $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
            if(pName=='center') {
                adjustTableHeight();
            }
            return true;
        },
        onopen_end: function (pName) {
            if(pName=='east') {
                $('#paneToggler').show().removeClass('icon-open')
            }
            return false;
        },
        onclose_end: function (pName) {
            if(pName=='east') {
                $('#paneToggler').addClass('icon-open')
            }
            return false;
        }
    });
    innerLayout.bindButton('#paneToggler', 'toggle', 'east');
    adjustTableHeight = function(){
        var paneContentHeight = $('.ui-layout-content').height();
        var dataTablesWrapper = $('.dataTables_wrapper');
        if(dataTablesWrapper) {
            var tableWrapperHeight = $('.dataTables_wrapper').height();
            var scrollBodyHeight = $('.dataTables_scrollBody').height();
            if(scrollBodyHeight<=100) scrollBodyHeight = 100;
            var otherHeight = tableWrapperHeight-scrollBodyHeight;
            // console.log('tableWrapperHeight is:'+tableWrapperHeight)
            // console.log('paneContentHeight is:'+paneContentHeight)
            // console.log('otherHeight is:'+otherHeight)
            // console.log('final height is: '+(paneContentHeight-otherHeight-2))
            if(tableWrapperHeight+3>=paneContentHeight){
                $('.dataTables_scrollBody').css('height', paneContentHeight-otherHeight-2 + 'px');
            }else{
                $('.dataTables_scrollBody').css('height', 'auto');
            }
        }
    };
    // var str = '1234abc1234';
    // console.log('is--:')
    // console.log(str.indexOf(''))
    activeCurNav();
});
function activeCurNav() {
    var curUrl = location.href;
    var sideBarLink = $('.page-sidebar').find('a');
    sideBarLink.each(function(i, curA) {
        var $curA = $(curA);
        var curLink = $curA.attr('href');
        // console.log('curLink is:'+curLink)
        if(curLink.length>0&&curUrl.indexOf(curLink)!=-1) {
            // console.log('yeah')
            $curA.parents('li').addClass('active');
            $curA.parents('.sub-menu').prev('.nav-toggle').find('.arrow').addClass('open');
                // .find('.nav-toggle .arrow').eq(0).addClass('open');
            // $curA.parents('.nav-toggle').addClass('active open');
        }
    });
    // for(var i =0;i<sideBarLink.size();i++) {
    //     var aLink = sideBarLink.eq(i).attr('href');
    //     console.log(curUrl.indexOf(aLink))
    //     console.log('aLink is:'+aLink)
    // }
}
/**
 * 字典数据预处理
 * @param dicts 传入字典对象 格式: [{prefix: 'field', dict: app.dicts.dict_xx}]
 */
function beautifyDict(dicts) {
    app.cacheDict = {};
    for(var dict in dicts) {
        var ids = dicts[dict].dict;
        for(var n in ids) {
            var code = dicts[dict].prefix+ids[n].code;
            app.cacheDict[code] = ids[n].name;
        }
    }
    console.log('app.cacheDict is: ')
    console.log(app.cacheDict)
}
/**
 * 反显字典数据
 * @param dict 被转换的字典字段字符串
 * @param data 被传入待转换的字段
 */
function deserializeDict(dict, data) {
    return app.cacheDict[dict+data]
}
/**
 *URL传值
 */
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}