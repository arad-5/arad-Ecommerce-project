import React from "react";
import styled from "styled-components";
//icons
import { BsStarFill, BsPeopleFill } from "react-icons/bs";
export default function Rating({ rating }) {
    const RatingPercent = rating.rate * 10 * 2;
    return (
        <Container>
            <BsStarFill />
            <Info>
                <span>
                    {rating.rate}/5
                </span>
                <span>
                    <BsPeopleFill />
                    {rating.count}
                </span>
            </Info>
            <Bar>
                <RateShow width={RatingPercent}></RateShow>
            </Bar>
        </Container>
    );
}

//💅🏻 styling
const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    > svg {
        color: #f90;
        margin-right: 0.5rem;
    }
`;
const Bar = styled.div`
    width: 13rem;
    height: 1.5rem;
    border-radius: 1rem;
    background-color: #ddd;
`;
const RateShow = styled.div`
    height: 100%;
    width: ${(props) => props.width}%;
    background-color: #f90;
    background: linear-gradient(to top, #f90, #ffb35c);
    box-shadow: 0 5px 10px 1px #ff990082;
    border-radius: 1rem;
`;
const Info = styled.div`
    position: absolute;
    top: -2rem;
    &,
    > span {
        display: flex;
        align-items: center;
        color: #858585;
    }
    > span > svg {
        margin-right: 0.5rem;
    }
    > span:first-child {
        margin-right: 1rem;
        background-color: #f90;
        padding: 0 0.5rem;
        color: #fff;
        border-radius: 1rem;
    }
`;
