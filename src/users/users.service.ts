import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Res, HttpStatus }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/users.interface';
import {Model} from 'mongoose';

export class UsersService {
  constructor(    @InjectModel(User.name) private readonly userModel: Model<User>,) {}
  
 
  public async create(
    createUserDto: CreateUserDto,
  ): Promise<IUser> {
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
