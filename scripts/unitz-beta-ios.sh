#! /bin/bash

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
# source ../config/ws-scripts/sm/num.sh
source ../../../config/ws-scripts/sm/num.sh

# cd packages/unitz-mobile

# config
yarn config:ios:prod
# yarn install
# yarn nuke:modules

# install
cd ios
# pod install

# build
fastlane beta
cd ..
# release

#cleanup
# cd $PWD
# rm -Rf ./ws
# rm -Rf ./config
