import React, { useState } from 'react';
import { Pressable, ScrollView, TextInput, View, Modal as ModalRN, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { Feather, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import Header from '../../components/Header';
import Modal from "react-native-modal";
import { STYLES_COLOR_GLOBAL } from '../../styles/styles';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen(){

  const navigation = useNavigation<HomeScreenProps>();
  const [date, setDate] = useState<any>(dayjs());
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [rooms, setRooms] = useState<number>(1);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [modalVisibleChoice, setModalVisibleChoice] = useState<boolean>(false);

  return (
    <View style={styles.constainerHome}>
      <Header />

      <ScrollView>
        <View style={styles.testAux}>
          {/* DEstination */}
          <View style={styles.containerInputDatas}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholderTextColor='gray' placeholder='Entre com o destino' />
          </View>

          {/* Selected Dates */}
          <Pressable style={styles.containerInputDatas}>
            <Feather name="calendar" size={24} color="black" />
            <Text style={{color: 'gray'}} onPress={() => setModalVisible(true)}>{startDate || endDate != undefined ? `${startDate} \n ${endDate}` : 'Selecionar Data'}</Text>
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
                onChange={(params) => {
                  setStartDate(params.startDate);
                  setEndDate(params.endDate);
                }}
              />
              <TouchableOpacity 
                style={styles.buttonDone}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textDone}>Concluido</Text>
              </TouchableOpacity>
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
          <TouchableOpacity style={styles.buttonSearch}>
            <Text style={styles.textSearch}>Procurar</Text>
          </TouchableOpacity>
        </View>
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