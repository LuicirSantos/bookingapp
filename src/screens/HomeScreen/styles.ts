import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const styles = StyleSheet.create({
    constainerHome: {
        marginTop: 40
    },

    testAux: {
        margin: 20,
        borderColor: '#FFC72C',
        borderWidth: 3,
        borderRadius: 6
    },

    containerInputDatas: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        borderColor: '#FFC72C',
        borderWidth: 2,
        borderRadius: 6,
        borderStyle: 'solid',
        paddingVertical: 15
    },

    buttonDone: {
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        width: 90,
        padding: 10,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 50
    },

    textDone: {
        color: 'white',
        textAlign: 'center'
    },

    buttonSearch: {
        paddingHorizontal: 10,
        borderColor: '#FFC72C',
        borderWidth: 2,
        paddingVertical: 15,
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor
    },

    textSearch: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },

    // Modal reserva people

    modalReservedPeople: {
        position: 'relative', 
        bottom: 0, 
        top: '60%', 
        width: '100%', 
        margin: 0
    },

    modalContent:{
        flex: 1, 
        backgroundColor: 'white'
    },

    guestsTitle:{
        textAlign: 'center', 
        paddingVertical: 10, 
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5'
    },

    containerSetRooms:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 10
    },

    containerAddOrRemoveRooms:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    buttonLessAndMore:{
        width: 26,
        height:26,
        borderRadius: 13,
        borderColor: '#BEBEBE',
        backgroundColor: '#E0E0E0'
    },

    buttonAndMoreLessText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 6,
        
    },

    qtdRooms:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 6
    },

    modalTextRooms:{
        fontSize: 18,
        fontWeight: '500'
    },
    // end modal

    advertisingPhrase:{
        marginHorizontal: 20,
        fontSize: 17,
        fontWeight: '500'
    },

    loyaltyProgram:{
        width: 200,
        height: 150,
        marginTop: 10,
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10
    },

    loyaltyProgramTitle:{
        color: STYLES_COLOR_GLOBAL.secondary,
        fontSize: 15,
        fontWeight: 'bold'
    },

    loyaltyProgramDescription:{
        color: STYLES_COLOR_GLOBAL.secondary,
        fontSize: 15,
        fontWeight: '500'
    }
});

export default styles;