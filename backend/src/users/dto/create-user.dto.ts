import { HttpStatus } from "@nestjs/common";

export class CreateUserDto {
    name:string;
    email:string;
    phone?:string;
    password:string;
}

export class CreateUserLoginDto{
 email:string;
 password:string;
}

export class CreateUrlDto{
    urlFull:string
}
export class ListUrl{
    id?:string;
    full:string;
    short: string;
    clicks:number;  
}
export class ListUrlResponse{
    status:boolean;
    data:ListUrl;
    message:string;
    statusCode?:HttpStatus
}