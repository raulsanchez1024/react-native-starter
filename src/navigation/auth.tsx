import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '@screens/Landing';

import type { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigation = () => {
  return (
    // @ts-ignore
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
};
