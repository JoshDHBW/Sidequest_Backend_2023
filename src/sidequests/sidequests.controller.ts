import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SidequestsService } from './sidequests.service';
import { CreateSidequestDto } from './dto/create-sidequest.dto';
import { UpdateSidequestDto } from './dto/update-sidequest.dto';

@Controller('sidequests')
export class SidequestsController {
  constructor(private readonly sidequestsService: SidequestsService) {}

  @Post()
  async create(@Body() createSidequestDto: CreateSidequestDto) {
    return this.sidequestsService.create(createSidequestDto);
  }

  @Get()
  findAll() {
    return this.sidequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sidequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSidequestDto: UpdateSidequestDto) {
    return this.sidequestsService.update(+id, updateSidequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sidequestsService.remove(+id);
  }
}
