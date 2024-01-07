import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt"
import { PrismaService } from "src/prisma/prisma.service";

Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly prisma:PrismaService
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:process.env.JWT_SECRET
        })
    }

    async validate(payload:{name:string}){
        const user = await this.prisma.user.findFirst({where:{name:payload.name}})
        if(!user){
            throw new UnauthorizedException('Login first to access end poit')
        }
        return user
    }
}
export interface JwtPayload {  login: string;}