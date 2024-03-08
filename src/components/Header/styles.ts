import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const styles = StyleSheet.create({
    containerTextHeader:{
        flexDirection: 'row',
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        padding: 10
    },

    textHeader:{
        flex: 2,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },

    containerTextHeader2:{
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },

    containerStays:{
        flexDirection: "row",
        alignItems: 'center',
        padding: 8,
        marginHorizontal: 5
    },

    textStays:{
        marginLeft: 8,
        fontWeight: "bold",
        color: "white",
        fontSize: 15
    }
});

export default styles;