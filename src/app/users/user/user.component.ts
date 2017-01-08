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
    @Output() setFavoriteClicked = new EventEmitter<boolean>();
    
    constructor() { }
 
    setUserAsFavorite(): void {
        this.userInfo.isFavorited = !this.userInfo.isFavorited;
        this.setFavoriteClicked.emit(this.userInfo.isFavorited);
    }
}