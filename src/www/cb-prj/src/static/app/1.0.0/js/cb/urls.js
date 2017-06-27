+function ($, app) {
    "use strict ";

    $.extend(app, {
            WAITING: app.base + '/cb/index/waiting',
            WARNING: app.base + '/cb/index/warning',
            NOTICE: app.base + '/cb/index/notice',
            ORGANIZATION: app.base + '/cb/business-partner/organization',
            MANAGER: app.base + '/cb/business-partner/manager',
            PARTNERLIST: app.base + '/cb/business-partner/partner-list',
            STORELIST: app.base + '/cb/store/store-list',
            PARTNER: app.base + '/cb/store/partner'
        },
        {
            /*首页*/
            INDEX: app.base + '/cb/myTask/waiting',
            /*我的任务主页*/
              /*代办任务列表*/
            MYTASKWAITING: app.base + '/cb/myTask/waiting',
              /*预警列表*/
            MYTASKWARNING: app.base + '/cb/myTask/warning',
              /*公告列表*/
            MYTASKNOTICE: app.base + '/cb/myTask/notice',
              /*弹框列表*/
            INCOMING_PART_NUMBER:app.base + '/cb/myTask/incoming-part-number',

            /*代办任务列表*/
            MYTASK_WAITING_LIST: app.base + ' /cb/flowloanapply/index/tasktodo/',
            //MYTASK_WAITING_LIST: app.base + '/cb/mytask-list/mytask-waiting-list',

            /*已办任务列表*/
               /*接口地址*/
           MYTASK_FINISH_LIST: app.base + '/cb/flowloanapply/index/taskdone/',
            //MYTASK_FINISH_LIST: app.base + '/cb/mytask-list/mytask-finish-list',

            /*已结任务列表*/
             MYTASK_END_LIST: app.base + '/cb/flowloanapplyhistory/index/tasksettled/',
            // MYTASK_END_LIST: app.base + '/cb/mytask-list/mytask-end-list',

            /*取消任务列表*/
            MYTASK_CANCLE_LIST: app.base + '/cb/flowloanapplyhistory/index/taskcancel/',
            // MYTASK_CANCLE_LIST: app.base + '/cb/mytask-list/mytask-cancle-list',

            /*拒绝任务列表*/
           MYTASK_REFUSE_LIST: app.base + '/cb/flowloanapplyhistory/index/taskrefuse/',
            //MYTASK_REFUSE_LIST: app.base + '/cb/mytask-list/mytask-refuse-list'
           /*待办表的列表*/
           FLOWLOANAPPLY_LIST: app.base + '/cb/flowloanapply/list',
            FLOW_APPLY_TODO_LIST:app.base + '/cb/flowapply/tasktodo/',
            FLOW_APPLY_DONE_LIST:app.base + '/cb/flowapply/taskdone/',
            FLOW_APPLY_VIEW:app.base + '/cb/flowapply/view/'
        },
        /*业务办理*/
        /*贷款申请简要录入*/
        {
            /*贷款申请简要录入列表*/
             //LOAN_APPLICATION_BRIEF_ENTRY: app.base + '/cb/loan-application/brief-entry/page/',
            LOAN_APPLICATION_BRIEF_ENTRY: app.base + '/cb/loanapply/page',
            /*贷款申请简要录入列表删除*/
            LOAN_APPLICATION_DELETE_DATA: app.base + '/cb/loanapply/remove/',
            /*贷款申请简要录入查看*/
            BRIEFT_ENTRY_VIEW:app.base+'/cb/loanapply/view/',
            /*贷款申请简要录入修改*/
            BRIEF_UPDATE:app.base+'/cb/loanapply/update',

            /*门店列表展示*/
            SHOP: app.base + '/cb/applystore/page',
            /*简要录入新增*/
            BRIEFT_ENTRY_ADD:app.base + '/cb/ajax/getsystemdate',
            /*贷款类型修改，改变金融产品*/
            LOAN_TYPE_CODE:app.base +'/cb/ajax/getLoanType',
            /*贷款申请简要录入新增保存*/
            BRIEF_ADD:app.base + '/cb/loanapply/create',
            /*根据主申请人的证件类型、证件号码、申请人姓名的改变生成客户编号*/
            LOAN_CUSTOMER_NO:app.base + '/cb/ajax/getCustomerNo',
            /*获取客户经理列表*/
            CUSTOMER_LIST:app.base + '/cb/ajax/getCustomerList',
            /*判断是否是客户经理*/
            JUDGE_IS_CUSTOMER:app.base + '/cb/ajax/judgeIsCustomer',
            /*根据客户经理判断是否有放款机构*/
            AJAX_GET_ORGAN:app.base + '/cb/ajax/getOrganByCustomer'
        },
        /*贷款申请详情录入*/
        {
            FINDFEELIST_MATLIST:app.base+ "/cb/findfeeandmatlist",
            /*列表页*/
            DETAIL_LIST: app.base + '/cb/loandetailapply/page/',
            /*贷款申请详情录入 人员信息修改保存*/
            DETAIL_UPDATE_PEOPLES: app.base + '/cb/loandetailapply/updatePeople',
            /*贷款申请详情录入修改*/
            DETAIL_VIEW: app.base +'/cb/loandetailapply/viewPeoplesForInput/',
            /* 贷款信息*/
            LOAN_INFORMATION:app.base + '/cb/loandetailapply/viewDetail/',
            /*贷款申请详情录入查看*/
            LOAN_PEOPLE_INFORMATION:app.base+'/cb/loandetailapply/viewPeoples/detail/',
            /*贷款申请详情录入贷款信息页面修改保存*/
            LOAN_INFORMATION_UPDATE:app.base+'/cb/loandetailapply/updateDetail/detail',
            /*根据产品查询促销名称*/
            AJAX_GETPROMS:app.base+'/cb/ajax/getProms/',
            /*根据产品查询申请期限*/
			AJAX_APPLYPERIOD:app.base+'/cb/ajax/getApplyPeriod/',
			/*贷款申请详情录入 影像信息查看*/
			LOAN_IMAGE_VIEW:"/cb/loanapplymaterial/view",
			/*贷款申请详情录入 影像信息修改*/
			LOAN_IMAGE_UPDATE:"/cb/loanapplymaterial/update",
            /*贷款申请详情录入 试算*/
            /*还款方案*/
            AJAX_TENTATIVECALCULATION:"/cb/ajax/tentativeCalculation",
            /*详细提交判断材料全部收齐*/
            AJAX_MATISCOLLECTED:"/cb/ajax/matIsCollected/",
            /*详情录入申请人缓存*/
            LOANDETAILAPPLY_CACHE:"/cb/loandetailapply/cachePeople",
            /*查询银行*/
            AJAX_QUERYBANK:"/cb/ajax/querybank/",
            /*查询机构*/
            AJAX_QUERYORGNIZE:"/cb/ajax/queryorgnize/",
            /*根据还款方式 促销方案、期限查询促销比例*/
            AJAX_GETPROMBENEBYPARAM:"/cb/ajax/getPromBenePcByParameter",
            /*历史贷款列表*/
            HISTORYDETAILLIST:"/cb/loanapply/loanapplyHistoryForDetailList/",
            /*历史贷款详情*/
            HISTORY_LOAN_DETAIL:"/cb/loanreceipt/findLoanReceiptDetail/",
            /*回显详细录入申请人保存的数据的Id，例如教育信息，单位信息 防止重复提交，造成重复数据*/
            ECHO_ID_LOAN_DETAIL:"/cb/loandetailapply/viewPeoplesForInput/",
            AJAX_QUERY_BANK_BY_CARDBIN:"/cb/ajax/getBankByCardBin",
        },
        /*合同签订*/
        {
            /*列表页*/
            CONTRACT_LIST:app.base+'/cb/loanapplyExamSignContract/page/',
            CONTRACT_VIEW:app.base+'/cb/loanapplyExamSignContract/viewdetail/',
            //更新合同数据
            CONTRACT_UPDATE:app.base+'/cb/loanapplyExamSignContract/update',
            /*资料信息查看*/
            FILE_LIST:app.base+'/cb/loandetailapply/contract/',
            /*合同预览*/
            CONTRACT_PRINT:app.base+'/cb/loanapplycontract/print/',
            /*合同推送到业务支撑*/
            CONTRACT_PUSH:app.base+'/cb/pushContractInfoToCs/',
            /*查看贷款申请合同*/
            LOANAPPLYCONTRACT_VIEW:app.base+'/cb/loanapplycontract/view/',
        },
        /*用款申请*/
        {
            /*列表页*/
            SPENT_LOAN_LIST:app.base+'/cb/flowloanapply/index/applymoney',
            /* 贷款信息*/
            SPENT_LOAN:app.base + '/cb/applymoney/viewAll/',
            /*贷款信息下一步*/
            SPEN_LOAN_SAVE:app.base + '/cb/loanmakeloan/createApplyMoneyAndAccount/',
            /*检查用款申请选项是否全部填写*/
            SPENT_LOAN_INFO_ISALLRIGHT:app.base+'/cb/loanmakeloan/checkLoanInfoIsRight/',
        },
         /*电核/初核*/
        {
            /*列表页*/
            NUCLEUS_lIST:app.base + '/cb/loanapplyExamFirst/page/',
            /* 贷款信息*/
            NUCLEUS_LOAN_INFORMATION:app.base + '/cb/loanapplyExamFirst/viewdetail/',
            /* 申请人信息*/
            NUCLEUS_APPLICANT_INFORMATION:app.base + '/cb/loanapplyExamFirst/viewPeople/',
            /*风险预警*/
            NUCLEUS_RISK_WARNING:app.base + '/cb/two-levels-approval/risk-warning/',
            /* 进件历史*/
            NUCLEUS_HISTORY_INTO_PIECES:app.base + '/cb/two-levels-approval/risk-warning/',
            /* 审核项信息*/
            NUCLEUS_ITEMS_INFORMATION:app.base + '/cb/two-levels-approval/risk-warning/',
            /* 审批信息*/
            NUCLEUS_APPROVAL_INFORMATION:app.base + '/cb/two-levels-approval/risk-warning/',
            /*审核项信息下一步*/
            NUCLEUS_AUDIT_SUBMIT:app.base + '/cb/check/save',
            /*更新审核信息*/
            NUCLEUS_UPDATE_EXAM_DATA:app.base + '/cb/loanapplyExamFirst/update/nucleus',
            /*审核项目都是必填的*/
            AJAX_CHECKINFOISRIGHT:app.base+'/cb/telcheck/checkInfoIsRight/',
            /*获取电核信息列表*/
            NUCLEUS_AUDIT_GET:app.base+'/cb/telcheck/list/',
            /*保存贷款信息*/
            NUCLEUS_INFORMATION_UPDATE:app.base+'/cb/loandetailapply/updateDetail/nucleus',
         },
        /*欺诈认定列表*/
        {
            /*列表页*/
            FFAUD_lIST:app.base + '/cb/loanapplyExamFirstFrud/page/',
            /*加入黑名单*/
            ADDTOBLANK:app.base+'/cb/flowLoanApply/addToBlank/',
            /*加入灰名单*/
            ADDTOGRAY:app.base+'/cb/flowLoanApply/addToGray/',
        },
         /*二级审批*/
        {
            /*列表页*/
            TWO_LEVELS_APPROVAL:app.base + '/cb/loanapplyExamSecond/page',
            /* 贷款信息*/
           /* GOODS_INFORMATION:app.base + '/cb/two-levels-approval/goods-information/',*/
            TWO_LOAN_INFORMATION:app.base + '/cb/loanapplyExamSecond/viewdetail/',
            /*/cb/loanapplyExamSecond/viewdetail/{applicationWater}*/
            /*更新审核信息*/
            TWO_UPDATE_EXAM_DATA:app.base + '/cb/loanapplyExamFirst/update/two',
            /* 申请人信息*/
            TWO_APPLICANT_INFORMATION:app.base +'/cb/loandetailapply/viewPeoples/twoLevel/',
            /* 贷款申请历史*/
            TWO_HISTORY_LOAN:app.base + '/cb/two-levels-approval/risk-warning/',
            /*风险预警*/
            TWO_RISK_WARNING:app.base + '/cb/two-levels-approval/risk-warning/',
            /* 进件历史*/
            TWO_HISTORY_INTO_PIECES:app.base + '/cb/two-levels-approval/risk-warning/',
            /* 审核项信息*/
            TWO_ADUIT_ITEMS_INFORMATION:app.base + '/cb/two-levels-approval/risk-warning/',
            /* 审批信息*/
            TWO_APPROVAL_INFORMATION:app.base + '/cb/two-levels-approval/risk-warning/',
            /*贷款申请简表历史列表*/
            TWO_LOANAPPLY_LIST:app.base + '/cb/loanapply/list/',
            /*流程挂起*/
            TWO_ACTIVITI_CANCEL:app.base + '/bpm/cancel/twoLevel',
            /*流程激活*/
            TWO_ACTIVITI_ACTIVE:app.base + '/bpm/active/twoLevel',
        },
        /*电话回访*/
        {
            /*列表页*/
            RETUEN_VISIT_lIST:app.base + '/cb/callback/page/',
            CALL_LOAN_INFORMATION:app.base + '/cb/loandetailapply/viewAll/',
			/*申请人信息*/
            CALL_APPLICANT_INFORMATION:app.base + '/cb/loandetailapply/viewPeoples/callBack/',
            /* 贷款信息
            CALL_LOAN_INFORMATION:app.base + '/cb/two-levels-approval/goods-information/',*/
            
            /*风险预警
            CALL_RISK_WARNING:app.base + '/cb/two-levels-approval/risk-warning/',*/
            /* 进件历史
            CALL_HISTORY_INTO_PIECES:app.base + '/cb/two-levels-approval/risk-warning/',*/
          /* 电话回访*/
            CALL_RETURN_SUBMIT:app.base + '/cb/callback/savetelcheck',
            CALLBACK_LIST:app.base+'/cb/callback/telchecklist/',
        },
        /*上级电话回访*/
        {
            /*列表页*/
            SUPERIOR_TELEPHONE_RETURN_lIST:app.base + '/cb/flowloanapply/index/supercallback/',
            /* 贷款信息*/
            SUPERIOR_LOAN_INFORMATION:app.base + '/cb/loandetailapply/viewAll/',
            /* 申请人信息*/
            SUPERIOR_APPLICANT_INFORMATION:app.base + '/cb/loandetailapply/viewPeoples/superCallBack/',

            /*风险预警
            SUPERIOR_RISK_WARNING:app.base + '/cb/two-levels-approval/risk-warning/',*/
            /* 进件历史x
            SUPERIOR_HISTORY_INTO_PIECES:app.base + '/cb/two-levels-approval/risk-warning/',*/
            /* 上级电话回访*/
            SUPERIORL_RETURN_VISIT:app.base + '/cb/callback/savetelcheck',
            /*上级电话回访电核项*/
            SUPERCALLBACK_CHECKLIST:app.base + '/cb/supercallback/telchecklist/',
        },
        /*放款审查*/
        {
            /*  列表页*/
            LOAN_REVIEW_LIST:app.base + '/cb/flowloanapply/index/makeloancheck/',
            /*贷款信息*/
            CHECK_LOAN_INFORMATION:app.base + '/cb/makeloan/viewAll/',
            /*审批信息*/
            CHECK_APPROVAL_INFORMATION:app.base + '/cb/two-levels-approval/risk-warning/',
            /*贷款审查 点击下一步*/
            CHECK_LOAN_INFORMATION_NEXT:app.base + '/cb/loanmakeloanaccountno/createForLoanCheck/'
        },
        /*人工调单*/
        {
           /*列表*/
            MANUAL_ADJUST_LIST:app.base+'/cb/flowloanapply/page/',
            /*工单调配*/
            MANUAL_WORK_ORDER:app.base +'/cb/workorder/ajax/manualWorkOrder/1'
        },
        /*人工分单*/
        {
            /*列表*/
            MANUAL_SHEET_LIST:app.base+'/cb/workorder/page/',
            /*弹框*/
            QUERT_PERSON:app.base+'/cb/workorder/ajax/queryHandlePerson',
            /*工单分配*/
            MANUAL_WORK_ORDER:app.base +'/cb/workorder/ajax/manualWorkOrder/0'
        },
        /*流程*/
        {
        	/*流程挂起*/
        	ACTIVITI_CANCEL:app.base + '/bpm/cancel/',
        	/*流程激活*/
        	ACTIVITI_ACTIVE:app.base + '/bpm/active/',
        	/*流程拿回*/
        	ACTIVITI_RETRACT:app.base + '/bpm/retract/',
        	/*流程拒绝*/
        	ACTIVITI_REFUSE:app.base + '/bpm/refuse/',
        	/*更新业务id值*/
        	ACTIVITI_UPDATE_BUSID:app.base + '/workflow/formids/update/'
        },
        /*系统公告*/
        {
          SYSTEM_NOTICE_LIST:app.base+'/cb/loan-application/brief-entry/page/',
          SYSTEM_NOTICE_ADD:app.base+'/cb/loan-application/brief-entry/create',
          SYSTEM_NOTICE_VIEW:app.base+'/cb/loan-application/brief-entry/view/0',
        }
    );

    // $(function () {
    $('form').each(function () {
        if (!this.action) {
            return true;
        }

        var i = this.action.lastIndexOf('/');
        if (i == -1) {
            return true;
        }

        var path = this.action.substring(i + 1);
        if (!app[path]) {
            return true;
        }

        this.action = this.action.substring(0, i) + app[path];
    });

    $('[data-page-url]').each(function () {
        var pageUrl = $(this).data('pageUrl');
        if (!pageUrl) {
            return true;
        }

        var i = pageUrl.lastIndexOf('/');
        if (i == -1) {
            return true;
        }

        var path = pageUrl.substring(i + 1);
        if (!app[path]) {
            return true;
        }

        $(this).data('pageUrl', pageUrl.substring(0, i) + app[path]);
    });

    String.prototype.format = function () {
        var args = arguments;
        if (/\{(\d+)\}/g.test(this)) {
            return this.replace(/\{(\d+)\}/g, function (match, name) {
                return args[name];
            });
        }

        if (typeof (args[0]) == 'object') {
            var param = args[0];
            return this.replace(/\{([\w]+)\}/g, function (match, name) {
                return param[name];
            });
        }

        var i = 0;
        return this.replace(/\{(\w+)\}/g, function () {
            return args[i++];
        });
    };
    //});

}(window.jQuery, window.app);