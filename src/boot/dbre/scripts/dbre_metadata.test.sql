CREATE TABLE dbre_metadata (
    db_name character varying(20),
    java_name character varying(20) NOT NULL,
    parent_name character varying(20),
    data_type character varying(20) NOT NULL,
    field_type character varying(20),
    ptype character varying(20),
    join_type character varying(20),
    join_module character varying(20),
    mapped_by character varying(20),
    join_table character varying(20),
    join_column character varying(20),
    inverse_join_column character varying(20),
    remarks character varying(20)
);
ALTER TABLE dbre_metadata OWNER TO xfjr;
COMMENT ON TABLE dbre_metadata IS '元数据配置表';
COMMENT ON COLUMN dbre_metadata.db_name IS '数据库属性';
COMMENT ON COLUMN dbre_metadata.java_name IS 'java属性';
COMMENT ON COLUMN dbre_metadata.parent_name IS '父级属性';
COMMENT ON COLUMN dbre_metadata.data_type IS '类型(table|field)';
COMMENT ON COLUMN dbre_metadata.field_type IS '字段类型';
COMMENT ON COLUMN dbre_metadata.ptype IS '关联类型参数';
COMMENT ON COLUMN dbre_metadata.join_type IS '关联关系';
COMMENT ON COLUMN dbre_metadata.join_module IS '关联模块';
COMMENT ON COLUMN dbre_metadata.mapped_by IS 'otm关联维护方';
COMMENT ON COLUMN dbre_metadata.join_table IS 'mtm关联表';
COMMENT ON COLUMN dbre_metadata.join_column IS 'mtm主键1';
COMMENT ON COLUMN dbre_metadata.inverse_join_column IS 'mtm主键2';
COMMENT ON COLUMN dbre_metadata.remarks IS '描述';

INSERT INTO dbre_metadata (db_name, java_name, parent_name, data_type, field_type, ptype, join_type, join_module, mapped_by, join_table, join_column, inverse_join_column, remarks)
VALUES
	('adm_sys_action', 'AdmAction', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_menu', 'AdmMenu', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_organ', 'AdmOrgan', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_resource', 'AdmResource', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_role', 'AdmRole', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_syslog', 'AdmSyslog', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_user', 'AdmUser', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_userrole_', 'AdmUserrole', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('adm_sys_wordbook', 'AdmWordbook', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('menu_id', 'menu', 'adm_sys_action', 'field', 'T', 'AdmMenu', 'ManyToOne', NULL, NULL, NULL, NULL, NULL, NULL),
	('parent_id', 'parent', 'adm_sys_menu', 'field', 'T', 'AdmMenu', 'ManyToOne', NULL, NULL, NULL, NULL, NULL, '父菜单'),
	(NULL, 'children', 'adm_sys_menu', 'field', 'List<T>', 'AdmMenu', 'OneToMany', NULL, 'parent', NULL, NULL, NULL, '子菜单'),
	(NULL, 'actions', 'adm_sys_menu', 'field', 'List<T>', 'AdmAction', 'OneToMany', NULL, 'menu', NULL, NULL, NULL, '操作列表'),
	(NULL, 'roleSet', 'adm_sys_user', 'field', 'Set<T>', 'AdmRole', 'ManyToMany', NULL, NULL, 'adm_sys_userrole', 'userid', 'roleid', '角色集'),
	('organ_id', 'organ', 'adm_sys_user', 'field', 'T', 'AdmOrgan', 'ManyToOne', NULL, NULL, NULL, NULL, NULL, '机构'),
	('parent_id', 'parent', 'adm_sys_organ', 'field', 'T', 'AdmOrgan', 'ManyToOne', NULL, NULL, NULL, NULL, NULL, '上级机构'),
	(NULL, 'children', 'adm_sys_organ', 'field', 'List<T>', 'AdmOrgan', 'OneToMany', NULL, 'parent', NULL, NULL, NULL, '下级机构'),
	(NULL, 'users', 'adm_sys_organ', 'field', 'List<T>', 'AdmUser', 'OneToMany', NULL, 'organ', NULL, NULL, NULL, '机构下的用户'),
	('roleid', 'role', 'adm_sys_resource', 'field', 'T', 'AdmRole', 'ManyToOne', NULL, NULL, NULL, NULL, NULL, '角色'),
	(NULL, 'resourceSet', 'adm_sys_role', 'field', 'Set<T>', 'AdmResource', 'OneToMany', NULL, 'role', NULL, NULL, NULL, '资源集'),
	('parent_id', 'parent', 'adm_sys_wordbook', 'field', 'T', 'AdmWordbook', 'ManyToOne', NULL, NULL, NULL, NULL, NULL, '父项'),
	(NULL, 'children', 'adm_sys_wordbook', 'field', 'List<T>', 'AdmWordbook', 'OneToMany', NULL, 'parent', NULL, NULL, NULL, '子项'),
	('cs_di_ki_c', 'DictionaryCategory', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '字典分类'),
	('cs_di_c', 'Dictionary', 'sys', 'table', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '字典'),
	('id', 'id', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('ve', 'version', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('di_ki_ca', 'name', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('di_ki_de', 'desc', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('st', 'status', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('mod_cd', 'modelCode', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('cr_dt', 'createDate', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('la_up_dt', 'lastUpdate', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('la_up_us_id', 'lastUpdateUserId', 'cs_di_ki_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('di_ki_id', 'id', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('di_cd', 'code', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('ve', 'version', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('di_ca', 'name', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('st', 'status', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('su_di_ki_id', 'subId', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('su_di_cd', 'subCode', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('disp_or', 'dispOrder', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('ci_cd', 'ciCode', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('cr_dt', 'createDate', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('la_up_dt', 'lastUpdate', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('la_up_us_id', 'lastUpdateUserId', 'cs_di_c', 'field', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
