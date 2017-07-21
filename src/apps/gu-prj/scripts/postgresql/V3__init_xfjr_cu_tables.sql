DROP TABLE IF EXISTS cu_us_s;
DROP TABLE IF EXISTS cu_us_ro_s;
DROP TABLE IF EXISTS cu_us_post_s;
DROP TABLE IF EXISTS cu_us_hol_l;
DROP TABLE IF EXISTS cu_us_fav_res_s;
DROP TABLE IF EXISTS cu_us_ch_pwd_l;
DROP TABLE IF EXISTS cu_us_c;
DROP TABLE IF EXISTS cu_sy_c;
DROP TABLE IF EXISTS cu_ro_s;
DROP TABLE IF EXISTS cu_ro_ri_s;
DROP TABLE IF EXISTS cu_res_s;
DROP TABLE IF EXISTS cu_post_s;
DROP TABLE IF EXISTS cu_br_s;
CREATE TABLE cu_br_s (
    br_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    br_na corp_na NOT NULL,
    st cd NOT NULL,
    br_abbr_no no NOT NULL,
    con_na cu_na,
    con_tel_no no,
    post_no no,
    br_lev_qt quantity NOT NULL,
    prev_br_no no,
    prov_cd cd NOT NULL,
    city_cd cd NOT NULL
);

COMMENT ON TABLE cu_br_s IS '机构';
COMMENT ON COLUMN cu_br_s.br_no IS '机构编码';
COMMENT ON COLUMN cu_br_s.ve IS '版本';
COMMENT ON COLUMN cu_br_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_br_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_br_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_br_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_br_s.br_na IS '机构名称';
COMMENT ON COLUMN cu_br_s.st IS '状态CS 初始JH 激活参见 通用字典 状态分类28';
COMMENT ON COLUMN cu_br_s.br_abbr_no IS '金融机构简码';
COMMENT ON COLUMN cu_br_s.con_na IS '联系人';
COMMENT ON COLUMN cu_br_s.con_tel_no IS '联系电话';
COMMENT ON COLUMN cu_br_s.post_no IS '邮编';
COMMENT ON COLUMN cu_br_s.br_lev_qt IS '机构级别1 表示1级机构 一般是总部2 表示2级机构。';
COMMENT ON COLUMN cu_br_s.prev_br_no IS '上级机构编号';
COMMENT ON COLUMN cu_br_s.prov_cd IS '省份代码';
COMMENT ON COLUMN cu_br_s.city_cd IS '城市代码';
CREATE TABLE cu_post_s (
    post_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    post_na cu_na NOT NULL,
    st cd NOT NULL,
    sto_use_yn yn NOT NULL,
    au_post_yn yn NOT NULL,
    co_post_yn yn NOT NULL,
    co comment
);

COMMENT ON TABLE cu_post_s IS '岗位';
COMMENT ON COLUMN cu_post_s.post_no IS '岗位编号';
COMMENT ON COLUMN cu_post_s.ve IS '版本';
COMMENT ON COLUMN cu_post_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_post_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_post_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_post_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_post_s.post_na IS '岗位名称';
COMMENT ON COLUMN cu_post_s.st IS '状态CS 初始JH 激活参见 通用字典 状态分类28';
COMMENT ON COLUMN cu_post_s.sto_use_yn IS '是否商店使用';
COMMENT ON COLUMN cu_post_s.au_post_yn IS '是否审批岗位';
COMMENT ON COLUMN cu_post_s.co_post_yn IS '是否催收岗';
COMMENT ON COLUMN cu_post_s.co IS '备注';
CREATE TABLE cu_res_s (
    res_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    res_na cu_na NOT NULL,
    res_sy_cd cd NOT NULL,
    fa_res_no no,
    res_url_ca caption NOT NULL,
    res_icon_no no NOT NULL,
    disp_or day NOT NULL,
    page_mark_yn yn NOT NULL,
    co comment
);

