import buttonsReducer, { increment, decrement } from "./buttonsSlice";

describe("counter reducer", () => {
    const initialState = 2;
    it("should handle initial state", () => {
        expect(buttonsReducer(undefined, { type: "unknown" })).toEqual(1);
    });

    it("should handle increment", () => {
        const actual = buttonsReducer(initialState, increment());
        expect(actual).toEqual(3);
    });

    it("should handle decrement", () => {
        const actual = buttonsReducer(initialState, decrement());
        expect(actual).toEqual(1);
    });

    it("shouldn't navigate to page 0", () => {
        const firstPageState = 1;
        const actual = buttonsReducer(firstPageState, decrement());
        expect(actual).toEqual(1);
    });

    it("shouldn't navigate to page 4", () => {
        const lastPageState = 3;
        const actual = buttonsReducer(lastPageState, increment());
        expect(actual).toEqual(3);
    });
});
