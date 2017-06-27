#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../boot/rmc" -Dfile.encoding=UTF-8 -PprojectName=cd -Pmetaxlsx=$SCRDIR/../../../../apps/cd-prj/doc/system -Ptarget=$SCRDIR/.. generate
