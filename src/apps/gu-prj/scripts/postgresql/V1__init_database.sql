COMMENT ON SCHEMA xfjr_cu IS '消费金融平台-统一用户';
DO
$body$
BEGIN
   IF NOT EXISTS (SELECT * FROM   pg_catalog.pg_user WHERE  usename = 'zkbc')
   THEN
      CREATE ROLE zkbc LOGIN PASSWORD 'Zkbc@2016';
   END IF;
END
$body$;
GRANT ALL PRIVILEGES ON SCHEMA xfjr_cu TO zkbc;
