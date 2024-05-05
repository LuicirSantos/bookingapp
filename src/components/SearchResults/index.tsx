import React from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import styles from './styles';
import { SearchScreenProp } from '../../screens/SearchScreen';

type SearchScreenProps = {
    data: any;
    input: any;
    setInput: any;
    nav: SearchScreenProp;
}

function SearchResults({data, input, setInput, nav}: SearchScreenProps){
    
    function CheckData({data, browser}: any){
        if (data.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
                return null;
            } else{
                return(
                    <Pressable
                        onPress={() => {
                            setInput(data.place);
                            browser.navigate("HomeScreen", {
                                input: data.place
                            });
                        }}
                        style={styles.containerResults}
                    >
                        <View>
                            <Image style={styles.imgSearchResults} source={{uri: data.placeImage}} />
                        </View>
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.textPlace}>{data.place}</Text>
                            <Text style={styles.textShortDescription}>{data.shortDescription}</Text>
                            <Text style={styles.textpropertiesLenth}>{data.properties.length} Properties</Text>
                        </View>
                    </Pressable>
                )

            }
        }
    }

    return (
        <View style={styles.containerSearchResults}>
            <FlatList data={data} renderItem={({item} ) => {
                    return(
                        <CheckData data={item} browser={nav} />
                    )
                }} 
            />
        </View>
    )
}

export default SearchResults;