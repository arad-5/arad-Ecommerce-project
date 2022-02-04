import React from "react";
import styled, { keyframes } from "styled-components";
export default function Loading() {
    return <Container></Container>;
}

//💅🏻styling
const breatheAnimation = keyframes`
 100% { background-color: #235fff;box-shadow: 0 0 10px 1px #235fff;}
`;
const Container = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: red;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: #ff0059;
    animation: ${breatheAnimation} 1s ease-in alternate-reverse infinite;
    box-shadow: 0 0 10px 1px #ff0059;
`;
