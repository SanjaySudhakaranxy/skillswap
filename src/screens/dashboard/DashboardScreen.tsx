import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../constants/theme';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.text}>Welcome to SkillSwap!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...TYPOGRAPHY.heading2,
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },
  text: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
  },
});

export default DashboardScreen;
