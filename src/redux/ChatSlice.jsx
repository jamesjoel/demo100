import { createSlice } from '@reduxjs/toolkit'

let ChatSlice = createSlice({
    name : "chat",
    initialState : [],
    reducers : {
        sendMsg(currentState, action){
            currentState.push(action.payload);
        }
    }
})

export let {sendMsg} = ChatSlice.actions;

export default ChatSlice.reducer;