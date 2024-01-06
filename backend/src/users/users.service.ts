import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

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
