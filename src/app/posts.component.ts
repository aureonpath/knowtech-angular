//Angular references
import {Component, OnInit} from '@angular/core';

//Components Reference
import {UsersComponent} from './users.component';
import {User} from './user';

// Services Reference
import {UserService} from './users.service';
import {PostService} from './posts.service';

@Component({
    selector: 'posts',
    template: `
        <h1>Posts Page</h1>

        <div class="row">
            <div class="col-md-6">
                <select class="form-control" (change)="reloadPost({userId: u.value})" #u>
                    <option value="">select user..</option>
                    <option *ngFor="let user of users" value={{user.id}}> 
                        {{user.name}} 
                    </option>
                </select>

                <spinner [visible]="postsLoading"></spinner>
                <ul class="list-group">
                    <li class="list-group-item" [class.active]="currentPost == post" 
                        *ngFor="let post of posts" (click)="select(post)">{{ post.title }}</li>
                </ul>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default" *ngIf="currentPost">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{ currentPost.title }} </h3>
                    </div>
                    <div class="panel-body"> {{ currentPost.body }} </div>
                    <hr>
                    <spinner [visible]="isLoadingComments"></spinner>
                    <div class="media" *ngFor="let comment of comments">
                        <div class="media-left">
                            <a href="#">
                            <img class="media-object img-circle" src="http://lorempixel.com/80/80/people?random={{ comment.id }}" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{ comment.name }}</h4>
                            {{comment.body}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    providers: [PostService, UserService]
})

export class PostsComponent implements OnInit {

    posts: any[] = [];
    users: User[] = [];
    postsLoading = true;
    isLoadingComments = true;
    currentPost: any;
    comments: any;

    constructor(private _postServices: PostService, private _userService: UserService) { }

    ngOnInit() {
        this.loadPosts();
        this.loadUsers();
    }

    private loadUsers() {
        this._userService.getUsers()
            .then(users => this.users = users);
    }
    private loadPosts(filter?: any) {
        this._postServices.getPosts(filter)
            .then(
            posts => {
                this.posts = posts;
                this.postsLoading = false;
            });
    }

    reloadPost(userId: string) {
        this.postsLoading = true;
        this.currentPost = null;
        this.loadPosts(userId);
    }

    select(post: any) {
        this.currentPost = post;
        this.isLoadingComments = true;

        this._postServices.getComments(post.id)
            .then(
            comments => {
                this.comments = comments;
                this.isLoadingComments = false;
            });
    }
}