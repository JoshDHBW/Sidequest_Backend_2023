import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSidequestDto } from './dto/create-sidequest.dto';
import { UpdateSidequestDto } from './dto/update-sidequest.dto';
import { Sidequest, SidequestDocument } from 'src/schemas/sidequests.schema';
import { validStates, validStatesObj } from 'src/sidequests/validStates';
import {Model} from 'mongoose';

@Injectable()
export class SidequestsService {

  constructor(@InjectModel(Sidequest.name) private sidequestModel: Model<SidequestDocument>) {}

  async create(createSidequestDto: CreateSidequestDto) {
    return new this.sidequestModel(createSidequestDto).save();
  }

  findAll() {
    return `This action returns all sidequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sidequest`;
  }

  update(id: number, updateSidequestDto: UpdateSidequestDto) {
    return `This action updates a #${id} sidequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} sidequest`;
  }
}
