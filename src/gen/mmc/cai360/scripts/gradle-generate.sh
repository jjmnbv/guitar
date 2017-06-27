#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../boot/mmc" -Dfile.encoding=UTF-8 -Pmetaxlsx=$SCRDIR/../../../../apps/cai360-app/MESSAGES.xlsx -Ptarget=$SCRDIR/.. -PjavaPackageName=net.zkbc.app -PapiProjectName=cai360-app-api -PappProjectName=cai360-app generate
