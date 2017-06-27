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
  - ce-prj *结算系统*
  - cl-prj *规则引擎*
  - cr-prj *风控系统*
  - cs-prj *业务支撑*
  - cu-prj *统一用户*
  - cb-prj-api *业务系统对外接口*
  - cc-prj-api *核心系统对外接口*
  - cd-prj-api *报文系统对外接口*
  - ce-prj-api *结算系统对外接口*
  - cl-prj-api *规则引擎对外接口*
  - cr-prj-api *风控系统对外接口*
  - cs-prj-api *业务支撑对外接口*
  - cu-prj-api *统一用户对外接口*
- base
  - shared *全公司共享项目*
  - admin *系统管理样例项目*
- boot
  - mmc *报文自动生成工具*

## 3. RPC

- 安装Thrift compiler for Mac OS X

      brew link makedepend
      brew install thrift

- 安装Thrift compiler for Windows

  - 下载http://www.apache.org/dyn/closer.cgi?path=/thrift/0.9.3/thrift-0.9.3.exe存储为thrift.exe
  - setenv.bat中设置THRIFT_HOME为thrift.exe存储路径


