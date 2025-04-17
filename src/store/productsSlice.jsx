import { createSlice } from "@reduxjs/toolkit";

const productSlice =createSlice({
        name:"products",
        initialState:{
                products:[],
                searchTerm: '',
                selectedCategory: '',
                status:'idle',
                error:null
        },
        reducers:{
                setProducts(state,action){
                        state.products = action.payload;
                },
                setSearchTerm(state, action) {
                        state.searchTerm = action.payload;
                    },
                    setCategory(state, action) {
                        state.selectedCategory = action.payload;
                    }
        }
});

export const {setProducts,setSearchTerm,setCategory} = productSlice.actions;

export default productSlice.reducer;

export const selectFilteredProducts = (state) => {
        const { products, searchTerm, selectedCategory } = state.products;
        return products.filter(product => {
            return (
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (!selectedCategory || product.category === selectedCategory)
            );
        });
    };
