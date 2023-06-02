/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MainStackNavigator } from '../navigation/main-stack-navigator/MainStackNavigator';

const Stack = createNativeStackNavigator();

export type RootStackParamList = { 
  HomeScreen: undefined;
  LoginScreen: undefined;
};



export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <NavigationContainer>
      <MainStackNavigator HomeScreen={undefined} LoginScreen={undefined}/>
    </NavigationContainer>
  );
};


export default App;
