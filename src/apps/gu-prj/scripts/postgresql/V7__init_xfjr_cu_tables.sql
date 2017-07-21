/*
Navicat PGSQL Data Transfer

Source Server         : localhost-xfjr
Source Server Version : 90601
Source Host           : localhost:5432
Source Database       : xfjr
Source Schema         : xfjr_cu

Target Server Type    : PGSQL
Target Server Version : 90601
File Encoding         : 65001

Date: 2017-04-06 13:55:50
*/


-- ----------------------------
-- Sequence structure for hibernate_sequence
-- ----------------------------
DROP SEQUENCE "xfjr_cu"."hibernate_sequence" CASCADE ;
CREATE SEQUENCE "xfjr_cu"."hibernate_sequence"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1879
 CACHE 1;
SELECT setval('"xfjr_cu"."hibernate_sequence"', 1879, true);

-- ----------------------------
-- Sequence structure for message_publish_info_id_seq
-- ----------------------------
DROP SEQUENCE "xfjr_cu"."message_publish_info_id_seq" CASCADE ;
CREATE SEQUENCE "xfjr_cu"."message_publish_info_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 304
 CACHE 1;
SELECT setval('"xfjr_cu"."message_publish_info_id_seq"', 304, true);

-- ----------------------------
-- Sequence structure for message_subscribe_info_id_seq
-- ----------------------------
DROP SEQUENCE "xfjr_cu"."message_subscribe_info_id_seq" CASCADE ;
CREATE SEQUENCE "xfjr_cu"."message_subscribe_info_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 5
 CACHE 1;
SELECT setval('"xfjr_cu"."message_subscribe_info_id_seq"', 5, true);

-- ----------------------------
-- Sequence structure for oauth_clientinfo_id_seq
-- ----------------------------
DROP SEQUENCE "xfjr_cu"."oauth_clientinfo_id_seq" CASCADE ;
CREATE SEQUENCE "xfjr_cu"."oauth_clientinfo_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 47
 CACHE 1;
SELECT setval('"xfjr_cu"."oauth_clientinfo_id_seq"', 47, true);

-- ----------------------------
-- Sequence structure for server_noticeinfo_id_seq
-- ----------------------------
DROP SEQUENCE "xfjr_cu"."server_noticeinfo_id_seq" CASCADE ;
CREATE SEQUENCE "xfjr_cu"."server_noticeinfo_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 117480
 CACHE 1;
SELECT setval('"xfjr_cu"."server_noticeinfo_id_seq"', 117480, true);

