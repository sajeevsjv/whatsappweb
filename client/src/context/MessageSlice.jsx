import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [

        ],
        status: "idle",
        error: null
    },
    reducers: {
        addMessage: (state, action) => {
            const newMsg = {
                msg: action.payload.msg || "",
                sender: action.payload.sender || "user",
                timestamp:
                    () => {

                        const timestamp = Date.now();
                        const date = new Date(timestamp);

                        // Format as HH:MM AM/PM
                        const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        return timeString;
                    }
            }
            state.messages.push(newMsg);
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