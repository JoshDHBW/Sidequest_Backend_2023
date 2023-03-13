
import { IsDate, IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateSidequestDto {

    @IsNotEmpty()
    status: string;
    @IsNotEmpty()
    negotiable: boolean;

    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    location: [];
    @IsNotEmpty()
    @IsString()
    author_id: string;

    customer_id: string;
}
