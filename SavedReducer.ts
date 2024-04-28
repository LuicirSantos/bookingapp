import { createSlice } from "@reduxjs/toolkit";

export type BookingReducerProp = {
    booking: any[];
}

export const SavedSlice = createSlice({
    name: 'booking',
    initialState: {
        booking: [],
    },
    reducers: {
        savedPlaces: (state: BookingReducerProp, action) => {
            state.booking.push({...action.payload});
        }
    }
});

export const {savedPlaces} = SavedSlice.actions;

export default SavedSlice.reducer;