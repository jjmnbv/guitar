@echo off

call "%~dp0..\..\..\..\etc\setenv"

title cb-app
set GRADLE_OPTS=-Dspring.profiles.active="development"
set GRADLE_USER_HOME=%UserProfile%\.gradle-xfjr-mgt
 
gradle -p "%~dp0.." appRunDebug
