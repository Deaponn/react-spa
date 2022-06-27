import Buttons from "./Buttons";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("pagination component", () => {
    it("renders properly", () => {
        render(
            <Provider store={store}>
                <Buttons />
            </Provider>
        );

        expect(screen).toBeTruthy();
    });
});
