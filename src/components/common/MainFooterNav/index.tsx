import { View } from 'react-native';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as Styled from './styles';

export const MainFooterNav = ({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Styled.Container $bottomInset={insets?.bottom}>
      <Styled.NavContainer $bottomInset={insets?.bottom}>
        <View style={{ flexDirection: 'row' }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            let icon;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            if (route.name === 'Home') {
              icon = 'home';
            } else if (route.name === 'ScreenTwo') {
              icon = 'tasks';
            } else if (route.name === 'ScreenThree') {
              icon = 'check-circle';
            } else if (route.name === 'Settings') {
              icon = 'gear';
            }

            return (
              <Styled.Button
                key={route.name}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                {route.name === 'DailyPrompts' || route.name === 'Home' ? (
                  <FontAwesome5
                    size={24}
                    name={icon}
                    color={isFocused ? 'black' : '#B0B0B0'}
                  />
                ) : (
                  <FontAwesome
                    size={24}
                    name={icon}
                    color={isFocused ? 'black' : '#B0B0B0'}
                  />
                )}
                <Styled.ButtonText $isActive={isFocused}>
                  {label}
                </Styled.ButtonText>
              </Styled.Button>
            );
          })}
        </View>
      </Styled.NavContainer>
    </Styled.Container>
  );
};
