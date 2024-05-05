import { StyleSheet } from "react-native";
import { STYLES_COLOR_GLOBAL } from "../../styles/styles";

const size = 18;

const styles = StyleSheet.create({
    containerRegister:{
        marginTop: 40,
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center'
    },

    containerEmailPasswordPhone:{
        alignSelf: 'center',
        width: '80%',
        gap: 20
    },

    fieldEmailRegister:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: size
    },

    fieldPasswordRegister:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: size
    },

    fieldPhoneRegister:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: size
    },

    buttonResgister:{
        backgroundColor:STYLES_COLOR_GLOBAL.primatyColor,
        padding: 15,
        borderRadius: 7
    },

    buttonTextResgister:{
        textAlign: 'center',
        color: 'white',
        fontSize: size,
        fontWeight: 'bold'
    },

    buttonBackLogin:{
        marginTop: 20
    },

    buttonTextBackLogin:{
        textAlign: 'center',
        color: 'gray',
        fontSize: 15
    }
});

export default styles;