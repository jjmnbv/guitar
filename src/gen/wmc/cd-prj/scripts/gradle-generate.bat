@echo off

call "%~dp0..\..\..\..\..\etc\setenv"

cd /d "%~dp0.."

gradle -p "%~dp0..\..\..\..\boot\wmc" -Dfile.encoding=UTF-8 -PmoduleName=cd -Pmetaxlsx=%~dp0..\..\..\..\apps\cd-prj\doc\www -Ptarget=%~dp0.. generate
