import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const styles = StyleSheet.create({
    containerMapScreen:{
        marginTop: 40
    },

    mapView:{
        width:  '100%',
        height: '100%'
    },

    markerButton: {
        backgroundColor: STYLES_COLOR_GLOBAL.primatyColor,
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 4
    },

    markerText:{
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default styles;