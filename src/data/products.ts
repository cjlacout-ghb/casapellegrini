export type ItemStatus = 'Available' | 'Reserved' | 'Sold';

export interface Product {
    id: string;
    title: string;
    category: string;
    price: string;
    image: string;
    gallery: string[];
    status: ItemStatus;
    year: string;
    origin: string;
    dimensions: string;
    description: string;
}

export interface CatalogItem {
    id: string;
    name: string;
    description?: string | null;
    category: string;
    image_url: string;
    year?: string | null;
    origin?: string | null;
    dimensions?: string | null;
    material?: string | null;
    condition?: string | null;
    status: ItemStatus;
    price?: string | null;
    show_price?: boolean | null;
    created_at?: string;
}

export const products: Product[] = [];

export const categories = [
    'Muebles',
    'Relojes',
    'Arte',
    'Iluminación',
    'Espejos',
    'Objetos'
];
