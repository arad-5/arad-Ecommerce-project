import React, { useContext } from "react";
import styled from "styled-components";

//products context
import { products_context } from "../../Context/ProductsContextProvider";

//components
import Card from "./Card";

export default function Store() {
    const products = useContext(products_context);
    return (
        <Main>
            {products.map((product) => (
                <Card key={product.id} productData={product} />
            ))}
        </Main>
    );
}

//💅🏻styling
const Main = styled.main`
    @media (max-width: 1280px) {
        display: flex;
        justify-content: center;
    }
`;
