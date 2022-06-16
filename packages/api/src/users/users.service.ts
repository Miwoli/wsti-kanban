import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(login: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { login } })
  }

  async save(user: CreateUserDto): Promise<User> {
    const userInstance = this.userRepository.create(user)
    return this.userRepository.save(userInstance)
  }
}
