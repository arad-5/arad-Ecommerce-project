import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
//import cart context
import { Cart_context } from "../../Context/CartContextProvider";

//helper functions
import { product_find_index, product_is_in_cart } from "../../helper/functions";

//icons
import { BiTrash } from "react-icons/bi";

const Card = ({ productData }) => {
    const { image, title, price } = productData;
    const cart_data = useContext(Cart_context);
    const { state, dispatch } = cart_data;
    const [products_counter, setProducts_counter] = useState(0);
    //dispatch
    const dispatchCallBack = (action_type) => {
        dispatch({ type: action_type, productData: productData });
        setTimeout(() => {
            setProducts_counter(state.selected_items[product_find_index(state, productData.id)].quantity);
        }, 10);
    };
    return (
        <Container>
            <Image src={image} alt={title} />
            <Info>
                <h3>{title}</h3>
                <span>${price}</span>
            </Info>
            <Cart_buttons>
                {!state.selected_items[product_find_index(state, productData.id)] ? (
                    <button onClick={() => dispatchCallBack("ADD_PRODUCT")}>Add to basket</button>
                ) : (
                    <div>
                        <button onClick={() => dispatchCallBack("DECREASE_PRODUCT_QUANTITY")}>-</button>
                        <span>{products_counter}</span>
                        <button onClick={() => dispatchCallBack("INCREASE_PRODUCT_QUANTITY")}>+</button>
                        <button onClick={() => dispatchCallBack("REMOVE_PRODUCT")}>
                            <BiTrash />
                        </button>
                    </div>
                )}
            </Cart_buttons>
        </Container>
    );
};

export default Card;

//styling
const Container = styled.div`
    width: calc(25% - 2rem);
    min-width: 18rem;
    height: 25rem;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 5px 10px silver;
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
        bottom: 2rem;
        right: 2rem;
    }
`;
const Cart_buttons = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    > button {
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
