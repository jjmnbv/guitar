#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../boot/wmc" -Dfile.encoding=UTF-8 -PmoduleName=ce -Pmetaxlsx=$SCRDIR/../../../../apps/ce-prj/doc/www -Ptarget=$SCRDIR/.. generate
