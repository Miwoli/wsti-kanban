import { Controller, Post, UseGuards, Body } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { User } from 'src/users/entities/user.entity'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'
import { Public } from './public.decorator'

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: Partial<User>) {
    return this._authService.login(user)
  }

  @Public()
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this._authService.register(user)
  }
}
