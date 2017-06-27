$(function(){
/*tab切换*/
	

    +function ($, app) {
        App.startPageLoading({animate: true});
        var init = function () {
            $.getJSON(app.LOAN_PEOPLE_INFORMATION + app.request.applyWater, function (res) {
                if (app.isOK(res)) {
                    App.stopPageLoading();
                    var tpl = Handlebars.compile($('#peopleList-template').html());
                    Handlebars.registerHelper("addOne", function (index) {
                        //利用+1的时机，在父级循环对象中添加一个_index属性，用来保存父级每次循环的索引
                       this._index = index;
                        return this._index;
                    });
                        var html = tpl(res);
                        $("#peopleVar").html(html);


                    $('.papersTypeList').selectloader({'papersTypeList': app.papersTypeList});
                    $('.marryCodeType').selectloader({'marryCodeTypeList': app.marryCodeTypeList});
                    $('.paymentFrom').selectloader({'paymentFromList': app.paymentFromList});
                    $('.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
                    $('.addressTypeCodeList').selectloader({'addressTypeCodeList': app.addressTypeCodeList});
                    $('.relationshipList').selectloader({'relationshipList': app.relationshipList});
                    $('.educationalNameCode').selectloader({'educationalNameCodeList': app.educationalNameCodeList});
                    $('.educationalCode').selectloader({'educationalCodeList': app.educationalCodeList});
                    $('.corporationProperty').selectloader({'corporationPropertyList': app.corporationPropertyList});
                    $('.workProperty').selectloader({'workPropertyList': app.workPropertyList});
                    $('.position').selectloader({'positionList': app.positionList});
                    $('.industryCode').selectloader({'industryCodeList': app.industryCodeList});
                    $('.wageDate').selectloader({'wageDateList': app.wageDateList});
                    $('.housingProperty').selectloader({'housingPropertyList': app.housingPropertyList});
                    $('.provCity').selectloader({'provinceList': app.provinceList});
                    $('.careerCode').selectloader({'careerCodeList': app.careerCodeList});
                    $('.customerTypeList').selectloader({'customerTypeList': app.customerTypeList});
                    $('.maxEbCdList').selectloader({'maxEbCdList': app.educationalCodeList});
                    $('.liveTypeList').selectloader({'liveTypeList': app.liveTypeList});
                        $('#detail-update-form').deserializeObject(res);
                        $('#detail-update-form').find("input").uniform();
                    /*tab切换*/
                        tabChange();
                    /*时间插件*/
	                    dateTime();
                    /*下一申请人*/
	                    nextPeople();
                       /*只读*/
	                    setReadonly();
                     /*没有共同申请人,去掉下一申请人按钮*/
                      isOneTab();
                        td_select($(".tabContactList tr"));

                    /*lh  金额 格式化*/
                    $(".bindEvent").each(function(){
                            $(this).val(app.formatCurrencyM($(this).val()));
                    });
                        return;
                    }
                    app.alertError(res.errors.join('\n'));
                }
                );
        };
        init();
    }(window.jQuery, window.app);
   
    /*下一步*/
    $("body").on("click","#nextSave",function(){
          /*  submit(app.DETAIL_UPDATE, $('#form-submit-goods').serializeObject());*/
         var applyWater=$("input[name='applyWater']").val();
        window.location.href="/cb/loan-application/loan-information-views.html?applyWater="+applyWater;
    });
});