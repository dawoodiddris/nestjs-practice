import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number){
        const productID = new Date().toString();
        const newProduct = new Product(productID, title, description, price);
        this.products.push(newProduct);
        return productID;
    }
}