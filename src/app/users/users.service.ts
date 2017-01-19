import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import { USERS } from '../../mocks';

import { User } from './user';

@Injectable()
export class UserService {

    private _url = "http://localhost:5000/users";
    private _badUrl = "http://localhost:5000/bad-url";

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        let request = this.http.get(this._url);

        return request.map(response => response.json());
    }

    getUsersByName(userName: string): Observable<User[]> {
        console.log("username", userName)
        let request = this.http.get(this._url + "?name_like=" + userName);

        return request.map(response => response.json());
    }

    getUserById(id: string): Observable<User> {
        console.log("id", id)
        let request = this.http.get(this._url + "/" + id);
        
        return request.map(response => response.json());
    }

    updateUser(user: User, userId: string): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });

        let request = this.http.put(this._url + "/" + userId, JSON.stringify(user), options)
        console.log("update request", request);


        return request.map(response => response.json());
    }

    deleteUser(userId: string): Observable<User> {
        let request = this.http.delete(this._url + "/" + userId);
        // let request = this.http.delete(this._badUrl + "/" + userId);
        console.log("delete request", request);

        return request.map(response => response.json());
    }

    addUser(newUser: User) {
        USERS.push(newUser);
    }


}
