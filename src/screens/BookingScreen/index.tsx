import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { MaterialIcons, AntDesign, FontAwesome  } from '@expo/vector-icons';
import { FieldValue, arrayRemove, collection, deleteField, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"; 
import { BookingReducerProp } from '../../../SavedReducer';
import Header from '../../components/Header';
import { auth, db } from '../../server/firebase';

function BookingScreen(){

  const bookings: any = useSelector((state: any) => state?.booking?.booking );
  // console.log(`Reservas: ${bookings}`);
  const [dataReservation, setDataReservation] = useState<any>([]);
  const [updated, setUpdated ] = useState<boolean>(false);

  async function getReservation(){

    // const userId = auth.currentUser?.uid;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      setDataReservation(doc.data().bookingDetails)
      console.log(dataReservation);
    });
  }

  async function deleteReservation(args: string){
    const userId: string |undefined =  auth.currentUser?.uid;
    await updateDoc(doc(db, 'users', `${userId}`), {
      bookingDetails: arrayRemove(args)
    },
    {
      merge: true, 
    });

    setUpdated(true);
  }

  useEffect(() => {
    getReservation();
  }, [])

  return (
    <View style={styles.containerBooking}>
        <Header
          titleScreen='Reservas'
          accommodation={false}
          notifications={false}
          buttonBack={false}
          nav={false}
        />
        
        {dataReservation.length > 0 ? dataReservation.map((item: any, index: any) => {
          return(
            <Pressable
              key={index}
              style={styles.containerReservation}
            >
              <View>
                <Text style={styles.textNameReservation}>
                  {item.name}
                </Text>
                <View
                  style={styles.containerStatus}
                >
                  <MaterialIcons name="stars" size={24} color="green" />
                  <Text style={styles.textRating}>
                    {item.startDate}
                  </Text>
                  <View
                    style={styles.containerLevelPremium}
                  >
                    <Text
                      style={styles.textNivelPremium}
                    >
                      Nivel Premium
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity 
                onPress={() => deleteReservation(item.name)}
                style={styles.deleteReservation}
              >
                  <FontAwesome name="trash-o" size={35} color="red" />
              </TouchableOpacity>
            </Pressable>

          )
        }) : <Text>Você não tem nenhuma reserva</Text>
        }

    </View>
  )
}

export default BookingScreen;