import { CreateUserDto } from './dto/create-user.dto'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll()
  }

  @Get('active')
  async findActive() {
    return await this.userService.findAllByActive()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  @Post()
  async CreateUserDto(@Body() body: any) {
    return await this.userService.create(body)
  }
}
