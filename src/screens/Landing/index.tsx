import { CircleIcon, Logo } from '@assets/icons';
import { Button } from '@components/common';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export const Landing = () => {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.CircleIconContainer>
        <CircleIcon />
      </Styled.CircleIconContainer>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
      <Styled.ButtonContainer>
        <Button title="Sign Up" type="primary" style={{ marginBottom: 24 }} />
        <Button
          title="Login"
          type="secondary"
          onPress={() => navigation.navigate('Main')}
        />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
