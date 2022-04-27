export interface SearchDataInt {
    text: string;
    active: boolean;
    promo: boolean;
}

export interface SingleProductInt {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
}

export interface MetaInt {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface LinksInt {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface FetchedObjects {
    items: SingleProductInt[];
    meta: MetaInt;
    links: LinksInt;
}