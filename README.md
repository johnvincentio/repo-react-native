# React Native

[Udemy React Native](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/t/lecture/5738524?start=0)

[React Native](http://facebook.github.io/react-native)

[Getting Started](http://facebook.github.io/react-native/docs/getting-started)

[Course Github Repo](https://github.com/StephenGrider/ReactNativeReduxCasts)


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

## Other

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



## Run instructions for Android

    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd /Users/jv/Desktop/MyDevelopment/github/repo-react-native/projects/albums && react-native run-android





