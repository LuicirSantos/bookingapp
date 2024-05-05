import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, TextInput, View, Modal as ModalRN, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { Feather, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import Header from '../../components/Header';
import Modal from "react-native-modal";
import { STYLES_COLOR_GLOBAL } from '../../styles/styles';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen(){

  const navigation = useNavigation<HomeScreenProps>();
  const route = useRoute<any>();
  const [destination, setDestination] = useState<any>("");
  const [date, setDate] = useState<any>(dayjs());
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [rooms, setRooms] = useState<number>(1);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [modalVisibleChoice, setModalVisibleChoice] = useState<boolean>(false);

  function searchPlaces(args: string): void{
    if (destination === '' ||
       startDate === '' || 
       endDate === '') {
      
        Alert.alert('Dados inválidos', 'Porfavor preencha os campos vazios', [
          {
            text: 'Cancelar',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'OK', onPress: () => null},
        ]);
    }

    if (route?.params?.input && destination && startDate && endDate) {
      navigation.navigate("PlacesScreen", {
        rooms: rooms,
        adults: adults,
        children: children,
        date: {startDate, endDate},
        place: args
      });
    }
  }

  useEffect(() => {
    if (route?.params?.input) {
      setDestination(route?.params?.input);
    }

    // console.log(route.params);
  }, [route?.params]);

  function checkDate(date1: string, date2: string){
    
    const dateValue1: Date = new Date(date1);
    const dateValue2: Date = new Date(date2);

    setStartDate(`${dateValue1.getDate()}-${dateValue1.getMonth()}-${dateValue1.getFullYear()}`);
    setEndDate(`${dateValue2.getDate()}-${dateValue2.getMonth()}-${dateValue2.getFullYear()}`);
  }

  return (
    <View style={styles.constainerHome}>
      <Header 
        titleScreen="Booking.com" 
        accommodation={true} 
        notifications={true}
        buttonBack={false}
        nav={navigation}
      />

      <ScrollView>
        <View style={styles.testAux}>
          {/* Destination */}
          <Pressable 
            style={styles.containerInputDatas}
            onPress={() => navigation.navigate('SearchScreen')}  
          >
            <Feather name="search" size={24} color="black" />
            <TextInput editable={false} placeholderTextColor='gray' placeholder={destination !== "" ?  destination.trim() : "Entre com o destino"} />
          </Pressable>

          {/* Selected Dates */}
          <Pressable 
            onPress={() => {
              setModalVisible(true);
              setStartDate('');
              setEndDate('');
            }} 
            style={styles.containerInputDatas}
          >
            <Feather name="calendar" size={24} color="black" />
            <Text style={{color: 'gray'}}>{startDate || endDate !== '' ? `${startDate} / ${endDate}` : 'Selecionar Data'}</Text>
            <ModalRN
              animationType='slide'
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <DateTimePicker
                mode="range"
                date={date}
                startDate={startDate}
                endDate={endDate}
                locale={'pt'}
                
                onChange={(params) => {
                  setStartDate(params.startDate?.toString() as string);
                  setEndDate(params.endDate?.toString()  as string);
                }}
              />
              <View style={styles.containerButtonDate}>

                <TouchableOpacity 
                  style={styles.buttonCancel}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textDoneCancel}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonDone}
                  onPress={() => {
                    checkDate(startDate, endDate);
                    setModalVisible(false)
                  }}
                >
                  <Text style={styles.textDoneCancel}>Concluido</Text>
                </TouchableOpacity>

              </View>
            </ModalRN>
          </Pressable>

          {/* Rooms and Guests */}
          <Pressable onPress={() => setModalVisibleChoice(!modalVisibleChoice)} style={styles.containerInputDatas}>
            <Ionicons name="person-outline" size={24} color="black" />
            <TextInput 
              placeholderTextColor='red' 
              placeholder={`${rooms} quarto${rooms > 1 ? 's' : ''} - ${adults} adulto${adults > 1 ? 's' : ''} - ${children} criança${children > 1 ? 's' : ''}`} 
            />
          </Pressable>

          {/* Search Button */}
          <TouchableOpacity 
            onPress={()=> {searchPlaces(destination)}}
            style={styles.buttonSearch}
          >
            <Text style={styles.textSearch}>Procurar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.advertisingPhrase}>Viaje mais e gaste menos</Text>
        <ScrollView
          style={{paddingHorizontal: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Pressable style={styles.loyaltyProgram}>
            <Text style={styles.loyaltyProgramTitle}>Gênio</Text>
            <Text style={styles.loyaltyProgramDescription}>Você alcançou o nível um de gênio em nosso programa de fidelidade</Text>
          </Pressable>

          <Pressable style={[styles.loyaltyProgram, {borderColor: '#E0E0E0', borderWidth: 2, backgroundColor: 'transparent'}]}>
            <Text style={[styles.loyaltyProgramTitle, {color: '#000000'}]}>15% de desconto</Text>
            <Text style={[styles.loyaltyProgramDescription, {color: '#000000'}]}>Complete 5 estadias para desbloquear o nível 2</Text>
          </Pressable>

          <Pressable style={[styles.loyaltyProgram, {borderColor: '#E0E0E0', borderWidth: 2, backgroundColor: 'transparent'}]}>
            <Text style={[styles.loyaltyProgramTitle, {color: '#000000'}]}>10% de desconto</Text>
            <Text style={[styles.loyaltyProgramDescription, {color: '#000000'}]}>Aproveite descontos na participação em propriedades em todo o mundo</Text>
          </Pressable>
        </ScrollView>

        <Pressable style={styles.containerLogoBooking}>
          <Image 
            style={styles.logoBooking}
            source={{uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png"}}
          />
        </Pressable>
      </ScrollView>

      <View>
        <Modal
          style={styles.modalReservedPeople}
          isVisible={modalVisibleChoice}
        >
          <View style={styles.modalContent}>
            <Text style={styles.guestsTitle}>Selecione os Quartos dos Convidados</Text>
            <View style={styles.containerSetRooms}>
              <Text style={styles.modalTextRooms}>Quartos</Text>
              <View style={styles.containerAddOrRemoveRooms}>
                <TouchableOpacity
                  onPress={() => setRooms(Math.max(1, rooms - 1))}
                  style={styles.buttonLessAndMore}
                >
                  <Text style={styles.buttonAndMoreLessText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.qtdRooms}>{rooms}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => setRooms((c) => c + 1)}
                  style={styles.buttonLessAndMore}
                >
                  <Text style={styles.buttonAndMoreLessText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerSetRooms}>
              <Text style={styles.modalTextRooms}>Adultos</Text>
              <View style={styles.containerAddOrRemoveRooms}>
                <TouchableOpacity 
                  onPress={() => setAdults(Math.max(1, adults - 1))}
                  style={styles.buttonLessAndMore}
                >
                  <Text style={styles.buttonAndMoreLessText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.qtdRooms}>{adults}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => setAdults((c) => c + 1)}
                  style={styles.buttonLessAndMore}
                >
                  <Text style={styles.buttonAndMoreLessText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerSetRooms}>
              <Text style={styles.modalTextRooms}>Crianças</Text>
              <View style={styles.containerAddOrRemoveRooms}>
                <TouchableOpacity 
                  onPress={() => setChildren(Math.max(0, children - 1))}
                  style={styles.buttonLessAndMore}
                >
                  <Text style={styles.buttonAndMoreLessText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.qtdRooms}>{children}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => setChildren((c) => c + 1)}
                  style={styles.buttonLessAndMore}
                >
                  <Text style={styles.buttonAndMoreLessText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity 
              style={{width: '100%', padding: 10, marginTop: 50, backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,position: 'absolute', bottom: '60%'}}
              onPress={() => setModalVisibleChoice(false)}
            >
              <Text style={{color: 'white', textAlign: 'center'}}>Concluído</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default HomeScreen;