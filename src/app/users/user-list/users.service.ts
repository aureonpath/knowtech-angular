import { Injectable } from '@angular/core';
import { USERS } from '../../../mocks'

import { User } from '../user';

@Injectable()
export class UserService {

    constructor() { }

    getUsers(): User[] {
        return USERS;
    }


}