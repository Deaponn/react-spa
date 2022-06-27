import Item from "./Item";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("item component", () => {
    it("renders properly with no data", () => {
        render(
            <Provider store={store}>
                <Item noData />
            </Provider>
        );

        expect(screen.getByText(/No item with specified Id exists/i)).toBeTruthy();
    });

    it("renders properly with data", () => {
        const data = {
            id: 33,
            name: "hello world",
            year: 2022,
            color: "#111111",
            pantone_value: "buzz",
        }

        render(
            <Provider store={store}>
                <Item data={data} />
            </Provider>
        );

        expect(screen.getByText(/33/i)).toBeTruthy();
        expect(screen.getByText(/hello world/i)).toBeTruthy();
        expect(screen.getByText(/2022/i)).toBeTruthy();
        expect(screen.getByTestId('row')).toHaveStyle(`background-color: #111111`)
    });
});
