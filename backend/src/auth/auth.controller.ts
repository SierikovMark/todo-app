import { Controller, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req, @Response() res) {
    const accessToken = this.authService.login(req.user);
    return res.status(200).json(accessToken);
  }
}
