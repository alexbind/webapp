import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export function ButtonIcon({ title, ...rest }) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 20,
    textAlign: 'center'
  }
});