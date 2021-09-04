#! /bin/bash

PWD=$(pwd)

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
source ../../../config/ws-scripts/sm/num.sh

yarn clean:android && yarn clean:ios && yarn clean
# config
yarn config:android:prod
# build
yarn build:android:beta
# release