-- ----------------------------
-- Table structure for cs_di_c
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cs_di_c";
CREATE TABLE "xfjr_cu"."cs_di_c" (
"di_ki_id" "xfjr_cu"."id" NOT NULL,
"di_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"di_ca" "xfjr_cu"."caption" COLLATE "default" NOT NULL,
"st" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"su_di_ki_id" "xfjr_cu"."cd" COLLATE "default",
"su_di_cd" "xfjr_cu"."cd" COLLATE "default",
"disp_or" "xfjr_cu"."quantity" NOT NULL,
"ci_cd" "xfjr_cu"."cd" COLLATE "default",
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cs_di_c" IS '字典名称表';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."di_ki_id" IS '字典种类';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."di_cd" IS '字典代码';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."di_ca" IS '字典中文';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."st" IS '状态
CS 初始
JH 激活';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."su_di_ki_id" IS '子字典种类';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."su_di_cd" IS '子字典代码';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."disp_or" IS '显示顺序
在字典项目中的排序。';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."ci_cd" IS '征信对应码
用于和人行征信对应';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cs_di_c"."la_up_us_id" IS '最新更新用户';

-- ----------------------------
-- Records of cs_di_c
-- ----------------------------
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('1', 'DH', '1', '贷后管理费', 'JH', null, null, '5', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('1', 'SX', '1', '授信管理费', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('1', 'TH', '1', '退货手续费', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('1', 'TQ', '1', '提前还款手续费', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('1', 'TX', '1', '贴息', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('2', 'DK', '1', '同贷款还款计划', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('2', 'FH', '1', '放款后收取', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('2', 'FK', '1', '出账前收取', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('2', 'FQ', '1', '分期收取', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('3', 'CS', '1', '厂商', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('3', 'JQ', '1', '借款人', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('3', 'JX', '1', '经销商', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('3', 'QT', '1', '其他', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('4', 'BL', '1', '按贷款比例', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('4', 'GD', '1', '固定费用', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('5', 'FD', '1', '浮动罚息', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('5', 'GD', '1', '固定罚息', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('6', 'HS001', '1', '通用类型', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('7', 'GT', '1', '个体经营户', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('7', 'HZ', '1', '合作方', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('7', 'YB', '1', '一般自然人', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('8', 'LS', '1', '临时客户', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('8', 'PT', '1', '普通客户', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('8', 'YG', '1', '员工', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('8', 'ZG', '1', 'VIP客户', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('9', 'CS', '1', '初始', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('9', 'JH', '1', '激活', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('9', 'QZ', '1', '欺诈', 'JH', null, null, '5', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('9', 'SA', '1', '涉案', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('9', 'SL', '1', '失联', 'JH', null, null, '6', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('9', 'SW', '1', '死亡', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('10', 'N', '1', '男', 'JH', null, null, '1', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('10', 'V', '1', '女', 'JH', null, null, '2', '2', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('11', 'LT', '1', '离婚', 'JH', null, null, '4', '40', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('11', 'QT', '1', '其他', 'JH', null, null, '6', '90', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('11', 'SO', '1', '丧偶', 'JH', null, null, '5', '30', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('11', 'WH', '1', '未婚', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('11', 'YW', '1', '已婚未育', 'JH', null, null, '2', '20', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('11', 'YY', '1', '已婚已育', 'JH', null, null, '3', '20', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'DY', '1', '自有房屋已抵押', 'JH', null, null, '9', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'DZ', '1', '多套自有', 'JH', null, null, '6', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'GT', '1', '共同拥有或与父母同住', 'JH', null, null, '8', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'JC', '1', '军产房', 'JH', null, null, '5', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'XC', '1', '小产权', 'JH', null, null, '11', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'ZD', '1', '自购有贷款', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'ZF', '1', '租房', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'ZG', '1', '租借或公司所有', 'JH', null, null, '10', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'ZJ', '1', '宅基地房', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'ZW', '1', '自购无贷款', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('12', 'ZY', '1', '自有', 'JH', null, null, '7', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('13', 'BK', '1', '本科', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('13', 'CZ', '1', '初中及以下', 'JH', null, null, '5', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('13', 'DZ', '1', '大专', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('13', 'GZ', '1', '高中', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('13', 'SS', '1', '硕士及以上', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('14', 'GY', '1', '国有企业', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('14', 'MY', '1', '民营企业', 'JH', null, null, '6', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('14', 'SY', '1', '事业单位', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('14', 'WG', '1', '无固定单位', 'JH', null, null, '5', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('14', 'WX', '1', '微型企业', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('14', 'ZF', '1', '政府机关', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('15', 'GZ', '1', '工资收入', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('15', 'JY', '1', '经营收入', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('15', 'QT', '1', '其他', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('15', 'TZ', '1', '投资收入', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'BB', '1', '父亲', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'FQ', '1', '夫妻', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'JM', '1', '姐妹', 'JH', null, null, '5', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'MM', '1', '母亲', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'PY', '1', '朋友', 'JH', null, null, '9', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'QT', '1', '其他', 'JH', null, null, '11', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'TS', '1', '同事', 'JH', null, null, '7', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'TX', '1', '同学', 'JH', null, null, '8', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'XD', '1', '兄弟', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'ZJ', '1', '自己', 'JH', null, null, '10', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('16', 'ZN', '1', '子女', 'JH', null, null, '6', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('17', 'JR', '1', '军人证', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('17', 'SF', '1', '身份证', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('18', 'FQ', '1', '分期放款', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('18', 'LF', '1', '立即放款', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('19', 'BQ', '1', '不全', 'JH', null, null, '4', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('19', 'CS', '1', '初始', 'JH', null, null, '1', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('19', 'JH', '1', '激活', 'JH', null, null, '2', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('19', 'ZF', '1', '作废', 'JH', null, null, '3', null, '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('20', 'CJ', '1', '一般领导', 'JH', null, null, '4', '3', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('20', 'GJ', '1', '高级领导', 'JH', null, null, '2', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('20', 'WU', '1', '一般员工', 'JH', null, null, '1', '0', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('20', 'WZ', '1', '未知', 'JH', null, null, '5', '9', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('20', 'ZJ', '1', '中层领导', 'JH', null, null, '3', '2', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('21', 'DY', '1', '待业人员', 'JH', null, null, '5', 'Y', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('21', 'FW', '1', '服务人员', 'JH', null, null, '3', '4', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('21', 'JS', '1', '技术', 'JH', null, null, '1', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('21', 'QT', '1', '不变分类的其他', 'JH', null, null, '6', 'Y', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('21', 'SC', '1', '生产运输工', 'JH', null, null, '4', '5', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('21', 'XS', '1', '销售人员', 'JH', null, null, '2', '4', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('22', 'JY', '1', '教育', 'JH', null, null, '2', 'P', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('22', 'NL', '1', '农、林、牧、渔业', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('22', 'PF', '1', '批发零售', 'JH', null, null, '5', 'H', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('22', 'XX', '1', '信息技术', 'JH', null, null, '4', 'G', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('22', 'ZS', '1', '住宿和餐饮业', 'JH', null, null, '3', 'I', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('23', 'JD', '1', '绝对时间', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('23', 'XD', '1', '相对时间', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('24', 'LJ', '1', '立即发送', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('24', 'PL', '1', '批量发送', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('25', '<', '1', '小于', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('25', '<=', '1', '小于等于', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('25', '<>', '1', '不等于', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('25', '>', '1', '大于', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('25', '>=', '1', '大于等于', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('26', '>', '1', '大于', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('27', 'QT', '1', '其他', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('27', 'TQ', '1', '提前提醒', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('27', 'YQ', '1', '逾期提醒', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('28', 'CS', '1', '初始', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('28', 'FJ', '1', '否决', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('28', 'JH', '1', '激活', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('28', 'SX', '1', '失效', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('28', 'ZT', '1', '暂停', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('28', 'ZZ', '1', '终止', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('29', 'JQ', '1', '借款人', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('29', 'XS', '1', '销售员', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('29', 'YG', '1', '员工', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('30', 'CL', '1', '材料欺诈', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('30', 'QT', '1', '其他', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('30', 'ZJ', '1', '证件欺诈', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('32', 'CS', '1', '初始', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('32', 'JH', '1', '激活', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('32', 'TC', '1', '退出', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('33', 'YY', '1', '营业执照', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('33', 'ZZ', '1', '组织机构代码', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('34', 'CS', '1', '厂商', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('34', 'HZ', '1', '合作方', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('34', 'JX', '1', '经销商', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('35', 'CW', '1', '错误', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('35', 'JG', '1', '警告', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('35', 'XX', '1', '消息', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('35', 'YC', '1', '严重错误', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('35', 'YJ', '1', '严重警告', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB01', '1', '自动扣款入账', 'JH', null, null, '17', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB02', '1', '贷款状态变更', 'JH', null, null, '18', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB03', '1', '组合减值处理', 'JH', null, null, '19', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB04', '1', '摊销', 'JH', null, null, '20', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB05', '1', '滚积数', 'JH', null, null, '21', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB06', '1', '批量利息计提', 'JH', null, null, '22', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LB07', '1', '批量逾期计提', 'JH', null, null, '23', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO01', '1', '贷款交易', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO02', '1', '放款交易', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO03', '1', '退货', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO04', '1', '贷款停息', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO05', '1', '利息减免', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO06', '1', '溢缴款存取', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO07', '1', '交易冲正', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO08', '1', '还款交易', 'JH', null, null, '8', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO09', '1', '贷款展期', 'JH', null, null, '9', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO10', '1', '收取费用', 'JH', null, null, '10', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO11', '1', '贷款平移', 'JH', null, null, '11', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO12', '1', '手续费减免', 'JH', null, null, '12', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO13', '1', '贷款信息变更', 'JH', null, null, '13', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO14', '1', '还款方式调整', 'JH', null, null, '14', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO15', '1', '贷款核销', 'JH', null, null, '15', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('36', 'LO16', '1', '归还保证金', 'JH', null, null, '16', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'AQFX', '1', '按期付息', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'BTJG', '1', '本息不同间隔', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'DEBJ', '1', '等额本金', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'DEBX', '1', '等额本息', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'LSBQ', '1', '利随本清', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'QQDK', '1', '气球贷', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'TXHK', '1', '弹性还款', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('37', 'ZYHK', '1', '自由还款', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('38', 'DK', '1', '贷款', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('38', 'SP', '1', '商品价格', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('39', 'GDTS', '1', '固定天数', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('39', 'SJTS', '1', '实际天数', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('40', 'FK', '1', '放款本金', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('40', 'SY', '1', '剩余本金', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('41', 'DEBJ', '1', '等额本金', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('41', 'DEBX', '1', '等额本息', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('42', 'LB', '1', '利息和本金', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('42', 'LX', '1', '利息', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('43', '1', '1', '通用流程', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('43', '2', '1', '教育贷流程', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('44', 'NY', '1', '耐用消费贷款', 'JH', '46', null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('44', 'TX', '1', '通用消费贷款', 'JH', '45', null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('44', 'XJ', '1', '现金贷', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('45', '03', '1', '教育分期', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('45', '04', '1', '装修分期', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('46', '01', '1', '手机分期', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('46', '02', '1', '家具分期', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('47', 'CJ', '1', '次级', 'JH', null, null, '3', '3', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('47', 'GZ', '1', '关注', 'JH', null, null, '2', '2', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('47', 'KY', '1', '可疑', 'JH', null, null, '4', '4', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('47', 'SS', '1', '损失', 'JH', null, null, '5', '5', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('47', 'WZ', '1', '未知', 'JH', null, null, '6', '9', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('47', 'ZC', '1', '正常', 'JH', null, null, '1', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('48', 'YT', '1', '逾期天数', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('49', 'GS', '1', '共同申请人', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('49', 'SQ', '1', '申请人', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('49', 'WT', '1', '委托人', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('50', 'FB', '1', '浮动比例', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('50', 'FJ', '1', '浮动金额', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('50', 'QM', '1', '全免', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('51', 'QT', '1', '其他', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('51', 'SP', '1', '审批材料', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('51', 'SQ', '1', '申请材料', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'FK', '1', '放款和贷后', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'GZ', '1', '工作材料', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'JZ', '1', '居住材料', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'QT', '1', '其他', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'SF', '1', '身份材料', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'SQ', '1', '申请材料', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('52', 'SR', '1', '收入材料', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('53', 'GS', '1', '共同申请人', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('53', 'ZS', '1', '主申请人', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('54', 'BS', '1', '白色预警', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('54', 'CS', '1', '橙色预警', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('54', 'HS', '1', '黄色预警', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('54', 'LS', '1', '蓝色预警', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('54', 'OS', '1', '红色预警', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('55', 'DX', '1', '短信', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('55', 'PT', '1', '平台预警短信', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('55', 'QQ', '1', 'QQ', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('55', 'YJ', '1', '电子邮件', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('56', 'DW', '1', '单位信息核实', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('56', 'LX', '1', '联系人核实', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('56', 'QT', '1', '其它', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('56', 'SF', '1', '本人身份核实', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('57', 'FD', '1', '浮动利率', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('57', 'GD', '1', '固定利率', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('58', '1Y', '1', '1月1日调整', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('58', 'GD', '1', '固定日调整', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('58', 'HK', '1', '还款周期', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('58', 'LJ', '1', '立即调整', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('58', 'MY', '1', '满一年调整', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('59', 'MY', '1', '美元', 'JH', null, null, '2', 'USD', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('59', 'RMB', '1', '人民币', 'JH', null, null, '1', 'CNY', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'ANZ', '1', '安卓APP进单', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'DX', '1', '电销', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'HB', '1', '伙伴数据平台', 'JH', null, null, '9', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'HN', '1', '行内进单', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'IOS', '1', 'IOS APP进单', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'MD', '1', '门店进单', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'PAD', '1', '客户经理PAD', 'JH', null, null, '8', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'PC', '1', 'PC进单', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('60', 'WX', '1', '微信', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('61', 'AJ', '1', '按揭房', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('61', 'GJ', '1', '公积金', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('61', 'QT', '1', '其他', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('61', 'QY', '1', '企业主', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('61', 'SB', '1', '社保卡', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('61', 'XY', '1', '信用卡', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('62', 'FK', '1', '放款日', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('62', 'QT', '1', '固定日', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('63', 'FC', '1', '付出', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('63', 'SQ', '1', '收取', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('64', 'WFK', '1', '未放款', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('64', 'YCZ', '1', '已冲正', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('64', 'YFK', '1', '已放款', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('65', 'FK', '1', '放款账号', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('65', 'HK', '1', '还款账号', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('65', 'ST', '1', '受托支付账号', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('66', 'ST', '1', '受托支付', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('66', 'Zj', '1', '直接支付', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F02', '1', '贷后管理费-分期手续费', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F03', '1', '资信服务费', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F04', '1', '资信管理费-放款时差额扣收的手续费', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F05', '1', '提款费-放款时扣收的一次性费用', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F06', '1', '逾期管理费-违约金', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F07', '1', '催收工本费-滞纳金', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F08', '1', '保证金', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('67', 'F09', '1', '提前还款手续费', 'JH', null, null, '8', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'FW', '1', '服务', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'GL', '1', '管理', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'JS', '1', '技术', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'QT', '1', '其他', 'JH', null, null, '7', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'SC', '1', '生产运输', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'XS', '1', '销售', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('68', 'ZG', '1', '自雇', 'JH', null, null, '6', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('69', 'FR', '1', '法人', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('69', 'LX', '1', '联系人', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('69', 'YW', '1', '业务联系人', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('69', 'ZG', '1', '业务主管', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('70', 'CX', '1', '查询', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('70', 'FW', '1', '菜单访问', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('70', 'SC', '1', '删除', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('70', 'XG', '1', '修改', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('70', 'XZ', '1', '新增', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('71', 'HT', '1', '合同', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('71', 'SQ', '1', '贷款申请', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('72', 'DK', '1', '贷款申请类', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('72', 'QT', '1', '其他类', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('73', 'CR', '1', '成人', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('73', 'DK', '1', '统招', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('73', 'LX', '1', '留学', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('73', 'YD', '1', '夜大', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('73', 'ZK', '1', '自考', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('74', 'BY', '1', '毕业', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('74', 'DK', '1', '在读', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('75', 'R0', '1', '数据检查', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('75', 'R1', '1', '身份和黑名单检查', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('75', 'R2', '1', '征信准入', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('75', 'R3', '1', '客户评级、核额、风险预警', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('76', 'BS', '1', '博士', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('76', 'MB', '1', '名誉博士', 'JH', null, null, '4', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('76', 'QT', '1', '其他', 'JH', null, null, '5', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('76', 'SS', '1', '硕士', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('76', 'XS', '1', '学士', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('77', 'FY', '1', '复印件', 'JH', null, null, '2', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('77', 'YF', '1', '原件+复印件', 'JH', null, null, '3', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('77', 'YJ', '1', '原件', 'JH', null, null, '1', 'A', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('78', 'CJ', '1', '初级', 'JH', null, null, '2', '3', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('78', 'GJ', '1', '高级', 'JH', null, null, '4', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('78', 'WU', '1', '无', 'JH', null, null, '1', '0', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('78', 'WZ', '1', '未知', 'JH', null, null, '5', '9', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('78', 'ZJ', '1', '中级', 'JH', null, null, '3', '2', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('79', 'DZ', '1', '呆账(待核销)', 'JH', null, null, '1', '4', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('79', 'JQ', '1', '结清', 'JH', null, null, '1', '3', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('79', 'YQ', '1', '逾期', 'JH', null, null, '1', '2', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('79', 'ZC', '1', '正常', 'JH', null, null, '1', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('79', 'ZZ', '1', '转出', 'JH', null, null, '1', '5', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'BZ', '1', '自然人保证', 'JH', null, null, '1', '3', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'DY', '1', '抵押', 'JH', null, null, '1', '2', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'LB', '1', '农户联保', 'JH', null, null, '1', '7', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'QT', '1', '其他', 'JH', null, null, '1', '9', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'XY', '1', '信用/免担保', 'JH', null, null, '1', '4', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'ZB', '1', '组合(不含自然人保证)', 'JH', null, null, '1', '6', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'ZH', '1', '组合(含自然人保证)', 'JH', null, null, '1', '5', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('80', 'ZY', '1', '质押', 'JH', null, null, '1', '1', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'BD', '1', '不定期', 'JH', null, null, '1', '08', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'BN', '1', '半年', 'JH', null, null, '1', '05', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'J', '1', '季', 'JH', null, null, '1', '04', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'N', '1', '年', 'JH', null, null, '1', '06', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'QT', '1', '其他', 'JH', null, null, '1', '99', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'R', '1', '日', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'Y', '1', '月', 'JH', null, null, '1', '03', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'YC', '1', '一次性', 'JH', null, null, '1', '07', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('81', 'Z', '1', '周', 'JH', null, null, '1', '02', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('82', 'Y', '1', '月', 'JH', null, null, '1', '03', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '00.001', '1', '是否有黑名单', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '00.002', '1', '公安是否通过', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.001', '1', '人行.是否存在担保人代还', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.002', '1', '是否存在以资抵债', 'JH', null, null, '4', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.003', '1', '是否存在展期', 'JH', null, null, '5', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.004', '1', '是否贷款逾期', 'JH', null, null, '6', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.005', '1', '是否信用卡逾期', 'JH', null, null, '7', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.006', '1', '是否信用卡逾期', 'JH', null, null, '8', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.007', '1', '未结清信用贷款笔数（不包括信用卡）', 'JH', null, null, '9', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.008', '1', '信用卡总授信额度', 'JH', null, null, '10', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.009', '1', '信用卡已使用额度', 'JH', null, null, '11', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.010', '1', '信用卡数量', 'JH', null, null, '12', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.011', '1', '贷款逾期金额', 'JH', null, null, '13', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('83', '01.012', '1', '贷记卡逾期金额', 'JH', null, null, '14', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '01', '1', '单款简单录入', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '02', '1', '风控-身份', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '03', '1', '风控-准入', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '04', '1', '贷款详情录入', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '05', '1', '风控-风险提示', 'JH', null, null, '4', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '06', '1', '风控-评级', 'JH', null, null, '5', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '07', '1', '风控-核额', 'JH', null, null, '6', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '08', '1', '电核/初审', 'JH', null, null, '7', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '09', '1', '复审', 'JH', null, null, '8', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '10', '1', '用款申请', 'JH', null, null, '9', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('84', '11', '1', '放款', 'JH', null, null, '10', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('85', 'FJ', '1', '否决', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('85', 'QX', '1', '取消', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('85', 'TG', '1', '通过', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('86', 'CS', '1', '城市', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('86', 'NC', '1', '农村', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('86', 'QT', '1', '其他', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('87', 'MD', '1', '门店', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('87', 'QD', '1', '渠道', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('87', 'SY', '1', '所有', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('88', 'CH', '1', '承诺还款', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('88', 'DD', '1', '待定', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('88', 'WY', '1', '违约', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'CN', '1', '承诺还款', 'JH', null, null, '4', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'CW', '1', '承诺未还款', 'JH', null, null, '8', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'DF', '1', '低风险', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'DY', '1', '低余额', 'JH', null, null, '5', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'GF', '1', '高风险', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'GS', '1', '公司员工', 'JH', null, null, '11', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'KH', '1', '客户失联', 'JH', null, null, '6', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'SS', '1', '涉诉户', 'JH', null, null, '14', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'SW', '1', '死亡户', 'JH', null, null, '13', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'TQ', '1', '提前催收', 'JH', null, null, '10', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'VI', '1', 'VIP贵宾客户', 'JH', null, null, '12', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'WD', '1', '未达成承诺还款', 'JH', null, null, '9', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'YQ', '1', '逾期3期以上', 'JH', null, null, '7', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('89', 'ZF', '1', '中风险', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('90', 'DH', '1', '电话', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('90', 'SM', '1', '上门查访', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('91', 'DH', '1', '电话', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('91', 'DX', '1', '短信', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('91', 'DZ', '1', '电话中心', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('91', 'SF', '1', '司法', 'JH', null, null, '6', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('91', 'SM', '1', '上门', 'JH', null, null, '4', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('91', 'WW', '1', '委外', 'JH', null, null, '5', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('92', 'DH', '1', '电话', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('92', 'DX', '1', '短信', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('92', 'SM', '1', '上门', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '01', '1', '非本人', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '02.01', '1', '有承诺还款-已打款', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '02.02', '1', '有承诺还款-5日内还款', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '02.03', '1', '有承诺还款-10日内还款', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '02.04', '1', '有承诺还款-15日内还款', 'JH', null, null, '4', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.01', '1', '有承诺还款-15日后还款', 'JH', null, null, '5', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.02', '1', ' 无承诺还款-不归还', 'JH', null, null, '6', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.03', '1', ' 无承诺还款-愿意归还 没钱', 'JH', null, null, '7', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.04', '1', ' 无承诺还款-虚假贷款', 'JH', null, null, '8', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.05', '1', ' 无承诺还款-已被抓入牢房', 'JH', null, null, '9', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.06', '1', ' 无承诺还款-失踪', 'JH', null, null, '10', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.07', '1', ' 无承诺还款-重大疾病', 'JH', null, null, '11', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '03.08', '1', ' 无承诺还款-已死亡', 'JH', null, null, '12', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '04', '1', ' 已联系', 'JH', null, null, '13', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('93', '05', '1', ' 失联', 'JH', null, null, '14', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('94', 'DY', '1', '贷款逾期', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('95', 'YQ', '1', '逾期天数', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('96', 'MJ', '1', '每季', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('96', 'MY', '1', '每月', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('97', 'BL', '1', '比例', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('97', 'JE', '1', '金额', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('98', 'SJ', '1', '实际收回金额', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('98', 'WT', '1', '按委外金额', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('98', 'WU', '1', '无', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('99', 'JT', '1', '接通后转人工', 'JH', '100', null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('99', 'WJ', '1', '未接通', 'JH', '101', null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('100', '01', '1', '通话成功', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('100', '02', '1', '查无此人', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('100', '03', '1', '非本人接听', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '01', '1', '无人接听', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '02', '1', '关机', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '03', '1', '电话占线', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '04', '1', 'SIM卡余额不足', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '05', '1', '忙音', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '06', '1', '停机', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '07', '1', '不在服务区', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '08', '1', '暂时无法接通', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '09', '1', '无拨号音', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('101', '10', '1', '无效电话号码', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('120', 'YQ', '1', '逾期天数', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('121', 'DK', '1', '贷款金额', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('121', 'HT', '1', '合同号', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('121', 'KH', '1', '客户名称', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('121', 'SJ', '1', '实际扣款金额', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('122', 'BJ', '1', '补件', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('122', 'BS', '1', '必收', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('122', 'KS', '1', '可收', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('122', 'MS', '1', '免收', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '001', '1', '放款', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '002', '1', '放款结算', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '003', '1', '退款', 'JH', null, null, '3', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '004', '1', '提前还款', 'JH', null, null, '4', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '005', '1', '账号调整', 'JH', null, null, '5', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '006', '1', '利息减免', 'JH', null, null, '6', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '007', '1', '贷款冲正', 'JH', null, null, '7', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '008', '1', '交易撤销', 'JH', null, null, '8', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '009', '1', '贷款暂停', 'JH', null, null, '9', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('123', '010', '1', '贷款核销', 'JH', null, null, '10', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('124', 'HX', '1', '核销还款', 'JH', null, null, '2', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('124', 'ZC', '1', '正常', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('125', 'DC', '1', '多次放款', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('125', 'YC', '1', '一次放款', 'JH', null, null, '1', '01', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '10', '1', '简要信息录入', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '20', '1', '详细录入', 'JH', null, null, '1', '20', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '30', '1', '贷款初审', 'JH', null, null, '1', '30', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '40', '1', '贷款复审', 'JH', null, null, '1', '40', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '50', '1', '合同签订', 'JH', null, null, '1', '50', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '60', '1', '用款申请', 'JH', null, null, '1', '60', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('126', '70', '1', '用款批准', 'JH', null, null, '1', '70', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'CQ', '1', '重签', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'CX', '1', '撤销', 'JH', null, null, '7', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'FK', '1', '放款成功', 'JH', null, null, '5', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'QD', '1', '签订', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'TK', '1', '退款', 'JH', null, null, '6', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'YK', '1', '用款申请', 'JH', null, null, '4', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'ZF', '1', '作废', 'JH', null, null, '3', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('127', 'ZZ', '1', '终止', 'JH', null, null, '8', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('128', 'CS', '1', '超市', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('128', 'DS', '1', '电商', 'JH', null, null, '3', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('128', 'MC', '1', '卖场', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('128', 'QT', '1', '其他', 'JH', null, null, '4', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('129', 'DQ', '1', '电器类', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('129', 'HQ', '1', '婚庆类', 'JH', null, null, '4', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('129', 'JY', '1', '教育类', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('129', 'ZS', '1', '装饰类', 'JH', null, null, '3', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('130', '1', '1', '一级', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('130', '2', '1', '二级', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('131', 'J', '1', '季', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('131', 'Y', '1', '月', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('132', 'DG', '1', '对公', 'JH', null, null, '12', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('132', 'GR', '1', '个人', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('133', 'DK', '1', '贷款审批', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('134', '001', '1', '通用', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('135', 'DZ', '1', '单位地址', 'JH', null, null, '4', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('135', 'MC', '1', '单位名称', 'JH', null, null, '3', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('135', 'SJ', '1', '手机号码', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('135', 'YY', '1', '营业执照', 'JH', null, null, '5', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('135', 'ZJ', '1', '证件号码', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('135', 'ZZ', '1', '组织机构代码', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('136', 'QT', '1', '其他', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('136', 'XT', '1', '系统', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('137', 'CY', '1', '创业', 'JH', null, null, '5', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('137', 'JY', '1', '教育', 'JH', null, null, '1', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('137', 'LY', '1', '旅游', 'JH', null, null, '4', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('137', 'QT', '1', '其他', 'JH', null, null, '6', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('137', 'XF', '1', '消费', 'JH', null, null, '2', '10', '2016-11-05', '2016-11-05', '1');
INSERT INTO "xfjr_cu"."cs_di_c" VALUES ('137', 'ZX', '1', '装修', 'JH', null, null, '3', '10', '2016-11-05', '2016-11-05', '1');

-- ----------------------------
-- Table structure for cu_br_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_br_s";
CREATE TABLE "xfjr_cu"."cu_br_s" (
"br_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"br_na" "xfjr_cu"."corp_na" COLLATE "default" NOT NULL,
"st" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"br_abbr_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"con_na" "xfjr_cu"."cu_na" COLLATE "default",
"con_tel_no" "xfjr_cu"."no" COLLATE "default",
"post_no" "xfjr_cu"."no" COLLATE "default",
"br_lev_qt" "xfjr_cu"."quantity" NOT NULL,
"prev_br_no" "xfjr_cu"."no" COLLATE "default",
"prov_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"city_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"co" varchar(255) COLLATE "default"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_br_s" IS '机构';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."br_no" IS '机构编码';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."br_na" IS '机构名称';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."st" IS '状态CS 初始JH 激活参见 通用字典 状态分类28';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."br_abbr_no" IS '金融机构简码';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."con_na" IS '联系人';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."con_tel_no" IS '联系电话';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."post_no" IS '邮编';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."br_lev_qt" IS '机构级别1 表示1级机构 一般是总部2 表示2级机构。';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."prev_br_no" IS '上级机构编号';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."prov_cd" IS '省份代码';
COMMENT ON COLUMN "xfjr_cu"."cu_br_s"."city_cd" IS '城市代码';

-- ----------------------------
-- Records of cu_br_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_br_s" VALUES ('00001', '0', '2017-04-01', '12:00', '2017-04-01', '10000', '管理机构', 'JH', '00001', '管理员', '18888888', '88', '1', null, 'BJ', 'BJ', null);

-- ----------------------------
-- Table structure for cu_icon_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_icon_s";
CREATE TABLE "xfjr_cu"."cu_icon_s" (
"icon_no" varchar(255) COLLATE "default" NOT NULL,
"co" varchar(255) COLLATE "default",
"cr_dt" varchar(255) COLLATE "default",
"cr_tm" varchar(255) COLLATE "default",
"icon_ad_ca" varchar(255) COLLATE "default",
"icon_na" varchar(255) COLLATE "default",
"la_up_dt" varchar(255) COLLATE "default",
"la_up_us_id" int8,
"ve" int4
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of cu_icon_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3461579962854384', null, '2017-02-23', '20:14:55', '/var/zkbc/fs/default/7749198e-f9b5-4547-aa42-59536d91e5c7.jpg', '7749198e-f9b5-4547-aa42-59536d91e5c7.jpg', '2017-02-22', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3704019492602618', null, '2017-03-15', '15:19:11', '/var/zkbc/fs/default/24118e97-61aa-4986-b9da-6b707c076d51.png', '24118e97-61aa-4986-b9da-6b707c076d51.png', '2017-02-28', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3779991423577795', null, '2017-03-15', '15:45:57', '/var/zkbc/fs/default/25626734-8ad3-4f6b-b0ef-28a92d133671.png', '25626734-8ad3-4f6b-b0ef-28a92d133671.png', '2017-03-01', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780172396631095', null, '2017-03-15', '16:16:55', '/var/zkbc/fs/default/56f549e1-0200-4468-8b26-b025e4cd5eff.png', '56f549e1-0200-4468-8b26-b025e4cd5eff.png', '2017-03-01', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780218844875132', null, '2017-03-01', '14:31:00', '/var/zkbc/fs/default/c1fdf9f1-147a-42c5-85b4-f7aac79839a9.png', 'c1fdf9f1-147a-42c5-85b4-f7aac79839a9.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780286053094452', null, '2017-03-01', '14:32:07', '/var/zkbc/fs/default/1b36a272-f679-4a6c-883f-9ad11b14b85e.png', '1b36a272-f679-4a6c-883f-9ad11b14b85e.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780406139243903', null, '2017-03-01', '14:34:07', '/var/zkbc/fs/default/36c55c48-1664-4332-9f63-815435f6f4b7.png', '36c55c48-1664-4332-9f63-815435f6f4b7.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780476046966993', null, '2017-03-01', '14:35:17', '/var/zkbc/fs/default/fe78c27a-b9a9-488e-b994-8a2cdca4fbe8.png', 'fe78c27a-b9a9-488e-b994-8a2cdca4fbe8.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780563792757021', null, '2017-03-01', '14:36:45', '/var/zkbc/fs/default/1b34a7d0-ab00-4c87-a2e7-21ea150025ed.png', '1b34a7d0-ab00-4c87-a2e7-21ea150025ed.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780662241135984', null, '2017-03-01', '14:38:23', '/var/zkbc/fs/default/0d5cb275-0abd-4170-90c2-19381dc0e6d8.png', '0d5cb275-0abd-4170-90c2-19381dc0e6d8.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M3780682826222213', '', '2017-03-01', '14:38:44', '/var/zkbc/fs/default/12650e69-07fe-4cc9-8054-07e8958f4d82.png', '12650e69-07fe-4cc9-8054-07e8958f4d82.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40000', '', '2017-03-01', '14:38:44', '/var/zkbc/fs/default/12650e69-07fe-4cc9-8054-07e8958f4d82.png', '12650e69-07fe-4cc9-8054-07e8958f4d82.png', '2017-03-01', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40002', null, '2017-03-07', '19:10:18', '/opt/var/zkbc/fs/default/bd6bdaaf-18e1-4a2c-89c4-136719d51405.png', 'bd6bdaaf-18e1-4a2c-89c4-136719d51405.png', '2017-03-07', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40003', null, '2017-03-10', '15:02:37', '/var/zkbc/fs/default/625d0887-d86b-4b29-b948-67e9f8d4bc21.png', '625d0887-d86b-4b29-b948-67e9f8d4bc21.png', '2017-03-10', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40005', null, '2017-03-15', '15:19:01', '/var/zkbc/fs/default/47cc0954-4455-471c-98a3-02cb6bba5270.png', '47cc0954-4455-471c-98a3-02cb6bba5270.png', '2017-03-11', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40007', null, '2017-03-15', '11:43:15', '/var/zkbc/fs/default/51ffc57d-7bad-449d-b4e7-2ceadb134a0c', '51ffc57d-7bad-449d-b4e7-2ceadb134a0c', '2017-03-13', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40008', null, '2017-03-15', '11:43:08', '/var/zkbc/fs/default/06bf836e-a75b-44d7-bd1a-f27fc0274a42', '06bf836e-a75b-44d7-bd1a-f27fc0274a42', '2017-03-13', '1', '1');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40009', null, '2017-03-15', '11:30:14', '/var/zkbc/fs/default/1a8fd1a6-8e53-49c3-9c5b-2c8cbb510b76.png', '1a8fd1a6-8e53-49c3-9c5b-2c8cbb510b76.png', '2017-03-15', '1200', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40010', null, '2017-03-16', '14:32:24', '/var/zkbc/fs/default/ef2ad520-a103-40b9-bbde-240ea948a4cf.png', 'ef2ad520-a103-40b9-bbde-240ea948a4cf.png', '2017-03-16', '1200', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40013', null, '2017-03-27', '16:02:51', '/var/zkbc/fs/default/a42ec171-c0de-4f8e-b1eb-9d081688843e.png', 'a42ec171-c0de-4f8e-b1eb-9d081688843e.png', '2017-03-27', '88927', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40014', null, '2017-03-27', '16:16:51', '/var/zkbc/fs/default/8a12c8d9-b2d6-4f24-b5c3-faaaed656dc8.png', '8a12c8d9-b2d6-4f24-b5c3-faaaed656dc8.png', '2017-03-27', '88927', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40015', null, '2017-03-27', '16:17:14', '/var/zkbc/fs/default/72dd9c1d-3443-4477-b777-3a2ed6062443.png', '72dd9c1d-3443-4477-b777-3a2ed6062443.png', '2017-03-27', '88927', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40016', null, '2017-03-30', '18:52:02', '/var/zkbc/fs/default/9a2e993f-7d73-445c-a69b-23dcb86aa4f9.jpg', '9a2e993f-7d73-445c-a69b-23dcb86aa4f9.jpg', '2017-03-30', '1', '0');
INSERT INTO "xfjr_cu"."cu_icon_s" VALUES ('M40017', null, '2017-03-31', '10:49:03', '/var/zkbc/fs/default/f45a482b-177b-4e73-97c5-a28e096028c2.jpg', 'f45a482b-177b-4e73-97c5-a28e096028c2.jpg', '2017-03-31', '88932', '0');

-- ----------------------------
-- Table structure for cu_post_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_post_s";
CREATE TABLE "xfjr_cu"."cu_post_s" (
"post_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"post_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"st" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"sto_use_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"au_post_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"co_post_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"co" "xfjr_cu"."comment" COLLATE "default"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_post_s" IS '岗位';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."post_no" IS '岗位编号';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."post_na" IS '岗位名称';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."st" IS '状态CS 初始JH 激活参见 通用字典 状态分类28';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."sto_use_yn" IS '是否商店使用';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."au_post_yn" IS '是否审批岗位';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."co_post_yn" IS '是否催收岗';
COMMENT ON COLUMN "xfjr_cu"."cu_post_s"."co" IS '备注';

-- ----------------------------
-- Records of cu_post_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_post_s" VALUES ('00001', '1', '2017-03-01', '12:00', '2017-03-01', '10000', '管理岗位', 'JH', '1', '1', '1', null);

-- ----------------------------
-- Table structure for cu_res_act_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_res_act_s";
CREATE TABLE "xfjr_cu"."cu_res_act_s" (
"res_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"su_id" "xfjr_cu"."su_id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"url" "xfjr_cu"."comment" COLLATE "default" NOT NULL,
"res_act_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"res_act_ca" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_res_act_s" IS '资源操作配置';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."res_no" IS '资源编号';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."su_id" IS '子序号';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."url" IS 'url地址';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."res_act_cd" IS '资源动作码
ZJ 增加
XG 修改
SC 删除
CX 查询
FW 访问
参见字典分类代码：70';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."res_act_ca" IS '资源动作中文';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_res_act_s"."la_up_us_id" IS '最新更新用户';

-- ----------------------------
-- Records of cu_res_act_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '370', '1', '/cb/loanapply/page', '0001', '列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '371', '1', '/cb/loanapply/remove/', '371', '贷款申请简要录入列表删除', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '372', '1', '/cb/loanapply/view/', '372', '贷款申请简要录入查看', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '373', '1', '/cb/loanapply/update', '373', '贷款申请简要录入修改页删除', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '374', '1', '/cb/applystore/page', '374', '门店列表展示', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '375', '1', '/cb/ajax/getsystemdate', '375', '获取系统时间', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '376', '1', '/cb/ajax/getLoanType', '376', '贷款类型修改，改变金融产品', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '377', '1', '/cb/loanapply/create', '377', '贷款申请简要录入新增保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '378', '1', '/cb/loanapply/saveAndSubmit', '378', '贷款申请简要录入,从新建页面提交', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '379', '1', '/cb/loanapply/submit', '379', '贷款申请简要录入提交', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '380', '1', '/script/loanapply/list', '380', '贷款申请简要录入首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '381', '1', '/script/loanapply/create', '381', '列表首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '382', '1', '/script/loanapply/update', '382', '更新首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '383', '1', '/script/loanapply/view', '383', '查看首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('10', '384', '1', '/cb/ajax/getCustomerNo', '384', '生成客户编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('101', '415', '1', '/activiti/*', '415', '流程所有的请求', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '330', '1', '/cb/findfeeandmatlist', '330', '查询费用材料', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '331', '1', '/cb/ajax/tentativeCalculation', '331', '生成查看还款方案', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '332', '1', '/cb/ajax/getProms/', '332', '根据产品查询促销名称', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '333', '1', '/cb/ajax/getApplyPeriod/', '333', '根据产品查询申请期限', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '334', '1', '/cb/loandetailapply/page/', '0001', '列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '335', '1', '/cb/loandetailapply/updatePeople', '335', '贷款申请详情录入 人员信息修改保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '336', '1', '/cb/loandetailapply/updateDetail', '336', '贷款申请详情录入 贷款修改保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '337', '1', '/cb/loandetailapply/viewPeoplesForInput', '337', '贷款申请详情录入修改', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '338', '1', '/cb/loandetailapply/viewDetail/', '338', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '339', '1', '/cb/loandetailapply/viewPeoples/', '339', '贷款申请详情录入查看', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '340', '1', '/cb/loandetailapply/updateDetail', '340', '贷款申请详情录入贷款信息页面修改保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '341', '1', '/cb/ajax/getApplyPeriod/', '341', '根据产品查询申请期限', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '342', '1', '/cb/loanapplymaterial/view', '342', '贷款申请详情录入 影像信息查看', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '343', '1', '/cb/loanapplymaterial/update', '343', '贷款申请详情录入 影像信息修改', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '344', '1', '/cb/ajax/tentativeCalculation', '344', '贷款申请详情录入 试算', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '345', '1', '/script/loandetailapply/people', '345', '贷款申请详情录入更新首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '346', '1', '/script/view', '346', '贷款申请详情录入查询首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '347', '1', '/script/loandetailapply/imageData', '347', '贷款申请详情影像修改首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '348', '1', '/script/loandetailapply/imageData', '348', '贷款申请详情影像查看首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '349', '1', '/script/loandetailapply/detail', '349', '贷款申请详情详细信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '350', '1', '/script/loandetailapply/detail', '350', '贷款申请详情详细信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('11', '351', '1', '/script/exam/people', '351', '贷款申请详情申请人首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '385', '1', '/cb/loanapplyExamFirst/page/', '0001', '列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '386', '1', '/cb/loanapplyExamFirst/viewdetail/', '386', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '387', '1', '/cb/loanapplyExamFirst/viewPeople/', '387', '申请人信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '388', '1', '/cb/two-levels-approval/risk-warning/', '388', '风险预警', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '389', '1', '/cb/two-levels-approval/risk-warning/', '389', '进件历史', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '390', '1', '/cb/two-levels-approval/risk-warning/', '390', '审核项信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '391', '1', '/cb/two-levels-approval/risk-warning/', '391', '审批信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '392', '1', '/cb/check/save', '392', '审核项信息下一步', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '393', '1', '/cb/loanapplyExamFirst/update', '393', '更新审核信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '394', '1', '/script/exam/image', '394', '影像资料首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '395', '1', '/script/exam/loanInfo', '395', ' 电核/初核贷款信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('12', '396', '1', '/script/exam/list', '396', '列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '397', '1', '/cb/loanapplyExamSecond/page', '0001', '列表页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '398', '1', '/cb/loanapplyExamSecond/viewdetail/', '398', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '399', '1', '/cb/loandetailapply/viewPeoples/', '399', '申请人信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '400', '1', '/cb/two-levels-approval/risk-warning/', '400', '贷款申请历史', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '401', '1', '/cb/two-levels-approval/risk-warning/', '401', '风险预警', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '402', '1', '/cb/two-levels-approval/risk-warning/', '402', '进件历史', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '403', '1', '/cb/two-levels-approval/risk-warning/', '403', '审核项信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '404', '1', '/cb/two-levels-approval/risk-warning/', '404', '审批信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '405', '1', '/script/loanapplyexamsecond', '405', '申请人信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '406', '1', '/script/twolevelsapproval/loanapplyExamList', '406', '列表首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('13', '408', '1', '/script/loanapplyExam', '408', '申请人信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '352', '1', '/cb/loanapplycontract/print/', '352', '合同打印预览', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '353', '1', '/cb/loanapplyExamSignContract/page/', '0001', '列表页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '354', '1', '/cb/loanapplyExamSignContract/viewdetail/', '354', '查看详情', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '355', '1', '/cb/loanapplyExamSignContract/update', '355', '更新合同数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '356', '1', '/cb/loandetailapply/contract/', '356', '资料信息查看', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '357', '1', '/script/signcontractOfCheck', '357', '合同申请人首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '358', '1', '/script/signcontractOfImage', '358', '影像资料首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('14', '359', '1', '/script/signcontract', '359', '合同签订首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('15', '309', '1', '/cb/flowloanapply/index/applymoney', '0001', '用款申请列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('15', '310', '1', '/cb/applymoney/viewAll/', '310', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('15', '311', '1', '/cb/loanmakeloan/createApplyMoneyAndAccount/', '311', '用款保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('15', '312', '1', '/cb/loanmakeloan/createApplyMoneyAndAccount/', '312', '用款更新', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('15', '313', '1', '/cb/flowloanapply/getSelectForApplyMoney', '313', '贷款信息首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('15', '314', '1', '/cb/flowloanapply/getSelectForApplyMoney', '314', '贷款信息查看首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('16', '315', '1', '/cb/callback/page/', '0001', '列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('16', '316', '1', '/cb/loandetailapply/viewAll/', '316', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('16', '317', '1', '/cb/loandetailapply/viewPeoples/', '317', '申请人信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('16', '318', '1', '/cb/callback/savetelcheck', '318', '审核项保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('16', '319', '1', '/script/callback', '319', '申请人信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('16', '320', '1', '/cb/flowloanapply/getSelectForCallBack', '320', '贷款信息首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('17', '321', '1', '/cb/flowloanapply/index/supercallback/', '0001', '列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('17', '322', '1', '/cb/loandetailapply/viewAll/', '322', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('17', '323', '1', '/cb/loandetailapply/viewPeoples/', '323', '申请人信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('17', '324', '1', '/cb/callback/savetelcheck', '324', '审核项保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('18', '325', '1', '/cb/flowloanapply/index/makeloancheck/', '0001', '放款审查列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('18', '326', '1', '/cb/makeloan/viewAll/', '326', '贷款信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('18', '327', '1', '/cb/two-levels-approval/risk-warning/', '327', '审批信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('18', '328', '1', '/cb/flowloanapply/getSelect', '328', '贷款信息首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('18', '329', '1', '/cb/flowloanapply/getSelectForMakeLoanCheckIndex', '329', '放款审查列表首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '107', '1', '/script/cscub', '107', '客户信息管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '108', '1', '/script/cscubdetial', '108', '客户信息管理详情首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '109', '1', '/cs/cscub/page/*', '0001', '客户信息列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '110', '1', '/cs/cscub/list', '110', '客户信息列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '111', '1', '/cs/cscub/view', '111', '查看客户信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '112', '1', '/cs/cscub/update', '112', '修改客户信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('21', '113', '1', '/cs/cscub/remove', '113', '删除客户信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '258', '1', '/script/csperblb', '258', '个人黑名单客户管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '259', '1', '/cs/csperblb/page/*', '0001', '个人黑名单客户列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '260', '1', '/cs/csperblb/list', '260', '个人黑名单客户列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '261', '1', '/cs/csperblb/view', '261', '查看个人黑名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '262', '1', '/cs/csperblb/create', '262', '创建个人黑名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '263', '1', '/cs/csperblb/update', '263', '修改个人黑名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '264', '1', '/cs/csperblb/remove', '264', '删除个人黑名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '265', '1', '/cs/csperblb/moveToCsPerGeryB', '265', '个人黑名单客户转入个人灰名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('23', '266', '1', '/cs/csperblb/Exist', '266', '名单数值是否存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '267', '1', '/script/csperwhb', '267', '个人白名单客户管理列表首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '268', '1', '/cs/csperwhb/page/*', '0001', '个人白名单客户列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '269', '1', '/cs/csperwhb/list', '269', '个人白名单客户列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '270', '1', '/cs/csperwhb/view', '270', '查看个人白名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '271', '1', '/cs/csperwhb/create', '271', '创建个人白名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '272', '1', '/cs/csperwhb/update', '272', '修改个人白名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '273', '1', '/cs/csperwhb/remove', '273', '删除个人白名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('24', '274', '1', '/cs/csperwhb/exist', '274', '名单数值是否存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '275', '1', '/script/cspergreyb', '275', '个人灰名单客户管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '276', '1', '/cs/cspergreyb/page/*', '0001', '个人灰名单客户列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '277', '1', '/cs/cspergreyb/list', '277', '个人灰名单客户列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '278', '1', '/cs/cspergreyb/view', '278', '查看个人灰名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '279', '1', '/cs/cspergreyb/create', '279', '创建个人灰名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '280', '1', '/cs/cspergreyb/update', '280', '修改个人灰名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '281', '1', '/cs/cspergreyb/remove', '281', '移出个人灰名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '282', '1', '/cs/cspergreyb/moveToCsPerBlB', '282', '个人灰名单客户转入个人黑名单客户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('25', '283', '1', '/cs/cspergreyb/exist', '283', '名单数值是否存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '284', '1', '/cs/csperwhb/index', '284', '企业黑名单管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '285', '1', '/cs/corpblack/page/*', '0001', '企业黑名单列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '286', '1', '/cs/corpblack/list', '286', '企业黑名单列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '287', '1', '/cs/corpblack/view', '287', '查看企业黑名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '288', '1', '/cs/corpblack/create', '288', '创建企业黑名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '289', '1', '/cs/corpblack/update', '289', '修改企业黑名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '290', '1', '/cs/corpblack/remove', '290', '删除企业黑名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '291', '1', '/cs/corpblack/transIn', '291', '转出企业黑名单到灰名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('26', '292', '1', '/cs/corpblack/exist', '292', '名单数值是否存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '293', '1', '/scrpit/corpwhite', '293', '企业白名单管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '294', '1', '/cs/corpwhite/page/*', '0001', '企业白名单列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '295', '1', '/cs/corpwhite/list', '295', '企业白名单列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '296', '1', '/cs/corpwhite/view', '296', '查看企业白名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '297', '1', '/cs/corpwhite/create', '297', '创建企业白名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '298', '1', '/cs/corpwhite/update', '298', '修改企业白名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '299', '1', '/cs/corpwhite/remove', '299', '删除企业白名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('27', '300', '1', '/cs/corpwhite/exist', '300', '名单数值是否存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '301', '1', '/script/corpgrey', '301', '企业灰名单管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '302', '1', '/cs/corpgrey/page/*', '0001', '企业灰名单列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '303', '1', '/cs/corpgrey/list', '303', '企业灰名单列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '304', '1', '/cs/corpgrey/view', '304', '查看企业灰名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '305', '1', '/cs/corpgrey/create', '305', '创建企业灰名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '306', '1', '/cs/corpgrey/update', '306', '修改企业灰名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '307', '1', '/cs/corpgrey/remove', '307', '删除企业灰名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '308', '1', '/cs/corpgrey/transIn', '308', '转出企业灰名单到黑名单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('28', '309', '1', '/cs/corpgrey/exist', '309', '名单数值是否存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('3', '360', '1', '/cb/flowloanapply/getSelectForTaskTodo', '360', '待办首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('3', '361', '1', '/cb/flowloanapply/index/tasktodo/', '0001', '待办列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '114', '1', '/script/cscoocubHZS', '114', '合作方信息表管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '115', '1', '/script/cscoocubaddhzs', '115', '新增首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '116', '1', '/script/cscoocubupdatehzs', '116', '修改首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '117', '1', '/script/cscoocubdetialhzs', '117', '详情首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '118', '1', '/cs/cscoocub/page/*', '0001', '合作方信息表列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '119', '1', '/cs/cscoocub/getCustomers/*', '119', '根据机构号查询客户经理', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '120', '1', '/cs/cscoocub/list', '120', '合作方信息表列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '121', '1', '/cs/cscoocub/view/*', '121', '查看合作方信息表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '122', '1', '/cs/cscoocub/create', '122', '创建合作方信息表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '123', '1', '/cs/cscoocub/updateCsCooCuB', '123', '修改合作方信息表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '124', '1', '/cs/cscoocob/update/updateCsCooCuBJHStatus', '124', '修改合作方或门店激活状态表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('30', '125', '1', '/cs/cscoocub/removeCsCooCuB', '125', '删除合作方表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '126', '1', '/script/indexMD', '126', '门店管理列表首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '127', '1', '/script/addindexmd', '127', '门店管理新增首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '128', '1', '/script/updateindexmd', '128', '门店管理修改首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '129', '1', '/script/indexmddetial', '129', '门店管理详情首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '130', '1', '/cs/cscoocub/mdpage/*', '0001', '门店列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '131', '1', '/cs/cscoocub/mdlist', '131', '门店列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '132', '1', '/cs/cscoocub/mdview/*', '132', '门店查看详情', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '133', '1', '/cs/cscoocub/createMDCsCooCuB', '133', '创建门店信息表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('31', '134', '1', '/cs/cscoocub/updateMDCsCooCuB', '134', '修改门店信息表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '186', '1', '/cs/loantype/index', '186', '产品信息管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '187', '1', '/script/loantype', '187', '产品信息首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '188', '1', '/script/loantypesetdetail', '188', '产品详情', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '189', '1', '/script/loantypeadd', '189', '产品信息新增／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '190', '1', '/script/loantypesetadd', '190', '产品信息设置新增／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '191', '1', '/script/loantypesetupdate', '191', '产品信息设置修改／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '192', '1', '/cs/loantype/page/*', '0001', '产品信息列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '193', '1', '/cs/loantype/list', '193', '产品信息列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '194', '1', '/cs/loantype/view', '194', '查看产品信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '195', '1', '/cs/loantype/create', '195', '创建产品信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '196', '1', '/cs/loantype/isexist', '196', '产品名称是否已存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '197', '1', '/cs/loantype/update', '197', '修改产品信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '198', '1', '/cs/loantype/remove', '198', '删除产品信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '199', '1', '/cs/loantype/copy', '199', '复制产品信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '200', '1', '/cs/loantype/updatestatus/*', '200', '修改产品状态', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '201', '1', '/cs/loantype/cache', '201', '缓存部分产品信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '202', '1', '/cs/lotyproms/view', '202', '产品促销配置首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '203', '1', '/cs/lotyproms/save', '203', '产品促销配置保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('33', '204', '1', '/cs/loantype/code', '204', '获取编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '135', '1', '/cs/printtemplateset/index', '135', '打印模板集管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '136', '1', '/script/printtemplateset', '136', '打印模版集首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '137', '1', '/cs/printtemplateset/page/*', '0001', '打印模板集列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '138', '1', '/cs/printtemplateset/list', '138', '打印模板集列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '139', '1', '/cs/printtemplateset/view/*', '139', '查看打印模板集', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '140', '1', '/cs/printtemplateset/create', '140', '创建打印模板集', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '141', '1', '/cs/printtemplateset/copy', '141', '复制打印模版集', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '142', '1', '/cs/printtemplateset/update', '142', '修改打印模板集', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '143', '1', '/cs/printtemplateset/remove/*', '143', '删除打印模板集', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '144', '1', '/cs/printtemplateset/updatestatus/*', '144', '打印模板集状态修改 激活／失效', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('34', '145', '1', '/cs/printtemplateset/code', '145', '获取编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '224', '1', '/script/loanMaterialSet', '224', '贷款材料配置管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '225', '1', '/cs/loanmaterialset/page/*', '0001', '贷款材料配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '226', '1', '/cs/loanmaterialset/list', '226', '贷款材料配置列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '227', '1', '/cs/loanmaterialset/view/*', '227', '查看贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '228', '1', '/cs/loanmaterialset/create', '228', '创建贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '229', '1', '/cs/loanmaterialset/update', '229', '修改贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '230', '1', '/cs/loanmaterialset/remove/*', '230', '删除贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '231', '1', '/cs/loanmaterialset/status/*', '231', '修改贷款材料配置状态', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '232', '1', '/cs/loanmaterialset/copy', '232', '复制贷款材料', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('36', '233', '1', '/cs/loanmaterialset/code', '233', '获取代码', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '156', '1', '/script/paymentmethod', '156', '还款方式管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '157', '1', '/script/paymentmethodadd', '157', '还款方式编辑页面首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '158', '1', '/script/paymentmethodupdate', '158', '还款方式编辑页面首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '159', '1', '/script/paymentmethoddetail', '159', '还款方式编辑页面首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '160', '1', '/cs/paymentmethod/page/*', '0001', '还款方式列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '161', '1', '/cs/paymentmethod/list', '161', '还款方式列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '162', '1', '/cs/paymentmethod/view/*', '162', '查看还款方式', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '163', '1', '/cs/paymentmethod/create', '163', '创建还款方式', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '164', '1', '/cs/paymentmethod/update', '164', '修改还款方式', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '165', '1', '/cs/paymentmethod/remove/*', '165', '删除还款方式', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('37', '166', '1', '/cs/paymentmethod/code', '166', '获取编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '205', '1', '/script/feetype', '205', '费用类型管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '206', '1', '/cs/feetype/page/*', '0001', '费用类型列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '207', '1', '/cs/feetype/list', '207', '费用类型列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '208', '1', '/cs/feetype/view', '208', '查看费用类型', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '209', '1', '/cs/feetype/create', '209', '创建费用类型', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '210', '1', '/cs/feetype/update', '210', '修改费用类型', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '211', '1', '/cs/feetype/updateJH', '211', '激活费用类型', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '212', '1', '/cs/feetype/updateZF', '212', '作废费用类型', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('38', '213', '1', '/cs/feetype/remove', '213', '删除费用类型', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '214', '1', '/script/feetypesub', '214', '费用子信息管理列表首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '215', '1', '/script/addfeetypesub', '215', '费用子信息管理新增首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '216', '1', '/script/updatefeetypesub', '216', '费用子信息管理修改首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '217', '1', '/script/feetypesubdetial', '217', '费用子信息管理详情首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '218', '1', '/cs/feetypesub/page/*', '0001', '费用子信息列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '219', '1', '/cs/feetypesub/list', '219', '费用子信息列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '220', '1', '/cs/feetypesub/view', '220', '查看费用子信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '221', '1', '/cs/feetypesub/create', '221', '创建费用子信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '222', '1', '/cs/feetypesub/update', '222', '修改费用子信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('39', '223', '1', '/cs/feetypesub/remove', '223', '删除费用子信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('4', '364', '1', '/cb/flowloanapply/getSelectForTaskDone', '364', '已办首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('4', '365', '1', '/cb/flowloanapply/index/taskdone/', '0001', '已办列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '146', '1', '/cs/commission/index', '146', '佣金配置管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '147', '1', '/script/commission', '147', '佣金配置首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '148', '1', '/script/addcommission', '148', '新增佣金配置首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '149', '1', '/script/updatecommission', '149', '修改佣金配置首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '150', '1', '/script/commissiondetial', '150', '佣金配置详情', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '151', '1', '/cs/commission/page/*', '0001', '佣金配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '152', '1', '/cs/commission/view/*', '152', '查看佣金配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '153', '1', '/cs/commission/create', '153', '创建佣金配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '154', '1', '/cs/commission/update', '154', '修改佣金配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('40', '155', '1', '/cs/commission/remove', '155', '删除佣金配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '167', '1', '/script/csproms', '167', '促销配置首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '168', '1', '/script/addcsproms', '168', '产品促销配置 新增首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '169', '1', '/script/updatecsproms', '169', '促销配置／修改首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '170', '1', '/script/cspromsdetial', '170', '产品促销配置 详情首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '171', '1', '/cs/csproms/page/*', '0001', '产品促销配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '172', '1', '/cs/csproms/list', '172', '产品促销配置列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '173', '1', '/cs/csproms/notexists', '173', '产品促销配置是否不存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '174', '1', '/cs/csproms/view/*', '174', '查看产品促销配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '175', '1', '/cs/csproms/create', '175', '创建产品促销配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '176', '1', '/cs/csproms/update', '176', '修改产品促销配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('41', '177', '1', '/cs/csproms/remove', '177', '删除产品促销配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '97', '1', '/script/addlotusamount', '97', '审批额度配置新增首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '98', '1', '/script/updatelotusamount', '98', '审批额度配置修改首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '99', '1', '/script/lotusamountdetial', '99', '审批额度配置详情首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '100', '1', '/script/lotusamount', '100', '审批额度配置首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '101', '1', '/cs/lotusamount/page/*', '0001', '审批额度配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '102', '1', '/cs/lotusamount/view/*', '102', '查看审批额度配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '103', '1', '/cs/lotusamount/create', '103', '创建审批额度配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '104', '1', '/cs/lotusamount/update', '104', '修改审批额度配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '105', '1', '/cs/lotusamount/remove/*', '105', '删除审批额度配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('42', '106', '1', '/cs/lotusamount/code', '106', '获取编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '87', '1', '/script/tellcheck', '87', '电核配置首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '88', '1', '/script/tellcheckdesign', '88', '电核配置设计／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '89', '1', '/script/tellcheckdetail', '89', '电核配置详情／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '90', '1', '/cs/tellcheck/page/*', '90', '电核配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '91', '1', '/cs/tellcheck/list', '0001', '电核配置列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '92', '1', '/cs/tellcheck/view/*', '92', '查看电核配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '93', '1', '/cs/tellcheck/create', '93', '创建电核配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '94', '1', '/cs/tellcheck/update', '94', '修改电核配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '95', '1', '/cs/tellcheck/remove/*', '95', '删除电核配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('43', '96', '1', '/cs/telcheck/code', '96', '获取编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '178', '1', '/cs/telcheckpercent/index', '178', '贷款电核比例配置管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '179', '1', '/script/telcheckpercent', '179', '贷款电核比例配置首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '180', '1', '/cs/telcheckpercent/page/*', '0001', '贷款电核比例配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '181', '1', '/cs/telcheckpercent/list', '181', '贷款电核比例配置列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '182', '1', '/cs/telcheckpercent/view/*', '182', '查看贷款电核比例配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '183', '1', '/cs/telcheckpercent/create', '183', '创建贷款电核比例配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '184', '1', '/cs/telcheckpercent/update', '184', '修改贷款电核比例配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('44', '185', '1', '/cs/telcheckpercent/remove/*', '185', '删除贷款电核比例配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('5', '362', '1', '/cb/flowloanapply/getSelectForTaskSettled', '362', '已结首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('5', '363', '1', '/cb/flowloanapplyhistory/index/tasksettled/', '0001', '已结列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '244', '1', '/cs/dictionaryCategory/list', '244', '字典分类列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '245', '1', '/script/dictionarycategory', '245', '字典分类首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '246', '1', '/cs/dictionaryCategory/page/*', '0001', '字典列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '247', '1', '/cs/dictionaryCategory/view/*', '247', '查看字典', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '248', '1', '/cs/dictionaryCategory/notexists', '248', '字典是否不存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '249', '1', '/cs/dictionaryCategory/notexistsId', '249', '字典分类id是否不存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '250', '1', '/cs/dictionaryCategory/create', '250', '创建字典', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '251', '1', '/cs/dictionaryCategory/update', '251', '修改字典', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50001', '252', '1', '/cs/dictionaryCategory/remove/*', '252', '删除字典', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '69', '1', '/cu/curess/menu', '69', '菜单导航', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '70', '1', '/cu/curess/view/*', '0001', '查看菜单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '71', '1', '/cu/curess/create/*', '71', '创建菜单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '72', '1', '/cu/curess/remove/*', '72', '删除菜单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '73', '1', '/cu/curess/menuHaul', '73', '菜单拖拽', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '410', '1', '/script/curess', '70', '菜单首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '411', '1', '/cu/curess/nextId', '64', '获取ID', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '412', '1', '/cu/curess/resnaexists', '74', '校验名称', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('50004', '413', '1', '/cu/curess/update', '61', '更新菜单', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('6', '368', '1', '/cb/flowloanapplyhistory/index/taskcancel/', '0001', '取消列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('6', '369', '1', '/cb/flowloanapply/getSelectForTaskCancel', '369', '取消首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('7', '366', '1', '/cb/flowloanapply/getSelectForTaskRefused', '366', '拒绝首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('7', '367', '1', '/cb/flowloanapplyhistory/index/taskrefuse/', '0001', '拒绝列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('81', '14', '1', '/cu/cuuss/loginNa', '14', '查询登录用户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('81', '60', '1', '/cu/cuuss/updateCuUs', '60', '修改', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('81', '61', '1', '/cu/cuuss/useMessage', '0001', '查询', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('81', '400', '1', '/cu/cuuslogins/checkPW', '407', '密码是否过期', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('82', '62', '1', '/cu/personal-settings/update-password.html', '0001', '访问', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('82', '63', '1', '/cu/update/loginpwd', '63', '修改', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('83', '64', '1', '/cu/cuusholl/page/*', '0001', '请假登记列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('83', '65', '1', '/cu/cuusholl/view/*', '65', '查询请假信息', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('83', '66', '1', '/cu/cuusholl/create', '66', '创建请假', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('83', '67', '1', '/script/cuusholl', '67', '请假首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('83', '68', '1', '/cu/cuusholl/update', '68', '销假登记', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('83', '414', '1', '/cu/cuusholl/date', '414', '获取上班日期', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '21', '1', '/cu/cubrs/create', '21', '添加机构', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '22', '1', '/cu/cubrs/update', '22', '修改机构', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '23', '1', '/cu/cubrs/remove/*', '23', '删除机构', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '24', '1', '/cu/cubrs/UPDATEJH/*', '24', '激活机构', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '25', '1', '/cu/cubrs/UPDATESX/*', '25', '机构失效', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '26', '1', '/cu/cubrs/page/*', '0001', '机构分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '27', '1', '/script/cubrs', '27', '机构首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '28', '1', '/cu/cubrs/list', '28', '机构列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '29', '1', '/cu/cubrs/notexists', '29', '检查机构存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '30', '1', '/cu/cubrs/brNoExist', '30', '检查机构编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '31', '1', '/cu/cubrs/brNaExist', '31', '检查机构名称', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '32', '1', '/cu/cubrs/nextId', '32', '获取ID', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('85', '33', '1', '/cu/cubrs/view/*', '33', '查询机构', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '34', '1', '/cu/cuposts/page/*', '0001', '岗位分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '35', '1', '/cu/cuposts/create', '35', '添加岗位', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '36', '1', '/cu/cuposts/view/*', '36', '查看岗位', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '37', '1', '/cu/cuposts/update', '37', '修改岗位', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '38', '1', '/cu/cuposts/updateJH/*', '38', '激活岗位', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '39', '1', '/cu/cuposts/updateSX/*', '39', '岗位失效', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '40', '1', '/cu/cuposts/list', '40', '岗位列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '41', '1', '/cu/cuposts/notexists', '41', '检查岗位存在', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '42', '1', '/cu/cuposts/postNaExist', '42', '检查岗位名称', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '43', '1', '/cu/cuposts/postNoExist', '43', '检查岗位编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '44', '1', '/cu/cuposts/nextId', '44', '获取ID', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '45', '1', '/script/cuposts', '45', '岗位首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('87', '46', '1', '/cu/cuposts/remove/*', '46', '删除岗位', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '47', '1', '/cu/curos/page/*', '0001', '角色分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '48', '1', '/cu/curos/view/*', '48', '查看角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '49', '1', '/cu/curos/create', '49', '添加角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '50', '1', '/cu/curos/updateJH/*', '50', '激活角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '51', '1', '/cu/curos/updateSX/*', '51', '失效角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '52', '1', '/cu/curos/update', '52', '修改角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '53', '1', '/script/curos', '53', '角色首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '54', '1', '/cu/curos/list', '54', '角色列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '55', '1', '/cu/curos/notexists', '55', '检查角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '56', '1', '/cu/curos/ronaexists', '56', '检查角色名称', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '57', '1', '/cu/curos/ronoexists', '57', '检查角色编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '58', '1', '/cu/curos/nextId', '58', '获取ID', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('89', '59', '1', '/cu/curos/remove/*', '59', '删除角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '1', '1', '/cu/cuuss/updateJH/*', '0001', '激活用户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '2', '1', '/cu/cuuss/updateSX/*', '2', '用户失效', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '3', '1', '/cu/cuuss/list', '3', '用户列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '4', '1', '/cu/cuuss/remove/*', '4', '删除用户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '5', '1', '/cu/cuuscubrs/page/*', '5', '查询机构', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '6', '1', '/cu/cufaexe/list/*', '6', '查询主管', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '7', '1', '/cu/cuposts/toListPage/*', '7', '查询岗位', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '8', '1', '/cu/cuuscuros/page/*', '8', '查询角色', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '9', '1', '/cu/cuuss/create', '9', '添加用户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '10', '1', '/cu/cuuss/update', '10', '修改用户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '11', '1', '/cu/cuuss/resetPwd/*', '11', '重置密码', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '12', '1', '/script/dicts', '12', '查询字典', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '13', '1', '/script/cuuss', '13', '首屏查询', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '15', '1', '/cu/cuuss/idExist', '15', '检查编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '16', '1', '/cu/cubrs/loginNaExist', '16', '检查名称', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '17', '1', '/script/changepwd', '17', '修改密码首屏', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '18', '1', '/cu/cuuss/nextId', '18', '获取ID', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '19', '1', '/cu/cuuss/page/*', '19', '用户分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('91', '20', '1', '/cu/cuuss/view/*', '20', '查看用户', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99', '77', '1', '/cu/cuicons/page/*', '0001', '图标列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99', '78', '1', '/cu/cuicons/view/*', '78', '图标查询', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99', '79', '1', '/cu/cuicons/create', '79', '添加图标', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99', '80', '1', '/cu/cuicons/update/*', '80', '修改图标', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99', '81', '1', '/cu/cuicons/remove/*', '81', '删除图标', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99001', '253', '1', '/script/csfetys', '253', '试算加载首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99001', '254', '1', '/cs/csfetys/listCsLoTyAccSByCooNo', '0001', '通过门店编号去查询该门店下所有的产品', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99001', '255', '1', '/cs/csfetys/listPlOpByLoTyId', '255', '通过贷款品种ID查询期限', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99001', '256', '1', '/cs/csfetys/listPmIdByLoTyId', '256', '通过贷款品种ID和期限查询还款方式', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99001', '257', '1', '/cs/csfetys/page/*', '257', '试算', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '234', '1', '/cs/loanmaterial/index', '234', '贷款材料配置管理首页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '235', '1', '/script/loanmaterial', '235', '贷款材料配置首页／首屏数据', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '236', '1', '/cs/loanmaterial/page/*', '0001', '贷款材料配置列表分页', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '237', '1', '/cs/loanmaterial/list', '237', '贷款材料配置列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '238', '1', '/cs/loanmaterial/view/*', '238', '查看贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '239', '1', '/cs/loanmaterial/create', '239', '创建贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '240', '1', '/cs/loanmaterial/update', '240', '修改贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '241', '1', '/cs/loanmaterial/status/*', '241', '修改贷款材料配置状态', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '242', '1', '/cs/loanmaterial/remove/*', '242', '删除贷款材料配置', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99002', '243', '1', '/cs/loanmaterial/code', '243', '获取编号', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99005', '74', '1', '/cu/curos/list', '0001', '角色列表', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99005', '75', '1', '/cu/curess/rorismenu/*', '75', '菜单操作权限', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99005', '76', '1', '/cu/curos/updatePermissions', '76', '权限保存', '2017-03-31', '2017-03-31', '1');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99006', '82', '3', '/script/curesacts', '82', '权限首屏', '2017-03-31', '2017-04-05', '10000');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99006', '83', '3', '/cu/curesacts/page/*', '0001', '权限分页', '2017-03-31', '2017-04-05', '10000');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99006', '84', '3', '/cu/curesacts/view/*', '84', '查看权限', '2017-03-31', '2017-04-05', '10000');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99006', '85', '3', '/cu/curesacts/create', '85', '添加权限', '2017-03-31', '2017-04-05', '10000');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99006', '86', '3', '/cu/curesacts/remove/*', '86', '删除权限', '2017-03-31', '2017-04-05', '10000');
INSERT INTO "xfjr_cu"."cu_res_act_s" VALUES ('99006', '409', '3', '/cu/curesacts/list/*', '83', '权限列表', '2017-03-31', '2017-04-05', '10000');

-- ----------------------------
-- Table structure for cu_res_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_res_s";
CREATE TABLE "xfjr_cu"."cu_res_s" (
"res_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"res_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"res_sy_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"fa_res_no" "xfjr_cu"."no" COLLATE "default",
"res_url_ca" "xfjr_cu"."caption" COLLATE "default" NOT NULL,
"res_icon_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"disp_or" "xfjr_cu"."day" NOT NULL,
"page_mark_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"co" "xfjr_cu"."comment" COLLATE "default"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_res_s" IS '系统资源';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."res_no" IS '资源编号';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."res_na" IS '资源名称';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."res_sy_cd" IS '资源系统代码
参见cu_sy_c';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."fa_res_no" IS '上级资源编号';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."res_url_ca" IS '资源的url地址
不需要包含ip地址。
';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."res_icon_no" IS '不能为空，否则是默认图标';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."disp_or" IS '显示顺序排序';
COMMENT ON COLUMN "xfjr_cu"."cu_res_s"."page_mark_yn" IS '是否页面留痕';

-- ----------------------------
-- Records of cu_res_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('1', '3', '2017-02-14', '15:6:31', '2017-03-08', '1', '消费金融', '5', null, '/', 'M3704019492602618', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('10', '16', '2017-02-14', '15:6:31', '2017-03-08', '1', '贷款申请简要录入', '3', '9', '/cb/loan-application/brief-entry.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('101', '5', '2017-02-21', '15:5:30', '2017-04-05', '1', '流程管理', '6', '200', '/activiti/index', 'M3461579962854384', '2', '0', '99');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('102', '5', '2017-02-14', '15:6:31', '2017-03-14', '1', '业务参数', '2', '32', '/', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('11', '22', '2017-02-14', '15:6:31', '2017-03-15', '1', '贷款申请详情录入', '3', '9', '/cb/loan-application/detail-list.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('110', '10', '2017-02-14', '15:6:31', '2017-03-08', '1', '贷款发放', '4', '121', '/cc/loan/lnloinft/lnloinft-index.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('111', '11', '2017-02-14', '15:6:31', '2017-03-08', '1', '放款成功查询', '4', '121', '/cc/loan/lnloinf/lnloinf-list.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('112', '12', '2017-02-14', '15:6:31', '2017-03-08', '1', '主动还款申请', '4', '121', '/cc/loan/lnfeeinf/lnfeeinf-index.html', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('113', '11', '2017-02-14', '15:6:31', '2017-03-08', '1', '息费减免申请', '4', '121', '/cc/loan/lnfeeinft/lnfeeinft-index.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('114', '12', '2017-02-14', '15:6:31', '2017-03-08', '1', '利率变更表申请', '4', '121', '/cc/loan/lnratchg/lnratchg-index.html', 'M3461579962854384', '5', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('115', '11', '2017-02-14', '15:6:31', '2017-03-08', '1', '交易冲正申请', '4', '121', '/cc/loan/lnredreml/lnredreml-index.html', 'M3461579962854384', '6', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('116', '16', '2017-02-14', '15:6:31', '2017-03-08', '1', '还款账号变更申请', '4', '121', '/cc/loan/lnacchg/lnacchg-index.html', 'M3461579962854384', '7', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('117', '13', '2017-02-14', '15:6:31', '2017-03-08', '1', '贷款还款方式申请', '4', '121', '/cc/loan/lnpaychgt/lnpaychgt-index.html', 'M3461579962854384', '8', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('118', '15', '2017-02-14', '15:6:31', '2017-03-08', '1', '贷款展期申请', '4', '121', '/cc/loan/lnexdapp/lnexdapp-index.html', 'M3461579962854384', '9', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('119', '14', '2017-02-14', '15:6:31', '2017-03-08', '1', '存款账户信息查询', '4', '121', '/cc/loan/lndepinf/lndepinf-index.html', 'M3461579962854384', '10', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('12', '14', '2017-02-14', '15:6:31', '2017-03-08', '1', '电核/初审', '3', '9', '/cb/nucleus-nucleus/nucleus-nucleus-list.html', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('120', '14', '2017-02-14', '15:6:31', '2017-03-08', '1', '内部存款账户维护', '4', '121', '/cc/loan/lndeptrdinf/lndeptrdinf-index.html', 'M3461579962854384', '11', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('121', '11', '2017-02-14', '15:6:31', '2017-03-10', '1', '贷款业务', '4', '8', '/', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('125', '6', '2017-02-14', '15:6:31', '2017-03-01', '1', '黑白名单管理', '3', '29', '/', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('13', '19', '2017-02-14', '15:6:31', '2017-04-01', '1', '二级审批', '3', '9', '/cb/two-levels-approval/two-levels-approval-list.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('14', '21', '2017-02-14', '15:6:31', '2017-03-08', '1', '合同签订', '3', '9', '/cb/contract/contract-list.html', 'M3461579962854384', '5', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('15', '22', '2017-02-14', '15:6:31', '2017-03-08', '1', '用款申请', '3', '9', '/cb/spent-loan/spent-loan-list.html', 'M3461579962854384', '6', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('16', '23', '2017-02-14', '15:6:31', '2017-03-08', '1', '电话回访', '3', '9', '/cb/call-return-visit/return-visit-list.html', 'M3461579962854384', '7', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('17', '15', '2017-02-14', '15:6:31', '2017-03-08', '1', '上级电话回访', '3', '9', '/cb/superior-telephone-return/superior-telephone-return-list.html', 'M3461579962854384', '8', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('18', '18', '2017-02-14', '15:6:31', '2017-03-08', '1', '放款审查', '3', '9', '/cb/loan-review/loan-review-list.html', 'M3461579962854384', '9', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('2', '14', '2017-02-14', '15:6:31', '2017-03-14', '1', '我的任务', '3', '50005', '/', 'M3780563792757021', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('20', '22', '2017-02-14', '15:6:31', '2017-03-28', '1', '客户管理', '2', '1', '/', 'M3780406139243903', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('200', '7', '2017-02-14', '15:5:30', '2017-03-14', '1', '工作流引擎', '6', '32', '/', 'M3780218844875132', '6', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('21', '4', '2017-02-14', '15:6:31', '2017-03-21', '1', '个人客户管理', '2', '20', '/cs/personal-customer/personal-customer.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('22', '3', '2017-02-14', '15:6:31', '2017-03-16', '1', '黑白名单管理', '2', '20', '/', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('23', '8', '2017-02-14', '15:6:31', '2017-03-27', '1', '个人黑名单', '2', '22', '/cs/name-ist-management/person-black-list.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('24', '6', '2017-02-14', '15:6:31', '2017-03-27', '1', '个人白名单', '2', '22', '/cs/name-ist-management/person-white-list.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('25', '9', '2017-02-14', '15:6:31', '2017-03-27', '1', '个人灰名单', '2', '22', '/cs/name-ist-management/person-gray-list.html', 'M3461579962854384', '1', '1', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('26', '3', '2017-02-14', '15:6:31', '2017-02-27', '1', '合作方黑名单', '2', '125', '/cs/name-ist-management/partner-black-list.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('27', '7', '2017-02-14', '15:6:31', '2017-03-01', '1', '合作方白名单', '2', '125', '/cs/name-ist-management/partner-white-list.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('28', '7', '2017-02-14', '15:6:31', '2017-03-01', '1', '合作方灰名单', '2', '125', '/cs/name-ist-management/partner-gray-list.html', 'M3461579962854384', '5', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('29', '18', '2017-02-14', '15:6:31', '2017-03-16', '1', '第三方机构', '2', '1', '/', 'M3780286053094452', '5', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('3', '13', '2017-02-14', '15:6:31', '2017-03-27', '1', '待办任务', '3', '2', '/cb/mytask-list/mytask-waiting-list.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('30', '6', '2017-02-14', '15:6:31', '2017-03-15', '1', '合作商管理', '2', '29', '/cs/business-partner/partner-list.html', 'M3780662241135984', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('31', '5', '2017-02-14', '15:6:31', '2017-03-01', '1', '门店管理', '2', '29', '/cs/store/store-list.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('32', '13', '2017-02-14', '15:6:31', '2017-03-16', '1', '系统配置', '2', '1', '/', 'M3780662241135984', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('33', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '产品设置', '2', '102', '/cs/product-set/product-set.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('34', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '打印模板集管理', '2', '102', '/cs/printtemplateset/index.html', 'M3461579962854384', '8', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('36', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '材料设置', '2', '102', '/cs/material-setting/material-setting-list.html', 'M3461579962854384', '7', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('37', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '还款方式', '2', '102', '/cs/repay-mode/repay-mode.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('38', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '费用计算', '2', '102', '/cs/cost-account/cost-account.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('39', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '费用子信息', '2', '102', '/cs/cost-subInfor/cost-subInfor.html', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('4', '15', '2017-02-14', '15:6:31', '2017-03-27', '1', '已办任务', '3', '2', '/cb/mytask-list/mytask-finish-list.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('40', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '佣金配置', '2', '102', '/cs/brokerage-config/brokerage-config-list.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('41', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '促销配置', '2', '102', '/cs/promotion-allocation/promotion-allocation.html', 'M3461579962854384', '6', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('42', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '额度审批', '2', '102', '/cs/limit-examine/limit-examine-list.html', 'M3461579962854384', '9', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('43', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '电核设置', '2', '102', '/cs/nuclear-set/nuclear-set.html', 'M3461579962854384', '10', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('44', '4', '2017-02-14', '15:6:31', '2017-03-10', '1', '电核比例', '2', '102', '/cs/tel-check-percent/check-percent-list.html', 'M3461579962854384', '13', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('45', '6', '2017-02-14', '15:6:31', '2017-03-11', '1', '工单配置', '2', '102', '/', 'M3461579962854384', '11', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('46', '6', '2017-02-14', '15:6:31', '2017-03-11', '1', '消息中心', '2', '102', '/', 'M3461579962854384', '12', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('47', '7', '2017-02-14', '15:6:31', '2017-03-15', '1', '核心业务参数', '4', '32', '/', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('48', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '货币信息管理', '4', '47', '/cc/params/parcurtyp/parCurTypIndex.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('49', '6', '2017-02-14', '15:6:31', '2017-03-28', '1', '还款方式配置表管理', '4', '47', '/cc/params/parpaycfg/parPayCfgIndex.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('5', '17', '2017-02-14', '15:6:31', '2017-03-27', '1', '已结任务', '3', '2', '/cb/mytask-list/mytask-end-list.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50', '7', '2017-02-14', '15:6:31', '2017-03-06', '1', '还款顺序管理', '4', '47', '/cc/params/parpayord/parPayOrdIndex.html', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50001', '1', '2017-02-27', '14:44:25', '2017-03-06', '1', '字典管理', '2', '50015', '/cs/dictionarycategory/index.html', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50002', '11', '2017-03-06', '10:32:42', '2017-03-16', '1', '贷后管理', '3', '1', '/', 'M40003', '4', '0', '贷后管理一级菜单');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50003', '1', '2017-03-06', '10:42:16', '2017-03-11', '1', '溢缴款管理', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50004', '8', '2017-03-06', '10:28:34', '2017-04-05', '1', '菜单配置', '5', '93', '/cu/menu-management/menu-management.html', 'M3461579962854384', '2', '1', '菜单配置，权限管理，菜单图标管理的二级菜单');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50005', '20', '2017-03-06', '10:17:19', '2017-03-16', '1', '个人工作台', '5', '1', '/', 'M40002', '0', '0', '我的任务个人设置&的一级菜单');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50006', '1', '2017-03-06', '10:40:12', '2017-03-11', '1', '贷款撤销', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50007', '1', '2017-03-06', '10:41:31', '2017-03-11', '1', '第三方费用管理', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50008', '1', '2017-03-06', '10:36:06', '2017-03-11', '1', '退贷管理', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50009', '1', '2017-03-06', '10:41:59', '2017-03-11', '1', '匹配银行流水', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50010', '1', '2017-03-06', '10:36:31', '2017-03-11', '1', '还款账户变更', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50011', '2', '2017-03-06', '10:36:52', '2017-03-11', '1', '主动还款', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50012', '1', '2017-03-06', '10:37:26', '2017-03-11', '1', '贷款变更', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50013', '1', '2017-03-06', '10:37:49', '2017-03-11', '1', '主动还款试算', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50014', '1', '2017-03-06', '10:38:08', '2017-03-11', '1', '五级分类变更', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50015', '4', '2017-03-06', '10:29:31', '2017-03-15', '1', '通用参数', '2', '32', '/', 'M3461579962854384', '1', '0', '字典管理的二级菜单');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50016', '1', '2017-03-06', '10:38:30', '2017-03-11', '1', '批量还款导入', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50017', '2', '2017-03-06', '10:39:10', '2017-03-11', '1', '息费减免', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50018', '1', '2017-03-06', '10:39:47', '2017-03-11', '1', '保证金管理', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('50019', '1', '2017-03-06', '10:40:34', '2017-03-11', '1', '贷款核销', '3', '50002', '/ccc', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('51', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '基准利率分类管理', '4', '47', '/cc/params/parrattyp/parRatTypIndex.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('52', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '交易码配置管理', '4', '47', '/cc/params/partrcfg/parTrCfgIndex.html', 'M3461579962854384', '6', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('53', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '科目信息配置表管理', '4', '47', '/cc/system/syaccfg/syAcCfgIndex.html', 'M3461579962854384', '7', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('54', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '系统基本信息表管理', '4', '47', '/cc/system/sybainf/syBaInf-look.html', 'M3461579962854384', '5', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('55', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '流水信息表管理', '4', '47', '/cc/params/parseqinf/parSeqInfIndex.html', 'M3461579962854384', '8', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('56', '5', '2017-02-14', '15:6:31', '2017-03-06', '1', '字典信息表管理', '4', '47', '/cc/params/csdicfg/csdicfg-index.html', 'M3461579962854384', '9', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('6', '13', '2017-02-14', '15:6:31', '2017-03-27', '1', '取消任务', '3', '2', '/cb/mytask-list/mytask-cancle-list.html', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('7', '15', '2017-02-14', '15:6:31', '2017-03-27', '1', '拒绝任务', '3', '2', '/cb/mytask-list/mytask-refuse-list.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('73', '26', '2017-02-14', '15:6:31', '2017-03-27', '1', '财务信息', '4', '1', '/', 'M3780172396631095', '7', '1', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('74', '7', '2017-02-14', '15:6:31', '2017-03-17', '1', '会计分录信息管理', '4', '73', '/cc/loan/lnloinfentbrf/lnloinf-entbrf.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('75', '6', '2017-02-14', '15:6:31', '2017-03-17', '1', '分户账查询', '4', '73', '/cc/loan/lnloinflgd/lnloinf-lgd.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('76', '20', '2017-02-14', '15:6:31', '2017-03-21', '1', '日终批处理', '4', '1', '/', 'M3780476046966993', '6', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('77', '17', '2017-02-14', '15:6:31', '2017-03-05', '1', '批处理任务管理', '4', '76', '/cc/batch/batchtaskinfo/batchtaskinfo-index.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('78', '20', '2017-02-14', '15:6:31', '2017-03-05', '1', '批处理执行计划', '4', '76', '/cc/batch/batchtaskexeplan/batchtaskexeplan-index.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('79', '18', '2017-02-14', '15:6:31', '2017-03-05', '1', '系统批处理执行历史', '4', '76', '/cc/batch/batchhis/batchhis-index.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('8', '18', '2017-02-14', '15:6:31', '2017-03-16', '1', '业务办理', '3', '1', '/', 'M3780682826222213', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('80', '13', '2017-02-14', '15:6:31', '2017-03-21', '1', '个人设置', '5', '50005', '/', 'M3780172396631095', '2', '1', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('81', '21', '2017-02-14', '15:6:31', '2017-03-07', '1', '个人信息维护', '5', '80', '/cu/personal-settings/personal-info-maintenance.html', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('82', '22', '2017-02-14', '15:6:31', '2017-03-07', '1', '修改登录密码', '5', '80', '/cu/personal-settings/update-password.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('83', '19', '2017-02-14', '15:6:31', '2017-03-07', '1', '请假登记', '5', '80', '/cu/personal-settings/leave-registration-list.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('85', '7', '2017-02-14', '15:6:31', '2017-03-13', '1', '机构管理', '5', '99000', '/cu/organization-management/organization-management-list.html', 'M3461579962854384', '1', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('87', '10', '2017-02-14', '15:6:31', '2017-03-13', '1', '岗位管理', '5', '99000', '/cu/post-management/post-management-list.html', 'M3461579962854384', '3', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('89', '9', '2017-02-14', '15:6:31', '2017-03-31', '1', '角色管理', '5', '99000', '/cu/role-management/role-management-list.html', 'M3461579962854384', '2', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('9', '10', '2017-02-14', '15:6:31', '2017-03-10', '1', '贷款申请处理', '3', '8', '/', 'M3461579962854384', '0', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('91', '6', '2017-02-14', '15:6:31', '2017-03-13', '1', '用户管理', '5', '99000', '/cu/user-management/user-management-list.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('93', '10', '2017-02-14', '15:6:31', '2017-03-14', '1', '菜单管理', '5', '32', '/', 'M3461579962854384', '5', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('95', '18', '2017-02-14', '15:6:31', '2017-04-05', '1', '权限管理', '5', '93', '/cu/auth-management/auth-management.html', 'M3461579962854384', '3', '0', '2233');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99', '17', '2017-02-14', '15:6:31', '2017-04-05', '1', '菜单图标管理', '5', '93', '/cu/menu-picture/menu-picture-list.html', 'M3461579962854384', '4', '0', '222');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99000', '3', '2017-03-06', '10:26:45', '2017-03-14', '1', '组织机构', '2', '32', '/', 'M3461579962854384', '1', '0', '机构，岗位，角色，用户的二级菜单');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99001', '2', '2017-03-10', '20:10:58', '2017-03-29', '1', '产品试算', '2', '102', '/cs/trial/trial.html', 'M3461579962854384', '16', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99002', '3', '2017-03-10', '11:41:41', '2017-03-11', '1', '基础材料配置', '2', '102', '/cs/base-material/base-material-list.html', 'M3704019492602618', '5', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99003', '0', '2017-03-10', '20:16:36', '2017-03-10', '1', '产品试算', '2', '102', '/cs/trial/trial.html', 'M3461579962854384', '20', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99004', '0', '2017-03-17', '15:06:16', '2017-03-17', '1', '资金出账', '4', '121', '/cc/loan/lnsetlacinf/lnsetlacinf-index.html', 'M3461579962854384', '20', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99005', '2', '2017-03-20', '16:14:59', '2017-04-05', '1', '权限管理二', '5', '93', '/cu/auth-management/auth-management2.html', 'M3461579962854384', '1', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99006', '2', '2017-03-20', '16:19:06', '2017-04-05', '1', '权限配置', '5', '93', '/cu/auth-configuration/auth-configuration-list.html', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99013', '0', '2017-03-28', '13:47:46', '2017-03-28', '1', '放款机构配置', '2', '102', '/cs/lending-institution/lending-institution-configure.html', 'M3461579962854384', '0', '0', '');
INSERT INTO "xfjr_cu"."cu_res_s" VALUES ('99014', '0', '2017-03-28', '13:48:08', '2017-03-28', '1', '放款机构维护', '2', '102', '/cs/lending-institution/lending-institution-service.html', 'M3461579962854384', '0', '0', '');

-- ----------------------------
-- Table structure for cu_ro_ri_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_ro_ri_s";
CREATE TABLE "xfjr_cu"."cu_ro_ri_s" (
"ro_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"res_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"res_act_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_ro_ri_s" IS '角色权限';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."ro_no" IS '岗位编号';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."res_no" IS '资源编号';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."res_act_cd" IS '资源动作码
ZJ 增加
XG 修改
SC 删除
CX 查询
FW 访问
参见字典分类代码：70';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_ri_s"."la_up_us_id" IS '最新更新用户';

-- ----------------------------
-- Records of cu_ro_ri_s
-- ----------------------------

-- ----------------------------
-- Table structure for cu_ro_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_ro_s";
CREATE TABLE "xfjr_cu"."cu_ro_s" (
"ro_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"st" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"ro_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"sto_use_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"co" "xfjr_cu"."comment" COLLATE "default"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_ro_s" IS '岗位';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."ro_no" IS '角色编码';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."st" IS '状态
CS 初始
JH 激活
参见 通用字典 状态分类28';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."ro_na" IS '角色名称';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."sto_use_yn" IS '商店专用';
COMMENT ON COLUMN "xfjr_cu"."cu_ro_s"."co" IS '备注';

-- ----------------------------
-- Records of cu_ro_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_ro_s" VALUES ('00001', '0', '2017-03-01', '12:12', '2017-03-03', '10000', 'JH', 'ADMIN', '1', null);

-- ----------------------------
-- Table structure for cu_sy_c
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_sy_c";
CREATE TABLE "xfjr_cu"."cu_sy_c" (
"sy_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"sy_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"url" "xfjr_cu"."caption" COLLATE "default" NOT NULL,
"dom_na" "xfjr_cu"."caption" COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_sy_c" IS '系统配置';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."sy_cd" IS '系统代码';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."sy_na" IS '系统名称';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."url" IS 'url地址';
COMMENT ON COLUMN "xfjr_cu"."cu_sy_c"."dom_na" IS '域名';

-- ----------------------------
-- Records of cu_sy_c
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_sy_c" VALUES ('2', '1', '1', '1', '1', '1', '业务支撑系统', '1', 'http://124.193.90.196:8000');
INSERT INTO "xfjr_cu"."cu_sy_c" VALUES ('3', '1', '1', '1', '1', '1', '业务系统', '1', 'http://124.193.90.196:8001');
INSERT INTO "xfjr_cu"."cu_sy_c" VALUES ('4', '1', '1', '1', '1', '1', '核心系统', '1', 'http://124.193.90.196:8004');
INSERT INTO "xfjr_cu"."cu_sy_c" VALUES ('5', '1', '1', '1', '1', '1', '统一用户', '1', 'http://124.193.90.196:8002');
INSERT INTO "xfjr_cu"."cu_sy_c" VALUES ('6', '1', '1', '1', '1', '1', '工作流引擎', '1', 'http://124.193.90.196:8001');

-- ----------------------------
-- Table structure for cu_us_c
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_c";
CREATE TABLE "xfjr_cu"."cu_us_c" (
"id" "xfjr_cu"."id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"pwd_le" "xfjr_cu"."quantity" NOT NULL,
"pwd_alg_cd" "xfjr_cu"."cd" COLLATE "default",
"login_err_qt" "xfjr_cu"."quantity" DEFAULT 3 NOT NULL,
"unlock_ty_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"auto_unlock_minu_qt" "xfjr_cu"."quantity"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_c" IS '用户配置';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."pwd_le" IS '密码长度';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."pwd_alg_cd" IS '加密算法
BZ 标准
';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."login_err_qt" IS '登录错误次数
密码错误3次 锁定';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."unlock_ty_cd" IS '解锁类型代码
ZD  自动解锁
RG  人工解锁';
COMMENT ON COLUMN "xfjr_cu"."cu_us_c"."auto_unlock_minu_qt" IS '自动解锁分钟
如果为自动解锁需要设置';

-- ----------------------------
-- Records of cu_us_c
-- ----------------------------

-- ----------------------------
-- Table structure for cu_us_ch_pwd_l
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_ch_pwd_l";
CREATE TABLE "xfjr_cu"."cu_us_ch_pwd_l" (
"id" "xfjr_cu"."ref_id" NOT NULL,
"us_id" "xfjr_cu"."id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"pwd" "xfjr_cu"."caption" COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_ch_pwd_l" IS '用户登录系统信息';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."us_id" IS '用户标识';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ch_pwd_l"."pwd" IS '密码';

-- ----------------------------
-- Records of cu_us_ch_pwd_l
-- ----------------------------

-- ----------------------------
-- Table structure for cu_us_fav_res_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_fav_res_s";
CREATE TABLE "xfjr_cu"."cu_us_fav_res_s" (
"us_id" "xfjr_cu"."id" NOT NULL,
"res_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_fav_res_s" IS '用户菜单收藏';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."us_id" IS '用户标识';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."res_no" IS '资源编号';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_fav_res_s"."la_up_us_id" IS '最新更新用户';

-- ----------------------------
-- Records of cu_us_fav_res_s
-- ----------------------------

-- ----------------------------
-- Table structure for cu_us_hol_l
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_hol_l";
CREATE TABLE "xfjr_cu"."cu_us_hol_l" (
"tr" "xfjr_cu"."trade_no" NOT NULL,
"us_id" "xfjr_cu"."id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"ef_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"hol_be_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"hol_en_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"hol_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"co" varchar(255) COLLATE "default",
"hol_cau_ca" varchar(255) COLLATE "default",
"login_na" varchar(255) COLLATE "default",
"login_tr_id" varchar(255) COLLATE "default",
"wo_dt" varchar(255) COLLATE "default",
"wo_tm" varchar(255) COLLATE "default"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_hol_l" IS '用户休假日志';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."tr" IS '申请请假流水';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."us_id" IS '用户标识';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."ef_dt" IS '生效日期
休假或者上班生效日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."hol_be_dt" IS '休假开始日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."hol_en_dt" IS '休假结束日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_hol_l"."hol_cd" IS '休假代码
XJ 休假  
SB 上班';

-- ----------------------------
-- Records of cu_us_hol_l
-- ----------------------------

-- ----------------------------
-- Table structure for cu_us_login_l
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_login_l";
CREATE TABLE "xfjr_cu"."cu_us_login_l" (
"login_tr_id" "xfjr_cu"."id" NOT NULL,
"login_id" "xfjr_cu"."ref_id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"login_out_dt" "xfjr_cu"."dt" COLLATE "default",
"login_out_tm" "xfjr_cu"."tm" COLLATE "default",
"login_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_login_l" IS '用户登录日志';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."login_tr_id" IS '登录流水Id';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."login_id" IS '登录Id';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."login_out_dt" IS '登录退出日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."login_out_tm" IS '登录退出时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_l"."login_na" IS '登录名';

-- ----------------------------
-- Records of cu_us_login_l
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_us_login_l" VALUES ('1840', '12000', '1', '2017-04-01', '15:07:44', '2017-04-01', '15:10:42', '1200');
INSERT INTO "xfjr_cu"."cu_us_login_l" VALUES ('1879', '10000', '0', '2017-04-05', '17:58:52', null, null, 'ADMIN');

-- ----------------------------
-- Table structure for cu_us_login_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_login_s";
CREATE TABLE "xfjr_cu"."cu_us_login_s" (
"us_id" "xfjr_cu"."ref_id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"st" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"pwd" "xfjr_cu"."bigmessage" COLLATE "default" NOT NULL,
"pwd_ov_yn" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"pwd_salt" varchar(50) COLLATE "default",
"us_lock_yn" "xfjr_cu"."yn" COLLATE "default" DEFAULT 'N'::bpchar NOT NULL,
"prev_ch_pwd_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"next_ch_pwd_dt" "xfjr_cu"."dt" COLLATE "default" DEFAULT '9999-01-01'::character varying NOT NULL,
"login_err_qt" "xfjr_cu"."quantity" DEFAULT 0 NOT NULL,
"lock_dt" "xfjr_cu"."dt" COLLATE "default" DEFAULT ''::character varying,
"lock_tm" "xfjr_cu"."tm" COLLATE "default",
"auto_unlock_dt" "xfjr_cu"."dt" COLLATE "default",
"auto_unlock_tm" "xfjr_cu"."tm" COLLATE "default",
"login_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_login_s" IS '用户登录系统信息';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."us_id" IS '用户Id';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."st" IS '状态
CS 初始
JH 激活
参见 通用字典 状态分类28';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."pwd" IS '密码';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."pwd_ov_yn" IS '是否密码过期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."pwd_salt" IS '密码盐';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."us_lock_yn" IS '用户是否锁定';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."prev_ch_pwd_dt" IS '上次更改密码日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."next_ch_pwd_dt" IS '下次更改密码日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."login_err_qt" IS '登录错误次数';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."lock_dt" IS '上次锁定日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."lock_tm" IS '锁定时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."auto_unlock_dt" IS '自动解锁日期
';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."auto_unlock_tm" IS '自动解锁时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_login_s"."login_na" IS '登录名';

-- ----------------------------
-- Records of cu_us_login_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_us_login_s" VALUES ('10000', '0', '2017-03-03', '18:18:23', '2017-03-03', '10000', 'JH', '1f82c942befda29b6ed487a51da199f78fce7f05', '0', null, '0', '2017-03-03', '2018-03-03', '0', null, null, null, null, 'ADMIN');
INSERT INTO "xfjr_cu"."cu_us_login_s" VALUES ('12000', '0', '2017-03-03', '18:18:23', '2017-03-03', '10000', 'JH', '1f82c942befda29b6ed487a51da199f78fce7f05', '0', null, '0', '2017-03-03', '2018-03-03', '0', null, null, null, null, '1200');

-- ----------------------------
-- Table structure for cu_us_post_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_post_s";
CREATE TABLE "xfjr_cu"."cu_us_post_s" (
"us_id" "xfjr_cu"."id" NOT NULL,
"post_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"login_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_post_s" IS '用户表';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."us_id" IS '用户标识';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."post_no" IS '岗位编号';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_post_s"."login_na" IS '登录名称';

-- ----------------------------
-- Records of cu_us_post_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_us_post_s" VALUES ('10000', '00001', '0', '2017-03-03', '12:12', '2017-03-03', '10000', 'admin');
INSERT INTO "xfjr_cu"."cu_us_post_s" VALUES ('12000', '00001', '0', '2017-03-03', '12:12', '2017-03-03', '10000', '1200');

-- ----------------------------
-- Table structure for cu_us_ro_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_ro_s";
CREATE TABLE "xfjr_cu"."cu_us_ro_s" (
"us_id" "xfjr_cu"."id" NOT NULL,
"ro_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"login_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_ro_s" IS '用户角色';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."us_id" IS '用户标识';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."ro_no" IS '角色编号';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_ro_s"."login_na" IS '登录名称';

-- ----------------------------
-- Records of cu_us_ro_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_us_ro_s" VALUES ('10000', '00001', '0', '2017-03-03', '12:12', '2017-03-03', '10000', 'admin');
INSERT INTO "xfjr_cu"."cu_us_ro_s" VALUES ('12000', '00001', '0', '2017-03-03', '12:12', '2017-03-03', '10000', '1200');

-- ----------------------------
-- Table structure for cu_us_s
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."cu_us_s";
CREATE TABLE "xfjr_cu"."cu_us_s" (
"id" "xfjr_cu"."id" NOT NULL,
"ve" "xfjr_cu"."version" NOT NULL,
"cr_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"cr_tm" "xfjr_cu"."tm" COLLATE "default" NOT NULL,
"la_up_dt" "xfjr_cu"."dt" COLLATE "default" NOT NULL,
"la_up_us_id" "xfjr_cu"."ref_id" NOT NULL,
"st" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"login_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"us_na" "xfjr_cu"."cu_na" COLLATE "default" NOT NULL,
"pa_ty_cd" "xfjr_cu"."cd" COLLATE "default" NOT NULL,
"pa_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"br_no" "xfjr_cu"."no" COLLATE "default" NOT NULL,
"mo_no" "xfjr_cu"."no" COLLATE "default",
"mail_no" "xfjr_cu"."no" COLLATE "default",
"exe_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"cu_ma_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"fa_exe_us_id" "xfjr_cu"."ref_id",
"hol_yn" "xfjr_cu"."yn" COLLATE "default" NOT NULL,
"hol_be_dt" "xfjr_cu"."dt" COLLATE "default",
"hol_en_dt" "xfjr_cu"."dt" COLLATE "default",
"co" "xfjr_cu"."comment" COLLATE "default",
"sex_cd" varchar(255) COLLATE "default"
)
WITH (OIDS=FALSE)

;
COMMENT ON TABLE "xfjr_cu"."cu_us_s" IS '用户表';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."ve" IS '版本';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."cr_dt" IS '创建日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."cr_tm" IS '创建时间';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."la_up_dt" IS '最后更新日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."la_up_us_id" IS '最新更新用户';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."st" IS '状态
CS 初始
JH 激活
参见 通用字典 状态分类28';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."login_na" IS '登录名称';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."us_na" IS '用户名称';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."pa_ty_cd" IS '证件类型
参见字典类型 17';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."pa_no" IS '证件号码。';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."br_no" IS '机构编号';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."mail_no" IS '邮箱号码';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."exe_yn" IS '是否主观';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."cu_ma_yn" IS '是否客户经理';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."fa_exe_us_id" IS '上级主管';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."hol_yn" IS '是否休假';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."hol_be_dt" IS '休假开始日期';
COMMENT ON COLUMN "xfjr_cu"."cu_us_s"."hol_en_dt" IS '休假结束日期';

-- ----------------------------
-- Records of cu_us_s
-- ----------------------------
INSERT INTO "xfjr_cu"."cu_us_s" VALUES ('10000', '0', '2017-04-01', '18:18:23', '2017-04-01', '10000', 'JH', 'ADMIN', 'admin', 'JR', '520121199410019999', '00001', '188888888', '', '1', '1', null, '1', null, null, null, 'V');
INSERT INTO "xfjr_cu"."cu_us_s" VALUES ('12000', '0', '2017-04-01', '18:18:23', '2017-04-01', '10000', 'JH', '1200', '超级业务员', 'JR', '520121199410019999', '00001', '188888888', '', '1', '1', null, '1', null, null, null, 'V');

-- ----------------------------
-- Table structure for message_publish_info
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."message_publish_info";
CREATE TABLE "xfjr_cu"."message_publish_info" (
"id" int8 DEFAULT nextval('"xfjr_cu".message_publish_info_id_seq'::regclass) NOT NULL,
"create_time_millis" int8,
"message" varchar(255) COLLATE "default",
"message_type" varchar(255) COLLATE "default"
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of message_publish_info
-- ----------------------------

-- ----------------------------
-- Table structure for message_subscribe_info
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."message_subscribe_info";
CREATE TABLE "xfjr_cu"."message_subscribe_info" (
"id" int8 DEFAULT nextval('"xfjr_cu".message_subscribe_info_id_seq'::regclass) NOT NULL,
"message_type" varchar(255) COLLATE "default",
"subscribe_time_millis" int8
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of message_subscribe_info
-- ----------------------------
INSERT INTO "xfjr_cu"."message_subscribe_info" VALUES ('1', 'MENUCACHE', '1489719178282');
INSERT INTO "xfjr_cu"."message_subscribe_info" VALUES ('2', 'ACCESSCACHE', '1489719557010');
INSERT INTO "xfjr_cu"."message_subscribe_info" VALUES ('3', 'USERCACHE', '1489719666850');
INSERT INTO "xfjr_cu"."message_subscribe_info" VALUES ('4', 'DICTIONARY_CLEAN', '1489721262213');

-- ----------------------------
-- Table structure for oauth_clientinfo
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."oauth_clientinfo";
CREATE TABLE "xfjr_cu"."oauth_clientinfo" (
"id" int8 DEFAULT nextval('"xfjr_cu".oauth_clientinfo_id_seq'::regclass) NOT NULL,
"client_id" varchar(255) COLLATE "default",
"client_secret" varchar(255) COLLATE "default",
"client_uri" varchar(255) COLLATE "default",
"default_scope" varchar(255) COLLATE "default",
"description" varchar(255) COLLATE "default",
"expires_in" int8,
"icon_uri" varchar(255) COLLATE "default",
"issued_at" int8,
"name" varchar(255) COLLATE "default",
"redirect_uri" varchar(255) COLLATE "default",
"scope" varchar(255) COLLATE "default"
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of oauth_clientinfo
-- ----------------------------
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('1', 'cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cs-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('2', 'xfjr-cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://124.193.90.196:8000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cs-prj', 'http://124.193.90.196:8000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('3', 'xfjr-cs-prj-l', 'C1hAkYKYyUmKQcrwbfJEA', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cs-prj', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('4', 'yut-cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cs-prj', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('5', 'xfjr-cb-prj-l', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://192.168.2.146:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('6', 'cb-prj', 'CBC1hAkYKYyKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('7', 'xfjr-cb-prj', 'CBC1hAkYKYyKQcrwbfJEA', 'http://124.193.90.196:8001/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://124.193.90.196:8001/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('8', 'xfjr-cb-prj8', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.178:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://192.168.2.178:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('9', 'xfjr-cb-prj9', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.155:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://192.168.2.155:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('10', 'xfjr-cb-prj-lzc', 'CBC1hAkYKYyKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('11', 'xfjr-cb-prj-xkq', 'CBC1hAkYKYyKQcrwbfJEA', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://localhost:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('12', 'zy-cs-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cs-prj', 'http://192.168.2.140:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('13', 'xfjr-cb-prj-fl', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.124:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://192.168.2.124:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('14', 'xfjr-cb-prj-ig', 'CBC1hAkYKYyKQcrwbfJEA', 'http://192.168.2.71:3000/oauth2/client/codecallback', 'userinfo', null, null, null, null, 'cb-prj', 'http://192.168.2.71:3000/oauth2/client/codecallback', 'userinfo');
INSERT INTO "xfjr_cu"."oauth_clientinfo" VALUES ('15', 'cc-prj', 'C1hAkYKYyUmKQcrwbfJEA', 'http://124.193.90.196:8004', 'userinfo', '', null, '', null, 'cc-prj', 'http://124.193.90.196:8004', 'userinfo');

-- ----------------------------
-- Table structure for schema_version
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."schema_version";
CREATE TABLE "xfjr_cu"."schema_version" (
"installed_rank" int4 NOT NULL,
"version" varchar(50) COLLATE "default",
"description" varchar(200) COLLATE "default" NOT NULL,
"type" varchar(20) COLLATE "default" NOT NULL,
"script" varchar(1000) COLLATE "default" NOT NULL,
"checksum" int4,
"installed_by" varchar(100) COLLATE "default" NOT NULL,
"installed_on" timestamp(6) DEFAULT now() NOT NULL,
"execution_time" int4 NOT NULL,
"success" bool NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of schema_version
-- ----------------------------
INSERT INTO "xfjr_cu"."schema_version" VALUES ('1', '1', 'init database', 'SQL', 'V1__init_database.sql', '1112922826', 'xfjr', '2017-02-26 17:12:33.313134', '7', 't');
INSERT INTO "xfjr_cu"."schema_version" VALUES ('2', '2', 'init domains', 'SQL', 'V2__init_domains.sql', '-1148183822', 'xfjr', '2017-02-26 17:12:33.344279', '66', 't');
INSERT INTO "xfjr_cu"."schema_version" VALUES ('3', '3', 'init xfjr cu tables', 'SQL', 'V3__init_xfjr_cu_tables.sql', '1792804891', 'xfjr', '2017-02-26 17:12:33.42641', '218', 't');
INSERT INTO "xfjr_cu"."schema_version" VALUES ('4', '4', 'init xfjr cu tables', 'SQL', 'V4__init_xfjr_cu_tables.sql', '911977913', 'xfjr', '2017-02-26 17:12:33.662311', '1149', 't');
INSERT INTO "xfjr_cu"."schema_version" VALUES ('5', '5', 'init xfjr cu oauth clientinfo tables', 'SQL', 'V5__init_xfjr_cu_oauth_clientinfo_tables.sql', '1662789532', 'xfjr', '2017-02-26 17:12:34.829907', '31', 't');

-- ----------------------------
-- Table structure for server_noticeinfo
-- ----------------------------
DROP TABLE IF EXISTS "xfjr_cu"."server_noticeinfo";
CREATE TABLE "xfjr_cu"."server_noticeinfo" (
"id" int8 DEFAULT nextval('"xfjr_cu".server_noticeinfo_id_seq'::regclass) NOT NULL,
"client_id" varchar(255) COLLATE "default",
"create_time" timestamp(6),
"notice_type" varchar(255) COLLATE "default",
"state" varchar(255) COLLATE "default",
"update_time" timestamp(6)
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of server_noticeinfo
-- ----------------------------

-- ----------------------------
-- Alter Sequences Owned By 
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table cs_di_c
-- ----------------------------
ALTER TABLE "xfjr_cu"."cs_di_c" ADD PRIMARY KEY ("di_ki_id", "di_cd");

-- ----------------------------
-- Primary Key structure for table cu_br_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_br_s" ADD PRIMARY KEY ("br_no");

-- ----------------------------
-- Primary Key structure for table cu_icon_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_icon_s" ADD PRIMARY KEY ("icon_no");

-- ----------------------------
-- Primary Key structure for table cu_post_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_post_s" ADD PRIMARY KEY ("post_no");

-- ----------------------------
-- Primary Key structure for table cu_res_act_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_res_act_s" ADD PRIMARY KEY ("res_no", "su_id");

-- ----------------------------
-- Primary Key structure for table cu_res_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_res_s" ADD PRIMARY KEY ("res_no");

-- ----------------------------
-- Primary Key structure for table cu_ro_ri_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_ro_ri_s" ADD PRIMARY KEY ("ro_no", "res_no", "res_act_cd");

-- ----------------------------
-- Primary Key structure for table cu_ro_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_ro_s" ADD PRIMARY KEY ("ro_no");

-- ----------------------------
-- Primary Key structure for table cu_sy_c
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_sy_c" ADD PRIMARY KEY ("sy_cd");

-- ----------------------------
-- Primary Key structure for table cu_us_c
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_c" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cu_us_ch_pwd_l
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_ch_pwd_l" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cu_us_fav_res_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_fav_res_s" ADD PRIMARY KEY ("res_no", "us_id");

-- ----------------------------
-- Primary Key structure for table cu_us_hol_l
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_hol_l" ADD PRIMARY KEY ("tr");

-- ----------------------------
-- Primary Key structure for table cu_us_login_l
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_login_l" ADD PRIMARY KEY ("login_tr_id");

-- ----------------------------
-- Primary Key structure for table cu_us_login_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_login_s" ADD PRIMARY KEY ("us_id");

-- ----------------------------
-- Primary Key structure for table cu_us_post_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_post_s" ADD PRIMARY KEY ("us_id", "post_no");

-- ----------------------------
-- Primary Key structure for table cu_us_ro_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_ro_s" ADD PRIMARY KEY ("us_id", "ro_no");

-- ----------------------------
-- Primary Key structure for table cu_us_s
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_s" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Key structure for table "xfjr_cu"."cu_br_s"
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_br_s" ADD FOREIGN KEY ("prev_br_no") REFERENCES "xfjr_cu"."cu_br_s" ("br_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_br_s" ADD FOREIGN KEY ("prev_br_no") REFERENCES "xfjr_cu"."cu_br_s" ("br_no") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Key structure for table "xfjr_cu"."cu_res_s"
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_res_s" ADD FOREIGN KEY ("res_icon_no") REFERENCES "xfjr_cu"."cu_icon_s" ("icon_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_res_s" ADD FOREIGN KEY ("res_icon_no") REFERENCES "xfjr_cu"."cu_icon_s" ("icon_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_res_s" ADD FOREIGN KEY ("res_sy_cd") REFERENCES "xfjr_cu"."cu_sy_c" ("sy_cd") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_res_s" ADD FOREIGN KEY ("fa_res_no") REFERENCES "xfjr_cu"."cu_res_s" ("res_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_res_s" ADD FOREIGN KEY ("res_sy_cd") REFERENCES "xfjr_cu"."cu_sy_c" ("sy_cd") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_res_s" ADD FOREIGN KEY ("fa_res_no") REFERENCES "xfjr_cu"."cu_res_s" ("res_no") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Key structure for table "xfjr_cu"."cu_us_post_s"
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_post_s" ADD FOREIGN KEY ("us_id") REFERENCES "xfjr_cu"."cu_us_s" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_post_s" ADD FOREIGN KEY ("post_no") REFERENCES "xfjr_cu"."cu_post_s" ("post_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_post_s" ADD FOREIGN KEY ("post_no") REFERENCES "xfjr_cu"."cu_post_s" ("post_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_post_s" ADD FOREIGN KEY ("us_id") REFERENCES "xfjr_cu"."cu_us_s" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Key structure for table "xfjr_cu"."cu_us_ro_s"
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_ro_s" ADD FOREIGN KEY ("ro_no") REFERENCES "xfjr_cu"."cu_ro_s" ("ro_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_ro_s" ADD FOREIGN KEY ("us_id") REFERENCES "xfjr_cu"."cu_us_s" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_ro_s" ADD FOREIGN KEY ("us_id") REFERENCES "xfjr_cu"."cu_us_s" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_ro_s" ADD FOREIGN KEY ("ro_no") REFERENCES "xfjr_cu"."cu_ro_s" ("ro_no") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Key structure for table "xfjr_cu"."cu_us_s"
-- ----------------------------
ALTER TABLE "xfjr_cu"."cu_us_s" ADD FOREIGN KEY ("br_no") REFERENCES "xfjr_cu"."cu_br_s" ("br_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_s" ADD FOREIGN KEY ("br_no") REFERENCES "xfjr_cu"."cu_br_s" ("br_no") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_s" ADD FOREIGN KEY ("fa_exe_us_id") REFERENCES "xfjr_cu"."cu_us_s" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "xfjr_cu"."cu_us_s" ADD FOREIGN KEY ("fa_exe_us_id") REFERENCES "xfjr_cu"."cu_us_s" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
