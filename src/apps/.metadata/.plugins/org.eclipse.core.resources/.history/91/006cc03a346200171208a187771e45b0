<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
    /*电核初核贷款信息：*/
app.pathArray=[
      {"code":"saveData","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapplyExamFirst/viewPeople/*')" />}
    ];
	app.feeTypeCodeList=app.dicts.dict_1;	/*费用类型*/
	app.paymentMethodIdList=app.dicts.dict_37;/*还款类型*/
	app.loanUseCodeList =app.dicts.dict_137; /*贷款用途*/
	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	app.materialTypeCodeList=app.dicts.dict_52;/*材料类型代码*/
	app.paymentTypeList=app.dicts.dict_2;/*费用收取类型*/
	app.materialCollectionCodeList=app.dicts.dict_122;/*材料收集方式*/
	app.materialPhCodeList=app.dicts.dict_51;/*材料用途*/
	app.goodsTypeList=app.dicts.dict_138;/*商品类型*/
	app.useCodeList=app.dicts.dict_65;/*账号用途*/
	app.wageDateList = $.parseJSON(createMonthDay());
	app.loanTypeList = '<%=request.getAttribute("loanType")%>';   /*金融产品*/
	
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
                text: '电核/初审',
                url: '/cb/nucleus-nucleus/nucleus-nucleus-list.html'
            },
            {
            	text: '贷款信息',
                url: '#'
            }
        ]
    };

} (window.jQuery, window.app);


function createMonthDay(){
		var jsonTemp = '[';
		for(var i = 1;i<=31;i++){
			if(i == 1){
				jsonTemp += '{"name":"'+i+'","code":"'+i+'"}';
			}else{
				jsonTemp += ',{"name":"'+i+'","code":"'+i+'"}';
			}
		}
		jsonTemp += ']';
		return jsonTemp;
	}
