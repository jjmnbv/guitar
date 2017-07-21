DROP TABLE IF EXISTS jsform_form_data CASCADE;
DROP TABLE IF EXISTS jsform_hiddeninput CASCADE;
DROP TABLE IF EXISTS jsform_jsform CASCADE;
DROP TABLE IF EXISTS jsform_jsform_col CASCADE;
DROP TABLE IF EXISTS jsform_jsform_col_hidden_inputs CASCADE;
DROP TABLE IF EXISTS jsform_jsform_col_tbody_trs CASCADE;
DROP TABLE IF EXISTS jsform_jsform_col_ths CASCADE;
DROP TABLE IF EXISTS jsform_jsform_hidden_inputs CASCADE;
DROP TABLE IF EXISTS jsform_jsform_portlets CASCADE;
DROP TABLE IF EXISTS jsform_jsform_row CASCADE;
DROP TABLE IF EXISTS jsform_jsform_row_cols CASCADE;
DROP TABLE IF EXISTS jsform_jsform_td CASCADE;
DROP TABLE IF EXISTS jsform_jsform_td_hidden_inputs CASCADE;
DROP TABLE IF EXISTS jsform_jsform_th CASCADE;
DROP TABLE IF EXISTS jsform_jsform_tr CASCADE;
DROP TABLE IF EXISTS jsform_jsform_tr_tds CASCADE;
DROP TABLE IF EXISTS jsform_portlet CASCADE;
DROP TABLE IF EXISTS jsform_portlet_hidden_inputs CASCADE;
DROP TABLE IF EXISTS jsform_portlet_rows CASCADE;
DROP TABLE IF EXISTS xfjr_apply CASCADE;
DROP TABLE IF EXISTS xfjr_approve CASCADE;


DROP SEQUENCE IF EXISTS jsform_form_data_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_hiddeninput_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_jsform_col_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_jsform_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_jsform_row_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_jsform_td_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_jsform_th_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_jsform_tr_id_seq CASCADE;
DROP SEQUENCE IF EXISTS jsform_portlet_id_seq CASCADE;
DROP SEQUENCE IF EXISTS xfjr_approve_id_seq CASCADE;
DROP SEQUENCE IF EXISTS xfjr_apply_id_seq CASCADE;

CREATE TABLE jsform_form_data (
    id bigint NOT NULL,
    form_id bigint,
    name character varying(255),
    object_id bigint,
    value character varying(255),
    ve integer
);

CREATE SEQUENCE jsform_form_data_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE jsform_hiddeninput (
    id bigint NOT NULL,
    disp_order integer,
    dv character varying(255),
    html_class character varying(255),
    name character varying(255),
    placeholder character varying(255)
);

CREATE SEQUENCE jsform_hiddeninput_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE jsform_jsform (
    id bigint NOT NULL,
    html_id character varying(255),
    name character varying(255)
);

CREATE TABLE jsform_jsform_col (
    id bigint NOT NULL,
    addr_name character varying(255),
    aname character varying(255),
    atext_input character varying(255),
    checkboxloader_tkey character varying(255),
    checkboxloader_vkey character varying(255),
    cname character varying(255),
    code_name character varying(255),
    ctext_input character varying(255),
    date_format character varying(255),
    dictionary character varying(255),
    disp_order integer,
    dname character varying(255),
    dv character varying(255),
    ext_name character varying(255),
    html_class character varying(255),
    label character varying(255),
    name character varying(255),
    phone_type character varying(255),
    placeholder character varying(255),
    pname character varying(255),
    ptext_input character varying(255),
    radioloader_tkey character varying(255),
    radioloader_vkey character varying(255),
    readonly character varying(255),
    required character varying(255),
    selectloader_tkey character varying(255),
    selectloader_vkey character varying(255),
    tel_name character varying(255),
    text_input character varying(255),
    title character varying(255),
    type character varying(255),
    valuename character varying(255),
    width character varying(255)
);

CREATE TABLE jsform_jsform_col_hidden_inputs (
    portlet_cell_id bigint NOT NULL,
    hidden_inputs_id bigint NOT NULL
);

CREATE SEQUENCE jsform_jsform_col_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE jsform_jsform_col_id_seq OWNER TO xfjr;

CREATE TABLE jsform_jsform_col_tbody_trs (
    portlet_cell_id bigint NOT NULL,
    tbody_trs_id bigint NOT NULL
);

