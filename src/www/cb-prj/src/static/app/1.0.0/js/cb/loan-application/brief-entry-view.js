/**
 * Created by Administrator on 2017/1/7 0007.
 */
+function ($, app) {
    /**
     * 初始化数据
     */
    App.startPageLoading({animate: true});
    var init = function () {
        $.getJSON(app.BRIEFT_ENTRY_VIEW + app.request.applyWater, function (res) {
            if (app.isOK(res)) {
                App.stopPageLoading();
                var tpl = Handlebars.compile($('#peopleList-template').html());
                var html = tpl(res);
                $("#add-person-body").html(html);
                $('#brief-update-form').find("input").uniform();
                $('.relationshipList').selectloader({'relationshipList': app.relationshipList});
                $('.papersTypeCode').selectloader({'papersTypeList': app.papersTypeList});
                $('.provCity').selectloader({'provinceList': app.provinceList});
                $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
                $('#loanUseCode').selectloader({'loanUseList': app.loanUseCodeList});
                $('#peopleList').selectloader({'papersTypeList': app.papersTypeList});
                $('#loanApplyPeople').selectloader({'papersTypeList': app.papersTypeList});
                /*金融产品、分类*/
			    var temp1 = '[{"name":"'+res.loanTypeName+'","code":"'+res.loanTypeId+'"}]'
			    $('#loanTypeId').selectloader({'loanTypeList': $.parseJSON(temp1)});
                $('#brief-update-form').deserializeObject(res);
                /*贷款用途选择其他时，贷款其他用途显示*/
                var loanUseCode=res.loanUseCode;
                if(loanUseCode=="QT"){
                    $('.loanUseExplain-body').css("display","inline-block");
                }else{
                    $('.loanUseExplain-body').css("display","none");
                }
                setReadonly();
                return;
            }
            app.alertError(data.errors.join('\n'));
        });
    };
    init();

}(window.jQuery, window.app);


