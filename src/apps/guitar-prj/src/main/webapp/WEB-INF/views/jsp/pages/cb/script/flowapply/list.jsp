<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
app.pathArray=[

    ];
	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
   	icon: 'business-processing',
    dt: {
      text: '我的任务',
      url: '#'
    },
    dd: [
      {
        text: '待办任务 ',
        url: '#'
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
    
    
  });

} (window.jQuery, window.app);
