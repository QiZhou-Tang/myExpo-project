import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import ChatStackNavigator from './navigations/Navigator'
import Discussion from './screens/Discussion'
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';
// import { AppLoading } from 'expo'
import AppLoading from 'expo-app-loading';

const screenOptionStyle = {
  headerShown: false
};

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptionStyle} initialRouteName="Home">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name='Discussion' component={Discussion} />
        <Stack.Screen name="Details"
          component={ChatStackNavigator}
          options={{
            // headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Login out"
                color="#00cc00"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
