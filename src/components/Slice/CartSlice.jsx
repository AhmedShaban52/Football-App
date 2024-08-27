import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, offer } = action.payload;
            const findProduct = state.items.findIndex(product => product.id === id);

            if (findProduct !== -1) {
                // If product already exists, increment quantity
                state.items[findProduct].quantity += 1;
            } else {
                // If product doesn't exist, add it to the cart
                state.items.push({ ...action.payload, quantity: 1 });
            }

            // Update total price
            state.totalPrice += parseFloat(offer);

            toast.success(`${action.payload.title} added to cart`);
        },
        incrementQuantity: (state, action) => {
            const { id, offer } = action.payload;
            const product = state.items.find(product => product.id === id);

            if (product) {
                // Increment quantity
                product.quantity += 1;
                // Update total price
                state.totalPrice += parseFloat(offer);
            }
        },
        decrementQuantity: (state, action) => {
            const { id, offer } = action.payload;
            const product = state.items.find(product => product.id === id);

            if (product && product.quantity > 1) {
                // Decrement quantity
                product.quantity -= 1;
                // Update total price
                state.totalPrice -= parseFloat(offer);
            } else if (product && product.quantity === 1) {
                // Remove the item from the cart if the quantity becomes 0
                const index = state.items.findIndex(item => item.id === id);
                state.items.splice(index, 1);
                // Update total price
                state.totalPrice -= parseFloat(offer);
            }
        },
        clear: (state, action) => {
            return {
              items: [],
              totalPrice: 0,
            };
          }
          
          
    },
});

export const { addToCart, incrementQuantity, decrementQuantity , clear } = cartSlice.actions;
export default cartSlice.reducer;
