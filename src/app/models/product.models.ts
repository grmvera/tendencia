import { CategoryModel } from "./category.models";

export interface ProductModel{
    id:number,
    title:string,
    price:number,
    descripcion:string,
    images:[string],
    category: CategoryModel;

}


export interface createProduct extends Omit<ProductModel, 'id' | 'category'>{

    categoriId:number;

}

export interface UpdateProduct extends Omit<ProductModel, 'id' | 'category'>{

    categoriId:number;
    
}