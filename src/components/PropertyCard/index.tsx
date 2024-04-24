import React from 'react';
import { View, Text, Pressable, Image, Dimensions } from 'react-native';
import styles from './styles';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { PlacesScreenProps } from '../../screens/PlacesScreen';

export type PropertyCardProps = {
    rooms: number;
    children: number,
    adults: number;
    date: number;
    propperty: any;
    availableRooms: any;
    nav: PlacesScreenProps
}

function PropertyCard({rooms, children, adults, date, propperty, availableRooms, nav}: PropertyCardProps){

  const {width, height} = Dimensions.get("window");

  return (
    <View>
      <Pressable 
        onPress={() => nav.navigate('PropertyInfoScreen', {
          name: propperty.name,
          rating: propperty.rating,
          oldPrice: propperty.oldPrice,
          newPrice: propperty.newPrice,
          photos: propperty.photos,
          roomsProp: propperty.rooms,
          adults: adults,
          children: children,
          rooms: rooms,
          selectDates: date
        })}
        style={styles.containerPropertyCard}
      >
        <View>
          <Image style={{height: height / 3.3, width: width - 280}} source={{uri:propperty.image}} />
        </View>
        <View style={styles.containerDescription}>
          <View style={styles.boxTextAndIcon}>
            <Text style={styles.textName}>{propperty.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View style={styles.boxRatingSubtitle}>
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{propperty.rating}</Text>
            <View
              style={styles.subtitle1}
            >
              <Text style={styles.textPremiumLevel}>Nivel Premium</Text>
            </View>
          </View>
          <Text style={styles.descriptionPropertyCard}>{propperty.address.length > 50 ? propperty.address.substr(0, 50) : propperty.address}</Text>
          <Text style={styles.textInfoDescription}>Preço de 1 Noite para {adults} Adultos</Text>
          <View style={styles.boxPrice}>
            <Text style={styles.textOldPrice}>{propperty.oldPrice * adults}</Text>
            <Text style={styles.textNewPrice}>Rs {propperty.newPrice * adults}</Text>
          </View>
          <View style={styles.boxHotelRooms}>
            <Text style={styles.textRoom}>Quartos de Luxo</Text>
            <Text style={styles.amountBed}>Quarto do Hotel: 1 cama</Text>
          </View>
          <View style={styles.boxLimitedDeal}>
            <Text style={styles.textLimitedDeal}>Oferta por tempo limitado</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default PropertyCard;