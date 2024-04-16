import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

function MapScreen(){

    const route = useRoute<any>();
    const mapView = useRef(null);
    console.log(route.params);
    

    return (
        <View style={styles.containerMapScreen}>
            <MapView
                ref={mapView}
                style={styles.mapView}
            >
                {route.params.searchResults.map((item: any) => item.properties.map((property: any, index: string) => {
                    return(
                        <Marker 
                            key={index}
                            title={property.name}
                            coordinate={{
                                latitude: Number(property.latitude),
                                longitude: Number(property.longitude)
                            }}
                        >

                        </Marker>
                    );
                }))}
            </MapView>
        </View>
    )
}

export default MapScreen;