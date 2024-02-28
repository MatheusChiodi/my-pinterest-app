import { useEffect } from 'react';
import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { theme } from '@/theme';
import { Skeleton } from 'moti/skeleton';

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value },
    ],
  }));

  const dimensions = useWindowDimensions();

  const skeletonColors = [
    theme.colors.gray[600],
    theme.colors.gray[700],
    theme.colors.gray[600],
  ];

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(
            withTiming(50),
            withTiming(-dimensions.height, { duration: 400 })
          );
        }
      })
    );
  }

  function filters() {
    return Array.from({ length: 10 }).map((_, index) => (
      <Skeleton
        key={index}
        colors={skeletonColors}
        width={60}
        height={26}
        radius={6}
      />
    ));
  }

  function boxes(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1;

    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === 'left' ? 0 : 1) ? 200 : 300;
        return (
          <Animated.View key={index} style={[styles.box, { height }]}>
            <Skeleton colors={skeletonColors} width="100%" height={height} />
          </Animated.View>
        );
      });
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/logo.png')}
        style={[styles.logo, logoAnimatedStyle]}
      />

      <View style={styles.header}>{filters()}</View>

      <View style={styles.boxes}>
        <View style={styles.column}>{boxes('left')}</View>
        <View style={styles.column}>{boxes('right')}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
    paddingHorizontal: 12,
  },
  logo: {
    width: 64,
    height: 64,
  },
  header: {
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 12,
  },
  box: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: theme.colors.gray[600],
  },
  boxes: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: 12,
  },
  column: {
    flex: 1,
    gap: 12,
  },
});
