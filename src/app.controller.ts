/* eslint-disable */
import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get()
    findAll(): string {
        return "This action returns all cats"
    }

}
