@echo off

call "%~dp0..\..\..\..\etc\setenv"

cd /d "%~dp0.."

set GRADLE_OPTS=-Dfile.encoding=UTF-8

gradle generate
