import { useContext } from "react";
import styled from "styled-components";

// context
import { Cart_context } from "../../Context/CartContextProvider";

export default function Facture() {
    const cart_data = useContext(Cart_context);
    const { state } = cart_data;
    const { products_count, total_price, selected_items } = state;
    return (
        <Container>
            <Quantity>
                Products quantity: <span>{products_count}</span>
            </Quantity>
            <Sum>
                <p>Sum:</p>
                {selected_items.map((product, i) => {
                    return (
                        <div key={i}>
                            {i + 1}:<span>${product.sum_price}</span>
                        </div>
                    );
                })}
            </Sum>
            <Total_price>
                <label>Total Price :</label>
                <div>${total_price}</div>
            </Total_price>
        </Container>
    );
}
//💅🏻styling
const Container = styled.div`
    width: 20rem;
    background-color: #235fff;
    border-radius: 2rem;
    padding: 1rem;
    color: #fff;
    position: relative;
    @media (max-width: 1071px) {
        width: 90%;
    }
`;
const Quantity = styled.div`
    font-size: 1.2rem;
    > span {
        font-size: 2rem;
        margin-left: 2rem;
        font-weight: bold;
    }
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
`;
const Sum = styled.div`
    > p {
        margin-top: 1rem 0;
        font-size: 1.2rem;
    }
    > div {
        > span {
            font-size: 1.2rem;
            margin-left: 1rem;
        }
    }
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
`;
const Total_price = styled.div`
    > label {
        display: block;
        margin: 0.5rem 0;
    }
    > div {
        display: inline-block;
        padding: 0.5rem;
        background-color: #fff;
        text-align: center;
        color: #ff0059;
        font-size: 1.3rem;
        font-weight: bold;
        border-radius: 1rem;
    }
`;
