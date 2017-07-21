#!bin/sh

#删除生成的代码
#rm -rf /Users/xukaiqiang/Documents/workspace/guitar/src/gen/dbre/cb-prj/src /Users/xukaiqiang/Documents/workspace/guitar/src/gen/dbre/cb-prj/www
#生成代码
#sh /Users/xukaiqiang/Documents/workspace/guitar/src/gen/dbre/cb-prj/scripts/gradle-generater.sh


#删除后端
rm -rf  /Users/xukaiqiang/Documents/workspace/guitar/src/apps/guitar-prj/src/main/java/com/xukaiqiang/gb/*
rm -rf /Users/xukaiqiang/Documents/workspace/guitar/src/apps/guitar-prj/src/metamodel/*
#复制后端
cp -R /Users/xukaiqiang/Documents/workspace/guitar/src/gen/dbre/cb-prj/src/main/java/com/xukaiqiang/gb/*  /Users/xukaiqiang/Documents/workspace/guitar/src/apps/guitar-prj/src/main/java/com/xukaiqiang/gb/
#删除前端
rm -rf /Users/xukaiqiang/Documents/workspace/guitar/src/www/gb/*
#复制前端
cp -R /Users/xukaiqiang/Documents/workspace/guitar/src/gen/dbre/cb-prj/www/gb/*  /Users/xukaiqiang/Documents/workspace/guitar/src/www/gb/



#构建后端
sh  /Users/xukaiqiang/Documents/workspace/guitar/src/apps/scripts/init.sh
sh  /Users/xukaiqiang/Documents/workspace/guitar/src/apps/scripts/project.sh
sh  /Users/xukaiqiang/Documents/workspace/guitar/src/apps/scripts/eclipse.sh

#构建前端
cd /Users/xukaiqiang/Documents/workspace/guitar/src/www/gb/
cnpm install
#创建package.json
#cnpm init