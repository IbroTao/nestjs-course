import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    fetchUsers() {
        return [{username: 'Ahad', email: 'ahad@gmail.com'}];
    }
}
