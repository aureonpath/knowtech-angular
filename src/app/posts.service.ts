import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    private _url = "http://localhost:5000/posts";
    constructor(private _http: Http) { }

    getPosts(filter?: any): Promise<any[]> {
        var url = this._url;
        if (filter && filter.userId)
            url += "?userId=" + filter.userId;

        return this._http.get(url)
            .toPromise()
            .then(resp => resp.json() as any[]);
    }

    getComments(postId: string): Promise<any[]> {
        return this._http.get(this._url + "/" + postId + "/comments")
            .toPromise()
            .then(resp => resp.json() as any[]);
    }
}


