import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: '100%'
  },
  content: {
    marginTop: 340,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title400,
    lineHeight: 25
  }
});