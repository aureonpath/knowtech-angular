import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import { Validators } from '@angular/forms';
import {User} from './user';
import {UserService} from './users.service';

@Component({
    templateUrl: 'user-form.component.html',
    selector: 'user-form',
    providers: [UserService]
})
export class UserFormComponent implements OnInit {
    form: any;
    title: string;
    user = new User();
    id: number;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _userService: UserService) { }

    ngOnInit() {
        this._activatedRoute.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.id = +params['id'];
            }
        });
        this.title = this.id ? "Edit User" : "Add User";
        if (!this.id) {
            return;
        }
        this._userService.getUser(this.id.toString())
            .then(user => {
                this.user = user;
                if (user === undefined) {
                    this._router.navigate(['/not-found']);
                }
            });

    }

    save() {
        if (this.id) {
            this._userService.editUser(this.user, this.id.toString())
                .then(x => {
                    this._router.navigate(['/users']);
                });
        } else {
            this._userService.addUser(this.user)
                .then(x => {
                    this._router.navigate(['/users']);
                });
        }
    }
}