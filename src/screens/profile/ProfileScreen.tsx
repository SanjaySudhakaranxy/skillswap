import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';
import { COLORS, SPACING, TYPOGRAPHY } from '../../constants/theme';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>{user?.displayName || 'User'}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
    marginBottom: SPACING.lg,
  },
  logoutButton: {
    backgroundColor: COLORS.error,
    padding: SPACING.md,
    borderRadius: 8,
    paddingHorizontal: SPACING.lg,
  },
  logoutText: {
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
});

export default ProfileScreen;
