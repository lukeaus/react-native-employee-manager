# Employee Manager

Manage your employees and send rosters to your employees.

## Screenshots
### iOS
![iOS](/screenshots/screenshot_iOS_employee_manage.jpg?raw=true "Manage Employee")

![iOS](/screenshots/screenshot_iOS_employees.jpg?raw=true "Employees List")

### Android
![Android](/screenshots/screenshot_android_login.jpg?raw=true "Login Screen")



## Setup
```
git clone react-native-employee-manager
mv react-native-employee-manager manager
cd manager
```

## React Native Setup
#### Mac
React Native [setup instructions](https://blog.cloudboost.io/react-native-setup-on-macos-aedb1a44f527).

### Linux & Windows
React Native [installation guide](https://facebook.github.io/react-native/docs/getting-started.html).

## Project Installation

Next run
```
npm install
```

## Setup
Create a new [Firebase](https://irebase.google.com) and create a new app called 'manager'.

In database --> rules add this
```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```


Create ```secrets.js``` file in project root with your Firebase app info
```
export default {
  firebaseConfig: {
    apiKey: 'someKey',
    authDomain: 'some-domain.firebaseapp.com',
    databaseURL: 'https://manager-FOO.firebaseio.com',
    projectId: 'manager-BAR',
    storageBucket: 'manager-BASH.appspot.com',
    messagingSenderId: '123456789'
  }
};

```

## Running
```
// ios (macOS required)
react-native run-ios

// android
emulator -avd MyAndroidImage
react-native run-android
```
