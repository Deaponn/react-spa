import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement, selectPage } from "./buttonsSlice";
import { Button, Container } from "@mui/material";
import { fetchNewItems } from "../View/viewSlice";

export default function Buttons() {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(selectPage);

    return (
        <Container>
            <Button
                onClick={() => {
                    dispatch(fetchNewItems(currentPage - 1));
                    dispatch(decrement());
                }}
                variant="outlined"
            >
                -
            </Button>
            <Button
                onClick={() => {
                    dispatch(fetchNewItems(currentPage + 1));
                    dispatch(increment());
                }}
                variant="outlined"
            >
                +
            </Button>
        </Container>
    );
}
