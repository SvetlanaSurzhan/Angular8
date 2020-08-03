import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { templateJitUrl } from '@angular/compiler';
import { IProduct } from './product';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product list for ";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    showName: boolean = false;
    listFilter: string = "cart";
    products: IProduct[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.9576,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2018",
            "description": "Standard two-button video game controller",
            "price": 35.9543,
            "starRating": 4.6,
            "imageUrl": "assets/images/xbox-controller.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    togglePageTitle():void{
        this.showName = !this.showName;
    }
    ngOnInit(): void {
        console.log("In OnInit");
    }
}