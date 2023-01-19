import * as Styled from './styles';

interface IProps {
  children: string;
}

export const Text = ({ children }: IProps) => (
  <Styled.Text>{children}</Styled.Text>
);
