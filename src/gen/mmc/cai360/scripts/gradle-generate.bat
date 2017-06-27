@echo off

call "%~dp0..\..\..\..\..\etc\setenv"

cd /d "%~dp0.."

gradle -p "%~dp0..\..\..\..\boot\mmc" -Dfile.encoding=UTF-8 -Pmetaxlsx=%~dp0..\..\..\..\apps\cai360-app\MESSAGES.xlsx -Ptarget=%~dp0.. -PjavaPackageName=net.zkbc.app -PapiProjectName=cai360-app-api -PappProjectName=cai360-app generate
