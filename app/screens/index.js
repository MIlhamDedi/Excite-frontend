import { Navigation } from 'react-native-navigation';

import HomePage from './HomePage';
import SwipePage from './SwipePage';
import ProfilePage from './ProfilePage';
import SchedulerPage from './SchedulerPage'
import LoginPage from './LoginPage';

export function registerScreens() {
  Navigation.registerComponent('ExciteTry.HomePage', () => HomePage);
  Navigation.registerComponent('ExciteTry.SwipePage', () => SwipePage);
  Navigation.registerComponent('ExciteTry.ProfilePage', () => ProfilePage);
  Navigation.registerComponent('ExciteTry.SchedulerPage', () => SchedulerPage);
  Navigation.registerComponent('ExciteTry.LoginPage', () => LoginPage);
}
