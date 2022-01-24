import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

//context
import { products_context } from "../../Context/ProductsContextProvider";

//helper
import { find_index } from "../../helper/functions";
import CartProductControllButton_AddToBasket from "../shared/CartProductControllButton_AddToBasket";
//shared components
import Loading from "../shared/Loading";
import Rating from "../shared/Rating";
export default function ProductDetail() {
    const data = useContext(products_context);
    const [product, setProduct] = useState();
    const [id, setId] = useState(useParams().id);
    useEffect(() => {
        if (!!data.length) {
            setProduct(data[find_index(data, Number(id))]);
            console.log(data);
        }
    }, [data]);
    console.log(product);
    return (
        <Container>
            {!!product ? (
                <>
                    <Image src={product.image} alt={product.title} />
                    <Info>
                        <Title>{product.title}</Title>
                        <Category>
                            category: <span>{product.category}</span>
                        </Category>
                        <Rating rating={product.rating} />
                        <Description>{product.description}</Description>
                    </Info>
                    <Add>
                        <Price>${product.price}</Price>
                        <CartProductControllButton_AddToBasket productData={product} />
                    </Add>
                </>
            ) : (
                <Loading />
            )}
        </Container>
    );
}

//💅🏻styling
const Container = styled.main`
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;

`;
const Image = styled.img`
    /* margin: 0 auto; */
    width: 60%;
    max-width: 30rem;
    max-height: 20rem;
    object-fit: contain;
`;
const Info = styled.div`
    padding: 1rem;
    max-width: 50rem;
`;
const Title = styled.div`
    font-weight: 500;
    color: #606060;
    font-size: 1.5rem;
    @media (max-width: 665px) {
        font-size: 1rem;
    }
    `;
const Category = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    > span {
        color: #235fff;
        font-weight: 500;
    }
`;
const Price = styled.div`
    color: #fff;
    font-weight: bold;
    background-color: #ff0059;
    padding: 0.3rem 0.5rem;
    border-radius: 3rem;
    box-shadow: 0 0 10px 1px #ff0059;
`;
const Description = styled.div`
    color: #858585;
    margin-top: 2rem;
`;
const Add = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: #fff;
    box-shadow: 0 0 5px 5px silver;
    display: flex;
    > div {
        margin: auto;
    }
`;
