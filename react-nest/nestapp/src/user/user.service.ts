import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return 'hello world updated last test!';
  }
}
