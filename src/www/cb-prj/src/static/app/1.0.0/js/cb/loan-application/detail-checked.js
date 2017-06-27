/**
 * Created by Administrator on 2016/12/20 0020.
 */
$(function() {
      /*保存*/
    $('#saveData').click(function () {
        if ($('#detail-update-form').valid()) {
            submit(app.DETAIL_UPDATE, $('#detail-update-form').serializeObject());
            window.location.href="/cb/loan-application/loan-information.html";
        }
        return false;
    });
    function submit(url, param) {
        app.$post(url, param).done(function (data) {
            if (app.isOK(data)) {
                app.alertOK('提交成功！');
            }
        });
    };
    /*数据回显*/
    $("#detail-update-form").deserializeObject(app.loanApplyPeopleOfZS);

    /*tab切换*/
    $('[data-tab]').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var activeBox = $('.main-page').find('.active');
            var hightLing = $('.main-page').find('.hight-linght');
            activeBox .removeClass('active');
            hightLing .removeClass('hight-linght');
            $(activeBox .data('tab')).hide();
            $(this).addClass('active');
            $(this).parents('li').addClass('hight-linght');
            $($(this).data('tab')).show();
        });
    });
});
