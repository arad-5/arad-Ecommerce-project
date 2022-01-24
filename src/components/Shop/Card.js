import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//shared components
import CartProductControllButton_AddToBasket from "../shared/CartProductControllButton_AddToBasket";
import Rating from "../shared/Rating";

const Card = ({ productData }) => {
    const { image, title, price, id, rating } = productData;
    console.log(productData);
    return (
        <Container>
            <Link to={"/store/" + id}>
                <Image src={image} alt={title} />
            </Link>
            <Link to={"/store/" + id}>
                <Info>
                    <h3>{title.length > 60 ? <>{title.slice(0 , 60)} <span style={{color: "#ff0059"}}>...</span></> : title}</h3>
                    <span>${price}</span>
                    <Rating_card>
                        <Rating rating={rating} />
                    </Rating_card>
                </Info>
            </Link>
            <Cart_buttons>
                <CartProductControllButton_AddToBasket productData={productData} />
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
    user-select: none;
    > h3 {
        font-weight: 600;
        user-select: auto;
    }
    > span {
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
const Rating_card = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 8rem;
`;
const Cart_buttons = styled.div`
    position: absolute;
    left: 50%;
    bottom: 2rem;
    width: 14rem;
    transform: translateX(-50%);
`;
