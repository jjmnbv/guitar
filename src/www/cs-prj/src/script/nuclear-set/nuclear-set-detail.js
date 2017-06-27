+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '电核设置',
                url: '/cs/nuclear-set/nuclear-set.html'
            },
            {
                text: '详情',
                url: '#'
            }
        ]
    };
    app.content={
    	"telCheDd":"DH-001",
    	"telCheNa":"通用电核项目",
    	"lists":[
    	{"iteNa":"本人身份核实","telCheTipCo":"您好，请问您的姓名？","telChePersCd":"主申请人","telCheTyCd":"身份类"},
    	{"iteNa":"本人身份核实","telCheTipCo":"您好，请问您的姓名？","telChePersCd":"主申请人","telCheTyCd":"身份类"},
    	{"iteNa":"本人身份核实","telCheTipCo":"您好，请问您的姓名？","telChePersCd":"主申请人","telCheTyCd":"身份类"},
    	{"iteNa":"本人身份核实","telCheTipCo":"您好，请问您的姓名？","telChePersCd":"主申请人","telCheTyCd":"身份类"}
    	]};
}(window.jQuery,window.app);
