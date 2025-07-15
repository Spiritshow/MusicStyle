export interface ICategory {
    id: string,
    name: string
}

export interface ISubcategory{
    id: string,
    id_category: string,
    name: string,
    name_db: string,
    img: string
}