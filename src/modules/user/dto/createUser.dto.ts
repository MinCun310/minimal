import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    userEmail: string;

    @ApiProperty()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    follower?: number;

    @ApiProperty()
    following?: number;

    @ApiProperty()
    friend?: string[];

}