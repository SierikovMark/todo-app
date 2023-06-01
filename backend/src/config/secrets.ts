import * as process from "process";
import { JwtModuleOptions } from "@nestjs/jwt";

const PASSWORD_SALT: string = process.env.PASSWORD_SALT;
const NUMBER_OF_ROUNDS: number = +process.env.NUMBER_OF_ROUNDS || 8;

export const NUMBER_OF_ROUNDS_OR_SALT: string | number = PASSWORD_SALT || NUMBER_OF_ROUNDS;


export const jwtOptions: JwtModuleOptions = {
    secret: process.env.JWT_SECRET || 'jwt_secret'
};
