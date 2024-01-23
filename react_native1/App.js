import * as React from 'react'; 
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-web';

function HomeScreen(props) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Categories</Text>
      <Button title='ACCESSOIRES' onPress={() => {props.navigation.navigate('Contact')}}/>
      <Button title='PERRUQUES' onPress={() => {props.navigation.navigate('Contact')}}/>
      <Button title='TISSAGES BRÉSILIENS' onPress={() => {props.navigation.navigate('Contact')}}/>

    </View> 
  )
};

function ContactScreen(){
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contact</Text>
      <Button title='Cont' onPress={() => {props.navigation.navigate('Contact')}}/>
    </View> 
  )
};
const Stack = createStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Categories' component={HomeScreen}/>
      <Stack.Screen name='Contact' component={ContactScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
