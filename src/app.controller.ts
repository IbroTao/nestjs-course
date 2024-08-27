/* eslint-disable */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get()
    findAll(): string {
        return "This action returns all apps"
    }

    @Post()
    create(): string {
        return "This action creates a new app"
    }

    // @Get('man')
    // getUsers(): string {
    //     return [
    //         { 
    //             username: "Ibrahim Taofeek", 
    //             email: "tao@gmail.com",
    //             posts: [
    //                 {
    //                     id: 1
    //                 }x
    //             ]
    //         }
    //     ]
    // }

    @Post
    create(): string {
        
    }
}
    