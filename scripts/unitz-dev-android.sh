#! /bin/bash

PWD=$(pwd)

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
source ../../../config/ws-scripts/sm/num.sh

yarn config:android

# build
yarn build:android:stage
