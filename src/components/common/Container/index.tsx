import type { ReactNode } from 'react';

import * as Styled from './styles';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>;
};
