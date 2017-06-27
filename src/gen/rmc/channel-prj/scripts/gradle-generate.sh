#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../boot/rmc" -Dfile.encoding=UTF-8 -PprojectName=channel -Pmetaxlsx=$SCRDIR/../../../../apps/channel-prj/doc/system -Ptarget=$SCRDIR/.. generate
