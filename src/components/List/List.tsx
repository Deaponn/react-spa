import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectFilter } from "../Filter/filterSlice";
import Item from "../Item/Item";
import { fetchNewItems } from "./listSlice";

export default function View() {
    const fetchStatus = useAppSelector((state) => state.items.status);
    const itemList = useAppSelector((state) => state.items.items);
    const filterValue = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (fetchStatus === "idle") {
            dispatch(fetchNewItems(1));
        }
    }, [fetchStatus, dispatch]);

    const filteredList = filterValue !== "" ? itemList.filter((item) => item.id === parseInt(filterValue)) : itemList

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    filteredList.length === 0
                        ? <Item noData />
                        : filteredList.map((item) => <Item key={item.id} data={item} />)
                        }
                </TableBody>
            </Table>
            {itemList.length === 0 && [0, 1, 2, 3, 4].map((number) => <Skeleton key={number} variant="rectangular" animation="wave" height={53} />)}
        </TableContainer>
    );
}
