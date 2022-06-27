import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { handleInput, selectFilter } from "./filterSlice";

export default function Filter() {
    const filterValue = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

    return <TextField id="outlined-basic" label="Filter" color="secondary" variant="outlined" value={filterValue} onChange={(e) => dispatch(handleInput(e.target.value))} />;
}
