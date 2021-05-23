fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## Android
### android test
```
fastlane android test
```
Runs all the tests
### android stage
```
fastlane android stage
```
Submit a new Beta Build to Firebase distribution
### android beta
```
fastlane android beta
```
Submit a new Beta Build to Crashlytics Beta
### android release
```
fastlane android release
```
Deploy a new version to the Google Play
### android update_appicon
```
fastlane android update_appicon
```
Update appicon
### android update_splash
```
fastlane android update_splash
```
Update splash

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
