import { Component, OnInit } from '@angular/core';
import {UserService} from './app.service';
import { User } from './user';

@Component({
    selector: 'my-app',
    template: `
        <h1>Users</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.website }}</td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    users: User[];

    constructor(private _service: UserService) { }

    ngOnInit() {
       this.users = this._service.getUsers();
    }
  }
