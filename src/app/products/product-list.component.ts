import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { templateJitUrl } from '@angular/compiler';
import { IProduct } from './product';
import { ProductService } from './product.service';

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
    showRaring: string = "";

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
    ];

    constructor(private productService: ProductService) {
    }

    onRatingClicked(massage: string): void {
        this.pageTitle = "Product List: " + massage;
    }

    onRatingHover(valueEmitted: string) {
        this.showRaring = valueEmitted;
    }


    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    togglePageTitle(): void {
        this.showName = !this.showName;
    }
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}