DROP TABLE IF EXISTS xfjr_cb.adm_sys_flowinfoconfig CASCADE;
DROP TABLE IF EXISTS xfjr_cb.adm_sys_flownodeconfig CASCADE;
DROP TABLE IF EXISTS xfjr_cb.adm_sys_flowrouterconfig CASCADE;
DROP TABLE IF EXISTS xfjr_cb.adm_sys_flowvars CASCADE;
DROP SEQUENCE IF EXISTS xfjr_cb.adm_sys_flowinfoconfig_id_seq CASCADE;
DROP SEQUENCE IF EXISTS xfjr_cb.adm_sys_flownodeconfig_id_seq CASCADE;
DROP SEQUENCE IF EXISTS xfjr_cb.adm_sys_flowrouterconfig_id_seq CASCADE;
DROP SEQUENCE IF EXISTS xfjr_cb.adm_sys_flowvars_id_seq CASCADE;


ALTER TABLE xfjr_cb.adm_sys_flowinfo ADD deploy_time timestamp (6) WITHOUT TIME ZONE;
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfo."deploy_time" IS '发布时间';

ALTER TABLE xfjr_cb.adm_sys_flowinfo ADD procdef_id varchar (255);
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfo."procdef_id" IS '部署id';

ALTER TABLE xfjr_cb.adm_sys_flowinfo ADD status integer;
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfo."status" IS '流程状态-0:未发布;1:已发布;2:已停用;3:已删除';

ALTER TABLE xfjr_cb.adm_sys_flowinfo ADD creator_code varchar (30);
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfo."creator_code" IS '创建人';

CREATE TABLE xfjr_cb.adm_sys_flowinfoconfig
(
   id                     bigint NOT NULL,
   alert_time             CHARACTER VARYING (255),
   create_time            timestamp (6) WITHOUT TIME ZONE,
   creator_id             bigint,
   delete_after_process   integer,
   flow_info_id           bigint,
   handle_durtation       bigint,
   is_allow_cancel        integer,
   is_allow_delegate      integer,
   is_allow_hangup        integer,
   is_allow_rollback      integer,
   is_allow_turn          integer,
   is_allow_wakeup        integer,
   main_form              CHARACTER VARYING (255),
   notify_count           integer,
   notify_interval        bigint,
   overdue_handle         integer,
   press_value            integer,
   update_time            timestamp (6) WITHOUT TIME ZONE,
   updater_id             bigint
);
    
CREATE TABLE adm_sys_flownodeconfig
(
   id            bigint NOT NULL,
   assignee                  CHARACTER VARYING (255),
   cancel_time               CHARACTER VARYING (255),
   carbon_copy_receiver      CHARACTER VARYING (255),
   commit_strategy           CHARACTER VARYING (255),
   commit_way                CHARACTER VARYING (255),
   create_time               timestamp (6) WITHOUT TIME ZONE,
   creator_id                bigint,
   dynamic_class             CHARACTER VARYING (255),
   flow_info_id              bigint,
   handle_durtation          bigint,
   handle_type               integer,
   is_allow_cancel           integer,
   is_allow_carry_back       integer,
   is_allow_overdue_handle   integer,
   is_allow_plus_sign        integer,
   is_allow_press_key        integer,
   is_allow_refuse           integer,
   is_allow_repulse          integer,
   is_allow_rollback         integer,
   is_allow_script           integer,
   is_allow_turn             integer,
   is_notifiy                integer,
   is_sign_in_node           integer,
   method_name               CHARACTER VARYING (255),
   node_desc                 CHARACTER VARYING (255),
   node_destination_type     integer,
   node_edit_type            integer,
   node_form                 CHARACTER VARYING (255),
   node_key                  CHARACTER VARYING (255),
   node_name                 CHARACTER VARYING (255),
   node_type                 integer,
   notify_count              integer,
   notify_interval           bigint,
   overdue_handle_count      integer,
   "position"                CHARACTER VARYING (255),
   rel_vars                  CHARACTER VARYING (255),
   script_content            CHARACTER VARYING (1555),
   script_durtation          bigint,
   sign_in_strategy          integer,
   sign_service              CHARACTER VARYING (255),
   sign_strategy             integer,
   sub_process_id            CHARACTER VARYING (255),
   sub_process_mark          CHARACTER VARYING (255),
   update_time               timestamp (6) WITHOUT TIME ZONE,
   updater_id                bigint,
   is_async                  integer,
   task_name                 CHARACTER VARYING (255),
   mile_stone                integer,
   cancel_process_service    CHARACTER VARYING (30),
   active_process_service    CHARACTER VARYING (30)
);

