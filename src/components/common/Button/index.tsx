import type { TouchableOpacityProps } from 'react-native';

import * as Styled from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
  type: 'primary' | 'secondary';
}

export const Button = ({ title, type, ...props }: IProps) => {
  return (
    <Styled.Button {...props} $type={type}>
      <Styled.ButtonText $type={type}>{title}</Styled.ButtonText>
    </Styled.Button>
  );
};