CREATE TABLE jsform_jsform_col_ths (
    portlet_cell_id bigint NOT NULL,
    ths_id bigint NOT NULL
);

CREATE TABLE jsform_jsform_hidden_inputs (
    form_id bigint NOT NULL,
    hidden_inputs_id bigint NOT NULL
);

CREATE SEQUENCE jsform_jsform_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE jsform_jsform_portlets (
    form_id bigint NOT NULL,
    portlets_id bigint NOT NULL
);

CREATE TABLE jsform_jsform_row (
    id bigint NOT NULL,
    disp_order integer
);

CREATE TABLE jsform_jsform_row_cols (
    portlet_row_id bigint NOT NULL,
    cols_id bigint NOT NULL
);

CREATE SEQUENCE jsform_jsform_row_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE jsform_jsform_row_id_seq OWNER TO xfjr;

CREATE TABLE jsform_jsform_td (
    id bigint NOT NULL,
    disp_order integer,
    html_id character varying(255),
    label character varying(255),
    name character varying(255),
    type character varying(255)
);

CREATE TABLE jsform_jsform_td_hidden_inputs (
    table_cell_id bigint NOT NULL,
    hidden_inputs_id bigint NOT NULL
);

CREATE SEQUENCE jsform_jsform_td_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE jsform_jsform_td_id_seq OWNER TO xfjr;

CREATE TABLE jsform_jsform_th (
    id bigint NOT NULL,
    disp_order integer,
    name character varying(255)
);

CREATE SEQUENCE jsform_jsform_th_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE jsform_jsform_th_id_seq OWNER TO xfjr;

CREATE TABLE jsform_jsform_tr (
    id bigint NOT NULL,
    disp_order integer
);

CREATE SEQUENCE jsform_jsform_tr_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE jsform_jsform_tr_id_seq OWNER TO xfjr;

CREATE TABLE jsform_jsform_tr_tds (
    table_row_id bigint NOT NULL,
    tds_id bigint NOT NULL
);

CREATE TABLE jsform_portlet (
    id bigint NOT NULL,
    disp_order integer,
    html_id character varying(255),
    name character varying(255)
);

CREATE TABLE jsform_portlet_hidden_inputs (
    portlet_id bigint NOT NULL,
    hidden_inputs_id bigint NOT NULL
);

CREATE SEQUENCE jsform_portlet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE jsform_portlet_id_seq OWNER TO xfjr;

CREATE TABLE jsform_portlet_rows (
    portlet_id bigint NOT NULL,
    rows_id bigint NOT NULL
);
CREATE TABLE xfjr_apply (
    id bigint NOT NULL,
    amount character varying(255),
    user_name character varying(255)
);

CREATE SEQUENCE xfjr_apply_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE xfjr_apply_id_seq OWNER TO xfjr;

CREATE TABLE xfjr_approve (
    id bigint NOT NULL,
    business_id bigint,
    opinion_id character varying(255),
    opinion_val character varying(255),
    task_id character varying(255),
    task_key character varying(255)
);

CREATE SEQUENCE xfjr_approve_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE xfjr_approve_id_seq OWNER TO xfjr;

ALTER TABLE ONLY jsform_form_data ALTER COLUMN id SET DEFAULT nextval('jsform_form_data_id_seq'::regclass);

ALTER TABLE ONLY jsform_hiddeninput ALTER COLUMN id SET DEFAULT nextval('jsform_hiddeninput_id_seq'::regclass);

ALTER TABLE ONLY jsform_jsform ALTER COLUMN id SET DEFAULT nextval('jsform_jsform_id_seq'::regclass);

ALTER TABLE ONLY jsform_jsform_col ALTER COLUMN id SET DEFAULT nextval('jsform_jsform_col_id_seq'::regclass);

ALTER TABLE ONLY jsform_jsform_row ALTER COLUMN id SET DEFAULT nextval('jsform_jsform_row_id_seq'::regclass);

ALTER TABLE ONLY jsform_jsform_td ALTER COLUMN id SET DEFAULT nextval('jsform_jsform_td_id_seq'::regclass);

ALTER TABLE ONLY jsform_jsform_th ALTER COLUMN id SET DEFAULT nextval('jsform_jsform_th_id_seq'::regclass);

ALTER TABLE ONLY jsform_jsform_tr ALTER COLUMN id SET DEFAULT nextval('jsform_jsform_tr_id_seq'::regclass);

