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
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                       <a (click)="editUser(user)"><i class="glyphicon glyphicon-edit"></i> </a>
                    </td>
                    <td>
                        <i class="glyphicon glyphicon-remove clickable" (click)="deleteUser(user)" ></i>
                    </td>
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
    users: User[];
    error: any;

    constructor(private _service: UserService,  private router: Router) { }

    ngOnInit() {
        this._service.getUsers()
            .then(users => this.users = users)
            .catch(error => this.error = error);
    }

    editUser(user: User) {
        this.router.navigate(['/users', user.id]);
    }

    deleteUser(user: User) {
        confirm('Are you sure to delete the User :' + user.name + " ?");

        this._service.deleteUser(user.id)
            .then(res => {
                this.users = this.users.filter(h => h !== user);
            })
            .catch(error => this.error = error);
    }

}