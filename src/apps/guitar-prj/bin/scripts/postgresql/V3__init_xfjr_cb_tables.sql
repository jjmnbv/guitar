DROP TABLE IF EXISTS cb_cu_ho_b CASCADE;
DROP TABLE IF EXISTS cb_cu_stat_b CASCADE;
DROP TABLE IF EXISTS cb_fl_lo_ap_h CASCADE;
DROP TABLE IF EXISTS cb_fl_lo_ap_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_ac_no_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_co_ml_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_co_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_fe_su_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_fee_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_goo_ord_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_mat_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pay_sch_par_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pay_sch_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_ad_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_con_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_eb_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_ho_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_ic_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_jo_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_su_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pe_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pm_su_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_pm_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_su_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ap_tel_che_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_ac_no_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_fe_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_pm_su_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_pm_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_setl_ac_no_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_setl_t CASCADE;
DROP TABLE IF EXISTS cb_lo_ml_t CASCADE;
DROP TABLE IF EXISTS cb_lr_op_su_l CASCADE;
DROP TABLE IF EXISTS cb_lr_op_t CASCADE;

CREATE TABLE cb_cu_ho_b (
    cu_no no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    ho_na_cd cd NOT NULL,
    ho_reg_prov_cd cd NOT NULL,
    ho_reg_city_cd cd NOT NULL,
    ho_reg_dist_cd cd NOT NULL,
    ho_reg_ad_ca comment NOT NULL,
    ho_lo_am amount,
    ho_lo_ye_qt quantity,
    ho_lo_bank_na corp_na,
    ho_prop_na cu_na,
    tena_id ref_id
);
COMMENT ON TABLE cb_cu_ho_b IS '客户房产';
COMMENT ON COLUMN cb_cu_ho_b.cu_no IS '客户编号';
COMMENT ON COLUMN cb_cu_ho_b.su_id IS '子流水';
COMMENT ON COLUMN cb_cu_ho_b.ve IS '版本';
COMMENT ON COLUMN cb_cu_ho_b.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_cu_ho_b.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_cu_ho_b.la_up_us_id IS '最后更新用户id';
COMMENT ON COLUMN cb_cu_ho_b.ho_na_cd IS '住房性质参见字典分类12 ';
COMMENT ON COLUMN cb_cu_ho_b.ho_reg_prov_cd IS '户籍省份代码';
COMMENT ON COLUMN cb_cu_ho_b.ho_reg_city_cd IS '户籍城市地区';
COMMENT ON COLUMN cb_cu_ho_b.ho_reg_dist_cd IS '户籍地区代码';
COMMENT ON COLUMN cb_cu_ho_b.ho_reg_ad_ca IS '户籍地址';
COMMENT ON COLUMN cb_cu_ho_b.ho_lo_am IS '房贷金额';
COMMENT ON COLUMN cb_cu_ho_b.ho_lo_ye_qt IS '房贷年数';
COMMENT ON COLUMN cb_cu_ho_b.ho_lo_bank_na IS '房贷银行';
COMMENT ON COLUMN cb_cu_ho_b.ho_prop_na IS '产权人名';

