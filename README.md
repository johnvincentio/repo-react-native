# React Native

[Udemy React Native](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/t/lecture/5738524?start=0)

[React Native](http://facebook.github.io/react-native)

[Awesome React Native](http://www.awesome-react-native.com/)

[Getting Started](http://facebook.github.io/react-native/docs/getting-started)

[Course Github Repo](https://github.com/StephenGrider/ReactNativeReduxCasts)

[Troubleshooting React Native Installs](https://rallycoding.com/blog/troubleshooting-react-native-startup/)

# Install Dependencies

## XCode

* `Cmd space` and enter appStore
* Search for `Xcode`
* Install

## Homebrew

[Homebrew](https://brew.sh/)

For details, please see 
[Basic Homebrew]({{ site.url }}/mac/basic-brew/)

## Node

For details, please see 
[Basic Node]({{ site.url }}/mac/basic-node/)

## Watchman

```
brew install watchman
```

Error

```
Error: Permission denied @ dir_s_mkdir - /usr/local/Frameworks
```

To fix

```
sudo mkdir /usr/local/Frameworks
sudo chown $(whoami):admin /usr/local/Frameworks  
```

Warning

```
Warning: Some installed formulae are missing dependencies.
You should `brew install` the missing dependencies:
  brew install adns gettext gmp gnutls libassuan libffi libgcrypt libgpg-error libksba libtasn1 libunistring libusb libyaml lua nettle npth p11-kit perl pinentry ruby unbound
```

```
brew install adns gettext gmp gnutls libassuan libffi libgcrypt libgpg-error libksba libtasn1 libunistring libusb libyaml lua nettle npth p11-kit perl pinentry ruby unbound
```

Check for any other problems

```
brew doctor
```

## Android development environment

First cleaned out the previous environment, 
[see details](https://stackoverflow.com/questions/17625622/how-to-completely-uninstall-android-studio-on-mac)

[Android Developers](https://developer.android.com/)

[Download AndroidStudio](https://developer.android.com/studio/index.html)

* Download Android Studio
* Install the package

* Execute Android Studio.app
* Do not import settings

* Install type: Custom

Required

* Android SDK
* Android SDK Platform
* Performance (Intel ® HAXM) (See here for AMD)
* Android Virtual Device

* Next>
* Next>
* Finish

### Install the Android SDK

For details, see [the doc](http://facebook.github.io/react-native/docs/getting-started)

From Android Studio "Welcome to Android Studio"

* Configure, SDK Manager

* SDK Platforms
	* Show Package Details

For Android 9.0 (Pie), check

* Android SDK Platform 28
* Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
 
Check the doc for the correct versions.

### Tablet

* Settings, About
* Touch screen 7 times
* Set debugging on
* Ensure connected

```
adb devices
```

should show the device.

May need `adb kill-server` and try again.

## React Native CLI

```
sudo npm install -g react-native-cli
```

# Create Workspace

Create a workspace that is configured for Visual Studio Code, Eslint, Airbnb, Prettier

```
cd /Users/jv/Desktop/MyDevelopment/github/repo-react-native

mkdir workspace
cd workspace

create-app react-native-workspace
```

# Create a New Application

Create projects folder in the workspace

```
cd /Users/jv/Desktop/MyDevelopment/github/repo-react-native/workspace/

mkdir projects
cd projects
```

and create a react native project within the projects folder

```
react-native init albums
```

Note, this failed and I had to resort to an earlier version

```
react-native init albums --version "0.59.1"
```

## Run iOS

Instructions are

```
    • cd /Users/jv/Desktop/MyDevelopment/github/repo-react-native/projects/albums && react-native run-ios
    - or -
    • Open ios/albums.xcodeproj in Xcode
    • Hit the Run button
```

What I did

```
cd albums

react-native run-ios
```

This initially failed. I had to re-install Xcode.

Eventually this produced the Simulator.

## Android Studio

* Start Android Studio
* Open existing Project
	* `workspace/projects/albums/android`

Android Studio Opens with the project.

* Tools, AVD Manager
* Create Virtual Device
	* `Nexus 10 API 28`
	* Click the Green button (to the right)
	* Starts the emulator
	* App appears in the emulator

Changed some text in the app and saved.

* Click on the emulator.
* Double tap R on Mac keyboard to reload.

* Click on the emulator.
* Cmd M on Mac keyboard to load the menu

## Run Android

Ensure the tablet is connected.

```
cd albums

react-native run-android
```

and the application appears on the tablet.



## Visual Studio Code

```
The Java extension pack is recommended for this file type
```

# Basic App

`index.js`

```
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

`app.json`

```
{
  "name": "hello",
  "displayName": "hello"
}
```

`App.js`

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
```

# Errors

```
Error: Unable to resolve module `./index`
```

Solution

```
react-native start --reset-cache
```

```
Error: Unable to resolve module `react-native-gesture-handler`

  1. Clear watchman watches: `watchman watch-del-all`.
  2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
  3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
  4. Remove haste cache: `rm -rf /tmp/haste-map-react-native-packager-*`.
```

Solution

```
watchman watch-del-all
rm -rf node_modules && npm install
rm -rf /tmp/metro-bundler-cache-*
rm -rf /tmp/haste-map-react-native-packager-*

npm start -- --reset-cache
```

Problem

```
Application <app> has not been registered
```

MetroBundler is probably still running on another application.

```
lsof -i :8081

kill -9 <pid>

react-native run-android
```


## React Navigation

Use project `test1`

```
npm install --save react-navigation
npm install --save react-native-gesture-handler
react-native link react-native-gesture-handler

react-native start --reset-cache
```

