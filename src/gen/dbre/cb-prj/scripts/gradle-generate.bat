@echo off

call "%~dp0..\..\..\..\..\etc\setenv"

cd /d "%~dp0.."

gradle -p "%~dp0..\..\..\..\boot\dbre" -Dfile.encoding=UTF-8 -PjdbcProperties=%~dp0jdbc.properties -PjavaTarget=%~dp0.. -PwwwTarget=%~dp0../www generate
