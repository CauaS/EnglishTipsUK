import { AppRegistry } from 'react-native';
import App from './src/AppOne';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;

AppRegistry.registerComponent('fast', () => App);
