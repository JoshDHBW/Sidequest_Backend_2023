import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SidequestsService } from './sidequests.service';
import { SidequestsController } from './sidequests.controller';
import { Sidequest, SidequestSchema } from 'src/schemas/sidequests.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sidequest.name, schema: SidequestSchema }])],
  controllers: [SidequestsController],
  providers: [SidequestsService]
})
export class SidequestsModule {}
