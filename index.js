import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import SignIn from './src/pages/signIn';

AppRegistry.registerComponent(appName, () => SignIn);