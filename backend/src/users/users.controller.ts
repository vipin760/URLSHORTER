import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUrlDto, CreateUserDto, CreateUserLoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Post('login')
  login(@Body() createUserDto:CreateUserLoginDto){
    return this.usersService.login(createUserDto);
  }
  @Post('urlshort')
  urlshort(@Body() createUrlDto:CreateUrlDto ){
    return this.usersService.urlShort(createUrlDto)
  }
 @Get('fetchUrl/:urlData')
 fetchUrl(@Param('urlData') FetchUrlDto:string){
 return this.usersService.fetchUrl(FetchUrlDto)
 }

  ////////////////////////////////////////////////////////////////////////////////
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  ////////////////////////////////////////////////////////////////////////////////

}
