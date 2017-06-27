@echo off

call "%~dp0..\..\..\etc\setenv"

call gradle -p "%~dp0.." clean cleanEclipse cleanWorkspace
