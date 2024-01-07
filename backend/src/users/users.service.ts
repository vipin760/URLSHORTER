import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateUrlDto, CreateUserDto, CreateUserLoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import shortId from 'shortid'

@Injectable()
export class UsersService {
  constructor (private prisma :PrismaService){}

async create(createUserDto: CreateUserDto) {
  try {
    const emailExist = await this.prisma.user.findUnique({ where: { email: createUserDto.email } });

    if (!emailExist) {
      const PasswordHash = await bcrypt.hash(createUserDto.password, 10);
      const userSave = await this.prisma.user.create({
        data: { name: createUserDto.name, email: createUserDto.email, phone: createUserDto.phone, password: PasswordHash },
      });

      if (userSave) {
        return { status: true, message: 'Registration completed successfully' };
      } else {
        return { status: false, message: 'Data cannot be added successfully', statusCode: HttpStatus.BAD_REQUEST };
      }
    } else {
      return { status: false, message: 'Email already exists', statusCode: HttpStatus.CONFLICT };
    }
  } catch (error) {
    throw new HttpException({ status: false, message: 'Internal server down' }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

async login(createUserDto:CreateUserLoginDto){
  try {
    const userData = await this.prisma.user.findUnique({where:{email:createUserDto.email}})
    if(userData ){
      const passwordMatch = await bcrypt.compare(createUserDto.password,userData.password)
      if(passwordMatch){
        const token = jwt.sign({id:userData.id,email:userData.email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRED})
        return { status:true, data:token, message:"Login success", statusCode: HttpStatus.OK }
      }else{
        return { status:false, data:null, message:"invalid password", statusCode: HttpStatus.UNAUTHORIZED }
      }
    }else{
      return { status:false, data:null, message:"user not found", statusCode: HttpStatus.UNAUTHORIZED }
    }
    
  } catch (error) {
    throw new HttpException({ status: false, message: 'Internal server down' }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

async urlShort(createUrlDto:CreateUrlDto){
  try {
     const shortUrl = shortId.generate();
    
    const saveUrl = await this.prisma.Url.create({
      data:{full:createUrlDto.urlFull, short:shortUrl,clicks:0}
    })
    if(saveUrl){
      return {status:true, message:"url shoted successfully", statusCode:HttpStatus.OK}
    }
   
    
  } catch (error) {
    throw new HttpException({ status: false, message: 'Internal server down' }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
