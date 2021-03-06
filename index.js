/* eslint-disable import/named */
import 'react-native-gesture-handler';
import {
  AppRegistry,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import App from './App';
import { name as appName } from './app.json';

Modal.defaultProps = {
  statusBarTranslucent: true,
};

TouchableOpacity.defaultProps = {
  activeOpacity: 0.6,
};

Text.defaultProps = {
  allowFontScaling: false,
};

TextInput.defaultProps = {
  allowFontScaling: false,
};

ScrollView.defaultProps = {
  keyboardDismissMode: 'on-drag', // BUG (Android only) prop not working https://github.com/facebook/react-native/issues/23364
  keyboardShouldPersistTaps: 'always',
};

AppRegistry.registerComponent(appName, () => App);
