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
                text: '设计',
                url: '#'
            }
        ]
    };
    app.telChePersCdList = [
        {"code":0,"name":"主申请人"},
        {"code":1,"name":"共同申请人"},
        {"code":2,"name":"保证人"},
        {"code":3,"name":"委托人"},
        ];
    app.telCheTyCdList = [
        {"code":0,"name":"身份类"},
        {"code":1,"name":"单位类"}
        ];
    app.page={
    "content": [
      {
        "id":1,
        "iteNa":"本人身份核实",
        "telChePersCd":"0",
        "telCheTipCo":"您好，请问您的姓名？",
        "telCheTyCd":"0",
        "createDate":"2016-09-01"
      },
      {
        "id":1,
        "iteNa":"工作信息是否匹配",
        "telChePersCd":"1",
        "telCheTipCo":"当前在什么公司工作？",
        "telCheTyCd":"1",
        "createDate":"2016-09-01"
      },
      {
        "id":1,
        "iteNa":"单位电话是否真实",
        "telChePersCd":"1",
        "telCheTipCo":"当前在什么公司工作？",
        "telCheTyCd":"1",
        "createDate":"2016-09-01"
      }
    ],
    "totalElements": 23,
    "totalPages": 3,
    "size": 10,
    "number": 0,
    "numberOfElements": 20,
    "pages": [
      1,
      2,
      3
    ]
}
      
}(window.jQuery,window.app);
