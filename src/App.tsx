import React from "react";
import { Container } from "@mui/material";
import List from "./components/List/List";
import Buttons from "./components/Buttons/Buttons";
import Filter from "./components/Filter/Filter";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

    & > * {
        margin-top: 10px;
    }
`;

function App() {
    return (
        <Container>
            <StyledDiv>
                <Filter />
                <List />
                <Buttons />
            </StyledDiv>
        </Container>
    );
}

export default App;
