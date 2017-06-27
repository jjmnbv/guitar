#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../apis/cr-prj-api" -Dfile.encoding=UTF-8 apiMetadata
gradle -p "$SCRDIR/../../../../boot/rmc" -Dfile.encoding=UTF-8 -PprojectName=cr -PapiJson=$SCRDIR/../../../../apis/cr-prj-api/build/api.json -Ptarget=$SCRDIR/.. apiFlushGenerate
