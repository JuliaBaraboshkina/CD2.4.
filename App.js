import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './screen/first';
import Second from './screen/second';
import Third from './screen/third';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Первая страница">
      <Stack.Screen
        name="Первая страница"
        component={First}
        options={{
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name="Вторая страница"
        component={Second}
        options={{
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name="Третья страница"
        component={Third}
        options={{
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
