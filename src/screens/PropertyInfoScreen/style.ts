import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const styles = StyleSheet.create({
    containerPropertyInfo:{
        marginTop: 40
    },

    gridImage:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        // borderWidth: 1,
    },

    boxImage:{
        margin: 6,
        // borderWidth: 1,
        // borderColor: 'red'
    },

    buttonShowMore:{
        textAlign: 'center',
        justifyContent: 'center'
    },

    textShowMore:{
        textAlign: 'center',
        marginLeft: 20
    },

    boxTitlePorpertyInfo:{

    },

    titlePropertyInfo:{
        fontSize: 25,
        fontWeight: 'bold'
    },

    subtitle1:{
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        paddingHorizontal: 4,
        borderRadius: 5,
        width: 100
    },

    boxRatingSubtitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
         marginTop: 7
    },

    textPremiumLevel: {
        textAlign: "center",
        color: "white"
    },

    boxTitleAndAssessmentAndDescription:{
        marginHorizontal: 12,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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

    lineSpace:{
        borderColor: '#e0e0e0',
        borderWidth: 3,
        height: 1, 
        marginTop: 15
    },

    textInfoDescription: {
        marginTop: 10,
        fontSize: 17,
        fontWeight: "500",
        marginHorizontal: 12
    },

    boxPrice: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 5,
        gap: 8
    },

    textOldPrice: {
        color: "red",
        fontSize: 20,
        textDecorationLine: "line-through"
    },

    textNewPrice: {
        fontSize: 20
    },
});

export default styles;