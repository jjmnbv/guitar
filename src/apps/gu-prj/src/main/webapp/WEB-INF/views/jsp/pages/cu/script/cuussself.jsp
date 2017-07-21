<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};
/**
 * 数据模拟
 */
+function ($, app) {
  /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '个人工作台',
            url: '#'
            
        },
        dd: [
            {
            text: '个人设置',
            url: '#'
            
            },
            {
                text: '个人信息维护',
                url: '/cu/personal-settings/personal-info-maintenance.html'
            }
        ]
    };
     /**
    * 引用地址:/script/cuuss
    * 状态：st
    * 证件类型：paTyCd
    * 性别：sexCd
    * 是否客服经理:cuMaYn
    * 是否主管:exeYn
    * 机构等级:brLevQt
    * 是否审批岗位 ：auPostYn
    * 是否催收岗位 ：coPostYn
    * 是否商店使用 ：stoUseYn	
    * 请假状态 ：holYn	
    */
  app.pathArray=[
  		{"code":"update" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/cuuss/updateCuUs')" /> }
    ];
  app.st = app.dicts.dict_28;
  app.paTyCd = app.dicts.dict_17;
  app.sexCd = app.dicts.dict_10;
  app.cuMaYn=[
        {"code":"N","name":"否"},
        {"code":"Y","name":"是"},
    ];
   app.exeYn=[
        {"code":"N","name":"否"},
        {"code":"Y","name":"是"},
    ];
   app.brLevQt=[
        {"code":1,"name":"一级"},
        {"code":2,"name":"二级"},
    ]; 
   app.auPostYn=[
        {"code":"N","name":"否"},
        {"code":"Y","name":"是"},
    ];
   app.coPostYn=[
        {"code":"N","name":"否"},
        {"code":"Y","name":"是"},
    ];
    app.stoUseYn=[
        {"code":"N","name":"否"},
        {"code":"Y","name":"是"},
    ];
    app.holYn=[
        {"code":"N","name":"休假中"},
        {"code":"Y","name":"上班"},
    ];
  app.newBrNo=<spring:eval expression="@FN_CU.toJSON(checkCuBrSList)" />;
 $(function () {
  $('#mainPage').find('.pagination-reload').click();
 });
}(window.jQuery, window.app);