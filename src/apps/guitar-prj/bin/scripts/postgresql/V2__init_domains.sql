DROP DOMAIN IF EXISTS amount CASCADE;
DROP DOMAIN IF EXISTS bigmessage CASCADE;
DROP DOMAIN IF EXISTS caption CASCADE;
DROP DOMAIN IF EXISTS cd CASCADE;
DROP DOMAIN IF EXISTS comment CASCADE;
DROP DOMAIN IF EXISTS corp_na CASCADE;
DROP DOMAIN IF EXISTS cu_na CASCADE;
DROP DOMAIN IF EXISTS day CASCADE;
DROP DOMAIN IF EXISTS de CASCADE;
DROP DOMAIN IF EXISTS dt CASCADE;
DROP DOMAIN IF EXISTS id CASCADE;
DROP DOMAIN IF EXISTS mo_no CASCADE;
DROP DOMAIN IF EXISTS no CASCADE;
DROP DOMAIN IF EXISTS options CASCADE;
DROP DOMAIN IF EXISTS pa_no CASCADE;
DROP DOMAIN IF EXISTS percent CASCADE;
DROP DOMAIN IF EXISTS quantity CASCADE;
DROP DOMAIN IF EXISTS rate CASCADE;
DROP DOMAIN IF EXISTS ref_id CASCADE;
DROP DOMAIN IF EXISTS su_id CASCADE;
DROP DOMAIN IF EXISTS tm CASCADE;
DROP DOMAIN IF EXISTS trade_no CASCADE;
DROP DOMAIN IF EXISTS ty CASCADE;
DROP DOMAIN IF EXISTS version CASCADE;
DROP DOMAIN IF EXISTS yn CASCADE;

CREATE DOMAIN amount AS numeric(16,2);
ALTER DOMAIN amount OWNER TO zkbc;

CREATE DOMAIN bigmessage AS character varying(300);
ALTER DOMAIN bigmessage OWNER TO zkbc;

CREATE DOMAIN caption AS character varying(80);
ALTER DOMAIN caption OWNER TO zkbc;

CREATE DOMAIN cd AS character varying(10);
ALTER DOMAIN cd OWNER TO zkbc;

COMMENT ON DOMAIN cd IS '代码';

CREATE DOMAIN comment AS character varying(200);
ALTER DOMAIN comment OWNER TO zkbc;

CREATE DOMAIN corp_na AS character varying(50);
ALTER DOMAIN corp_na OWNER TO zkbc;

COMMENT ON DOMAIN corp_na IS '公司名称';

CREATE DOMAIN cu_na AS character varying(30);
ALTER DOMAIN cu_na OWNER TO zkbc;

COMMENT ON DOMAIN cu_na IS '客户名称';

CREATE DOMAIN day AS smallint;
ALTER DOMAIN day OWNER TO zkbc;

COMMENT ON DOMAIN day IS '1~31';

CREATE DOMAIN de AS character varying(60);
ALTER DOMAIN de OWNER TO zkbc;

COMMENT ON DOMAIN de IS '描述';

CREATE DOMAIN dt AS character varying(10);
ALTER DOMAIN dt OWNER TO zkbc;

CREATE DOMAIN id AS numeric(20,0);
ALTER DOMAIN id OWNER TO zkbc;

CREATE DOMAIN mo_no AS character varying(11);
ALTER DOMAIN mo_no OWNER TO zkbc;

COMMENT ON DOMAIN mo_no IS '移动电话号码';

CREATE DOMAIN no AS character varying(25);
ALTER DOMAIN no OWNER TO zkbc;

CREATE DOMAIN options AS character varying(300);
ALTER DOMAIN options OWNER TO zkbc;

CREATE DOMAIN pa_no AS character varying(20);
ALTER DOMAIN pa_no OWNER TO zkbc;

CREATE DOMAIN percent AS numeric(16,9);
ALTER DOMAIN percent OWNER TO zkbc;

CREATE DOMAIN quantity AS integer;
ALTER DOMAIN quantity OWNER TO zkbc;

CREATE DOMAIN rate AS numeric(16,9);
ALTER DOMAIN rate OWNER TO zkbc;

CREATE DOMAIN ref_id AS numeric(20,0);
ALTER DOMAIN ref_id OWNER TO zkbc;

CREATE DOMAIN su_id AS smallint;
ALTER DOMAIN su_id OWNER TO zkbc;

CREATE DOMAIN tm AS character varying(8);
ALTER DOMAIN tm OWNER TO zkbc;

CREATE DOMAIN trade_no AS numeric(20,0);
ALTER DOMAIN trade_no OWNER TO zkbc;

CREATE DOMAIN ty AS character varying(6);
ALTER DOMAIN ty OWNER TO zkbc;

CREATE DOMAIN version AS integer;
ALTER DOMAIN version OWNER TO zkbc;

COMMENT ON DOMAIN version IS '版本';

CREATE DOMAIN yn AS character(1);
ALTER DOMAIN yn OWNER TO zkbc;