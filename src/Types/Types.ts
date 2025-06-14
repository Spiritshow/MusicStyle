

export interface ICardButton {
    img: string,
    text: string,
    count: number;
}

export interface ICategory {
    id: number,
    img: string,
    text: string,
    path: string,
    count: number;
    types: ITypes[]
}

export interface ITypes {
    id: number,
    text: string,
    path: string,
    subtypes?: ISubTypes[];
}

export interface ISubTypes {
    id: number,
    text: string,
    path: string;
}

export interface IBrend {
    id: number,
    name: string,
    img: string;
}

export interface IProduct<T>{
    id: number,
    name: string,
    price: number,
    img: string,
    category: string,
    specifications: T;
}

export interface ICardProduct{
    id: number,
    name: string,
    price: number,
    img: string,
    category: string;
}