# Excite-frontend
Frontend of URECA Excite! App

## Dependencies

- React Native Dependencies:
    1. node
    2. yarn
    3. react-native-cli
        - install with `npm install -g react-native-cli`
    4. Watchman (For linux and macOS)
    5. Node Packages 
        - install with `yarn install`

- Android Dependencies:
    1. Android SDK
        - Android SDK Platform 26
        - Android SDK build tools 26.0.2
        - Android SDK Tools
        - Android SDK Platform Tools
        - Android Emulator (optional: For debugging in emulator)
        - Intel HAXM (optional: For x86 emulator on non-linux OS)
    2. JDK 8

- IOS Dependencies:
    1. macOS
    2. XCode and XCode CLI tools

- Other:
    1. Firebase Account (for Google Sign-in)
    2. `google-services.json` (From firebase). Place it on folder `./android/app`
    3. Google Client Id, From [Google Cloud API Dashboard](https://console.cloud.google.com/apis/credentials?project=excite-181ee). Place it on file `./app/config.js`. `iosClientId` for ios, `webClientId` for andoid


## Run
### Emulator

1. Ensure `emulator` is on `$PATH`. Follow [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for help
2. run `react-native run-android`

### Android Device

1. Enable USB Debugging on android device
2. Connect it with usb
3. run `react-native run-android`

#### Generating Signed APK
1. run `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
2. Input password of your choice
3. run `cd android && ./gradlew assembleRelease`
4. APK file can be found on `android/app/build/outputs/apk/app-release.apk`

Check [React Native Docs](https://facebook.github.io/react-native/docs/signed-apk-android.html) for more detail

<br/>

###  IOS Emulator
> Only for MacOS
1. run `react-native run-ios`
