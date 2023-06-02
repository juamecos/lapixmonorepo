import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';


// Creates a MainStackNavigator component with a RootStackParamList type definition for the props parameter 
// of the component function (which is an object with a 'navigation' property and a 'route' property) with a HomeScreen property set 
// to undefined, a LoginScreen property set to undefined

const Stack = createNativeStackNavigator();

export type RootStackParamList = { 
  HomeScreen: undefined;
  LoginScreen: undefined;
};

// **************** dummy data for authentication
const status = 'authenticated';

// Creates a MainStackNavigator component with a RootStackParamList type definition for the props parameter

export function MainStackNavigator(props: RootStackParamList) {
  return (
    <Stack.Navigator initialRouteName='Home'>
      {/* If the status is authenticated, then the HomeScreen component is rendered, otherwise the LoginScreen component is rendered */}
      {
        status === 'authenticated' ? (
          <>
          
          <Stack.Screen name="Home" component={HomeScreen} options={{
            
            title: 'Home',
            
          }}/>
          </>
        ) : (
          <>
          
          <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )
      }
      
    </Stack.Navigator>
  );
}
