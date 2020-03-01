import { Component } from '@angular/core';

@Component({
    selector: 'ngx-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./style.scss']
})
export class CategoriesComponent {
    Categories: any[] = [
        {
            id: 1,
            image: 'https://placebeard.it/200x200',
            title: 'Category 1'
        }, 
        {
            id: 2,
            image: 'https://placebeard.it/200x200',
            title: 'Category 2'
        }, 
        {
            id: 3,
            image: 'https://placebeard.it/200x200',
            title: 'Category 3'
        },
        {
            id: 4,
            image: 'https://placebeard.it/200x200',
            title: 'Category 4'
        },
        {
            id: 5,
            image: 'https://placebeard.it/200x200',
            title: 'Category 5'
        },
    ];
}