import { IsEmail, IsNotEmpty, IsBoolean, IsString } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsBoolean()
  isActive: boolean
}
