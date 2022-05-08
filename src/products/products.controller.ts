import { Controller, Post, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{

    constructor(private readonly ProductsService: ProductsService)
    {}

    @Post()
    addProduct(@Body('title') productTitle: string, @Body('description') productDescription:string, @Body('price') productPrice: number){
       const generatedId = this.ProductsService.insertProduct(productTitle,productDescription, productPrice);
       return {id: generatedId}
    }
}