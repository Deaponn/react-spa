import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectFilter } from "../Filter/filterSlice";
import { fetchNewItems } from "./viewSlice";

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

    return (
        <>
            {itemList.length !== 0
                ? filterValue !== ""
                    ? itemList.filter((item) => item.id === parseInt(filterValue)).map((item) => <div key={item.id}>{item.name}</div>)
                    : itemList.map((item) => <div key={item.id}>{item.name}</div>)
                : [0, 1, 2, 3, 4].map((number) => <Skeleton key={number} variant="text" animation="wave" />)}
        </>
    );
}
