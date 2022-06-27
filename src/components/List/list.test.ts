import listReducer, { Data } from "./listSlice";
import { fetchItems, ResInterface } from "./listAPI";

const sampleAPIData: ResInterface = {
    page: 1,
    per_page: 5,
    total: 12,
    total_pages: 3,
    data: [
        { id: 1, name: "cerulean", year: 2000, color: "#98B2D1", pantone_value: "15-4020" },
        { id: 2, name: "fuchsia rose", year: 2001, color: "#C74375", pantone_value: "17-2031" },
        { id: 3, name: "true red", year: 2002, color: "#BF1932", pantone_value: "19-1664" },
        { id: 4, name: "aqua sky", year: 2003, color: "#7BC4C4", pantone_value: "14-4811" },
        { id: 5, name: "tigerlily", year: 2004, color: "#E2583E", pantone_value: "17-1456" },
    ],
    support: { url: "https://reqres.in/#support-heading", text: "To keep ReqRes free, contributions towards server costs are appreciated!" },
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(sampleAPIData),
    })
) as jest.Mock;

describe("list reducer", () => {
    const initialState: Data = {
        items: [],
        status: "idle",
        error: null,
    };

    it("should handle initial state", () => {
        expect(listReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });
});

describe("API calls", () => {
    it("should call and return API data", async () => {
        const response = await fetchItems(1)
        expect(response).toEqual(sampleAPIData);
    });
});
