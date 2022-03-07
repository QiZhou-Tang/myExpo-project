import React, { useContext } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Text, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../types';
import TabTwoScreen from '../screens/TabTwoScreen';
import Chat from '../screens/Chat'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon2 from '@expo/vector-icons/Entypo';

export const AppContext = React.createContext({});

const BottomTab = createMaterialBottomTabNavigator()

function ChatStackNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
      screenOptions={{
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabTwoScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          // tabBarLabel: 'chat',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={26} />
            <Icon2 name='chat' color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>

  );
}

export default ChatStackNavigator