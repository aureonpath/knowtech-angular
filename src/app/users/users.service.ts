import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs'
import { USERS } from '../../mocks'

import { User } from './user';

@Injectable()
export class UserService {

    private _url = "http://localhost:5000/users";
    // private _url = "http://localhost:5000/bad-url";

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        let request = this.http.get(this._url);
        console.log("request", request);

        request.subscribe(
            response => console.log("response of request subscribe", response),
            (error) => {console.log("error of request subscribe", error)},
            () => console.log("completed request")
        );

        let mapped = request.map(response => response.json());

        mapped.subscribe(
            response => console.log("response of mapped subscribe", response),
            (error) => {console.log("error of mapped subscribe", error)},
            () => console.log("completed mapped")
        );

    

        return request.map(response => response.json());
    }

    updateUser(user: User, userId: string):Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });

        let request = this.http.put(this._url + "/" + userId, JSON.stringify(user), options)
        console.log("update request", request);

        request.subscribe(
            response => console.log("response of update request subscribe", response),
            (error) => {console.log("error of update request subscribe", error)},
            () => console.log("completed update request")
        );

        let mapped = request.map(response => response.json());

        mapped.subscribe(
            response => console.log("response of update mapped subscribe", response),
            (error) => {console.log("error of update mapped subscribe", error)},
            () => console.log("completed update mapped")
        );

        return request.map(response => response.json());
    }

    deleteUser(userId: string):Observable<Response>{
        let request = this.http.delete(this._url + "/" + userId)
        console.log("delete request", request);

        request.subscribe(
            response => console.log("response of delete request subscribe", response),
            (error) => {console.log("error of delete request subscribe", error)},
            () => console.log("completed delete request")
        );

        let mapped = request.map(response => response.json());

        mapped.subscribe(
            response => console.log("response of delete mapped subscribe", response),
            (error) => {console.log("error of delete mapped subscribe", error)},
            () => console.log("completed delete mapped")
        );

        return request.map(response => response.json());
    }
    
    addUser(newUser: User){
        USERS.push(newUser);
    }


}