#! /bin/bash

PWD=$(pwd)

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
source ../../../config/ws-scripts/sm/num.sh

yarn clean:android && yarn clean:ios && yarn clean
# config
yarn config:android

# build
yarn build:android:stage

# release
yarn dist:android:fib --app $(node -p -e "require('./.env.json').FIREBASE_ANDROID_APP_ID") --groups testers
yarn dist:android:apc --app $(node -p -e "require('./.env.json').APPCENTER_ANDROID_APP_ID") --group testers