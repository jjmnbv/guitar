+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '促销配置',
                url: '/cs/promotion-allocation/cs/promotion-allocation.html'
            },
            {
                text: '详情',
                url: '#'
            }
        ]
    };
    
    app.content = {
    	"promNo":"aaa",
    	"promNa":"bbb",
    	"co":"adad",
    	"beDt":"2016-09-09",
    	"enDt":"2016-10-10",
    	"rateDisLists":[
    	{"promTyCd":"执行利率1","promCondPmId":0,"promBenePc":"12123","promCondMinPlQt":122,"promCondMaxPlQt":1324},
    	{"promTyCd":"执行利率2","promCondPmId":1,"promBenePc":"11223","promCondMinPlQt":122,"promCondMaxPlQt":1324},
    	{"promTyCd":"执行利率3","promCondPmId":0,"promBenePc":"12123","promCondMinPlQt":122,"promCondMaxPlQt":1324}
    	],
    	"feeDisLists":[
    	{"feCd":0,"feCalCd":0,"promBeneCd":0,"promBenePc":122,"promBeneAm":1324,"promCondMinPlQt":1231,"promCondMaxPlQt":2313},
    {"feCd":1,"feCalCd":1,"promBeneCd":1,"promBenePc":122,"promBeneAm":1324,"promCondMinPlQt":1231,"promCondMaxPlQt":2313},
    {"feCd":0,"feCalCd":0,"promBeneCd":0,"promBenePc":122,"promBeneAm":1324,"promCondMinPlQt":1231,"promCondMaxPlQt":2313}
    	]
    	
    }
}(window.jQuery,window.app);
