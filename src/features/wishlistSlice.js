import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            state.wishlist = [...state, action.payload]
        },
        removeWishlist: (state, action) => {
            state.wishlist = state.filter(item => item.id !== action.payload)
        }
    }
})
export {wishlistSlice}
export const {addWishlist, removeWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer