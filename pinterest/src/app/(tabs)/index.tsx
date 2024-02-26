import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { Filters } from '@/components/Filters';
import { FILTERS } from '@/utils/filters';

export default function Index() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: 12,
    paddingTop: 30,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
