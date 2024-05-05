import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const styles = StyleSheet.create({
    containerConfirmation:{
        marginTop: 40
    },

    boxTitleAndAssessmentAndDescription:{
        marginHorizontal: 12,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    boxTitlePorpertyInfo:{
        // flexDirection: 'row'
    },

    titlePropertyInfo:{
        fontSize: 25,
        fontWeight: 'bold'
    },

    boxRatingSubtitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 7
    },

    subtitle1:{
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        paddingHorizontal: 4,
        borderRadius: 5,
        width: 100
    },

    textPremiumLevel: {
        textAlign: "center",
        color: "white"
    },

    boxStatusTravel:{
        backgroundColor: '#17B169',
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 6
    },

    textStatusTravel:{
        color: 'white',
        fontSize: 13,
    },

    boxScheduledTrip:{
        margin: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 60
    },
    
    textScheduledTrip:{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 3
    },

    dateScheduledTrip:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007fff'
    },

    boxRoomsAndGuest:{
        margin: 12
    },

    textRoomsAndGuest:{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 3
    },

    amountRoomsAndGuest:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007fff'
    },

    buttonBowNow:{
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        width: "auto",
        padding: 10,
        marginHorizontal: 12,
        marginBottom: 20,
        borderRadius: 5
    },

    textBowNow:{
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;