import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const size = 18;

const styles = StyleSheet.create({
    containerLogin: {
        marginTop: 40,
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center'
    },

    containerLoginPassword:{
        alignSelf: 'center',
        width: '80%',
        // marginTop: 200,
        gap: 20
    },

    fieldEmailLogin:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: size
    },

    fieldEmaiPassword:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: size
    },

    buttonLogin:{
        backgroundColor:STYLES_COLOR_GLOBAL.primatyColor,
        padding: 15,
        borderRadius: 7
    },

    buttonTextLogin:{
        textAlign: 'center',
        color: 'white',
        fontSize: size,
        fontWeight: 'bold'
    },

    buttonCreateAccount:{
        marginTop: 20
    },

    buttonTextCreateAccount:{
        textAlign: 'center',
        color: 'gray',
        fontSize: 15
    }
});

export default styles;