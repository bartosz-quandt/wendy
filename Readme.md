# Wendy - challenge app that displays the weather
Core libraries:
* react-native
* expo
* @react-navigation
* axios
* native-base
* jest
* @testing-library/react-native

Expo was used because of better development experience and others reasons:
* Easier to deploy to Apple/Google Store
* No need to link and lots of libraries
* Easier to upgrade to new versions

Although it has some limitations:
* lack of native modules
* and others see https://docs.expo.dev/introduction/why-not-expo/

## Usage

```sh
expo start
```
Then scan QR code through your mobile phone with Expo Go

## TODO
* Find api for cities
* Write more test cases (for redux and other features)
* Beautify components
* Consider using some cms like contentful
* Use internationalization for texts
* Automate build and deployment