import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAmenities:{
        padding: 10
    },

    textPopularFacilities:{
        fontSize: 17,
        fontWeight: '600'
    },

    boxLoopTagsServices:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    boxPopularTags:{
        margin: 10,
        backgroundColor: '#007fff',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 25
    },

    textPopularTags:{
        textAlign: 'center',
        color: 'white'
    }
});

export default styles;