export interface ILoginUser{
    email:string;
    password:string;
}

export interface IRegisterUser{
    name:string;
    email:string;
    phone:string;
    password:string;
    cpassword:string;
}

export interface ILoginResonse{
    status:boolean;
    data?:string;
    message:string;
}

export interface IRegisterResponse{
    status:boolean;
    data?:string;
    message:string;
}