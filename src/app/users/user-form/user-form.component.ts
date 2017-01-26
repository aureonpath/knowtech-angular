import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs'
import { User } from '../user';
import { UserService } from '../users.service';
import {routerTransition} from '../../animation/router.animation';

@Component({
    templateUrl: 'user-form.component.html',
    selector: 'user-form',
    providers: [UserService],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class UserFormComponent implements OnInit {
    form: any;
    title: string;
    user: User;
    userForm: FormGroup;
    id: string;
    user$: Observable<User>;
    submitted: boolean = false;

    constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService, private fb: FormBuilder, private _router: Router) { }

    ngOnInit() {
        this._activatedRoute.params.forEach((params: Params) => {
            if (params['id']) {
                this.id = params['id'];
                console.log("id", this.id);
            }
        });

        this.userForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
            birthday: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            address: this.fb.group({
                street: ['', Validators.minLength(3)],
                suite: ['', Validators.minLength(3)],
                city: ['', Validators.maxLength(100)]
            }),
            website: ['', Validators.required]
        });

        this.title = this.id ? "Edit User" : "Add User";
        if (!this.id) {
            return;
        } else {
            this.user$ = this._userService.getUserById(this.id);
            this.user$.subscribe(
                user => this.user = user,
                () => { },
                () => {
                    this.userForm.patchValue(this.user);
                }
            );
        }

    }

    onSubmit(user: any) {
        console.log("", user);
        this.submitted = true;
        if (user.valid) {
            alert('todo bien');
            this.user$ = this._userService.updateUser(user.value, this.id);
            this.user$.subscribe(
                () => { },
                () => { },
                () => {
                    this._router.navigate(['/users']);
                }
            )
        }
    }
}