import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerUser:{
        flex: 1,
        position: 'relative',
        marginTop: 40
    },

    boxDataUser:{
        padding: 20,
        gap: 10
    },

    boxNameSobrenomeEmailPhone:{
        flexDirection: 'row',
        gap: 10
    },

    nameSobrenomeEmailPhone:{
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5
    }
});

export default styles;