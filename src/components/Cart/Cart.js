import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//components
import SelectedProducts from "./SelectedProducts";
import Empty from "./Empty";
//context
import { Cart_context } from "../../Context/CartContextProvider";
import Facture from "./Facture";

export default function Cart() {
    const cart_data = useContext(Cart_context);
    const { state } = cart_data;
    return (
        <>
            {!!state.selected_items.length ? (
                <Container>
                    <Products>
                        <h1>Products</h1>
                        {state.selected_items.map((item) => (
                            <SelectedProducts key={item.id} productData={item} />
                        ))}
                    </Products>
                    <Facture />
                </Container>
            ) : (
                <Empty />
            )}
        </>
    );
}

//💅🏻styling
const Container = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 1rem;
`;
const Products = styled.div`
    width: 70%;
    max-width: 45rem;
    min-height: 50vh;
    @media (max-width: 1071px) {
        padding-bottom: 4rem;
    }
`;
