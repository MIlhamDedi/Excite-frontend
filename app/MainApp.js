import { Navigation } from 'react-native-navigation';
import {registerScreens} from './screens'
import Icon from 'react-native-vector-icons/MaterialIcons';

registerScreens();

const navigatorStyle = {
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

export async function startMainApp() {
  const icons = await prepareIcons();

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'ExciteTry.HomePage',
        icon: icons.home,
        navigatorStyle
      },
      {
        label: 'Swipe',
        screen: 'ExciteTry.SchedulerPage',
        icon: icons.whatshot,
        navigatorStyle
      },
      {
        label: 'Explore',
        screen: 'ExciteTry.SwipePage',
        icon: icons.explore,
        navigatorStyle
      },
      {
        label: 'Profile',
        screen: 'ExciteTry.ProfilePage',
        icon: icons.profile,
        navigatorStyle
      },
    ],
    appStyle:{
      orientation: 'portrait',
      tabBarSelectedButtonColor: '#f44336',
    }
  })
}
