import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {

    constructor() { }

    getUsers(): any {
        return [];
    }
}