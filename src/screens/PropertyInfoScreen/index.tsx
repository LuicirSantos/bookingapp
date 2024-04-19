import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import styles from './style';
import Header from '../../components/Header';
import { pixelNormalize } from '../Normalize';
import { MaterialIcons } from '@expo/vector-icons';

type PropertyInfoNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PropertyInfoScreen'>
type PropertyInfoRouteProp = RouteProp<RootStackParamList, 'PropertyInfoScreen'>;

function PropertyInfoScreen(){

    const navigation = useNavigation<PropertyInfoNavigationProp>();
    const route: any = useRoute<PropertyInfoRouteProp>();
    console.log(route.params)
    return (
        <View style={styles.containerPropertyInfo}>
            <Header 
                titleScreen={route.params.name} 
                accommodation={false}
                notifications={false}
                buttonBack={true}
                nav={navigation}
            />
            <ScrollView>
                <Pressable style={styles.gridImage}>
                    {route.params.photos.slice(0,5).map((photos: any, index: any) => {
                        console.log({uri: photos.image});
                        
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
            </ScrollView>
        </View>
    )
}

export default PropertyInfoScreen;