-- ----------------------------
-- Table structure for cb_cu_stat_b
-- ----------------------------
CREATE TABLE cb_cu_stat_b (
    cu_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id,
    la_up_dt dt,
    st cd NOT NULL,
    tot_ap_qt quantity DEFAULT 0 NOT NULL,
    tot_ap_am amount DEFAULT 0 NOT NULL,
    tot_co_am amount DEFAULT 0 NOT NULL,
    tot_ml_am amount NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_cu_stat_b IS '申请客户信息';
COMMENT ON COLUMN cb_cu_stat_b.cu_no IS '客户编号';
COMMENT ON COLUMN cb_cu_stat_b.ve IS '版本';
COMMENT ON COLUMN cb_cu_stat_b.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_cu_stat_b.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_cu_stat_b.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_cu_stat_b.st IS '状态 CS 初始 JH 激活 参见字典分类28';
COMMENT ON COLUMN cb_cu_stat_b.tot_ap_qt IS '累计申请数';
COMMENT ON COLUMN cb_cu_stat_b.tot_ap_am IS '总申请金额创建申请的时候增加此表';
COMMENT ON COLUMN cb_cu_stat_b.tot_co_am IS '合同总金额';
COMMENT ON COLUMN cb_cu_stat_b.tot_ml_am IS '总放款金额';

-- ----------------------------
-- Table structure for cb_fl_lo_ap_h
-- ----------------------------
CREATE TABLE cb_fl_lo_ap_h (
    fl_inst_id trade_no NOT NULL,
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    act_st cd NOT NULL,
    this_nod_id trade_no NOT NULL,
    this_nod_ca cu_na NOT NULL,
    this_nod_us_login_na cu_na,
    next_nod_us_login_na cu_na,
    act_en_st cd,
    fl_id ref_id NOT NULL,
    fl_na caption NOT NULL,
    ap_dt dt NOT NULL,
    ap_tm tm NOT NULL,
    cu_mo_no mo_no,
    lo_ki_cd cd NOT NULL,
    lo_ty_id ref_id NOT NULL,
    lo_ty_no no NOT NULL,
    lo_ty_na caption NOT NULL,
    lo_ap_am amount NOT NULL,
    cu_no no NOT NULL,
    cu_na cu_na NOT NULL,
    br_no no NOT NULL,
    br_na corp_na NOT NULL,
    reg_us_login_na cu_na NOT NULL,
    cu_ma_login_na no,
    cu_ma_na cu_na,
    sto_no no,
    sto_na corp_na,
    next_nod_id trade_no,
    next_nod_ca caption,
    che_en_us_ids_ca character varying(3000),
    prom_no no,
    prom_na caption,
    co_no no,
    co_si_dt dt,
    co comment NOT NULL,
    lo_ml_st character varying(255),
    lo_pl_qt integer,
    pa_no character varying(255),
    prev_nod_ca character varying(255),
    prev_nod_id bigint,
    prev_nod_us_login_na character varying(255),
    ref_cd cd,
    acti_cd cd,
    this_nod_post_no_op bigmessage,
    next_nod_post_no_op bigmessage,
    tena_id ref_id,
    ref_su_cd cd,
    bac_su_cd cd,
    fra_cd cd,
    fra_obj_cd cd
);
COMMENT ON TABLE cb_fl_lo_ap_h IS '贷款申请流程表';
COMMENT ON COLUMN cb_fl_lo_ap_h.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_fl_lo_ap_h.ve IS '版本';
COMMENT ON COLUMN cb_fl_lo_ap_h.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_fl_lo_ap_h.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_fl_lo_ap_h.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_fl_lo_ap_h.act_st IS '流程状态参见字典分类 84';
COMMENT ON COLUMN cb_fl_lo_ap_h.this_nod_id IS '当前节点Id';
COMMENT ON COLUMN cb_fl_lo_ap_h.this_nod_ca IS '当前节点名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.this_nod_us_login_na IS '当前节点参与人';
COMMENT ON COLUMN cb_fl_lo_ap_h.next_nod_us_login_na IS '下一节点参与人';
COMMENT ON COLUMN cb_fl_lo_ap_h.act_en_st IS '流程结束状态ZC 正常结束QX 取消FJ  否决参看字典分类 85';
COMMENT ON COLUMN cb_fl_lo_ap_h.fl_id IS '流程Id';
COMMENT ON COLUMN cb_fl_lo_ap_h.fl_na IS '流程名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.ap_dt IS '进件日期';
COMMENT ON COLUMN cb_fl_lo_ap_h.ap_tm IS '申请时间';
COMMENT ON COLUMN cb_fl_lo_ap_h.cu_mo_no IS '客户手机号码';
COMMENT ON COLUMN cb_fl_lo_ap_h.lo_ki_cd IS '贷款分类耐用消费品现金贷款参见字典项目这个类型，可筛选产品分类。字典分类：44';
COMMENT ON COLUMN cb_fl_lo_ap_h.lo_ty_id IS '贷款类型Id';
COMMENT ON COLUMN cb_fl_lo_ap_h.lo_ty_no IS '产品编号';
COMMENT ON COLUMN cb_fl_lo_ap_h.lo_ty_na IS '产品名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.lo_ap_am IS '贷款申请金额';
COMMENT ON COLUMN cb_fl_lo_ap_h.cu_no IS '客户编号';
COMMENT ON COLUMN cb_fl_lo_ap_h.cu_na IS '客户名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_fl_lo_ap_h.br_na IS '管理机构名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.reg_us_login_na IS '登记用户登录名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.cu_ma_login_na IS '客户经理登录名';
COMMENT ON COLUMN cb_fl_lo_ap_h.cu_ma_na IS '客户经理姓名';
COMMENT ON COLUMN cb_fl_lo_ap_h.sto_no IS '门店号码';
COMMENT ON COLUMN cb_fl_lo_ap_h.sto_na IS '门店名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.next_nod_id IS '下一节点id';
COMMENT ON COLUMN cb_fl_lo_ap_h.next_nod_ca IS '下一个节点名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.che_en_us_ids_ca IS '已办人列表流程办理的时候加入，按逗号分隔多个人。放用户Id。';
COMMENT ON COLUMN cb_fl_lo_ap_h.prom_no IS '促销编号';
COMMENT ON COLUMN cb_fl_lo_ap_h.prom_na IS '促销名称';
COMMENT ON COLUMN cb_fl_lo_ap_h.co_no IS '合同编号';
COMMENT ON COLUMN cb_fl_lo_ap_h.co_si_dt IS '合同签订日期';
COMMENT ON COLUMN cb_fl_lo_ap_h.co IS '备注';
COMMENT ON COLUMN cb_fl_lo_ap_h.ref_cd IS '拒绝代码TH 退回JJ 拒绝QX 取消';
COMMENT ON COLUMN cb_fl_lo_ap_h.acti_cd IS '激活代码JH 激活NH 拿回';
COMMENT ON COLUMN cb_fl_lo_ap_h.ref_su_cd IS '拒绝明细代码 参见字典 152';
COMMENT ON COLUMN cb_fl_lo_ap_h.bac_su_cd IS '退回代码 参见字典 153';
COMMENT ON COLUMN cb_fl_lo_ap_h.fra_cd IS '欺诈代码 参见字典 154';
COMMENT ON COLUMN cb_fl_lo_ap_h.fra_obj_cd IS ' 欺诈对象代码
JK 借款人
SH 商户
JS 借款人和商户
参见字典 155';
-- ----------------------------
-- Table structure for cb_fl_lo_ap_t
-- ----------------------------
CREATE TABLE cb_fl_lo_ap_t (
    fl_inst_id trade_no NOT NULL,
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    act_st cd NOT NULL,
    this_nod_id trade_no NOT NULL,
    this_nod_ca cu_na NOT NULL,
    this_nod_us_login_na cu_na,
    next_nod_us_login_na cu_na,
    act_en_st cd,
    fl_id ref_id NOT NULL,
    fl_na caption NOT NULL,
    ap_dt dt NOT NULL,
    ap_tm tm NOT NULL,
    cu_mo_no mo_no,
    lo_ki_cd cd NOT NULL,
    lo_ty_id ref_id NOT NULL,
    lo_ty_no no NOT NULL,
    lo_ty_na caption NOT NULL,
    lo_ap_am amount NOT NULL,
    cu_no no NOT NULL,
    cu_na cu_na NOT NULL,
    br_no no NOT NULL,
    br_na corp_na NOT NULL,
    reg_us_login_na cu_na NOT NULL,
    cu_ma_login_na no,
    cu_ma_na cu_na,
    sto_no no,
    sto_na corp_na,
    next_nod_id trade_no,
    prev_nod_id trade_no,
    prev_nod_us_login_na cu_na,
    prev_nod_ca caption,
    next_nod_ca caption,
    pa_no no,
    lo_ml_st cd,
    che_en_us_ids_ca character varying(3000),
    lo_pl_qt quantity,
    prom_no no,
    prom_na caption,
    co_no no,
    co_si_dt dt,
    co comment NOT NULL,
    ref_cd cd,
    acti_cd cd,
    this_nod_post_no_op bigmessage,
    next_nod_post_no_op bigmessage,
    tena_id ref_id,
    ref_su_cd cd,
    bac_su_cd cd,
    fra_cd cd,
    fra_obj_cd cd
);
COMMENT ON TABLE cb_fl_lo_ap_t IS '贷款申请流程表';
COMMENT ON COLUMN cb_fl_lo_ap_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_fl_lo_ap_t.ve IS '版本';
COMMENT ON COLUMN cb_fl_lo_ap_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_fl_lo_ap_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_fl_lo_ap_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_fl_lo_ap_t.act_st IS '流程状态参见字典分类 84';
COMMENT ON COLUMN cb_fl_lo_ap_t.this_nod_id IS '当前节点Id';
COMMENT ON COLUMN cb_fl_lo_ap_t.this_nod_ca IS '当前节点名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.this_nod_us_login_na IS '当前节点参与人';
COMMENT ON COLUMN cb_fl_lo_ap_t.next_nod_us_login_na IS '下一节点参与人';
COMMENT ON COLUMN cb_fl_lo_ap_t.act_en_st IS '流程结束状态ZC 正常结束QX 取消FJ  否决参看字典分类 85';
COMMENT ON COLUMN cb_fl_lo_ap_t.fl_id IS '流程Id';
COMMENT ON COLUMN cb_fl_lo_ap_t.fl_na IS '流程名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.ap_dt IS '进件日期';
COMMENT ON COLUMN cb_fl_lo_ap_t.ap_tm IS '申请时间';
COMMENT ON COLUMN cb_fl_lo_ap_t.cu_mo_no IS '客户手机号码';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_ki_cd IS '贷款分类耐用消费品现金贷款参见字典项目这个类型，可筛选产品分类。字典分类：44';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_ty_id IS '贷款类型Id';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_ty_no IS '产品编号';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_ty_na IS '产品名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_ap_am IS '贷款申请金额';
COMMENT ON COLUMN cb_fl_lo_ap_t.cu_no IS '客户编号';
COMMENT ON COLUMN cb_fl_lo_ap_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_fl_lo_ap_t.br_na IS '管理机构名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.reg_us_login_na IS '登记用户登录名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.cu_ma_login_na IS '客户经理登录名';
COMMENT ON COLUMN cb_fl_lo_ap_t.cu_ma_na IS '客户经理姓名';
COMMENT ON COLUMN cb_fl_lo_ap_t.sto_no IS '门店号码';
COMMENT ON COLUMN cb_fl_lo_ap_t.sto_na IS '门店名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.next_nod_id IS '下一节点id';
COMMENT ON COLUMN cb_fl_lo_ap_t.prev_nod_id IS '上一节点ID';
COMMENT ON COLUMN cb_fl_lo_ap_t.prev_nod_us_login_na IS '上一节点参与人';
COMMENT ON COLUMN cb_fl_lo_ap_t.prev_nod_ca IS '上一个节点名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.next_nod_ca IS '下一个节点名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.pa_no IS '证件号码';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_ml_st IS '放款状态参见字典项 64';
COMMENT ON COLUMN cb_fl_lo_ap_t.che_en_us_ids_ca IS '已办人列表流程办理的时候加入，按逗号分隔多个人。放用户Id。';
COMMENT ON COLUMN cb_fl_lo_ap_t.lo_pl_qt IS '贷款期限已批准通过的贷款期限在合同批准以后填写。';
COMMENT ON COLUMN cb_fl_lo_ap_t.prom_no IS '促销编号';
COMMENT ON COLUMN cb_fl_lo_ap_t.prom_na IS '促销名称';
COMMENT ON COLUMN cb_fl_lo_ap_t.co_no IS '合同编号';
COMMENT ON COLUMN cb_fl_lo_ap_t.co_si_dt IS '合同签订日期';
COMMENT ON COLUMN cb_fl_lo_ap_t.co IS '备注';
COMMENT ON COLUMN cb_fl_lo_ap_t.ref_cd IS '拒绝代码TH 退回JJ 拒绝QX 取消';
COMMENT ON COLUMN cb_fl_lo_ap_t.acti_cd IS '激活代码JH 激活NH 拿回';
COMMENT ON COLUMN cb_fl_lo_ap_t.ref_su_cd IS '拒绝明细代码 参见字典 152';
COMMENT ON COLUMN cb_fl_lo_ap_t.bac_su_cd IS '退回代码 参见字典 153';
COMMENT ON COLUMN cb_fl_lo_ap_t.fra_cd IS '欺诈代码 参见字典 154';
COMMENT ON COLUMN cb_fl_lo_ap_t.fra_obj_cd IS ' 欺诈对象代码
JK 借款人
SH 商户
JS 借款人和商户
参见字典 155';

-- ----------------------------
-- Table structure for cb_lo_ap_ac_no_t
-- ----------------------------
CREATE TABLE cb_lo_ap_ac_no_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cu_no no NOT NULL,
    ac_us_cd cd NOT NULL,
    ac_cu_cd cd NOT NULL,
    ac_na cu_na NOT NULL,
    ac_ty_cd cd NOT NULL,
    ac_cd cd,
    ac_no no NOT NULL,
    ac_pa_ty_cd cd,
    ac_pa_no no,
    ac_bank_no cd,
    ac_bank_na cu_na,
    ac_bank_br_no cd,
    ac_bank_br_na cu_na,
    ac_ano_na cu_na,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_ac_no_t IS '个人或者合作方账号。';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_us_cd IS '账号用途代码HK 还款账号FK 放款账号ST 受托支付账号参见字典分类 65';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_cu_cd IS '币种代码RMB 人民币MY  美元';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_na IS '户名';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_ty_cd IS '账号类型GR  个人账户DG  对公账户';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_cd IS '账户代码NB 内部账户 内部账户不用发起结算系统。JS  结算账号参见字典分类132';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_no IS '账号';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_pa_ty_cd IS '账户证件类型代码SFZ 省份证';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_pa_no IS '证件号码';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_bank_no IS '开户行号';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_bank_na IS '银行名称';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_bank_br_no IS '开户行机构号';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_bank_br_na IS '开户行名称';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.ac_ano_na IS '账户别名结算系统的账户别名';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_ac_no_t.la_up_us_id IS '最后更新用户';

-- ----------------------------
-- Table structure for cb_lo_ap_co_ml_t
-- ----------------------------
CREATE TABLE cb_lo_ap_co_ml_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    ml_dt dt NOT NULL,
    ml_am amount NOT NULL,
    ml_ac_no no NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_co_ml_t IS '贷款申请放款表';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.ml_dt IS '放款日期';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.ml_am IS '放款金额';
COMMENT ON COLUMN cb_lo_ap_co_ml_t.ml_ac_no IS '放款账号。';

-- ----------------------------
-- Table structure for cb_lo_ap_co_t
-- ----------------------------
CREATE TABLE cb_lo_ap_co_t (
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    co_no no NOT NULL,
    co_am amount NOT NULL,
    lo_ex_rt rate NOT NULL,
    lo_rt_pat_cd cd NOT NULL,
    lo_rt_adj_ty_cd cd,
    lo_rt_ty_no cd,
    lo_ba_rt rate NOT NULL,
    pay_fre_qt quantity NOT NULL,
    pay_fre_cd cd NOT NULL,
    lo_pay_da_cd cd NOT NULL,
    lo_co_make_yn yn DEFAULT 'N'::bpchar NOT NULL,
    lo_pay_da day,
    lo_one_ml_yn yn DEFAULT 'Y'::bpchar NOT NULL,
    lo_ml_am amount NOT NULL,
    la_up_us_dt character varying(255),
    lo_pay_sp_qt character varying(255),
    tena_id ref_id
);

COMMENT ON TABLE cb_lo_ap_co_t IS '贷款申请合同子表';
COMMENT ON COLUMN cb_lo_ap_co_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_co_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_co_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_co_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_co_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_co_t.co_no IS '合同号合同号=‘HT’+申请编号';
COMMENT ON COLUMN cb_lo_ap_co_t.co_am IS '合同金额';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_ex_rt IS '执行利率利率可以为0';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_rt_pat_cd IS '利率模式代码GD 固定利率FD 浮动利率参见字典分类57如果为浮动，利率调整类型鼻息填写。';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_rt_adj_ty_cd IS '利率调整代码参见字典分类58';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_rt_ty_no IS '利率类型编号可不填。';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_ba_rt IS '贷款基准利率';
COMMENT ON COLUMN cb_lo_ap_co_t.pay_fre_qt IS '还款间隔数量默认为1';
COMMENT ON COLUMN cb_lo_ap_co_t.pay_fre_cd IS '还款频率代码参见字典分类82';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_pay_da_cd IS '还款日代码GD 固定日 选定此参数 需要由人工原定扣款日FK 放款日  选定此参数 放款计算。参见字典分类 62';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_co_make_yn IS '合同生成标志这个标志打上以后，才允许合同签订。';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_pay_da IS '还款日如果lo_pay_da_cd 为GD 需要填写这个字段。';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_one_ml_yn IS '是否一次放款如果一次性放款，需要填写阶段放款日期';
COMMENT ON COLUMN cb_lo_ap_co_t.lo_ml_am IS '实际放款金额实际放款金额=申请金额-放款当天收取的所有费用';

-- ----------------------------
-- Table structure for cb_lo_ap_fe_su_t
-- ----------------------------
CREATE TABLE cb_lo_ap_fe_su_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    fe_cd cd NOT NULL,
    fee_su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    fe_pay_ty_cd cd NOT NULL,
    pay_fr_cd cd NOT NULL,
    pay_dire_cd cd NOT NULL,
    incl_to_pr_yn yn NOT NULL,
    fee_cal_cd cd NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    fr_per_qt quantity,
    to_per_qt quantity,
    fe_pe percent NOT NULL,
    min_fe_am amount NOT NULL,
    max_fe_am amount NOT NULL,
    tot_fe_yn yn NOT NULL,
    fe_am amount,
    be_prom_fe_am amount,
    prom_no no,
    prom_na cu_na,
    fe_fre_qt quantity,
    fe_pu_cd cd,
    fe_da day,
    fe_dt dt,
    fe_per_qt quantity,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_fe_su_t IS '贷款申请费用子表包括促销';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_cd IS '费用代码如果优惠为费用需要填写。';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fee_su_id IS '收费子流水';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_pay_ty_cd IS '收取类型FK 放款前收取 在放款的时候收取FH 放款后收取SC  首次扣款收取FQ 分期收取 DK  同贷款还款计划表 这种模式子表配置的从多少期到多少期无效。例如：总贷款金额*比例/期数字典分类id 2';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.pay_fr_cd IS '还款来源代码参考 字典分类：  15';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.pay_dire_cd IS '收付方向代码相对于金融公司收取和付出的方向SQ 收取FC 付出参见字典分类 63';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.incl_to_pr_yn IS '包含到到本金是否把这个费用计入计息本金';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fee_cal_cd IS '费用计算代码GD 固定费用BL  按比例收取参考字典分类 4';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fr_per_qt IS '开始期数可以为空如果为分期类费用，需要填写。';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.to_per_qt IS '截止期数';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_pe IS '收费比例';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.min_fe_am IS '最小费用';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.max_fe_am IS '最大费用';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.tot_fe_yn IS '是否总费用如果是总费用，并且是分期收取，那么每期收取的费用为 总费用/期数';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_am IS '费用金额';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.be_prom_fe_am IS '促销期费用';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.prom_no IS '促销编号';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.prom_na IS '促销名称';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_fre_qt IS '收费间隔数量对于分期付费，需要填写默认为1';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_pu_cd IS '收费日期频率。Y 日N 年Z  周参见字典项分类82';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_da IS '收费日如果FQ 分期收取需要填写';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_dt IS '收费日期如果为FH 放款后收取需要填写收费日期';
COMMENT ON COLUMN cb_lo_ap_fe_su_t.fe_per_qt IS '收费期数';

-- ----------------------------
-- Table structure for cb_lo_ap_fee_t
-- ----------------------------
CREATE TABLE cb_lo_ap_fee_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    fe_cd cd NOT NULL,
    ve version NOT NULL,
    fe_ty_cd cd NOT NULL,
    fe_ca caption NOT NULL,
    fe_de de,
    st cd NOT NULL,
    cr_dt dt NOT NULL,
    br_no no NOT NULL,
    am_yn yn NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    prom_no no,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_fee_t IS '贷款申请费用表';
COMMENT ON COLUMN cb_lo_ap_fee_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_fee_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_fee_t.fe_cd IS '费用代码如果优惠为费用需要填写。';
COMMENT ON COLUMN cb_lo_ap_fee_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_fee_t.fe_ty_cd IS '费用类型代码字典类别Id：1';
COMMENT ON COLUMN cb_lo_ap_fee_t.fe_ca IS '费用中文';
COMMENT ON COLUMN cb_lo_ap_fee_t.fe_de IS '费用描述';
COMMENT ON COLUMN cb_lo_ap_fee_t.st IS '状态WD 未读YD  已读 ';
COMMENT ON COLUMN cb_lo_ap_fee_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_fee_t.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_lo_ap_fee_t.am_yn IS '是否摊销';
COMMENT ON COLUMN cb_lo_ap_fee_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_fee_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_fee_t.prom_no IS '促销编号';

-- ----------------------------
-- Table structure for cb_lo_ap_goo_ord_t
-- ----------------------------
CREATE TABLE cb_lo_ap_goo_ord_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_us_dt dt NOT NULL,
    st cd NOT NULL,
    ord_no no NOT NULL,
    goo_na cu_na NOT NULL,
    goo_mod_no no NOT NULL,
    goo_ty_cd cd NOT NULL,
    goo_qt quantity NOT NULL,
    goo_pri_am amount NOT NULL,
    goo_tot_pri_am amount NOT NULL,
    co comment NOT NULL,
    tena_id ref_id,
    coo_no no,
    coo_na cu_na
);
COMMENT ON TABLE cb_lo_ap_goo_ord_t IS '贷款申请商品订单';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.la_up_us_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.st IS '状态参考 通用字典代码';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.ord_no IS '订单号';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.goo_na IS '商品名称';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.goo_mod_no IS '商品型号';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.goo_ty_cd IS '商品类型';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.goo_qt IS '商品数量';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.goo_pri_am IS '商品价格';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.goo_tot_pri_am IS '商品总价';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.co IS '备注';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.coo_no IS '合作商代码';
COMMENT ON COLUMN cb_lo_ap_goo_ord_t.coo_na IS '合作商企业名称';

