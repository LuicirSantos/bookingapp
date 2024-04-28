import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { BookingReducerProp } from '../../../SavedReducer';
import Header from '../../components/Header';

function BookingScreen(){

  const bookings: any = useSelector((state: any) => state?.booking?.booking );
  console.log(`Reservas: ${bookings}`);

  return (
    <View style={styles.containerBooking}>
        <Header
          titleScreen='Reservas'
          accommodation={false}
          notifications={false}
          buttonBack={false}
          nav={false}
        />
        {bookings.length > 0 && bookings.map((item: any, index: number) => {
          return(
            <Pressable
              key={index}
              style={{
                backgroundColor: "white",
                marginVertical:10,
                marginHorizontal:20,
                borderColor: "#E0E0E0",
                borderWidth: 1,
                padding: 14,
                borderRadius: 6,
              }}
            >
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 7,
                  }}
                >
                  <MaterialIcons name="stars" size={24} color="green" />
                  <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                    {item.rating}
                  </Text>
                  <View
                    style={{
                      padding: 6,
                      width: 100,
                      backgroundColor: "#0039a6",
                      marginLeft: 4,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 13,
                        fontWeight: "400",
                      }}
                    >
                      Nivel Premium
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>

          )
        })}

    </View>
  )
}

export default BookingScreen;