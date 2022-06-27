import React from "react";
import { Container } from "@mui/material";
import List from "./components/View/View";
import Buttons from "./components/Buttons/Buttons";
import { useAppSelector } from "./app/hooks";
import { selectPage } from "./components/Buttons/buttonsSlice";
import Filter from "./components/Filter/Filter";

function App() {
    const currentPage = useAppSelector(selectPage);

    return (
        <Container>
            <>
                <Filter />
                <List />
                {currentPage}
                <Buttons />
            </>
        </Container>
    );
}

export default App;
