import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../users.service';

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
    registerForm: FormGroup;

    constructor(private _userService: UserService, private formBuilder: FormBuilder, private _router: Router) { }

    ngOnInit() {

        this.title = "Add User";

        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            lastname: ['', Validators.required],
            address: this.formBuilder.group({
                street: ['', Validators.minLength(3)],
                city: ['', Validators.maxLength(10)],
                zip: ['', Validators.pattern('[A-Za-z]{5}')]
            })
        });

    }

    save() {
        this._userService.addUser(this.user);
        this._router.navigate(['/users']);
    }
}