import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

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
          />
        </View>

      </ImageBackground>
    </View>
  );
}