$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 初始化数据
     */
    $('#mainPage').pagination({
        "first-store": app.firstStore
    });
    $('#st').selectloader({'stList': app.stList});
    /**
     * 修改也是跳转页面
     */
    $('#update').getModal({
        statusArray:['CS'],
//      textArray:'确定要删除该条记录吗？',
        noHandleArray:['JH','SX'],
        noHandle:'此状态不能修改',
        selector: function () {
            if($('[type=radio]:checked').length>0){
                return ($('[type=radio]:checked').data('status'))
            }
        },
        compileBefore:function(){
            window.location.href='product-set-loanType-update.html?loTyNo='+$('[type=radio]:checked').data('id')+"&currVe="+$('[type=radio]:checked').data('subId');
        }

    });
})