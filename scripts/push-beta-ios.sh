#! /bin/bash

#force to stop metro
kill -9 $(lsof -t -i:8081)

# builder number tag
source ../../../config/ws-scripts/sm/num.sh

# config
yarn config:ios:prod

sed -i '' -e '/^JSBUNDLE_NUMBER=/s/=.*/='$BUILD_NUMBER_CUR'/g' env/US.env
appcenter codepush release-react -t $(node -p -e "require('./package.json').version") -a $(node -p -e "require('./.env.json').APPCENTER_IOS_APP_ID") -d Production --description "${BUILD_NUMBER_CUR}"

