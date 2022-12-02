import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

  }
  getProductsId() {
    let id = 1;
    const url = 'https://api.escuelajs.co/api/v1/products'
    const response = this.httpClient.get(url + '/' + id).subscribe(
      Response => {

        console.log(response);
      }
    )
  };

  createProducts(){
    let data = {
      title: String,
      price: Number.toString,
      descripcion: String,
      images: ['imagenes'].toString,
      category: 1,
      }
    const url = 'https://api.escuelajs.co/api/v1/products'
    const response = this.httpClient.post(url, data).subscribe(
      Response => {

        console.log(response);
      }
    )
  }

  updateProducto(){
    let data = {
      title: 'quinto a',
      price: Number.toString,
      descripcion: 'geovanny vera',
      images: ['imagenes'].toString,
      category: 1,
      }
    const url = 'https://api.escuelajs.co/api/v1/products'
    const response = this.httpClient.put(url, data).subscribe(
      Response => {

        console.log(response);
      }
    )
  }
  
  deleteProducto(){
    let data = {
      title: 'quinto a',
      price: Number.toString,
      descripcion: 'geovanny vera',
      images: ['imagenes'].toString,
      category: 1,
      }
    const url = 'https://api.escuelajs.co/api/v1/products'
    const response = this.httpClient.delete(url+ '/' + data).subscribe(
      Response => {

        console.log(response);
      }
    )
  }



}
