#!/bin/sh

JAVA_HOME=`/usr/libexec/java_home -v 1.8`

GRADLE_HOME=/Users/xukaiqiang/software/gradle-3.1
ECLIPSE_HOME=/Applications/Eclipse.app/Contents/MacOS

PATH=$JAVA_HOME/bin:$GRADLE_HOME/bin:$PATH

export JAVA_HOME GROOVY_HOME GRADLE_HOME ECLIPSE_HOME
