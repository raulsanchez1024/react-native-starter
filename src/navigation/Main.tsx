import { MainFooterNav } from '@common/MainFooterNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { ScreenThree } from '@screens/ScreenThree';
import { ScreenTwo } from '@screens/ScreenTwo';
import { Settings } from '@screens/Settings';

import type { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const MainNavigation = () => (
  <Tab.Navigator
    tabBar={props => <MainFooterNav {...props} />}
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ tabBarLabel: 'Home' }}
    />
    <Tab.Screen
      name="ScreenTwo"
      component={ScreenTwo}
      options={{ tabBarLabel: 'Screen Two' }}
    />
    <Tab.Screen
      name="ScreenThree"
      component={ScreenThree}
      options={{ tabBarLabel: 'Screen Three' }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{ tabBarLabel: 'Settings' }}
    />
  </Tab.Navigator>
);
