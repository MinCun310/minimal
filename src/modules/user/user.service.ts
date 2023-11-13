import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/createUser.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) { }
    getUser(): string {
        return 'user A';
    }

    async createUser(createUserDto: CreateUserDto) {
        const createdUser = await this.userModel.create(createUserDto);
        return createdUser;
    }
}