import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
};

export const cartSlice=createSlice({
    name:"addtocart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload)
        },
      
    },
})

export const{addToCart,removeItem,showDetails}=cartSlice.actions;
export default cartSlice.reducer;