import React, { useContext } from "react";
import styled from "styled-components";

//components
import SelectedProducts from "./SelectedProducts";

//context
import { Cart_context } from "../../Context/CartContextProvider";
import Facture from "./Facture";

export default function Cart() {
    const cart_data = useContext(Cart_context);
    const { state } = cart_data;
    return (
        <Container>
            <Products>
                <h1>Products</h1>
                {state.selected_items.map((item) => (
                    <SelectedProducts key={item.id} productData={item} />
                ))}
            </Products>
            <Facture />
        </Container>
    );
}

//💅🏻styling
const Container = styled.main`
    display: flex;
    padding: 0 1rem;
`;
const Products = styled.div`
    width: 70%;
    max-width: 45rem;
    min-height: 50vh;
`;
