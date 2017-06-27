#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../etc/setenv.sh

gradle -p "$SCRDIR"/.. clean cleanEclipse cleanWorkspace
gradle -p "$SCRDIR"/.. eclipse

cd "$SCRDIR"/..
export PRGDIR=`pwd`
cp -rf "$PRGDIR"/../../conf/eclipse/.metadata "$PRGDIR"/
"$ECLIPSE_HOME"/eclipse -nosplash -data "$PRGDIR" -vm "$JAVA_HOME"/bin/java -application org.eclipse.ant.core.antRunner -buildfile $SCRDIR/eclipse.xml
