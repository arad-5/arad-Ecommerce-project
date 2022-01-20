import React, { useContext } from "react";
import styled from "styled-components";

//import cart context
import { Cart_context } from "../../Context/CartContextProvider";

//helper functions
import { product_find_index } from "../../helper/functions";

//shared components
import CartProductControlButton from "../shared/CartProductControlButton";


const Card = ({ productData }) => {
    const { image, title, price } = productData;
    const cart_data = useContext(Cart_context);
    const { state, dispatch } = cart_data;
    //👇🏻 This is the context dispatch function which is going to be called by buttons with different action types
    const dispatchCallBack = (action_type) => {
        dispatch({ type: action_type, productData: productData });
        dispatch({ type: "TOTAL_COUNTER", productData: productData });
    };

    //👇🏻 This is the product in cart (the reason of using (logical &&) is because we don't have the data at first mount, so we say if it is exists then define the value)
    const selected_products = state.selected_items[product_find_index(state, productData.id)] && state.selected_items[product_find_index(state, productData.id)];
    return (
        <Container>
            <Image src={image} alt={title} />
            <Info>
                <h3>{title}</h3>
                <span>${price}</span>
            </Info>
            <Cart_buttons>{!selected_products ? <button onClick={() => dispatchCallBack("ADD_PRODUCT")}>Add to basket</button> : <CartProductControlButton productData={productData}/>}</Cart_buttons>
        </Container>
    );
};

export default Card;

//styling
const Container = styled.div`
    width: calc(25% - 2rem);
    min-width: 18rem;
    height: 30rem;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 5px 10px #c0c0c0b0;
    border-radius: 2rem;
    position: relative;
`;
const Image = styled.img`
    height: 10rem;
    width: 100%;
    object-fit: contain;
`;
const Info = styled.div`
    height: 10rem;
    color: #707070;
    font-size: 1rem;
    h3 {
        font-weight: 600;
    }
    span {
        margin-left: 1rem;
        font-weight: bold;
        font-size: 1.3rem;
        position: absolute;
        bottom: 5rem;
        left: 1rem;
    }
`;
const Cart_buttons = styled.div`
    position: absolute;
    left: 50%;
    bottom: 2rem;
    width: 14rem;
    transform: translateX(-50%);
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
    //asdf
    > div {
        display: flex;
        align-items: center;
    }
    > div > button {
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
    > div > span {
        margin: 0 0.5rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: #ff0059;
    }
`;
