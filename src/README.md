# 消费金融平台前端

## 1. 项目结构

- 目录结构

      jee
        ├─conf
        ├─doc
        ├─etc
        ├─lib
        └─src
          ├─apps
          ├─base
          ├─boot
          └─www
            ├─admin
            ├─cb-prj
            ├─cc-prj
            ├─cd-prj
            ├─cl-prj
            ├─cr-prj
            ├─cs-prj
            ├─cu-prj
            └─pub

- 项目简介

  - admin *系统管理样例项目*
  - cb-prj *业务系统*
  - cc-prj *核心系统*
  - cd-prj *报文系统*
  - cl-prj *规则引擎*
  - cr-prj *风控系统*
  - cs-prj *业务支撑*
  - cu-prj *统一用户*
  - pub *公共静态文件*

## 2. 快速开始

- Mac OS X安装Node.js

      # ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      brew install npm

- Windows安装Node.js

  - 32位系统下载 https://nodejs.org/dist/v6.2.0/node-v6.2.0-x86.msi
  - 64位系统下载 https://nodejs.org/dist/v6.2.0/node-v6.2.0-x64.msi
  - 双击安装

- 全局初始化

      npm install cnpm -g --registry=https://registry.npm.taobao.org
      cnpm install gulp -g

- 项目初始化(以admin为例)

      # 假定当前目录为jee
      cd src/www/admin
      # cnpm init
      # cnpm install --save-dev browser-sync
      # cnpm install --save-dev gulp
      # cnpm install --save-dev gulp-compile-handlebars
      # cnpm install --save-dev handlebars-layouts
      # 根据package.json安装依赖库
      cnpm install

- 构建项目

      gulp build

- 启动项目
      gulp bs

- 启动项目(代理模式)

      gulp bs-proxy