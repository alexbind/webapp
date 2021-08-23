import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Player} from '../Player';
import { Library} from '../Library';


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Player />
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Library />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FF296D"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
      barStyle={{ backgroundColor: '#0D133E' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Musics',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music-box-multiple" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
