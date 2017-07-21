DROP TABLE IF EXISTS cu_us_s;
DROP TABLE IF EXISTS cu_us_ro_s;
DROP TABLE IF EXISTS cu_us_post_s;
DROP TABLE IF EXISTS cu_us_login_s;
DROP TABLE IF EXISTS cu_us_login_l;
DROP TABLE IF EXISTS cu_us_hol_l;
DROP TABLE IF EXISTS cu_us_fav_res_s;
DROP TABLE IF EXISTS cu_us_ch_pwd_l;
DROP TABLE IF EXISTS cu_us_c;
DROP TABLE IF EXISTS cu_sy_c;
DROP TABLE IF EXISTS cu_ro_s;
DROP TABLE IF EXISTS cu_ro_ri_s;
DROP TABLE IF EXISTS cu_res_s;
DROP TABLE IF EXISTS cu_res_act_s;
DROP TABLE IF EXISTS cu_post_s;
DROP TABLE IF EXISTS cu_icon_s;
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
CREATE TABLE cu_us_post_s (
    us_id id,
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
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('11', 1, '2017-02-13', '16:45:9', '2017-02-16', 1, '用款申请', 'JH', '11', '', '', NULL, 1, NULL, 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('3002', 0, '2017-02-20', '15:59:23', '2017-02-20', 1, '产品', 'JH', '3002', '赵亚', '18900010002', NULL, 1, NULL, 'BJ', 'BJ', '产品部主管');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('5555', 4, '2017-02-10', '16:25:0', '2017-02-20', 1, '放款审查', 'JH', '5555', '11', '18813009876', NULL, 1, NULL, 'BJ', 'BJ', '555');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('66', 6, '2017-02-15', '18:55:47', '2017-02-16', 1, '电话回访', 'JH', '66', '', '', NULL, 2, '1', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('5555554', 0, '2017-02-16', '20:49:45', '2017-02-16', 1, '放款', 'JH', '5555554', '5', '13426316790', NULL, 2, '1', 'BJ', 'BJ', '5');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('33333', 0, '2017-02-20', '16:55:11', '2017-02-20', 1, 'zs', 'JH', '33333', '5555', '18813009876', NULL, 2, '1', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('2', 2, '2017-02-13', '16:37:2', '2017-02-21', 1, '贷款申请详情录入', 'JH', '2', '', '', NULL, 2, '1', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('adasdsa ', 0, '2017-02-20', '15:50:54', '2017-02-20', 1, 'adsadsa', 'SX', 'adasdsa ', 'adsadsa', '18464664444', NULL, 1, NULL, 'BJ', 'BJ', 'adsadsadada');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('443', 2, '2017-02-14', '15:12:50', '2017-02-14', 1, '放款', 'JH', '443', '44', '33333333', NULL, 1, NULL, 'BJ', 'BJ', '33');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('2001', 2, '2017-02-20', '15:46:45', '2017-02-20', 1, '合同签订', 'JH', '2001', '张欣', '18900010001', NULL, 1, NULL, 'BJ', 'BJ', '运营部主管');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('01', 0, '2017-02-24', '15:35:06', '2017-02-24', 1, '一级', 'CS', '01', '', '', NULL, 2, '12', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('12', 4, '2017-02-16', '14:43:36', '2017-02-24', 1, 'zscs01', 'JH', '12', 'zscs', '13000000015', NULL, 2, '443', 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('1', 8, '1', '1', '2017-02-21', 1, 'zscs01', 'JH', '1', '1', '1', '1', 1, NULL, '1', '1', '1');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('dfs', 0, '2017-02-21', '10:52:29', '2017-02-21', 1, 'adfa', 'JH', 'dfs', '', '18813002786', NULL, 1, NULL, 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('555444', 0, '2017-02-22', '11:28:25', '2017-02-22', 1, '55544', 'JH', '555444', '', '', NULL, 1, NULL, 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('123', 0, '2017-02-21', '17:20:33', '2017-02-21', 12341, '运营3', 'JH', '123', '', '', NULL, 1, NULL, 'BJ', 'BJ', '');
INSERT INTO cu_br_s (br_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, br_na, st, br_abbr_no, con_na, con_tel_no, post_no, br_lev_qt, prev_br_no, prov_cd, city_cd, co) VALUES ('45245', 2, '2017-02-14', '9:55:44', '2017-02-15', 1, '运营3', 'JH', '45245', '4142', '18813008670', NULL, 1, NULL, 'BJ', 'BJ', '2424');
INSERT INTO cu_icon_s (icon_no, co, cr_dt, cr_tm, icon_ad_ca, icon_na, la_up_dt, la_up_us_id, ve) VALUES ('M3461579962854384', NULL, '2017-02-23', '20:14:55', '/var/zkbc/fs/default/7749198e-f9b5-4547-aa42-59536d91e5c7.jpg', '7749198e-f9b5-4547-aa42-59536d91e5c7.jpg', '2017-02-22', 1, 1);
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('111', 0, '2017-02-04', '17:1:4', '2017-02-04', 1, '1', 'CS', '1', '1', '1', '11');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('234', 0, '2017-02-10', '11:15:36', '2017-02-10', 1, '234', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('dfad', 0, '2017-02-12', '11:7:22', '2017-02-12', 1, 'ad', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('123', 0, '2017-02-13', '10:56:49', '2017-02-13', 1, '123', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('122', 0, '2017-02-13', '10:57:15', '2017-02-13', 1, '122', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('clj565', 0, '2017-02-13', '10:58:20', '2017-02-13', 1, 'cljf344', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('888', 0, '2017-02-13', '10:59:23', '2017-02-13', 1, '888', 'CS', '0', '0', '0', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('dafasd', 0, '2017-02-13', '10:59:38', '2017-02-13', 1, 'adfa', 'CS', '1', '0', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('adsfas', 0, '2017-02-13', '10:59:51', '2017-02-13', 1, '1234', 'CS', '0', '1', '0', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('%^&*()', 0, '2017-02-13', '11:0:8', '2017-02-13', 1, '^&*()', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('^*()', 0, '2017-02-13', '11:0:28', '2017-02-13', 1, '&*123', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('1202632', 6, '2017-02-08', '16:24:19', '2017-02-13', 1, '2', 'JH', '1', '1', '1', 'vcfdvfvf');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('冲', 0, '2017-02-15', '18:40:17', '2017-02-15', 1, '测力计', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('222', 2, '2017-02-08', '18:56:8', '2017-02-15', 1, 'cj', 'SX', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('clj', 2, '2017-02-09', '10:45:27', '2017-02-15', 1, '11', 'SX', '1', '0', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('1234', 0, '2017-02-16', '14:55:54', '2017-02-16', 1, '5555', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('3898', 0, '2017-02-16', '14:56:10', '2017-02-16', 1, '3898', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('sadf', 1, '2017-02-12', '11:7:39', '2017-02-16', 1, '321', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('df', 1, '2017-02-16', '9:52:35', '2017-02-16', 1, 'bb', 'CS', '1', '1', '0', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('1111', 0, '2017-02-16', '15:31:38', '2017-02-16', 1, 'www', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES (' gfa', 0, '2017-02-16', '18:43:26', '2017-02-16', 1, 'sfgsd', 'CS', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('4001', 4, '2017-02-20', '16:6:43', '2017-02-20', 1, '运营', 'JH', '1', '1', '1', '管理岗');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('11111', 1, '2017-02-13', '10:58:0', '2017-02-22', 1, '11111', 'JH', '1', '1', '1', '');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('1111111', 7, '2017-02-13', '16:6:22', '2017-02-22', 1, '1111', 'JH', '0', '0', '0', 'yyy');
INSERT INTO cu_post_s (post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, post_na, st, sto_use_yn, au_post_yn, co_post_yn, co) VALUES ('01', 1, '2017-02-24', '15:35:57', '2017-02-24', 1, '一级审批', 'JH', '1', '1', '1', '');
INSERT INTO cu_res_act_s (res_no, res_act_cd, ve, cr_dt, la_up_dt, la_up_us_id, url) VALUES ('5', 'CS', 1, '2017-11-11', '2018-11-11', 1, 'aaa.aa');
INSERT INTO cu_res_act_s (res_no, res_act_cd, ve, cr_dt, la_up_dt, la_up_us_id, url) VALUES ('1', 'CS', 1, '2017-11-11', '2018-11-11', 1, 'aaa.aa');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('2', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '我的任务', '3', '1', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('15', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '用款申请', '3', '9', '/cb/spent-loan/spent-loan-list.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('16', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '电话回访', '3', '9', '/cb/call-return-visit/return-visit-list.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('1', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '消费金融', '1', NULL, '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('29', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '合作方管理', '2', '1', '', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('33', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '产品设置', '2', '102', '/cs/product-set/product-set.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('35', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '打印模板管理', '2', '102', '/cs/printtemplate/index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('37', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '还款方式', '2', '102', '/cs/repay-mode/repay-mode.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('38', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '费用计算', '2', '102', '/cs/cost-account/cost-account.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('39', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '费用子信息', '2', '102', '/cs/cost-subInfor/cost-subInfor.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('40', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '佣金配置', '2', '102', '/cs/brokerage-config/brokerage-config-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('41', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '促销配置', '2', '102', '/cs/promotion-allocation/promotion-allocation.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('13', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '二级审批', '3', '9', '/cb/two-levels-approval/two-levels-approval-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('42', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '额度审批', '2', '102', '/cs/limit-examine/limit-examine-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('43', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '电核设置', '2', '102', '/cs/nuclear-set/nuclear-set.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('14', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '合同签订', '3', '9', '/cb/contract/contract-list.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('17', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '上级电话回访', '3', '9', '/cb/superior-telephone-return/superior-telephone-return-list.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('26', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '合作方黑名单', '2', '125', '/cs/name-ist-management/partner-black-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('10', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '贷款申请简要录入', '3', '9', '/cb/loan-application/brief-entry.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('21', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '个人客户管理', '2', '20', '/cs/personal-customer/personal-customer.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('31', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '门店管理', '2', '29', '/cs/store/store-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('3', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '待办任务', '3', '2', '/cb/mytask-list/mytask-waiting-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('24', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '个人白名单', '2', '22', '/cs/name-ist-management/person-white-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('45', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '工单配置', '2', '102', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('46', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '消息中心', '2', '102', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('25', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '个人灰名单', '2', '22', '/cs/name-ist-management/person-gray-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('23', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '个人黑名单', '2', '22', '/cs/name-ist-management/person-black-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('18', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '放款审查', '3', '9', '/cb/loan-review/loan-review-list.html', 'M3461579962854384', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('121', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '贷款业务', '4', '8', '', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('125', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '黑白名单管理', '3', '29', '', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('32', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '系统管理', '2', '1', '', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('9', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '贷款申请处理', '3', '8', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('27', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '合作方白名单', '2', '125', '/cs/name-ist-management/partner-white-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('22', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '黑白名单管理', '2', '20', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('28', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '合作方灰名单', '2', '125', '/cs/name-ist-management/partner-gray-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('5', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '已结任务', '3', '2', '/cb/mytask-list/mytask-end-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('8', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '业务办理', '3', '1', '', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('44', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '电核比例', '2', '102', '/cs/tel-check-percent/check-percent-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('20', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '客户管理', '2', '1', '', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('6', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '取消任务', '3', '2', '/cb/mytask-list/mytask-cancle-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('7', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '拒绝任务', '3', '2', '/cb/mytask-list/mytask-refuse-list.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('12', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '电核/初核', '3', '9', '/cb/nucleus-nucleus/nucleus-nucleus-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('102', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '基础参数配置', '2', '32', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('52', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '交易码配置管理', '4', '47', '/params/partrcfg/parTrCfgIndex.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('53', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '科目信息配置表管理', '4', '47', '/system/syaccfg/syAcCfgIndex.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('87', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '岗位管理', '5', '57', '/cu/post-management/post-management-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('85', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '机构管理', '5', '57', '/cu/organization-management/organization-management-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('89', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '角色管理', '5', '57', '/cu/role-management/role-management-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('73', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '财务信息', '4', '1', '', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('76', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '日终批处理管理', '4', '1', '', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('80', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '个人设置', '5', '1', '', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('91', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '用户管理', '5', '57', '/cu/user-management/user-management-list.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('93', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '菜单管理', '5', '57', '/cu/menu-management/menu-management.html', 'M3461579962854384', 4, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('101', 2, '2017-02-21', '15:5:30', '2017-02-20', 1, '流程管理', '6', '200', '/activiti/index', 'M3461579962854384', 9, '0', '99');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('47', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '核心业务参数配置', '4', '32', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('57', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '系统参数配置', '4', '1', '', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('77', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '批处理任务管理', '4', '76', '/batch/batchtaskinfo/batchtaskinfo-index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('49', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '还款方式配置表管理', '4', '47', '/params/parpaycfg/parPayCfgIndex.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('74', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '会计分录信息管理', '4', '73', '/account/lnactentl/lnactentl-index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('48', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '货币信息管理', '4', '47', '/params/parcurtyp/parCurTypIndex.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('50', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '还款顺序管理', '4', '47', '/params/parpayord/parPayOrdIndex.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('51', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '基准利率分类管理', '4', '47', '/params/parrattyp/parRatTypIndex.html', 'M3461579962854384', 3, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('200', 1, '2017-02-14', '15:5:30', '2017-02-30', 1, '工作流引擎', '6', '1', '', 'M3461579962854384', 10, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('78', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '批处理执行计划', '4', '76', '/batch/batchtaskexeplan/batchtaskexeplan-index.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('79', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '系统批处理执行历史', '4', '76', '/batch/batchhis/batchhis-index.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('75', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '分户账查询', '4', '73', '/account/lnactldgl/lnactldgl-index.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('30', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '合作方管理', '2', '29', '/cs/business-partner/partner-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('116', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '还款账号变更申请', '4', '121', '/loan/lnacchg/lnacchg-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('34', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '打印模板集管理', '2', '102', '/cs/printtemplateset/index.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('36', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '材料设置', '2', '102', '/cs/material-setting/material-setting-list.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('119', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '存款账户信息查询', '4', '121', '/loan/lndepinf/lndepinf-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('120', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '内部存款账户维护', '4', '121', '/loan/lndeptrdinf/lndeptrdinf-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('118', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '贷款展期申请', '4', '121', '/loan/lnexdapp/lnexdapp-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('81', 3, '2017-02-14', '15:6:31', '2017-02-16', 1, '个人信息维护', '5', '80', '/cu/personal-settings/personal-info-maintenance.html', 'M3461579962854384', 0, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('54', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '系统基本信息表管理', '4', '47', '/system/sybainf/syBaInf-look.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('55', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '流水信息表管理', '4', '47', '/params/parseqinf/parSeqInfIndex.html', 'M3461579962854384', 7, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('112', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '主动还款申请', '4', '121', '/loan/lnfeeinf/lnfeeinf-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('113', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '息费减免申请', '4', '121', '/loan/lnfeeinft/lnfeeinft-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('56', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '字典信息表管理', '4', '47', '/params/csdicfg/csdicfg-index.html', 'M3461579962854384', 8, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('4', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '已办任务', '3', '2', '/cb/mytask-list/mytask-finish-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('11', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '贷款申请详情录入', '3', '9', '/cb/loan-application/detail-list.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('111', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '放款成功查询', '4', '121', '/loan/lnloinf/lnloinf-list.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('110', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '贷款发放', '4', '121', '/loan/lnloinft/lnloinft-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('117', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '贷款还款方式申请', '4', '121', '/loan/lnpaychgt/lnpaychgt-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('114', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '利率变更表申请', '4', '121', '/loan/lnratchg/lnratchg-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('115', 3, '2017-02-14', '15:6:31', '2017-02-20', 1, '交易冲正申请', '4', '121', '/loan/lnredreml/lnredreml-index.html', 'M3461579962854384', 6, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('82', 5, '2017-02-14', '15:6:31', '2017-02-16', 1, '修改登录密码', '5', '80', '/cu/personal-settings/update-password.html', 'M3461579962854384', 1, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('83', 5, '2017-02-14', '15:6:31', '2017-02-16', 1, '请假登记', '5', '80', '/cu/personal-settings/leave-registration-list.html', 'M3461579962854384', 2, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('95', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '权限管理', '5', '57', '/cu/auth-management/auth-management.html', 'M3461579962854384', 5, '0', '222');
INSERT INTO cu_res_s (res_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, res_na, res_sy_cd, fa_res_no, res_url_ca, res_icon_no, disp_or, page_mark_yn, co) VALUES ('99', 2, '2017-02-14', '15:6:31', '2017-02-15', 1, '菜单图标管理', '5', '57', '/cu/menu-picture/menu-picture-list.html', 'M3461579962854384', 7, '0', '222');
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
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '8', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '121', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '116', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '119', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '120', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '118', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '112', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '113', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '111', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '110', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '117', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '114', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '115', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '55', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('1', '56', 'FW', 0, '2017-02-23', '16:30:36', '2017-02-23', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '9', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '15', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
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
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '16', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '13', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '14', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '17', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '10', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '18', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '12', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '11', 'FW', 0, '2017-02-24', '14:39:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '20', 'FW', 0, '2017-02-24', '14:39:58', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '21', 'FW', 0, '2017-02-24', '14:39:58', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '22', 'FW', 0, '2017-02-24', '14:39:58', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '24', 'FW', 0, '2017-02-24', '14:39:58', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '25', 'FW', 0, '2017-02-24', '14:39:58', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '23', 'FW', 0, '2017-02-24', '14:39:58', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '29', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '31', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '125', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '26', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '27', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '28', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '30', 'FW', 0, '2017-02-24', '14:40:03', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '81', 'FW', 0, '2017-02-24', '14:56:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '80', 'FW', 0, '2017-02-24', '14:56:39', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '82', 'FW', 0, '2017-02-24', '14:56:39', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('456', '83', 'FW', 0, '2017-02-24', '14:56:39', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '80', 'FW', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '80', 'CX', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '80', 'SC', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '80', 'XG', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '80', 'XZ', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '81', 'FW', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '81', 'CX', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '81', 'SC', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '81', 'XG', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '81', 'XZ', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '82', 'FW', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '82', 'CX', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '82', 'SC', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '82', 'XG', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '82', 'XZ', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '83', 'FW', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '83', 'CX', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '83', 'SC', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '83', 'XG', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '83', 'XZ', 0, '2017-02-24', '15:37:44', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '76', 'FW', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '76', 'CX', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '76', 'SC', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '76', 'XG', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '76', 'XZ', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '77', 'FW', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '77', 'CX', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '77', 'SC', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '77', 'XG', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '77', 'XZ', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '78', 'FW', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '78', 'CX', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '78', 'SC', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '78', 'XG', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '78', 'XZ', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '79', 'FW', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '79', 'CX', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '79', 'SC', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '79', 'XG', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '79', 'XZ', 0, '2017-02-24', '15:37:56', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '73', 'FW', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '73', 'CX', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '73', 'SC', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '73', 'XG', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '73', 'XZ', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '74', 'FW', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '74', 'CX', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '74', 'SC', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '74', 'XG', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '74', 'XZ', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '75', 'FW', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '75', 'SC', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '75', 'XG', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '75', 'XZ', 0, '2017-02-24', '15:38:05', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '32', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '32', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '32', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '32', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '32', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '102', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '102', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '102', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '102', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '102', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '33', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '33', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '33', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '33', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '33', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '35', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '35', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '35', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '35', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '35', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '37', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '37', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '37', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '37', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '37', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '38', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '38', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '38', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '38', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '38', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '39', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '39', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '39', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '39', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '39', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '40', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '40', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '40', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '40', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '40', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '41', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '41', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '41', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '41', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '41', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '42', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '42', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '42', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '42', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '42', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '43', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '43', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '43', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '43', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '43', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '45', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '45', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '45', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '45', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '45', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '46', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '46', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '46', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '46', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '46', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '44', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '44', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '44', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '44', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '44', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '34', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '34', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '34', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '34', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '34', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '36', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '36', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '36', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '36', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '36', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '47', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '47', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '47', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '47', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '47', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '52', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '52', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '52', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '52', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '52', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '53', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '53', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '53', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '53', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '53', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '49', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '49', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '49', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '49', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '49', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '48', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '48', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '48', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '48', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '48', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '50', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '50', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '50', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '50', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '50', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '51', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '51', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '51', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '51', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '51', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '54', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '54', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '54', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '54', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '54', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '55', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '55', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '55', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '55', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '55', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '56', 'FW', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '56', 'CX', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '56', 'SC', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '56', 'XG', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '56', 'XZ', 0, '2017-02-24', '15:38:12', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '29', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '29', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '29', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '29', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '29', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '31', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '31', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '31', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '31', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '31', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '125', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '125', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '125', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '125', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '125', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '26', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '26', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '26', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '26', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '26', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '27', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '27', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '27', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '27', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '27', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '28', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '28', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '28', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '28', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '28', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '30', 'FW', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '30', 'CX', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '30', 'SC', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '30', 'XG', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '30', 'XZ', 0, '2017-02-24', '15:38:19', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '20', 'FW', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '20', 'CX', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '20', 'SC', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '20', 'XG', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '20', 'XZ', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '21', 'FW', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '21', 'CX', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '21', 'SC', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '21', 'XG', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '21', 'XZ', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '22', 'FW', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '22', 'CX', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '22', 'SC', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '22', 'XG', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '22', 'XZ', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '24', 'FW', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '24', 'CX', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '24', 'SC', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '24', 'XG', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '24', 'XZ', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '25', 'FW', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '25', 'CX', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '25', 'SC', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '25', 'XG', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '25', 'XZ', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '23', 'FW', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '23', 'CX', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '23', 'SC', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '23', 'XG', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '23', 'XZ', 0, '2017-02-24', '15:38:26', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '8', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '8', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '8', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '8', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '8', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '121', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '121', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '121', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '121', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '121', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '116', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '116', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '116', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '116', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '116', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '119', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '119', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '119', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '119', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '119', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '120', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '120', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '120', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '120', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '120', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '118', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '118', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '118', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '118', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '118', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '112', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '112', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '112', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '112', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '112', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '113', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '113', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '113', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '113', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '113', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '111', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '111', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '111', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '111', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '111', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '110', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '110', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '110', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '110', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '110', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '117', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '117', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '117', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '117', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '117', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '114', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '114', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '114', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '114', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '114', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '115', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '115', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '115', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '115', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '115', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '9', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '9', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '9', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '9', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '9', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '15', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '15', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '15', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '15', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '15', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '16', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '16', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '16', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '16', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '16', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '13', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '13', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '13', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '13', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '13', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '14', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '14', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '14', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '14', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '14', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '17', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '17', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '17', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '17', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '17', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '10', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '10', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '10', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '10', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '10', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '18', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '18', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '18', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '18', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '18', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '12', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '12', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '12', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '12', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '12', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '11', 'FW', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '11', 'CX', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '11', 'SC', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '11', 'XG', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '11', 'XZ', 0, '2017-02-24', '15:38:34', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '57', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '57', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '57', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '57', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '57', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '87', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '87', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '87', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '87', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '87', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '85', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '85', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '85', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '85', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '85', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '89', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '89', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '89', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '89', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '89', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '91', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '91', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '91', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '91', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '91', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '93', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '93', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '93', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '93', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '93', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '95', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '95', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '95', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '95', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '95', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '99', 'FW', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '99', 'CX', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '99', 'SC', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '99', 'XG', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '99', 'XZ', 0, '2017-02-24', '15:38:43', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '2', 'FW', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '2', 'CX', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '2', 'SC', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '2', 'XG', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '2', 'XZ', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '3', 'FW', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '3', 'CX', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '3', 'SC', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '3', 'XG', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '3', 'XZ', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '5', 'FW', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '5', 'CX', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '5', 'SC', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '5', 'XG', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '5', 'XZ', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '6', 'FW', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '6', 'CX', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '6', 'SC', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '6', 'XG', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '6', 'XZ', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '7', 'FW', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '7', 'CX', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '7', 'SC', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '7', 'XG', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '7', 'XZ', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '4', 'FW', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '4', 'CX', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '4', 'SC', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '4', 'XG', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '4', 'XZ', 0, '2017-02-24', '15:38:51', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '200', 'FW', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '200', 'CX', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '200', 'SC', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '200', 'XG', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '200', 'XZ', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '101', 'FW', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '101', 'CX', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '101', 'SC', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '101', 'XG', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '101', 'XZ', 0, '2017-02-24', '15:39:01', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('01', '75', 'CX', 0, '2017-02-24', '16:19:9', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('5555', '75', 'CX', 0, '2017-02-24', '16:22:04', '2017-02-24', 1);
INSERT INTO cu_ro_ri_s (ro_no, res_no, res_act_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id) VALUES ('5555', '75', 'SC', 0, '2017-02-24', '16:22:04', '2017-02-24', 1);
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('55555', 0, '2017-02-13', '18:59:37', '2017-02-13', 1, 'CS', '11', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('234', 3, '2017-02-08', '18:20:29', '2017-02-15', 1, 'JH', '人员4', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('555', 1, '2017-02-13', '18:59:16', '2017-02-15', 1, 'SX', '222', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('dfd', 0, '2017-02-16', '17:33:8', '2017-02-16', 1, 'CS', 'dsf', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('chu', 0, '2017-02-16', '17:33:19', '2017-02-16', 1, 'CS', 'chu', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('456', 5, '2017-02-08', '18:27:48', '2017-02-16', 1, 'JH', '人员2', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('15615', 6, '2017-02-08', '16:25:22', '2017-02-16', 1, 'JH', '人员3', '1', 'cfcfvc');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('clj', 1, '2017-02-16', '15:0:16', '2017-02-16', 1, 'SX', 'cljj', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('adfa', 3, '2017-02-20', '15:26:19', '2017-02-20', 1, 'SX', '小发发', '1', 'adf');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('5001', 1, '2017-02-20', '16:23:51', '2017-02-20', 1, 'JH', '运营专员', '1', '运营专员岗');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('23', 2, '2017-02-09', '16:11:48', '2017-02-21', 1, 'SX', '人员5', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('99999', 0, '2017-02-22', '20:56:13', '2017-02-22', 1, 'CS', '9999', '1', '99');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('5888', 0, '2017-02-23', '21:44:16', '2017-02-23', 1, 'CS', '5888', '1', '5888');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('5555', 1, '2017-02-08', '18:40:12', '2017-02-23', 1, 'CS', '555', '1', '5558888');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('01', 1, '2017-02-24', '15:36:45', '2017-02-24', 1, 'JH', '一级审批', '1', '');
INSERT INTO cu_ro_s (ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, ro_na, sto_use_yn, co) VALUES ('1', 1, '2017-02-16', '15:0:16', '2017-02-16', 1, 'JH', 'ADMIN', '1', '');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('1', 1, '1', '1', '1', 1, '1', '1', '1');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('2', 1, '1', '1', '1', 1, '业务支撑系统', '1', 'http://124.193.90.196:8000');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('3', 1, '1', '1', '1', 1, '业务系统', '1', 'http://124.193.90.196:8001');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('5', 1, '1', '1', '1', 1, '统一用户', '1', 'http://124.193.90.196:8002');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('6', 1, '1', '1', '1', 1, '工作流引擎', '1', 'http://124.193.90.196:8001');
INSERT INTO cu_sy_c (sy_cd, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, sy_na, url, dom_na) VALUES ('4', 1, '1', '1', '1', 1, '核心系统', '1', '5');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2491203140131596, 1, 2, '2017-02-14', '16:27:24', '2017-02-14', 1, '2017-02-14', '2017-02-21', '2017-03-23', '2', '', '4444', 'xfjr', '2491203140131596', '阿弥佗佛', '14:17:4');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2494808540653470, 1, 3, '2017-02-14', '17:27:30', '2017-02-14', 1, '2017-02-14', '2017-02-14', '2017-02-14', '1', '', '2', 'xfjr', '2494808540653470', 'hello world', '14:17:57');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2491179584936273, 1, 4, '2017-02-14', '16:27:1', '2017-02-14', 1, '2017-02-14', '2017-02-22', '2017-02-22', '2', '55', '4444', 'xfjr', '2491179584936273', '%%%%%%#$', '14:18:29');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2660762499956170, 1, 2, '2017-02-16', '15:33:24', '2017-02-16', 1, '2017-02-16', '2017-02-16', '2017-02-17', '3', '', 'asdfas', 'xfjr', '2660762499956170', '20170216', '14:18:43');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3173952370589411, 1, 3, '2017-02-22', '14:6:33', '2017-02-22', 1, '2017-02-22', '2017-02-22', '2017-02-23', '4', '', '时代发生', 'xfjr', '3173952370589411', '2017-02-23', '17:59:21');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3287714142840355, 1, 1, '2017-02-23', '21:42:35', '2017-02-23', 1, '2017-02-23', '2017-02-28', '2017-03-07', '3', 'xx', 'x', 'xfjr', '3287714142840355', '2017-02-23', '21:43:7');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (3174651417907956, 1, 1, '2017-02-22', '14:18:13', '2017-02-22', 1, '2017-02-22', '2017-02-22', '2017-02-22', '3', '', '######', 'xfjr', '3174651417907956', '2017-02-24', '14:48:15');
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2660799492679266, 1, 0, '2017-02-16', '15:34:1', '2017-02-16', 1, '2017-02-16', '2017-02-16', '2017-03-22', '3', NULL, '0525', 'xfjr', '2660799492679266', NULL, NULL);
INSERT INTO cu_us_hol_l (tr, us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, ef_dt, hol_be_dt, hol_en_dt, hol_cd, co, hol_cau_ca, login_na, login_tr_id, wo_dt, wo_tm) VALUES (2660807451879809, 1, 1, '2017-02-16', '15:34:9', '2017-02-16', 1, '2017-02-16', '2017-02-17', '2017-03-18', '2', '', 'asdfasdfadsf', 'xfjr', '2660807451879809', '2017-02-1624', '15:34:28');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1987, 0, '2017-02-23', '20:17:23', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '1987');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (22333, 0, '2017-02-23', '20:48:22', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '22333');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (87465, 1, '2017-01-20', '1', '2017-01-20', 1, '1', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-01-20', '2017-01-20', 1, '2017-01-20', '1', '2017-01-20', '1', 'jylr');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1, 1, '2017-01-20', '1', '2017-01-20', 1, '1', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-01-20', '2017-01-20', 1, '2017-01-20', '1', '2017-01-20', '1', 'admin');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (888, 0, '2017-02-20', '17:38:35', '2017-02-20', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-20', '2017-02-20', 3, NULL, NULL, NULL, NULL, '1223');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (19905, 0, '2017-02-20', '18:22:4', '2017-02-20', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-20', '2017-02-20', 3, NULL, NULL, NULL, NULL, 'cjb');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (199055, 0, '2017-02-20', '18:27:16', '2017-02-20', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-20', '2017-02-20', 3, NULL, NULL, NULL, NULL, 'cjb');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (12341, 0, '2017-02-20', '19:11:30', '2017-02-20', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-20', '2017-02-20', 3, NULL, NULL, NULL, NULL, '12341');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1990, 0, '2017-02-20', '18:19:30', '2017-02-20', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-20', '2017-02-20', 3, NULL, NULL, NULL, NULL, 'flow');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1200, 0, '2017-02-21', '10:38:20', '2017-02-21', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-21', '2017-02-21', 3, NULL, NULL, NULL, NULL, '1200');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (777, 0, '2017-02-21', '11:55:4', '2017-02-21', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-21', '2017-02-21', 3, NULL, NULL, NULL, NULL, 'clj');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (234, 0, '2017-02-21', '15:57:44', '2017-02-21', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-21', '2017-02-21', 3, NULL, NULL, NULL, NULL, 'clj');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (24, 0, '2017-02-21', '17:16:17', '2017-02-21', 12341, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-21', '2017-02-21', 3, NULL, NULL, NULL, NULL, '243');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (242424, 0, '2017-02-21', '18:28:8', '2017-02-21', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-21', '2017-02-21', 3, NULL, NULL, NULL, NULL, '242424');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (7878, 0, '2017-02-22', '15:13:35', '2017-02-22', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-22', '2017-02-22', 3, NULL, NULL, NULL, NULL, '78787');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (5757, 0, '2017-02-22', '16:45:5', '2017-02-22', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-22', '2017-02-22', 3, NULL, NULL, NULL, NULL, '5757');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (8888, 0, '2017-02-22', '18:18:3', '2017-02-22', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-22', '2017-02-22', 3, NULL, NULL, NULL, NULL, 'clj');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (7, 0, '2017-02-22', '19:26:54', '2017-02-22', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-22', '2017-02-22', 3, NULL, NULL, NULL, NULL, '777');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (7999, 0, '2017-02-22', '19:56:43', '2017-02-22', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-22', '2017-02-22', 3, NULL, NULL, NULL, NULL, '7999');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (1003, 0, '2017-02-23', '10:20:51', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '1003');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (9099090, 0, '2017-02-23', '10:32:12', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '222');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (11, 0, '2017-02-23', '10:47:15', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '111');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (12355, 0, '2017-02-23', '11:10:23', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '122345');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (110, 0, '2017-02-23', '11:13:42', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '122345');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (9233, 0, '2017-02-23', '14:14:38', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '188');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (86539, 0, '2017-02-23', '16:08:28', '2017-02-23', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-23', '2017-02-23', 3, NULL, NULL, NULL, NULL, '1993');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (31111, 0, '2017-02-24', '09:25:52', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '18700');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (30201, 0, '2017-02-24', '10:36:43', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '96937');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (3466, 0, '2017-02-24', '11:08:33', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '3466');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (10001, 1, '2017-02-24', '13:55:01', '2017-02-24', 1, 'CS', '41684a9a0764bc78b405209280589f46cd13e83e', '1', 'cc531c83f19c4e4abb758feef1a02397', '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '827');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (9298, 0, '2017-02-24', '14:45:24', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '111');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (198765, 0, '2017-02-24', '14:50:23', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '111');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (12315, 1, '2017-02-24', '13:52:26', '2017-02-24', 1, 'CS', '6dbfd9480b4fda3f935ec35c8f6b019db9b3ecc7', '1', 'a8c6c8e0de154d6f8b189cd698d93ebf', '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '20');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (19209, 0, '2017-02-24', '15:32:04', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '246');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (18765, 0, '2017-02-24', '15:33:48', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '357');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (19345, 0, '2017-02-24', '15:50:46', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '468');
INSERT INTO cu_us_login_s (us_id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, pwd, pwd_ov_yn, pwd_salt, us_lock_yn, prev_ch_pwd_dt, next_ch_pwd_dt, login_err_qt, lock_dt, lock_tm, auto_unlock_dt, auto_unlock_tm, login_na) VALUES (192345, 0, '2017-02-24', '15:56:14', '2017-02-24', 1, 'CS', '1f82c942befda29b6ed487a51da199f78fce7f05', '1', NULL, '1', '2017-02-24', '2017-02-24', 3, NULL, NULL, NULL, NULL, '579');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (555555, '111', 0, '2017-02-09', '15:21:42', '2017-02-09', 1, '55');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (22333, '4001', 0, '2017-02-23', '20:48:22', '2017-02-23', 1, '22333');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1234, '222', 0, '2017-02-15', '11:45:42', '2017-02-15', 1, '44');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (455, '222', 0, '2017-02-15', '17:26:30', '2017-02-15', 1, 'cs-prj');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1, '222', 0, '2017-02-15', '17:27:4', '2017-02-15', 1, 'admin');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '222', 0, '2017-02-15', '19:51:15', '2017-02-15', 1, '1234');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (31111, '4001', 0, '2017-02-24', '09:25:52', '2017-02-24', 1, '18700');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (31111, '1111111', 0, '2017-02-24', '09:28:19', '2017-02-24', 1, '18700');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (31111, '11111', 0, '2017-02-24', '09:28:19', '2017-02-24', 1, '18700');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (30201, '1111111', 0, '2017-02-24', '10:36:43', '2017-02-24', 1, '96937');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (30201, '11111', 0, '2017-02-24', '10:36:43', '2017-02-24', 1, '96937');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1001, '4001', 0, '2017-02-20', '16:41:59', '2017-02-20', 1, '1001');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (888, '1111111', 0, '2017-02-20', '17:38:35', '2017-02-20', 1, '8888');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12355, '11111', 1, '2017-02-23', '21:41:03', '2017-02-24', 1, '122345');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12355, '4001', 1, '2017-02-23', '21:41:03', '2017-02-24', 1, '122345');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12355, '1202632', 1, '2017-02-23', '11:10:23', '2017-02-24', 1, '122345');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (3466, '4001', 0, '2017-02-24', '11:08:33', '2017-02-24', 1, '3466');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '1111111', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '11111', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '4001', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '1202632', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (10001, '4001', 0, '2017-02-24', '13:55:01', '2017-02-24', 1, '827');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9298, '1202632', 0, '2017-02-24', '14:45:25', '2017-02-24', 1, '111');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9298, '4001', 0, '2017-02-24', '14:45:25', '2017-02-24', 1, '111');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1933, '1202632', 1, '2017-02-20', '17:5:30', '2017-02-24', 1, '1933');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (777, '1202632', 1, '2017-02-21', '11:55:4', '2017-02-24', 1, '8788');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (198765, '1202632', 0, '2017-02-24', '14:50:23', '2017-02-24', 1, '111');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (88888, '1111111', 0, '2017-02-20', '18:13:19', '2017-02-20', 1, '8888');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1002, '4001', 0, '2017-02-20', '18:14:50', '2017-02-20', 1, '1002');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1990, '1202632', 0, '2017-02-20', '18:19:30', '2017-02-20', 1, '1990');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19905, '1202632', 0, '2017-02-20', '18:22:4', '2017-02-20', 1, '1990');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (199055, '1202632', 0, '2017-02-20', '18:27:16', '2017-02-20', 1, '1990');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (198765, '4001', 0, '2017-02-24', '14:50:23', '2017-02-24', 1, '111');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1200, '1202632', 0, '2017-02-21', '10:38:20', '2017-02-21', 1, '1200');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (87465, '1202632', 0, '2017-02-24', '15:08:48', '2017-02-24', 1, 'jylr');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (11, '4001', 1, '2017-02-23', '10:47:15', '2017-02-24', 1, '111');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (23232, '1202632', 0, '2017-02-21', '11:18:32', '2017-02-21', 1, '232323');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (33333, '1202632', 1, '2017-02-15', '19:13:3', '2017-02-24', 1, '333');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19209, '1202632', 0, '2017-02-24', '15:32:04', '2017-02-24', 1, '246');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19209, '4001', 0, '2017-02-24', '15:32:04', '2017-02-24', 1, '246');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (18765, '4001', 0, '2017-02-24', '15:33:48', '2017-02-24', 1, '357');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19930220, '1111111', 0, '2017-02-21', '11:42:1', '2017-02-21', 1, '888');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12341, '1202632', 0, '2017-02-21', '14:17:8', '2017-02-21', 1, '12341');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (18765, '1202632', 0, '2017-02-24', '15:33:48', '2017-02-24', 1, '357');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (121121, '1111111', 0, '2017-02-24', '15:41:26', '2017-02-24', 1, '111111');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (242424, '1111111', 0, '2017-02-21', '18:28:8', '2017-02-21', 1, '242424');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (24, '1202632', 0, '2017-02-22', '14:53:50', '2017-02-22', 234, '34');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (234, '1202632', 0, '2017-02-22', '14:55:3', '2017-02-22', 234, '243');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (7878, '1111111', 0, '2017-02-22', '15:13:35', '2017-02-22', 1, '78787');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (5757, '1111111', 0, '2017-02-22', '16:45:5', '2017-02-22', 1, '5757');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (8888, '1202632', 0, '2017-02-22', '18:18:3', '2017-02-22', 1, '888');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (7, '1111111', 0, '2017-02-22', '19:26:54', '2017-02-22', 1, '777');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19345, '4001', 0, '2017-02-24', '15:50:46', '2017-02-24', 1, '468');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (7999, '1111111', 0, '2017-02-22', '20:01:30', '2017-02-22', 1, '7999');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19345, '11111', 0, '2017-02-24', '15:50:46', '2017-02-24', 1, '468');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19345, '1202632', 0, '2017-02-24', '15:50:46', '2017-02-24', 1, '468');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1003, '4001', 0, '2017-02-23', '10:20:51', '2017-02-23', 1, '1003');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9099090, '1202632', 0, '2017-02-23', '10:32:12', '2017-02-23', 1, '222');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (110, '4001', 0, '2017-02-23', '11:13:42', '2017-02-23', 1, '122345');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (192345, '4001', 0, '2017-02-24', '15:56:14', '2017-02-24', 1, '579');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (192345, '1202632', 0, '2017-02-24', '15:56:14', '2017-02-24', 1, '579');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '4001', 0, '2017-02-23', '14:14:38', '2017-02-23', 1, '188');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (86539, '4001', 0, '2017-02-23', '16:08:28', '2017-02-23', 1, '1993');
INSERT INTO cu_us_post_s (us_id, post_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1987, '4001', 0, '2017-02-23', '20:17:23', '2017-02-23', 1, '1987');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (88888, '234', 0, '2017-02-20', '18:13:19', '2017-02-20', 1, '8888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (555555, '234', 0, '2017-02-09', '15:21:42', '2017-02-09', 1, '55');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (88888, '15615', 0, '2017-02-20', '18:13:19', '2017-02-20', 1, '8888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1002, '15615', 0, '2017-02-20', '18:14:50', '2017-02-20', 1, '1002');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1002, '234', 0, '2017-02-20', '18:14:50', '2017-02-20', 1, '1002');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1002, '456', 0, '2017-02-20', '18:14:50', '2017-02-20', 1, '1002');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1002, '23', 0, '2017-02-20', '18:14:50', '2017-02-20', 1, '1002');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1990, '15615', 0, '2017-02-20', '18:19:30', '2017-02-20', 1, '1990');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19905, '15615', 0, '2017-02-20', '18:22:4', '2017-02-20', 1, '1990');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (199055, '15615', 0, '2017-02-20', '18:27:16', '2017-02-20', 1, '1990');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1200, '23', 0, '2017-02-21', '10:38:20', '2017-02-21', 1, '1200');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1234, '15615', 0, '2017-02-15', '11:45:42', '2017-02-15', 1, '44');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (455, '15615', 0, '2017-02-15', '17:26:30', '2017-02-15', 1, 'cs-prj');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (455, '23', 0, '2017-02-15', '17:26:30', '2017-02-15', 1, 'cs-prj');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (23232, '456', 0, '2017-02-21', '11:18:32', '2017-02-21', 1, '232323');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (23232, '15615', 0, '2017-02-21', '11:18:32', '2017-02-21', 1, '232323');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19930220, '456', 0, '2017-02-21', '11:42:1', '2017-02-21', 1, '888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19930220, '15615', 0, '2017-02-21', '11:42:1', '2017-02-21', 1, '888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12341, '456', 0, '2017-02-21', '14:17:8', '2017-02-21', 1, '12341');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '234', 0, '2017-02-15', '19:51:15', '2017-02-15', 1, '1234');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '23', 0, '2017-02-15', '19:51:15', '2017-02-15', 1, '1234');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '456', 0, '2017-02-15', '19:51:15', '2017-02-15', 1, '1234');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12341, '234', 0, '2017-02-21', '14:17:8', '2017-02-21', 1, '12341');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1, '1', 0, '2017-02-15', '17:27:4', '2017-02-15', 1, 'admin');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (123, '15615', 0, '2017-02-15', '17:27:4', '2017-02-15', 1, 'admin');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (242424, '15615', 0, '2017-02-21', '18:28:8', '2017-02-21', 1, '242424');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (24, '456', 0, '2017-02-22', '14:53:50', '2017-02-22', 234, '34');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1001, '5001', 0, '2017-02-20', '16:41:59', '2017-02-20', 1, '1001');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (888, '23', 0, '2017-02-20', '17:38:35', '2017-02-20', 1, '8888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (888, '234', 0, '2017-02-20', '17:38:35', '2017-02-20', 1, '8888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (888, '456', 0, '2017-02-20', '17:38:35', '2017-02-20', 1, '8888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (24, '15615', 0, '2017-02-22', '14:53:50', '2017-02-22', 234, '34');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (24, '234', 0, '2017-02-22', '14:53:50', '2017-02-22', 234, '34');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (234, '456', 0, '2017-02-22', '14:55:3', '2017-02-22', 234, '243');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (234, '234', 0, '2017-02-22', '14:55:3', '2017-02-22', 234, '243');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (7878, '5001', 0, '2017-02-22', '15:13:35', '2017-02-22', 1, '78787');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (5757, '15615', 0, '2017-02-22', '16:45:5', '2017-02-22', 1, '5757');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (8888, '1', 0, '2017-02-22', '18:18:3', '2017-02-22', 1, '888');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (7, '15615', 0, '2017-02-22', '19:26:54', '2017-02-22', 1, '777');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (7999, '456', 0, '2017-02-22', '20:01:30', '2017-02-22', 1, '7999');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1003, '15615', 0, '2017-02-23', '10:20:51', '2017-02-23', 1, '1003');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9099090, '234', 0, '2017-02-23', '10:32:12', '2017-02-23', 1, '222');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (110, '234', 0, '2017-02-23', '11:13:42', '2017-02-23', 1, '122345');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '456', 0, '2017-02-23', '14:14:38', '2017-02-23', 1, '188');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9233, '234', 0, '2017-02-23', '14:14:38', '2017-02-23', 1, '188');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (86539, '456', 0, '2017-02-23', '16:08:28', '2017-02-23', 1, '1993');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (86539, '234', 0, '2017-02-23', '16:08:28', '2017-02-23', 1, '1993');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1987, '1', 0, '2017-02-23', '20:17:23', '2017-02-23', 1, '1987');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (22333, '15615', 0, '2017-02-23', '20:48:22', '2017-02-23', 1, '22333');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (10001, '1', 0, '2017-02-24', '13:55:01', '2017-02-24', 1, '827');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9298, '456', 0, '2017-02-24', '14:45:25', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9298, '234', 0, '2017-02-24', '14:45:25', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9298, '15615', 0, '2017-02-24', '14:45:25', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (9298, '1', 0, '2017-02-24', '14:45:25', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1933, '23', 1, '2017-02-20', '17:5:30', '2017-02-24', 1, '1933');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (1933, '234', 1, '2017-02-20', '17:5:30', '2017-02-24', 1, '1933');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (777, '15615', 1, '2017-02-21', '11:55:4', '2017-02-24', 1, '8788');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (31111, '1', 0, '2017-02-24', '09:25:52', '2017-02-24', 1, '18700');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (30201, '5001', 0, '2017-02-24', '10:36:43', '2017-02-24', 1, '96937');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12355, '456', 1, '2017-02-23', '11:10:23', '2017-02-24', 1, '122345');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12355, '234', 1, '2017-02-23', '11:10:23', '2017-02-24', 1, '122345');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (30201, '15615', 0, '2017-02-24', '10:46:16', '2017-02-24', 30201, '96937');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (30201, '1', 0, '2017-02-24', '10:46:50', '2017-02-24', 30201, '96937');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (3466, '5001', 0, '2017-02-24', '11:08:33', '2017-02-24', 1, '3466');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '15615', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '234', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (12315, '456', 0, '2017-02-24', '13:52:26', '2017-02-24', 1, '20');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (777, '456', 1, '2017-02-21', '11:55:4', '2017-02-24', 1, '8788');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (198765, '1', 0, '2017-02-24', '14:50:23', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (198765, '234', 0, '2017-02-24', '14:50:23', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (198765, '456', 0, '2017-02-24', '14:50:23', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (198765, '15615', 0, '2017-02-24', '14:50:23', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (87465, '23', 1, '2017-02-15', '17:27:4', '2017-02-24', 1, 'jylr');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (11, '15615', 1, '2017-02-23', '10:47:15', '2017-02-24', 1, '111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (33333, '234', 1, '2017-02-15', '19:13:3', '2017-02-24', 1, '333');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19209, '456', 0, '2017-02-24', '15:32:04', '2017-02-24', 1, '246');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19209, '234', 0, '2017-02-24', '15:32:04', '2017-02-24', 1, '246');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19209, '15615', 0, '2017-02-24', '15:32:04', '2017-02-24', 1, '246');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (18765, '456', 0, '2017-02-24', '15:33:48', '2017-02-24', 1, '357');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (18765, '234', 0, '2017-02-24', '15:33:48', '2017-02-24', 1, '357');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (121121, '01', 0, '2017-02-24', '15:41:26', '2017-02-24', 1, '111111');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19345, '456', 0, '2017-02-24', '15:50:46', '2017-02-24', 1, '468');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19345, '15615', 0, '2017-02-24', '15:50:46', '2017-02-24', 1, '468');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (19345, '234', 0, '2017-02-24', '15:50:46', '2017-02-24', 1, '468');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (192345, '456', 0, '2017-02-24', '15:56:14', '2017-02-24', 1, '579');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (192345, '15615', 0, '2017-02-24', '15:56:14', '2017-02-24', 1, '579');
INSERT INTO cu_us_ro_s (us_id, ro_no, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, login_na) VALUES (192345, '234', 0, '2017-02-24', '15:56:14', '2017-02-24', 1, '579');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (110, 1, '2017-02-23', '11:13:42', '2017-02-23', 1, 'CS', '122345', '陈俐婧', 'SF', '110108199302200028', '1', '18813008765', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (8788, 2, '2017-02-23', '14:04:34', '2017-02-23', 1, 'CS', '1993', '93', 'SF', '110108199302200028', '12', '18813008670', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (23232, 6, '2017-02-20', '16:54:42', '2017-02-21', 1, 'SX', '232323', '2323232', 'JR', '2323232323', '443', '13426316789', '22@qq.com', '1', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1993022222, 1, '2017-02-23', '14:09:22', '2017-02-23', 1, 'CS', '1993', '93', 'SF', '110108199302200028', '12', '18813008670', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (19930220, 4, '2017-02-20', '17:53:8', '2017-02-21', 1, 'JH', '888', 'chenlj', 'JR', '110108199302200098', '5555', '18813002345', '', '1', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (9233, 1, '2017-02-23', '14:14:38', '2017-02-23', 1, 'CS', '188', '00', 'JR', '110108199302200029', '12', '18813029876', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (777, 2, '2017-02-21', '11:55:4', '2017-02-24', 1, 'CS', '8788', 'clj', 'SF', '152627199308270049', '443', '18813006543', '', '0', '0', 19930220, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (77777, 1, '2017-02-20', '17:29:10', '2017-02-20', 1, 'CS', '77777', '77777', 'JR', '77777', '45245', '13426316790', '77@qq.com', '0', '0', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (100193, 1, '2017-02-23', '14:18:18', '2017-02-23', 1, 'CS', '123', '010', 'SF', '110108199302200028', '5555554', '18813009876', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (888, 3, '2017-02-20', '17:38:35', '2017-02-20', 1, 'JH', '8888', '1223', 'SF', '110108199302203456', '443', '18831009876', '', '0', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (86539, 1, '2017-02-23', '16:08:28', '2017-02-23', 1, 'CS', '1993', '1300', 'SF', '110108199302200028', '11', '18813008677', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1999, 2, '2017-02-20', '17:54:48', '2017-02-20', 1, 'CS', '12345', 'chenlj', 'SF', '110108199302202345', '45245', '18813992345', '', '0', '0', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1200, 2, '2017-02-21', '10:38:20', '2017-02-23', 1, 'JH', '1200', '贺志超', 'JR', '1102261990', '1', '13426316790', '11@qq.com', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (9999, 2, '2017-02-20', '18:1:14', '2017-02-20', 1, 'CS', '888', 'daf', 'SF', '18813002345', '443', '18813002345', '', '0', '0', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (12341, 2, '2017-02-20', '19:11:30', '2017-02-21', 1, 'CS', '12341', '12341', 'SF', '12341', '2001', '13426316780', '', '0', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1002, 3, '2017-02-20', '16:14:50', '2017-02-20', 1, 'CS', '1002', '张欣', 'SF', '410327198601285435', '2001', '18900010088', '272241822@qq.com', '1', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1234, 1, '2017-02-15', '11:45:42', '2017-02-15', 1, 'CS', '44', '4444', 'SF', '110108193302811987', '11', '18813007890', '', '0', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (455, 2, '2017-02-14', '16:4:15', '2017-02-15', 1, 'JH', 'cs-prj', '4444', 'JR', '3333333', '11', '13426316790', '11@qq.com', '0', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (198765, 2, '2017-02-24', '14:50:23', '2017-02-24', 1, 'JH', '111', '88', 'SF', '110108199302200028', '11', '18813007654', '', '0', '0', 1200, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (555555, 3, '2017-02-09', '15:21:42', '2017-02-15', 1, 'SX', '55', '5555', 'SF', '5555', '1', '55555555', '55@qq.com', '0', '1', NULL, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (242424, 1, '2017-02-21', '18:28:8', '2017-02-21', 1, 'CS', '242424', '242424', 'SF', '242424', '443', '13425215678', '11@qq.com', '0', '0', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (88888, 4, '2017-02-16', '14:32:25', '2017-02-20', 1, 'JH', '8888', 'clj', 'JR', '110108199302209877', '1', '18813009867', '', '1', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (3466, 1, '2017-02-24', '11:08:33', '2017-02-24', 1, 'CS', '3466', '3466', 'JR', '1102261990', '66', '13426316790', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (123, 6, '2017-02-14', '17:55:21', '2017-02-20', 1, 'JH', '1234', '123', 'SF', '118110199302209876', '1', '18813009876', '', '1', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1001, 4, '2017-02-20', '15:43:0', '2017-02-20', 1, 'JH', '1001', 'f ', 'SF', '361100198401018370', '443', '13146077236', '670417051@qq.com', '1', '1', 1, '1', NULL, NULL, '', 'N');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (24, 2, '2017-02-21', '17:16:17', '2017-02-22', 12341, 'CS', '34', '243', 'SF', '110109199302202786', '2001', '18813007655', '188@163.com', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1990, 1, '2017-02-20', '18:19:30', '2017-02-20', 1, 'CS', 'flow', 'cjb', 'JR', '110', '45245', '13426316790', '11@qq.com', '0', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (19905, 1, '2017-02-20', '18:22:4', '2017-02-20', 1, 'CS', '1990', 'sss', 'JR', '110', '443', '13426316790', '', '0', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (199055, 1, '2017-02-20', '18:27:16', '2017-02-20', 1, 'CS', '1990', 'c11', 'JR', '110', '443', '13426316790', '', '0', '0', 1001, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (234, 2, '2017-02-21', '15:57:44', '2017-02-22', 1, 'CS', '243', 'clj', 'SF', '110108199202201234', '443', '18801142588', '123@163.com', '1', '0', 19930220, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1987, 1, '2017-02-23', '20:17:23', '2017-02-23', 1, 'CS', '1987', '1987', 'JR', '1102261990', '11', '13426316790', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (7878, 1, '2017-02-22', '15:13:35', '2017-02-22', 1, 'CS', '78787', '78787', 'JR', '78787878', '45245', '13426316790', '11@11.com', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (5757, 1, '2017-02-22', '16:45:5', '2017-02-22', 1, 'CS', '5757', '5757', 'JR', '57575757', '443', '13426316790', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (8888, 1, '2017-02-22', '18:18:3', '2017-02-22', 1, 'CS', '888', 'clj', 'JR', '110108193302220028', '1', '18813008765', '', '0', '0', 19930220, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (7, 1, '2017-02-22', '19:26:54', '2017-02-22', 1, 'CS', '777', 'llq', 'JR', '110', '1', '13426316790', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (7999, 1, '2017-02-22', '19:56:43', '2017-02-22', 1, 'CS', '7999', '7999', 'JR', '79999', '45245', '13426316790', '', '0', '0', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1, 13, '1', '1', '2017-02-22', 1, 'JH', 'admin', '1', 'SF', '1', '11', '18801142588', '123@qq.com', '1', '1', NULL, '1', '1', '1', '1', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1003, 1, '2017-02-23', '10:20:51', '2017-02-23', 1, 'CS', '1003', '1003', 'JR', '1003333', '1', '13426316790', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (9099090, 1, '2017-02-23', '10:32:12', '2017-02-23', 1, 'CS', '222', 'dfdfd', 'JR', '131181199204119898', '1', '13000000000', '2323@qq.com', '0', '0', 19930220, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (22333, 1, '2017-02-23', '20:48:22', '2017-02-23', 1, 'CS', '22333', '22333', 'SF', '110226199010082830', '11', '13426316790', '', '0', '0', 455, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (31111, 1, '2017-02-24', '09:25:52', '2017-02-24', 1, 'CS', '18700', '31111', 'SF', '110226199010082830', '11', '13426316790', '', '0', '0', 888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (30201, 1, '2017-02-24', '10:36:43', '2017-02-24', 1, 'CS', '96937', '2225', 'JR', '520121199410013411', '12', '18515658094', '', '0', '0', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (12355, 2, '2017-02-23', '11:10:23', '2017-02-24', 1, 'CS', '122345', '陈俐婧', 'JR', '110108199302200028', '1', '18813008765', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (12315, 1, '2017-02-24', '13:52:26', '2017-02-24', 1, 'CS', '20', 'clj', 'SF', '110108199302200028', '12', '18813008670', '', '0', '0', 888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (10001, 1, '2017-02-24', '13:55:01', '2017-02-24', 1, 'CS', '827', '李娜', 'SF', '152627199308270049', '2001', '18347282521', '819580352@qq.com', '0', '0', 19930220, '1', NULL, NULL, '123456', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (9298, 1, '2017-02-24', '14:45:24', '2017-02-24', 1, 'CS', '111', 'clj', 'SF', '110108199302200028', '11', '18813007655', '', '0', '0', 88888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (1933, 3, '2017-02-16', '18:22:49', '2017-02-24', 1, 'CS', '1933', 'clj', 'SF', '152627199308270049', '1', '18813009876', '', '0', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (33333, 4, '2017-02-15', '19:13:3', '2017-02-24', 1, 'JH', '333', '33333', 'SF', '110108199302200028', '11', '332222222', '33@qq.com', '1', '1', 1, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (11, 3, '2017-02-23', '10:47:15', '2017-02-24', 1, 'JH', '111', '11', 'SF', '130682198410213790', '2001', '13146077236', '', '1', '1', 123, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (87465, 5, '2017-02-09', '16:56:15', '2017-02-24', 1, 'JH', 'jylr', 'jylr', 'SF', '520321198205216013', '1', '62512339', '', '1', '1', 888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (19209, 2, '2017-02-24', '15:32:04', '2017-02-24', 1, 'JH', '246', 'jia', 'SF', '110108199302200028', '2', '18813006543', '', '0', '0', 888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (18765, 2, '2017-02-24', '15:33:48', '2017-02-24', 1, 'JH', '357', 'lu', 'SF', '110108199302200028', '12', '18813008672', '', '0', '0', 888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (121121, 3, '2017-02-22', '20:51:34', '2017-02-24', 1, 'JH', '111111', '111111', 'SF', '520121199410013411', '1', '18515658094', '', '0', '1', 19930220, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (19345, 2, '2017-02-24', '15:50:46', '2017-02-24', 1, 'JH', '468', 'you', 'SF', '110108199302200028', '2', '18813008234', '', '0', '0', 888, '1', NULL, NULL, '', 'V');
INSERT INTO cu_us_s (id, ve, cr_dt, cr_tm, la_up_dt, la_up_us_id, st, login_na, us_na, pa_ty_cd, pa_no, br_no, mo_no, mail_no, exe_yn, cu_ma_yn, fa_exe_us_id, hol_yn, hol_be_dt, hol_en_dt, co, sex_cd) VALUES (192345, 2, '2017-02-24', '15:56:14', '2017-02-24', 1, 'JH', '579', 'bu', 'SF', '110108199302200028', '11', '18813002345', '', '0', '0', 888, '1', NULL, NULL, '', 'V');
ALTER TABLE ONLY cu_icon_s
    ADD CONSTRAINT cu_icon_s_pkey PRIMARY KEY (icon_no);
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

