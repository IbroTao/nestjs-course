import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';

@Controller('users')
export class UsersController {
  @Post('create')
  @UsePipes(new ValidationPipe())
  createPost(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }

  @Get()
  @HttpCode(200)
  getUsers(@Query('sortedBy') sortedBy: string) {
    console.log(sortedBy);
    return [{ name: 'man', email: 'man@gmail.com' }];
  }

  @Get('/man')
  getName() {
    console.log('man');
    return { name: 'man' };
  }

  @Get(':id/:postId')
  getIds(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id, postId);
    return { id, postId };
  }

  @Post('register')
  registerUser() {
    console.log('Registered');
  }

  @Get(':id') 
  getId(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return {id};
  }
}
