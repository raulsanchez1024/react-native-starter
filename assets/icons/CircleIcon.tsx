import Svg, { Circle } from 'react-native-svg';

interface IProps {
  size?: number;
}

export const CircleIcon = ({ size = 1500 }: IProps) => (
  <Svg width={size} height={size} viewBox="0 0 1500 1500" fill="none">
    <Circle cx={750} cy={750} r={750} fill="#7195FE" />
  </Svg>
);
