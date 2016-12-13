import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './users.service';
import { User } from './user';

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>
        <a routerLink="/users/new" class="btn btn-primary">Add User</a>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [`
            .clickable{
                cursor:pointer;
            }
        `],
    providers: [UserService]
})


export class UsersComponent implements OnInit {
    users: any;
    error: any;

    constructor(private _service: UserService,  private router: Router) { }

    ngOnInit() {
        this.users = this._service.getUsers();
    }

}