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