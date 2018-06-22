import { Navigation } from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens();
Navigation.startSingleScreenApp({
  screen: {
    screen: 'ExciteTry.LoginPage',
    title: 'Login',
    navigatorStyle:{
      statusBarColor: '#00000033',
      statusBarTextColorScheme: 'light',
      drawUnderStatusBar: true,
      navBarHidden: true,
    },
    navigatorButtons:{}
  },
  passProps: {},
  animationType:'slide-down'
})
