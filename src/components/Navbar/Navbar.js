import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//icon
import { FaShoppingBasket } from "react-icons/fa";

//context
import { Cart_context } from "../../Context/CartContextProvider";

export default function Navbar() {
    const cart_data = useContext(Cart_context);
    const { state } = cart_data;
    return (
        <Container>
            <Link to="/cart">
                <Cart_button>
                    <FaShoppingBasket />
                    <span>{state.products_count}</span>
                </Cart_button>
            </Link>
        </Container>
    );
}

//styling
const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 4rem;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    box-shadow: 0 0 5px 5px silver;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 2rem;
    > a {
        text-decoration: none;
    }
`;
const Cart_button = styled.button`
    height: 3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bolder;
    > svg {
        font-size: 2rem;
        margin-right: 0.5rem;
        color: #ff0059;
    }
    color: #235fff;
    display: flex;
    align-items: center;
    transition: 200ms;
    border-radius: 2rem;
    padding: 1rem;
    &:hover {
        background: radial-gradient(silver, transparent);
    }
`;
