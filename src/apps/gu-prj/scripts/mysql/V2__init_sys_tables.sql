-- MySQL dump 10.13  Distrib 5.7.10, for osx10.11 (x86_64)
--
-- Host: localhost    Database: xfjr
-- ------------------------------------------------------
-- Server version	5.7.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adm_sys_action`
--

DROP TABLE IF EXISTS `adm_sys_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_action` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `node_level` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `menu_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhli2of8dexkun2idh6h2umwjx` (`menu_id`),
  CONSTRAINT `FKhli2of8dexkun2idh6h2umwjx` FOREIGN KEY (`menu_id`) REFERENCES `adm_sys_menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_action`
--

LOCK TABLES `adm_sys_action` WRITE;
/*!40000 ALTER TABLE `adm_sys_action` DISABLE KEYS */;
INSERT INTO `adm_sys_action` VALUES (4,NULL,0,1,'NOTAUTHORIZED','新增菜单',NULL,'/menu/create',3),(5,NULL,2,1,'AUTHORIZED','菜单树',NULL,'/menu/tree',3),(6,NULL,3,1,'AUTHORIZED','加载菜单',NULL,'/menu/view/**',3),(7,NULL,9999,1,'NOTAUTHORIZED','修改菜单',NULL,'/menu/update',3),(8,NULL,9999,1,'NOTAUTHORIZED','删除菜单',NULL,'/menu/remove/**',3),(9,NULL,9999,1,'NOTAUTHORIZED','新增页面资源',NULL,'/menu/action-create',3),(10,NULL,9999,1,'NOTAUTHORIZED','修改页面资源',NULL,'/menu/action-update',3),(11,NULL,9999,1,'NOTAUTHORIZED','删除页面资源',NULL,'/menu/action-remove/**',3),(13,NULL,9999,1,'NOTAUTHORIZED','用户导出',NULL,'/export/users/xlsx',12),(14,NULL,9999,1,'NOTAUTHORIZED','用户导入',NULL,'/admin/user/import/excel',12),(15,NULL,9999,1,'NOTAUTHORIZED','离职人员导入',NULL,'/admin/user/import/former',12),(16,NULL,9999,1,'AUTHORIZED','用户列表',NULL,'/user/page/**',12),(17,NULL,9999,1,'NOTAUTHORIZED','新增用户',NULL,'/user/create',12),(18,NULL,9999,1,'NOTAUTHORIZED','修改用户',NULL,'/user/update',12),(19,NULL,9999,1,'AUTHORIZED','获取用户信息',NULL,'/user/view/**',12),(20,NULL,9999,1,'NOTAUTHORIZED','重置密码',NULL,'/user/reset-login-password',12),(22,NULL,9999,1,'NOTAUTHORIZED','/role/create',NULL,'/role/create',21),(23,NULL,9999,1,'NOTAUTHORIZED','删除角色',NULL,'/role/remove/**',21),(24,NULL,9999,1,'AUTHORIZED','load',NULL,'/role/view/**',21),(25,NULL,9999,1,'NOTAUTHORIZED','/role/update',NULL,'/role/update',21),(26,NULL,9999,1,'AUTHORIZED','权限设置页面',NULL,'/role/permissions-view/**',21),(27,NULL,9999,1,'NOTAUTHORIZED','权限设置',NULL,'/role/permissions-update',21),(28,NULL,9999,1,'AUTHORIZED','角色对象设置页面',NULL,'/role/users-view/**',21),(29,NULL,9999,1,'NOTAUTHORIZED','角色对象设置',NULL,'/role/users-update',21),(30,NULL,9999,1,'AUTHORIZED','资源树',NULL,'/role/resource/tree/**',21),(31,NULL,9999,1,'AUTHORIZED','组织机构－用户树',NULL,'/role/organuser/tree/**',21),(32,NULL,9999,1,'AUTHORIZED','分页',NULL,'/role/page/**',21),(33,NULL,9999,1,'AUTHORIZED','isExists',NULL,'/role/notexists',21),(35,NULL,9999,1,'AUTHORIZED','当前菜单下所有权限',NULL,'/organ/**',34),(36,NULL,9999,1,'NOTAUTHORIZED','系统组织机构导出',NULL,'/export/organs/xlsx',34),(37,NULL,9999,1,'AUTHORIZED','判断组织机构是否存在',NULL,'/organ/notexists',34),(39,NULL,9999,1,'AUTHORIZED','分页',NULL,'/syslog/page/**',38),(41,NULL,9999,1,'AUTHORIZED','分页查询',NULL,'/wordbook/page/**',40),(42,NULL,9999,1,'AUTHORIZED','存在判断',NULL,'/wordbook/notexists',40),(43,NULL,9999,1,'NOTAUTHORIZED','新增／修改',NULL,'/wordbook/save',40),(44,NULL,9999,1,'NOTAUTHORIZED','删除',NULL,'/wordbook/remove/**',40);
/*!40000 ALTER TABLE `adm_sys_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_menu`
--

DROP TABLE IF EXISTS `adm_sys_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `node_level` int(11) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe4gwtxmnjfmsac2gd5qott1tp` (`parent_id`),
  CONSTRAINT `FKe4gwtxmnjfmsac2gd5qott1tp` FOREIGN KEY (`parent_id`) REFERENCES `adm_sys_menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_menu`
--

LOCK TABLES `adm_sys_menu` WRITE;
/*!40000 ALTER TABLE `adm_sys_menu` DISABLE KEYS */;
INSERT INTO `adm_sys_menu` VALUES (1,NULL,0,1,'{\"iconClassName\":\"icon-home\"}','主页',NULL,'/index',NULL),(2,NULL,9999,1,'{ \"iconClassName\":\"icon-settings\" }','系统管理',NULL,'',NULL),(3,NULL,0,2,'{}','菜单管理',NULL,'/menu/index',2),(12,NULL,1,2,'','用户管理',NULL,'/user/index',2),(21,NULL,2,2,'','角色管理',NULL,'/role/index',2),(34,NULL,3,2,'{}','机构管理',NULL,'/organ/index',2),(38,NULL,4,2,'','日志查询',NULL,'/syslog/index',2),(40,NULL,5,2,'{}','字典管理',NULL,'/wordbook/index',2);
/*!40000 ALTER TABLE `adm_sys_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_organ`
--

DROP TABLE IF EXISTS `adm_sys_organ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_organ` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `flume_ids` varchar(255) DEFAULT NULL,
  `flume_names` varchar(255) DEFAULT NULL,
  `node_level` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKwo6c1bbm94urar3nt2o5m8qr` (`parent_id`),
  CONSTRAINT `FKwo6c1bbm94urar3nt2o5m8qr` FOREIGN KEY (`parent_id`) REFERENCES `adm_sys_organ` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_organ`
--

LOCK TABLES `adm_sys_organ` WRITE;
/*!40000 ALTER TABLE `adm_sys_organ` DISABLE KEYS */;
INSERT INTO `adm_sys_organ` VALUES (46,'','00',NULL,NULL,'',9999,'','','系统组织机构',0,'系统组织机构','',NULL,NULL);
/*!40000 ALTER TABLE `adm_sys_organ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_resource`
--

DROP TABLE IF EXISTS `adm_sys_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `pattern` varchar(255) DEFAULT NULL,
  `permission` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `roleid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK72kb159q4y71cvbfdqudhka3r` (`roleid`),
  CONSTRAINT `FK72kb159q4y71cvbfdqudhka3r` FOREIGN KEY (`roleid`) REFERENCES `adm_sys_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_resource`
