@echo off

call "%~dp0..\..\..\..\etc\setenv"

set GRADLE_USER_HOME=%UserProfile%\.gradle-xfjr-mgt

gradle -p "%~dp0.." databaseComments