CREATE TABLE adm_sys_flowrouterconfig
(
   id            bigint NOT NULL,
   create_time           timestamp (6) WITHOUT TIME ZONE,
   creator_id            bigint,
   destination_node_id   CHARACTER VARYING (255),
   dynamic_class         CHARACTER VARYING (255),
   flow_info_id          bigint,
   is_allow_script       integer,
   method_name           CHARACTER VARYING (255),
   router_condition      CHARACTER VARYING (255),
   router_desc           CHARACTER VARYING (255),
   router_id             CHARACTER VARYING (255),
   router_name           CHARACTER VARYING (255),
   script_content        CHARACTER VARYING (255),
   source_node_id        CHARACTER VARYING (255),
   update_time           timestamp (6) WITHOUT TIME ZONE,
   updater_id            bigint
);

CREATE TABLE adm_sys_flowvars
(
   id            bigint NOT NULL,
   create_time   timestamp (6) WITHOUT TIME ZONE,
   creator_id    bigint,
   empcontext    CHARACTER VARYING (255),
   flow_key      CHARACTER VARYING (255),
   flow_name     CHARACTER VARYING (255),
   update_time   timestamp (6) WITHOUT TIME ZONE,
   updater_id    bigint,
   var_id        CHARACTER VARYING (255),
   var_name      CHARACTER VARYING (255),
   var_type      CHARACTER VARYING (255),
   var_value     CHARACTER VARYING (255)
);
    


ALTER TABLE xfjr_cb.adm_sys_flowinfoconfig ADD PRIMARY KEY (id);
ALTER TABLE xfjr_cb.adm_sys_flowvars ADD PRIMARY KEY (id);
ALTER TABLE xfjr_cb.adm_sys_flowrouterconfig ADD PRIMARY KEY (id);
ALTER TABLE xfjr_cb.adm_sys_flownodeconfig ADD PRIMARY KEY (id);

CREATE SEQUENCE xfjr_cb.adm_sys_flowinfoconfig_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE xfjr_cb.adm_sys_flowvars_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE xfjr_cb.adm_sys_flowrouterconfig_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE xfjr_cb.adm_sys_flownodeconfig_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
    
SELECT pg_catalog.setval('xfjr_cb.adm_sys_flowinfoconfig_id_seq', 1, true);
SELECT pg_catalog.setval('xfjr_cb.adm_sys_flowvars_id_seq', 1, true);
SELECT pg_catalog.setval('xfjr_cb.adm_sys_flowrouterconfig_id_seq', 1, true);
SELECT pg_catalog.setval('xfjr_cb.adm_sys_flownodeconfig_id_seq', 1, true);

ALTER SEQUENCE xfjr_cb.adm_sys_flownodeconfig_id_seq OWNED BY xfjr_cb.adm_sys_flownodeconfig.id;
ALTER SEQUENCE xfjr_cb.adm_sys_flowinfoconfig_id_seq OWNED BY xfjr_cb.adm_sys_flowinfoconfig.id;
ALTER SEQUENCE xfjr_cb.adm_sys_flowvars_id_seq OWNED BY xfjr_cb.adm_sys_flowvars.id;
ALTER SEQUENCE xfjr_cb.adm_sys_flowrouterconfig_id_seq OWNED BY xfjr_cb.adm_sys_flowrouterconfig.id;
    
    
ALTER TABLE ONLY xfjr_cb.adm_sys_flowinfoconfig ALTER COLUMN id
    SET DEFAULT nextval('xfjr_cb.adm_sys_flowinfoconfig_id_seq'::regclass);
ALTER TABLE ONLY xfjr_cb.adm_sys_flownodeconfig ALTER COLUMN id
    SET DEFAULT nextval('xfjr_cb.adm_sys_flownodeconfig_id_seq'::regclass);
ALTER TABLE ONLY xfjr_cb.adm_sys_flowvars ALTER COLUMN id
    SET DEFAULT nextval('xfjr_cb.adm_sys_flowvars_id_seq'::regclass);
ALTER TABLE ONLY xfjr_cb.adm_sys_flowrouterconfig ALTER COLUMN id
    SET DEFAULT nextval('xfjr_cb.adm_sys_flowrouterconfig_id_seq'::regclass);

