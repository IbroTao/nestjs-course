import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {

  }



  @Post('create')
  @UsePipes(new ValidationPipe())
  createPost(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }

  @Get()
  getUsers() {
   return this.userService.fetchUsers(); 
  }

  // @Get('man')
  // getName() {
  //   console.log('man');
  //   return { name: 'man' };
  // }

  // @Get(':id/:postId')
  // getIds(@Param('id') id: string, @Param('postId') postId: string) {
  //   console.log(id, postId);
  //   return { id, postId };
  // }

  @Post('register')
  registerUser() {
    console.log('Registered');
  }

  @Get(':id')
  getId(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