--

LOCK TABLES `adm_sys_resource` WRITE;
/*!40000 ALTER TABLE `adm_sys_resource` DISABLE KEYS */;
INSERT INTO `adm_sys_resource` VALUES (47,NULL,1,'/**','user,anyRoles[ADMIN]',NULL,NULL);
/*!40000 ALTER TABLE `adm_sys_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_role`
--

DROP TABLE IF EXISTS `adm_sys_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_role`
--

LOCK TABLES `adm_sys_role` WRITE;
/*!40000 ALTER TABLE `adm_sys_role` DISABLE KEYS */;
INSERT INTO `adm_sys_role` VALUES (45,NULL,'超级管理员',NULL,'ADMIN',NULL);
/*!40000 ALTER TABLE `adm_sys_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_syslog`
--

DROP TABLE IF EXISTS `adm_sys_syslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_syslog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `syslog_module` varchar(255) DEFAULT NULL,
  `syslog_type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_syslog`
--

LOCK TABLES `adm_sys_syslog` WRITE;
/*!40000 ALTER TABLE `adm_sys_syslog` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_sys_syslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_user`
--

DROP TABLE IF EXISTS `adm_sys_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `birthday` varchar(255) DEFAULT NULL,
  `change_pwd_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `empno` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `login_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `real_name` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `organ_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr8e5jlkqgnx9uiqc3xil9iwe2` (`organ_id`),
  CONSTRAINT `FKr8e5jlkqgnx9uiqc3xil9iwe2` FOREIGN KEY (`organ_id`) REFERENCES `adm_sys_organ` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_user`
--

LOCK TABLES `adm_sys_user` WRITE;
/*!40000 ALTER TABLE `adm_sys_user` DISABLE KEYS */;
INSERT INTO `adm_sys_user` VALUES (48,NULL,NULL,NULL,NULL,NULL,NULL,'职员','admin','1f82c942befda29b6ed487a51da199f78fce7f05',NULL,'系统管理员',NULL,'M','NORMAL',NULL,46);
/*!40000 ALTER TABLE `adm_sys_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_userrole`
--

DROP TABLE IF EXISTS `adm_sys_userrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_userrole` (
  `userid` bigint(20) NOT NULL,
  `roleid` bigint(20) NOT NULL,
  PRIMARY KEY (`userid`,`roleid`),
  KEY `FKhapcbsuah9q1d9uaincx811tn` (`roleid`),
  CONSTRAINT `FK9hueia6vocu5d9rjnqxwibf61` FOREIGN KEY (`userid`) REFERENCES `adm_sys_user` (`id`),
  CONSTRAINT `FKhapcbsuah9q1d9uaincx811tn` FOREIGN KEY (`roleid`) REFERENCES `adm_sys_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_userrole`
--

LOCK TABLES `adm_sys_userrole` WRITE;
/*!40000 ALTER TABLE `adm_sys_userrole` DISABLE KEYS */;
INSERT INTO `adm_sys_userrole` VALUES (48,45);
/*!40000 ALTER TABLE `adm_sys_userrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_sys_wordbook`
--

DROP TABLE IF EXISTS `adm_sys_wordbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adm_sys_wordbook` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(30) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `description` varchar(80) DEFAULT NULL,
  `disp_order` int(11) DEFAULT NULL,
  `node_level` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlxa7ojs15dkbovvk3xujtrjao` (`parent_id`),
  CONSTRAINT `FKlxa7ojs15dkbovvk3xujtrjao` FOREIGN KEY (`parent_id`) REFERENCES `adm_sys_wordbook` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_sys_wordbook`
--

LOCK TABLES `adm_sys_wordbook` WRITE;
/*!40000 ALTER TABLE `adm_sys_wordbook` DISABLE KEYS */;
INSERT INTO `adm_sys_wordbook` VALUES (63,'gender',NULL,'性别（0：女，1：男）',1,1,'性别',NULL,NULL),(64,'0',NULL,'女',0,2,'女',NULL,63),(65,'1',NULL,'男',1,2,'男',NULL,63),(69,'idcard-type',NULL,'证件类型',2,1,'证件类型',NULL,NULL),(70,'1',NULL,'身份证',1,2,'身份证',NULL,69),(71,'2',NULL,'军官证',2,2,'军官证',NULL,69),(72,'3',NULL,'护照',3,2,'护照',NULL,69),(77,'job',NULL,'系统用户职务',3,1,'职务',NULL,NULL),(78,'董事长',NULL,'董事长',1,2,'董事长',NULL,77),(79,'总经理',NULL,'总经理',2,2,'总经理',NULL,77),(81,'财务总监',NULL,'财务总监',4,2,'财务总监',NULL,77),(85,'职员',NULL,'职员',8,2,'职员',NULL,77),(86,'area',NULL,'',4,1,'区域',NULL,NULL),(88,'00',NULL,'北京',1,2,'北京',NULL,86),(89,'01',NULL,'上海',2,2,'上海',NULL,86);
/*!40000 ALTER TABLE `adm_sys_wordbook` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-28 13:42:10
