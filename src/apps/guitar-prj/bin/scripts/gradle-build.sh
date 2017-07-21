#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../etc/setenv.sh

gradle -p "$SCRDIR/.." -Dfile.encoding=UTF-8 clean war
