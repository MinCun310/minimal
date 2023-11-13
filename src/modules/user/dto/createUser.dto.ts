import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    userEmail?: string;

    @ApiProperty()
    @IsNotEmpty()
    userName?: string;
}