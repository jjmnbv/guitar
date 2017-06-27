#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../etc/setenv.sh

gradle -p "$SCRDIR/.." clean cleanEclipse cleanWorkspace
