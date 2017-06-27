DROP TABLE IF EXISTS cb_woo_b CASCADE;
DROP TABLE IF EXISTS cb_woo_ctr_b CASCADE;
DROP TABLE IF EXISTS cb_woo_l CASCADE;
--工单表
CREATE TABLE cb_woo_b (
    ap_tr ref_id NOT NULL,
    woo_cfg_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    st cd NOT NULL,
    ap_dt dt NOT NULL,
    ap_tm tm NOT NULL,
    cu_no no NOT NULL,
    cu_na cu_na NOT NULL,
    woo_st cd NOT NULL,
    woo_cfg_na cu_na NOT NULL,
    woo_fl_id ref_id NOT NULL,
    woo_fl_na cu_na NOT NULL,
    woo_nod_cd cd NOT NULL,
    assi_br_no no,
    assi_post_no no NOT NULL,
    assi_us_login_na cu_na,
    assi_dt dt,
    assi_tm tm,
    fi_fin_dt dt,
    fi_fin_tm tm,
    fin_dt dt,
    fin_tm tm,
    woo_us_login_na cu_na,
    woo_us_mobile_no no,
    fl_inst_id trade_no
);
COMMENT ON TABLE cb_woo_b IS '工单';
COMMENT ON COLUMN cb_woo_b.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_woo_b.woo_cfg_no IS '分单配置编号';
COMMENT ON COLUMN cb_woo_b.ve IS '版本';
COMMENT ON COLUMN cb_woo_b.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_woo_b.cr_tm IS '创建时间';
COMMENT ON COLUMN cb_woo_b.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_woo_b.st IS '状态 CS 初始   不能人工分派、调单 JH 激活  可以进行人工分派或者调单 YM 已满 已经分配完毕 SX 失效  失效不可再分 TZ 停止  停止分配WC 完成';
COMMENT ON COLUMN cb_woo_b.ap_dt IS '申请日期';
COMMENT ON COLUMN cb_woo_b.ap_tm IS '申请时间';
COMMENT ON COLUMN cb_woo_b.cu_no IS '客户编号';
COMMENT ON COLUMN cb_woo_b.cu_na IS '客户名称';
COMMENT ON COLUMN cb_woo_b.woo_st IS '工单状态  01 待分派 02 已分派 03 第一次处理完成04 流程完成';
COMMENT ON COLUMN cb_woo_b.woo_cfg_na IS '工单配置名称';
COMMENT ON COLUMN cb_woo_b.woo_fl_id IS '工单流程Id';
COMMENT ON COLUMN cb_woo_b.woo_fl_na IS '工单流程名称';
COMMENT ON COLUMN cb_woo_b.woo_nod_cd IS '工单节点代码XX 详细录入';
COMMENT ON COLUMN cb_woo_b.assi_br_no IS '分派机构编号如果指定了这个机构，那么本机构才可以分派。被分派的的人也只能是这个机构的。';
COMMENT ON COLUMN cb_woo_b.assi_post_no IS '分派岗位编号';
COMMENT ON COLUMN cb_woo_b.assi_us_login_na IS '最终分派用户登录名';
COMMENT ON COLUMN cb_woo_b.assi_dt IS '分派日期';
COMMENT ON COLUMN cb_woo_b.assi_tm IS '分派时间';
COMMENT ON COLUMN cb_woo_b.fi_fin_dt IS '第一次完成日期';
COMMENT ON COLUMN cb_woo_b.fi_fin_tm IS '第一次完成时间';
COMMENT ON COLUMN cb_woo_b.fin_dt IS '完成日期';
COMMENT ON COLUMN cb_woo_b.fin_tm IS '完成时间';
COMMENT ON COLUMN cb_woo_b.woo_us_login_na IS '工单登录名';
COMMENT ON COLUMN cb_woo_b.woo_us_mobile_no IS '工单用户手机号';
COMMENT ON COLUMN cb_woo_b.fl_inst_id IS '任务Id';


ALTER TABLE public.cb_woo_b OWNER TO xfjr;
ALTER TABLE ONLY cb_woo_b
    ADD CONSTRAINT pk_cb_woo_b PRIMARY KEY (woo_cfg_no, ap_tr);
CREATE UNIQUE INDEX cb_woo_b_pk ON cb_woo_b USING btree (woo_cfg_no, ap_tr);