COMMENT ON TABLE cu_res_s IS '系统资源';
COMMENT ON COLUMN cu_res_s.res_no IS '资源编号';
COMMENT ON COLUMN cu_res_s.ve IS '版本';
COMMENT ON COLUMN cu_res_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_res_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_res_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_res_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_res_s.res_na IS '资源名称';
COMMENT ON COLUMN cu_res_s.res_sy_cd IS '资源系统代码
参见cu_sy_c';
COMMENT ON COLUMN cu_res_s.fa_res_no IS '上级资源编号';
COMMENT ON COLUMN cu_res_s.res_url_ca IS '资源的url地址
不需要包含ip地址。
';
COMMENT ON COLUMN cu_res_s.res_icon_no IS '不能为空，否则是默认图标';
COMMENT ON COLUMN cu_res_s.disp_or IS '显示顺序排序';
COMMENT ON COLUMN cu_res_s.page_mark_yn IS '是否页面留痕';
CREATE TABLE cu_ro_ri_s (
    ro_no no NOT NULL,
    res_no no NOT NULL,
    res_act_cd cd NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL
);
COMMENT ON TABLE cu_ro_ri_s IS '角色权限';
COMMENT ON COLUMN cu_ro_ri_s.ro_no IS '岗位编号';
COMMENT ON COLUMN cu_ro_ri_s.res_no IS '资源编号';
COMMENT ON COLUMN cu_ro_ri_s.res_act_cd IS '资源动作码
ZJ 增加
XG 修改
SC 删除
CX 查询
FW 访问
参见字典分类代码：70';
COMMENT ON COLUMN cu_ro_ri_s.ve IS '版本';
COMMENT ON COLUMN cu_ro_ri_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_ro_ri_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_ro_ri_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_ro_ri_s.la_up_us_id IS '最新更新用户';
CREATE TABLE cu_ro_s (
    ro_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    st cd NOT NULL,
    ro_na cu_na NOT NULL,
    sto_use_yn yn NOT NULL,
    co comment
);
COMMENT ON TABLE cu_ro_s IS '岗位';
COMMENT ON COLUMN cu_ro_s.ro_no IS '角色编码';
COMMENT ON COLUMN cu_ro_s.ve IS '版本';
COMMENT ON COLUMN cu_ro_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_ro_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_ro_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_ro_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_ro_s.st IS '状态
CS 初始
JH 激活
参见 通用字典 状态分类28';
COMMENT ON COLUMN cu_ro_s.ro_na IS '角色名称';
COMMENT ON COLUMN cu_ro_s.sto_use_yn IS '商店专用';
COMMENT ON COLUMN cu_ro_s.co IS '备注';
CREATE TABLE cu_sy_c (
    sy_cd cd NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    sy_na cu_na NOT NULL,
    url caption NOT NULL,
    dom_na caption NOT NULL
);
COMMENT ON TABLE cu_sy_c IS '系统配置';
COMMENT ON COLUMN cu_sy_c.sy_cd IS '系统代码';
COMMENT ON COLUMN cu_sy_c.ve IS '版本';
COMMENT ON COLUMN cu_sy_c.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_sy_c.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_sy_c.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_sy_c.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_sy_c.sy_na IS '系统名称';
COMMENT ON COLUMN cu_sy_c.url IS 'url地址';
COMMENT ON COLUMN cu_sy_c.dom_na IS '域名';
CREATE TABLE cu_us_c (
    id id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    pwd_le quantity NOT NULL,
    pwd_alg_cd cd,
    login_err_qt quantity DEFAULT 3 NOT NULL,
    unlock_ty_cd cd NOT NULL,
    auto_unlock_minu_qt quantity
);
COMMENT ON TABLE cu_us_c IS '用户配置';
COMMENT ON COLUMN cu_us_c.ve IS '版本';
COMMENT ON COLUMN cu_us_c.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_c.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_c.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_c.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_c.pwd_le IS '密码长度';
COMMENT ON COLUMN cu_us_c.pwd_alg_cd IS '加密算法
BZ 标准
';
COMMENT ON COLUMN cu_us_c.login_err_qt IS '登录错误次数
密码错误3次 锁定';
COMMENT ON COLUMN cu_us_c.unlock_ty_cd IS '解锁类型代码
ZD  自动解锁
RG  人工解锁';
COMMENT ON COLUMN cu_us_c.auto_unlock_minu_qt IS '自动解锁分钟
如果为自动解锁需要设置';
CREATE TABLE cu_us_ch_pwd_l (
    id ref_id NOT NULL,
    us_id id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    pwd caption NOT NULL
);
COMMENT ON TABLE cu_us_ch_pwd_l IS '用户登录系统信息';
COMMENT ON COLUMN cu_us_ch_pwd_l.us_id IS '用户标识';
COMMENT ON COLUMN cu_us_ch_pwd_l.ve IS '版本';
COMMENT ON COLUMN cu_us_ch_pwd_l.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_ch_pwd_l.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_ch_pwd_l.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_ch_pwd_l.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_ch_pwd_l.pwd IS '密码';
CREATE TABLE cu_us_fav_res_s (
    us_id id NOT NULL,
    res_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL
);
COMMENT ON TABLE cu_us_fav_res_s IS '用户菜单收藏';
COMMENT ON COLUMN cu_us_fav_res_s.us_id IS '用户标识';
COMMENT ON COLUMN cu_us_fav_res_s.res_no IS '资源编号';
COMMENT ON COLUMN cu_us_fav_res_s.ve IS '版本';
COMMENT ON COLUMN cu_us_fav_res_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_fav_res_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_fav_res_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_fav_res_s.la_up_us_id IS '最新更新用户';
CREATE TABLE cu_us_hol_l (
    tr trade_no NOT NULL,
    us_id id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    ef_dt dt NOT NULL,
    hol_be_dt dt NOT NULL,
    hol_en_dt dt NOT NULL,
    hol_cd cd NOT NULL
);
COMMENT ON TABLE cu_us_hol_l IS '用户休假日志';
COMMENT ON COLUMN cu_us_hol_l.tr IS '申请请假流水';
COMMENT ON COLUMN cu_us_hol_l.us_id IS '用户标识';
COMMENT ON COLUMN cu_us_hol_l.ve IS '版本';
COMMENT ON COLUMN cu_us_hol_l.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_hol_l.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_hol_l.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_hol_l.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_hol_l.ef_dt IS '生效日期
休假或者上班生效日期';
COMMENT ON COLUMN cu_us_hol_l.hol_be_dt IS '休假开始日期';
COMMENT ON COLUMN cu_us_hol_l.hol_en_dt IS '休假结束日期';
COMMENT ON COLUMN cu_us_hol_l.hol_cd IS '休假代码
XJ 休假  
SB 上班';
CREATE TABLE cu_us_post_s (
    us_id id NOT NULL,
    post_no no,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    login_na cu_na NOT NULL
);
COMMENT ON TABLE cu_us_post_s IS '用户表';
COMMENT ON COLUMN cu_us_post_s.us_id IS '用户标识';
COMMENT ON COLUMN cu_us_post_s.post_no IS '岗位编号';
COMMENT ON COLUMN cu_us_post_s.ve IS '版本';
COMMENT ON COLUMN cu_us_post_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_post_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_post_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_post_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_post_s.login_na IS '登录名称';
CREATE TABLE cu_us_ro_s (
    us_id id NOT NULL,
    ro_no no NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    login_na cu_na NOT NULL
);
COMMENT ON TABLE cu_us_ro_s IS '用户角色';
COMMENT ON COLUMN cu_us_ro_s.us_id IS '用户标识';
COMMENT ON COLUMN cu_us_ro_s.ro_no IS '岗位编号';
COMMENT ON COLUMN cu_us_ro_s.ve IS '版本';
COMMENT ON COLUMN cu_us_ro_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_ro_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_ro_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_ro_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_ro_s.login_na IS '登录名称';
CREATE TABLE cu_us_s (
    id id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    st cd NOT NULL,
    login_na cu_na NOT NULL,
    us_na cu_na NOT NULL,
    pa_ty_cd cd NOT NULL,
    pa_no no NOT NULL,
    br_no no NOT NULL,
    mo_no no,
    mail_no no,
    exe_yn yn NOT NULL,
    cu_ma_yn yn NOT NULL,
    fa_exe_us_id ref_id,
    hol_yn yn NOT NULL,
    hol_be_dt dt,
    hol_en_dt dt,
    co comment
);
COMMENT ON TABLE cu_us_s IS '用户表';
COMMENT ON COLUMN cu_us_s.ve IS '版本';
COMMENT ON COLUMN cu_us_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_s.st IS '状态
CS 初始
JH 激活
参见 通用字典 状态分类28';
COMMENT ON COLUMN cu_us_s.login_na IS '登录名称';
COMMENT ON COLUMN cu_us_s.us_na IS '用户名称';
COMMENT ON COLUMN cu_us_s.pa_ty_cd IS '证件类型
参见字典类型 17';
COMMENT ON COLUMN cu_us_s.pa_no IS '证件号码。';
COMMENT ON COLUMN cu_us_s.br_no IS '机构编号';
COMMENT ON COLUMN cu_us_s.mail_no IS '邮箱号码';
COMMENT ON COLUMN cu_us_s.exe_yn IS '是否主观';
COMMENT ON COLUMN cu_us_s.cu_ma_yn IS '是否客户经理';
COMMENT ON COLUMN cu_us_s.fa_exe_us_id IS '上级主管';
COMMENT ON COLUMN cu_us_s.hol_yn IS '是否休假';
COMMENT ON COLUMN cu_us_s.hol_be_dt IS '休假开始日期';
COMMENT ON COLUMN cu_us_s.hol_en_dt IS '休假结束日期';
ALTER TABLE ONLY cu_br_s
    ADD CONSTRAINT pk_cu_br_s PRIMARY KEY (br_no);
