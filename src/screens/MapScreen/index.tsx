import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

function MapScreen(){

    const route = useRoute<any>();
    const mapView: any = useRef(null);
    const coordinates: any[] = [];
    const details = route.params.searchResults.map((item: any) => item.properties?.map((prop: any) => {
        coordinates.push({
            latitude: Number(prop.latitude),
            longitude: Number(prop.longitude)
        });
    }));
    console.log(route.params);
    
    useEffect(() => {
        mapView.current.fitToCoordinates(coordinates, {
            edgePadding: {
                top: 190,
                left: 190,
                bottom: 190,
                right: 190
            }
        })
    }, []);
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
                            <TouchableOpacity style={styles.markerButton}>
                                <Text style={styles.markerText}>{property.newPrice}</Text>
                            </TouchableOpacity>
                        </Marker>
                    );
                }))}
            </MapView>
        </View>
    )
}

export default MapScreen;