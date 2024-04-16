import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { STYLES_COLOR_GLOBAL } from '../styles/styles';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedScreen from '../screens/SavedScreen';
import SearchScreen from '../screens/SearchScreen';
import PlacesScreen from '../screens/PlacesScreen';
import MapScreen from '../screens/MapScreen';

export type RootStackParamList = {
  Main: undefined;
  HomeScreen: undefined;
  SearchScreen: undefined;
  BookingScreen: undefined;
  ProfileScreen: undefined;
  SavedScreen: undefined;
  PlacesScreen: {
    rooms: number,
    adults: number,
    children: number,
    date: {startDate: string, endDate: string},
    place: string
  };
  MapScreen: {searchResults: string};
}

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

function StackNavigation() {

  function BottomTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }): React.ReactNode => {
              return focused ? (
                <Entypo name="home" size={24} color={STYLES_COLOR_GLOBAL.primatyColor} />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              )
            }
          }}
        />

        <Tab.Screen
          name='SavedScreen'
          component={SavedScreen}
          options={{
            tabBarLabel: "Salvo",
            tabBarIcon: ({ focused }): React.ReactNode => {
              return focused ? (
                <AntDesign name="heart" size={24} color={STYLES_COLOR_GLOBAL.primatyColor} />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              )
            }
          }}
        />

        <Tab.Screen
          name='BookingScreen'
          component={BookingScreen}
          options={{
            tabBarLabel: "Reservas",
            tabBarIcon: ({ focused }): React.ReactNode => {
              return focused ? (
                <Ionicons name="notifications" size={24} color={STYLES_COLOR_GLOBAL.primatyColor} />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              )
            }
          }}
        />

        <Tab.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ focused }): React.ReactNode => {
              return focused ? (
                <Ionicons name="person" size={24} color={STYLES_COLOR_GLOBAL.primatyColor} />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              )
            }
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name='PlacesScreen' component={PlacesScreen} />
        <Stack.Screen name='MapScreen' component={MapScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;