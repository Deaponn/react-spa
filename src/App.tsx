import React from "react";
// import { Counter } from "./features/counter/Counter";
import { Container } from "@mui/material";
import List from "./components/View/View";
import Buttons from "./components/Buttons/Buttons";
import { useAppSelector } from "./app/hooks";
import { selectPage } from "./components/Buttons/buttonsSlice";

function App() {
    const currentPage = useAppSelector(selectPage);

    return (
        <Container>
            <>
                <List />
                {currentPage}
                <Buttons />
            </>
        </Container>
    );
}

export default App;
