<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
		/*证件类型*/
        app.papersTypeList =app.dicts.dict_17;
        /*婚姻状况*/
        app.marryCodeTypeList =app.dicts.dict_11;
        /*学历性质*/
        app.educationalList =app.dicts.dict_73;
         /*单位性质*/
        app.corporationList =app.dicts.dict_14;
         /*职位级别*/
        app.positionList =app.dicts.dict_20;
        /*所属行业*/
        app.industryList =app.dicts.dict_22;
		 /*支薪日期*/
        app.wageDateList =[
        {"code":0,"name":1},
        {"code":1,"name":2},
        {"code":2,"name":3},
        {"code":3,"name":4},
        {"code":4,"name":5},
        {"code":5,"name":6},
        {"code":6,"name":7},
        {"code":7,"name":8},
        {"code":8,"name":9},
        {"code":9,"name":10},
        {"code":10,"name":11},
        {"code":11,"name":12},
        {"code":12,"name":13},
        {"code":13,"name":"14"},
        {"code":14,"name":"15"},
        {"code":15,"name":"16"},
        {"code":16,"name":"17"},
        {"code":17,"name":"18"},
        {"code":18,"name":"19"},
        {"code":19,"name":"20"},
        {"code":20,"name":"21"},
        {"code":21,"name":"22"},
        {"code":22,"name":"23"},
        {"code":23,"name":"24"},
        {"code":24,"name":"25"},
        {"code":25,"name":"26"},
        {"code":26,"name":"27"},
        {"code":27,"name":"28"},
        {"code":28,"name":"29"},
        {"code":29,"name":"30"},
        {"code":30,"name":"31"},
    ];

        /*还款来源*/
        app.paymentFromList =app.dicts.dict_15;
        /*现住房情况housingProperty*/
        app.housingPropertyList =app.dicts.dict_12;
        /*地址类型*/
        app.addressTypeCodeList =app.dicts.dict_147;
        app.homeLiveList =app.dicts.dict_146;
        /*与申请人关系*/
        app.relationshipList =app.dicts.dict_16;
		/*学历代码*/
        app.educationalCodelList =app.dicts.dict_13;
        app.customerTypeList = app.dicts.dict_7;   /*客户类型*/
	app.liveTypeList = app.dicts.dict_86;   /*户口性质*/
/**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '业务办理',
            url: '#'
        },
        dd: [
            {
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '欺诈审批',
                url: '/cb/fraud-cognizance/fraud-list.html'
            },
            {
                text: '申请人信息',
                url: '/cb/fraud-cognizance/fraud-applicant-information.html'
            }
        ]
    };
} (window.jQuery, window.app);

