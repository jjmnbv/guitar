@echo off

call "%~dp0..\..\..\..\etc\setenv"

cd /d "%~dp0.."
gradle -Dfile.encoding=UTF-8 jar