ALTER TABLE ONLY jsform_portlet ALTER COLUMN id SET DEFAULT nextval('jsform_portlet_id_seq'::regclass);

ALTER TABLE ONLY xfjr_apply ALTER COLUMN id SET DEFAULT nextval('xfjr_apply_id_seq'::regclass);

ALTER TABLE ONLY xfjr_approve ALTER COLUMN id SET DEFAULT nextval('xfjr_approve_id_seq'::regclass);

SELECT pg_catalog.setval('jsform_form_data_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_hiddeninput_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_jsform_col_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_jsform_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_jsform_row_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_jsform_td_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_jsform_th_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_jsform_tr_id_seq', 1, false);
SELECT pg_catalog.setval('jsform_portlet_id_seq', 1, false);

ALTER TABLE ONLY jsform_form_data
    ADD CONSTRAINT jsform_form_data_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_hiddeninput
    ADD CONSTRAINT jsform_hiddeninput_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform_col
    ADD CONSTRAINT jsform_jsform_col_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform
    ADD CONSTRAINT jsform_jsform_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform_row
    ADD CONSTRAINT jsform_jsform_row_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform_td
    ADD CONSTRAINT jsform_jsform_td_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform_th
    ADD CONSTRAINT jsform_jsform_th_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform_tr
    ADD CONSTRAINT jsform_jsform_tr_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_portlet
    ADD CONSTRAINT jsform_portlet_pkey PRIMARY KEY (id);

ALTER TABLE ONLY jsform_jsform_col_hidden_inputs
    ADD CONSTRAINT uk_1hh3osefix0hk1ymg56wu0vrh UNIQUE (hidden_inputs_id);

ALTER TABLE ONLY jsform_jsform_td_hidden_inputs
    ADD CONSTRAINT uk_5kcr2n21pmm6fkqtpyxlhaihm UNIQUE (hidden_inputs_id);

ALTER TABLE ONLY jsform_jsform_hidden_inputs
    ADD CONSTRAINT uk_7tds22rdnun9mbjj1smx438i1 UNIQUE (hidden_inputs_id);

ALTER TABLE ONLY jsform_jsform_tr_tds
    ADD CONSTRAINT uk_a9890ne365gahpkc8mxa1qk7l UNIQUE (tds_id);

ALTER TABLE ONLY jsform_jsform_row_cols
    ADD CONSTRAINT uk_duefrk2tyb98jb9xtja4vfm35 UNIQUE (cols_id);

ALTER TABLE ONLY jsform_portlet_rows
    ADD CONSTRAINT uk_l42ast1wcl8fao8oulh6ulfvm UNIQUE (rows_id);

ALTER TABLE ONLY jsform_portlet_hidden_inputs
    ADD CONSTRAINT uk_n4o5liv1e4bps6ni4jik9bgxj UNIQUE (hidden_inputs_id);

ALTER TABLE ONLY jsform_jsform_col_ths
    ADD CONSTRAINT uk_nky1h11w52x29qm0rlwp0ymoi UNIQUE (ths_id);

ALTER TABLE ONLY jsform_jsform_portlets
    ADD CONSTRAINT uk_nsbgktitxak306k80wgbjvqk6 UNIQUE (portlets_id);

ALTER TABLE ONLY jsform_jsform_col_tbody_trs
    ADD CONSTRAINT uk_pmtw7f4qegqcdik4yeoede1ol UNIQUE (tbody_trs_id);

ALTER TABLE ONLY jsform_jsform_col_hidden_inputs
    ADD CONSTRAINT fk169hgalr02t1cfw8a0rsxhrxv FOREIGN KEY (portlet_cell_id) REFERENCES jsform_jsform_col(id);

ALTER TABLE ONLY jsform_jsform_col_hidden_inputs
    ADD CONSTRAINT fk284mvlkj8v7f8bx3ox3g1xo6r FOREIGN KEY (hidden_inputs_id) REFERENCES jsform_hiddeninput(id);

ALTER TABLE ONLY jsform_jsform_portlets
    ADD CONSTRAINT fk3vge5mspgwp8aa9qgb4ilwoxn FOREIGN KEY (portlets_id) REFERENCES jsform_portlet(id);

