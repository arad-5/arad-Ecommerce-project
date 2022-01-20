import React, { createContext, useReducer } from "react";
const initialState = {
    products_count: 0,
    total_price: 0,
    selected_items: [],
    checkout: false,
};
const reducer = (state, action) => {
    const current_product = state.selected_items[state.selected_items.findIndex((item) => item.id === action.productData.id)];
    switch (action.type) {
        case "ADD_PRODUCT":
            if (!state.selected_items.find((item) => item.id === action.productData.id)) {
                state.selected_items.push({
                    ...action.productData,
                    quantity: 1,
                });
            }
            return {
                ...state,
            };
        case "INCREASE_PRODUCT_QUANTITY":
            current_product.quantity++;
            return {
                ...state,
            };
        case "DECREASE_PRODUCT_QUANTITY":
            current_product.quantity > 1 && current_product.quantity--;
            return {
                ...state,
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                selected_items: state.selected_items.filter(item => item.id !== action.productData.id)
            }
        case "TOTAL_COUNTER":
            state.products_count = 0;
            state.selected_items.forEach(item => {
                state.products_count += item.quantity;
                console.log(state.products_count);
            })
        default:
            return state;
    }
};
export const Cart_context = createContext();
export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Cart_context.Provider value={{ state, dispatch }}>{children}</Cart_context.Provider>;
}
