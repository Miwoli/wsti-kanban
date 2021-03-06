import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { User } from 'src/users/entities/user.entity'
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'password',
    })
  }

  async validate(login: string, password: string): Promise<Partial<User>> {
    const user = await this._authService.validateUser(login, password)
    if (!user) throw new UnauthorizedException()

    return user
  }
}
