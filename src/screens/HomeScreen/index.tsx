import React, { useLayoutEffect } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { STYLES_COLOR_GLOBAL } from '../../styles/styles';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen(){

  const navigation = useNavigation<HomeScreenProps>();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     title: "Booking.com",
  //     headerTitleStyle: {
  //       fontSize: 20,
  //       fontWeight: "bold",
  //       color: "white"
  //     },

  //     headerStyle: {
  //       backgroundColor: STYLES_COLOR_GLOBAL.primatyColor
  //     },

  //     headerTitleAlign: 'center',

  //     headerLargeStyle:{}
      
  //   });
  // }, []);

  return (
    <View style={styles.constainerHome}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Booking.com</Text>
        <Ionicons style={{alignSelf: 'center'}} name="notifications-outline" size={26} color="white" />
      </View>
      <ScrollView 
        contentContainerStyle={styles.containerTextHeader2}
        horizontal={true}
      >
        <Pressable 
          style={[styles.containerStays, {borderColor: 'white', borderWidth: 1, borderRadius: 20,}]}
        >
          <Ionicons name="bed-outline" size={26} color="white" />
          <Text style={styles.textStays}>Estadias</Text>
        </Pressable>
        <Pressable style={styles.containerStays}>
          <Ionicons name="airplane-outline" size={26} color="white" />
          <Text style={styles.textStays}>Voos</Text>
        </Pressable>
        <Pressable style={styles.containerStays}>
          <Ionicons name="car-outline" size={26} color="white" />
          <Text style={styles.textStays}>Aluguel de Carros</Text>
        </Pressable>
        <Pressable style={styles.containerStays}>
          <FontAwesome5 name="uber" size={26} color="white" />
          <Text style={styles.textStays}>Táxi</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default HomeScreen;