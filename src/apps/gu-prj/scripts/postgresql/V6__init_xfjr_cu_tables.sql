DROP TABLE IF EXISTS cs_di_c CASCADE;
CREATE TABLE cs_di_c (
    di_ki_id id NOT NULL,
    di_cd cd NOT NULL,
    ve version NOT NULL,
    di_ca caption NOT NULL,
    st cd NOT NULL,
    su_di_ki_id cd,
    su_di_cd cd,
    disp_or quantity NOT NULL,
    ci_cd cd,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL
);
COMMENT ON TABLE cs_di_c IS '字典名称表';
COMMENT ON COLUMN cs_di_c.di_ki_id IS '字典种类';
COMMENT ON COLUMN cs_di_c.di_cd IS '字典代码';
COMMENT ON COLUMN cs_di_c.ve IS '版本';
COMMENT ON COLUMN cs_di_c.di_ca IS '字典中文';
COMMENT ON COLUMN cs_di_c.st IS '状态
CS 初始
JH 激活';
COMMENT ON COLUMN cs_di_c.su_di_ki_id IS '子字典种类';
COMMENT ON COLUMN cs_di_c.su_di_cd IS '子字典代码';
COMMENT ON COLUMN cs_di_c.disp_or IS '显示顺序
在字典项目中的排序。';
COMMENT ON COLUMN cs_di_c.ci_cd IS '征信对应码
用于和人行征信对应';
COMMENT ON COLUMN cs_di_c.cr_dt IS '创建日期';
COMMENT ON COLUMN cs_di_c.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cs_di_c.la_up_us_id IS '最新更新用户';
DROP TABLE IF EXISTS cu_br_s CASCADE;
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
    city_cd cd NOT NULL,
    co character varying(255)
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
DROP TABLE IF EXISTS cu_icon_s CASCADE;
CREATE TABLE cu_icon_s (
    icon_no character varying(255) NOT NULL,
    co character varying(255),
    cr_dt character varying(255),
    cr_tm character varying(255),
    icon_ad_ca character varying(255),
    icon_na character varying(255),
    la_up_dt character varying(255),
    la_up_us_id bigint,
    ve integer
);
DROP TABLE IF EXISTS cu_post_s CASCADE;
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
DROP TABLE IF EXISTS cu_res_act_s CASCADE;
CREATE TABLE cu_res_act_s (
    res_no no NOT NULL,
    res_act_cd cd NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    url comment NOT NULL
);
COMMENT ON TABLE cu_res_act_s IS '资源操作配置';
COMMENT ON COLUMN cu_res_act_s.res_no IS '资源编号';
COMMENT ON COLUMN cu_res_act_s.res_act_cd IS '资源动作码
ZJ 增加
XG 修改
SC 删除
CX 查询
FW 访问
参见字典分类代码：70';
COMMENT ON COLUMN cu_res_act_s.ve IS '版本';
COMMENT ON COLUMN cu_res_act_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_res_act_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_res_act_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_res_act_s.url IS 'url地址';
DROP TABLE IF EXISTS cu_res_s CASCADE;
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
DROP TABLE IF EXISTS cu_ro_ri_s CASCADE;
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
DROP TABLE IF EXISTS cu_ro_s CASCADE;
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
DROP TABLE IF EXISTS cu_sy_c CASCADE;
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
DROP TABLE IF EXISTS cu_us_c CASCADE;
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
DROP TABLE IF EXISTS cu_us_ch_pwd_l CASCADE;
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
DROP TABLE IF EXISTS cu_us_fav_res_s CASCADE;
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
DROP TABLE IF EXISTS cu_us_hol_l CASCADE;
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
    hol_cd cd NOT NULL,
    co character varying(255),
    hol_cau_ca character varying(255),
    login_na character varying(255),
    login_tr_id character varying(255),
    wo_dt character varying(255),
    wo_tm character varying(255)
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
DROP TABLE IF EXISTS cu_us_login_l CASCADE;
CREATE TABLE cu_us_login_l (
    id ref_id NOT NULL,
    login_tr_id id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    login_out_dt dt,
    login_out_tm tm,
    login_na cu_na NOT NULL
);
COMMENT ON TABLE cu_us_login_l IS '用户登录日志';
COMMENT ON COLUMN cu_us_login_l.id IS '登录Id';
COMMENT ON COLUMN cu_us_login_l.login_tr_id IS '登录流水Id';
COMMENT ON COLUMN cu_us_login_l.ve IS '版本';
COMMENT ON COLUMN cu_us_login_l.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_login_l.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_login_l.login_out_dt IS '登录退出日期';
COMMENT ON COLUMN cu_us_login_l.login_out_tm IS '登录退出时间';
COMMENT ON COLUMN cu_us_login_l.login_na IS '登录名';
DROP TABLE IF EXISTS cu_us_login_s CASCADE;
CREATE TABLE cu_us_login_s (
    us_id ref_id NOT NULL,
    ve version NOT NULL,
    cr_dt dt NOT NULL,
    cr_tm tm NOT NULL,
    la_up_dt dt NOT NULL,
    la_up_us_id ref_id NOT NULL,
    st cd NOT NULL,
    pwd bigmessage NOT NULL,
    pwd_ov_yn cu_na NOT NULL,
    pwd_salt character varying(50),
    us_lock_yn yn DEFAULT 'N'::bpchar NOT NULL,
    prev_ch_pwd_dt dt NOT NULL,
    next_ch_pwd_dt dt DEFAULT '9999-01-01'::character varying NOT NULL,
    login_err_qt quantity DEFAULT 0 NOT NULL,
    lock_dt dt DEFAULT ''::character varying,
    lock_tm tm,
    auto_unlock_dt dt,
    auto_unlock_tm tm,
    login_na cu_na NOT NULL
);
COMMENT ON TABLE cu_us_login_s IS '用户登录系统信息';
COMMENT ON COLUMN cu_us_login_s.us_id IS '用户Id';
COMMENT ON COLUMN cu_us_login_s.ve IS '版本';
COMMENT ON COLUMN cu_us_login_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_login_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_login_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_login_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_login_s.st IS '状态
CS 初始
JH 激活
参见 通用字典 状态分类28';
COMMENT ON COLUMN cu_us_login_s.pwd IS '密码';
COMMENT ON COLUMN cu_us_login_s.pwd_ov_yn IS '是否密码过期';
COMMENT ON COLUMN cu_us_login_s.pwd_salt IS '密码盐';
COMMENT ON COLUMN cu_us_login_s.us_lock_yn IS '用户是否锁定';
COMMENT ON COLUMN cu_us_login_s.prev_ch_pwd_dt IS '上次更改密码日期';
COMMENT ON COLUMN cu_us_login_s.next_ch_pwd_dt IS '下次更改密码日期';
COMMENT ON COLUMN cu_us_login_s.login_err_qt IS '登录错误次数';
COMMENT ON COLUMN cu_us_login_s.lock_dt IS '上次锁定日期';
COMMENT ON COLUMN cu_us_login_s.lock_tm IS '锁定时间';
COMMENT ON COLUMN cu_us_login_s.auto_unlock_dt IS '自动解锁日期
';
COMMENT ON COLUMN cu_us_login_s.auto_unlock_tm IS '自动解锁时间';
COMMENT ON COLUMN cu_us_login_s.login_na IS '登录名';
DROP TABLE IF EXISTS cu_us_post_s CASCADE;
CREATE TABLE cu_us_post_s (
    us_id id NOT NULL,
    post_no no NOT NULL,
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
DROP TABLE IF EXISTS cu_us_ro_s CASCADE;
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
COMMENT ON COLUMN cu_us_ro_s.ro_no IS '角色编号';
COMMENT ON COLUMN cu_us_ro_s.ve IS '版本';
COMMENT ON COLUMN cu_us_ro_s.cr_dt IS '创建日期';
COMMENT ON COLUMN cu_us_ro_s.cr_tm IS '创建时间';
COMMENT ON COLUMN cu_us_ro_s.la_up_dt IS '最后更新日期';
COMMENT ON COLUMN cu_us_ro_s.la_up_us_id IS '最新更新用户';
COMMENT ON COLUMN cu_us_ro_s.login_na IS '登录名称';
DROP TABLE IF EXISTS cu_us_s CASCADE;
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
    co comment,
    sex_cd character varying(255)
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
DROP TABLE IF EXISTS oauth_clientinfo CASCADE;
CREATE TABLE oauth_clientinfo (
    id bigint NOT NULL,
    client_id character varying(255),
    client_secret character varying(255),
    client_uri character varying(255),
    default_scope character varying(255),
    description character varying(255),
    expires_in bigint,
    icon_uri character varying(255),
    issued_at bigint,
    name character varying(255),
    redirect_uri character varying(255),
    scope character varying(255)
);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (1, 'DH', 1, '贷后管理费', 'JH', NULL, NULL, 5, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (1, 'SX', 1, '授信管理费', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (1, 'TH', 1, '退货手续费', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (1, 'TQ', 1, '提前还款手续费', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (1, 'TX', 1, '贴息', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (2, 'DK', 1, '同贷款还款计划', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (2, 'FH', 1, '放款后收取', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (2, 'FK', 1, '出账前收取', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (2, 'FQ', 1, '分期收取', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (3, 'CS', 1, '厂商', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (3, 'JQ', 1, '借款人', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (3, 'JX', 1, '经销商', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (3, 'QT', 1, '其他', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (4, 'BL', 1, '按贷款比例', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (4, 'GD', 1, '固定费用', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (5, 'FD', 1, '浮动罚息', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (5, 'GD', 1, '固定罚息', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (6, 'HS001', 1, '通用类型', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (7, 'GT', 1, '个体经营户', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (7, 'HZ', 1, '合作方', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (7, 'YB', 1, '一般自然人', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (8, 'LS', 1, '临时客户', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (8, 'PT', 1, '普通客户', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (8, 'YG', 1, '员工', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (8, 'ZG', 1, 'VIP客户', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (9, 'CS', 1, '初始', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (9, 'JH', 1, '激活', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (9, 'QZ', 1, '欺诈', 'JH', NULL, NULL, 5, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (9, 'SA', 1, '涉案', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (9, 'SL', 1, '失联', 'JH', NULL, NULL, 6, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (9, 'SW', 1, '死亡', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (10, 'N', 1, '男', 'JH', NULL, NULL, 1, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (10, 'V', 1, '女', 'JH', NULL, NULL, 2, '2', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (11, 'LT', 1, '离婚', 'JH', NULL, NULL, 4, '40', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (11, 'QT', 1, '其他', 'JH', NULL, NULL, 6, '90', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (11, 'SO', 1, '丧偶', 'JH', NULL, NULL, 5, '30', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (11, 'WH', 1, '未婚', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (11, 'YW', 1, '已婚未育', 'JH', NULL, NULL, 2, '20', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (11, 'YY', 1, '已婚已育', 'JH', NULL, NULL, 3, '20', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'DY', 1, '自有房屋已抵押', 'JH', NULL, NULL, 9, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'DZ', 1, '多套自有', 'JH', NULL, NULL, 6, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'GT', 1, '共同拥有或与父母同住', 'JH', NULL, NULL, 8, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'JC', 1, '军产房', 'JH', NULL, NULL, 5, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'XC', 1, '小产权', 'JH', NULL, NULL, 11, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'ZD', 1, '自购有贷款', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'ZF', 1, '租房', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'ZG', 1, '租借或公司所有', 'JH', NULL, NULL, 10, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'ZJ', 1, '宅基地房', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'ZW', 1, '自购无贷款', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (12, 'ZY', 1, '自有', 'JH', NULL, NULL, 7, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (13, 'BK', 1, '本科', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (13, 'CZ', 1, '初中及以下', 'JH', NULL, NULL, 5, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (13, 'DZ', 1, '大专', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (13, 'GZ', 1, '高中', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (13, 'SS', 1, '硕士及以上', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (14, 'GY', 1, '国有企业', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (14, 'MY', 1, '民营企业', 'JH', NULL, NULL, 6, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (14, 'SY', 1, '事业单位', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (14, 'WG', 1, '无固定单位', 'JH', NULL, NULL, 5, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (14, 'WX', 1, '微型企业', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (14, 'ZF', 1, '政府机关', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (15, 'GZ', 1, '工资收入', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (15, 'JY', 1, '经营收入', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (15, 'QT', 1, '其他', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (15, 'TZ', 1, '投资收入', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'BB', 1, '父亲', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'FQ', 1, '夫妻', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'JM', 1, '姐妹', 'JH', NULL, NULL, 5, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'MM', 1, '母亲', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'PY', 1, '朋友', 'JH', NULL, NULL, 9, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'QT', 1, '其他', 'JH', NULL, NULL, 11, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'TS', 1, '同事', 'JH', NULL, NULL, 7, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'TX', 1, '同学', 'JH', NULL, NULL, 8, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'XD', 1, '兄弟', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'ZJ', 1, '自己', 'JH', NULL, NULL, 10, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (16, 'ZN', 1, '子女', 'JH', NULL, NULL, 6, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (17, 'JR', 1, '军人证', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (17, 'SF', 1, '身份证', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (18, 'FQ', 1, '分期放款', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (18, 'LF', 1, '立即放款', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (19, 'BQ', 1, '不全', 'JH', NULL, NULL, 4, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (19, 'CS', 1, '初始', 'JH', NULL, NULL, 1, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (19, 'JH', 1, '激活', 'JH', NULL, NULL, 2, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (19, 'ZF', 1, '作废', 'JH', NULL, NULL, 3, NULL, '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (20, 'CJ', 1, '一般领导', 'JH', NULL, NULL, 4, '3', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (20, 'GJ', 1, '高级领导', 'JH', NULL, NULL, 2, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (20, 'WU', 1, '一般员工', 'JH', NULL, NULL, 1, '0', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (20, 'WZ', 1, '未知', 'JH', NULL, NULL, 5, '9', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (20, 'ZJ', 1, '中层领导', 'JH', NULL, NULL, 3, '2', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (21, 'DY', 1, '待业人员', 'JH', NULL, NULL, 5, 'Y', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (21, 'FW', 1, '服务人员', 'JH', NULL, NULL, 3, '4', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (21, 'JS', 1, '技术', 'JH', NULL, NULL, 1, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (21, 'QT', 1, '不变分类的其他', 'JH', NULL, NULL, 6, 'Y', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (21, 'SC', 1, '生产运输工', 'JH', NULL, NULL, 4, '5', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (21, 'XS', 1, '销售人员', 'JH', NULL, NULL, 2, '4', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (22, 'JY', 1, '教育', 'JH', NULL, NULL, 2, 'P', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (22, 'NL', 1, '农、林、牧、渔业', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (22, 'PF', 1, '批发零售', 'JH', NULL, NULL, 5, 'H', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (22, 'XX', 1, '信息技术', 'JH', NULL, NULL, 4, 'G', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (22, 'ZS', 1, '住宿和餐饮业', 'JH', NULL, NULL, 3, 'I', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (23, 'JD', 1, '绝对时间', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (23, 'XD', 1, '相对时间', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (24, 'LJ', 1, '立即发送', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (24, 'PL', 1, '批量发送', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (25, '<', 1, '小于', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (25, '<=', 1, '小于等于', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (25, '<>', 1, '不等于', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (25, '>', 1, '大于', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (25, '>=', 1, '大于等于', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (26, '>', 1, '大于', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (27, 'QT', 1, '其他', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (27, 'TQ', 1, '提前提醒', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (27, 'YQ', 1, '逾期提醒', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (28, 'FJ', 1, '否决', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (28, 'SX', 1, '失效', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (28, 'ZT', 1, '暂停', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (28, 'ZZ', 1, '终止', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (29, 'JQ', 1, '借款人', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (29, 'XS', 1, '销售员', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (29, 'YG', 1, '员工', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (30, 'CL', 1, '材料欺诈', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (30, 'QT', 1, '其他', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (30, 'ZJ', 1, '证件欺诈', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (32, 'CS', 1, '初始', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (32, 'JH', 1, '激活', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (32, 'TC', 1, '退出', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (33, 'YY', 1, '营业执照', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (33, 'ZZ', 1, '组织机构代码', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (34, 'CS', 1, '厂商', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (34, 'HZ', 1, '合作方', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (34, 'JX', 1, '经销商', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (35, 'CW', 1, '错误', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (35, 'JG', 1, '警告', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (35, 'XX', 1, '消息', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (35, 'YC', 1, '严重错误', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (35, 'YJ', 1, '严重警告', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB01', 1, '自动扣款入账', 'JH', NULL, NULL, 17, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB02', 1, '贷款状态变更', 'JH', NULL, NULL, 18, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB03', 1, '组合减值处理', 'JH', NULL, NULL, 19, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB04', 1, '摊销', 'JH', NULL, NULL, 20, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB05', 1, '滚积数', 'JH', NULL, NULL, 21, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB06', 1, '批量利息计提', 'JH', NULL, NULL, 22, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LB07', 1, '批量逾期计提', 'JH', NULL, NULL, 23, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO01', 1, '贷款交易', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO02', 1, '放款交易', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO03', 1, '退货', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO04', 1, '贷款停息', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO05', 1, '利息减免', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO06', 1, '溢缴款存取', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO07', 1, '交易冲正', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO08', 1, '还款交易', 'JH', NULL, NULL, 8, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO09', 1, '贷款展期', 'JH', NULL, NULL, 9, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO10', 1, '收取费用', 'JH', NULL, NULL, 10, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO11', 1, '贷款平移', 'JH', NULL, NULL, 11, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO12', 1, '手续费减免', 'JH', NULL, NULL, 12, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO13', 1, '贷款信息变更', 'JH', NULL, NULL, 13, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO14', 1, '还款方式调整', 'JH', NULL, NULL, 14, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO15', 1, '贷款核销', 'JH', NULL, NULL, 15, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (36, 'LO16', 1, '归还保证金', 'JH', NULL, NULL, 16, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (28, 'CS', 1, '初始', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'AQFX', 1, '按期付息', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'BTJG', 1, '本息不同间隔', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'DEBJ', 1, '等额本金', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'DEBX', 1, '等额本息', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'LSBQ', 1, '利随本清', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'QQDK', 1, '气球贷', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'TXHK', 1, '弹性还款', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (37, 'ZYHK', 1, '自由还款', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (38, 'DK', 1, '贷款', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (38, 'SP', 1, '商品价格', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (39, 'GDTS', 1, '固定天数', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (39, 'SJTS', 1, '实际天数', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (40, 'FK', 1, '放款本金', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (40, 'SY', 1, '剩余本金', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (41, 'DEBJ', 1, '等额本金', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (41, 'DEBX', 1, '等额本息', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (42, 'LB', 1, '利息和本金', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (42, 'LX', 1, '利息', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (43, '1', 1, '通用流程', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (43, '2', 1, '教育贷流程', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (44, 'NY', 1, '耐用消费贷款', 'JH', '46', NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (44, 'TX', 1, '通用消费贷款', 'JH', '45', NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (44, 'XJ', 1, '现金贷', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (45, '03', 1, '教育分期', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (45, '04', 1, '装修分期', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (46, '01', 1, '手机分期', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (46, '02', 1, '家具分期', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (47, 'CJ', 1, '次级', 'JH', NULL, NULL, 3, '3', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (47, 'GZ', 1, '关注', 'JH', NULL, NULL, 2, '2', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (47, 'KY', 1, '可疑', 'JH', NULL, NULL, 4, '4', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (47, 'SS', 1, '损失', 'JH', NULL, NULL, 5, '5', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (47, 'WZ', 1, '未知', 'JH', NULL, NULL, 6, '9', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (47, 'ZC', 1, '正常', 'JH', NULL, NULL, 1, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (48, 'YT', 1, '逾期天数', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (49, 'GS', 1, '共同申请人', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (49, 'SQ', 1, '申请人', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (49, 'WT', 1, '委托人', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (50, 'FB', 1, '浮动比例', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (50, 'FJ', 1, '浮动金额', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (50, 'QM', 1, '全免', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (51, 'QT', 1, '其他', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (51, 'SP', 1, '审批材料', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (51, 'SQ', 1, '申请材料', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'FK', 1, '放款和贷后', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'GZ', 1, '工作材料', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'JZ', 1, '居住材料', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'QT', 1, '其他', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'SF', 1, '身份材料', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'SQ', 1, '申请材料', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (52, 'SR', 1, '收入材料', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (53, 'GS', 1, '共同申请人', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (53, 'ZS', 1, '主申请人', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (54, 'BS', 1, '白色预警', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (54, 'CS', 1, '橙色预警', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (54, 'HS', 1, '黄色预警', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (54, 'LS', 1, '蓝色预警', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (54, 'OS', 1, '红色预警', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (55, 'DX', 1, '短信', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (55, 'PT', 1, '平台预警短信', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (55, 'QQ', 1, 'QQ', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (55, 'YJ', 1, '电子邮件', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (56, 'DW', 1, '单位信息核实', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (56, 'LX', 1, '联系人核实', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (56, 'QT', 1, '其它', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (56, 'SF', 1, '本人身份核实', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (57, 'FD', 1, '浮动利率', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (57, 'GD', 1, '固定利率', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (58, '1Y', 1, '1月1日调整', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (58, 'GD', 1, '固定日调整', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (58, 'HK', 1, '还款周期', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (58, 'LJ', 1, '立即调整', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (58, 'MY', 1, '满一年调整', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (59, 'MY', 1, '美元', 'JH', NULL, NULL, 2, 'USD', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (59, 'RMB', 1, '人民币', 'JH', NULL, NULL, 1, 'CNY', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'ANZ', 1, '安卓APP进单', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'DX', 1, '电销', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'HB', 1, '伙伴数据平台', 'JH', NULL, NULL, 9, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'HN', 1, '行内进单', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'IOS', 1, 'IOS APP进单', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'MD', 1, '门店进单', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'PAD', 1, '客户经理PAD', 'JH', NULL, NULL, 8, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'PC', 1, 'PC进单', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (60, 'WX', 1, '微信', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (61, 'AJ', 1, '按揭房', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (61, 'GJ', 1, '公积金', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (61, 'QT', 1, '其他', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (61, 'QY', 1, '企业主', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (61, 'SB', 1, '社保卡', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (61, 'XY', 1, '信用卡', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (62, 'FK', 1, '放款日', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (62, 'QT', 1, '固定日', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (63, 'FC', 1, '付出', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (63, 'SQ', 1, '收取', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (64, 'WFK', 1, '未放款', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (64, 'YCZ', 1, '已冲正', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (64, 'YFK', 1, '已放款', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (65, 'FK', 1, '放款账号', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (65, 'HK', 1, '还款账号', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (65, 'ST', 1, '受托支付账号', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (66, 'ST', 1, '受托支付', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (66, 'Zj', 1, '直接支付', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F02', 1, '贷后管理费-分期手续费', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F03', 1, '资信服务费', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F04', 1, '资信管理费-放款时差额扣收的手续费', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F05', 1, '提款费-放款时扣收的一次性费用', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F06', 1, '逾期管理费-违约金', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F07', 1, '催收工本费-滞纳金', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F08', 1, '保证金', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (67, 'F09', 1, '提前还款手续费', 'JH', NULL, NULL, 8, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'FW', 1, '服务', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'GL', 1, '管理', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'JS', 1, '技术', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'QT', 1, '其他', 'JH', NULL, NULL, 7, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'SC', 1, '生产运输', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'XS', 1, '销售', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (68, 'ZG', 1, '自雇', 'JH', NULL, NULL, 6, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (69, 'FR', 1, '法人', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (69, 'LX', 1, '联系人', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (69, 'YW', 1, '业务联系人', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (69, 'ZG', 1, '业务主管', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (70, 'CX', 1, '查询', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (70, 'FW', 1, '菜单访问', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (70, 'SC', 1, '删除', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (70, 'XG', 1, '修改', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (70, 'XZ', 1, '新增', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (71, 'HT', 1, '合同', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (71, 'SQ', 1, '贷款申请', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (72, 'DK', 1, '贷款申请类', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (72, 'QT', 1, '其他类', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (73, 'CR', 1, '成人', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (73, 'DK', 1, '统招', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (73, 'LX', 1, '留学', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (73, 'YD', 1, '夜大', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (73, 'ZK', 1, '自考', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (74, 'BY', 1, '毕业', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (74, 'DK', 1, '在读', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (75, 'R0', 1, '数据检查', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (75, 'R1', 1, '身份和黑名单检查', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (75, 'R2', 1, '征信准入', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (75, 'R3', 1, '客户评级、核额、风险预警', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (76, 'BS', 1, '博士', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (76, 'MB', 1, '名誉博士', 'JH', NULL, NULL, 4, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (76, 'QT', 1, '其他', 'JH', NULL, NULL, 5, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (76, 'SS', 1, '硕士', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (76, 'XS', 1, '学士', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (77, 'FY', 1, '复印件', 'JH', NULL, NULL, 2, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (77, 'YF', 1, '原件+复印件', 'JH', NULL, NULL, 3, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (77, 'YJ', 1, '原件', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (78, 'CJ', 1, '初级', 'JH', NULL, NULL, 2, '3', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (78, 'GJ', 1, '高级', 'JH', NULL, NULL, 4, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (78, 'WU', 1, '无', 'JH', NULL, NULL, 1, '0', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (78, 'WZ', 1, '未知', 'JH', NULL, NULL, 5, '9', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (78, 'ZJ', 1, '中级', 'JH', NULL, NULL, 3, '2', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (79, 'DZ', 1, '呆账(待核销)', 'JH', NULL, NULL, 1, '4', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (79, 'JQ', 1, '结清', 'JH', NULL, NULL, 1, '3', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (79, 'YQ', 1, '逾期', 'JH', NULL, NULL, 1, '2', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (79, 'ZC', 1, '正常', 'JH', NULL, NULL, 1, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (79, 'ZZ', 1, '转出', 'JH', NULL, NULL, 1, '5', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'BZ', 1, '自然人保证', 'JH', NULL, NULL, 1, '3', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'DY', 1, '抵押', 'JH', NULL, NULL, 1, '2', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'LB', 1, '农户联保', 'JH', NULL, NULL, 1, '7', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'QT', 1, '其他', 'JH', NULL, NULL, 1, '9', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'XY', 1, '信用/免担保', 'JH', NULL, NULL, 1, '4', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'ZB', 1, '组合(不含自然人保证)', 'JH', NULL, NULL, 1, '6', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'ZH', 1, '组合(含自然人保证)', 'JH', NULL, NULL, 1, '5', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (80, 'ZY', 1, '质押', 'JH', NULL, NULL, 1, '1', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'BD', 1, '不定期', 'JH', NULL, NULL, 1, '08', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'BN', 1, '半年', 'JH', NULL, NULL, 1, '05', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'J', 1, '季', 'JH', NULL, NULL, 1, '04', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'N', 1, '年', 'JH', NULL, NULL, 1, '06', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'QT', 1, '其他', 'JH', NULL, NULL, 1, '99', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'R', 1, '日', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'Y', 1, '月', 'JH', NULL, NULL, 1, '03', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'YC', 1, '一次性', 'JH', NULL, NULL, 1, '07', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (81, 'Z', 1, '周', 'JH', NULL, NULL, 1, '02', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (82, 'Y', 1, '月', 'JH', NULL, NULL, 1, '03', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '00.001', 1, '是否有黑名单', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '00.002', 1, '公安是否通过', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.001', 1, '人行.是否存在担保人代还', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.002', 1, '是否存在以资抵债', 'JH', NULL, NULL, 4, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.003', 1, '是否存在展期', 'JH', NULL, NULL, 5, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.004', 1, '是否贷款逾期', 'JH', NULL, NULL, 6, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.005', 1, '是否信用卡逾期', 'JH', NULL, NULL, 7, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.006', 1, '是否信用卡逾期', 'JH', NULL, NULL, 8, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.007', 1, '未结清信用贷款笔数（不包括信用卡）', 'JH', NULL, NULL, 9, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.008', 1, '信用卡总授信额度', 'JH', NULL, NULL, 10, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.009', 1, '信用卡已使用额度', 'JH', NULL, NULL, 11, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.010', 1, '信用卡数量', 'JH', NULL, NULL, 12, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.011', 1, '贷款逾期金额', 'JH', NULL, NULL, 13, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (83, '01.012', 1, '贷记卡逾期金额', 'JH', NULL, NULL, 14, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '01', 1, '单款简单录入', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '02', 1, '风控-身份', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '03', 1, '风控-准入', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '04', 1, '贷款详情录入', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '05', 1, '风控-风险提示', 'JH', NULL, NULL, 4, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '06', 1, '风控-评级', 'JH', NULL, NULL, 5, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '07', 1, '风控-核额', 'JH', NULL, NULL, 6, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '08', 1, '电核/初审', 'JH', NULL, NULL, 7, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '09', 1, '复审', 'JH', NULL, NULL, 8, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '10', 1, '用款申请', 'JH', NULL, NULL, 9, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (84, '11', 1, '放款', 'JH', NULL, NULL, 10, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (85, 'FJ', 1, '否决', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (85, 'QX', 1, '取消', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (85, 'TG', 1, '通过', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (86, 'CS', 1, '城市', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (86, 'NC', 1, '农村', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (86, 'QT', 1, '其他', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (87, 'MD', 1, '门店', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (87, 'QD', 1, '渠道', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (87, 'SY', 1, '所有', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (88, 'CH', 1, '承诺还款', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (88, 'DD', 1, '待定', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (88, 'WY', 1, '违约', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'CN', 1, '承诺还款', 'JH', NULL, NULL, 4, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'CW', 1, '承诺未还款', 'JH', NULL, NULL, 8, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'DF', 1, '低风险', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'DY', 1, '低余额', 'JH', NULL, NULL, 5, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'GF', 1, '高风险', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'GS', 1, '公司员工', 'JH', NULL, NULL, 11, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'KH', 1, '客户失联', 'JH', NULL, NULL, 6, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'SS', 1, '涉诉户', 'JH', NULL, NULL, 14, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'SW', 1, '死亡户', 'JH', NULL, NULL, 13, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'TQ', 1, '提前催收', 'JH', NULL, NULL, 10, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'VI', 1, 'VIP贵宾客户', 'JH', NULL, NULL, 12, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'WD', 1, '未达成承诺还款', 'JH', NULL, NULL, 9, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'YQ', 1, '逾期3期以上', 'JH', NULL, NULL, 7, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (89, 'ZF', 1, '中风险', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (90, 'DH', 1, '电话', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (90, 'SM', 1, '上门查访', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (91, 'DH', 1, '电话', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (91, 'DX', 1, '短信', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (91, 'DZ', 1, '电话中心', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (91, 'SF', 1, '司法', 'JH', NULL, NULL, 6, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (91, 'SM', 1, '上门', 'JH', NULL, NULL, 4, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (91, 'WW', 1, '委外', 'JH', NULL, NULL, 5, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (92, 'DH', 1, '电话', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (92, 'DX', 1, '短信', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (92, 'SM', 1, '上门', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '01', 1, '非本人', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '02.01', 1, '有承诺还款-已打款', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '02.02', 1, '有承诺还款-5日内还款', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '02.03', 1, '有承诺还款-10日内还款', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '02.04', 1, '有承诺还款-15日内还款', 'JH', NULL, NULL, 4, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.01', 1, '有承诺还款-15日后还款', 'JH', NULL, NULL, 5, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.02', 1, ' 无承诺还款-不归还', 'JH', NULL, NULL, 6, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.03', 1, ' 无承诺还款-愿意归还 没钱', 'JH', NULL, NULL, 7, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.04', 1, ' 无承诺还款-虚假贷款', 'JH', NULL, NULL, 8, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.05', 1, ' 无承诺还款-已被抓入牢房', 'JH', NULL, NULL, 9, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.06', 1, ' 无承诺还款-失踪', 'JH', NULL, NULL, 10, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.07', 1, ' 无承诺还款-重大疾病', 'JH', NULL, NULL, 11, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '03.08', 1, ' 无承诺还款-已死亡', 'JH', NULL, NULL, 12, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '04', 1, ' 已联系', 'JH', NULL, NULL, 13, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (93, '05', 1, ' 失联', 'JH', NULL, NULL, 14, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (94, 'DY', 1, '贷款逾期', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (95, 'YQ', 1, '逾期天数', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (96, 'MJ', 1, '每季', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (96, 'MY', 1, '每月', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (97, 'BL', 1, '比例', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (97, 'JE', 1, '金额', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (98, 'SJ', 1, '实际收回金额', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (98, 'WT', 1, '按委外金额', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (98, 'WU', 1, '无', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (99, 'JT', 1, '接通后转人工', 'JH', '100', NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (99, 'WJ', 1, '未接通', 'JH', '101', NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (100, '01', 1, '通话成功', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (100, '02', 1, '查无此人', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (100, '03', 1, '非本人接听', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '01', 1, '无人接听', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '02', 1, '关机', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '03', 1, '电话占线', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '04', 1, 'SIM卡余额不足', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '05', 1, '忙音', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '06', 1, '停机', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '07', 1, '不在服务区', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '08', 1, '暂时无法接通', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '09', 1, '无拨号音', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (101, '10', 1, '无效电话号码', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (120, 'YQ', 1, '逾期天数', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (121, 'DK', 1, '贷款金额', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (121, 'HT', 1, '合同号', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (121, 'KH', 1, '客户名称', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (121, 'SJ', 1, '实际扣款金额', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (122, 'BJ', 1, '补件', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (122, 'BS', 1, '必收', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (122, 'KS', 1, '可收', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (122, 'MS', 1, '免收', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '001', 1, '放款', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '002', 1, '放款结算', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '003', 1, '退款', 'JH', NULL, NULL, 3, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '004', 1, '提前还款', 'JH', NULL, NULL, 4, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '005', 1, '账号调整', 'JH', NULL, NULL, 5, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '006', 1, '利息减免', 'JH', NULL, NULL, 6, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '007', 1, '贷款冲正', 'JH', NULL, NULL, 7, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '008', 1, '交易撤销', 'JH', NULL, NULL, 8, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '009', 1, '贷款暂停', 'JH', NULL, NULL, 9, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (123, '010', 1, '贷款核销', 'JH', NULL, NULL, 10, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (124, 'HX', 1, '核销还款', 'JH', NULL, NULL, 2, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (124, 'ZC', 1, '正常', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (125, 'DC', 1, '多次放款', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (125, 'YC', 1, '一次放款', 'JH', NULL, NULL, 1, '01', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '10', 1, '简要信息录入', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '20', 1, '详细录入', 'JH', NULL, NULL, 1, '20', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '30', 1, '贷款初审', 'JH', NULL, NULL, 1, '30', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '40', 1, '贷款复审', 'JH', NULL, NULL, 1, '40', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '50', 1, '合同签订', 'JH', NULL, NULL, 1, '50', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '60', 1, '用款申请', 'JH', NULL, NULL, 1, '60', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (126, '70', 1, '用款批准', 'JH', NULL, NULL, 1, '70', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'CQ', 1, '重签', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'CX', 1, '撤销', 'JH', NULL, NULL, 7, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'FK', 1, '放款成功', 'JH', NULL, NULL, 5, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'QD', 1, '签订', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'TK', 1, '退款', 'JH', NULL, NULL, 6, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'YK', 1, '用款申请', 'JH', NULL, NULL, 4, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'ZF', 1, '作废', 'JH', NULL, NULL, 3, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (127, 'ZZ', 1, '终止', 'JH', NULL, NULL, 8, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (128, 'CS', 1, '超市', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (128, 'DS', 1, '电商', 'JH', NULL, NULL, 3, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (128, 'MC', 1, '卖场', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (128, 'QT', 1, '其他', 'JH', NULL, NULL, 4, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (129, 'DQ', 1, '电器类', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (129, 'HQ', 1, '婚庆类', 'JH', NULL, NULL, 4, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (129, 'JY', 1, '教育类', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (129, 'ZS', 1, '装饰类', 'JH', NULL, NULL, 3, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (130, '1', 1, '一级', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (130, '2', 1, '二级', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (131, 'J', 1, '季', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (131, 'Y', 1, '月', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (132, 'DG', 1, '对公', 'JH', NULL, NULL, 12, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (132, 'GR', 1, '个人', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (133, 'DK', 1, '贷款审批', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (134, '001', 1, '通用', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (135, 'DZ', 1, '单位地址', 'JH', NULL, NULL, 4, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (135, 'MC', 1, '单位名称', 'JH', NULL, NULL, 3, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (135, 'SJ', 1, '手机号码', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (135, 'YY', 1, '营业执照', 'JH', NULL, NULL, 5, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (135, 'ZJ', 1, '证件号码', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (135, 'ZZ', 1, '组织机构代码', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (136, 'QT', 1, '其他', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (136, 'XT', 1, '系统', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (137, 'CY', 1, '创业', 'JH', NULL, NULL, 5, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (137, 'JY', 1, '教育', 'JH', NULL, NULL, 1, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (137, 'LY', 1, '旅游', 'JH', NULL, NULL, 4, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (137, 'QT', 1, '其他', 'JH', NULL, NULL, 6, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (137, 'XF', 1, '消费', 'JH', NULL, NULL, 2, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (137, 'ZX', 1, '装修', 'JH', NULL, NULL, 3, '10', '2016-11-05', '2016-11-05', 1);
INSERT INTO cs_di_c (di_ki_id, di_cd, ve, di_ca, st, su_di_ki_id, su_di_cd, disp_or, ci_cd, cr_dt, la_up_dt, la_up_us_id) VALUES (28, 'JH', 1, '激活', 'JH', NULL, NULL, 1, 'A', '2016-11-05', '2016-11-05', 1);
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('2008', 0, '2017-03-04', '10:54:30', '2017-03-04', 1, '安保部', 'CS', '2008', '张飞', '13145678901', NULL, 2, '11', 'BJ', 'BJ', 'aa');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('1', 16, '1', '1', '2017-03-02', 1, '运营部', 'JH', '1', '1', '13000000015', '1', 2, '11', '1', '1', '1');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('11', 2, '2017-02-13', '16:45:9', '2017-02-16', 1, '运营部', 'JH', '11', '', '', NULL, 1, NULL, 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('2', 1, '2017-03-03', '00:02:37', '2017-03-03', 1200, '审核', 'JH', '2', '张浩', '13716590312', NULL, 2, '11', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('12', 7, '2017-02-16', '14:43:36', '2017-03-02', 1, '运营部2', 'SX', '12', 'zscs', '13000000015', NULL, 2, '11', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('45435', 2, '2017-03-03', '09:46:45', '2017-03-03', 1, '咖啡旗舰店', 'JH', '45435', '', '', NULL, 2, '11', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('0203', 3, '2017-03-02', '21:12:35', '2017-03-03', 1, '测试添加', 'SX', '0203', '', '', NULL, 2, '11', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('4666', 0, '2017-03-03', '18:58:21', '2017-03-03', 1, '安保', 'CS', '4666', '赵云', '13426316790', NULL, 2, '11', 'BJ', 'BJ', '33');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('555', 1, '2017-03-03', '18:57:52', '2017-03-03', 1, '财务部', 'CS', '555', '张飞', '13000000090', NULL, 2, '11', 'BJ', 'BJ', '2');
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3461579962854384', NULL, '2017-02-23', '20:14:55', '/var/zkbc/fs/default/7749198e-f9b5-4547-aa42-59536d91e5c7.jpg', '7749198e-f9b5-4547-aa42-59536d91e5c7.jpg', '2017-02-22', 1, 1);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3703992653327846', NULL, '2017-02-28', '17:20:34', '/var/zkbc/fs/default/2e4caae0-2fff-4f43-897e-ce50b41d9319.jpg', '2e4caae0-2fff-4f43-897e-ce50b41d9319.jpg', '2017-02-28', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3704019492602618', NULL, '2017-02-28', '17:21:01', '/var/zkbc/fs/default/a3794ff4-b076-481b-8cca-72d8644e9466.jpg', 'a3794ff4-b076-481b-8cca-72d8644e9466.jpg', '2017-02-28', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3704019905854697', NULL, '2017-02-28', '17:21:01', '/var/zkbc/fs/default/5fc567d1-47a9-46dd-8e4a-5f052d19aced.jpg', '5fc567d1-47a9-46dd-8e4a-5f052d19aced.jpg', '2017-02-28', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3704020296280322', NULL, '2017-02-28', '17:21:01', '/var/zkbc/fs/default/2dcaba21-28a3-4b32-b4dc-a6d54b3b77ba.jpg', '2dcaba21-28a3-4b32-b4dc-a6d54b3b77ba.jpg', '2017-02-28', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3779991423577795', NULL, '2017-03-01', '14:27:13', '/var/zkbc/fs/default/31425462-1728-490f-af0d-8a2448749736.png', '31425462-1728-490f-af0d-8a2448749736.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780172396631095', NULL, '2017-03-01', '14:30:14', '/var/zkbc/fs/default/44a7f6fe-6bb0-4e04-babe-0c876dd9af3c.png', '44a7f6fe-6bb0-4e04-babe-0c876dd9af3c.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780218844875132', NULL, '2017-03-01', '14:31:00', '/var/zkbc/fs/default/c1fdf9f1-147a-42c5-85b4-f7aac79839a9.png', 'c1fdf9f1-147a-42c5-85b4-f7aac79839a9.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780286053094452', NULL, '2017-03-01', '14:32:07', '/var/zkbc/fs/default/1b36a272-f679-4a6c-883f-9ad11b14b85e.png', '1b36a272-f679-4a6c-883f-9ad11b14b85e.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780406139243903', NULL, '2017-03-01', '14:34:07', '/var/zkbc/fs/default/36c55c48-1664-4332-9f63-815435f6f4b7.png', '36c55c48-1664-4332-9f63-815435f6f4b7.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780476046966993', NULL, '2017-03-01', '14:35:17', '/var/zkbc/fs/default/fe78c27a-b9a9-488e-b994-8a2cdca4fbe8.png', 'fe78c27a-b9a9-488e-b994-8a2cdca4fbe8.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780563792757021', NULL, '2017-03-01', '14:36:45', '/var/zkbc/fs/default/1b34a7d0-ab00-4c87-a2e7-21ea150025ed.png', '1b34a7d0-ab00-4c87-a2e7-21ea150025ed.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780622533281507', NULL, '2017-03-01', '14:37:44', '/var/zkbc/fs/default/9d6fc8e2-cf9b-494b-a26b-f18284599bff.png', '9d6fc8e2-cf9b-494b-a26b-f18284599bff.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780662241135984', NULL, '2017-03-01', '14:38:23', '/var/zkbc/fs/default/0d5cb275-0abd-4170-90c2-19381dc0e6d8.png', '0d5cb275-0abd-4170-90c2-19381dc0e6d8.png', '2017-03-01', 1, 0);
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3780682826222213', NULL, '2017-03-01', '14:38:44', '/var/zkbc/fs/default/12650e69-07fe-4cc9-8054-07e8958f4d82.png', '12650e69-07fe-4cc9-8054-07e8958f4d82.png', '2017-03-01', 1, 0);
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('4001', 4, '2017-02-20', '16:6:43', '2017-02-20', 1, '运营', 'JH', '1', '1', '1', '管理岗');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('1202632', 7, '2017-02-08', '16:24:19', '2017-03-02', 1, '2', 'SX', '1', '1', '1', 'vcfdvfvf');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('0123', 2, '2017-03-02', '21:13:51', '2017-03-02', 1, '测试岗位', 'SX', '1', '1', '1', NULL);
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('000005', 0, '2017-03-02', '22:34:29', '2017-03-02', 1, '催收岗', 'CS', '1', '1', '1', NULL);
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('000006', 0, '2017-03-02', '22:34:43', '2017-03-02', 1, '审批岗', 'CS', '1', '1', '1', NULL);
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('2', 1, '2017-03-03', '00:03:46', '2017-03-03', 1200, '审核岗位', 'JH', '1', '1', '1', NULL);
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('2497', 2, '2017-03-03', '09:45:15', '2017-03-03', 1, '咖啡售货员', 'JH', '1', '0', '0', NULL);
INSERT INTO cu_res_act_s (res_no, res_act_cd, ve, cr_dt, la_up_dt, la_up_us_id, url) VALUES ('5', 'CS', 1, '2017-11-11', '2018-11-11', 1, 'aaa.aa');
INSERT INTO cu_res_act_s (res_no, res_act_cd, ve, cr_dt, la_up_dt, la_up_us_id, url) VALUES ('1', 'CS', 1, '2017-11-11', '2018-11-11', 1, 'aaa.aa');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('00000051', 1, '2017-03-06', '10:28:34', '2017-03-06', 1, '菜单配置', '2', '32', '2', 'M3461579962854384', 1, '0', '菜单配置，权限管理，菜单图标管理的二级菜单');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('21', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '个人客户管理', '2', '20', '/cs/personal-customer/personal-customer.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('1', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '消费金融', '5', NULL, '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('00000086', 0, '2017-03-06', '10:17:19', '2017-03-06', 1, '个人工作台', '3', '1', '1', 'M3461579962854384', 0, '0', '我的任务个人设置&的一级菜单');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('22', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '黑白名单管理', '2', '20', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('33', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '产品设置', '2', '102', '/cs/product-set/product-set.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('8', 9, '2017-02-14', '15:6:31', '2017-03-06', 1, '业务办理', '3', '1', '111', 'M3780682826222213', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('7', 9, '2017-02-14', '15:6:31', '2017-03-02', 1, '拒绝任务', '3', '2', '/cb/mytask-list/mytask-refuse-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('20', 6, '2017-02-14', '15:6:31', '2017-03-06', 1, '客户管理', '2', '1', '1111', 'M3780406139243903', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('14', 20, '2017-02-14', '15:6:31', '2017-03-03', 1, '合同签订', '3', '9', '/cb/contract/contract-list.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('24', 3, '2017-02-14', '15:6:31', '2017-03-02', 1, '个人白名单', '2', '22', '/cs/name-ist-management/person-white-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('26', 3, '2017-02-14', '15:6:31', '2017-02-27', 1, '合作方黑名单', '2', '125', '/cs/name-ist-management/partner-black-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('5', 8, '2017-02-14', '15:6:31', '2017-03-02', 1, '已结任务', '3', '2', '/cb/mytask-list/mytask-end-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('52', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '交易码配置管理', '4', '47', '/cc/params/partrcfg/parTrCfgIndex.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('6', 8, '2017-02-14', '15:6:31', '2017-03-02', 1, '取消任务', '3', '2', '/cb/mytask-list/mytask-cancle-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('3', 7, '2017-02-14', '15:6:31', '2017-03-02', 1, '待办任务', '3', '2', '/cb/mytask-list/mytask-waiting-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('27', 7, '2017-02-14', '15:6:31', '2017-03-01', 1, '合作方白名单', '2', '125', '/cs/name-ist-management/partner-white-list.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('28', 7, '2017-02-14', '15:6:31', '2017-03-01', 1, '合作方灰名单', '2', '125', '/cs/name-ist-management/partner-gray-list.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('53', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '科目信息配置表管理', '4', '47', '/cc/system/syaccfg/syAcCfgIndex.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('15', 21, '2017-02-14', '15:6:31', '2017-03-03', 1, '用款申请', '3', '9', '/cb/spent-loan/spent-loan-list.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('102', 4, '2017-02-14', '15:6:31', '2017-03-06', 1, '基础参数配置', '2', '32', '', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('31', 5, '2017-02-14', '15:6:31', '2017-03-01', 1, '门店管理', '2', '29', '/cs/store/store-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('101', 4, '2017-02-21', '15:5:30', '2017-03-01', 1, '流程管理', '6', '200', '/activiti/index', 'M3461579962854384', 2, '0', '99');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('125', 6, '2017-02-14', '15:6:31', '2017-03-01', 1, '黑白名单管理', '3', '29', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('37', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '还款方式', '2', '102', '/cs/repay-mode/repay-mode.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('25', 3, '2017-02-14', '15:6:31', '2017-03-02', 1, '个人灰名单', '2', '22', '/cs/name-ist-management/person-gray-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('23', 4, '2017-02-14', '15:6:31', '2017-03-02', 1, '个人黑名单的', '2', '22', '/cs/name-ist-management/person-black-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('85', 5, '2017-02-14', '15:6:31', '2017-03-02', 1, '机构管理', '5', '57', '/cu/organization-management/organization-management-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('89', 6, '2017-02-14', '15:6:31', '2017-03-02', 1, '角色管理', '5', '57', '/cu/role-management/role-management-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('87', 8, '2017-02-14', '15:6:31', '2017-03-02', 1, '岗位管理', '5', '57', '/cu/post-management/post-management-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('91', 5, '2017-02-14', '15:6:31', '2017-03-02', 1, '用户管理', '5', '57', '/cu/user-management/user-management-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('93', 9, '2017-02-14', '15:6:31', '2017-03-02', 1, '菜单管理', '5', '57', '/cu/menu-management/menu-management.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('16', 22, '2017-02-14', '15:6:31', '2017-03-03', 1, '电话回访', '3', '9', '/cb/call-return-visit/return-visit-list.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('38', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '费用计算', '2', '102', '/cs/cost-account/cost-account.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('39', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '费用子信息', '2', '102', '/cs/cost-subInfor/cost-subInfor.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('40', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '佣金配置', '2', '102', '/cs/brokerage-config/brokerage-config-list.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('2', 8, '2017-02-14', '15:6:31', '2017-03-06', 1, '我的任务', '3', '1', '111', 'M3780563792757021', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('73', 7, '2017-02-14', '15:6:31', '2017-03-06', 1, '财务信息', '4', '1', '11', 'M3779991423577795', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('76', 7, '2017-02-14', '15:6:31', '2017-03-06', 1, '日终批处理', '4', '1', '111', 'M3780476046966993', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('29', 8, '2017-02-14', '15:6:31', '2017-03-06', 1, '合作方管理', '2', '1', '1111', 'M3780286053094452', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('32', 7, '2017-02-14', '15:6:31', '2017-03-06', 1, '系统配置', '2', '1', '1111', 'M3780662241135984', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('47', 4, '2017-02-14', '15:6:31', '2017-03-06', 1, '核心业务参数配置', '4', '32', '', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('11', 19, '2017-02-14', '15:6:31', '2017-03-03', 1, '贷款申请详情录入', '3', '9', '/cb/loan-application/detail-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('4', 8, '2017-02-14', '15:6:31', '2017-03-02', 1, '已办任务', '3', '2', '/cb/mytask-list/mytask-finish-list.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('9', 6, '2017-02-14', '15:6:31', '2017-03-02', 1, '贷款申请处理', '3', '8', '111', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('116', 15, '2017-02-14', '15:6:31', '2017-03-06', 1, '还款账号变更申请', '4', '121', '/cc/loan/lnacchg/lnacchg-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('49', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '还款方式配置表管理', '4', '47', '/cc/params/parpaycfg/parPayCfgIndex.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('110', 8, '2017-02-14', '15:6:31', '2017-03-06', 1, '贷款发放', '4', '121', '/cc/loan/lnloinft/lnloinft-index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('112', 11, '2017-02-14', '15:6:31', '2017-03-06', 1, '主动还款申请', '4', '121', '/cc/loan/lnfeeinf/lnfeeinf-index.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('119', 13, '2017-02-14', '15:6:31', '2017-03-06', 1, '存款账户信息查询', '4', '121', '/cc/loan/lndepinf/lndepinf-index.html', 'M3461579962854384', 9, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('83', 17, '2017-02-14', '15:6:31', '2017-03-01', 1, '请假登记', '5', '80', '/cu/personal-settings/leave-registration-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('120', 13, '2017-02-14', '15:6:31', '2017-03-06', 1, '内部存款账户维护', '4', '121', '/cc/loan/lndeptrdinf/lndeptrdinf-index.html', 'M3461579962854384', 10, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('99', 15, '2017-02-14', '15:6:31', '2017-03-02', 1, '菜单图标管理', '5', '57', '/cu/menu-picture/menu-picture-list.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('50', 7, '2017-02-14', '15:6:31', '2017-03-06', 1, '还款顺序管理', '4', '47', '/cc/params/parpayord/parPayOrdIndex.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('82', 20, '2017-02-14', '15:6:31', '2017-03-01', 1, '修改登录密码', '5', '80', '/cu/personal-settings/update-password.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('121', 9, '2017-02-14', '15:6:31', '2017-03-01', 1, '贷款业务', '4', '8', '', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('51', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '基准利率分类管理', '4', '47', '/cc/params/parrattyp/parRatTypIndex.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('54', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '系统基本信息表管理', '4', '47', '/cc/system/sybainf/syBaInf-look.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('55', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '流水信息表管理', '4', '47', '/cc/params/parseqinf/parSeqInfIndex.html', 'M3461579962854384', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('13', 14, '2017-02-14', '15:6:31', '2017-03-03', 1, '二级审批', '3', '9', '/cb/two-levels-approval/two-levels-approval-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('zdgl', 1, '2017-02-27', '14:44:25', '2017-03-06', 1, '字典管理', '2', '102', '/cs/dictionarycategory/index.html', 'M3461579962854384', 3, '0', '');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('74', 6, '2017-02-14', '15:6:31', '2017-03-02', 1, '会计分录信息管理', '4', '73', '/cc/account/lnactentl/lnactentl-index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('75', 5, '2017-02-14', '15:6:31', '2017-03-02', 1, '分户账查询', '4', '73', '/cc/account/lnactldgl/lnactldgl-index.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('117', 12, '2017-02-14', '15:6:31', '2017-03-06', 1, '贷款还款方式申请', '4', '121', '/cc/loan/lnpaychgt/lnpaychgt-index.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('95', 15, '2017-02-14', '15:6:31', '2017-03-02', 1, '权限管理', '5', '57', '/cu/auth-management/auth-management.html', 'M3461579962854384', 5, '0', '2233');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('56', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '字典信息表管理', '4', '47', '/cc/params/csdicfg/csdicfg-index.html', 'M3461579962854384', 9, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('81', 20, '2017-02-14', '15:6:31', '2017-03-01', 1, '个人信息维护', '5', '80', '/cu/personal-settings/personal-info-maintenance.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('36', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '材料设置', '2', '102', '/cs/material-setting/material-setting-list.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('34', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '打印模板集管理', '2', '102', '/cs/printtemplateset/index.html', 'M3461579962854384', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('114', 11, '2017-02-14', '15:6:31', '2017-03-06', 1, '利率变更表申请', '4', '121', '/cc/loan/lnratchg/lnratchg-index.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('10', 15, '2017-02-14', '15:6:31', '2017-03-03', 1, '贷款申请简要录入', '3', '9', '/cb/loan-application/brief-entry.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('57', 6, '2017-02-14', '15:6:31', '2017-03-06', 1, '系统参数配置', '4', '1', '1111', 'M3780622533281507', 9, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('30', 5, '2017-02-14', '15:6:31', '2017-03-01', 1, '合作方管理', '2', '29', '/cs/business-partner/partner-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('48', 5, '2017-02-14', '15:6:31', '2017-03-06', 1, '货币信息管理', '4', '47', '/cc/params/parcurtyp/parCurTypIndex.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('118', 14, '2017-02-14', '15:6:31', '2017-03-06', 1, '贷款展期申请', '4', '121', '/cc/loan/lnexdapp/lnexdapp-index.html', 'M3461579962854384', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('200', 6, '2017-02-14', '15:5:30', '2017-03-06', 1, '工作流引擎', '6', '1', '1111', 'M3780218844875132', 10, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('12', 11, '2017-02-14', '15:6:31', '2017-03-03', 1, '电核/初核', '3', '9', '/cb/nucleus-nucleus/nucleus-nucleus-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('17', 14, '2017-02-14', '15:6:31', '2017-03-03', 1, '上级电话回访', '3', '9', '/cb/superior-telephone-return/superior-telephone-return-list.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('18', 17, '2017-02-14', '15:6:31', '2017-03-03', 1, '放款审查', '3', '9', '/cb/loan-review/loan-review-list.html', 'M3461579962854384', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('42', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '额度审批', '2', '102', '/cs/limit-examine/limit-examine-list.html', 'M3461579962854384', 9, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('43', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '电核设置', '2', '102', '/cs/nuclear-set/nuclear-set.html', 'M3461579962854384', 10, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('45', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '工单配置', '2', '102', '', 'M3461579962854384', 11, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('46', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '消息中心', '2', '102', '', 'M3461579962854384', 12, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('44', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '电核比例', '2', '102', '/cs/tel-check-percent/check-percent-list.html', 'M3461579962854384', 13, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('000001', 1, '2017-03-06', '10:32:42', '2017-03-06', 1, '贷后管理', '3', '1', '1', 'M3461579962854384', 4, '0', '贷后管理一级菜单');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('80', 6, '2017-02-14', '15:6:31', '2017-03-06', 1, '个人设置', '5', '1', '111', 'M3780172396631095', 11, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('79', 18, '2017-02-14', '15:6:31', '2017-03-05', 1, '系统批处理执行历史', '4', '76', '/cc/batch/batchhis/batchhis-index.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('78', 20, '2017-02-14', '15:6:31', '2017-03-05', 1, '批处理执行计划', '4', '76', '/cc/batch/batchtaskexeplan/batchtaskexeplan-index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('77', 17, '2017-02-14', '15:6:31', '2017-03-05', 1, '批处理任务管理', '4', '76', '/cc/batch/batchtaskinfo/batchtaskinfo-index.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('111', 10, '2017-02-14', '15:6:31', '2017-03-06', 1, '放款成功查询', '4', '121', '/cc/loan/lnloinf/lnloinf-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('113', 10, '2017-02-14', '15:6:31', '2017-03-06', 1, '息费减免申请', '4', '121', '/cc/loan/lnfeeinft/lnfeeinft-index.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('115', 10, '2017-02-14', '15:6:31', '2017-03-06', 1, '交易冲正申请', '4', '121', '/cc/loan/lnredreml/lnredreml-index.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('000051', 0, '2017-03-06', '10:26:45', '2017-03-06', 1, '组织机构', '2', '32', '2', 'M3461579962854384', 0, '0', '机构，岗位，角色，用户的二级菜单');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('0000064', 0, '2017-03-06', '10:29:31', '2017-03-06', 1, '通用参数', '2', '32', '2', 'M3461579962854384', 0, '0', '字典管理的二级菜单');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('41', 3, '2017-02-14', '15:6:31', '2017-03-06', 1, '促销配置', '2', '102', '/cs/promotion-allocation/promotion-allocation.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '73', 'FW', 0, '2017-02-23', '16:31:07', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '75', 'FW', 0, '2017-02-23', '16:31:07', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '74', 'FW', 0, '2017-02-23', '16:31:07', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '76', 'FW', 0, '2017-02-23', '16:31:11', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '77', 'FW', 0, '2017-02-23', '16:31:11', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '78', 'FW', 0, '2017-02-23', '16:31:11', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '79', 'FW', 0, '2017-02-23', '16:31:11', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '80', 'FW', 0, '2017-02-23', '16:31:14', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '83', 'FW', 1, '2017-02-22', '14:46:2', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '81', 'FW', 0, '2017-02-23', '16:31:14', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '82', 'FW', 0, '2017-02-23', '16:31:14', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '73', 'CX', 0, '2017-02-23', '16:35:33', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '58', 'CX', 0, '2017-02-21', '17:12:0', '2017-02-21', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '59', 'SC', 0, '2017-02-21', '17:12:0', '2017-02-21', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '60', 'CX', 0, '2017-02-21', '17:12:0', '2017-02-21', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '61', 'SC', 0, '2017-02-21', '17:12:0', '2017-02-21', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '62', 'CX', 0, '2017-02-21', '17:12:0', '2017-02-21', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '63', 'SC', 0, '2017-02-21', '17:12:0', '2017-02-21', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '64', 'FW', 0, '2017-02-15', '17:28:15', '2017-02-15', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '75', 'CX', 0, '2017-02-23', '16:35:33', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '74', 'CX', 0, '2017-02-23', '16:35:33', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '101', 'FW', 1, '2014-14-14', '12:52:20', '2017-22-36', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '2', 'FW', 0, '2017-02-23', '16:30:16', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '3', 'FW', 0, '2017-02-23', '16:30:16', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '5', 'FW', 0, '2017-02-23', '16:30:16', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '6', 'FW', 0, '2017-02-23', '16:30:17', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '7', 'FW', 0, '2017-02-23', '16:30:17', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '4', 'FW', 0, '2017-02-23', '16:30:17', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '8', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '9', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '18', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '14', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '15', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '10', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '12', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '16', 'FW', 1, '2017-02-14', '19:15:14', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '13', 'FW', 0, '2017-02-23', '16:30:21', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '17', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '11', 'FW', 1, '2017-02-14', '17:7:57', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '29', 'FW', 0, '2017-02-23', '16:30:31', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '31', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '30', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '32', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '102', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '44', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '33', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '35', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '37', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '38', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '39', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '40', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '41', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '42', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '43', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '45', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '46', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '34', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '36', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '47', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '49', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '48', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '50', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '51', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '52', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '53', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '54', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '200', 'FW', 1, '2', '2', '2', 2);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '55', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '56', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '19', 'FW', 0, '2017-02-20', '16:43:20', '2017-02-20', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '20', 'FW', 0, '2017-02-23', '16:30:54', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '26', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '27', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '28', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '21', 'FW', 1, '2017-02-15', '17:28:12', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '22', 'FW', 0, '2017-02-23', '16:30:54', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '24', 'FW', 0, '2017-02-23', '16:30:54', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '25', 'FW', 1, '2017-02-20', '16:43:20', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '23', 'FW', 0, '2017-02-23', '16:30:54', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '57', 'FW', 0, '2017-02-23', '16:31:03', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '93', 'FW', 1, '2017-02-22', '14:46:6', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '85', 'FW', 0, '2017-02-23', '16:31:03', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '87', 'FW', 0, '2017-02-23', '16:31:03', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '89', 'FW', 0, '2017-02-23', '16:31:03', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '91', 'FW', 0, '2017-02-23', '16:31:03', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '95', 'FW', 0, '2017-02-23', '16:31:3', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '97', 'FW', 0, '2017-02-23', '16:31:03', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '99', 'FW', 1, '2017-02-22', '14:45:57', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '234', 'FW', 1, '2017-02-28', '17:48:34', '2017-03-01', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '020103', 'FW', 0, '2017-03-01', '13:56:51', '2017-03-01', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '22223', 'FW', 0, '2017-03-01', '15:39:50', '2017-03-01', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '2348', 'FW', 0, '2017-03-01', '15:50:28', '2017-03-01', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '294', 'FW', 0, '2017-03-01', '15:57:20', '2017-03-01', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '79', 'FW', 0, '2017-03-01', '16:01:55', '2017-03-01', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0123', '001', 'FW', 0, '2017-03-02', '21:16:49', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '25235', 'FW', 0, '2017-03-02', '11:24:37', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '858', 'FW', 0, '2017-03-02', '11:30:22', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '3566', 'FW', 0, '2017-03-02', '11:42:21', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '9', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '0002', 'FW', 0, '2017-03-02', '11:46:44', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '128', 'FW', 0, '2017-03-02', '14:13:15', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '20', 'FW', 0, '2017-03-02', '14:50:08', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '21', 'FW', 0, '2017-03-02', '14:50:08', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '22', 'FW', 0, '2017-03-02', '14:50:08', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '24', 'FW', 0, '2017-03-02', '14:50:08', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '14', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '25', 'FW', 0, '2017-03-02', '14:50:09', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '23', 'FW', 0, '2017-03-02', '14:50:10', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '16', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '15', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '29', 'FW', 0, '2017-03-02', '14:52:06', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '31', 'FW', 0, '2017-03-02', '14:52:06', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '125', 'FW', 0, '2017-03-02', '14:52:06', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '26', 'FW', 0, '2017-03-02', '14:52:06', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '27', 'FW', 0, '2017-03-02', '14:52:07', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '28', 'FW', 0, '2017-03-02', '14:52:08', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '30', 'FW', 0, '2017-03-02', '14:52:09', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '80', 'FW', 0, '2017-03-02', '15:01:42', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '83', 'FW', 0, '2017-03-02', '15:01:42', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '82', 'FW', 0, '2017-03-02', '15:01:43', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('234', '81', 'FW', 0, '2017-03-02', '15:01:43', '2017-03-02', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '10', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '11', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '18', 'FW', 0, '2017-03-03', '00:02:28', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '13', 'FW', 0, '2017-03-03', '00:02:29', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '17', 'FW', 0, '2017-03-03', '00:02:29', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '12', 'FW', 0, '2017-03-03', '00:02:29', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '200', 'FW', 0, '2017-03-03', '00:02:45', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '101', 'FW', 0, '2017-03-03', '00:02:45', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '102', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '33', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '37', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '38', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '39', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '40', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '41', 'FW', 0, '2017-03-03', '00:03:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '42', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '43', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '45', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '46', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '44', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '34', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', '36', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('0127', 'zdgl', 'FW', 0, '2017-03-03', '00:03:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '8', 'FW', 0, '2017-03-03', '00:12:31', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '9', 'FW', 0, '2017-03-03', '00:12:31', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '14', 'FW', 0, '2017-03-03', '00:12:31', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '16', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '15', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '10', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '11', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '18', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '13', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '17', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '12', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '121', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '118', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '112', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '116', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '119', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '120', 'FW', 0, '2017-03-03', '00:12:32', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '117', 'FW', 0, '2017-03-03', '00:12:33', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '110', 'FW', 0, '2017-03-03', '00:12:33', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '114', 'FW', 0, '2017-03-03', '00:12:33', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '113', 'FW', 0, '2017-03-03', '00:12:33', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '111', 'FW', 0, '2017-03-03', '00:12:33', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '115', 'FW', 0, '2017-03-03', '00:12:33', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '32', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '102', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '33', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '37', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '38', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '39', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '40', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '41', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '42', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '43', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '45', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '46', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '44', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '34', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '36', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', 'zdgl', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '47', 'FW', 0, '2017-03-03', '00:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '52', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '53', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '54', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '55', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '56', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '48', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '49', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '50', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '51', 'FW', 0, '2017-03-03', '00:15:12', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '80', 'FW', 0, '2017-03-03', '10:15:10', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '83', 'FW', 0, '2017-03-03', '10:15:10', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '82', 'FW', 0, '2017-03-03', '10:15:10', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('2', '81', 'FW', 0, '2017-03-03', '10:15:11', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', 'zdgl', 'FW', 0, '2017-03-03', '18:16:03', '2017-03-03', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '2', 'FW', 0, '2017-03-05', '09:10:03', '2017-03-05', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '7', 'FW', 0, '2017-03-05', '09:10:03', '2017-03-05', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '5', 'FW', 0, '2017-03-05', '09:10:03', '2017-03-05', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '6', 'FW', 0, '2017-03-05', '09:10:04', '2017-03-05', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '3', 'FW', 0, '2017-03-05', '09:10:04', '2017-03-05', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '4', 'FW', 0, '2017-03-05', '09:10:04', '2017-03-05', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('dsfas', '21', 'FW', 0, '2017-03-06', '09:28:54', '2017-03-06', 1);
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('2', 1, '2017-03-03', '00:03:13', '2017-03-03', 1200, 'JH', '简要录入', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('2478', 2, '2017-03-03', '09:43:19', '2017-03-03', 1, 'JH', '咖啡师傅', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('dsfas', 1, '2017-03-03', '17:59:25', '2017-03-03', 1, 'JH', '陈', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('23', 2, '2017-02-09', '16:11:48', '2017-02-21', 1, 'SX', '人员5', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('1', 1, '2017-02-16', '15:0:16', '2017-02-16', 1, 'JH', 'ADMIN', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('00005', 1, '2017-03-02', '22:33:29', '2017-03-02', 1, 'JH', '电核人员', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('234', 4, '2017-02-08', '18:20:29', '2017-03-02', 1, 'SX', '人员4', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('0123', 2, '2017-03-02', '21:13:16', '2017-03-02', 1, 'SX', '测试角色', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('00006', 1, '2017-03-02', '22:34:03', '2017-03-02', 1, 'JH', '一级审批', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('0127', 1, '2017-03-02', '23:59:50', '2017-03-03', 1, 'JH', '业务测试', '1', '');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('2', 1, '1', '1', '1', 1, '业务支撑系统', '1', 'http://124.193.90.196:8000');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('6', 1, '1', '1', '1', 1, '工作流引擎', '1', 'http://124.193.90.196:8001');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('5', 1, '1', '1', '1', 1, '统一用户', '1', 'http://124.193.90.196:8002');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('3', 1, '1', '1', '1', 1, '业务系统', '1', 'http://124.193.90.196:8001');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('4', 1, '1', '1', '1', 1, '核心系统', '1', 'http://124.193.90.196:8004');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2491203140131596, 1, 2, '2017-02-14', '16:27:24', '2017-02-14', 1, '2017-02-14', '2017-02-21', '2017-03-23', '2', '', '4444', 'xfjr', '2491203140131596', '阿弥佗佛', '14:17:4');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2494808540653470, 1, 3, '2017-02-14', '17:27:30', '2017-02-14', 1, '2017-02-14', '2017-02-14', '2017-02-14', '1', '', '2', 'xfjr', '2494808540653470', 'hello world', '14:17:57');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2491179584936273, 1, 4, '2017-02-14', '16:27:1', '2017-02-14', 1, '2017-02-14', '2017-02-22', '2017-02-22', '2', '55', '4444', 'xfjr', '2491179584936273', '%%%%%%#$', '14:18:29');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2660762499956170, 1, 2, '2017-02-16', '15:33:24', '2017-02-16', 1, '2017-02-16', '2017-02-16', '2017-02-17', '3', '', 'asdfas', 'xfjr', '2660762499956170', '20170216', '14:18:43');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3173952370589411, 1, 3, '2017-02-22', '14:6:33', '2017-02-22', 1, '2017-02-22', '2017-02-22', '2017-02-23', '4', '', '时代发生', 'xfjr', '3173952370589411', '2017-02-23', '17:59:21');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3287714142840355, 1, 1, '2017-02-23', '21:42:35', '2017-02-23', 1, '2017-02-23', '2017-02-28', '2017-03-07', '3', 'xx', 'x', 'xfjr', '3287714142840355', '2017-02-23', '21:43:7');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3174651417907956, 1, 1, '2017-02-22', '14:18:13', '2017-02-22', 1, '2017-02-22', '2017-02-22', '2017-02-22', '3', '', '######', 'xfjr', '3174651417907956', '2017-02-24', '14:48:15');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2660807451879809, 1, 1, '2017-02-16', '15:34:9', '2017-02-16', 1, '2017-02-16', '2017-02-17', '2017-03-18', '2', '', 'asdfasdfadsf', 'xfjr', '2660807451879809', '2017-02-1624', '15:34:28');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2660799492679266, 1, 1, '2017-02-16', '15:34:1', '2017-02-16', 1, '2017-02-16', '2017-02-16', '2017-03-22', '3', '', '0525', 'xfjr', '2660799492679266', '2017-02-28', '13:58:39');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3692588174134863, 1, 1, '2017-02-28', '14:10:29', '2017-02-28', 1, '2017-02-28', '2017-03-02', '2017-03-07', '1', '', 'dfs', 'xfjr', '3692588174134863', '2017-02-28', '14:10:40');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3851046190584640, 1, 0, '2017-03-02', '10:11:27', '2017-03-02', 1, '2017-03-02', '2017-03-02', '2017-04-15', '3', NULL, 'adsfas', 'xfjr', '3851046190584640', NULL, NULL);
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3851046292827380, 1, 1, '2017-03-02', '10:11:27', '2017-03-02', 1, '2017-03-02', '2017-03-02', '2017-04-15', '3', '', 'adsfas', 'xfjr', '3851046292827380', '2017-03-02', '10:12:7');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3851150904621856, 1, 1, '2017-03-02', '10:13:12', '2017-03-02', 1, '2017-03-02', '2017-04-08', '2017-04-08', '4', '', 'daf', 'xfjr', '3851150904621856', '2017-03-02', '10:13:35');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3851198421591650, 1, 1, '2017-03-02', '10:14:00', '2017-03-02', 1, '2017-03-02', '2017-03-16', '2017-04-29', '3', '', 'wwadsfa', 'xfjr', '3851198421591650', '2017-03-03', '10:28:35');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3938502830988071, 12, 0, '2017-03-03', '10:29:04', '2017-03-03', 12, '2017-03-03', '2017-03-03', '2017-04-14', '3', NULL, 'dfa', 'xfjr', '3938502830988071', NULL, NULL);
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1200, 5, '2017-02-21', '10:38:20', '2017-03-01', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-21', '2017-02-21', 3, NULL, NULL, NULL, NULL, '1200');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1, 3, '2017-01-20', '1', '2017-01-20', 1, '1', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-01-20', '2017-01-20', 1, '2017-01-20', '1', '2017-01-20', '1', 'admin');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (123, 0, '2017-03-02', '21:20:02', '2017-03-02', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-03-02', '2017-03-02', 3, NULL, NULL, NULL, NULL, '0123');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (127, 0, '2017-03-03', '00:01:41', '2017-03-03', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-03-03', '2017-03-03', 3, NULL, NULL, NULL, NULL, '0127');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (12, 1, '2017-03-03', '00:08:58', '2017-03-03', 1200, 'CS', 'fc988d6b71182f885876fb574482b679af836fa0', '1', '51565a42edd2470eacee664357d19830', '1', '2017-03-03', '2017-03-03', 3, NULL, NULL, NULL, NULL, 'zhangkuoxing');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (3455, 1, '2017-03-03', '17:51:24', '2017-03-03', 1, 'CS', 'c54e6f8e342b67354c489427c8890886b3b6f297', '1', 'bc7cbb95fbb54e61a3f463253954bab5', '1', '2017-03-03', '2017-03-03', 3, NULL, NULL, NULL, NULL, '37');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12, '2', 0, '2017-03-03', '00:08:58', '2017-03-03', 1200, 'zhangkuoxing');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '0123', 1, '2017-03-02', '21:20:02', '2017-03-03', 1, '0123');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '2', 0, '2017-03-03', '11:57:49', '2017-03-03', 1, '0123');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '4001', 0, '2017-03-03', '11:57:49', '2017-03-03', 1, '0123');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '1202632', 1, '2017-03-02', '19:04:01', '2017-03-04', 1, '188');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '4001', 3, '2017-02-23', '14:14:38', '2017-03-04', 1, '188');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (3455, '2497', 2, '2017-03-03', '18:20:58', '2017-03-06', 1, '37');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (3455, '2', 2, '2017-03-03', '17:51:24', '2017-03-06', 1, '37');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1200, '1202632', 0, '2017-02-21', '10:38:20', '2017-02-21', 1, '1200');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (127, '2497', 1, '2017-03-03', '18:28:07', '2017-03-06', 1, '0127');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12, '2', 0, '2017-03-03', '00:08:58', '2017-03-03', 1200, 'zhangkuoxing');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1200, '23', 0, '2017-02-21', '10:38:20', '2017-02-21', 1, '1200');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, 'dsfas', 0, '2017-03-04', '10:56:15', '2017-03-04', 1, '188');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1, '234', 1, '2017-03-01', '15:50:12', '2017-03-02', 1, 'admin');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1, '1', 2, '2017-02-15', '17:27:4', '2017-03-02', 1, 'admin');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1200, '1', 0, '2017-02-09', '15:21:42', '2017-02-09', 1, '1200');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '00005', 0, '2017-03-04', '10:56:30', '2017-03-04', 1, '188');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '1', 0, '2017-03-04', '10:56:30', '2017-03-04', 1, '188');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '2478', 1, '2017-03-03', '11:57:49', '2017-03-04', 1, '0123');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '0127', 0, '2017-03-04', '11:40:17', '2017-03-04', 1, '0123');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '00005', 0, '2017-03-04', '11:56:14', '2017-03-04', 1, '0123');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '00006', 0, '2017-03-04', '11:56:14', '2017-03-04', 1, '0123');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (3455, 'dsfas', 1, '2017-03-05', '09:07:14', '2017-03-06', 1, '37');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1, 29, '1', '1', '2017-03-03', 1, 'JH', 'admin', '1', 'SF', '110108199302200028', '11', '18813008756', 'clj@163.com', '1', '1', NULL, '1', '1', '1', '1', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (9233, 4, '2017-02-23', '14:14:38', '2017-03-04', 1, 'CS', '188', '00', 'JR', '110108199302200029', '12', '18813029876', '', '0', '0', NULL, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1200, 5, '2017-02-21', '10:38:20', '2017-02-23', 1, 'JH', '1200', '贺志超', 'JR', '1102261990', '1', '13426316790', '11@qq.com', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (88888, 6, '2017-02-16', '14:32:25', '2017-02-27', 1, 'JH', '88885', 'clj', 'JR', '110108199302209877', '1', '18813009867', '', '1', '1', NULL, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (12, 1, '2017-03-03', '00:08:58', '2017-03-03', 1200, 'CS', 'zhangkuoxing', '张阔兴', 'SF', '360429198509259879', '2', '13810954789', '', '0', '0', 1, '1', NULL, NULL, '', 'N');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (123, 4, '2017-03-02', '21:20:02', '2017-03-04', 1, 'CS', '0123', '天塔', 'SF', '520121199412123411', '0203', '18515658094', '', '0', '0', 1, '1', NULL, NULL, '', 'N');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (3455, 7, '2017-03-03', '17:51:24', '2017-03-06', 1, 'CS', '37', '陈俐婧', 'JR', '110108199302200028', '1', '18813005710', '', '1', '1', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (127, 3, '2017-03-03', '00:01:41', '2017-03-06', 1, 'CS', '0127', '常小飞', 'SF', '140321198705050311', '1', '18611232030', '', '0', '0', 1, '1', NULL, NULL, '', 'N');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (1, 'cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://localhost:3000', 'userinfo', NULL, NULL, NULL, NULL, 'cs-prj', 'http://localhost:3000', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (2, 'cb-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://localhost:3000', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://localhost:3000', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (3, 'cc-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://localhost:3000', 'userinfo', NULL, NULL, NULL, NULL, 'cc-prj', 'http://localhost:3000', 'userinfo');

ALTER TABLE ONLY cs_di_c
    ADD CONSTRAINT cs_di_c_pkey PRIMARY KEY (di_ki_id, di_cd);
ALTER TABLE ONLY cu_icon_s
    ADD CONSTRAINT cu_icon_s_pkey PRIMARY KEY (icon_no);
ALTER TABLE ONLY cu_us_post_s
    ADD CONSTRAINT cu_us_post_s_pkey PRIMARY KEY (us_id, post_no);
ALTER TABLE ONLY oauth_clientinfo
    ADD CONSTRAINT oauth_clientinfo_pkey PRIMARY KEY (id);
ALTER TABLE ONLY cu_br_s
    ADD CONSTRAINT pk_cu_br_s PRIMARY KEY (br_no);
ALTER TABLE ONLY cu_post_s
    ADD CONSTRAINT pk_cu_post_s PRIMARY KEY (post_no);
ALTER TABLE ONLY cu_res_act_s
    ADD CONSTRAINT pk_cu_res_act_s PRIMARY KEY (res_no, res_act_cd);
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
ALTER TABLE ONLY cu_us_login_l
    ADD CONSTRAINT pk_cu_us_login_l PRIMARY KEY (id);
ALTER TABLE ONLY cu_us_login_s
    ADD CONSTRAINT pk_cu_us_login_s PRIMARY KEY (us_id);
ALTER TABLE ONLY cu_us_ro_s
    ADD CONSTRAINT pk_cu_us_ro_s PRIMARY KEY (us_id, ro_no);
ALTER TABLE ONLY cu_us_s
    ADD CONSTRAINT pk_cu_us_s PRIMARY KEY (id);
CREATE UNIQUE INDEX cs_di_c_pk ON cs_di_c USING btree (di_ki_id, di_cd);
CREATE UNIQUE INDEX cu_br_s_pk ON cu_br_s USING btree (br_no);
CREATE UNIQUE INDEX cu_post_s_pk ON cu_post_s USING btree (post_no);
CREATE UNIQUE INDEX cu_res_act_s_pk ON cu_res_act_s USING btree (res_no, res_act_cd);
CREATE UNIQUE INDEX cu_res_s_pk ON cu_res_s USING btree (res_no);
CREATE UNIQUE INDEX cu_ro_ri_s_pk ON cu_ro_ri_s USING btree (ro_no, res_no, res_act_cd);
CREATE UNIQUE INDEX cu_ro_s_pk ON cu_ro_s USING btree (ro_no);
CREATE UNIQUE INDEX cu_sy_c_pk ON cu_sy_c USING btree (sy_cd);
CREATE UNIQUE INDEX cu_us_c_pk ON cu_us_c USING btree (id);
CREATE UNIQUE INDEX cu_us_ch_pwd_l_pk ON cu_us_ch_pwd_l USING btree (id);
CREATE UNIQUE INDEX cu_us_fav_res_s_pk ON cu_us_fav_res_s USING btree (res_no, us_id);
CREATE UNIQUE INDEX cu_us_hol_l_pk ON cu_us_hol_l USING btree (tr);
CREATE UNIQUE INDEX cu_us_login_l_pk ON cu_us_login_l USING btree (id);
CREATE UNIQUE INDEX cu_us_login_s_pk ON cu_us_login_s USING btree (us_id);
CREATE UNIQUE INDEX cu_us_ro_s_pk ON cu_us_ro_s USING btree (us_id, ro_no);
CREATE UNIQUE INDEX cu_us_s_pk ON cu_us_s USING btree (id);
ALTER TABLE ONLY cu_us_post_s
    ADD CONSTRAINT fk24ouf533dhu589lf6g7ulftdv FOREIGN KEY (post_no) REFERENCES cu_post_s(post_no);
ALTER TABLE ONLY cu_res_s
    ADD CONSTRAINT fk90v67qliiscnk2e0abecp6yen FOREIGN KEY (res_sy_cd) REFERENCES cu_sy_c(sy_cd);
ALTER TABLE ONLY cu_us_ro_s
    ADD CONSTRAINT fkf3bnyk4ukwsfvrvkxwecoknug FOREIGN KEY (us_id) REFERENCES cu_us_s(id);
ALTER TABLE ONLY cu_us_s
    ADD CONSTRAINT fki8lqlomql8nxnef29awfbdlxe FOREIGN KEY (br_no) REFERENCES cu_br_s(br_no);
ALTER TABLE ONLY cu_us_ro_s
    ADD CONSTRAINT fkjdra8gfgt6btfirlww3m69tg6 FOREIGN KEY (ro_no) REFERENCES cu_ro_s(ro_no);
ALTER TABLE ONLY cu_res_s
    ADD CONSTRAINT fkkiv4q5k3j6lccknaj7xk24glo FOREIGN KEY (res_icon_no) REFERENCES cu_icon_s(icon_no);
ALTER TABLE ONLY cu_br_s
    ADD CONSTRAINT fkm13qoh5xw1ma4demkkci0lojy FOREIGN KEY (prev_br_no) REFERENCES cu_br_s(br_no);
ALTER TABLE ONLY cu_res_s
    ADD CONSTRAINT fkpjkhak7g1qi67y8ukoif11hoo FOREIGN KEY (fa_res_no) REFERENCES cu_res_s(res_no);
ALTER TABLE ONLY cu_us_post_s
    ADD CONSTRAINT fkq3edifmwo2sl2y0pcb7p7f3ef FOREIGN KEY (us_id) REFERENCES cu_us_s(id);
ALTER TABLE ONLY cu_us_s
    ADD CONSTRAINT fktc6nbkt2l9nfwky931fuqlt6t FOREIGN KEY (fa_exe_us_id) REFERENCES cu_us_s(id);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cu TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cu TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cu TO zkbc;
