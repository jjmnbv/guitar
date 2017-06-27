DROP TABLE IF EXISTS cb_fl_ap_t CASCADE;
DROP TABLE IF EXISTS cb_fl_ini_pay_ap_t CASCADE;


CREATE TABLE cb_fl_ap_t (
	fl_inst_id trade_no NOT NULL,
	ap_tr trade_no NOT NULL,
	ve version NOT NULL,
	cr_dt dt  NOT NULL,
	la_up_us_id ref_id NOT NULL,
	la_up_dt dt  NOT NULL,
	act_st cd  NOT NULL,
	au_fl_ty_cd cd  NOT NULL,
	this_nod_id trade_no NOT NULL,
	this_nod_ca cu_na  NOT NULL,
	this_nod_us_login_na cu_na ,
	next_nod_us_login_na cu_na ,
	this_nod_post_no_op bigmessage ,
	next_nod_post_no_ca bigmessage ,
	act_en_st cd ,
	fl_id ref_id NOT NULL,
	fl_na caption  NOT NULL,
	ap_dt dt  NOT NULL,
	ap_tm tm  NOT NULL,
	cu_mo_no mo_no ,
	ap_am amount NOT NULL,
	cu_no no  NOT NULL,
	cu_na cu_na  NOT NULL,
	br_no no  NOT NULL,
	br_na corp_na  NOT NULL,
	reg_us_login_na cu_na  NOT NULL,
	cu_ma_login_na no ,
	cu_ma_na cu_na ,
	next_nod_id trade_no,
	prev_nod_id trade_no,
	prev_nod_us_login_na cu_na ,
	prev_nod_ca caption ,
	next_nod_ca caption ,
	che_en_us_ids_ca varchar(3000) ,
	ref_su_cd cd ,
	bac_su_cd char(10) ,
	ref_cd cd ,
	acti_cd cd ,
	co comment  NOT NULL
);

COMMENT ON TABLE cb_fl_ap_t IS '贷款申请流程表';
COMMENT ON COLUMN cb_fl_ap_t.fl_inst_id IS '流程实例Id';
COMMENT ON COLUMN cb_fl_ap_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_fl_ap_t.ve IS '版本';
COMMENT ON COLUMN cb_fl_ap_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_fl_ap_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_fl_ap_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_fl_ap_t.act_st IS '流程状态参见字典分类 84';
COMMENT ON COLUMN cb_fl_ap_t.au_fl_ty_cd IS '流程类型代码ZDHK 主动还款DKSQ 贷款申请XFTZ  息费调整DKHX 贷款核销参见字典分类 162';
COMMENT ON COLUMN cb_fl_ap_t.this_nod_id IS '当前节点Id';
COMMENT ON COLUMN cb_fl_ap_t.this_nod_ca IS '当前节点名称';
COMMENT ON COLUMN cb_fl_ap_t.this_nod_us_login_na IS '当前节点参与人';
COMMENT ON COLUMN cb_fl_ap_t.next_nod_us_login_na IS '下一节点参与人';
COMMENT ON COLUMN cb_fl_ap_t.this_nod_post_no_op IS '当前节点岗位列表用,用逗号分隔，支持多个岗位';
COMMENT ON COLUMN cb_fl_ap_t.next_nod_post_no_ca IS '下一节点岗位列表用逗号分隔，支持多个岗位';
COMMENT ON COLUMN cb_fl_ap_t.act_en_st IS '流程结束状态ZC 正常结束QX 取消FJ  否决参看字典分类 85';
COMMENT ON COLUMN cb_fl_ap_t.fl_id IS '流程Id';
COMMENT ON COLUMN cb_fl_ap_t.fl_na IS '流程名称';
COMMENT ON COLUMN cb_fl_ap_t.ap_dt IS '进件日期';
COMMENT ON COLUMN cb_fl_ap_t.ap_tm IS '申请时间';
COMMENT ON COLUMN cb_fl_ap_t.cu_mo_no IS '客户手机号码';
COMMENT ON COLUMN cb_fl_ap_t.ap_am IS '贷款申请金额';
COMMENT ON COLUMN cb_fl_ap_t.cu_no IS '客户编号';
COMMENT ON COLUMN cb_fl_ap_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_fl_ap_t.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_fl_ap_t.br_na IS '管理机构名称';
COMMENT ON COLUMN cb_fl_ap_t.reg_us_login_na IS '登记用户登录名称';
COMMENT ON COLUMN cb_fl_ap_t.cu_ma_login_na IS '客户经理登录名';
COMMENT ON COLUMN cb_fl_ap_t.cu_ma_na IS '客户经理姓名';
COMMENT ON COLUMN cb_fl_ap_t.next_nod_id IS '下一节点id';
COMMENT ON COLUMN cb_fl_ap_t.prev_nod_id IS '上一节点ID';
COMMENT ON COLUMN cb_fl_ap_t.prev_nod_us_login_na IS '上一节点参与人';
COMMENT ON COLUMN cb_fl_ap_t.prev_nod_ca IS '上一个节点名称';
COMMENT ON COLUMN cb_fl_ap_t.next_nod_ca IS '下一个节点名称';
COMMENT ON COLUMN cb_fl_ap_t.che_en_us_ids_ca IS '已办人列表流程办理的时候加入，按逗号分隔多个人。放用户Id。';
COMMENT ON COLUMN cb_fl_ap_t.ref_su_cd IS '拒绝明细代码  参见字典 152';
COMMENT ON COLUMN cb_fl_ap_t.bac_su_cd IS '退回代码  参见字典 153';
COMMENT ON COLUMN cb_fl_ap_t.ref_cd IS '拒绝代码TH 退回JJ 拒绝QX 取消参见字典：150';
COMMENT ON COLUMN cb_fl_ap_t.acti_cd IS '激活代码JH 激活NH 拿回参见字典151';


