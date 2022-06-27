export type ItemAPI = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

interface ResInterface {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ItemAPI[];
    support: {
        url: string;
        text: string;
    }
}

export async function fetchItems(page: number) {
    const response = await fetch(`https://reqres.in/api/products?per_page=5&page=${page}`)
    // await new Promise(r => setTimeout(r, 2000));
    return await response.json() as ResInterface
}