import React, { useContext } from "react";
import styled from "styled-components";
//context
import { Cart_context } from "../../Context/CartContextProvider";

//helper functions
import { product_find_index } from "../../helper/functions";

//icons
import { BiTrash } from "react-icons/bi";

export default function CartProductControlButton({ productData }) {
    const cart_data = useContext(Cart_context);
    const { state, dispatch } = cart_data;
    //👇🏻 This is the product quantity in cart (the reason of using (logical &&) is because we don't have the data at first mount,, so we say if it is exists then define the value)
    const product_count = state.selected_items[product_find_index(state, productData.id)] && state.selected_items[product_find_index(state, productData.id)].quantity;

    const dispatchCallBack = (action_type) => {
        dispatch({ type: action_type, productData: productData });

        dispatch({ type: "TOTAL_COUNTER", productData: productData });
        // 👇🏻 "SUM_PRICE" dispatch needs product data to sum (so if we dont have any product  ,,,, this will throw error, So we write statmeent that it will run sum total dispatch when the action type is not "REMOVE_PRODUCT")
        if (action_type !== "REMOVE_PRODUCT") {
            // 👇🏻 for sum prices ,, first when we add item we will have sum price as its own product price so we dont need to sum (so we use statement)
            if (action_type !== "ADD_PRODUCT") {
                dispatch({ type: "SUM_PRICE", productData: productData });
            }
        }
        dispatch({ type: "SUM_TOTAL_PRICE", productData: productData });
    };

    return (
        <Buttons>
            <button onClick={() => dispatchCallBack("DECREASE_PRODUCT_QUANTITY")}>-</button>
            {product_count && <span>{product_count}</span>}
            <button onClick={() => dispatchCallBack("INCREASE_PRODUCT_QUANTITY")}>+</button>
            <button onClick={() => dispatchCallBack("REMOVE_PRODUCT")}>
                <BiTrash />
            </button>
        </Buttons>
    );
}
//styling
const Buttons = styled.div`
    display: flex;
    align-items: center;

    > button {
        color: #fff;
        border: 0;
        width: 2rem;
        height: 2rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        cursor: pointer;
        background-color: #235fff;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        box-shadow: 0px 0px 10px #235fff;
        &:hover {
            box-shadow: 0px 0px 25px #235fff;
        }
        transition: 50ms;
        &:active {
            box-shadow: 0px 0px 0px #235fff;
        }
        &:last-child {
            background-color: #ff0059;
            width: 3rem;
            margin-left: 1rem;
            box-shadow: 0px 0px 10px #ff0059;
            &:hover {
                box-shadow: 0px 0px 25px #ff0059;
            }
            &:active {
                box-shadow: 0px 0px 0px #ff0059;
            }
        }
    }
    > span {
        margin: 0 0.5rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: #ff0059;
    }
`;
