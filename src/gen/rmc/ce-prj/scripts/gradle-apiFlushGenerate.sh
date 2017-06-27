#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../../etc/setenv.sh

cd "$SCRDIR/.."

gradle -p "$SCRDIR/../../../../apis/ce-prj-api" -Dfile.encoding=UTF-8 apiMetadata
gradle -p "$SCRDIR/../../../../boot/rmc" -Dfile.encoding=UTF-8 -PprojectName=ce -PapiJson=$SCRDIR/../../../../apis/ce-prj-api/build/api.json -Ptarget=$SCRDIR/.. apiFlushGenerate
