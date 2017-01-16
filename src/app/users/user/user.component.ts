import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../users.service';
import { SharedService } from '../../shared.service';

@Component({
    selector: 'user-info',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: []
})


export class UserComponent {
    reloadedList: User[];

    @Input() userInfo: User;
    @Output() setFavoriteClicked = new EventEmitter<boolean>();
    @Output() deleteUserClicked = new EventEmitter<Observable<User[]>>();

    constructor(private _service: UserService, private _sharedService: SharedService) { }

    setUserAsFavorite(): void {
        this.userInfo.isFavorited = !this.userInfo.isFavorited;
        let updatedUser$ = this._service.updateUser(this.userInfo, this.userInfo.id);

        this._sharedService.currentSubscription = updatedUser$.subscribe(
            userResponse => {
                console.log("updated user", userResponse); 
                this.userInfo = userResponse;
            },
            (error) => { console.log("error on updatedUser.subscribe()", error) },
            () => {
                this.setFavoriteClicked.emit(this.userInfo.isFavorited);
            }
        )
    }

    deleteUser(): void {
        let deleteUser$ = this._service.deleteUser(this.userInfo.id);
        let reloadUsers$ = this._service.getUsers();

        let deleteAndReload$ = Observable.concat(
            deleteUser$,
            reloadUsers$
        );

        this._sharedService.currentSubscription = deleteAndReload$.subscribe(
            whatsHappening => {console.log("Whats happening here?", whatsHappening)},
            (error) => {console.log("error on deleteAndReload$.subscribe()", error)},
            () => {
                console.log("concat completed", reloadUsers$)
                this.deleteUserClicked.emit(reloadUsers$);}
        )

    }
}