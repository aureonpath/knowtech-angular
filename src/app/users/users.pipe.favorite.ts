import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user';

@Pipe({ name: 'favoritedUsers' })
export class FavoritedUsersPipe implements PipeTransform {
  transform(allUsers: User[]) {
    return allUsers.filter(user => user.isFavorited);
  }
}