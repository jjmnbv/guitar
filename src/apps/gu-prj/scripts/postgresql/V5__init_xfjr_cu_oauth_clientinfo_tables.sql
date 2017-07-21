DROP TABLE IF EXISTS oauth_clientinfo;
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
CREATE SEQUENCE oauth_clientinfo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE oauth_clientinfo_id_seq OWNED BY oauth_clientinfo.id;
ALTER TABLE ONLY oauth_clientinfo ALTER COLUMN id SET DEFAULT nextval('oauth_clientinfo_id_seq'::regclass);
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (1, 'cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cs-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (3, 'xfjr-cs-prj-l', 'C1hAkYKYyUmKQcrwbfJEA', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cs-prj', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (4, 'yut-cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cs-prj', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (5, 'xfjr-cb-prj-l', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (6, 'cb-prj', 'CBC1hAkYKYyKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (8, 'xfjr-cb-prj8', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.178:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://192.168.2.178:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (9, 'xfjr-cb-prj9', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.155:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://192.168.2.155:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (10, 'xfjr-cb-prj-lzc', 'CBC1hAkYKYyKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (11, 'xfjr-cb-prj-xkq', 'CBC1hAkYKYyKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (2, 'xfjr-cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://124.193.90.196:8000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cs-prj', 'http://124.193.90.196:8000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (7, 'xfjr-cb-prj', 'CBC1hAkYKYyKQcrwbfJEA', 'http://124.193.90.196:8001/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://124.193.90.196:8001/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (13, 'xfjr-cb-prj-fl', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.124:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://192.168.2.124:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (14, 'xfjr-cb-prj-ig', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.71:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cb-prj', 'http://192.168.2.71:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO oauth_clientinfo (id, client_id, client_secret, client_uri, default_scope, description, expires_in, icon_uri, issued_at, name, redirect_uri, scope) VALUES (12, 'zy-cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo', NULL, NULL, NULL, NULL, 'cs-prj', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo');
SELECT pg_catalog.setval('oauth_clientinfo_id_seq', 21, true);
ALTER TABLE ONLY oauth_clientinfo
    ADD CONSTRAINT oauth_clientinfo_pkey PRIMARY KEY (id);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cu TO zkbc;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cu TO zkbc;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cu TO zkbc;
