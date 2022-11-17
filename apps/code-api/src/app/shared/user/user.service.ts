import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { EUser } from '../../../entities/user.entity'
import * as agron2 from 'argon2'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(EUser)
    private usersRepository: MongoRepository<EUser>
  ) {}

  async findAll() {
    const users = await this.usersRepository.find()
    return users.map((user) => {
      const { hash, ...result } = user
      return result
    })
  }

  async findOne(id: any) {
    return await this.usersRepository.findOne(id)
  }

  async findAllByActive() {
    const users = await this.usersRepository.find({
      where: {
        isActive: true,
      },
    })
    return users.map((user) => {
      const { hash, ...result } = user
      return result
    })
  }

  async create(data: CreateUserDto) {
    const { password, email, firstName, lastName, isActive } = data
    const hash = await agron2.hash(password)
    const usernameTransformToEmail = email.split('@')[0]
    return await this.usersRepository.save({
      firstName,
      lastName,
      isActive,
      email,
      hash,
      username: usernameTransformToEmail,
    })
  }
}
