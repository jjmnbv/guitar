@echo off

call "%~dp0..\..\..\..\etc\setenv"

title helloworld-app
set GRADLE_OPTS=-Dspring.profiles.active="development"
set GRADLE_USER_HOME=%UserProfile%\.gradle-helloworld-app
 
gradle -p "%~dp0.." appRunDebug 2>&1 | "%~dp0..\..\scripts\tee" "%~dp0stdout.log"
