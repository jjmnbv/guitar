$(function(){
   /* $("#details-form").deserializeObject(app.storeItem);
    $("#details-form input").attr("disabled",true);
*/
    $(function(){
        +function ($, app) {

            $.getJSON(app.STORE_DETAILS + app.request.cooNo, function (data) {
                if (app.isOK(data)) {
                    var tpl = Handlebars.compile($('#main-cont-template').html());
                    var html = tpl(data);
                    $("#main-cont").html(html);
                    $('#provCd').selectloader({'provinceList': app.provinceList});
                    $('#cooNatCd').selectloader({'industry': app.industry});
                    $('#cooKiCd').selectloader({'classify': app.classify});
                    $('#acPaTyCd').selectloader({'accountIdType': app.accountIdType});
                    $('.user-flag').radioloader({'userFlag': app.userFlag});
                    $('#acUsCd').selectloader({'accountUse': app.accountUse});
                    $('#acTyCd').selectloader({'accountTpye': app.accountTpye});
                    $('#acCd').selectloader({'acCdList': app.acCdList});
                    $("#details-form input,#details-form select").attr("disabled",true);
                    return;
                }
                app.alertError(data.errors.join('\n'));
            });
        }(window.jQuery, window.app);
    });
});
