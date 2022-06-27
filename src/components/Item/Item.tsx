import { TableCell, TableRow } from "@mui/material";
import { ItemAPI } from "../List/listAPI";
import styled from "styled-components";

interface ItemProps {
    data: ItemAPI;
}

const StyledTableRow = styled(TableRow)<{ background: string }>`
    background-color: ${(props) => props.background};
`;

export default function Item({ data }: ItemProps) {
    const { id, color, year, name } = data;

    return (
        <StyledTableRow background={color} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{year}</TableCell>
        </StyledTableRow>
    );
}
