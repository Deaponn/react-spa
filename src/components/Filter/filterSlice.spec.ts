import filterReducer, { handleInput } from "./filterSlice";

describe("counter reducer", () => {
    const initialState = "";
    it("should handle initial state", () => {
        expect(filterReducer(undefined, { type: "unknown" })).toEqual("");
    });

    it("should handle number input", () => {
        const actual = filterReducer(initialState, handleInput("5"));
        expect(actual).toEqual("5");
    });

    it("shouldn't handle NaN input", () => {
        const actual = filterReducer(initialState, handleInput("a"));
        expect(actual).toEqual("");
    });
});