ALTER TABLE ONLY jsform_jsform_row_cols
    ADD CONSTRAINT fk406r6ioe972jrvwl1ouo2fhsn FOREIGN KEY (portlet_row_id) REFERENCES jsform_jsform_row(id);

ALTER TABLE ONLY jsform_jsform_col_tbody_trs
    ADD CONSTRAINT fk4qwyeu4tmir7yk94y0p2lbpiv FOREIGN KEY (tbody_trs_id) REFERENCES jsform_jsform_tr(id);

ALTER TABLE ONLY jsform_jsform_portlets
    ADD CONSTRAINT fk5gpyajsrudkb82oc7ndjrq8is FOREIGN KEY (form_id) REFERENCES jsform_jsform(id);

ALTER TABLE ONLY jsform_portlet_hidden_inputs
    ADD CONSTRAINT fk7at6o3ujsp0vxjqjpw28kx9sb FOREIGN KEY (hidden_inputs_id) REFERENCES jsform_hiddeninput(id);

ALTER TABLE ONLY jsform_jsform_tr_tds
    ADD CONSTRAINT fk7k20xp1qc8icwhn59ufe6bamc FOREIGN KEY (tds_id) REFERENCES jsform_jsform_td(id);

ALTER TABLE ONLY jsform_jsform_td_hidden_inputs
    ADD CONSTRAINT fk8rqb9h298txrsmmtblipdui7w FOREIGN KEY (hidden_inputs_id) REFERENCES jsform_hiddeninput(id);

ALTER TABLE ONLY jsform_jsform_row_cols
    ADD CONSTRAINT fkau6mggkvi3d8nh58c9yacvsth FOREIGN KEY (cols_id) REFERENCES jsform_jsform_col(id);

ALTER TABLE ONLY jsform_jsform_hidden_inputs
    ADD CONSTRAINT fkccge3sn9qd26nurnotyyoee7 FOREIGN KEY (form_id) REFERENCES jsform_jsform(id);

ALTER TABLE ONLY jsform_jsform_td_hidden_inputs
    ADD CONSTRAINT fkgmut8b5p5fn6ya07n7u7ia3jq FOREIGN KEY (table_cell_id) REFERENCES jsform_jsform_td(id);

ALTER TABLE ONLY jsform_jsform_tr_tds
    ADD CONSTRAINT fkjv42jdgl5nkiui3p4xyhf9lm3 FOREIGN KEY (table_row_id) REFERENCES jsform_jsform_tr(id);

ALTER TABLE ONLY jsform_jsform_col_tbody_trs
    ADD CONSTRAINT fkkmj31qlrleijt0ie62g7p6evc FOREIGN KEY (portlet_cell_id) REFERENCES jsform_jsform_col(id);

ALTER TABLE ONLY jsform_portlet_hidden_inputs
    ADD CONSTRAINT fkmmldojxqy22mght2jqster4x3 FOREIGN KEY (portlet_id) REFERENCES jsform_portlet(id);

ALTER TABLE ONLY jsform_portlet_rows
    ADD CONSTRAINT fkqgbenjs3xfn1iyp6f95aimk79 FOREIGN KEY (portlet_id) REFERENCES jsform_portlet(id);

ALTER TABLE ONLY jsform_portlet_rows
    ADD CONSTRAINT fkqs8to80oul7m1m8501cctdxok FOREIGN KEY (rows_id) REFERENCES jsform_jsform_row(id);

ALTER TABLE ONLY jsform_jsform_hidden_inputs
    ADD CONSTRAINT fkqtlcsh4ecmoq11hc1c3kkgk2 FOREIGN KEY (hidden_inputs_id) REFERENCES jsform_hiddeninput(id);

ALTER TABLE ONLY jsform_jsform_col_ths
    ADD CONSTRAINT fkrhkjow5na0plm7cix3mtpcd5w FOREIGN KEY (portlet_cell_id) REFERENCES jsform_jsform_col(id);

ALTER TABLE ONLY jsform_jsform_col_ths
    ADD CONSTRAINT fks62k5ihaum7bt0deam5yqcidg FOREIGN KEY (ths_id) REFERENCES jsform_jsform_th(id);
   
ALTER TABLE ONLY xfjr_apply
    ADD CONSTRAINT xfjr_apply_pkey PRIMARY KEY (id);

ALTER TABLE ONLY xfjr_approve
    ADD CONSTRAINT xfjr_approve_pkey PRIMARY KEY (id);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cb TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cb TO zkbc;

