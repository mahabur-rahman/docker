import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return 'hello user updated with docker!';
  }
}
