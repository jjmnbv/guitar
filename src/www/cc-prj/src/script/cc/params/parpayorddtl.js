+function($, app) {
	 /**
	   * 面包屑导航数据
	   * @type {{icon: string, dt: string, dd: Array}}
	   */
		 app.crumbs = {
		    dt: {
		      text: '主页',
		      url: '#'
		    },
		    dd: [
				{
					text:'还款顺序管理',
					url:'../parpayord/parPayOrdIndex.html'
				},
		      {
		        text: '还款顺序配置明细表管理',
		        url: '#'
		      }
		    ]
		 };
			
} (window.jQuery, window.app);


