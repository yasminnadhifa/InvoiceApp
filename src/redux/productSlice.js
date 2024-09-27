import { createSlice } from "@reduxjs/toolkit";

const productData = [
    { id: 1, name: 'Bag', price: 10000, stock: 10, image: '/images/bag.jpg' },
    { id: 2, name: 'Handphone', price: 20000, stock: 5, image: '/images/hp.jpg' },
    { id: 3, name: 'Laptop', price: 15000, stock: 7, image: '/images/laptop.jpeg' }
];

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: productData,
        selectedProducts: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.selectedProducts.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.selectedProducts = state.selectedProducts.filter(product => product.id !== action.payload);
        },

    }
});

export const { addProduct, removeProduct, clearProducts } = productSlice.actions;

export default productSlice.reducer;