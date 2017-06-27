+function ($, app) {
    app.leftMenus = [
        {
            "id": 1,
            "text": "测试服务调用",
            "url": "/cr/test/testService.html",
            menuIcon: 'nav-entity',
            "level": 1
        },
        {
            "id": 1,
            "text": "实体信息",
            "url": "/cr/entityInfo/entityInfo.html",
            menuIcon: 'nav-entity',
            "level": 1
        },
        {
            "id": 1,
            "text": "业务申请信息",
            "url": "/cr/bizApplicationInfo/bizApplicationInfo.html",
            menuIcon: 'nav-bizApply',
            "level": 1
        },
        {
            "id": 1,
            "text": "准入规则",
            "url": "javascript:;",
            menuIcon: 'nav-validateRule',
            "level": 1,
            "children": [
                {
                    "text": "检查规则",
                    "url": "/cr/accessRules/validationRules.html"
                },
                {
                    "text": "身份校验规则",
                    "url": "/cr/accessRules/idValidationRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4002"
                },
                {
                    "text": "勾稽规则",
                    "url": "/cr/accessRules/checkedRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4003"	
                },
                {
                    "text": "黑名单规则",
                    "url": "/cr/accessRules/blacklistRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4004"
                },
                {
                    "text": "职检规则",
                    "url": "/cr/accessRules/jobInspectionRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4005"
                },
                {
                    "text": "物检规则",
                    "url": "/cr/accessRules/materialCheckRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4006"
                },
                {
                    "text": "欺诈规则",
                    "url": "/cr/accessRules/fraudRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4007"
                },
                {
                    "text": "外部规则",
                    "children": [
                        {
                            "text": "个人基本信息核查",
                            "url": "/cr/accessRules/externalRules/personalInfoForVerify.html"
                            //"url": "/cr/accessRules/validationRules.html?businessType=4008"
                        },
                        {
                            "text": "不良信息扫描",
                            "url": "/cr/accessRules/externalRules/badInfoScanning.html"
                            //"url": "/cr/accessRules/validationRules.html?businessType=4009"
                        },
                        {
                            "text": "多平台借贷申请检测",
                            "url": "/cr/accessRules/externalRules/multiPlatformTesting.html"
                            //"url": "/cr/accessRules/validationRules.html?businessType=4010"
                        }
                    ]
                },
                {
                    "text": "人行征信规则",
                    "url": "/cr/accessRules/pcrRules.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4011"
                },
                {
                    "text": "规则报告",
                    "url": "/cr/accessRules/ruleReport1.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4012"
                },
                /*{
                    "text": "规则报告2",
                    "url": "/cr/accessRules/ruleReport2.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4013"
                },*/
                {
                    "text": "征信报告",
                    "url": "/cr/accessRules/creditReport.html"
                    //"url": "/cr/accessRules/validationRules.html?businessType=4014"
                }
            ]
        },
        {
            "id": 1,
            "text": "申请评分报告",
            "url": "javascript:;",
            menuIcon: 'nav-applyReport',
            "level": 1,
            "children": [
                {
                    "text": "消费贷",
                    "url": "/cr/applyScoreReport/cash-loans.html"
                },
                {
                    "text": "教育贷",
                    "url": "/cr/applyScoreReport/edu-loans.html"
                },
                {
                    "text": "旅游贷",
                    "url": "/cr/applyScoreReport/travel-loans.html"
                },
                {
                    "text": "装修贷",
                    "url": "/cr/applyScoreReport/decoration-loans.html"
                }
            ]
        },

        {
            "id": 1,
            "text": "授信额度",
            "url": "/cr/creditLimit/credit-limit.html",
            menuIcon: 'nav-creditLimit',
            "level": 1
        },
        {
            "id": 1,
            "text": "行为评分",
            "url": "/cr/behaviorGrade/behavior-grade.html",
            menuIcon: 'nav-behaviorG',
            "level": 1
        },
        {
            "id": 1,
            "text": "预警",
            "url": "javascript:;",
            menuIcon: 'nav-loanWarning',
            "level": 1,
            "children": [
                {
                    "text": "贷前预警1",
                    "url": "/cr/earlyWarning/preLoanWarning1/preLoan-warning1.html"
                }
//                {
//                    "text": "贷前预警2",
//                    "url": "/cr/earlyWarning/preLoanWarning2/preLoan-warning2.html"
//                },
//                 {
//                     "text": "贷后预警",
//                     "url": "/cr/earlyWarning/afterLoanWarning/afterLoan-warning.html"
//                 }
            ]
        },
        {
            "id": 1,
            "text": "风险参数",
            "url": "javascript:;",
            menuIcon: 'nav-riskParams',
            "level": 1,
            "children": [
                {
                    "text": "条件参数",
                    "url": "javascript:;",
                    "children": [
                        {
                            "text": "证件类型",
                            "url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5001"
                        },
                        {
                            "text": "婚姻状况",
                            "url": "/cr/riskParams/conditionParams/maritalStatus/marital-status.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5002"
                        },
                        {
                            "text": "学历",
                            "url": "/cr/riskParams/conditionParams/education/education.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5003"
                        },
                        {
                            "text": "是否有私家车",
                            "url": "/cr/riskParams/conditionParams/isHavedCar/isHaved-car.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5004"
                        },
                        {
                            "text": "是否有社保／公积金",
                            "url": "/cr/riskParams/conditionParams/isHavedSocialSecurity/isHaved-socialSecurity.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5005"
                        },
                        {
                            "text": "申请人员类别",
                            "url": "/cr/riskParams/conditionParams/applyUserTyp/applyUser-type.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5006"
                        },
                        {
                            "text": "房产类别",
                            "url": "/cr/riskParams/conditionParams/houseTyp/house-type.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5007"
                        },
                        {
                            "text": "筛选条件",
                            "url": "/cr/riskParams/conditionParams/filterCondition/filter-condition.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5008"
                        },
                        {
                            "text": "贷款用途",
                            "url": "/cr/riskParams/conditionParams/loanUse/loan-use.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5009"
                        },
                        {
                            "text": "还款方式",
                            "url": "/cr/riskParams/conditionParams/repayWay/repay-way.html"
                            //"url": "/cr/riskParams/conditionParams/identifyTyp/identify-type.html?dicCy=5010"
                        }
                    ]
                },
                {
                    "text": "维度参数",
                    "url": "javascript:;",
                    "children": [
                        {
                            "text": "产品种类",
                            "url": "/cr/riskParams/dimensionParams/productTyp/product-type.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6001"
                        },
                        {
                            "text": "货币代码",
                            "url": "/cr/riskParams/dimensionParams/currencyCode/currency-code.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6002"
                        },
                        {
                            "text": "国家",
                            "url": "/cr/riskParams/dimensionParams/country/country.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6003"
                        },
                        {
                            "text": "省份",
                            "url": "/cr/riskParams/dimensionParams/province/province.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6004"
                        },
                        {
                            "text": "行业",
                            "url": "/cr/riskParams/dimensionParams/industry/industry.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6005"
                        },
                        {
                            "text": "地区",
                            "url": "/cr/riskParams/dimensionParams/region/region.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6006"
                        },
                        {
                            "text": "数据源",
                            "url": "/cr/riskParams/dimensionParams/dataSource/data-source.html"
                            //"url": "/cr/riskParams/dimensionParams/productTyp/product-type.html?dimCy=6007"
                        }
                    ]
                }
            ]
        }
    ];

}(window.jQuery, window.app);
