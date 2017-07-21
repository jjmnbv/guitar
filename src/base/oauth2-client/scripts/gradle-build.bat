@echo off

call "%~dp0..\..\..\..\etc\setenv"

gradle -p "%~dp0.." -Dfile.encoding=UTF-8 clean war
