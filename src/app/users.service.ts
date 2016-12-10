import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {
    private _url = "http://localhost:5000/users";

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this._url)
            .toPromise()
            .then(resp => resp.json() as User[])
            .catch(this.handleError);
    }

    getUser(userId: string): Promise<User> {
        return this.getUsers().then((users => {
            var user = users.find(user => user.id == userId);
            return user;
        }))
    }

    editUser(user: any, userId: string): Promise<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        user = JSON.stringify(user);
        return this.http.put(this._url + "/" + userId, user, options)
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    addUser(user: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        user = JSON.stringify(user);
        return this.http.post(this._url, user, options)
            .toPromise()
            .then(resp => resp.json())
            .catch(this.handleError);
    }

    deleteUser(userId: string) {
        return this.http.delete(this._url + "/" + userId)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}