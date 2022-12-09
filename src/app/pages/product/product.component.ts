import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private productHttpsService : ProductHttpService
  ) { }


  ngOnInit(): void {
    this.createProduct();
    // this.getProducts();
    //this.getProductsId();
    //this.updateProduct();
    this.deleteProduct();
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

    this.productHttpsService.getProducts().subscribe(response => {

      console.log(response);

    })
  };

  getProductsId() {

    this.productHttpsService.getProductsId(1).subscribe(response => {

      console.log(response);

    })
  };

  createProduct() {

    this.productHttpsService.createProduct(1).subscribe(
      response => {

        console.log('response');

      }
    );
  }


  updateProduct() {

    this.productHttpsService.updateProduct().subscribe(
      response => {

        console.log('response');

      }
    );
  }

  updateOne() {

    this.productHttpsService.updateOne(2).subscribe(
      response => {

        console.log('response');

      }
    );
  }

  deleteProduct() {
    
    this.productHttpsService.deleteProduct(8).subscribe(
      response => {

        console.log(response);

      }
    );
  }
}
