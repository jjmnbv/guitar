CREATE SEQUENCE cb_loan_apply_simple_id_seq
    START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
SELECT pg_catalog.setval('cb_loan_apply_simple_id_seq', 40, true);
ALTER SEQUENCE cb_loan_apply_simple_id_seq OWNED BY cb_loan_apply_simple.id;
ALTER TABLE ONLY cb_loan_apply_simple ALTER COLUMN id
    SET DEFAULT nextval('cb_loan_apply_simple_id_seq'::regclass);
