$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 初始化列表数据
     */
    $('#answerList').pagination({
        "first-store": app.firstStore
    });
    //textarea长度校验
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
    });
    app.registerTextHelper('dataTypeCode', app.dataTypeCode, 'code', 'name');
    //校验
    app.bindFormValidation($('#update-access-form'));

    /*页面回显*/
    var initData = function () {
        $.getJSON(app.ACCESS_MANAGEMENT_VIEWS + '/' + app.request.id, function (res) {
            if (app.isOK(res)) {
                App.stopPageLoading();
                $('.defaultScopeList').selectloader({'defaultScopeList': app.defaultScope});
                $('.accessStatus').selectloader({'accessStatus': app.status});
                $('#update-access-form').deserializeObject(res);
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    };
    initData();

    /*模态框回显到输入框 */
    $('#confirm').click(function() {
        var allStr = "",
                thisChecked;
        var rowNum = $('.modal').find('.oneRow');
        for(var i = 0; i < rowNum.length; i++) {
            thisChecked = rowNum.eq(i).find('[type=checkbox]:checked');
            if(thisChecked.size() > 0) {
                allStr = allStr + rowNum.eq(i).find('.thisName').html() + ",";
            }
        }
        allStr = allStr.substr(0, allStr.length - 1);
        $('.telCheTipCo').val(allStr);
        $('.show-telCheTipCo').val(allStr);
    });

    /*模态框 点击全选 */
    $(document).on(' click ', ' #checkRowAll ', function() {
        var checkLength = $('.modal').find('.oneRow').find('[type=checkbox]:checked');
        if($(this).prop('checked') == true) {
            $('.modal').find('.oneRow').find('[type=checkbox]').prop('checked', true);
            $('.modal').find('.oneRow').find('[type=checkbox]').parent().addClass('checked');
        } else {
            $('.modal').find('.oneRow').find('[type=checkbox]').prop('checked', false);
            $('.modal').find('.oneRow').find('[type=checkbox]').parent().removeClass('checked');
        }
    });

    /* 控制全选是否选中*/
    var checkNum = 0;
    $(document).on('click', '.checkRow', function() {
        checkNum = 1;
        var istrueNum = 0;
        $(this).parents("#nuc-list").find("tr").each(function() {
            if($(this).find("td:first").find(':checkbox').prop("checked") == true) {
                istrueNum++;
            }
        });
        if($(this).parents("#nuc-list").find("tr").length == istrueNum) {
            $('.modal').find('#checkRowAll').prop('checked', true);
            $('.modal').find('#checkRowAll').parent().addClass('checked');
        } else {
            $('.modal').find('#checkRowAll').prop('checked', false);
            $('.modal').find('#checkRowAll').parent().removeClass('checked');
        }
    });

    /*点击一行选中*/
    $(document).on('click', '.modal .table-striped > tbody > tr', function() {
        if(checkNum != 1) {
            if($(this).find("td:first").find(':checkbox').prop("checked") == true) {
                $(this).find("td:first").find(':checkbox').prop("checked", false);
                $(this).find("td:first").find('.checkRow').parent().removeClass('checked');
            } else {
                $(this).find("td:first").find(':checkbox').prop("checked", true);
                $(this).find("td:first").find('.checkRow').parent().addClass('checked');
            }
        } else {
            checkNum = 0;
        }
    });

    /*生成秘钥*/
    $(".getDate span").click(function(){
        app.$getJSON(app.ACCESS_MANAGEMENT_GET_KEY ).done(function (data) {
            $("textarea[name='clientSecret']").val(data.clientSecret);
        });
    });

    //提交表单
    $("#saveForm").click(function(){
        if ($('#update-access-form').valid()) {
            submit(app.ACCESS_MANAGEMENT_UPDATE, $('#update-access-form').serializeObject(), event.target);
        }
    });

});