#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../boot/dbre" -Dfile.encoding=UTF-8 -PjdbcProperties=$SCRDIR/jdbc.properties -PjavaTarget=$SCRDIR/.. -PwwwTarget=$SCRDIR/../www generate
