import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Header from '../../components/Header';
import Amenities from '../../components/Amenities';

type RoomsRouteProp = RouteProp<RootStackParamList, 'RoomsScren'>;
type RoomsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RoomsScren'>;

function RoomsScren(){

  const route: any = useRoute<RoomsRouteProp>();
  const navigation = useNavigation<RoomsNavigationProp>();
  const [selected, setSelected] = useState<string>("");
  console.log(route.params);

  return (
    <ScrollView style={styles.containerRoomsScreen}>
      <Header 
        titleScreen='Quartos'
        accommodation={false}
        notifications={false}
        buttonBack={true}
        nav={navigation}
      />
      {route.params.rooms.map((item: any, index: number) => {
        return(
          <Pressable
            key={index}
            style={styles.boxRoomsReservations}
          >
            <View style={styles.boxNameRooms}>
              <Text style={styles.nameRooms}>{item.name}</Text>
              <AntDesign name="infocirlceo" size={24} color="#007fff" />
            </View>
            <Text style={styles.textImmobile}>Pagar o imóvel</Text>
            <Text style={styles.textFreeCancellation}>Cancelamento gratuito disponível</Text>
            <View style={styles.boxTextPricesRooms}>
              <Text style={styles.textOldPricesRooms}>R$ {route.params.oldPrice}</Text>
              <Text style={styles.textNewPricesRooms}>R$ {route.params.newPrice}</Text>
            </View>
            <Amenities />
            
            {selected?.includes(item.name) ? (
              
              
            <TouchableOpacity
              style={styles.buttomSelected}
            >
              <Text
                style={styles.textRoomSelected}
              >
                SELECIONADO
              </Text>
              <Entypo 
                onPress={() => setSelected("")}
                name='circle-with-cross'
                size={24}
                color='red'
              />
            </TouchableOpacity>

            ) : (
              <TouchableOpacity
                  onPress={() => setSelected(item.name)}
                  style={styles.buttonRooms}
                >
                  <Text style={styles.textRoomsSelect}>SELECIONAR</Text>
              </TouchableOpacity>
            )}
            <Text>{selected}</Text>
          </Pressable>
        )

      })}
      
      {selected.length > 0 ? (
        <TouchableOpacity 
          onPress={() => navigation.navigate('UserScreen', {
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.startDate,
            endDate: route.params.endDate
          })}
          style={styles.boxResultsReservations}
        >
          <Text 
            style={styles.titleResultsReservations}
          >
            Reservas
          </Text>
        </TouchableOpacity>
      ) : (
        null
      )}

    </ScrollView>
  )
}

export default RoomsScren;