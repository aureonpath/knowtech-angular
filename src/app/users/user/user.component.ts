import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../users.service';

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
    
    constructor(private _service: UserService) { }
 
    setUserAsFavorite(): void {
        this.userInfo.isFavorited = !this.userInfo.isFavorited;
        let user$ = this._service.updateUser(this.userInfo, this.userInfo.id);
        user$.subscribe(
            userResponse => this.userInfo = userResponse
        )
        this.setFavoriteClicked.emit(this.userInfo.isFavorited);
    }
 
    deleteUser(): void {
        let deleteUser$ = this._service.deleteUser(this.userInfo.id);
        let reloadUsers$ = this._service.getUsers();

        let deleteAndReload$ = Observable.concat(
            deleteUser$,
            reloadUsers$
        );

        deleteAndReload$.subscribe(
            () => {},
            (error) => {console.log("error on ddeleteAndReload$.subscribe()", error)},
            () => {
                console.log("concat completed", reloadUsers$)
                this.deleteUserClicked.emit(reloadUsers$);}
        )
        
    }
}