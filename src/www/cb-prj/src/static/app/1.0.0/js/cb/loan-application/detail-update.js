/**
 * 数据模拟
 */
/*tab切换*/
function tabDelete() {
	/*删除共同申请人*/
	$(document).on("click",".delete-img",function () {
		var parentsLi = $(this).parents('li');
		contIndex = parentsLi.data('indexid');
		if(parentsLi.hasClass('hight-linght')){
			parentsLi.prev().addClass('hight-linght');
			var hightLing = $('#peopleVar').find('.hight-linght');
			currentIndex = hightLing.data('indexid');
			$('#tab' + currentIndex).show();
		}
		parentsLi.remove();
		$('#tab' + contIndex).remove();
		isOneTab();
	});
}
$(function(){
    fromIDsetBir();
});
+function ($, app) {
    var request = app.request;
    App.startPageLoading({animate: true});
    var init = function () {
        $.ajaxSettings.async=false;
		$.Bpm.init({taskId: request.taskId});
		$.Bpm.initBusFormExt(function(formId, busId) {
			if (formId == 'detail-update-form') {
				$.getJSON(app.LOAN_PEOPLE_INFORMATION + busId, function (res) {
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

						$('#detail-update-form1').deserializeObject(res);
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
						$('#detail-update-form1').find("input").uniform();
						  $('#detail-update-form1').find('.date-picker-page').datepicker({
							   rtl: App.isRTL(),
								orientation: "left",
								todayHighlight: true,
								autoclose: !0,
								format: "yyyy-mm-dd",
								'start-date': "+0d",
								language: 'zh-CN'
							}).on('hide', function (e) {
								$(this).parents("form").validate().element($(this).parent().find("input"));
							});

                        $(".bindEvent").each(function(){
                            $(this).val($(this).next('input[type=hidden]').val());
                            if($(this).val()!=""){
                                $(this).val(app.formatCurrencyM($(this).val()));
                            }
                        });

                        /*回显数据判断证件类型是身份证，生日、性别不可修改*/
                        setBirthSex();
						/*tab切换*/
						tabChange();
					   /* dateTime();*/
						/*下一申请人*/
						nextPeople();
						/*删除共同申请人*/
						tabDelete();
						/*没有共同申请人,去掉下一申请人按钮*/
						isOneTab();
						/*校验*/
						$('#detail-update-form1').validate();
						app.bindFormValidation($('#detail-update-form1'));
						$('.add-disabled').attr('disabled','disabled');
						$('.prov-bg').css('background-color','#efefef');
						$('select.addressTypeCodeList').each(function(){
							var rentBody = $(this).parents(".portlet");
							if($(this).val()=="ZZ"){
								rentBody.find('.homeLiveList option[value="ZY"]').hide();
							}else {
								rentBody.find('.homeLiveList option[value="ZY"]').show();
							}
						 });
                        /*租房*/
                        $('select.homeLiveList').each(function(){
                            var rentBody = $(this).parents(".portlet").find('.rent-body');
                            if($(this).val()=="ZF"){
                                rentBody.find('label').addClass('fill');
                                rentBody.find('input[type="text"]').addClass('required');
                            }else {
                                rentBody.find('label').removeClass('fill');
                                rentBody.find('input[type="text"]').removeClass('required');
                            }
                        });
						 return;
					}
					app.alertError(res.errors.join('\n'));
				});
			}
		});
        $.ajaxSettings.async=true;
    };
    init();
	var opinionFormId = "";
	var saveHandle = function (formIdArr) {
		var flag = true;
		var item = $("#detail-update-form1");
		$(item).prop('action', app.DETAIL_UPDATE_PEOPLES);
        $(':disabled').removeAttr('disabled');
		var param = $(item).serializeObject();
		$.Bpm.ajaxPost($(item).prop('action'), 'post',param, false, function (data, textStatus, jqXHR) {
			if (app.isOK(data)) {
				if ($(item).prop('id') == 'detail-update-form1') {
					formIdArr.push({ formId: $(item).data('viewIdname'), id: data.apTr });
                    //回显保存的数据的Id
                   returnMsg(data.apTr,'#detail-update-form1',app.ECHO_ID_LOAN_DETAIL);
				} 
			} else {
				flag = false;
			}
		}, 'application/x-www-form-urlencoded; charset=UTF-8');
		if (formIdArr.length > 0) {
			if (!$.Bpm.postFormIds(formIdArr,opinionFormId)) {
				flag = false;
			}
		}
		return flag;
	};
	/*保存*/
	$(document).on("click", "#saveData", function () {
        if(!$("#detail-update-form1").valid()){
            app.alertError("有必填项未填,请检查!");
            return false;
        }else if (submit()) {
            app.alertOK('保存成功!');
		}else{
			app.alertError("保存失败!");
		}
        $('.add-disabled').attr('disabled','disabled');
        setBirthSex();
		return false;
	});



	function submit() {
		var formIdArr = [];
		return saveHandle(formIdArr);
	}
	function cache() {
		var formIdArr = [];
		var flag = true;
		var item = $("#detail-update-form1");
		$(item).prop('action', app.LOANDETAILAPPLY_CACHE);	
		var param = $(item).serializeObject();
		$.Bpm.ajaxPost($(item).prop('action'), 'post',param, false, function (data, textStatus, jqXHR) {
			if (app.isOK(data)) {
				if ($(item).prop('id') == 'detail-update-form1') {
					formIdArr.push({ formId: $(item).data('viewIdname'), id: data.apTr });						
				} 
			} else {
				flag = false;
			}
		}, 'application/x-www-form-urlencoded; charset=UTF-8');
		return flag;
	}
	/*暂存*/
	$(document).on("click", "#tempData", function () {
        $(':disabled').removeAttr('disabled');
		if (cache()) {
            $('#nextData').attr('disabled','disabled');
            app.alertOK('暂存成功!');
		}else{
			app.alertError("暂存失败!");
		}
        $('.add-disabled').attr('disabled','disabled');
        $('#nextData').removeAttr('disabled');
		return false;
	});

    /*下一步*/
    $(document).on("click", "#nextData", function () {
        $(':disabled').removeAttr('disabled');
		var taskStatus = $.Bpm.findTaskStatus();
        if(!$("#detail-update-form1").valid()){
            app.alertError("有必填项未填,请检查!");
            return false;
        }else if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			window.location.href = "/cb/loan-application/loan-information.html?taskId="+app.request.taskId;
		}else{
			if (submit()) {
				window.location.href = "/cb/loan-application/loan-information.html?taskId="+app.request.taskId;
			}else{
				app.alertError("保存失败!");
			}
			$('.add-disabled').attr('disabled','disabled');
		}
        return false;
    });

    /*添加共同申请人*/
    function addpeople(liIndex){
        $('.tab-box').find(".img-box").remove();
        $('.tab-box ul').append("<li   data-indexid='" + liIndex + "' id='add-list" + liIndex + "'></li>");
        $('.tab-box ul').append("<img class='img-box' title='增加共同申请人' src='/static/app/1.0.0/img/product-set/add.png'>");
        var tpl = Handlebars.compile($('#tabLi-template').html());
        $("#add-list" + liIndex).html(tpl);
        $("#add-list" + liIndex).find('a').attr('data-tab', '#tab' + liIndex);
        var hightLing = $('#peopleVar').find('.hight-linght');
        hightLing.removeClass("hight-linght");
        $("#add-list" + liIndex).addClass('hight-linght');
        /*生成共同申请人*/
        $('.tab-content').append("<div class='tab-pane  peopleListOfGS' data-list-index='" + liIndex + "' id='tab" + liIndex + "'></div>");
        var tp2 = Handlebars.compile($('#peopleListOfGS-template').html());
        $("#tab" + liIndex).html(tp2);
        var a = $("#tab" + liIndex).html().replace(/nameIndex/g, liIndex);
        $("#tab" + liIndex).html(a);
        $("#add-people-body" + liIndex).find('.tab-pane').attr("id", "tab" + liIndex);
        $("#tab" + liIndex).find('.date-picker-page').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            todayHighlight: true,
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        }).on('hide', function (e) {
            $(this).parents("form").validate().element($(this).parent().find("input"));
        });

        /*生成的共同申请人下拉框的加载*/
        $("#tab" + liIndex).find("input").uniform();
        $("#tab" + liIndex).find('.papersTypeList').selectloader({'papersTypeList': app.papersTypeList});
        $("#tab" + liIndex).find('.marryCodeType').selectloader({'marryCodeTypeList': app.marryCodeTypeList});
        $("#tab" + liIndex).find('.paymentFrom').selectloader({'paymentFromList': app.paymentFromList});
        $("#tab" + liIndex).find('.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
        $("#tab" + liIndex).find('.relationshipList').selectloader({'relationshipList': app.relationshipList});
        $("#tab" + liIndex).find('.educationalNameCode').selectloader({'educationalNameCodeList': app.educationalNameCodeList});
        $("#tab" + liIndex).find('.educationalCode').selectloader({'educationalCodeList': app.educationalCodeList});
        $("#tab" + liIndex).find('.corporationProperty').selectloader({'corporationPropertyList': app.corporationPropertyList});
        $("#tab" + liIndex).find('.workProperty').selectloader({'workPropertyList': app.workPropertyList});
        $("#tab" + liIndex).find('.careerCode').selectloader({'careerCodeList': app.careerCodeList});
        $("#tab" + liIndex).find('.position').selectloader({'positionList': app.positionList});
        $("#tab" + liIndex).find('.industryCode').selectloader({'industryCodeList': app.industryCodeList});
        $("#tab" + liIndex).find('.wageDate').selectloader({'wageDateList': app.wageDateList});
        $("#tab" + liIndex).find('.housingProperty').selectloader({'housingPropertyList': app.housingPropertyList});
        $("#tab" + liIndex).find('.provCity_GS').selectloader({'provinceList': app.provinceList});
        $("#tab" + liIndex).find ('.addressTypeCodeList').selectloader({'addressTypeCodeList': app.addressTypeCodeList});
        $("#tab" + liIndex).find ('.customerTypeList').selectloader({'customerTypeList': app.customerTypeList});
        $("#tab" + liIndex).find ('.maxEbCdList').selectloader({'maxEbCdList': app.educationalCodeList});
        $("#tab" + liIndex).find ('.liveTypeList').selectloader({'liveTypeList': app.liveTypeList});
        $("#tab" + liIndex).find('.conSelect select').selectpicker('refresh');
        $("#tab" + liIndex).find('.check-hostory-loan').attr('disabled','disabled');
    }

    $(document).on("click", ".img-box", function () {
        /*tab标签*/
        var liIndex = $(".ul-box li:last").data('indexid');
        if(liIndex=="first"){
            liIndex=0;
            addpeople(liIndex)
        }else{
            liIndex+=1;
            addpeople(liIndex)
        }
        $(".tab-pane").hide();
        $(".tab-pane:last-child").show();
        $('#next-applicant').css('display',"none");
        tabChange();
        tabDelete();
    });

    /*添加主申请人教育信息*/

    $('body').on('click', '.add-loanApplyPeopleOfZS-eduList', function () {
        var loanApplyPeopleOfZSEduList = $(this).parents('.delete-eduList-body').find('.add-loanApplyPeopleOfZS-eduList:last').data('add-list');
        loanApplyPeopleOfZSEduList++;
        $(this).modelCurd({
            target: $("#eduList"),
            template: $('#eduListList-template'),
            self: $(this),
            index: loanApplyPeopleOfZSEduList,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.date-picker-page').datepicker({
                    rtl: App.isRTL(),
                    orientation: "left",
                    todayHighlight: true,
                    autoclose: !0,
                    format: "yyyy-mm-dd",
                    'start-date': "+0d",
                    language: 'zh-CN'
                }).on('hide', function (e) {
                    $(this).parents("form").validate().element($(this).parent().find("input"));
                });
                el.find('.educationalNameCode').selectloader({'educationalNameCodeList': app.educationalNameCodeList});
                el.find('.educationalCode').selectloader({'educationalCodeList': app.educationalCodeList});
            }
        });
    });

    /*添加主申请人单位信息*/
    $('body').on('click', '.add-loanApplyPeopleOfZS-jobList', function () {
        var indexId = $(this).parents('.delete-eduList-body').find('.add-loanApplyPeopleOfZS-jobList:last').data('add-list');
        indexId++;
        $(this).modelCurd({
            target: $("#jobList"),
            template: $('#jobListList-template'),
            self: $(this),
            index: indexId,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.date-picker-page').datepicker({
                    rtl: App.isRTL(),
                    orientation: "left",
                    todayHighlight: true,
                    autoclose: !0,
                    format: "yyyy-mm-dd",
                    'start-date': "+0d",
                    language: 'zh-CN'
                }).on('hide', function (e) {
                    $(this).parents("form").validate().element($(this).parent().find("input"));
                });
                el.find('.corporationProperty').selectloader({'corporationPropertyList': app.corporationPropertyList});
                el.find('.workProperty').selectloader({'workPropertyList': app.workPropertyList});
                el.find('.position').selectloader({'positionList': app.positionList});
                el.find('.provCity').selectloader({'provinceList': app.provinceList});
                el.find('.industryCode').selectloader({'industryCodeList': app.industryCodeList});
                el.find('.wageDate').selectloader({'wageDateList': app.wageDateList});
                el.find('.careerCode').selectloader({'careerCodeList': app.careerCodeList});
                el.find('select').selectpicker('refresh');
            }
        });
    });

    /*添加主申请人住房信息*/
    $('body').on('click', '.add-loanApplyPeopleOfZS-houseList', function () {
        var indexId = $(this).parents('.delete-houseList-body').find('.add-loanApplyPeopleOfZS-houseList:last').data('add-list');
        indexId++;
        $(this).modelCurd({
            target: $("#houseList"),
            template: $('#houseListList-template'),
            self: $(this),
            index: indexId,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
                el.find('.housingProperty').selectloader({'housingPropertyList': app.housingPropertyList});
            }
        });
    });

    /*添加主申请人联系人信息*/
    $('body').on('click', '.add-loanApplyPeopleOfZS-contactList', function () {
        var indexId = $(this).parents('.left-add').find('.delete-home:last').data('add-list');
        indexId++;
        $(this).modelCurd({
            target: $("#tbody_ZS_contactList"),
            template: $('#contactListList-template'),
            self: $(this),
            index: indexId,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.relationshipList').selectloader({'relationshipList': app.relationshipList});

            }
        });
    });

    /*添加主申请人地址信息*/
    $('body').on('click', '.add-loanApplyPeopleOfZS-addressList', function () {
        var indexId = $(this).parents('.delete-addressList-body').find('.add-loanApplyPeopleOfZS-addressList:last').data('add-list');
        indexId++;
        $(this).modelCurd({
            target: $("#addressList"),
            template: $('#addressListList-template'),
            self: $(this),
            index: indexId,
            fn: function (el, index) {
                el.find("input").uniform();
                el.find('.date-picker-page').datepicker({
                    rtl: App.isRTL(),
                    orientation: "left",
                    todayHighlight: true,
                    autoclose: !0,
                    format: "yyyy-mm-dd",
                    'start-date': "+0d",
                    language: 'zh-CN'
                }).on('hide', function (e) {
                    $(this).parents("form").validate().element($(this).parent().find("input"));
                });
                el.find('.addressTypeCodeList').selectloader({'addressTypeCodeList': app.addressTypeCodeList});
                el.find('.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
                el.find('.provCity').selectloader({'provinceList': app.provinceList});
                el.find('select').selectpicker('refresh');
            }
        });
    });

    /*添加共同申请人教育信息*/
    $('body').on('click', '.peopleListOfGS-eduList', function () {
        /*教育信息的个数*/
        var second = $(this).parents('.peopleList-eduList-body').find('.peopleListOfGS-eduList:last').data('add-list');
        second++;
        /*父级list的下标*/
        var first = $(this).parents('.tab-pane').data("list-index");
        $(this).parents('.peopleList-eduList-body').append("<div id='add-eduList" + first + second + "'></div>");
        $(this).modelCurd({
            target: $('#add-eduList' + first + second),
            template: $('#peopleListOfGS-eduList-template'),
            self: $(this),
            index: second,
            fn: function (el, index) {

            }
        });
        /*增加的模块添加父级list*/
        var changeHtml = $('#add-eduList' + first + second).html().replace(/\[]/g, "[" + first + "]");
        var addHtml = $('#add-eduList' + first + second).html(changeHtml);
        $('#add-eduList' + first + second).find("input").uniform();
        $('#add-eduList' + first + second).find('.date-picker-page').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            todayHighlight: true,
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        }).on('hide', function (e) {
            $(this).parents("form").validate().element($(this).parent().find("input"));
        });
        $('#add-eduList' + first + second).find('.educationalNameCode').selectloader({'educationalNameCodeList': app.educationalNameCodeList});
        $('#add-eduList' + first + second).find('.educationalCode').selectloader({'educationalCodeList': app.educationalCodeList});
    });

    /*添加共同申请人单位信息*/
    $('body').on('click', '.peopleListOfGS-jobList', function () {
        /*单位信息的个数*/
        var second = $(this).parents('.peopleList-jobList-body').find('.peopleListOfGS-jobList:last').data('add-list');
        second++;
        /*父级list的下标*/
        var first = $(this).parents('.tab-pane').data("list-index");
        $(this).parents('.peopleList-jobList-body').append("<div id='add-jobList" + first + second + "'></div>");
        $(this).modelCurd({
            target: $('#add-jobList' + first + second),
            template: $('#peopleListOfGS-jobList-template'),
            self: $(this),
            index: second,
            fn: function (el, index) {

            }
        });

        /*增加的模块添加父级list*/
        var changeHtml = $('#add-jobList' + first + second).html().replace(/\[]/g, "[" + first + "]");
        changeHtml = changeHtml.replace(/\_GSjobIndex_/g, "_" + first + "_");
        var addHtml = $('#add-jobList' + first + second).html(changeHtml);
        $('#add-jobList' + first + second).find('.provCityGSJob').selectloader({'provinceList': app.provinceList});
        $('#add-jobList' + first + second).find("input").uniform();
        $('#add-jobList' + first + second).find('.date-picker-page').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            todayHighlight: true,
            autoclose: !0,
            format: "yyyy-mm-dd",
            'start-date': "+0d",
            language: 'zh-CN'
        }).on('hide', function (e) {
            $(this).parents("form").validate().element($(this).parent().find("input"));
        });
        $('#add-jobList' + first + second).find('.corporationProperty').selectloader({'corporationPropertyList': app.corporationPropertyList});
        $('#add-jobList' + first + second).find('.workProperty').selectloader({'workPropertyList': app.workPropertyList});
        $('#add-jobList' + first + second).find('.position').selectloader({'positionList': app.positionList});
        $('#add-jobList' + first + second).find('.provCity').selectloader({'provinceList': app.provinceList});
        $('#add-jobList' + first + second).find('.industryCode').selectloader({'industryCodeList': app.industryCodeList});
        $('#add-jobList' + first + second).find('.wageDate').selectloader({'wageDateList': app.wageDateList});
        $('#add-jobList' + first + second).find('.careerCode').selectloader({'careerCodeList': app.careerCodeList});
        $('#add-jobList' + first + second).find('select').selectpicker('refresh');
    });

    /*添加共同申请人住房信息*/
    $('body').on('click', '.peopleList-houseList', function () {
        /*单位信息的个数*/
        var second = $(this).parents('.peopleList-houseList-body').find('.peopleList-houseList:last').data('add-list');
        second++;
        /*父级list的下标*/
        var first = $(this).parents('.tab-pane').data("list-index");
        $(this).parents('.peopleList-houseList-body').append("<div id='add-houseList" + first + second + "'></div>");
        $(this).modelCurd({
            target: $('#add-houseList' + first + second),
            template: $('#peopleListOfGS-houseList-template'),
            self: $(this),
            index: second,
            fn: function (el, index) {
                el.find("input").uniform();
            }
        });
        /*增加的模块添加父级list*/
        var changeHtml = $('#add-houseList' + first + second).html().replace(/\[]/g, "[" + first + "]");
        changeHtml = changeHtml.replace(/\_GSjobIndex_/g, "_" + first + "_");
        var addHtml = $('#add-houseList' + first + second).html(changeHtml);
        var addHtml = $('#add-houseList' + first + second).html(changeHtml);
        $('#add-houseList' + first + second).find('.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
        $('#add-houseList' + first + second).find('.housingProperty').selectloader({'housingPropertyList': app.housingPropertyList});
    });

    /*添加共同申请人地址信息*/
    $('body').on('click', '.peopleList-addressList', function () {
        /*单位信息的个数*/
        var second = $(this).parents('.peopleList-addressList-body').find('.peopleList-addressList:last').data('add-list');
        second++;
        /*父级list的下标*/
        var first = $(this).parents('.tab-pane').data("list-index");
        $(this).parents('.peopleList-addressList-body').append("<div id='add-addressList" + first + second + "'></div>");
        $(this).modelCurd({
            target: $('#add-addressList' + first + second),
            template: $('#peopleListOfGS-addressList-template'),
            self: $(this),
            index: second,
            fn: function (el, index) {
            }
        });
        /*增加的模块添加父级list*/
        var changeHtml = $('#add-addressList' + first + second).html().replace(/\[]/g, "[" + first + "]");
        changeHtml = changeHtml.replace(/\_psaddressList_/g, "_" + first + "_");
        var addHtml = $('#add-addressList' + first + second).html(changeHtml);
        $('#add-addressList' + first + second).find('select.provaddressList').selectloader({'provinceList': app.provinceList});
        $('#add-addressList' + first + second).find('select.homeLiveList').selectloader({'homeLiveList': app.homeLiveList});
        $('#add-addressList' + first + second).find('select.provCity').selectloader({'provinceList': app.provinceList});
        $('#add-addressList' + first + second).find('select.addressTypeCodeList').selectloader({'addressTypeCodeList': app.addressTypeCodeList});
        $('#add-addressList' + first + second).find('select').selectpicker('refresh');
    });

    /*添加共同申请人联系人信息*/
    $('body').on('click', '.peopleList-contactList', function () {
        /*联系人信息的个数*/
        var second = $(this).parents('.left-add').find('.delete-home:last').data('add-list');
        second++;
        /*父级list的下标*/
        var first = $(this).parents('.tab-pane').data("list-index");
        $(this).modelCurd({
            target: $(this).parents('.left-add').find('.peopleList-contactList-body'),
            template: $('#peopleListOfGS-contactList-template'),
            self: $(this),
            index: second,
            fn: function (el, index) {

            }
        });
        /*增加的模块添加父级list*/
        var changeHtml = $(this).parents('.left-add').find('.delete-home:last').html().replace(/\[]/g, "[" + first + "]");
        var addHtml = $(this).parents('.left-add').find('.delete-home:last').html(changeHtml);
        $(this).parents('.left-add').find('.delete-home:last').find('.relationshipList').selectloader({'relationshipList': app.relationshipList});
        $(this).parents('.left-add').find("input").uniform();
        $('select').selectpicker('refresh');
    });


    /*删除教育信息*/
    deleteList(".delete-eduList",".delete-eduList-body");
    /*删除单位信息*/
    deleteList(".delete-jobList",".delete-eduList-body");
    /*删除住房信息*/
    deleteList(".delete-houseList",".delete-houseList-body");
    /*删除地址信息*/
    deleteList(".delete-addressList",".delete-addressList-body");

    function deleteList(targetName,deleteBody){
        $(document).on("click", targetName, function () {
            var listlength = $(this).parents(deleteBody).find(targetName).length;
            if(listlength>1){
                $(this).parents(".portlet").remove();
            }else {
                app.alertError( '仅有一条数据，不能删除!!');
            }
        });
    }

    $(document).on("click", ".delete-table", function () {
        var thisTable=$(this);
        thisTable.getModal({
            title: '删除联系人',
            size: 'modal-sm',
            selector: function () {
                return !!thisTable.parents(".portlet").find('[type=radio]:checked').length;
            },
            compileBefore: function (modal) {
                thisTable.parents(".portlet").find('[type=radio]:checked').parents('tr').remove();
            }
        })
    });

    /*.当居住类型为租房时 ，“租金”输入框为必填*/
     $(document).on('change','select.homeLiveList',function(){
         var rentBody = $(this).parents(".portlet").find('.rent-body');
         if($(this).val()=="ZF"){
             rentBody.find('label').addClass('fill');
             rentBody.find('input[type="text"]').addClass('required');
         }else {
             rentBody.find('label').removeClass('fill');
             rentBody.find('input[type="text"]').removeClass('required');
             rentBody.find('input').val("");
             $(this).parents("form").validate().element(rentBody.find('input[type="text"]'));
         }
     });
    addressType();
   /*租住地址时，当前居住类型不可选”自有”*/
   function addressType(){
        $(document).on('change','select.addressTypeCodeList',function(){
            var rentBody = $(this).parents(".portlet");
            if($(this).val()=="ZZ"){
                rentBody.find('select.homeLiveList option[value="ZY"]').hide();
               $('select.homeLiveList').selectpicker('refresh');

            }else {
                rentBody.find('select.homeLiveList option[value="ZY"]').show();
                $('select.homeLiveList').selectpicker('refresh');
            }
        });
    }
    /*根据主申请人的证件类型、证件号码、申请人姓名的改变生成客户编号*/
    getCustomerNo();
}(window.jQuery, window.app);


