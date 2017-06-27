/**
 * 数据模拟
 */
$(function(){
    +function ($,app) {
        App.startPageLoading({animate: true});
        var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'detail-update-form') {
					$.getJSON(app.CALL_APPLICANT_INFORMATION+busId, function(res){
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
							/* 回显 金额 格式化*/
							$(".bindEvent").each(function(){
								$(this).val(app.formatCurrencyM($(this).val()));
							});
							/*导航*/
							res.taskId = request.taskId;
							var tp5 = Handlebars.compile($('#url-boxbg').html());
							var html = tp5(res);
							$("#ul_div").html(html);
							$('#detail-update-form1').find("input").uniform();
							$('#detail-update-form1').deserializeObject(res);
							/*证件类型*/
							$('.papersTypeCode').selectloader({'papersTypeList': app.papersTypeList});
							/*婚姻状况*/
							$('.marryCodeType').selectloader({'marryCodeTypeList': app.marryCodeTypeList});
							/*城市代码*/
							$('.provCity').selectloader({'provinceList': app.provinceList});
							/*学历性质*/
							$('.educationalNameCode').selectloader({'educationalList': app.educationalList});
							/*单位性质*/
							$('.corporationList').selectloader({'corporationList': app.corporationList});
							/*职位级别*/
							$('.position').selectloader({'positionList': app.positionList});
							/*所属行业*/
							$('.industry').selectloader({'industryList': app.industryList});
							/*支薪日期*/
							$('.wageDate').selectloader({'wageDateList': app.wageDateList});
							/*还款来源*/
							$('.paymentFrom').selectloader({'paymentFromList': app.paymentFromList});
							/*现住房情况*/
							$('.housingProperty').selectloader({'housingPropertyList': app.housingPropertyList});
							/*地址类型*/
							$('.addressTypeCodeList').selectloader({'addressTypeCodeList': app.addressTypeCodeList});
							$('.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
							/*获得学历*/
							$('.educationalNameCode').selectloader({'educationalCodelList': app.educationalCodeList});
							/*与申请人关系*/
							$('.relationship').selectloader({'relationshipList': app.relationshipList});
							$('.customerTypeList').selectloader({'customerTypeList': app.customerTypeList});
							$('.maxEbCdList').selectloader({'maxEbCdList': app.educationalCodeList});
							$('.liveTypeList').selectloader({'liveTypeList': app.liveTypeList});
							setReadonly();
							/*tab切换*/
							tabChange();
							/*下一申请人*/
							nextPeople();

							isOneTab();
							return;
						}
						app.alertError(res.errors.join('\n'));
					});
				}
			});
        };
        init();
		/*上一步*/
	   $(document).on("click", "#previousPage", function () {
			window.location.href="/cb/call-return-visit/call-loan-information.html?taskId="+app.request.taskId;
		});
		
	   /*下一步*/
	   $(document).on("click", "#nextPage", function () {
			window.location.href="/cb/call-return-visit/call-image-data.html?taskId="+app.request.taskId;
		});
    }(window.jQuery, window.app);

});
