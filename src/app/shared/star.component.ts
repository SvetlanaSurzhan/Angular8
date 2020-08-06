import { Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    @Output() ratingHover: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    onHoverOver(): void {
        this.ratingHover.emit(`${this.rating}`);
    }
}