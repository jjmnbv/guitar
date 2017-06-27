@echo off

call "%~dp0..\..\..\etc\setenv"

call gradle -p "%~dp0.." clean cleanEclipse cleanWorkspace
call gradle -p "%~dp0.." eclipse

cd /d "%~dp0.."
set PRGDIR=%cd%
xcopy /s/h "%PRGDIR%\..\..\conf\eclipse\.metadata" "%PRGDIR%\.metadata\"
"%ECLIPSE_HOME%/eclipse.exe" -nosplash -data "%cd%" -vm "%JAVA_HOME%/bin/javaw.exe" -application org.eclipse.ant.core.antRunner -buildfile "%~dp0eclipse.xml"
