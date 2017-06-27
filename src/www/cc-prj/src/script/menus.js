
+function ($, app) {
    app.menus = [
        {
            "id": 1,
            "text": "我的任务",
            "url": "/index.html",
            "style": "{\"iconClassName\":\"icon-home\"}",
            "level": 1,
            "dispOrder": 0,
            "createTime": null,
            "updateTime": null,
            "styleObject": {
                "iconClassName": "icon-my-task"
            }
        }
    ];
    app.mainMenus = [
        {
            "id": 1,
            "text": "首 页",
            "url": "/index.html",
            menuIcon: 'nav-index',
            "level": 1,
            "dispOrder": 0,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "菜单管理",
                    "url": "/menu/index",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [
                        {
                            "id": 3,
                            "text": "菜单管理",
                            "url": "/menu/index",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        }
                    ],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": []
        },
        {
            "id": 2,
            "text": "系统配置",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            menuIcon:'nav-system',
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "币种信息管理",
                    "url": "/cc/params/parcurtyp/parCurTypIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 2,
                    "text": "还款方式配置表管理",
                    "url": "/cc/params/parpaycfg/parPayCfgIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 2,
                    "text": "还款顺序管理",
                    "url": "/cc/params/parpayord/parPayOrdIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 5,
                    "text": "基准利率分类管理",
                    "url": "/cc/params/parrattyp/parRatTypIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 6,
                    "text": "交易码配置管理",
                    "url": "/cc/params/partrcfg/parTrCfgIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 7,
                    "text": "科目信息配置表管理",
                    "url": "/cc/system/syaccfg/syAcCfgIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 8,
                    "text": "系统基本信息表管理",
                    "url": "/cc/system/sybainf/syBaInf-look.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 9,
                    "text": "流水信息表管理",
                    "url": "/cc/params/parseqinf/parSeqInfIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 10,
                    "text": "字典信息表管理",
                    "url": "/cc/params/csdicfg/csdicfg-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 11,
                    "text": "节假日管理",
                    "url": "/cc/params/parholdaycfg/parHolDayCfg-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 12,
                    "text": "系统刷新缓存管理",
                    "url": "/cc/system/syrefresh/sysRefreshIndex.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                }
            ]
        },
        {
            "id": 3,
            "text": "业务办理业务",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            menuIcon:'nav-middle',
            "level": 1,
            "dispOrder": 9999,
            "children": [
            	{
            		"id": 31,
	                "text": "贷款业务",
	                "style": "{}",
	                "level": 2,
	                "dispOrder": 0,
	                "children": [
		                {
		                    "id": 31,
		                    "text": "贷款发放",
		                    "url": "/cc/loan/lnloinft/lnloinft-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 32,
		                    "text": "资金出账",
		                    "url": "/cc/loan/lnsetlacinf/lnsetlacinf-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 33,
		                    "text": "放款成功",
		                    "url": "/cc/loan/lnloinf/lnloinf-list.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 311,
		                    "text": "息税减免信息管理",
		                    "url": "/cc/loan/lnrrinf/lnrrinf-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 312,
		                    "text": "贷款展期申请信息管理",
		                    "url": "/cc/loan/lnexdapp/lnexdapp-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 313,
		                    "text": "利率变更信息管理",
		                    "url": "/cc/loan/lnratchg/lnratchg-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 314,
		                    "text": "主动还款申请",
		                    "url": "/cc/loan/lnrpt/lnrpt-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 315,
		                    "text": "还款账号变更",
		                    "url": "/cc/loan/lnacchg/lnacchg-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 316,
		                    "text": "贷款还款方式变更表管理",
		                    "url": "/cc/loan/lnpaychgt/lnpaychgt-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                }
		              
		            ]
        		},
        		{
            		"id": 31,
	                "text": "内部存款业务",
	                "style": "{}",
	                "level": 2,
	                "dispOrder": 0,
	                "children": [
		                {
		                    "id": 39,
		                    "text": "存款账户信息管理",
		                    "url": "/cc/loan/lndepinf/lndepinf-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		                {
		                    "id": 310,
		                    "text": "存款账户交易信息管理",
		                    "url": "/cc/loan/lndeptrdinf/lndeptrdinf-index.html",
		                    "style": "{}",
		                    "level": 2,
		                    "dispOrder": 0
		                },
		            ]
        		}
            ]
        },
        {
            "id": 4,
            "text": "业务查询",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            menuIcon:'nav-middle',
            "level": 1,
            "dispOrder": 9999,
            "children": [
            	{
                    "id": 315,
                    "text": "分户账信息查询",
                    "url": "/cc/loan/lnloinflgd/lnloinf-lgd.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 316,
                    "text": "交易分录信息查询",
                    "url": "/cc/loan/lnloinfentbrf/lnloinf-entbrf.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                
            ]
        },
        {
            "id": 5,
            "text": "日终管理",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            menuIcon:'nav-task',
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 10,
                    "text": "任务管理",
                    "url": "/cc/batch/battaskinf/battaskinf-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                 {
                    "id": 11,
                    "text": "执行计划管理",
                    "url": "/cc/batch/batexepl/batexepl-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
              {
                    "id": 12,
                    "text": "执行记录管理",
                    "url": "/cc/batch/batchhis/batchhis-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 15,
                    "text": "业务流水管理",
                    "url": "/cc/batch/batbizlog/batbizlog-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                },
                {
                    "id": 15,
                    "text": "异常记录管理",
                    "url": "/cc/batch/batcherrlog/batcherrlog-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0
                }
            ]
        }
    ];
} (window.jQuery, window.app);
