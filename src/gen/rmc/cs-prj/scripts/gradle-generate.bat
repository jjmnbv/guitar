@echo off

call "%~dp0..\..\..\..\..\etc\setenv"

cd /d "%~dp0.."

gradle -p "%~dp0..\..\..\..\boot\rmc" -Dfile.encoding=UTF-8 -PprojectName=cs -Pmetaxlsx=%~dp0..\..\..\..\apps\cs-prj\doc\system -Ptarget=%~dp0.. generate