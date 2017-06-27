# 消费金融平台（postgresql版）

## 1. 快速开始

- 配置jee/etc/setenv
- 执行jee/src/apps/scripts/init
- 执行jee/src/apps/scripts/eclipse

## 2. 目录结构

- apps
  - cb-prj *业务系统*
  - cc-prj *核心系统*
  - cd-prj *报文系统*
  - cl-prj *规则引擎*
  - cr-prj *风控系统*
  - cs-prj *业务支撑*
  - ce-prj *结算系统*
  - cu-prj *统一用户*
  - cb-prj-api *业务系统对外接口*
  - cc-prj-api *核心系统对外接口*
  - cd-prj-api *报文系统对外接口*
  - cl-prj-api *规则引擎对外接口*
  - cr-prj-api *风控系统对外接口*
  - cs-prj-api *业务支撑对外接口*
  - ce-prj-api *结算系统对外接口*
  - cu-prj-api *统一用户对外接口*
- base
  - shared *全公司共享项目*
  - admin *系统管理样例项目*
- boot
  - mmc *报文自动生成工具*

## 3.postgresql基本使用

### 3.1 让他人可以访问自己的库

```
postgresql默认情况下，远程访问不能成功，如果需要允许远程访问，需要修改两个配置文件，说明如下：

1.postgresql.conf
将该文件中的listen_addresses项值设定为“*”，在9.0 Windows版中，该项配置已经是“*”无需修改。

2.pg_hba.conf
在该配置文件的最后一行下添加以下配置
host    all    all    0.0.0.0/0         password

如果不希望允许所有IP远程访问，则可以将上述配置项中的0.0.0.0设定为特定的IP值，如下
host    all    all    172.168.0.0/16    password
```

### 3.2导出数据库(pg_dump)

```
pg_dump -h192.168.2.235 --column-inserts -U xfjr -t cs_* > ~/xfjr_cs.sql
-h, --host=主机名        数据库服务器的主机名或套接字目录
-U, --username=名字      以指定的数据库用户联接
-t, --t=导出表名          多个可以用英文逗号隔开，也可以用like的方式，如上
> ~/xfjr_cs.sql,        重定向输出到某个文件当中

可以使用 `pg_dump --help` 命定查看帮助
```

