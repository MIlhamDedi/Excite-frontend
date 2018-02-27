import { Navigation } from 'react-native-navigation';
import {registerScreens} from './screens'

registerScreens();

const navigatorStyle = {
  navigationBarColor: '#FFFFFF',
  statusBarColor: '#00000033',
  statusBarTextColorScheme: 'light',
  drawUnderStatusBar: true,
  navBarHidden: true,
};

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'ExciteTry.HomeScreen',
      navigatorStyle
    },
    {
      label: 'Swipe',
      screen: 'ExciteTry.Swipe',
      navigatorStyle
    },
    {
      label: 'Explore',
      screen: 'ExciteTry.Explore',
      navigatorStyle
    },
    {
      label: 'Profile',
      screen: 'ExciteTry.Profile',
      icon: icons.profile,
      navigatorStyle: {
        navigationBarColor: '#FFFFFF',
        statusBarColor: '#00000033',
        statusBarTextColorScheme: 'dark',
        drawUnderStatusBar: true,
        navBarHidden: true,
      }
    },
  ],
  appStyle:{
    orientation: 'portrait',
    tabBarSelectedButtonColor: '#f44336',
  }
});
