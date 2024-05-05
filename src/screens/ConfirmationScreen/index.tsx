import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import Header from '../../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { savedPlaces } from '../../../SavedReducer';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../server/firebase';

type ConfirmationRouteProp = RouteProp<RootStackParamList, 'ConfirmationScreen'>;
type ConfirmationNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ConfirmationScreen'>;

function ConfirmationScreen(){

  const route: ConfirmationRouteProp = useRoute<ConfirmationRouteProp>();
  const navigation: ConfirmationNavigationProp = useNavigation<ConfirmationNavigationProp>();
  // const dispatch = useDispatch();
  const uid = auth.currentUser?.uid;
  console.log(route.params);

  async function confirmBooking(){
    // dispatch(savedPlaces(route.params));

    await setDoc(
      doc(db, 'users', `${uid}`),{
          bookingDetails: arrayUnion(route.params)
        }
        ,
        {
          merge: true, 
        }
    );

    navigation.navigate('Main');
  }
  
  return (
    <View style={styles.containerConfirmation}>
      <Header 
        titleScreen='Confirmação'
        accommodation={false}
        notifications={false}
        buttonBack={true}
        nav={navigation}
      />
      <View style={{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5
      }}>

        <View 
          style={styles.boxTitleAndAssessmentAndDescription}
        >
          <View style={styles.boxTitlePorpertyInfo}>
            <Text style={styles.titlePropertyInfo}>{route.params.name}</Text>
            <View style={styles.boxRatingSubtitle}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                  style={styles.subtitle1}
              >
                <Text style={styles.textPremiumLevel}>Nivel Premium</Text>
              </View>
              <View style={styles.boxStatusTravel}>
                  <Text style={styles.textStatusTravel}>Viagem sustentavel</Text>
              </View>
            </View>
          </View>


        </View>

        <View style={styles.boxScheduledTrip}>
            <View>
                <Text style={styles.textScheduledTrip}>Inicio</Text>
                <Text style={styles.dateScheduledTrip}>{route?.params?.startDate}</Text>
            </View>
            <View>
                <Text style={styles.textScheduledTrip}>Final</Text>
                <Text style={styles.dateScheduledTrip}>{route?.params?.endDate}</Text>
            </View>
        </View>

        <View style={styles.boxRoomsAndGuest}>
            <Text style={styles.textRoomsAndGuest}>Quartos e Convidados</Text>
            <Text style={styles.amountRoomsAndGuest}>quartos - {route.params.adults} adultos - {route.params.children} crianças</Text>
        </View>

        <TouchableOpacity
          onPress={confirmBooking}
          style={styles.buttonBowNow}
        >
          <Text style={styles.textBowNow}>Agendar Agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConfirmationScreen;