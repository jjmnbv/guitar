@echo off

call "%~dp0..\..\..\..\etc\setenv"

gradle -p "%~dp0.." -Dfile.encoding=UTF-8 clean war 2>&1 | "%~dp0..\..\scripts\tee" "%~dp0stdout.log"
