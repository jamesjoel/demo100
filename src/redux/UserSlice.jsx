import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

let AddData = createAsyncThunk("add", async(formData)=>{
    let response = await axios.post("http://localhost:3000/api/v1/user", formData);
    
    return response.data;
})

let FetchData = createAsyncThunk("fetch", async()=>{
    let response = await axios.get("http://localhost:3000/api/v1/user");
    return response.data;
})



let UserSlice = createSlice({
    name : "user",
    initialState : [],
    extraReducers : (builder)=>{
        builder.addCase(AddData.fulfilled, (currState, action)=>{
            currState.push(action.payload);
        })
        builder.addCase(FetchData.fulfilled, (currState, action)=>{
            return action.payload;
        })
    }
    // {
        
    //     [AddData.fulfilled] : (curState, action)=>{
    //         curState.push(action.payload);
    //     }
    // }
})

export default UserSlice.reducer;

export {AddData, FetchData};

