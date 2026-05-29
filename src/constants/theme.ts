// SkillSwap Theme Constants
// Colors, spacing, typography, and sizes used throughout the app

export const COLORS = {
  // Primary colors
  primary: '#1E90FF', // Bright blue
  secondary: '#00D084', // Vibrant green
  accent: '#FFB800', // Gold
  background: '#0F1419', // Dark navy background
  surface: '#1A202C', // Slightly lighter surface
  border: '#2D3748', // Border color
  
  // Semantic colors
  success: '#00D084',
  error: '#FF6B6B',
  warning: '#FFB800',
  info: '#1E90FF',
  disabled: '#4A5568',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#A0AEC0',
  textTertiary: '#718096',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const TYPOGRAPHY = {
  heading1: {
    fontSize: 32,
    fontWeight: '700' as const,
  },
  heading2: {
    fontSize: 28,
    fontWeight: '700' as const,
  },
  heading3: {
    fontSize: 24,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
  },
};

export const BORDER_RADIUS = {
  small: 8,
  medium: 12,
  large: 16,
  round: 999,
};

export const SIZES = {
  buttonHeight: 48,
  buttonSmallHeight: 40,
  iconSize: 24,
  avatarSize: 48,
};
