import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled(View)<{ $bottomInset: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${wp(100)}px;
  height: ${({ $bottomInset }) =>
    $bottomInset ? 75 + $bottomInset / 2 : 75}px;
  overflow: hidden;
  justify-content: ${({ $bottomInset }) =>
    !$bottomInset ? 'center' : 'flex-start'};
  background-color: white;
  border-top-width: 1px;
  border-top-color: #e2e2e2;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const NavContainer = styled(View)<{ $bottomInset: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: ${({ $bottomInset }) => ($bottomInset ? 9 : 0)}px;
`;

export const Button = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100%;
`;

export const ButtonText = styled(Text)<{ $isActive: boolean }>`
  font-size: 12px;
  font-family: 'poppins';
  margin-top: 5px;
  color: ${({ $isActive }) => ($isActive ? 'black' : '#b0b0b0')};
`;
