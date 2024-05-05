import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { Octicons, Ionicons, FontAwesome5,Entypo, FontAwesome } from '@expo/vector-icons';
import Modal from "react-native-modal";
import Header from '../../components/Header';
import PropertyCard from '../../components/PropertyCard';
import { STYLES_COLOR_GLOBAL } from '../../styles/styles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../server/firebase';

export type PlacesScreenProps = NativeStackNavigationProp<RootStackParamList, 'PlacesScreen'>;

function PlacesScreen(){

  const route = useRoute<any>();
  const navigation = useNavigation<PlacesScreenProps>();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [data, setdata] = useState<any>([]);
  const [modalVisibleChoice, setModalVisibleChoice] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<any[]>([]);
  const searchPlaces = data?.filter((item: any) =>  item.place === route.params.place);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
      
    const fetchProducts = async () => {
      const colRef = collection(db, "places");

      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        data.push(doc.data());
        setSortedData(data);
      })
    }

    fetchProducts();
  }, [data]);


  const filters: any[] = [
    {
      id: '0',
      filter: 'Ordem: Crescente'
    },
    {
      id: '1',
      filter: 'Ordem: Descrecente'
    }
  ];

  const compare = (a: any, b: any) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }

    if (a.newPrice < b.newPrice) {
      return 1;
    }

    return 0;
  };

  const comparision = (a: any, b: any) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }

    if (a.newPrice > b.newPrice) {
      return 1;
    }

    return 0;
  };

  function applyFilter(filter: any){
    switch(filter){
      case "Ordem: Descrecente":
        searchPlaces.map((val: any) => val.properties.sort(compare));
        setSortedData(searchPlaces);
      break;

      case "Ordem: Crescente":
        searchPlaces.map((val: any) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
      default:
    }
  }

  return (
    <View style={styles.containerPlacesScreen}>
      <Header 
        titleScreen="Lugares Populares" 
        accommodation={false} 
        notifications={false}
        buttonBack={true}
        nav={navigation}
      />
      <View style={styles.containerFilterSortMap}>
        <Pressable style={[styles.buttonFilterSortMap]} onPress={() => setModalVisibleChoice(!modalVisibleChoice)}>
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={styles.textFilterSortMap}>Ordenar</Text>
        </Pressable>

        <Pressable style={[styles.buttonFilterSortMap]}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={styles.textFilterSortMap}>Filtrar</Text>
        </Pressable>

        <Pressable 
          style={[styles.buttonFilterSortMap]}
          onPress={() => navigation.navigate('MapScreen', {
            searchResults: searchPlaces
          })}
        >
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={styles.textFilterSortMap}>Mapa</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.listPlaces}>
        {sortedData?.filter((item: any) => item.place === route.params.place)
          .map((item: any) => item.properties.map((property: any, index: string) => {
            return(
              <PropertyCard 
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                date={route.params.date}
                propperty={property}
                availableRooms={property.rooms}
                nav={navigation}
              />
            )
          }))}
      </ScrollView>
      <Modal
        style={styles.modalPlaces}
        isVisible={modalVisibleChoice}
        deviceWidth={windowWidth}
        deviceHeight={windowHeight}
        backdropColor='white'
        backdropOpacity={0}
      >
        <View style={styles.modalContent}>
        <Text style={styles.sortAndFilter}>Classificar e Filtrar</Text>
          <View style={styles.boxSortAndFilter}>
            <View style={styles.boxTitle}>
              <Text style={{textAlign: 'center'}}>Classificar</Text>
            </View>
            <View style={styles.boxFilter}>
              {filters.map((item: any, index: any) => {
                return(
                  <TouchableOpacity 
                    key={index}
                    style={styles.buttonFilter}
                    onPress={() => setSelectedFilter(item.filter)}
                  >
                    {
                      selectedFilter.includes(item.filter)
                      ? <FontAwesome name="circle" size={24} color="green" />
                      : <Entypo name="circle" size={24} color="black" />
                    }
                    
                    <Text style={{marginLeft: 6}}>{item.filter}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>

          <TouchableOpacity 
            style={{width: '100%', padding: 10, backgroundColor: STYLES_COLOR_GLOBAL.primatyColor}}
            onPress={() => {
              applyFilter(selectedFilter);
              setModalVisibleChoice(false);
            }}
          >
            <Text style={{color: 'white', textAlign: 'center'}}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default PlacesScreen;