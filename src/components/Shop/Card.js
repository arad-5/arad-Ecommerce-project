import React, { useContext } from "react";
import styled from "styled-components";

//import cart context
import { Cart_context } from "../../Context/CartContextProvider";
import { Link } from "react-router-dom";
//helper functions
import { product_find_index } from "../../helper/functions";

//shared components
import CartProductControlButton from "../shared/CartProductControlButton";
import CartProductControllButton_AddToBasket from "../shared/CartProductControllButton_AddToBasket";

const Card = ({ productData }) => {
    const { image, title, price, id } = productData;
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
    return (
        <Container>
            <Link to={"/store/" + id}>
                <Image src={image} alt={title} />
            </Link>
            <Link to={"/store/" + id}>
                <Info>
                    <h3>{title}</h3>
                    <span>${price}</span>
                </Info>
            </Link>
            <Cart_buttons>
                <CartProductControllButton_AddToBasket productData={productData}/>
            </Cart_buttons>
        </Container>
    );
};

export default Card;

//💅🏻styling
const Container = styled.div`
    width: calc(25% - 2rem);
    min-width: 18rem;
    height: 30rem;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 5px 10px #c0c0c0b0;
    border-radius: 2rem;
    position: relative;
    @media (max-width: 639px) {
        width: 90%;
    }
    > a {
        text-decoration: none;
    }
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

    &:hover {
        text-decoration: underline;
    }
    &:active {
        color: #ff0059;
    }
`;
const Cart_buttons = styled.div`
    position: absolute;
    left: 50%;
    bottom: 2rem;
    width: 14rem;
    transform: translateX(-50%);
`;
