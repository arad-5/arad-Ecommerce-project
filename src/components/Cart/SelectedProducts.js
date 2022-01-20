import React from "react";
import styled from "styled-components";
import CartProductControlButton from "../shared/CartProductControlButton";
export default function SelectedProducts({ productData }) {
    const { image, title, description, price } = productData;
    return (
        <Product>
            <img src={image} alt={title} />
            <Info>
                <h2>{title}</h2>
                <span>${price}</span>
                <CartProductControlButton productData={productData} />
            </Info>
        </Product>
    );
}

//💅🏻styling
const Product = styled.div`
    height: 10rem;
    display: flex;
    justify-content: space-between;
    > img {
        height: 100%;
        margin-right: 2rem;
    }
    padding: 1rem 0;
    border-bottom: 1px solid red;
`;
const Info = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    > h2 {
        font-size: 1.2rem;
    }
    > span {
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
    }
    //👇🏻 control button
    >div {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
`;
