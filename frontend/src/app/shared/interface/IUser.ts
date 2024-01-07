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
    data:string;
    message:string;
}

export interface IRegisterResponse{
    status:boolean;
    data?:string;
    message:string;
}
export interface IUrlShortResponse{
    status:boolean;
    data:string;
    message:string;
}

export interface IUrlData{
    urlFull:string;
}

export interface IListUrl{
    id?:string;
    full:string;
    short: string;
    clicks:number;  
}
export interface IListUrlResponse{
    status:boolean;
    data:IListUrl[];
    message:string;
}
export interface IFetchUrlResponse{
    status:boolean;
    data:IListUrl;
    message:string;
} 