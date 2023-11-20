import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends CreateUserDto {
}