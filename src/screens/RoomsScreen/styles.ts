import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerRoomsScreen:{
        marginTop: 40
    },

    boxRoomsReservations:{
        margin: 10,
        backgroundColor: 'white',
        padding: 10
    },

    boxNameRooms:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    nameRooms:{
        color: '#007fff',
        fontSize: 17,
        fontWeight: '500'
    },

    textImmobile:{
        marginTop: 3,
        fontSize: 17
    },

    textFreeCancellation:{
        marginTop: 3,
        color: 'green',
        fontSize: 15
    },

    boxTextPricesRooms:{
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },

    textOldPricesRooms:{
        fontSize: 18,
        color: 'red',
        textDecorationLine: 'line-through'
    },

    textNewPricesRooms:{
        fontSize: 18
    },

    buttonRooms:{
        borderColor: '#007fff',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10
    },

    textRoomsSelect:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: "#007fff"
    },

    buttomSelected:{
        borderColor: '#318CE7',
        backgroundColor: '#F0F8FF',
        borderWidth: 2,
        width: '100%',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    textRoomSelected:{
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#318CE7',
        fontWeight: 'bold',
        fontSize: 16,
    },

    boxResultsReservations:{
        backgroundColor: '#007fff',
        padding: 8,
        marginBottom: 30,
        borderRadius: 3,
        marginHorizontal: 15
    },

    titleResultsReservations:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});

export default styles;