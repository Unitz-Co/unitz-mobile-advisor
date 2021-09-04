#! /bin/bash

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
source ../../../config/ws-scripts/sm/num.sh

yarn clean:android && yarn clean:ios && yarn clean
# config
yarn config:ios:prod

# install
cd ios
# pod install

# build
fastlane beta
cd ..
