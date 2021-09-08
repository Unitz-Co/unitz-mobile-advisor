#! /bin/bash

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
# source ../config/ws-scripts/sm/num.sh
source ../../../config/ws-scripts/sm/num.sh

# config
yarn clean
yarn config:android

sed -i '' -e '/^JSBUNDLE_NUMBER=/s/=.*/='$BUILD_NUMBER_CUR'/g' env/US.env
appcenter codepush release-react -t $(node -p -e "require('./package.json').version") -a $(node -p -e "require('./.env.json').APPCENTER_ANDROID_APP_ID") -d Staging --description "${BUILD_NUMBER_CUR}"

