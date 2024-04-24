import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import styles from './style';
import Header from '../../components/Header';
import { pixelNormalize } from '../Normalize';
import { MaterialIcons } from '@expo/vector-icons';
import Amenities from '../../components/Amenities';

type PropertyInfoNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PropertyInfoScreen'>
type PropertyInfoRouteProp = RouteProp<RootStackParamList, 'PropertyInfoScreen'>;

function PropertyInfoScreen(){

    const navigation = useNavigation<PropertyInfoNavigationProp>();
    const route: any = useRoute<PropertyInfoRouteProp>();
    console.log(route.params);

    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

    return (
        <View style={styles.containerPropertyInfo}>
            <Header 
                titleScreen={route.params.name} 
                accommodation={false}
                notifications={false}
                buttonBack={true}
                nav={navigation}
            />
            <ScrollView style={{borderWidth: 1, borderColor: 'red', height: '93%'}}>
                <Pressable style={styles.gridImage}>
                    {route.params.photos.slice(0,5).map((photos: any, index: any) => {
                        return(
                            <View key={index} style={styles.boxImage}>
                                <Image
                                    source={{uri: photos.image}}
                                    style={{
                                        width: 110,
                                        height: pixelNormalize(80),
                                        borderRadius: pixelNormalize(4),
                                    }}
                                />
                            </View>
                        );
                    })}
                    <TouchableOpacity style={styles.buttonShowMore}>
                        <Text style={styles.textShowMore}>Mostrar Mais</Text>
                    </TouchableOpacity>
                </Pressable>

                <View style={styles.boxTitleAndAssessmentAndDescription}>
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
                        </View>
                    </View>

                    <View style={styles.boxStatusTravel}>
                        <Text style={styles.textStatusTravel}>Viagem sustentavel</Text>
                    </View>

                </View>

                <Text style={styles.lineSpace} />

                <Text style={styles.textInfoDescription}>Preço de 1 Noite para {route.params.adults} Adultos</Text>

                <View style={styles.boxPrice}>
                    <Text style={styles.textOldPrice}>{route.params.oldPrice * route.params.adults}</Text>
                    <Text style={styles.textNewPrice}>Rs {route.params.newPrice * route.params.adults}</Text>
                </View>

                <View style={styles.boxHotelDiscount}>
                    <Text style={styles.textHotelDiscount}>{offerPrice.toFixed(0)}% OFF</Text>
                </View>

                <Text style={styles.lineSpace} />

                <View style={styles.boxScheduledTrip}>
                    <View>
                        <Text style={styles.textScheduledTrip}>Inicio</Text>
                        <Text style={styles.dateScheduledTrip}>{route?.params?.selectDates?.startDate}</Text>
                    </View>
                    <View>
                        <Text style={styles.textScheduledTrip}>Final</Text>
                        <Text style={styles.dateScheduledTrip}>{route?.params?.selectDates?.endDate}</Text>
                    </View>
                </View>

                <View style={styles.boxRoomsAndGuest}>
                    <Text style={styles.textRoomsAndGuest}>Quartos e Convidados</Text>
                    <Text style={styles.amountRoomsAndGuest}>{route.params.rooms} quartos {route.params.adults} adultos {route.params.children} crianças</Text>
                </View>

                <Text style={styles.lineSpace} />

                <Amenities />

                <Text style={styles.lineSpace} />

                <TouchableOpacity 
                    style={styles.buttonSelectedHotel}
                    onPress={() => navigation.navigate('RoomsScren',{
                        rooms: route.params.roomsProp,
                        oldPrice: route.params.oldPrice,
                        newPrice: route.params.newPrice,
                        name: route.params.name,
                        children: route.params.children,
                        adults: route.params.adults,
                        rating: route.params.rating,
                        startDate: route?.params?.selectDates?.startDate,
                        endDate: route?.params?.selectDates?.endDate
                        // urlScreen: navigation
                    })}    
                >
                    <Text style={styles.textSelectedHotel}>Selecionar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PropertyInfoScreen;