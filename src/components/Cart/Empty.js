import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import { BsShop } from "react-icons/bs";

export default function Empty() {
    return (
        <Container>
            <div>
                <article>Your cart is empty</article>
            </div>
            <div>
                <BsShop />
                <Link to="/store">
                    <button>Back to store</button>
                </Link>
            </div>
        </Container>
    );
}

//💅🏻styling
const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    > div,
    > div > a {
        margin-bottom: 2rem;
        display: block;
        text-align: center;
        font-weight: 500;
        text-decoration: none;
        color: #404040;
        font-size: 2rem;
        > svg {
            font-size: 8rem;
            border-radius: 50%;
            overflow: visible;
            padding: 2rem;
            transition: 200ms;
            &:hover {
                padding: 1rem;
            }
        }
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
            margin-top: 1rem;
        }
    }
`;
