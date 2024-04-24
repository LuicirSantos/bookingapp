import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type AmenitiesProps = {
  id: string;
  name: string;
}

function Amenities(){

    const services: AmenitiesProps[] = [
        {
          id: "0",
          name: "room service",
        },
        {
          id: "2",
          name: "free wifi",
        },
        {
          id: "3",
          name: "Family rooms",
        },
        {
          id: "4",
          name: "Free Parking",
        },
        {
          id: "5",
          name: "swimming pool",
        },
        {
          id: "6",
          name: "Restaurant",
        },
        {
          id: "7",
          name: "Fitness center",
        },
      ];

    return (
        <View style={styles.containerAmenities}>
            <Text style={styles.textPopularFacilities}>Instalações Populares</Text>
            <View style={styles.boxLoopTagsServices}>
              {services.map((item: AmenitiesProps, index: number) => {
                return(
                  <View 
                    key={index}
                    style={styles.boxPopularTags}
                  >
                    <Text style={styles.textPopularTags}>{item.name}</Text>
                  </View>
                )
              })}
            </View>
        </View>
    )
}

export default Amenities;