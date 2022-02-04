import React, { createContext, useReducer } from "react";

const initialState = {
    products_count: 0,
    total_price: 0,
    selected_items: [],
    checkout: false,
};

const reducer = (state, action) => {
    //👇🏻 This is the porduct that called dispatch in store (so every time that we click the button in card this is the data of that card in selected items)
    const current_product = state.selected_items[state.selected_items.findIndex((item) => item.id === action.productData.id)];

    switch (action.type) {
        case "ADD_PRODUCT":
            if (!state.selected_items.find((item) => item.id === action.productData.id)) {
                state.selected_items.push({
                    ...action.productData,
                    quantity: 1,
                    sum_price: action.productData.price,
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
                selected_items: state.selected_items.filter((item) => item.id !== action.productData.id),
            };

        //👇🏻 This will be called in every button click in store cards (the main function of it is that it will sum every product qunatity for two reasons:
        // 1: we want to display the total products quantity live in navbar (inside the basket button)
        // 2: we want to also access the the quantity of all products )
        case "TOTAL_COUNTER":
            state.products_count = 0;
            state.selected_items.forEach((item) => {
                state.products_count += item.quantity;
            });
            return state;

        case "SUM_PRICE":
            const sum_price = current_product.quantity * current_product.price;
            current_product.sum_price = sum_price;
            return state;

        case "SUM_TOTAL_PRICE":
            let sum_total_price = 0;
            state.selected_items.forEach((product) => {
                sum_total_price += product.sum_price;
            });
            return {
                ...state,
                total_price: sum_total_price,
            };
        default:
            return state;
    }
};

//context provider
export const Cart_context = createContext();

export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Cart_context.Provider value={{ state, dispatch }}>{children}</Cart_context.Provider>;
}
