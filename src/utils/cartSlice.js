import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {

        addItems: (state, action) => {
            //mutating the state here
            //Redux Toolkit uses immer BTS
            state.items.push(action.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        // orginalState = {items: ["pizza"]}
        clearCart: (state) => {
            // RTK - either Mutate the existing state or return a new state

            // state.items.length = 0; //originalState = []
            return { items: [] }; // this new object will be replaced inside orginalState = {items:[]}
        },

    },

});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;