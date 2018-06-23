export class Shoes {
    id: number;
    color: string;
    modelo: string;
    album: string;
    description: string;
    detail: string[];
    price: number;
    properties: {
        piel: string;
        forro: string;
        suela: string;
        tallas: string;
    };
}