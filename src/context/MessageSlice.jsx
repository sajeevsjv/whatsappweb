import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name :"message",
    initialState:{
        messages: [],
        status: "idle",
        error: null
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        }   
    },
    extraReducers: (builder) => {   
        builder
            .addCase('fetchMessages/pending', (state) => {
                state.status = 'loading';
            })
            .addCase('fetchMessages/fulfilled', (state, action) => {
                state.status = 'succeeded';
                state.messages = action.payload;
            })
            .addCase('fetchMessages/rejected', (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})
export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;