-- ----------------------------
-- Table structure for cb_lo_ap_mat_t
-- ----------------------------
CREATE TABLE cb_lo_ap_mat_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    mat_cd cd NOT NULL,
    mat_ca comment NOT NULL,
    mat_ph_cd cd NOT NULL,
    mat_ty_cd cd NOT NULL,
    mat_warr_yn yn NOT NULL,
    mat_col_cd cd NOT NULL,
    col_yn yn NOT NULL,
    co comment,
    mes_tr character varying(255),
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_mat_t IS '申请人材料';
COMMENT ON COLUMN cb_lo_ap_mat_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_mat_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_mat_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_mat_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_mat_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_mat_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_mat_t.mat_cd IS '材料代码可以采用Z0001或者类似编码';
COMMENT ON COLUMN cb_lo_ap_mat_t.mat_ca IS '材料中文';
COMMENT ON COLUMN cb_lo_ap_mat_t.mat_ph_cd IS '收取阶段代码SQ 申请SP 审QT 其他参见字典分类 51';
COMMENT ON COLUMN cb_lo_ap_mat_t.mat_ty_cd IS '材料类型代码SQ 申请表SF  身份JZ  居住GZ  工作SR  收入FK  放款QT 其他参见字典分类 52';
COMMENT ON COLUMN cb_lo_ap_mat_t.mat_warr_yn IS '是否权证';
COMMENT ON COLUMN cb_lo_ap_mat_t.mat_col_cd IS '材料收集代码BS 必收BJ  补件KS  可收MS  免收参见字典分类122';
COMMENT ON COLUMN cb_lo_ap_mat_t.col_yn IS '是否收取';

