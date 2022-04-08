import { Injectable } from '@nestjs/common'
import { User } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/dto/create-user.dto'

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<Partial<User>> {
    const user = await this._usersService.findOne(login)
    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch) {
      const { password, ...result } = user
      return result
    }

    return null
  }

  async login(user: Partial<User>) {
    const payload = { login: user.login, id: user.id }
    return {
      access_token: this._jwtService.sign(payload),
    }
  }

  async register(userDto: CreateUserDto): Promise<User> {
    const { login, password } = userDto
  }
}
