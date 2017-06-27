# 数据库反向工程(DBRE)

## dbre-gen工程

  - cb-prj *业务系统*
  - cc-prj *核心系统*
  - cd-prj *报文系统*
  - ce-prj *结算系统*
  - cl-prj *规则引擎*
  - cr-prj *风控系统*
  - cs-prj *业务支撑*
  - cu-prj *统一用户*

## *-prj/scripts 目录下文件
  - dbre_metadata.sql 初版数据库配置
  - gradle-generate(.sh/.bat) 生成代码脚本
  - jdbc.properties 数据库链接配置(jdbc.* 为数据库表库的链接配置，metadata.* 为元数据配置表的库链接配置)

## 使用步骤

- 在元数据配置表（dbre_metadata）中配置需要生成的相关表及其字段
- 修改*-prj/script/jdbc.properties配置中的数据库链接信息
- 执行*-prj/scripts/gradle-generate脚本生成代码
- 将生成在*-prj/src下的java相关文件拷贝到自己的工程（注意公共文件合并）
- 将生成在*-prj/www下的页面相关文件拷贝到自己的页面文件夹中（注意公共文件合并）
