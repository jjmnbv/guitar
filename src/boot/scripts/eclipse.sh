#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../etc/setenv.sh

cd "$SCRDIR/.."
export PRGDIR=`pwd`
"$ECLIPSE_HOME"/eclipse -data "$PRGDIR" -vm "$JAVA_HOME"/bin/java &
