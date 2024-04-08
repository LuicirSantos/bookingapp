import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerSearchResults: {
        padding: 15
    },
    imgSearchResults:{
        width: 70,
        height: 70
    },

    containerResults:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },

    textPlace:{
        fontSize: 15,
        fontWeight: "bold"
    },

    textShortDescription:{
        marginVertical: 4
    },

    textpropertiesLenth:{
        color: "gray",
        fontSize: 15
    }
});

export default styles;