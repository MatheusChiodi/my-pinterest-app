import { Image, ImageProps } from 'react-native';
import { styles } from './styles';

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return <Image style={[styles.img, selected && styles.selected]} {...rest} />;
}
