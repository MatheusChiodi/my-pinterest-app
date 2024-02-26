import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  pressable: {},
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected: {
    borderBottomColor: theme.colors.white,
    borderBottomWidth: 4,
  },
});
