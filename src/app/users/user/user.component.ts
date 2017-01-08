import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
    selector: 'user-info',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: []
})


export class UserComponent {
    @Input() userInfo: User;
    @Output() ratingClicked = new EventEmitter<boolean>();
    
    constructor() { }
 
    onClick(): void {
        this.userInfo.isFavorited = !this.userInfo.isFavorited;
        this.ratingClicked.emit(this.userInfo.isFavorited);
    }
    
    setUserAsFavorite(user: User){
        user.isFavorited = !user.isFavorited;
    }
}