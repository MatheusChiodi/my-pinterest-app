import { Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { MenuButtonProps } from './menuButton';
import { theme } from '@/theme';

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={24}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
