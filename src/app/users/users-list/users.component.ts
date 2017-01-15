import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../users.service';
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
    searchbox: string = '';

    constructor(private _service: UserService, private router: Router) { }

    ngOnInit() {
        let users$ = this._service.getUsers();
        users$.subscribe(
            usersResponse => this.users = usersResponse
        );
    }

    toggleFavoritedFilter() {
        this.isFavoritedFilterActive = !this.isFavoritedFilterActive;
    }

    setFavorite(isFavorite: boolean, user: User): void {
        user.isFavorited = isFavorite;
    }

    deleteUserAndReload(reloadedUsers$: Observable<User[]>): void {
        reloadedUsers$.subscribe(
            reloadedUsersResponse => this.users = reloadedUsersResponse,
            (error) => {console.log("error on reloadedUsers$.subscribe()", error)},
            () => {console.log("event received and subcribed")}
        )
    }

    newUser(){
        this.router.navigate(['/users/new']);
    }
}
