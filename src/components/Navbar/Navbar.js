import React from "react";
import styled from "styled-components";
import {Link} from 
//styling
const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 5rem;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    box-shadow: 0 0 5px 5px  silver;
`;
export default function Navbar() {
    return <Container>
      <Link to="/cart"></Link>
    </Container>;
}
