import { Component, OnInit } from '@angular/core';
import {UserService} from './app.service';
import { User } from './user';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    users: User[];

    constructor(private _service: UserService) { }

    ngOnInit() {
       this.users = this._service.getUsers();
    }
  }
