#!/bin/sh

SCRDIR=$(cd `dirname $0`; pwd)

. "$SCRDIR"/../../../../etc/setenv.sh

GRADLE_USER_HOME=~/.gradle-xfjr-mgt

export GRADLE_OPTS GRADLE_USER_HOME
gradle -p "$SCRDIR/.." databaseComments