CREATE TABLE cb_fl_ini_pay_ap_t (
	fl_inst_id trade_no NOT NULL,
	ap_tr trade_no NOT NULL,
	ve version NOT NULL,
	cr_dt dt  NOT NULL,
	la_up_us_id ref_id NOT NULL,
	la_up_dt dt  NOT NULL,
	act_st cd  NOT NULL,
	this_nod_id trade_no NOT NULL,
	this_nod_ca cu_na  NOT NULL,
	this_nod_us_login_na cu_na ,
	next_nod_us_login_na cu_na ,
	this_nod_post_no_op bigmessage ,
	next_nod_post_no_ca bigmessage ,
	act_en_st cd ,
	fl_id ref_id NOT NULL,
	fl_na caption  NOT NULL,
	ap_dt dt  NOT NULL,
	ap_tm tm  NOT NULL,
	cu_mo_no mo_no ,
	reg_us_login_na cu_na  NOT NULL,
	cu_ma_login_na no ,
	cu_ma_na cu_na ,
	next_nod_id trade_no,
	prev_nod_id trade_no,
	prev_nod_us_login_na cu_na ,
	prev_nod_ca caption ,
	next_nod_ca caption ,
	che_en_us_ids_ca varchar(3000) ,
	ref_su_cd cd ,
	bac_su_cd char(10) ,
	ref_cd cd ,
	acti_cd cd ,
	lo_ki_cd cd  NOT NULL,
	lo_ty_no no  NOT NULL,
	lo_ty_na cu_na  NOT NULL,
	cu_no no  NOT NULL,
	cu_na cu_na  NOT NULL,
	lr_no no  NOT NULL,
	lo_du_dt dt  NOT NULL,
	br_no no  NOT NULL,
	br_na corp_na  NOT NULL,
	co_no no ,
	pay_od_pr_am amount NOT NULL,
	adv_pr_am amount NOT NULL,
	lo_pr_am amount NOT NULL,
	ex_rt rate NOT NULL,
	ov_rt rate NOT NULL,
	lo_pr_sa amount NOT NULL,
	lr_ka_st cd  NOT NULL,
	pay_pat_cd cd  NOT NULL,
	ini_pay_am amount NOT NULL,
	cc_tr_no no  NOT NULL,
	lr_op_tr trade_no NOT NULL,
	tot_rec_am amount NOT NULL,
	tena_id ref_id,
	co comment  NOT NULL
);
COMMENT ON TABLE cb_fl_ini_pay_ap_t IS '主动还款申请	';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.fl_inst_id IS '流程实例Id';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ve IS '版本';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.act_st IS '流程状态参见字典分类 84';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.this_nod_id IS '当前节点Id';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.this_nod_ca IS '当前节点名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.this_nod_us_login_na IS '当前节点参与人';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.next_nod_us_login_na IS '下一节点参与人';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.this_nod_post_no_op IS '当前节点岗位列表用,用逗号分隔，支持多个岗位';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.next_nod_post_no_ca IS '下一节点岗位列表用逗号分隔，支持多个岗位';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.act_en_st IS '流程结束状态ZC 正常结束QX 取消FJ  否决参看字典分类 85';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.fl_id IS '流程Id';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.fl_na IS '流程名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ap_dt IS '进件日期';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ap_tm IS '申请时间';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cu_mo_no IS '客户手机号码';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.reg_us_login_na IS '登记用户登录名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cu_ma_login_na IS '客户经理登录名';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cu_ma_na IS '客户经理姓名';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.next_nod_id IS '下一节点id';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.prev_nod_id IS '上一节点ID';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.prev_nod_us_login_na IS '上一节点参与人';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.prev_nod_ca IS '上一个节点名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.next_nod_ca IS '下一个节点名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.che_en_us_ids_ca IS '已办人列表流程办理的时候加入，按逗号分隔多个人。放用户Id。';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ref_su_cd IS '拒绝明细代码  参见字典 152';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.bac_su_cd IS '退回代码  参见字典 153';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ref_cd IS '拒绝代码TH 退回JJ 拒绝QX 取参见字典：150';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.acti_cd IS '激活代码JH 激活NH 拿回参见字典151';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lo_ki_cd IS '贷款分类耐用消费品现金贷款参见字典项目这个类型，可筛选产品分类。字典分类：44';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lo_ty_no IS '产品编号';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lo_ty_na IS '产品名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cu_no IS '客户编号';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lr_no IS '借据编号';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lo_du_dt IS '贷款到期日期';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.br_na IS '管理机构名称';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.co_no IS '合同编号';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.pay_od_pr_am IS '归还逾期本金';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.adv_pr_am IS '主动还款本金';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lo_pr_am IS '贷款本金';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ex_rt IS '执行利率';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ov_rt IS '逾期利率';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lo_pr_sa IS '贷款剩余本金';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lr_ka_st IS '借据账务状态ZC  正常YQ  逾期JQ  结清BW  转表外JZ  减值HX  核销参见字典项账务状态：3023';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.pay_pat_cd IS '还款模式GH  归还欠款TQ  提前还款QB  全部提前还款参见字典分类 124';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.ini_pay_am IS '主动还款金额（不包括费用）';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.cc_tr_no IS '核心交易编号';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.lr_op_tr IS '借据操作流水这个流水发送到核心。';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.tot_rec_am IS '总收到金额包括收到的本金、利息、罚息、复利、费用等。';
COMMENT ON COLUMN cb_fl_ini_pay_ap_t.tena_id IS '租户Id';


CREATE UNIQUE INDEX cb_fl_ap_t_pk ON cb_fl_ap_t USING btree (fl_inst_id);
ALTER TABLE cb_fl_ap_t ADD PRIMARY KEY (fl_inst_id);
CREATE UNIQUE INDEX cb_fl_ini_pay_ap_t_pk ON cb_fl_ini_pay_ap_t USING btree (fl_inst_id);
ALTER TABLE cb_fl_ini_pay_ap_t ADD PRIMARY KEY (fl_inst_id);
