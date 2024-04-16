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
    },

    modalPlaces: {
        // borderWidth: 1,
        // borderColor: 'white',
        position: 'relative',
        margin: 0
        // position: 'absolute',
        // bottom: 0,
        // zIndex: 10,
        // width: "90%",
        // height: 300,
        // width: '100%', 
        // margin: 0
    },

    boxSortAndFilter:{
        flex: 1,
        flexDirection: 'row'
    },

    boxTitle:{
        marginVertical: 10,
        flex: 2,
        height: 300,
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0'
    },

    sortAndFilter:{
        textAlign: 'center', 
        paddingVertical: 10, 
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5'
    },

    modalContent:{
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderTopColor: '#ededed',
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        right: '0%',
        top: '50%',
        backgroundColor: 'white'
        // flex: 1, 
        // backgroundColor: 'white'
    },

    boxFilter:{
        flex: 3, 
        margin: 3,
        marginLeft: 15
    },

    buttonFilter:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    }
});

export default styles;