-- ----------------------------
-- Table structure for cb_lo_ap_pay_sch_par_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pay_sch_par_t (
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    pr_am amount NOT NULL,
    in_be_dt dt,
    lo_due_dt dt,
    fi_pay_dt dt,
    pay_da day NOT NULL,
    lo_ty_id ref_id NOT NULL,
    pm_id id NOT NULL,
    pl_op bigmessage NOT NULL,
    prom_no no,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pay_sch_par_t IS '还款计划试算参数';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.pr_am IS '放款本金';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.in_be_dt IS '起息日保留字段，不填';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.lo_due_dt IS '到期日保留字段，不填';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.fi_pay_dt IS '首次还款日期保留字段，不填';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.pay_da IS '还款日,取当前日<=31例如当期日期12月26号，那么取26';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.lo_ty_id IS '贷款品种id';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.pm_id IS '还款方式编号关联的还款方式还款方式和期限两者需要唯一';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.pl_op IS '期限选型,一般只有一个。例如：12,13,15';
COMMENT ON COLUMN cb_lo_ap_pay_sch_par_t.prom_no IS '促销号码根据促销情况由业务支撑计算';

-- ----------------------------
-- Table structure for cb_lo_ap_pay_sch_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pay_sch_t (
    ap_tr trade_no NOT NULL,
    per_qt quantity NOT NULL,
    ve version NOT NULL,
    crt_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    due_dt dt NOT NULL,
    pr_am amount NOT NULL,
    in_am amount NOT NULL,
    per_am amount NOT NULL,
    fe_am amount NOT NULL,
    ex_rt rate NOT NULL,
    ov_rt rate NOT NULL,
    pr_sa amount NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pay_sch_t IS '贷款还款计划表';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.per_qt IS '期数';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.crt_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.due_dt IS '应还日期';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.pr_am IS '应还本金';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.in_am IS '正常利息';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.per_am IS '期供金额=本金+利息';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.fe_am IS '费用金额';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.ex_rt IS '执行利率';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.ov_rt IS '逾期利率';
COMMENT ON COLUMN cb_lo_ap_pay_sch_t.pr_sa IS '剩余本金';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_ad_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_ad_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    crt_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    prov_cd cd NOT NULL,
    city_cd cd NOT NULL,
    dist_cd cd NOT NULL,
    ad_ca comment NOT NULL,
    post_no no,
    lv_da quantity NOT NULL,
    ow_yn yn NOT NULL,
    ho_lv_cd cd NOT NULL,
    rent_am amount,
    hou_reg_ad_yn yn NOT NULL,
    tel_no no,
    con_ad_yn yn NOT NULL,
    ad_ty_cd character varying(10),
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_ad_t IS '申请人地址';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.crt_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.prov_cd IS '省份代码';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.city_cd IS '城市地区';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.dist_cd IS '地区代码';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.ad_ca IS '地址';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.post_no IS '邮政编号';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.lv_da IS '居住天数';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.ow_yn IS '是否自有房。';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.ho_lv_cd IS '房屋居住代码ZF 租房ZY 自有FM 在父母居住QT 其他参考 房屋居住代码12';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.rent_am IS '租金';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.hou_reg_ad_yn IS '是否户籍地址';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.tel_no IS '电话号码';
COMMENT ON COLUMN cb_lo_ap_pe_ad_t.con_ad_yn IS '是否通讯地址。';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_con_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_con_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    con_na cu_na NOT NULL,
    mail_no no,
    mo_no mo_no,
    tel_no no,
    crt_dt dt NOT NULL,
    rel_cd cd NOT NULL,
    ho_reg_ad_ca comment,
    pa_cd cd,
    pa_no no,
    corp_na caption NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_con_t IS '申请人联系人表';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.con_na IS '联系人名称';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.mail_no IS '邮箱号码';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.mo_no IS '手机号码';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.tel_no IS '电话号码';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.crt_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.rel_cd IS '于申请人关系参见 字典分类16';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.ho_reg_ad_ca IS '户籍地址';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.pa_cd IS '证件代码参见字典分类 17';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.pa_no IS '证件号码';
COMMENT ON COLUMN cb_lo_ap_pe_con_t.corp_na IS '工作单位';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_eb_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_eb_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    crt_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    eb_na_cd cd NOT NULL,
    scho_na corp_na NOT NULL,
    eb_cd cd NOT NULL,
    into_scho_dt dt,
    eb_deg_cd cd,
    out_scho_dt dt NOT NULL,
    eb_st cd NOT NULL,
    co comment,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_eb_t IS '客户教育背景';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.cu_no IS '申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.crt_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.eb_na_cd IS '学历性质TZ 统招ZK 自考LX 留学参见字典分类 73';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.scho_na IS '学校名称';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.eb_cd IS '学历代码参见字典分类 13';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.into_scho_dt IS '入校日期';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.eb_deg_cd IS '学位';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.out_scho_dt IS '离校日期';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.eb_st IS '教育状态ZD 在读BY 毕业参见字典分类74';
COMMENT ON COLUMN cb_lo_ap_pe_eb_t.co IS '备注';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_ho_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_ho_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    ho_na_cd cd NOT NULL,
    ho_reg_prov_cd cd NOT NULL,
    ho_reg_city_cd cd NOT NULL,
    ho_reg_dist_cd cd NOT NULL,
    ho_reg_ad_ca comment NOT NULL,
    ho_lo_am amount,
    ho_lo_ye_qt quantity,
    ho_lo_bank_na corp_na,
    ho_prop_na cu_na,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_ho_t IS '贷款申请人住房';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_na_cd IS '住房性质参见字典分类12 ';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_reg_prov_cd IS '户籍省份代码';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_reg_city_cd IS '户籍城市地区';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_reg_dist_cd IS '户籍地区代码';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_reg_ad_ca IS '户籍地址';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_lo_am IS '房贷金额';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_lo_ye_qt IS '房贷年数';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_lo_bank_na IS '房贷银行';
COMMENT ON COLUMN cb_lo_ap_pe_ho_t.ho_prop_na IS '产权人名';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_ic_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_ic_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id,
    la_up_us_dt dt,
    aft_tax_ye_ic_am amount NOT NULL,
    mon_pay_abi_am amount NOT NULL,
    mon_cos_am amount,
    pay_fr_cd cd NOT NULL,
    ss_am amount NOT NULL,
    ho_fu_am amount NOT NULL,
    fam_ye_ic_am amount,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_ic_t IS '贷款申请人收入';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.la_up_us_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.aft_tax_ye_ic_am IS '税后年收入';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.mon_pay_abi_am IS '月还款能力';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.mon_cos_am IS '月均支出';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.pay_fr_cd IS '还款来源代码参考 字典分类：  15';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.ss_am IS '社保基数';
COMMENT ON COLUMN cb_lo_ap_pe_ic_t.ho_fu_am IS '住房公积金';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_jo_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_jo_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    su_id su_id NOT NULL,
    cor_na corp_na NOT NULL,
    wo_yn yn NOT NULL,
    cor_nat_cd cd NOT NULL,
    wo_ag_qt quantity NOT NULL,
    wo_na_cd cd NOT NULL,
    wo_dep_ca caption NOT NULL,
    jo_be_dt dt,
    jo_en_dt dt,
    wage_da day,
    cor_tel_no no,
    ho_reg_prov_cd cd NOT NULL,
    ho_reg_city_cd cd NOT NULL,
    ho_reg_dist_cd cd NOT NULL,
    ho_reg_ad_ca comment NOT NULL,
    du_cd cd NOT NULL,
    career_cd cd,
    indu_cd cd,
    refer_na cu_na,
    refer_tel_no no,
    ye_ic_am amount,
    prof_cd cd NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_jo_t IS '贷款申请人工作表';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.cor_na IS '公司名称';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.wo_yn IS '是否现工作单位。';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.cor_nat_cd IS '单位性质代码参见 字典分类 14';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.wo_ag_qt IS '工龄';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.wo_na_cd IS '工作性质参见字典代码分类68';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.wo_dep_ca IS '工作部门';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.jo_be_dt IS '入职日期';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.jo_en_dt IS '离职日期';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.wage_da IS '发薪日';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.cor_tel_no IS '公司电话';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.ho_reg_prov_cd IS '户籍省份代码';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.ho_reg_city_cd IS '户籍城市地区';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.ho_reg_dist_cd IS '户籍地区代码';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.ho_reg_ad_ca IS '户籍地址';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.du_cd IS '职位参见字典代码20';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.career_cd IS '职业代码参见 字典分类21';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.indu_cd IS '行业代码参见字典分类22';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.refer_na IS '证明人';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.refer_tel_no IS '证明人联系电话';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.ye_ic_am IS '税前年收入';
COMMENT ON COLUMN cb_lo_ap_pe_jo_t.prof_cd IS '职称代码CJ  初级参见字典分类78';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_su_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_su_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    ho_reg_prov_cd cd NOT NULL,
    ho_reg_city_cd cd NOT NULL,
    ho_reg_dist_cd cd NOT NULL,
    ho_reg_ad_ca comment NOT NULL,
    ho_reg_nat_cd cd DEFAULT 'QT'::character varying,
    fa_tel_no no,
    br_no no NOT NULL,
    bi_dt dt NOT NULL,
    mar_cd cd,
    max_eb_cd cd NOT NULL,
    qq_no no,
    mm_no no,
    dri_pa_no no,
    chil_qt day,
    know_lo_yn yn NOT NULL,
    mail_ca caption,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_su_t IS '贷款申请人子表';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ho_reg_prov_cd IS '户籍省份代码';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ho_reg_city_cd IS '户籍城市地区';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ho_reg_dist_cd IS '户籍地区代码';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ho_reg_ad_ca IS '户籍地址';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.ho_reg_nat_cd IS '户口性质CS 城市NC 农村QT 其他参见 字典分类 86';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.fa_tel_no IS '家庭电话';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.bi_dt IS '出生日期可根据身份证号码推算出来。';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.mar_cd IS '婚姻代码参见字典分类代码11';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.max_eb_cd IS '最高学历。参见字典分类：13';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.qq_no IS 'qq号码';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.mm_no IS '微信号码';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.dri_pa_no IS '驾照号码';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.chil_qt IS '孩子人数';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.know_lo_yn IS '是否知晓贷款默认填N';
COMMENT ON COLUMN cb_lo_ap_pe_su_t.mail_ca IS '邮箱';

-- ----------------------------
-- Table structure for cb_lo_ap_pe_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pe_t (
    ap_tr trade_no NOT NULL,
    cu_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    ap_pe_ty_cd cd NOT NULL,
    ci_yn yn NOT NULL,
    ap_pe_con_cd cd NOT NULL,
    cu_na cu_na NOT NULL,
    cu_ty_cd cd NOT NULL,
    cu_ki_cd cd NOT NULL,
    mo_no mo_no,
    pa_ty_cd cd NOT NULL,
    pa_no no NOT NULL,
    bi_dt dt NOT NULL,
    ag_qt day NOT NULL,
    sex_cd cd NOT NULL,
    max_eb_cd cd,
    max_eb_deg_cd cd,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pe_t IS '申请人';
COMMENT ON COLUMN cb_lo_ap_pe_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pe_t.cu_no IS '客户编号';
COMMENT ON COLUMN cb_lo_ap_pe_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pe_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pe_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pe_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pe_t.ap_pe_ty_cd IS '申请人类型代码ZS 主申请人GS 共同申请人参见字典分类 53';
COMMENT ON COLUMN cb_lo_ap_pe_t.ci_yn IS '是否允许征信查询';
COMMENT ON COLUMN cb_lo_ap_pe_t.ap_pe_con_cd IS '和主申请人关系代码参见字典分类 16';
COMMENT ON COLUMN cb_lo_ap_pe_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_lo_ap_pe_t.cu_ty_cd IS '客户类型YB    一般自然人GT   个体经营户HZ   合作方 参见字典分类代码7';
COMMENT ON COLUMN cb_lo_ap_pe_t.cu_ki_cd IS '客户分类PT 普通客户LS 临时客户VI  VIP最贵客户YG 公司员工参见字典分类8';
COMMENT ON COLUMN cb_lo_ap_pe_t.mo_no IS '手机号码';
COMMENT ON COLUMN cb_lo_ap_pe_t.pa_ty_cd IS '证件类型代码SFZ 身份证';
COMMENT ON COLUMN cb_lo_ap_pe_t.pa_no IS '证件号码';
COMMENT ON COLUMN cb_lo_ap_pe_t.bi_dt IS '出生日期可根据身份证号码推算出来。';
COMMENT ON COLUMN cb_lo_ap_pe_t.ag_qt IS '年龄申请时候的年龄';
COMMENT ON COLUMN cb_lo_ap_pe_t.sex_cd IS '性别N 男V 女应当根据身份证号反向计算出来。参见字典分类 10';
COMMENT ON COLUMN cb_lo_ap_pe_t.max_eb_cd IS '最高学历。参见字典分类：13';

-- ----------------------------
-- Table structure for cb_lo_ap_pm_su_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pm_su_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id,
    la_up_dt dt,
    be_per_qt quantity,
    en_per_qt quantity,
    per_qt quantity NOT NULL,
    in_cal_per_qt quantity NOT NULL,
    pay_com_cd cd NOT NULL,
    in_cal_ba_cd cd NOT NULL,
    pm_ty_cd cd NOT NULL,
    prn_pe percent,
    ex_rt rate NOT NULL,
    od_rt rate NOT NULL,
    pay_fre_qt quantity NOT NULL,
    pay_fre_pu_cd cd NOT NULL,
    rt_spr_rt rate,
    rt_adj_rt rate,
    ov_rt_cal_cd cd,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pm_su_t IS '贷款申请还款方式子表';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.be_per_qt IS '开始期数仅仅弹性还款和自由还款填写一般不填，由核心计算。';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.en_per_qt IS '截止期数仅仅弹性还款和自由还款填写';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.per_qt IS '期数';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.in_cal_per_qt IS '利息计算期限默认为null用于气球贷参数。';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.pay_com_cd IS '还款组成代码LX 利LB 利息和本金参见字典分类42 ';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.in_cal_ba_cd IS '利息计算基础代码SY 剩余本金FK 放款本金参见字典分类 40';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.pm_ty_cd IS '还款方式种类DEBX 等额本息DEBJ  等额本金参见字典分类 41 还款方式种类代码';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.prn_pe IS '本金比例';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.ex_rt IS '执行利率';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.od_rt IS '罚息利率';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.pay_fre_pu_cd IS '还款间隔单位Y 月R 日N 年Z  周参见字典82';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.rt_spr_rt IS '利差';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.rt_adj_rt IS '利率浮动';
COMMENT ON COLUMN cb_lo_ap_pm_su_t.ov_rt_cal_cd IS '固定罚息利率计算代码GD 固定利率FD 浮动罚息执行利率*(1+浮动比）';

-- ----------------------------
-- Table structure for cb_lo_ap_pm_t
-- ----------------------------
CREATE TABLE cb_lo_ap_pm_t (
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id,
    la_up_dt dt,
    pm_id ref_id NOT NULL,
    pm_cd cd,
    pm_na cu_na NOT NULL,
    ml_pr_pe_cd cd NOT NULL,
    fi_pay_pe percent,
    in_cal_per_cd cd NOT NULL,
    per_pro_yn yn NOT NULL,
    pr_sp_qt quantity,
    inde_pay_pu_cd cd,
    inde_pay_ty_cd cd,
    inde_pay_pe percent,
    inde_pay_am amount,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_pm_t IS '贷款还款方式表';
COMMENT ON COLUMN cb_lo_ap_pm_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_pm_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_pm_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_pm_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_pm_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_pm_t.pm_id IS '还款方式Id';
COMMENT ON COLUMN cb_lo_ap_pm_t.pm_cd IS '还款类型代码DEBX 等额本息DEBJ  等额本金LSBQ  利随本清AQHX  按期还息到期还本TXHK  弹性还款QQDK   气球贷BTJG  本息不同间隔参见字典分类  37';
COMMENT ON COLUMN cb_lo_ap_pm_t.pm_na IS '还款方式名称';
COMMENT ON COLUMN cb_lo_ap_pm_t.ml_pr_pe_cd IS '放款本金比例代码SP 商品价格DK 贷款参见字典分类 38';
COMMENT ON COLUMN cb_lo_ap_pm_t.fi_pay_pe IS '首付比例当 放款本金比例代码为SP的时候必须填比例。';
COMMENT ON COLUMN cb_lo_ap_pm_t.in_cal_per_cd IS '计息周期代码SJTS   实际天数GDTS  每周期固定天数参见字典分类 39';
COMMENT ON COLUMN cb_lo_ap_pm_t.per_pro_yn IS '期供标志Y 期供N 非期供';
COMMENT ON COLUMN cb_lo_ap_pm_t.pr_sp_qt IS '本金间隔长度适用于本息不同间隔的还款方式必填。每隔多少个周期还款一次。';
COMMENT ON COLUMN cb_lo_ap_pm_t.inde_pay_pu_cd IS '递增递减还款周期大单位代码选择递增递减模式必填。Y 月R 日N 年Z  周';
COMMENT ON COLUMN cb_lo_ap_pm_t.inde_pay_ty_cd IS '递增递减还款类型选择递增递减模式必填。BL 按比例JE 按金额';
COMMENT ON COLUMN cb_lo_ap_pm_t.inde_pay_pe IS '递增递减还款比例选择递增递减模式必填。';
COMMENT ON COLUMN cb_lo_ap_pm_t.inde_pay_am IS '递增递减还款金额选择递增递减模式必填。';

-- ----------------------------
-- Table structure for cb_lo_ap_su_t
-- ----------------------------
CREATE TABLE cb_lo_ap_su_t (
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    lo_dea_ty_cd cd NOT NULL,
    ap_am amount NOT NULL,
    appr_am amount NOT NULL,
    cur_cd cd,
    ap_pl_qt quantity NOT NULL,
    ap_pl_fre_cd cd NOT NULL,
    appr_pl_qt quantity NOT NULL,
    goo_buy_am amount NOT NULL,
    fi_pay_am amount NOT NULL,
    ci_sco_qt amount,
    ci_gra_cd cd,
    ci_acc_yn cd,
    si_co_dt dt,
    ci_bl_pe_yn yn,
    tel_che1_yn yn DEFAULT 'N'::bpchar NOT NULL,
    tel_che2_yn yn DEFAULT 'N'::bpchar NOT NULL,
    tel_che3_yn yn DEFAULT 'N'::bpchar NOT NULL,
    prom_no no,
    prom_na caption,
    la_up_us_dt character varying(255),
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_su_t IS '贷款申请子表';
COMMENT ON COLUMN cb_lo_ap_su_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_su_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_su_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_su_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_su_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_su_t.lo_dea_ty_cd IS '进件类型代码GJ 公积SB 社保卡参见字典分类61';
COMMENT ON COLUMN cb_lo_ap_su_t.ap_am IS '申请金额对于耐用品消费，需要商品订单的，申请金额=商品金额*(1-首付比例）';
COMMENT ON COLUMN cb_lo_ap_su_t.appr_am IS '审批金额在初审前自动填写。可在电核/初审、二审、终审环节填写。';
COMMENT ON COLUMN cb_lo_ap_su_t.cur_cd IS '币种代码RMB 人民币MY   美元参见字典分类 59';
COMMENT ON COLUMN cb_lo_ap_su_t.ap_pl_qt IS '申请期限';
COMMENT ON COLUMN cb_lo_ap_su_t.ap_pl_fre_cd IS '申请期限频率代码默认 Y参见字典分类81';
COMMENT ON COLUMN cb_lo_ap_su_t.appr_pl_qt IS '批准期限';
COMMENT ON COLUMN cb_lo_ap_su_t.goo_buy_am IS '商品购买金额';
COMMENT ON COLUMN cb_lo_ap_su_t.fi_pay_am IS '首付金额';
COMMENT ON COLUMN cb_lo_ap_su_t.ci_sco_qt IS '信用评分在P3填写';
COMMENT ON COLUMN cb_lo_ap_su_t.ci_gra_cd IS '信用评级代码在P3填写';
COMMENT ON COLUMN cb_lo_ap_su_t.ci_acc_yn IS '是否征信准入';
COMMENT ON COLUMN cb_lo_ap_su_t.si_co_dt IS '合同签约日期';
COMMENT ON COLUMN cb_lo_ap_su_t.ci_bl_pe_yn IS '是否在黑名单。可查询三方征信或者内部黑名单。';
COMMENT ON COLUMN cb_lo_ap_su_t.tel_che1_yn IS '电核项目生成标记用于初审';
COMMENT ON COLUMN cb_lo_ap_su_t.tel_che2_yn IS '电核项目生成标记用于回访';
COMMENT ON COLUMN cb_lo_ap_su_t.tel_che3_yn IS '电核项目生成标记用于上级回访';
COMMENT ON COLUMN cb_lo_ap_su_t.prom_no IS '促销编号';
COMMENT ON COLUMN cb_lo_ap_su_t.prom_na IS '促销名称';

-- ----------------------------
-- Table structure for cb_lo_ap_t
-- ----------------------------
CREATE TABLE cb_lo_ap_t (
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    br_no no NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id,
    la_up_dt dt,
    st cd NOT NULL,
    cu_ma_login_na no NOT NULL,
    cu_ma_na cu_na,
    cu_no no NOT NULL,
    cu_na cu_na NOT NULL,
    cu_mo_no mo_no,
    lo_ki_cd cd NOT NULL,
    lo_ty_no no NOT NULL,
    lo_ty_id ref_id NOT NULL,
    lo_ty_na cu_na NOT NULL,
    lo_use_cd cd NOT NULL,
    lo_use_ca caption NOT NULL,
    sto_no no,
    sto_na corp_na,
    mat_set_no no NOT NULL,
    lo_in_cha_cd cd NOT NULL,
    ap_dt dt NOT NULL,
    ap_tm tm NOT NULL,
    reg_us_login_na cu_na NOT NULL,
    reg_us_mo_no mo_no,
    reg_us_na cu_na,
    cu_ma_mo_no mo_no,
    co comment NOT NULL,
    sto_tel_no character varying(32),
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ap_t IS '贷款申请主表';
COMMENT ON COLUMN cb_lo_ap_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_t.br_no IS '管理机构号码';
COMMENT ON COLUMN cb_lo_ap_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_t.st IS '状态CS 初始JH 激活参见字典分类 28';
COMMENT ON COLUMN cb_lo_ap_t.cu_ma_login_na IS '客户经理登录名';
COMMENT ON COLUMN cb_lo_ap_t.cu_ma_na IS '客户经理姓名';
COMMENT ON COLUMN cb_lo_ap_t.cu_no IS '客户编号主申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_lo_ap_t.cu_mo_no IS '客户手机号码';
COMMENT ON COLUMN cb_lo_ap_t.lo_ki_cd IS '贷款分类耐用消费品现金贷款参见字典项目这个类型，可筛选产品分类。字典分类：44';
COMMENT ON COLUMN cb_lo_ap_t.lo_ty_no IS '产品编号';
COMMENT ON COLUMN cb_lo_ap_t.lo_ty_id IS '贷款类型Id';
COMMENT ON COLUMN cb_lo_ap_t.lo_ty_na IS '产品名称';
COMMENT ON COLUMN cb_lo_ap_t.lo_use_cd IS '贷款用途代码创业、教育、消费、装修、旅游参见字典。lo.us';
COMMENT ON COLUMN cb_lo_ap_t.lo_use_ca IS '贷款用途说明。如果是其他用途，需要手动填写，否则自动。';
COMMENT ON COLUMN cb_lo_ap_t.sto_no IS '门店号码';
COMMENT ON COLUMN cb_lo_ap_t.sto_na IS '门店名称';
COMMENT ON COLUMN cb_lo_ap_t.mat_set_no IS '材料集编号有系统自动决定，简表可不显示根据产品决定材料集编号。';
COMMENT ON COLUMN cb_lo_ap_t.lo_in_cha_cd IS '贷款进入渠道例如：PC安卓门店行内参见字典分类60';
COMMENT ON COLUMN cb_lo_ap_t.ap_dt IS '进件日期';
COMMENT ON COLUMN cb_lo_ap_t.ap_tm IS '申请时间';
COMMENT ON COLUMN cb_lo_ap_t.reg_us_login_na IS '登记用户登录名称';
COMMENT ON COLUMN cb_lo_ap_t.reg_us_mo_no IS '登记人用户手机号码';
COMMENT ON COLUMN cb_lo_ap_t.reg_us_na IS '登记人姓名';
COMMENT ON COLUMN cb_lo_ap_t.cu_ma_mo_no IS '客户经理手机号码';
COMMENT ON COLUMN cb_lo_ap_t.co IS '备注';
COMMENT ON COLUMN cb_lo_ap_t.sto_tel_no IS '门店号码';

-- ----------------------------
-- Table structure for cb_lo_ap_tel_che_t
-- ----------------------------
CREATE TABLE cb_lo_ap_tel_che_t (
    ap_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    tel_che_cd cd NOT NULL,
    tel_che_su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    st cd NOT NULL,
    cu_no no NOT NULL,
    cu_na cu_na NOT NULL,
    tel_che_pers_cd cd NOT NULL,
    tel_che_ite_de de NOT NULL,
    tel_che_ty_cd cd NOT NULL,
    tel_che_tip_co comment,
    tel_che_res_ca caption,
    co comment NOT NULL,
    la_up_us_dt character varying(255),
    tena_id ref_id,
    ma_yn yn DEFAULT 'Y'::bpchar NOT NULL
);
COMMENT ON TABLE cb_lo_ap_tel_che_t IS '贷款申请电核';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_cd IS '电核代码参见 cs_lo_tel_che_c';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_su_id IS '电核代码项目子流水';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.st IS '状态CS 初始JH 激活SX 失效';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.cu_no IS '申请人客户编号';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_pers_cd IS '电核对象代码SQ 申请人GS 共同申请人BZ 保证人WT 委托人参见字典分类 49';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_ite_de IS '项目描述';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_ty_cd IS '电核分类代码SF 本人身份核实DW 单位信息核实LX 联系人电话核QT 其他参见 字典分类56';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_tip_co IS '电核提示文字需导入实际电核界面。';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.tel_che_res_ca IS '电核结果目前填 是/否';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.co IS '备注';
COMMENT ON COLUMN cb_lo_ap_tel_che_t.ma_yn IS '是否必须电核';

-- ----------------------------
-- Table structure for cb_lo_ml_ac_no_t
-- ----------------------------
CREATE TABLE cb_lo_ml_ac_no_t (
    ml_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cu_no no NOT NULL,
    ac_us_cd cd NOT NULL,
    ac_cu_cd cd NOT NULL,
    ac_na cu_na NOT NULL,
    ac_ty_cd cd NOT NULL,
    ac_cd cd NOT NULL,
    ac_no no NOT NULL,
    ac_pa_ty_cd cd,
    ac_pa_no no,
    ac_bank_no cd,
    ac_bank_na cu_na,
    ac_bank_br_no cd,
    ac_bank_br_na cu_na,
    ac_ano_na cu_na,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ml_ac_no_t IS '贷款出账账号表';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ml_tr IS '放款流水';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.cu_no IS '申请人客户编号';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_us_cd IS '账号用途代码HK 还款账号FK 放款账号ST 受托支付账号参见字典分类 65';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_cu_cd IS '币种代码RMB 人民币MY  美元';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_na IS '户名';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_ty_cd IS '账号类型GR  个人账户DG  对公账户';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_cd IS '账户代码NB 内部账户 内部账户不用发起结算系统。JS  结算账号参见字典分类132';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_no IS '账号';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_pa_ty_cd IS '账户证件类型代码SFZ 省份证';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_pa_no IS '证件号码';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_bank_no IS '开户行号';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_bank_na IS '银行名称';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_bank_br_no IS '开户行机构号';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_bank_br_na IS '开户行名称';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.ac_ano_na IS '账户别名结算系统的账户别名';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_ac_no_t.la_up_us_id IS '最后更新用户';

-- ----------------------------
-- Table structure for cb_lo_ml_fe_t
-- ----------------------------
CREATE TABLE cb_lo_ml_fe_t (
    ml_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    fe_cd cd NOT NULL,
    fee_su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    fe_ty_cd cd NOT NULL,
    fe_pay_ty_cd cd NOT NULL,
    pay_fr_cd cd NOT NULL,
    pay_dire_cd cd NOT NULL,
    incl_to_pr_yn yn NOT NULL,
    fee_cal_cd cd NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id,
    fr_per_qt quantity NOT NULL,
    to_per_qt quantity,
    fe_pe percent NOT NULL,
    min_fe_am amount NOT NULL,
    max_fe_am amount NOT NULL,
    tot_fe_yn yn NOT NULL,
    fe_am amount,
    be_prom_fe_am amount NOT NULL,
    prom_no no,
    prom_na cu_na,
    fe_dt dt,
    fe_fre_qt quantity,
    fe_pu_cd cd,
    fe_da day,
    fe_per_qt quantity,
    tena_id ref_id
);

COMMENT ON TABLE cb_lo_ml_fe_t IS '贷款放款出账申请出账申请的时候，需要扣减合同的额度。如果撤销需要还原合同额度。';
COMMENT ON COLUMN cb_lo_ml_fe_t.ml_tr IS '放款流水';
COMMENT ON COLUMN cb_lo_ml_fe_t.su_id IS '电核子流水针对流程的一次电核。这个建议关联流程的实例号';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_cd IS '费用代码如果优惠为费用需要填写。';
COMMENT ON COLUMN cb_lo_ml_fe_t.fee_su_id IS '收费子流水';
COMMENT ON COLUMN cb_lo_ml_fe_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_fe_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_ty_cd IS '费用类型代码字典类别Id：1';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_pay_ty_cd IS '收取类型FK 放款前收取 在放款的时候收取FH 放款后收取SC  首次扣款收取FQ 分期收DK  同贷款还款计划表 这种模式子表配置的从多少期到多少期无效。例如：总贷款金额*比例/期数字典分类id 2';
COMMENT ON COLUMN cb_lo_ml_fe_t.pay_fr_cd IS '还款来源代码参考 字典分类：  15';
COMMENT ON COLUMN cb_lo_ml_fe_t.pay_dire_cd IS '收付方向代码相对于金融公司收取和付出的方向SQ 收取FC 付出参见字典分类 63';
COMMENT ON COLUMN cb_lo_ml_fe_t.incl_to_pr_yn IS '包含到到本金是否把这个费用计入计息本金';
COMMENT ON COLUMN cb_lo_ml_fe_t.fee_cal_cd IS '费用计算代码GD 固定费用BL  按比例收取参考字典分类 4';
COMMENT ON COLUMN cb_lo_ml_fe_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_fe_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ml_fe_t.fr_per_qt IS '开始期数可以为空如果为分期类费用，需要填写。';
COMMENT ON COLUMN cb_lo_ml_fe_t.to_per_qt IS '截止期数';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_pe IS '收费比例';
COMMENT ON COLUMN cb_lo_ml_fe_t.min_fe_am IS '最小费用';
COMMENT ON COLUMN cb_lo_ml_fe_t.max_fe_am IS '最大费用';
COMMENT ON COLUMN cb_lo_ml_fe_t.tot_fe_yn IS '是否总费用如果是总费用，并且是分期收取，那么每期收取的费用为 总费用/期数';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_am IS '费用金额';
COMMENT ON COLUMN cb_lo_ml_fe_t.be_prom_fe_am IS '促销前费用';
COMMENT ON COLUMN cb_lo_ml_fe_t.prom_no IS '促销编号';
COMMENT ON COLUMN cb_lo_ml_fe_t.prom_na IS '促销名称';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_dt IS '收费日期如果为FH 放款后收取需要填写收费日期';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_fre_qt IS '收费间隔数量对于分期付费，需要填写默认为1';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_pu_cd IS '收费日期频率。Y 月R 日N 年Z  周参见字典项分类82';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_da IS '收费日如果FQ 分期收取需要填写';
COMMENT ON COLUMN cb_lo_ml_fe_t.fe_per_qt IS '收费期数';

-- ----------------------------
-- Table structure for cb_lo_ml_pm_su_t
-- ----------------------------
CREATE TABLE cb_lo_ml_pm_su_t (
    ml_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    be_per_qt quantity,
    en_per_qt quantity,
    in_cal_per_qt quantity NOT NULL,
    pay_com_cd cd NOT NULL,
    in_cal_ba_cd cd NOT NULL,
    pm_ty_cd cd NOT NULL,
    prn_pe percent,
    ex_rt rate NOT NULL,
    od_rt rate NOT NULL,
    pay_fre_qt quantity NOT NULL,
    pay_fre_pu_cd cd NOT NULL,
    rt_spr_rt rate,
    rt_adj_rt rate,
    ov_rt_cal_cd cd,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ml_pm_su_t IS '贷款放款出账申请出账申请的时候，需要扣减合同的额度。如果撤销需要还原合同额度。';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.ml_tr IS '放款流水';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.be_per_qt IS '开始期数仅仅弹性还款和自由还款填写一般不填，由核心计算。';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.en_per_qt IS '截止期数仅仅弹性还款和自由还款填写';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.in_cal_per_qt IS '利息计算期限默认为null用于气球贷参数。';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.pay_com_cd IS '还款组成代码LX 利息LB 利息和本金参见字典分类42 ';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.in_cal_ba_cd IS '利息计算基础代码SY 剩余本金FK 放款本金参见字典分类 40';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.pm_ty_cd IS '还款方式种类DEBX 等额本息DEBJ  等额本金参见字典分类 41 还款方式种类代码';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.prn_pe IS '本金比例';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.ex_rt IS '执行利率';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.od_rt IS '罚息利率';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.pay_fre_pu_cd IS '还款间隔单位Y 月R 日N 年Z  周参见字典82';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.rt_spr_rt IS '利差';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.rt_adj_rt IS '利率浮动';
COMMENT ON COLUMN cb_lo_ml_pm_su_t.ov_rt_cal_cd IS '固定罚息利率计算代码GD 固定利率FD 浮动罚息执行利率*(1+浮动比）';

-- ----------------------------
-- Table structure for cb_lo_ml_pm_t
-- ----------------------------
CREATE TABLE cb_lo_ml_pm_t (
    ml_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    pm_id ref_id NOT NULL,
    pm_cd cd,
    ml_pr_pe_cd cd NOT NULL,
    fi_pay_pe percent,
    in_cal_per_cd cd NOT NULL,
    per_pro_yn yn NOT NULL,
    pr_sp_qt quantity,
    inde_pay_pu_cd cd,
    inde_pay_ty_cd cd,
    inde_pay_pe percent,
    inde_pay_am amount,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ml_pm_t IS '贷款放款出账申请出账申请的时候，需要扣减合同的额度。如果撤销需要还原合同额度。';
COMMENT ON COLUMN cb_lo_ml_pm_t.ml_tr IS '放款流水';
COMMENT ON COLUMN cb_lo_ml_pm_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_pm_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_pm_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_pm_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ml_pm_t.pm_id IS '还款方式Id';
COMMENT ON COLUMN cb_lo_ml_pm_t.pm_cd IS '还款类型代码DEBX 等额本息DEBJ  等额本金LSBQ  利随本清AQHX  按期还息到期还本TXHK  弹性还款QQDK   气球贷BTJG  本息不同间隔参见字典分类  37';
COMMENT ON COLUMN cb_lo_ml_pm_t.ml_pr_pe_cd IS '放款本金比例代码SP 商品价格DK 贷款参见字典分类 38';
COMMENT ON COLUMN cb_lo_ml_pm_t.fi_pay_pe IS '首付比例当 放款本金比例代码为SP的时候必须填比例。';
COMMENT ON COLUMN cb_lo_ml_pm_t.in_cal_per_cd IS '计息周期代码SJTS   实际天数GDTS  每周期固定天数参见字典分类 39';
COMMENT ON COLUMN cb_lo_ml_pm_t.per_pro_yn IS '期供标志Y 期供N 非期供';
COMMENT ON COLUMN cb_lo_ml_pm_t.pr_sp_qt IS '本金间隔长度适用于本息不同间隔的还款方式必填每隔多少个周期还款一次。';
COMMENT ON COLUMN cb_lo_ml_pm_t.inde_pay_pu_cd IS '递增递减还款周期大单位代码选择递增递减模式必填。Y 月R 日N 年Z  周';
COMMENT ON COLUMN cb_lo_ml_pm_t.inde_pay_ty_cd IS '递增递减还款类型选择递增递减模式必填。BL 按比例JE 按金额';
COMMENT ON COLUMN cb_lo_ml_pm_t.inde_pay_pe IS '递增递减还款比例选择递增递减模式必填。';
COMMENT ON COLUMN cb_lo_ml_pm_t.inde_pay_am IS '递增递减还款金额选择递增递减模式必填。';

-- ----------------------------
-- Table structure for cb_lo_ml_setl_ac_no_t
-- ----------------------------
CREATE TABLE cb_lo_ml_setl_ac_no_t (
    ml_setl_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    ve version NOT NULL,
    cu_no no NOT NULL,
    ac_cu_cd cd NOT NULL,
    ac_na cu_na NOT NULL,
    ac_ty_cd cd NOT NULL,
    ac_no no NOT NULL,
    ac_cd cd NOT NULL,
    ac_pa_ty_cd cd,
    ac_pa_no no,
    ac_bank_no cd,
    ac_bank_na cu_na,
    ac_bank_br_no cd,
    ac_bank_br_na cu_na,
    ac_ano_na cu_na,
    ap_tr trade_no NOT NULL,
    setl_am amount NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ml_setl_ac_no_t IS '贷款放款结算账号表 ';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ml_setl_tr IS '放款清算流水';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.su_id IS '子流水';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.cu_no IS '申请人客户编号';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_cu_cd IS '币种代码RMB 人民币MY  美元';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_na IS '户名';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_ty_cd IS '账号类型GR  个人账户DG  对公账户';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_no IS '账号';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_cd IS '账户代码NB 内部账户 内部账户不用发起结算系统。JS  结算账号参见字典分类132';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_pa_ty_cd IS '账户证件类型代码SFZ 省份证';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_pa_no IS '证件号码';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_bank_no IS '开户行号';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_bank_na IS '银行名称';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_bank_br_no IS '开户行机构号';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_bank_br_na IS '开户行名称';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ac_ano_na IS '账户别名结算系统的账户别名';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.setl_am IS '放款金额放款金额之和等于放款申请之和';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_setl_ac_no_t.la_up_us_id IS '最后更新用户';

-- ----------------------------
-- Table structure for cb_lo_ml_setl_t
-- ----------------------------
CREATE TABLE cb_lo_ml_setl_t (
    ml_setl_tr trade_no NOT NULL,
    lr_op_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id,
    la_up_dt dt,
    st cd NOT NULL,
    ml_am amount NOT NULL,
    ml_dt dt NOT NULL,
    ml_tr trade_no NOT NULL,
    ap_tr trade_no NOT NULL,
    ka_tr trade_no,
    co comment NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ml_setl_t IS '贷款放款结算申请真实放款的申请';
COMMENT ON COLUMN cb_lo_ml_setl_t.ml_setl_tr IS '放款清算流水';
COMMENT ON COLUMN cb_lo_ml_setl_t.lr_op_tr IS '借据操作流水这个流水发送到核心。';
COMMENT ON COLUMN cb_lo_ml_setl_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_setl_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_setl_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ml_setl_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_setl_t.st IS '状态CS 初始JH 激活参见字典分类 28';
COMMENT ON COLUMN cb_lo_ml_setl_t.ml_am IS '放款金额';
COMMENT ON COLUMN cb_lo_ml_setl_t.ml_dt IS '放款日期可以指定未来某个放款日期。';
COMMENT ON COLUMN cb_lo_ml_setl_t.ml_tr IS '放款流水';
COMMENT ON COLUMN cb_lo_ml_setl_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ml_setl_t.ka_tr IS '贷款记账流水这个是唯一的。';
COMMENT ON COLUMN cb_lo_ml_setl_t.co IS '备注';

-- ----------------------------
-- Table structure for cb_lo_ml_t
-- ----------------------------
CREATE TABLE cb_lo_ml_t (
    ml_tr trade_no NOT NULL,
    lr_op_tr trade_no,
    ap_tr trade_no NOT NULL,
    ka_tr trade_no,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    st cd NOT NULL,
    aco_typ_no no NOT NULL,
    ml_ty_cd cd NOT NULL,
    co_no no NOT NULL,
    pay_cd cd NOT NULL,
    ap_am amount NOT NULL,
    lr_am amount NOT NULL,
    lr_no no NOT NULL,
    ml_dt dt NOT NULL,
    ml_br_no no NOT NULL,
    che_us_id ref_id,
    che_dt dt,
    co comment NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lo_ml_t IS '贷款放款出账申请出账申请的时候，需要扣减合同的额度。如果撤销需要还原合同额度。';
COMMENT ON COLUMN cb_lo_ml_t.ml_tr IS '放款流水';
COMMENT ON COLUMN cb_lo_ml_t.lr_op_tr IS '借据操作流水这个流水发送到核心。';
COMMENT ON COLUMN cb_lo_ml_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lo_ml_t.ka_tr IS '贷款记账流水这个是唯一的。';
COMMENT ON COLUMN cb_lo_ml_t.ve IS '版本';
COMMENT ON COLUMN cb_lo_ml_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lo_ml_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lo_ml_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lo_ml_t.st IS '状态CS 初始JH 激活参见字典分类 28';
COMMENT ON COLUMN cb_lo_ml_t.aco_typ_no IS '核算品种代码';
COMMENT ON COLUMN cb_lo_ml_t.ml_ty_cd IS '放款方式代码YC 一次放款DC 多次放款参见字典分类  125';
COMMENT ON COLUMN cb_lo_ml_t.co_no IS '合同号';
COMMENT ON COLUMN cb_lo_ml_t.pay_cd IS '支付代码ZJ 直接支付ST 受托支付参见字典分类 66如果采用受托支付，款项放给受托账号';
COMMENT ON COLUMN cb_lo_ml_t.ap_am IS '申请用款金额';
COMMENT ON COLUMN cb_lo_ml_t.lr_am IS '借据金额这个金额等于 申请金额+关联需要计息的费用。';
COMMENT ON COLUMN cb_lo_ml_t.lr_no IS '借据编号';
COMMENT ON COLUMN cb_lo_ml_t.ml_dt IS '放款日期';
COMMENT ON COLUMN cb_lo_ml_t.ml_br_no IS '放款机构号码';
COMMENT ON COLUMN cb_lo_ml_t.che_us_id IS '办理人用户id';
COMMENT ON COLUMN cb_lo_ml_t.che_dt IS '办理日期';
COMMENT ON COLUMN cb_lo_ml_t.co IS '备注';

-- ----------------------------
-- Table structure for cb_lr_op_su_l
-- ----------------------------
CREATE TABLE cb_lr_op_su_l (
    lr_op_tr trade_no NOT NULL,
    su_id su_id NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    st cd NOT NULL,
    cc_st cd NOT NULL,
    co comment,
    op_us_id ref_id NOT NULL,
    op_login_na cu_na NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lr_op_su_l IS '借据操作申请明细';
COMMENT ON COLUMN cb_lr_op_su_l.lr_op_tr IS '借据操作流水这个流水发送到核心。';
COMMENT ON COLUMN cb_lr_op_su_l.su_id IS '子流水';
COMMENT ON COLUMN cb_lr_op_su_l.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lr_op_su_l.cr_tm IS '创建时间';
COMMENT ON COLUMN cb_lr_op_su_l.st IS '状态CS 初始JH 激活WC 完成 当所有操作完成以后更改此状态参见字典分类 28';
COMMENT ON COLUMN cb_lr_op_su_l.cc_st IS '业务发送核心状态CS 初始FS 已发送QR已确CZ 已出账BQ 已部分清算QS 已清算，对于分阶段清算的贷款，清算完毕，操作完参见字典分类 148';
COMMENT ON COLUMN cb_lr_op_su_l.op_us_id IS '操作用户Id';
COMMENT ON COLUMN cb_lr_op_su_l.op_login_na IS '操作用户登录名。';

-- ----------------------------
-- Table structure for cb_lr_op_t
-- ----------------------------
CREATE TABLE cb_lr_op_t (
    lr_op_tr trade_no NOT NULL,
    ap_tr trade_no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    la_up_dt dt NOT NULL,
    cc_tr_cd cd NOT NULL,
    cc_st cd,
    st cd NOT NULL,
    co_no no NOT NULL,
    lr_no no NOT NULL,
    op_am amount NOT NULL,
    cu_na cu_na NOT NULL,
    cu_no no NOT NULL,
    pa_ty_cd cd NOT NULL,
    pa_no no NOT NULL,
    reg_us_login_na cu_na NOT NULL,
    reg_us_na cu_na,
    cle_yn yn NOT NULL,
    co comment NOT NULL,
    tena_id ref_id
);
COMMENT ON TABLE cb_lr_op_t IS '借据操作流水在申请的时候插入。';
COMMENT ON COLUMN cb_lr_op_t.lr_op_tr IS '借据操作流水这个流水发送到核心。';
COMMENT ON COLUMN cb_lr_op_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_lr_op_t.ve IS '版本';
COMMENT ON COLUMN cb_lr_op_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_lr_op_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_lr_op_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_lr_op_t.cc_tr_cd IS '借据操作码001  放款002  放款结003  退款004  提前还款005  账号调整006  利息减免007  贷款冲正008  交易撤销009  贷款暂停010  贷款核销参见字典分类 123';
COMMENT ON COLUMN cb_lr_op_t.cc_st IS '业务发送核心状态CS 初FS 已发送QR已确认CZ 已出账BQ 已部分清算QS 已清算，对于分阶段清算的贷款，清算完毕，操作完成参见字典分类 148';
COMMENT ON COLUMN cb_lr_op_t.st IS '状态CS 初始JH 激活WC 完成 当所有操作完成以后更改此状态参见字典分类 28';
COMMENT ON COLUMN cb_lr_op_t.co_no IS '合同号';
COMMENT ON COLUMN cb_lr_op_t.lr_no IS '借据编号';
COMMENT ON COLUMN cb_lr_op_t.op_am IS '操作金额比如 放款 填写放款的金额';
COMMENT ON COLUMN cb_lr_op_t.cu_na IS '客户名称';
COMMENT ON COLUMN cb_lr_op_t.cu_no IS '客户编号';
COMMENT ON COLUMN cb_lr_op_t.pa_ty_cd IS '证件类型代码SFZ 身份证';
COMMENT ON COLUMN cb_lr_op_t.pa_no IS '证件号码';
COMMENT ON COLUMN cb_lr_op_t.reg_us_login_na IS '登记用户登录名称';
COMMENT ON COLUMN cb_lr_op_t.reg_us_na IS '登记人姓名';
COMMENT ON COLUMN cb_lr_op_t.cle_yn IS '是否撤销操作';
COMMENT ON COLUMN cb_lr_op_t.co IS '备注';


ALTER TABLE cb_cu_ho_b ADD PRIMARY KEY (cu_no, su_id);
ALTER TABLE cb_cu_stat_b ADD PRIMARY KEY (cu_no);
ALTER TABLE cb_fl_lo_ap_h ADD PRIMARY KEY (fl_inst_id);
ALTER TABLE cb_fl_lo_ap_t ADD PRIMARY KEY (fl_inst_id);
ALTER TABLE cb_lo_ap_ac_no_t ADD PRIMARY KEY (su_id, ap_tr);
ALTER TABLE cb_lo_ap_co_ml_t ADD PRIMARY KEY (ap_tr, su_id);
ALTER TABLE cb_lo_ap_co_t ADD PRIMARY KEY (ap_tr);
ALTER TABLE cb_lo_ap_fe_su_t ADD PRIMARY KEY (su_id, fe_cd, fee_su_id, ap_tr);
ALTER TABLE cb_lo_ap_fee_t ADD PRIMARY KEY (su_id, ap_tr);
ALTER TABLE cb_lo_ap_goo_ord_t ADD PRIMARY KEY (ap_tr, su_id);
ALTER TABLE cb_lo_ap_mat_t ADD PRIMARY KEY (ap_tr, su_id);
ALTER TABLE cb_lo_ap_pay_sch_par_t ADD PRIMARY KEY (ap_tr);
ALTER TABLE cb_lo_ap_pay_sch_t ADD PRIMARY KEY (per_qt, ap_tr);
ALTER TABLE cb_lo_ap_pe_ad_t ADD PRIMARY KEY (su_id, cu_no, ap_tr);
ALTER TABLE cb_lo_ap_pe_con_t ADD PRIMARY KEY (cu_no, su_id, ap_tr);
ALTER TABLE cb_lo_ap_pe_eb_t ADD PRIMARY KEY (cu_no, ap_tr, su_id);
ALTER TABLE cb_lo_ap_pe_ho_t ADD PRIMARY KEY (cu_no, ap_tr, su_id);
ALTER TABLE cb_lo_ap_pe_ic_t ADD PRIMARY KEY (cu_no, ap_tr);
ALTER TABLE cb_lo_ap_pe_jo_t ADD PRIMARY KEY (su_id, cu_no, ap_tr);
ALTER TABLE cb_lo_ap_pe_su_t ADD PRIMARY KEY (cu_no, ap_tr);
ALTER TABLE cb_lo_ap_pe_t ADD PRIMARY KEY (cu_no, ap_tr);
ALTER TABLE cb_lo_ap_pm_su_t ADD PRIMARY KEY (su_id, ap_tr);
ALTER TABLE cb_lo_ap_pm_t ADD PRIMARY KEY (ap_tr);
ALTER TABLE cb_lo_ap_su_t ADD PRIMARY KEY (ap_tr);
ALTER TABLE cb_lo_ap_t ADD PRIMARY KEY (ap_tr);
ALTER TABLE cb_lo_ap_tel_che_t ADD PRIMARY KEY (ap_tr, tel_che_su_id, tel_che_cd, su_id);
ALTER TABLE cb_lo_ml_ac_no_t ADD PRIMARY KEY (su_id, ml_tr);
ALTER TABLE cb_lo_ml_fe_t ADD PRIMARY KEY (ml_tr, su_id);
ALTER TABLE cb_lo_ml_pm_su_t ADD PRIMARY KEY (ml_tr, su_id, pay_fre_qt);
ALTER TABLE cb_lo_ml_pm_t ADD PRIMARY KEY (ml_tr);
ALTER TABLE cb_lo_ml_setl_ac_no_t ADD PRIMARY KEY (su_id, ml_setl_tr);
ALTER TABLE cb_lo_ml_setl_t ADD PRIMARY KEY (ml_setl_tr);
ALTER TABLE cb_lo_ml_t ADD UNIQUE (lr_op_tr);
ALTER TABLE cb_lo_ml_t ADD PRIMARY KEY (ml_tr);
ALTER TABLE cb_lr_op_su_l ADD PRIMARY KEY (lr_op_tr, su_id);
ALTER TABLE cb_lr_op_t ADD PRIMARY KEY (lr_op_tr);
    
CREATE UNIQUE INDEX cb_cu_ho_b_pk ON cb_cu_ho_b USING btree (cu_no, su_id);
CREATE UNIQUE INDEX cb_fl_lo_ap_h_pk ON cb_fl_lo_ap_h USING btree (fl_inst_id);
CREATE UNIQUE INDEX cb_fl_lo_ap_t_pk ON cb_fl_lo_ap_t USING btree (fl_inst_id);
CREATE UNIQUE INDEX cb_lo_ap_ac_no_t_pk ON cb_lo_ap_ac_no_t USING btree (ap_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ap_co_ml_t_pk ON cb_lo_ap_co_ml_t USING btree (ap_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ap_co_t_pk ON cb_lo_ap_co_t USING btree (ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_fe_su_t_pk ON cb_lo_ap_fe_su_t USING btree (su_id, fe_cd, fee_su_id, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_fee_t_pk ON cb_lo_ap_fee_t USING btree (su_id, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_goo_ord_t_pk ON cb_lo_ap_goo_ord_t USING btree (ap_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ap_mat_t_pk ON cb_lo_ap_mat_t USING btree (ap_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ap_pay_sch_par_t_pk ON cb_lo_ap_pay_sch_par_t USING btree (ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pay_sch_t_pk ON cb_lo_ap_pay_sch_t USING btree (per_qt, ap_tr);
CREATE UNIQUE INDEX cs_lo_ap_pe_ad_t_pk ON cb_lo_ap_pe_ad_t USING btree (su_id, cu_no, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pe_con_t_pk ON cb_lo_ap_pe_con_t USING btree (cu_no, su_id, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pe_eb_t_pk ON cb_lo_ap_pe_eb_t USING btree (cu_no, ap_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ap_pe_ho_t_pk ON cb_lo_ap_pe_ho_t USING btree (cu_no, ap_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ap_pe_ic_t_pk ON cb_lo_ap_pe_ic_t USING btree (cu_no, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pe_jo_t_pk ON cb_lo_ap_pe_jo_t USING btree (su_id, cu_no, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pe_su_t_pk ON cb_lo_ap_pe_su_t USING btree (cu_no, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pe_t_pk ON cb_lo_ap_pe_t USING btree (cu_no, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pm_su_t_pk ON cb_lo_ap_pm_su_t USING btree (su_id, ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_pm_t_pk ON cb_lo_ap_pm_t USING btree (ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_su_t_pk ON cb_lo_ap_su_t USING btree (ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_t_pk ON cb_lo_ap_t USING btree (ap_tr);
CREATE UNIQUE INDEX cb_lo_ap_tel_che_t_pk ON cb_lo_ap_tel_che_t USING btree (ap_tr, tel_che_su_id, tel_che_cd, su_id);
CREATE UNIQUE INDEX cb_lo_ml_ac_no_t_pk ON cb_lo_ml_ac_no_t USING btree (su_id, ml_tr);
CREATE UNIQUE INDEX cb_lo_ml_fe_t_pk ON cb_lo_ml_fe_t USING btree (ml_tr, su_id);
CREATE UNIQUE INDEX cb_lo_ml_pm_su_t_pk ON cb_lo_ml_pm_su_t USING btree (ml_tr, su_id, pay_fre_qt);
CREATE UNIQUE INDEX cb_lo_ml_pm_t_pk ON cb_lo_ml_pm_t USING btree (ml_tr);
CREATE UNIQUE INDEX cb_lo_ml_setl_ac_no_t_pk ON cb_lo_ml_setl_ac_no_t USING btree (su_id, ml_setl_tr);
CREATE UNIQUE INDEX cb_lo_ml_setl_t_pk ON cb_lo_ml_setl_t USING btree (ml_setl_tr);
CREATE UNIQUE INDEX cb_lo_ml_t_pk ON cb_lo_ml_t USING btree (ml_tr);
CREATE UNIQUE INDEX cb_lr_op_su_l_pk ON cb_lr_op_su_l USING btree (lr_op_tr, su_id);
CREATE UNIQUE INDEX cb_lr_op_t_pk ON cb_lr_op_t USING btree (lr_op_tr);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cb TO zkbc;
