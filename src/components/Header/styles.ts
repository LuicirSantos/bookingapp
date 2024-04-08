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
    }
});

export default styles;