ALTER TABLE ONLY cu_post_s
    ADD CONSTRAINT pk_cu_post_s PRIMARY KEY (post_no);
ALTER TABLE ONLY cu_res_s
    ADD CONSTRAINT pk_cu_res_s PRIMARY KEY (res_no);
ALTER TABLE ONLY cu_ro_ri_s
    ADD CONSTRAINT pk_cu_ro_ri_s PRIMARY KEY (ro_no, res_no, res_act_cd);
ALTER TABLE ONLY cu_ro_s
    ADD CONSTRAINT pk_cu_ro_s PRIMARY KEY (ro_no);
ALTER TABLE ONLY cu_sy_c
    ADD CONSTRAINT pk_cu_sy_c PRIMARY KEY (sy_cd);
ALTER TABLE ONLY cu_us_c
    ADD CONSTRAINT pk_cu_us_c PRIMARY KEY (id);
ALTER TABLE ONLY cu_us_ch_pwd_l
    ADD CONSTRAINT pk_cu_us_ch_pwd_l PRIMARY KEY (id);
ALTER TABLE ONLY cu_us_fav_res_s
    ADD CONSTRAINT pk_cu_us_fav_res_s PRIMARY KEY (res_no, us_id);
ALTER TABLE ONLY cu_us_hol_l
    ADD CONSTRAINT pk_cu_us_hol_l PRIMARY KEY (tr);