--工单控制表
CREATE TABLE cb_woo_ctr_b (
    woo_cfg_no no NOT NULL,
    disp_or quantity NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    st cd NOT NULL,
    woo_ty_cd cd NOT NULL,
    woo_cfg_na cu_na NOT NULL,
    woo_fl_id ref_id NOT NULL,
    woo_fl_na cu_na NOT NULL,
    woo_nod_cd cd NOT NULL,
    woo_ba_cd cd NOT NULL,
    woo_ba_no no NOT NULL,
    woo_ba_na cu_na NOT NULL,
    woo_ctr_cd cd NOT NULL,
    woo_assi_cd cd NOT NULL,
    us_login_na cu_na NOT NULL,
    woo_tot_ql quantity NOT NULL,
    woo_ql quantity NOT NULL,
    fin_woo_ql quantity NOT NULL
);
ALTER TABLE public.cb_woo_ctr_b OWNER TO xfjr; 

COMMENT ON TABLE cb_woo_ctr_b IS '工单控制'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_cfg_no IS '分单配置编号'; 
COMMENT ON COLUMN cb_woo_ctr_b.disp_or IS '显示顺序 显示顺序，按照此顺序分单 来自于业务支撑的disp_or'; 
COMMENT ON COLUMN cb_woo_ctr_b.ve IS '版本'; 
COMMENT ON COLUMN cb_woo_ctr_b.cr_dt IS '创建日期'; 
COMMENT ON COLUMN cb_woo_ctr_b.la_up_dt IS '最后更新日期'; 
COMMENT ON COLUMN cb_woo_ctr_b.st IS '状态 CS 初始   不能人工分派、调单 JH 激活  可以进行人工分派或者调单 YM 已满 已经分配完毕 SX 失效  失效不可再分 TZ 停止  停止分配 WC 完成'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_ty_cd IS '分单类型代码 PJ 平均分单 RG 人工分单'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_cfg_na IS '工单配置名称'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_fl_id IS '工单流程Id'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_fl_na IS '工单流程名称'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_nod_cd IS '工单节点代码 XX 详细录入'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_ba_cd IS '工单分派基础代码 JG 机构 SD 商店 GW 岗位 参见字典分类158'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_ba_no IS '分单基础名称 根据分单基础可以填 机构代码、商店代码'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_ba_na IS '分单基础名称'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_ctr_cd IS '控制代码 BK 不控制 MR 每日 如果不控制，本记录不必删除， 如果为每日，那么已完成'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_assi_cd IS '工单分派代码 DT 当天分完。 FD 非当天分完'; 
COMMENT ON COLUMN cb_woo_ctr_b.us_login_na IS '用户登录名'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_tot_ql IS '应分总件数'; 
COMMENT ON COLUMN cb_woo_ctr_b.woo_ql IS '应分单件数需要限定分件数，但是人工分单不限定。';
COMMENT ON COLUMN cb_woo_ctr_b.fin_woo_ql IS '以完成工单。 仅仅控制类型为控制的时候，才需要在完成工单的时候更新这个字段。';
ALTER TABLE ONLY cb_woo_ctr_b
    ADD CONSTRAINT pk_cb_woo_ctr_b PRIMARY KEY (woo_cfg_no, disp_or);
CREATE UNIQUE INDEX cb_woo_ctr_b_pk ON cb_woo_ctr_b USING btree (woo_cfg_no, disp_or);
--工单日志表
CREATE TABLE cb_woo_l (
    id ref_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    woo_no no NOT NULL,
    woo_cfg_na cu_na NOT NULL,
    woo_op_cd cd NOT NULL,
    ap_tr ref_id NOT NULL,
    us_login_na cu_na NOT NULL,
    woo_login_na no NOT NULL
);


ALTER TABLE public.cb_woo_l OWNER TO xfjr; 
COMMENT ON TABLE cb_woo_l IS '工单'; 
COMMENT ON COLUMN cb_woo_l.id IS '工单操作流水'; 
COMMENT ON COLUMN cb_woo_l.ve IS '版本'; 
COMMENT ON COLUMN cb_woo_l.cr_dt IS '创建日期'; 
COMMENT ON COLUMN cb_woo_l.cr_tm IS '创建时间'; 
COMMENT ON COLUMN cb_woo_l.la_up_dt IS '最后更新日期'; 
COMMENT ON COLUMN cb_woo_l.woo_no IS '工单编号'; 
COMMENT ON COLUMN cb_woo_l.woo_cfg_na IS '工单配置名称'; 
COMMENT ON COLUMN cb_woo_l.woo_op_cd IS '工单操作代码 SC 生成工单 FP 分派 TD 调单 CL 处理工单 FG 返工 GN 功能完成'; 
COMMENT ON COLUMN cb_woo_l.ap_tr IS '申请流水'; 
COMMENT ON COLUMN cb_woo_l.us_login_na IS '操作用户登录名'; 
COMMENT ON COLUMN cb_woo_l.woo_login_na IS '工单登录名'; 
ALTER TABLE ONLY cb_woo_l
    ADD CONSTRAINT pk_cb_woo_l PRIMARY KEY (id); 
CREATE UNIQUE INDEX cb_woo_l_pk ON cb_woo_l USING btree (id);

