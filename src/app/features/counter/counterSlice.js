import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}

export const counterReducer= createSlice({
    name: "counter",
    /**
     * Cause the name are same, so we can initial just the const
     */
    initialState,
    // be careful with singular and plural
    reducers: {
        /**
         * In redux, we can directly update the state value like this code
         */
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const {increment, decrement} = counterReducer.actions // be careful plural and singular
export default counterReducer.reducer