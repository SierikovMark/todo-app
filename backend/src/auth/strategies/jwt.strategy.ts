import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from "../../users/users.service";
import { jwtOptions } from "../../config/secrets";
import { UserDocument } from "../../users/entities/user.entity";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService,) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtOptions.secret,
        });
    }

    validate(payload: { subject: string }): Promise<UserDocument> {
        return this.usersService.findOne(payload.subject);
    }
}
