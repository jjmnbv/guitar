# 关于本文档
本文档将不定期更新，添加新的注意事项，更新时注意本文档的更新，并按本文档说明处理相关问题。

# 开发部署注意事项

1. 所有后端开发人员更新代码要从jee目录开始，保证能更新到全部最新代码。前端开发人员则只需更新jee/src/www目录。
2. 更新后遇到非自己涉及的代码冲突，先svn revert本地不涉及自己修改的目录，再次更新。涉及自己修改的需要手动解决冲突。如果仍然报错，重新执行jee/src/apps/init。
3. **/metadata目录下代码为eclipse自动生成，如有报错可以随时revert后重新更新，每个人注意及时提交自己项目的metadata。
4. 后端url地址都要以项目名称开头（首屏数据以`scrpit/cs/`开头），如：`cs/`
5. 前端工程代码要在各自的工程名文件下。以cs为例：如页面在 `src/views/pages/cs/`，css在`src/static/app/1.0.0/css/cs/`，img在`src/static/app/1.0.0/img/cs/`，js在src/static/app/1.0.0/js/cs/，首屏js在`src/script/cs/`（后台提供首屏数据地址也要对应这样：`script/cs/**`），mock在`mock/cs/`
6. 需要处理显示的字段信息应由后端直接处理（如日期、金额格式）
7. 系统之间的接口调用工程用模版生成（`*-prj-api`、`*-prj-http-skeleton`、`*-prj-http-stub`、`*-prj-thrift-gen`、`*-prj-thrift-skeleton`、`*-prj-thrift-stub`），不要手写
8. 后端把前端需要的首屏数据jsp都要生成
9. net.zkbc.shared.protocol.OutputMessage类及其继承类 在调用getPayload()方法并强转成其他类的时候，在这之前要加入：`if (!response.isSuccess()) { return response; }`
10. 后端开发注意：springmvc校验问题解决 在Controller的方法中，加了 `@Valid` 注解的参数后面要立即跟着个 `BindingResult` 类型参数，用于接收校验结果
11. 除统一用户外其他系统添加两个配置（）
-      a：message.subscribes:ACCESSCACHE,MENUCACHE,USERCACHE,DICTIONARYCACHE|http://localhost:8080/message/subscribe
        其中`http://localhost:8080`要对应部署环境的 业务支撑地址
       b：message.default.subscribes.url:http://localhost:7000/message/subscribe
        其中`http://localhost:7000`要对应部署环境的 统一用户地址

12. 系统间接口的message文件（`messages.properties、messages_zh_CN.properties、messages_en_US.properties`）位置调整。 如业务支撑系统中cs-prj-api中的调整:
-       a：位置调整src/main/resources/下的 `net.zkbc.cs.api` 包中
-       b：在application.properties中添加配置 `shared.message.basenames=classpath:messages,classpath:net/zkbc/cs/api/messages`

13. 除统一用户外其他系统添加配置：
-       a：oauth.refreshTokenUrl=http://localhost:7000/oauth2/refresh_token
         其中`http://localhost:7000`要对应部署环境的 统一用户地址

14. 数据库脚步规范：
-       a：scripts/postgresql/V1__init_database.sql ：创建zkbc用户语句，并把当前系统 schema 授权给 zkbc 用户
        b：scripts/postgresql/V2__init_domains.sql  ：创建 domains 语句
        c：scripts/postgresql/V3__init_tables.sql   ：创建当前系统所有 表结构（注意，建表前要判断是否存在，存在要删除）
        d：scripts/postgresql/V4__init_record.sql   ：初始化数据新建语句（新建之前注意清除原来数据）
        e：从 `V5__` 开始，修改了哪张表就重建那张表，注意建表前要判断是否存在，存在要删除
        注意：从 `V3__` 开始，在结束的时候要加上一下三行语句：(`xfjr_cs` 注意改为各自系统自己的schame)
          GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA xfjr_cs TO zkbc;
          GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA xfjr_cs TO zkbc;
          GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA xfjr_cs TO zkbc;
