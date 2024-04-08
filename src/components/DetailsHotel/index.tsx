import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

function DetailsHotel(){
  return (
    <ScrollView 
        contentContainerStyle={styles.containerTextHeader2}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
  )
}

export default DetailsHotel;