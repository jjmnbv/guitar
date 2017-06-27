+function ($, app) {
    "use strict ";

    $.extend(app, {
            /**
			 * 贷款申请简要录入
			 */
			simpleEnter:'simpleEnter',
			/**
			 * 贷款申请详情录入
			 */
			detailEnter:'detailEnter',
			/**
			 * 电核/初审
			 */
			firstAudit:'firstAudit',
			/**
			 * 欺诈认定
			 */
			fraudcognizance:'fraudcognizance',
			/**
			 * 二次审批
			 */
			finalAudit:'finalAudit',
			/**
			 * 合同签订
			 */
			contract:'contract',
			/**
			 * 用款申请
			 */
			useapply:'useapply',
			/**
			 * 电话回访
			 */
			telcheck:'telcheck',
			/**
			 * 上级电话回访
			 */
			superTelCheck:'superTelCheck',
			/**
			 * 放款审查
			 */
			loanCheck:'loanCheck',
			/**
			 * 初审
			 */
			chushen:'chushen',
			/**
			 * 复审
			 */
			fushen:'fushen'
        }
    );

}(window.jQuery, window.app);