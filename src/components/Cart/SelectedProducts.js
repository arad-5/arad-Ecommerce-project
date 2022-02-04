import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//shared components
import CartProductControlButton from "../shared/CartProductControlButton";
import Rating from "../shared/Rating";

export default function SelectedProducts({ productData }) {
    const { image, title, price, rating, id } = productData;
    
    return (
        <Product>
            <Image>
                <Link to={`/store/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </Image>
            <Info>
                <Link to={`/store/${id}`}>
                    <h2>{title}</h2>
                    <span>${price}</span>
                </Link>
                <CartProductControlButton productData={productData} />
                <Rating rating={rating} />
            </Info>
        </Product>
    );
}

//💅🏻styling
const Product = styled.div`
    min-height: 12rem;
    display: flex;
    justify-content: space-between;
    color: #606060;
     > img {
        display: block;
        height: 100%;
        object-fit: contain;
        margin-right: 2rem;
    }
    padding: 1rem 0;
    border-bottom: 1px solid red;
    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: stretch;
    }
`;
const Image = styled.div`
    margin-right: 1rem;
    width: 10rem;
    > a > img {
        display: block;
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 850px) {
        margin: 0 auto;
        width: auto;
        height: 10rem;
    }
`;
const Info = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 9rem;
    > a {
        text-decoration: none;
        color: #606060;
        &:hover {
            text-decoration: underline;
        }
        &:active {
            color: #ff0059;
        }
    }
    > a > h2 {
        font-size: 1.2rem;
    }
    > a > span {
        align-self: flex-end;
        font-weight: bold;
        font-size: 1.4rem;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 100rem;
        background-color: #235fff;
        color: #fff;
        @media (max-width: 540px) {
            right: 1rem;
            bottom: 4rem;
            left: auto;
        }
    }
    //👇🏻 control button
    > div {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
    @media (max-width: 850px) {
        padding-bottom: 10rem;
    }
    @media (max-width: 540px) {
        padding-bottom: 12rem;
    }
    > div:last-child {
        position: absolute;
        left: 0%;
        bottom: 5rem;
        @media (max-width: 540px) {
            bottom: 8rem;
        }
    }
`;
