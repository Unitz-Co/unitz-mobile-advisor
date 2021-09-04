#! /bin/bash

PWD=$(pwd)

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
source ../../../config/ws-scripts/sm/num.sh

yarn clean:android && yarn clean:ios && yarn clean
# config
yarn config:ios

# build
yarn build:ios:stage

# release
yarn dist:ios:fib --app $(node -p -e "require('./.env.json').FIREBASE_IOS_APP_ID") --groups testers
yarn dist:ios:apc --app $(node -p -e "require('./.env.json').APPCENTER_IOS_APP_ID") --group testers

