<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
app.pathArray=[
      {"code":"add" ,"flag":<spring:eval expression="@FN_CB.checkPath('/cb/loanapply/create')" /> },
      {"code":"update","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapply/update')" />},
      {"code":"view","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapply/view/*')" />},
      {"code":"delete","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapply/remove/*')" />},
      {"code":"refuse","flag": <spring:eval expression="@FN_CB.checkPath('/bpm/refuse/*')" />}
    ];
	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	
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
        text: '贷款申请处理 ',
        url: '#'
      },
      {
        text: '贷款申请简要录入',
        url: '/cb/loan-application/brief-entry.html'
      }
    ]
  };
  
    $(function () {
    $('.dictionarys').selectloader(app);
    $('#mainPage').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CB.toJSON(page)" />
      }
    });
    
    $('#shop').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CB.toJSON(storePage)" />
      }
    });
    
    
    
  });

} (window.jQuery, window.app);
