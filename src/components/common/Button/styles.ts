import styled, { css } from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

export const Button = styled(TouchableOpacity)<{
  $type: 'primary' | 'secondary';
}>`
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;

  ${({ $type }) =>
    $type === 'secondary'
      ? css`
          background-color: transparent;
          border: solid 3px #7195fe;
        `
      : css`
          background-color: #fea101;
        `}
`;

export const ButtonText = styled(Text)<{ $type: 'primary' | 'secondary' }>`
  font-weight: 700;
  padding: 16px 34px;
  ${({ $type }) =>
    $type === 'secondary'
      ? css`
          color: #7195fe;
          margin-top: -2px;
        `
      : css`
          color: white;
        `}
`;
