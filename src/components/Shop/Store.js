import { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
//products context
import { products_context } from "../../Context/ProductsContextProvider";
//components
import Card from "./Card";
// shared components
import Loading from "../shared/Loading";
export default function Store() {
    const products = useContext(products_context);
    return <Main>{!!products.length ? products.map((product) => <Card key={product.id} productData={product} />) : <Loading />}</Main>;
}

//💅🏻styling
const Main = styled.main`
    @media (max-width: 1280px) {
        display: flex;
        justify-content: center;
    }
`;
