#! /bin/bash

PWD=$(pwd)

# clone repo
#./devops-app/scripts/cloneprod-repo.sh

#force to stop metro
kill -9 $(lsof -t -i:8081)

# cd ws
# yarn init:sm
# yarn checkout:sm
# yarn pull:sm

# builder number tag
# source ../config/ws-scripts/sm/num.sh
source ../../../config/ws-scripts/sm/num.sh

# cd packages/unitz-mobile

# config
# yarn config:ios
yarn config:envprod
# yarn install
# yarn nuke:modules

# install
cd ios
# pod install

# build
fastlane firebase
cd ..
# release

# push tag commit
# cd ../..
# ../config/ws-scripts/sm/tag.sh beta/n_${BUILD_NUMBER_CUR}

# git push origin master --tags

#cleanup
# cd $PWD
# rm -Rf ./ws
# rm -Rf ./config
