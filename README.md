# Excite-frontend
Frontend of URECA Excite! App

## Dependencies

1. node
2. watchman
3. yarn
4. react-native-cli
5. Android SDK
6. JDK

install node dependencies with `yarn install`

## Run
### Emulator

1. Ensure emulator script is on `$PATH`. Follow [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for help
2. run `react-native run-android`

### Android Device

1. Enable USB Debugging on android device
2. Connect it with usb
3. run `react-native run-android`

### Generating Signed APK

1. run `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
2. Input password of your choice
3. run `cd android && ./gradlew assembleRelease`
4. APK file can be found on `android/app/build/outputs/apk/app-release.apk`

Check [React Native Docs](https://facebook.github.io/react-native/docs/signed-apk-android.html) for more detail

<br/>

> Notes: IOS is not supported right now
