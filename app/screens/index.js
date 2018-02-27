import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import Swipe from './Swipe';
import Explore from './Explore';
import Profile from './Profile';

export function registerScreens() {
    Navigation.registerComponent('ExciteTry.HomeScreen', () => HomeScreen);
    Navigation.registerComponent('ExciteTry.Swipe', () => Swipe);
    Navigation.registerComponent('ExciteTry.Explore', () => Explore);
    Navigation.registerComponent('ExciteTry.Profile', () => Profile);
}
