import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import e from "express";
import { IUserEntity } from "./entities/user.entity";
import { PartialUserDto } from "./services/dto/partialUserInput.dto";
import { UserDto } from "./services/dto/userInput.dto";
import { UserService } from "./services/user.service";

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getAllUser() {
    return await this.service.getAllUsers();
  }

  @Get(":id")
  async getUserById(@Param("id") userId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(userId);
    } catch (err) {
      console.log(err);
    }
  }

  @Post()
  async createUser(
    @Body() { cpf, email, password, name, role }: UserDto
  ): Promise<IUserEntity> {
    try {
      return await this.service.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //aqui nao estou usando o id porque o meu partial userdto ja tem id entao n precisa passar ele

  @Patch()
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(":id")
  async deleteUserById(@Param("id") userId: string): Promise<string> {
    try {
      const userIsDeleted = await this.service.deleteUserById(userId);
      if (userIsDeleted) {
        return "User deleted sucessfully";
      } else {
        return "User not found";
      }
    } catch (err) {
      console.log(err);
    }
  }
}
