

export interface ICardButton {
    img: string,
    text: string,
    count: number;
    path: string
}

export interface ICategory {
    id: number,
    img: string,
    text: string,
    path: string,
    count: number;
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

export interface ISpecProduct{
    name: string;
    value: string;
}

export interface IProduct{
    id: number,
    name: string,
    price: number,
    img: string[],
    subcategoryname: string,
    description: string,
    specifications: ISpecProduct[];
}

export interface ICardProduct{
    id: number,
    name: string,
    price: number,
    img: string,
    subcategory: number;
}

export type СonditionBottom = "Description" | "Specification";

export type TControlSidebar = "PersonalInfo" | "HistoryBuy" | "AdminPanel";

export interface IPersonalInfo{
    FIO: string,
    nickname: string,
    numberPhone: Number, 
    address: string, 
    email: string,
    birthday: Date
}

