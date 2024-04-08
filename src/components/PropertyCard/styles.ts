import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPropertyCard:{
        margin: 15,
        flexDirection: "row",
        backgroundColor: "white"
    },

    containerDescription:{
        padding: 10
    },

    boxTextAndIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textName:{
        width: 200
    },

    subtitle1:{
        backgroundColor: "#6DB4EE",
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

    descriptionPropertyCard: {
        width: 210,
        marginTop: 6,
        color: "gray",
        fontWeight: "bold"
    },

    textInfoDescription: {
        marginTop: 4,
        fontSize: 15,
        fontWeight: "500"

    },

    boxPrice: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    textOldPrice: {
        color: "red",
        fontSize: 18,
        textDecorationLine: "line-through"
    },

    textNewPrice: {
        fontSize: 18
    },

    boxHotelRooms: {
        marginTop: 6
    },

    textRoom: {
        fontSize: 16,
        color: "gray"
    },

    amountBed: {
        fontSize: 16,
        color: "gray"
    },

    boxLimitedDeal: {
        backgroundColor: "#6082B6",
        paddingHorizontal: 4,
        borderRadius: 5,
        width: 180,
        marginTop: 5
    },

    textLimitedDeal: {
        textAlign: "center",
        color: "white"
    }
});

export default styles;