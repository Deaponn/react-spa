import { useAppDispatch } from "../../app/hooks";
import { Pagination } from "@mui/material";
import { fetchNewItems } from "../List/listSlice";

export default function Buttons() {
    const dispatch = useAppDispatch();

    return <Pagination count={3} onChange={(e, page) => dispatch(fetchNewItems(page))} color="secondary" />;
}
