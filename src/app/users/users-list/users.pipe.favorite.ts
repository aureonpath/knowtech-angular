import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../user';

@Pipe({ name: 'favoritedUsers', pure:false })
export class FavoritedUsersPipe implements PipeTransform {
  transform(allUsers: User[], isActive: boolean) {
    return isActive ? allUsers.filter(user => user.isFavorited) : allUsers;
  }
}