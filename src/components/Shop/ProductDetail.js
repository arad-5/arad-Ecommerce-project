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

    return (
        <Container>
            {!!product ? (
                <>
                    <Image src={product.image} alt={product.title} />
                    <Info>
                        <Title>{product.title}</Title>
                        <Category>category: <span>{product.category}</span></Category>
                        <Price>${product.price}</Price>
                        <Description>{product.description}</Description>
                    </Info>
                    <Add>
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
    min-height: 100vh;
    display: flex;
`;
const Image = styled.img`
    margin: 0 auto;
    width: 60%;
    height:20rem;
    object-fit: contain;
`;
const Info = styled.div`
    padding: 1rem;
    margin-top: -10rem;
`;
const Title = styled.div`
    font-weight: 500;
    color: #858585;
    
`;
const Category = styled.div`
>span {
    color: #235fff;
    font-weight: 500;
}
`;
const Price = styled.div`
    color: #ff0059;
    font-weight: bold;
`;
const Description = styled.div`
color: #858585;
`;
const Add = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 6rem;
background:linear-gradient(to bottom , transparent , #ffffff40) ;
display: flex;
>div {
    margin: auto;
}
`