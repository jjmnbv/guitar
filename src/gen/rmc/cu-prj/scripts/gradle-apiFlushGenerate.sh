#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../apis/cu-prj-api" -Dfile.encoding=UTF-8 apiMetadata
gradle -p "$SCRDIR/../../../../boot/rmc" -Dfile.encoding=UTF-8 -PprojectName=cu -PapiJson=$SCRDIR/../../../../apis/cu-prj-api/build/api.json -Ptarget=$SCRDIR/.. apiFlushGenerate