# 系统管理示例项目

## 1. MySQL版快速开始

- 安装MySQL
- 启动MySQL
- 配置jee/etc/setenv
- 执行jee/src/apps/scripts/init
- 执行jee/src/apps/scripts/eclipse
- 配置jee/src/base/admin/src/main/resources/application.development.properties中jdbc.flyway.*，保证root用户可正确连接MySQL
- 执行jee/src/base/admin/scripts/gradle-flywayMigrate 初始化数据库
- 执行jee/src/base/admin/scripts/gradle-run 启动应用
- 浏览器访问http://localhost:8080，使用admin/888888登录应用

## 2. PostgreSQL版快速开始

- 安装PostgreSQL（以下演示Mac下命令）

      brew install postgresql -v

- 启动PostgreSQL（以下演示Mac下命令）

      brew services start postgresql

- 执行建库脚本

      psql postgres < jee/src/base/admin/scripts/postgresql/postgresql.sql

- 配置jee/etc/setenv
- 执行jee/src/apps/scripts/init
- 执行jee/src/apps/scripts/eclipse
- 配置jee/src/base/admin/src/main/resources/application.development.properties中jdbc.flyway.*，保证xfjr用户可正确连接xfjr库
- 执行jee/src/base/admin/scripts/gradle-flywayMigrate 初始化数据库
- 执行jee/src/base/admin/scripts/gradle-run 启动应用
- 浏览器访问http://localhost:8080，使用admin/888888登录应用
