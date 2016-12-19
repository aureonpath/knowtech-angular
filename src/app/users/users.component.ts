import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './users.service';
import { User } from './user';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [UserService]
})


export class UsersComponent implements OnInit {
    users: User[];

    constructor(private _service: UserService,  private router: Router) { }

    ngOnInit() {
        this.users = this._service.getUsers();
    }

}