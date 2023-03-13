
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
   
    @IsEmail()
    email: string;  
    @MaxLength(30)
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
    @IsString()
    @IsNotEmpty()
    phone: string;
    @IsString()
    @IsNotEmpty()
    address: string;
    @IsString()
    @IsNotEmpty()
    description: string;
  }
