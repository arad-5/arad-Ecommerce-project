import React, { useContext } from "react";
import styled from "styled-components";

//componetns
import CartProductControlButton from "./CartProductControlButton";

//import cart context
import { Cart_context } from "../../Context/CartContextProvider";

//helper
import { product_find_index } from "../../helper/functions";

export default function CartProductControllButton_AddToBasket({ productData }) {
    const cart_data = useContext(Cart_context);
    const { state, dispatch } = cart_data;

    //👇🏻 This is the context dispatch function which is going to be called by buttons with different action types
    const dispatchCallBack = (action_type) => {
        dispatch({ type: action_type, productData: productData });
        dispatch({ type: "TOTAL_COUNTER", productData: productData });
        dispatch({ type: "SUM_TOTAL_PRICE", productData: productData });
    };

    //👇🏻 This is the product in cart (the reason of using (logical &&) is because we don't have the data at first mount, so we say if it is exists then define the value)
    const selected_products = state.selected_items[product_find_index(state, productData.id)] && state.selected_items[product_find_index(state, productData.id)];

    return <Cart_buttons>{!selected_products ? <button onClick={() => dispatchCallBack("ADD_PRODUCT")}>Add to basket</button> : <CartProductControlButton productData={productData} />}</Cart_buttons>;
}

//💅🏻styling
const Cart_buttons = styled.div`
    > button {
        width: 14rem;
        color: #fff;
        border: 0;
        padding: 0.5rem 1rem;
        cursor: pointer;
        background-color: #235fff;
        border-radius: 0.5rem;
        font-size: 1rem;
        box-shadow: 0px 0px 10px #235fff;
        &:hover {
            box-shadow: 0px 0px 25px #235fff;
        }
        transition: 50ms;
        &:active {
            box-shadow: 0px 0px 0px #235fff;
        }
    }
`;
