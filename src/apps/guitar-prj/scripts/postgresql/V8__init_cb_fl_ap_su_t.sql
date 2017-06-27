DROP TABLE IF EXISTS cb_fl_ap_su_t CASCADE;


CREATE TABLE cb_fl_ap_su_t (
fl_inst_id trade_no NOT NULL,
ve version NOT NULL,
cr_dt dt  NOT NULL,
la_up_us_id ref_id NOT NULL,
la_up_dt dt  NOT NULL,
ap_tr trade_no NOT NULL,
org_sy_cd cd   NOT NULL,
org_ap_tr_no no   NOT NULL,
modi_url caption   NOT NULL,
au_fl_ty_cd cd   NOT NULL,
adj_url caption  ,
del_url caption   NOT NULL,
rea_url caption   NOT NULL,
org_ap_dt dt   NOT NULL,
fl_tm_req_cd cd   NOT NULL,
co comment   NOT NULL,
cur_cd cd   NOT NULL,
tena_id ref_id
)
;
COMMENT ON TABLE cb_fl_ap_su_t IS '申请流程子表';
COMMENT ON COLUMN cb_fl_ap_su_t.fl_inst_id IS '流程实例Id';
COMMENT ON COLUMN cb_fl_ap_su_t.ve IS '版本';
COMMENT ON COLUMN cb_fl_ap_su_t.cr_dt IS '创建日期';
COMMENT ON COLUMN cb_fl_ap_su_t.la_up_us_id IS '最后更新用户';
COMMENT ON COLUMN cb_fl_ap_su_t.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cb_fl_ap_su_t.ap_tr IS '申请流水';
COMMENT ON COLUMN cb_fl_ap_su_t.org_sy_cd IS '原系统代码CC 核心系统CB 业务系统';
COMMENT ON COLUMN cb_fl_ap_su_t.org_ap_tr_no IS '原交易流水核心交易流水编号';
COMMENT ON COLUMN cb_fl_ap_su_t.modi_url IS '修改修改';
COMMENT ON COLUMN cb_fl_ap_su_t.au_fl_ty_cd IS '流程类型代码ZDHK 主动还款DKSQ 贷款申请XFTZ  息费调整DKHX 贷款核销参见字典分类 162';
COMMENT ON COLUMN cb_fl_ap_su_t.adj_url IS '调整URL';
COMMENT ON COLUMN cb_fl_ap_su_t.del_url IS '删除URL';
COMMENT ON COLUMN cb_fl_ap_su_t.rea_url IS '查看url';
COMMENT ON COLUMN cb_fl_ap_su_t.org_ap_dt IS '原发起日期其他系统发起日期';
COMMENT ON COLUMN cb_fl_ap_su_t.fl_tm_req_cd IS '流程时间要求代码DT 当天YZ 一周WX 无限';
COMMENT ON COLUMN cb_fl_ap_su_t.tena_id IS '租户Id';


CREATE UNIQUE INDEX cb_fl_ap_su_t_pk ON cb_fl_ap_su_t USING btree (fl_inst_id);

ALTER TABLE cb_fl_ap_su_t ADD PRIMARY KEY (fl_inst_id);
