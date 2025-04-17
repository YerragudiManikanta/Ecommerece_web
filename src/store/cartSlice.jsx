import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
        name:"cart",
        initialState:{
                items:[]
        },
        reducers:{
                addItem(state,action){
                        const newItem =action.payload;
                        state.items.push(newItem);

                },
                removeItem(state,action){
                        state.items = state.items.filter(item => item.id !==action.payload);
                },
                increaseQty: (state, action) => {
                        const item = state.items.find(i => i.id === action.payload);
                        if (item) item.quantity = (item.quantity || 1) + 1;
                      },
                      decreaseQty: (state, action) => {
                        const item = state.items.find(i => i.id === action.payload);
                        if (item && item.quantity > 1) {
                          item.quantity -= 1;
                        }
                      }
        }
});

export const {addItem,removeItem,increaseQty,decreaseQty} = cartSlice.actions;

export default cartSlice.reducer