COMMENT ON TABLE xfjr_cb.adm_sys_flowinfoconfig IS '流程配置信息表';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.alert_time IS '预警时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.create_time IS '创建时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.creator_id IS '创建人';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.delete_after_process IS '允许办后删除';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.flow_info_id IS '流程信息id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.handle_durtation IS '办理期限';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.is_allow_cancel IS '允许撤回';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.is_allow_delegate IS '允许代办';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.is_allow_hangup IS '允许挂起';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.is_allow_rollback IS '允许退回';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.is_allow_turn IS '允许转办';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.is_allow_wakeup IS '允许唤醒';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.main_form IS '流程主表单';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.notify_count IS '通知次数';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.notify_interval IS '通知间隔';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.overdue_handle IS '过期处理';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.press_value IS '手工催办方式';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.update_time IS '修改时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowinfoconfig.updater_id IS '修改人id';


COMMENT ON TABLE xfjr_cb.adm_sys_flownodeconfig IS '流程节点配置信息表';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.assignee IS '办理人员';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.cancel_time IS '取消时长';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.carbon_copy_receiver IS '抄送对象';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.commit_strategy IS '提交策略';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.commit_way IS '提交方式';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.create_time IS '创建时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.creator_id IS '创建人id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.dynamic_class IS '动态调用类';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.flow_info_id IS '流程信息id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.handle_durtation IS '办理期限';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.handle_type IS '办理类型';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_cancel IS '是否允许取消';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_carry_back IS '允许拿回';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_overdue_handle IS '过期处理';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_plus_sign IS '允许加签';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_press_key IS '手工催办';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_refuse IS '是否允许拒绝';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_repulse IS '允许打回';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_rollback IS '允许退回';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_script IS '是否运行脚本';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_allow_turn IS '允许转办';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_notifiy IS '待办通知';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_sign_in_node IS '是否会签节点';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.method_name IS '方法名';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_desc IS '节点描述';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_destination_type IS '节点流向类型';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_edit_type IS '编辑权限';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_form IS '节点表单';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_key IS '节点标识';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_name IS '节点名称';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.node_type IS '节点类型';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.notify_count IS '通知次数';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.notify_interval IS '过期间隔';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.overdue_handle_count IS '过期处理次数';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.position IS '办理岗位';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.rel_vars IS '关联变量';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.script_content IS '运行脚本内容';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.script_durtation IS '脚本运行时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.sign_in_strategy IS '会签策略';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.sign_service IS '分单服务-(自定义分单使用)';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.sign_strategy IS '分单策略';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.sub_process_id IS '子流程id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.sub_process_mark IS '是否调用子流程';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.update_time IS '修改时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.updater_id IS '修改人id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.is_async IS '服务节点任务执行是否异步';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.task_name IS '服务节点-任务bean';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.mile_stone IS '是否里程碑';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.cancel_process_service IS '取消处理';
COMMENT ON COLUMN xfjr_cb.adm_sys_flownodeconfig.active_process_service IS '激活处理';


COMMENT ON TABLE xfjr_cb.adm_sys_flowvars IS '流程变量表';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.create_time IS '创建时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.creator_id IS '创建人id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.empcontext IS 'EMPcontext映射';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.flow_key IS '流程标识';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.flow_name IS '流程名称';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.update_time IS '修改时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.updater_id IS '修改人id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.var_id IS '变量ID';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.var_name IS '变量名';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.var_type IS '变量类型';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowvars.var_value IS '变量值';


COMMENT ON TABLE xfjr_cb.adm_sys_flowrouterconfig IS '流程路由配置信息表';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.create_time IS '创建时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.creator_id IS '创建人id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.destination_node_id IS '目标节点';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.dynamic_class IS '动态调用类';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.flow_info_id IS '流程信息id';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.is_allow_script IS '是否运行脚本';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.method_name IS '方法名';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.router_condition IS '路由条件';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.router_desc IS '路由描述(流转意见)';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.router_id IS '路由ID';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.router_name IS '路由名称';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.script_content IS '脚本内容';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.source_node_id IS '源节点';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.update_time IS '修改时间';
COMMENT ON COLUMN xfjr_cb.adm_sys_flowrouterconfig.updater_id IS '修改人id';


ALTER TABLE ONLY xfjr_cb.adm_sys_flowinfoconfig
    ADD CONSTRAINT adm_sys_flowinfoconfig_pkey PRIMARY KEY (id);
ALTER TABLE ONLY xfjr_cb.adm_sys_flownodeconfig
    ADD CONSTRAINT adm_sys_flownodeconfig_pkey PRIMARY KEY (id);
ALTER TABLE ONLY xfjr_cb.adm_sys_flowvars
    ADD CONSTRAINT adm_sys_flowvars_pkey PRIMARY KEY (id);
ALTER TABLE ONLY xfjr_cb.adm_sys_flowrouterconfig
    ADD CONSTRAINT adm_sys_flowrouterconfig_pkey PRIMARY KEY (id);



GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cb TO zkbc;
