import * as process from "process";

const PASSWORD_SALT: string = process.env.PASSWORD_SALT;
const NUMBER_OF_ROUNDS: number = +process.env.NUMBER_OF_ROUNDS || 8;

export const NUMBER_OF_ROUNDS_OR_SALT: string | number = PASSWORD_SALT || NUMBER_OF_ROUNDS;
