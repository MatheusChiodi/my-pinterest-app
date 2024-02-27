import { forwardRef } from 'react';
import { Text, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { styles } from './styles';
import { MenuProps } from './menu';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@/theme';
import { MenuButton } from '../MenuButton';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 220]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />
          <Text style={styles.title}>Menu</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="copy" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});
