import { Module } from '@nestjs/common';
import AccessValidator from './AccessValidator';
import TokenService from './tokenService';

@Module({
  providers: [TokenService, AccessValidator],
  exports: [TokenService, AccessValidator]
})
export class TokenModule {}
