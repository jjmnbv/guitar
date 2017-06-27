# 数据库反向工程(DBRE)

## 使用步骤

- 在元数据配置表（dbre_metadata）中配置需要生成的相关表及其字段
- 修改boot/dbre/gradle.properties配置中的数据库链接信息
- 执行boot/dbre-gen/scripts/gradle-generate脚本生成代码
- 将生成在boot/dbre-gen/src下的java相关文件拷贝到自己的工程（注意公共文件合并）
- 将生成在boot/dbre-gen/www下的页面相关文件拷贝到自己的页面文件夹中（注意公共文件合并）


## dbre_metadata 元数据配置表详情

1. 元数据配置表建表语句

```
CREATE TABLE `dbre_metadata` (
  `db_name` varchar(20) DEFAULT '' COMMENT '数据库属性',
  `java_name` varchar(20) NOT NULL DEFAULT '' COMMENT 'java属性',
  `parent_name` varchar(20) DEFAULT '' COMMENT '父级属性',
  `data_type` varchar(20) NOT NULL DEFAULT '' COMMENT '类型(table|field)',
  `field_type` varchar(20) DEFAULT NULL COMMENT '字段类型',
  `ptype` varchar(20) DEFAULT NULL COMMENT '关联类型参数',
  `join_type` varchar(20) DEFAULT NULL COMMENT '关联关系',
  `join_module` varchar(20) DEFAULT NULL COMMENT '关联模块',
  `mapped_by` varchar(20) DEFAULT NULL COMMENT 'otm关联维护方',
  `join_table` varchar(20) DEFAULT NULL COMMENT 'mtm关联表',
  `join_column` varchar(20) DEFAULT NULL COMMENT 'mtm主键1',
  `inverse_join_column` varchar(20) DEFAULT NULL COMMENT 'mtm主键2',
  `remarks` varchar(20) DEFAULT NULL COMMENT '描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

2. 元数据配置表字段描述

- 关键字段

      db_name、java_name、parent_name、data_type

- db_name

      数据库表名 或 字段名 （ OneToMany | ManyToMany 是可以为空 ）

- java_name

      java实体类名 或 字段名

- parent_name

      db_name 为数据表名时，parent_name 是模块名称
      db_name 为数据字段时，parent_name 是数据表名

- data_type

      该条记录类型：
        table：数据表
        field：数据字段

- field_type

      字段类型，关联字段用

- ptype

      关联类型参数，关联字段用

- join_type

      关联关系，关联字段用 (OneToOne、ManyToOne、OneToMany、ManyToMany)

- join_module

      关联模块，关联字段用

- mapped_by

      关联字段 OneToMany 关联关系的维护方

- join_table

      ManyToMany 关联关系 中间表

- join_column

      ManyToMany 关联关系 关联本表字段

- inverse_join_column

      ManyToMany 关联关系 关联他表字段

- remarks

      描述



