import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const styles = StyleSheet.create({
    containerBooking:{
        marginTop: 40
    },

    boxTitlePorpertyInfo:{

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

    containerReservation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
        marginVertical:10,
        marginHorizontal:20,
        borderColor: "#E0E0E0",
        borderWidth: 1,
        padding: 14,
        borderRadius: 6
    },

    textNameReservation:{
        fontSize: 24, 
        fontWeight: "bold"
    },

    containerStatus:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7,
    },

    textRating:{
        marginLeft: 3, 
        fontSize: 15, 
        fontWeight: "400"
    },

    containerLevelPremium:{
        padding: 6,
        width: 100,
        backgroundColor: "#0039a6",
        marginLeft: 4,
        borderRadius: 5,
    },

    textNivelPremium:{
        textAlign: "center",
        color: "white",
        fontSize: 13,
        fontWeight: "400",
    },

    deleteReservation:{
        justifyContent: 'center'
    }
});

export default styles;