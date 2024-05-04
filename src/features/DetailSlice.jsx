import { createSlice } from "@reduxjs/toolkit";
const initialState={
    detail:[],
};

export const detailSlice=createSlice({
    name:"detailslice",
    initialState,
    reducers:{
        showData:(state,action)=>{
            state.detail=action.payload;
        },
    },
})

export const{showData}=detailSlice.actions;
export default detailSlice.reducer;