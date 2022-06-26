import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Buttons from "../Buttons/Buttons";
import { selectPage } from "../Buttons/buttonsSlice";
import { fetchNewItems } from "./viewSlice";

export default function View() {
    const currentPage = useAppSelector(selectPage);
    const dispatch = useAppDispatch();
    const fetchStatus = useAppSelector((state) => state.items.status);

    useEffect(() => {
        if (fetchStatus === "idle") {
            dispatch(fetchNewItems(1));
        }
    }, [fetchStatus, dispatch]);

    return (
        <div>
            {currentPage}
            <Buttons />
        </div>
    );
}