ALTER TABLE ONLY cu_us_post_s
    ADD CONSTRAINT pk_cu_us_post_s PRIMARY KEY (us_id);
ALTER TABLE ONLY cu_us_ro_s
    ADD CONSTRAINT pk_cu_us_ro_s PRIMARY KEY (us_id, ro_no);
ALTER TABLE ONLY cu_us_s
    ADD CONSTRAINT pk_cu_us_s PRIMARY KEY (id);
CREATE UNIQUE INDEX cu_br_s_pk ON cu_br_s USING btree (br_no);
CREATE UNIQUE INDEX cu_post_s_pk ON cu_post_s USING btree (post_no);
CREATE UNIQUE INDEX cu_res_s_pk ON cu_res_s USING btree (res_no);
CREATE UNIQUE INDEX cu_ro_ri_s_pk ON cu_ro_ri_s USING btree (ro_no, res_no, res_act_cd);
CREATE UNIQUE INDEX cu_ro_s_pk ON cu_ro_s USING btree (ro_no);
CREATE UNIQUE INDEX cu_sy_c_pk ON cu_sy_c USING btree (sy_cd);
CREATE UNIQUE INDEX cu_us_c_pk ON cu_us_c USING btree (id);
CREATE UNIQUE INDEX cu_us_ch_pwd_l_pk ON cu_us_ch_pwd_l USING btree (id);
CREATE UNIQUE INDEX cu_us_fav_res_s_pk ON cu_us_fav_res_s USING btree (res_no, us_id);
CREATE UNIQUE INDEX cu_us_hol_l_pk ON cu_us_hol_l USING btree (tr);
CREATE UNIQUE INDEX cu_us_post_s_pk ON cu_us_post_s USING btree (us_id);
CREATE UNIQUE INDEX cu_us_ro_s_pk ON cu_us_ro_s USING btree (us_id, ro_no);
CREATE UNIQUE INDEX cu_us_s_pk ON cu_us_s USING btree (id);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cu TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cu TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cu TO zkbc;

