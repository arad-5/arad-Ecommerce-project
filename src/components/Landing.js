import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Landing() {
    return (
        <Main>
            <Link to="/store">
                <button>Store</button>
            </Link>
        </Main>
    );
}

//💅🏻 styling
const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    > a > button {
        width: 14rem;
        color: #fff;
        border: 0;
        padding: 0.5rem 1rem;
        cursor: pointer;
        background-color: #235fff;
        border-radius: 0.5rem;
        font-size: 1rem;
        box-shadow: 0px 0px 10px #235fff;
        &:hover {
            box-shadow: 0px 0px 25px #235fff;
        }
        transition: 50ms;
        &:active {
            box-shadow: 0px 0px 0px #235fff;
        }
    }
`;
