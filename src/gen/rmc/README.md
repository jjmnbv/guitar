# 消费金融远程调用工程生成（以cs为例）

## 1. 接口文件生成工程

- 在jee/src/apps/cs-prj/doc/system 下编写 *.xlsx(业务支撑系统对外接口.xlsx) 接口文件
- 执行jee/src/gen/rmc/cs-prj/scripts/gradle-generate
- 执行完上一步在jee/src/gen/rmc/cs-prj 下会生成远程协议相关工程（cs-prj-api、cs-prj-http-skeleton、cs-prj-http-stub、cs-prj-thrift-gen、cs-prj-thrift-skeleton、cs-prj-thrift-stub）
- 将生成的工程代码对应拷贝到jee/src/apis 中

## 2. 根据api生成工程

- 修改jee/src/apis/cs-prj-api 工程下的代码
- 执行jee/src/gen/rmc/cs-prj/scripts/gradle-apiFlushGenerate
- 执行完上一步在jee/src/gen/rmc/cs-prj 下会生成远程协议相关工程（cs-prj-http-skeleton、cs-prj-http-stub、cs-prj-thrift-gen、cs-prj-thrift-skeleton、cs-prj-thrift-stub）
- 将生成的工程代码对应拷贝到jee/src/apis 中

