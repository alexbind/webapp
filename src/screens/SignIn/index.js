import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export function SignIn({ navigation }) {

  const push = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}]
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ImageBackground
        source={IllustrationImg}
        style={styles.image}
        resizeMode="cover"
      >

        <View style={styles.content}>
          <Text style={styles.title}>
            Vamos começar{`\n`}
            {`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Ouça seus sons favoritos {`\n`}
            aonde quiser
          </Text>

          <ButtonIcon
            title="Começar"
            activeOpacity={0.7}
            onPress={() =>push()}
          />
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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