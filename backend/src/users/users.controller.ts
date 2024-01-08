import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUrlDto, CreateUserDto, CreateUserLoginDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  ////////////////////////////////////////////////////////////////////////////////
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  ////////////////////////////////////////////////////////////////////////////////
  @Post('login')
  login(@Body() createUserDto: CreateUserLoginDto) {
    return this.usersService.login(createUserDto);
  }

  ////////////////////////////////////////////////////////////////////////////////
  @Post('urlshort')
  urlshort(@Body() createUrlDto: CreateUrlDto) {
    return this.usersService.urlShort(createUrlDto)
  }

  ////////////////////////////////////////////////////////////////////////////////
  @Get('fetchUrl/:urlData')
  fetchUrl(@Param('urlData') FetchUrlDto: string) {
    return this.usersService.fetchUrl(FetchUrlDto)
  }
  ////////////////////////////////////////////////////////////////////////////////

}
