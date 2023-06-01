import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import * as bcrypt from 'bcrypt';
import { UserDocument } from "../users/entities/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
  ) {}

  async verifyUser(username, password) {
    if (password == null) {
      return null;
    }

    const user = await this.usersService.findOneByUsername(username);

    if (!user) {
      return null;
    }

    const passwordsMatched = await bcrypt.compare(password, user.password);

    if (!passwordsMatched) {
      return null;
    }

    return {
      id: user.id,
      username: user.username
    };
  }


  login(user: Omit<UserDocument, 'password'> | null) {
    if (user == null) {
      throw new Error('Invalid User');
    }

    return {
      access_token: this.jwtService.sign({
        subject: user.id,
      }),
    };
  }

}
