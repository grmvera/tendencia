import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(
    private httpClient : HttpClient,
    private productoHttpsService : ProductHttpService,
    ) {}

  
  ngOnInit(): void {
    //this.createProduct(9);
    //this.getProducts();
    //this.getProductsId();
    //this.updateProduct();
    //this.deleteProduct(9);
  }

  private url: string = "https://api.escuelajs.co/api/v1/products";

  data = {

    title: 'Geovanny Vera',
    price: 5,
    description: 'Quinto - A',
    images: [],
    categoryId: 1,
  }

  getProducts() {
    const url = `${this.url}`
    return this.httpClient.get(this.url)
  };

  getProductsId(id:number) {
    const url = `${this.url}`
    return this.httpClient.get(this.url)
  };

  createProduct(id:number) {
    const url = `${this.url}`
    return this.httpClient.post(this.url, this.data)
  }


  updateProduct() {
    const url = `${this.url}`
    return this.httpClient.put(this.url, this.data)
  }

  updateOne(id:number) {
    const url = `${this.url}`
    return this.httpClient.put(this.url, this.data)
  }

  deleteProduct(id:number) {
    const url = `${this.url}`
    return this.httpClient.delete(this.url)
  }
}
