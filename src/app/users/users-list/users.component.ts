import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './users.service';
import { UserComponent } from '../user/user.component';
import { User } from '../user';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UserService]
})


export class UsersComponent implements OnInit {
    users: User[];
    isFavoritedFilterActive: boolean = false;

    constructor(private _service: UserService, private router: Router) { }

    ngOnInit() {
        this.users = this._service.getUsers();
    }

    toggleFavoritedFilter() {
        this.isFavoritedFilterActive = !this.isFavoritedFilterActive;
    }

    setFavorite(isFavorite: boolean, user: User): void {
        user.isFavorited = isFavorite;
    }
}
