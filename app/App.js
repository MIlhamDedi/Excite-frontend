import { Navigation } from 'react-native-navigation';
import {registerScreens} from './screens'
import Icon from 'react-native-vector-icons/MaterialIcons';

registerScreens();

const navigatorStyle = {
  navigationBarColor: '#FFFFFF',
  statusBarColor: '#00000033',
  statusBarTextColorScheme: 'light',
  drawUnderStatusBar: true,
  navBarHidden: true,
}

async function prepareIcons() {
  const icons = await Promise.all([
    Icon.getImageSource('home', 30),
    Icon.getImageSource('explore', 30),
    Icon.getImageSource('whatshot', 30),
    Icon.getImageSource('account-circle', 30),
  ]);
  const [home, explore, whatshot, profile] = icons;
  return { home, explore, whatshot, profile };
}

async function startApp() {
  const icons = await prepareIcons();

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'ExciteTry.HomeScreen',
        icon: icons.home,
        navigatorStyle
      },
      {
        label: 'Swipe',
        screen: 'ExciteTry.Swipe',
        icon: icons.whatshot,
        navigatorStyle
      },
      {
        label: 'Explore',
        screen: 'ExciteTry.Explore',
        icon: icons.explore,
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
  })
}

startApp();
