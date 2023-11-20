import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './schema/user.schema';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('/getAll')
    async getUser(): Promise<User[]> {
        return this.userService.getAllUser();
    }

    @Post('/create')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Put('/:id')
    async updateUserById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.updateUserById(id, updateUserDto);
    }

    @Delete('/:id')
    async deleteUserById(@Param('id') id: string) {
        return this.userService.deleteUserById(id);
    }

}