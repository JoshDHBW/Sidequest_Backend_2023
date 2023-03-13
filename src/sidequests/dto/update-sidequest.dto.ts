import { PartialType } from '@nestjs/mapped-types';
import { CreateSidequestDto } from './create-sidequest.dto';

export class UpdateSidequestDto extends PartialType(CreateSidequestDto) {}
