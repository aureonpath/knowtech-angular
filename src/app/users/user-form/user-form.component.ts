import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable} from 'rxjs'
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
    id: string;
    registerForm: FormGroup;
    user$: Observable<User[]>;

    constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService, private formBuilder: FormBuilder, private _router: Router) { }

    ngOnInit() {
        this._activatedRoute.params.forEach((params: Params) => {
            if (params['id']) {
                this.id = params['id'];
                console.log("id", this.id);
            }
        });

        this.title = this.id ? "Edit User" : "Add User";
        if (!this.id) {
            return;
        }else{
            this.user$ = this._userService.getUsers();
            this.user$.subscribe(
                users => this.user = users.find(user => user.id === this.id)
            );
        }

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