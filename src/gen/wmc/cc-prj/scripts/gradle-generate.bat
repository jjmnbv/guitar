@echo off

call "%~dp0..\..\..\..\..\etc\setenv"

cd /d "%~dp0.."

gradle -p "%~dp0..\..\..\..\boot\wmc" -Dfile.encoding=UTF-8 -PmoduleName=cc -Pmetaxlsx=%~dp0..\..\..\..\apps\cc-prj\doc\www -Ptarget=%~dp0.. generate
