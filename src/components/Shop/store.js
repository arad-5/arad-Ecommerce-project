import React, { useContext } from "react";

//products context
import { products_context } from "../../Context/ProductsContextProvider";

//styled components
import styled from "styled-components";

//components
import Card from "./Card";

//styling
const Store_container = styled.main`
    margin: 0 auto;
    max-width: 1350px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1350px) {
      justify-content: center;
    }
`;

export default function Store() {
    const products = useContext(products_context);
    return (
        <Store_container>
            {products.map((product) => (
                <Card key={product.id} productData={product}/>
            ))}
        </Store_container>
    );
}
