import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import Splash from '../Screens/Splash/Splash';
import TimeSheets from '../Screens/TimeSheets/TimeSheets';
import Expenses from '../Screens/Expenses/Expenses';
import Timeoff from '../Screens/Timeoff/Timeoff';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();
const TabRouts = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tabs.Screen
        name="TimeSheets"
        component={TimeSheets}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="profile"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="indent-right"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Time Off"
        component={Timeoff}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="altimeter"
                size={20}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};
const Routes = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  if (showSplash) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="TabRouts" component={TabRouts} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
export default Routes;
