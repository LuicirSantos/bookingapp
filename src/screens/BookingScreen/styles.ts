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
    }
});

export default styles;