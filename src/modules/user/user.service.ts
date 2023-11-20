import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async getAllUser() {
        let data = await this.userModel.find();
        return data;
    }

    async createUser(user: User) {
        const createdUser = await this.userModel.create(user);
        return createdUser;
    }

    async getUserById(id: string) {
        const user = await this.userModel.findById(id);
        console.log(user);
        return user;
    }

    async updateUserById(id: string, updateUser: UpdateUserDto): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUser);
        console.log(updateUser);
        return updatedUser;
    }

    async deleteUserById(id: string) {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        console.log(deletedUser);
        return deletedUser;
    }

}