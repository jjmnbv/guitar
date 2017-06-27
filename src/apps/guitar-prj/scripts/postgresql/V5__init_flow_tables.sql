DROP TABLE IF EXISTS adm_sys_flowinfo CASCADE;
DROP TABLE IF EXISTS adm_sys_flowprocedf CASCADE;
DROP TABLE IF EXISTS adm_sys_flowstep_config CASCADE;
DROP SEQUENCE IF EXISTS adm_sys_flowinfo_id_seq CASCADE;
DROP SEQUENCE IF EXISTS adm_sys_flowprocedf_id_seq CASCADE;
DROP SEQUENCE IF EXISTS adm_sys_flowstep_config_id_seq CASCADE;

CREATE TABLE adm_sys_flowinfo (
    id bigint NOT NULL,
    create_time timestamp without time zone,
    creator_id bigint,
    deploy_status integer,
    description character varying(255),
    flow_xml bytea,
    flow_key character varying(255),
    flow_name character varying(255),
    name_space character varying(255),
    plugin_css character varying(255),
    plugin_js character varying(255),
    resource_byte bytea,
    run_status integer,
    update_time timestamp without time zone,
    updater_id bigint,
    version integer
);

CREATE TABLE adm_sys_flowprocedf (
    id bigint NOT NULL,
    create_time timestamp without time zone,
    creator_id bigint,
    flow_info_id bigint,
    procdef_id character varying(255)
);

CREATE TABLE adm_sys_flowstep_config (
    id bigint NOT NULL,
    assign_way_key character varying(255),
    assign_way_value character varying(255),
    auto_assign_strategy character varying(255),
    commit_way_key character varying(255),
    commit_way_value character varying(255),
    flow_info_id bigint,
    flow_key character varying(255),
    flow_name character varying(255),
    handle_position_key character varying(255),
    handle_position_name character varying(255),
    handle_ulname character varying(255),
    handle_urname character varying(255),
    plugjson character varying(800),
    rel_view character varying(3500),
    run_system character varying(255),
    step_desc character varying(255),
    step_key character varying(255),
    step_name character varying(255),
    step_type character varying(255),
    cancel_time character varying(255),
    mile_stone character varying(255)
);

CREATE SEQUENCE adm_sys_flowinfo_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE adm_sys_flowprocedf_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE adm_sys_flowstep_config_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

SELECT pg_catalog.setval('adm_sys_flowinfo_id_seq', 1, true);
SELECT pg_catalog.setval('adm_sys_flowprocedf_id_seq', 1, true);
SELECT pg_catalog.setval('adm_sys_flowstep_config_id_seq', 1, true);


ALTER SEQUENCE adm_sys_flowinfo_id_seq 
    OWNED BY adm_sys_flowinfo.id;
ALTER SEQUENCE adm_sys_flowprocedf_id_seq 
    OWNED BY adm_sys_flowprocedf.id;
ALTER SEQUENCE adm_sys_flowstep_config_id_seq 
    OWNED BY adm_sys_flowstep_config.id;


ALTER TABLE ONLY adm_sys_flowinfo ALTER COLUMN id 
    SET DEFAULT nextval('adm_sys_flowinfo_id_seq'::regclass);
ALTER TABLE ONLY adm_sys_flowprocedf ALTER COLUMN id 
    SET DEFAULT nextval('adm_sys_flowprocedf_id_seq'::regclass);
ALTER TABLE ONLY adm_sys_flowstep_config ALTER COLUMN id 
    SET DEFAULT nextval('adm_sys_flowstep_config_id_seq'::regclass);

ALTER TABLE ONLY adm_sys_flowinfo
    ADD CONSTRAINT adm_sys_flowinfo_pkey PRIMARY KEY (id);
ALTER TABLE ONLY adm_sys_flowprocedf
    ADD CONSTRAINT adm_sys_flowprocedf_pkey PRIMARY KEY (id);
ALTER TABLE ONLY adm_sys_flowstep_config
    ADD CONSTRAINT adm_sys_flowstep_config_pkey PRIMARY KEY (id);


GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cb TO zkbc;
