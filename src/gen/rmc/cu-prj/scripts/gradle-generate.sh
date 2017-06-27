#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../boot/rmc" -Dfile.encoding=UTF-8 -PprojectName=cu -Pmetaxlsx=$SCRDIR/../../../../apps/cu-prj/doc/system -Ptarget=$SCRDIR/.. generate