import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPlacesScreen:{
        marginTop: 40
    },

    containerFilterSortMap:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        padding: 12,
        backgroundColor: 'white'
    },

    buttonFilterSortMap:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    textFilterSortMap:{
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 8
    },

    containerViewPlacesResults: {
        height: '85%',
        backgroundColor: "#F5F5F5",
        marginBottom: 50
    },

    listPlaces:{
        backgroundColor: '#f5f5f5',
        height: '87%'
    }
});

export default styles;