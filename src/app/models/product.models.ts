import { CategoryModel } from "./category.models";

export interface ProductModel{
    id:number,
    title:string,
    price:number,
    descripcion:string,
    images:[string],
    category: CategoryModel;

}